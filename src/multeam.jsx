import { useState, useEffect } from "react";

// ── TOKENS ──────────────────────────────────────────────────
const T = {
  bg: "#F0F1F6", card: "#FFFFFF", brand: "#E63946", green: "#2DC653",
  yellow: "#FFCC00", navy: "#1D3557", text: "#1D1D1F", sub: "#86868B",
  border: "#E5E5EA", inputBg: "#F8F8FA",
};

// ── SUPABASE ─────────────────────────────────────────────────
const SB_URL = "https://syakniwyvcfdqsrwsalk.supabase.co";
const SB_KEY = "sb_publishable_MRMHqVQ-key1c5kf7UOLUA_rwyu85BI";

const api = {
  h(tok) { return { 'apikey':SB_KEY, 'Authorization':`Bearer ${tok||SB_KEY}`, 'Content-Type':'application/json', 'Prefer':'return=representation' }; },
  async get(p,tok)      { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async post(p,b,tok)   { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async patch(p,b,tok)  { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'PATCH',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async del(p,tok)      { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'DELETE',headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); },
  async upsert(p,b,tok) { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:{...this.h(tok),'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async signIn(email,password) { const r=await fetch(`${SB_URL}/auth/v1/token?grant_type=password`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.error); return d; },
  async signUp(email,password,name) { const r=await fetch(`${SB_URL}/auth/v1/signup`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password,data:{name}})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.msg||'Erro'); return d; },
};

// ── DATA ADAPTERS ────────────────────────────────────────────
const mk = s => s ? s.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '??';
const aTeam = t => ({ id:t.id, name:t.name, emoji:t.emoji||'⚽', color:t.color||'#1D3557', season:t.season||'2025/26', inviteCode:t.invite_code, country:t.country, sport:t.sport, currency:t.currency, city:t.city, postal:t.postal });
const aMember = m => ({ id:m.id, teamId:m.team_id, userId:m.user_id, role:m.role, name:m.profiles?.name||'Utilizador', initials:mk(m.profiles?.name||'U'), position:m.position||m.profiles?.position||'Jogador', phone:m.profiles?.phone||'', birthday:m.profiles?.birthday||'' });
const aFine = f => ({ id:f.id, teamId:f.team_id, memberId:f.member_id, amount:Number(f.amount), reason:f.reason||'', emoji:f.emoji||'🟥', paid:f.paid, date:f.created_at?.split('T')[0]||'' });
const aFineType = ft => ({ id:ft.id, teamId:ft.team_id, name:ft.name, amount:Number(ft.amount), emoji:ft.emoji||'🟥' });
const aExpense = e => ({ id:e.id, teamId:e.team_id, description:e.description, amount:Number(e.amount), date:e.created_at?.split('T')[0]||'' });
const aTraining = t => ({ id:t.id, teamId:t.team_id, type:t.type||'treino', date:t.date||'', time:(t.time||'').slice(0,5), location:t.location||'', notes:t.notes||'', recurring:t.recurring||false, days:t.days||[], opponent:t.opponent||'', homeAway:t.home_away||'casa', squad:t.squad||[], createdBy:t.created_by });

const DEFAULT_FINE_TYPES = [
  {name:"Atraso",amount:5,emoji:"⏰"},{name:"Falta ao treino",amount:10,emoji:"🏃"},
  {name:"Sem equipamento",amount:3,emoji:"👕"},{name:"Cartão amarelo",amount:7,emoji:"🟨"},{name:"Cartão vermelho",amount:15,emoji:"🟥"},
];

// ── MOCK DATA ────────────────────────────────────────────────
const initUser = { id: 100, name: "Patricio", initials: "PA", position: "Avançado", phone: "+41 79 888 4384", birthday: "1987-05-15", email: "patricio@multeam.app" };
const initTeams = [
  { id: 1, name: "FC Selzach",       emoji: "⚽", color: "#1D3557", season: "2024/25", inviteCode: "FCZ-2025" },
  { id: 2, name: "Futsal Solothurn", emoji: "🥅", color: "#2A7D4F", season: "2024/25", inviteCode: "FSO-7X3K" },
  { id: 3, name: "Beach FC Biel",    emoji: "🏖️", color: "#C77B2A", season: "Verão 25", inviteCode: "BFC-BIEL" },
];
const initMembers = [
  { id: 1, teamId: 1, userId: 100, name: "Patricio", initials: "PA", position: "Avançado", phone: "+41 79 888 4384", birthday: "1987-05-15", role: "admin" },
  { id: 2, teamId: 1, userId: 2,   name: "Marco S.", initials: "MS", position: "Médio",       phone: "+41 76 111 2222", birthday: "1990-03-22", role: "player" },
  { id: 3, teamId: 1, userId: 3,   name: "João P.",  initials: "JP", position: "Defesa",      phone: "+41 78 333 4444", birthday: "1992-07-10", role: "player" },
  { id: 4, teamId: 1, userId: 4,   name: "Rui A.",   initials: "RA", position: "Guarda-redes",phone: "+41 79 555 6666", birthday: "1988-11-30", role: "player" },
  { id: 5, teamId: 1, userId: 5,   name: "Carlos M.",initials: "CM", position: "Avançado",    phone: "+41 77 777 8888", birthday: "1995-01-15", role: "admin"  },
  { id: 6, teamId: 2, userId: 100, name: "Patricio", initials: "PA", position: "Pivot",       phone: "+41 79 888 4384", birthday: "1987-05-15", role: "player" },
  { id: 7, teamId: 2, userId: 7,   name: "Pedro L.", initials: "PL", position: "Ala",         phone: "+41 76 222 3333", birthday: "1993-06-18", role: "admin"  },
  { id: 8, teamId: 2, userId: 8,   name: "Diogo F.", initials: "DF", position: "Guarda-redes",phone: "+41 78 444 5555", birthday: "1991-09-05", role: "player" },
  { id: 9, teamId: 2, userId: 9,   name: "Bruno K.", initials: "BK", position: "Defesa",      phone: "+41 79 666 7777", birthday: "1994-12-20", role: "player" },
  { id:10, teamId: 3, userId: 100, name: "Patricio", initials: "PA", position: "Avançado",    phone: "+41 79 888 4384", birthday: "1987-05-15", role: "admin"  },
  { id:11, teamId: 3, userId: 11,  name: "Nuno T.",  initials: "NT", position: "Médio",       phone: "+41 76 888 9999", birthday: "1989-04-25", role: "player" },
  { id:12, teamId: 3, userId: 12,  name: "André R.", initials: "AR", position: "Defesa",      phone: "+41 77 000 1111", birthday: "1996-08-12", role: "player" },
];
const initFineTypes = [
  { id:1, teamId:1, name:"Atraso",         amount:5,  emoji:"⏰" },
  { id:2, teamId:1, name:"Falta ao treino",amount:10, emoji:"🏃" },
  { id:3, teamId:1, name:"Sem equipamento",amount:3,  emoji:"👕" },
  { id:4, teamId:1, name:"Cartão amarelo", amount:7,  emoji:"🟨" },
  { id:5, teamId:1, name:"Cartão vermelho",amount:15, emoji:"🟥" },
  { id:6, teamId:2, name:"Atraso",         amount:5,  emoji:"⏰" },
  { id:7, teamId:2, name:"Falta ao jogo",  amount:20, emoji:"🚫" },
  { id:8, teamId:2, name:"Cartão vermelho",amount:15, emoji:"🟥" },
  { id:9, teamId:3, name:"Atraso",         amount:2,  emoji:"⏰" },
  { id:10,teamId:3, name:"Falta ao torneio",amount:10,emoji:"🏖️" },
];
const initFines = [
  { id:1, teamId:1, memberId:2, amount:5,  reason:"15 min de atraso ao treino",   emoji:"⏰", paid:false, date:"2025-07-20" },
  { id:2, teamId:1, memberId:3, amount:10, reason:"Faltou sem aviso prévio",       emoji:"🏃", paid:true,  date:"2025-07-18" },
  { id:3, teamId:1, memberId:4, amount:7,  reason:"Cartão no jogo vs Grenchen",    emoji:"🟨", paid:false, date:"2025-07-15" },
  { id:4, teamId:1, memberId:2, amount:15, reason:"Expulso vs Biel",               emoji:"🟥", paid:false, date:"2025-07-12" },
  { id:5, teamId:1, memberId:5, amount:3,  reason:"Esqueceu as chuteiras",         emoji:"👕", paid:true,  date:"2025-07-10" },
  { id:6, teamId:2, memberId:8, amount:5,  reason:"10 min de atraso",              emoji:"⏰", paid:false, date:"2025-07-19" },
  { id:7, teamId:2, memberId:9, amount:15, reason:"Vermelho no torneio cantonal",  emoji:"🟥", paid:false, date:"2025-07-14" },
  { id:8, teamId:2, memberId:7, amount:20, reason:"Faltou ao jogo sem avisar",     emoji:"🚫", paid:true,  date:"2025-07-08" },
  { id:9, teamId:3, memberId:11,amount:2,  reason:"Atrasado 20 min ao torneio",    emoji:"⏰", paid:false, date:"2025-07-21" },
];
const initExpenses = [
  { id:1, teamId:1, description:"Jantar de equipa",  amount:45, date:"2025-06-30" },
  { id:2, teamId:1, description:"Bola nova treino",  amount:25, date:"2025-07-05" },
  { id:3, teamId:2, description:"Coletes de treino", amount:30, date:"2025-07-01" },
  { id:4, teamId:3, description:"Bebidas torneio",   amount:18, date:"2025-07-20" },
];
const DAYS_PT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const initTrainings = [
  { id:1, teamId:1, type:"treino",    recurring:false, date:"2025-07-24", time:"19:30", location:"Campo Principal, Selzach",  notes:"Finalização e cruzamentos", createdBy:100 },
  { id:2, teamId:1, type:"recorrente",recurring:true,  days:[2,4],        time:"19:30", location:"Campo Principal, Selzach",  notes:"Treino semanal regular",    createdBy:100 },
  { id:3, teamId:1, type:"jogo",      recurring:false, date:"2025-07-27", time:"15:00", location:"Campo Municipal, Grenchen", notes:"Campeonato cantonal", opponent:"FC Grenchen", homeAway:"fora", squad:[1,2,3,4,5], createdBy:100 },
  { id:4, teamId:1, type:"treino",    recurring:false, date:"2025-07-07", time:"19:30", location:"Campo Principal, Selzach",  notes:"Treino pré-época",          createdBy:100 },
  { id:5, teamId:2, type:"treino",    recurring:false, date:"2025-07-25", time:"20:00", location:"Pavilhão Solothurn",        notes:"Táticas de defesa",         createdBy:7 },
  { id:6, teamId:2, type:"jogo",      recurring:false, date:"2025-07-26", time:"16:00", location:"Pavilhão Solothurn",        notes:"Taça distrital", opponent:"Futsal Berna", homeAway:"casa", squad:[6,7,8,9], createdBy:7 },
];

// presences[trainingId][memberId] = 'present' | 'absent'
const initPresences = {
  3: { 1:"present", 2:"present", 3:"absent", 4:"present" },
  6: { 6:"present", 7:"present", 8:"absent" },
};

// ── HELPERS ──────────────────────────────────────────────────
const isPast = d => new Date(d + "T23:59:59") < new Date();
const fmtDate = d => { if (!d) return "—"; const dt = new Date(d + "T00:00:00"); return dt.toLocaleDateString("pt-PT", { day:"2-digit", month:"long", year:"numeric" }); };
const age = d => d ? Math.floor((new Date() - new Date(d)) / (365.25*24*3600*1000)) : null;

const Avatar = ({ initials, color = T.navy, size = 38 }) => (
  <div style={{ width:size, height:size, borderRadius:size/2, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:size*0.33, flexShrink:0, letterSpacing:-0.5 }}>{initials}</div>
);
const Badge = ({ label, color }) => (
  <span style={{ display:"inline-block", padding:"3px 8px", borderRadius:6, background:`${color}22`, color, fontSize:11, fontWeight:700 }}>{label}</span>
);

// Professional role badges with SVG icons
const ShieldIcon = ({ size=12, color="#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
  </svg>
);
const PersonIcon = ({ size=12, color="#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
);

const RoleBadge = ({ role, teamColor, size="sm" }) => {
  const isAdmin = role === "admin";
  const bg = isAdmin ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)";
  const border = isAdmin ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.15)";
  const p = size === "lg" ? "5px 12px" : "3px 8px";
  const fs = size === "lg" ? 13 : 11;
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:bg, border, borderRadius:7, padding:p }}>
      {isAdmin ? <ShieldIcon size={fs} color="#fff" /> : <PersonIcon size={fs} color="rgba(255,255,255,0.7)" />}
      <span style={{ color:isAdmin?"#fff":"rgba(255,255,255,0.75)", fontSize:fs, fontWeight:700, letterSpacing:0.3 }}>
        {isAdmin ? "Admin" : "Jogador"}
      </span>
    </div>
  );
};

// Standalone admin badge for headers (dark background version)
const AdminHeaderBadge = ({ teamColor }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", borderRadius:8, padding:"4px 10px", backdropFilter:"blur(4px)", marginTop:2 }}>
    <ShieldIcon size={12} color="#fff" />
    <span style={{ color:"#fff", fontSize:12, fontWeight:700, letterSpacing:0.5 }}>Admin</span>
  </div>
);

// Role badge on light background (for lists/cards)
const RoleBadgeLight = ({ role }) => {
  const isAdmin = role === "admin";
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:isAdmin?"#1D355712":"#86868B12", border:`1px solid ${isAdmin?"#1D355730":"#86868B30"}`, borderRadius:6, padding:"3px 8px" }}>
      {isAdmin ? <ShieldIcon size={11} color="#1D3557" /> : <PersonIcon size={11} color="#86868B" />}
      <span style={{ color:isAdmin?"#1D3557":"#86868B", fontSize:11, fontWeight:700 }}>{isAdmin?"Admin":"Jogador"}</span>
    </div>
  );
};
const Chip = ({ active, color, onClick, children }) => (
  <button onClick={onClick} style={{ padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer", background:active ? color : T.card, color:active ? "#fff" : T.sub, fontWeight:600, fontSize:13, fontFamily:"inherit" }}>{children}</button>
);
const Sec = ({ label }) => (
  <p style={{ margin:"18px 0 8px", fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>{label}</p>
);

// ── SHARED BOTTOM SHEET ───────────────────────────────────────
const Sheet = ({ onClose, title, children }) => (
  <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"flex-end", zIndex:200 }}
    onClick={e => e.target === e.currentTarget && onClose()}>
    <div style={{ background:T.card, borderRadius:"22px 22px 0 0", padding:"0 20px 36px", width:"100%", boxSizing:"border-box", maxHeight:"85vh", overflowY:"auto" }}>
      <div style={{ width:36, height:4, borderRadius:2, background:T.border, margin:"12px auto 20px" }} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
        <h3 style={{ margin:0, fontSize:20, fontWeight:800 }}>{title}</h3>
        <button onClick={onClose} style={{ background:T.bg, border:"none", borderRadius:10, width:32, height:32, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
      </div>
      {children}
    </div>
  </div>
);
const FL = ({ children }) => <p style={{ margin:"0 0 6px", fontWeight:700, fontSize:12, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>{children}</p>;
const FI = (props) => <input style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`1.5px solid ${T.border}`, fontSize:15, background:T.inputBg, boxSizing:"border-box", outline:"none", fontFamily:"inherit", marginBottom:14 }} {...props} />;
const FSel = ({ value, onChange, children }) => (
  <select value={value} onChange={onChange} style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`1.5px solid ${T.border}`, fontSize:15, background:T.inputBg, boxSizing:"border-box", outline:"none", fontFamily:"inherit", marginBottom:14 }}>
    {children}
  </select>
);
const PrimaryBtn = ({ onClick, disabled, color = T.brand, children }) => (
  <button onClick={onClick} disabled={disabled} style={{ width:"100%", padding:"15px", borderRadius:14, border:"none", background:disabled ? T.border : color, color:"#fff", fontSize:16, fontWeight:800, cursor:disabled ? "default" : "pointer", fontFamily:"inherit", marginTop:4 }}>
    {children}
  </button>
);

// ── MODALS ────────────────────────────────────────────────────

const AddFineModal = ({ team, members, fineTypes, myUserId, onAdd, onClose }) => {
  const tm = members.filter(m => m.teamId === team.id && m.userId !== myUserId);
  const tft = fineTypes.filter(ft => ft.teamId === team.id);
  const [mid, setMid] = useState(""); const [ftid, setFtid] = useState(""); const [reason, setReason] = useState("");
  const sft = tft.find(ft => ft.id === Number(ftid));
  return (
    <Sheet title="🟥 Nova multa" onClose={onClose}>
      <FL>Jogador</FL>
      <FSel value={mid} onChange={e => setMid(e.target.value)}>
        <option value="">Selecionar jogador...</option>
        {tm.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
      </FSel>
      <FL>Tipo de multa</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
        {tft.map(ft => (
          <button key={ft.id} onClick={() => setFtid(String(ft.id))} style={{ padding:"10px 14px", borderRadius:12, border:`2px solid ${ftid===String(ft.id)?T.brand:T.border}`, background:ftid===String(ft.id)?`${T.brand}12`:T.inputBg, cursor:"pointer", fontSize:14, fontWeight:600, fontFamily:"inherit" }}>
            {ft.emoji} {ft.name} — <strong>{ft.amount}€</strong>
          </button>
        ))}
      </div>
      <FL>Motivo (opcional)</FL>
      <FI type="text" value={reason} onChange={e => setReason(e.target.value)} placeholder={sft ? sft.name : "Descreve o motivo..."} />
      <PrimaryBtn onClick={() => { if(!mid||!ftid) return; onAdd({ teamId:team.id, memberId:Number(mid), amount:sft.amount, reason:reason||sft.name, emoji:sft.emoji, paid:false, date:new Date().toISOString().split("T")[0] }); onClose(); }} disabled={!mid||!ftid}>
        Atribuir {sft ? `${sft.amount}€` : ""} de multa
      </PrimaryBtn>
    </Sheet>
  );
};

const AddExpenseModal = ({ team, onAdd, onClose }) => {
  const [desc, setDesc] = useState(""); const [amount, setAmount] = useState("");
  return (
    <Sheet title="💸 Nova despesa" onClose={onClose}>
      <FL>Descrição</FL><FI type="text" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Ex: Jantar de equipa..." />
      <FL>Valor (€)</FL><FI type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0.00" />
      <PrimaryBtn onClick={() => { if(!desc||!amount) return; onAdd({ teamId:team.id, description:desc, amount:Number(amount), date:new Date().toISOString().split("T")[0] }); onClose(); }} disabled={!desc||!amount} color={T.navy}>Registar despesa</PrimaryBtn>
    </Sheet>
  );
};

// ── TYPE PICKER ───────────────────────────────────────────────
const TrainingTypePicker = ({ team, onSelect, onClose }) => (
  <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"flex-end", zIndex:200 }}
    onClick={e => e.target===e.currentTarget && onClose()}>
    <div style={{ background:T.card, borderRadius:"22px 22px 0 0", padding:"0 20px 36px", width:"100%", boxSizing:"border-box" }}>
      <div style={{ width:36, height:4, borderRadius:2, background:T.border, margin:"12px auto 20px" }} />
      <p style={{ margin:"0 0 16px", fontWeight:800, fontSize:18 }}>Que tipo de evento?</p>
      {[
        { type:"recorrente", icon:"🔄", label:"Treino recorrente", sub:"Repete-se todas as semanas" },
        { type:"treino",     icon:"📅", label:"Treino único",      sub:"Sessão numa data específica" },
        { type:"jogo",       icon:"⚽", label:"Criar jogo",        sub:"Partida com convocatória" },
      ].map(item => (
        <button key={item.type} onClick={() => { onClose(); onSelect(item.type); }} style={{
          display:"flex", alignItems:"center", gap:14, width:"100%", padding:"16px 14px",
          borderRadius:14, border:`1.5px solid ${T.border}`, background:T.inputBg,
          cursor:"pointer", marginBottom:10, textAlign:"left", fontFamily:"inherit",
        }}>
          <div style={{ width:48, height:48, borderRadius:12, background:`${team.color}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{item.icon}</div>
          <div>
            <p style={{ margin:0, fontWeight:800, fontSize:16 }}>{item.label}</p>
            <p style={{ margin:0, fontSize:13, color:T.sub }}>{item.sub}</p>
          </div>
          <span style={{ marginLeft:"auto", color:T.sub, fontSize:18 }}>›</span>
        </button>
      ))}
    </div>
  </div>
);

// ── TREINO ÚNICO ──────────────────────────────────────────────
const AddSingleTrainingModal = ({ team, onAdd, onClose }) => {
  const [date, setDate] = useState(""); const [time, setTime] = useState("19:30"); const [loc, setLoc] = useState(""); const [notes, setNotes] = useState("");
  const ok = date && time && loc;
  return (
    <Sheet title="📅 Treino único" onClose={onClose}>
      <FL>Data</FL><FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Principal, Selzach" />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Objetivos do treino..." />
      <PrimaryBtn onClick={() => { if(!ok) return; onAdd({ teamId:team.id, type:"treino", recurring:false, date, time, location:loc, notes, createdBy:myUserId }); onClose(); }} disabled={!ok} color={team.color}>Agendar treino</PrimaryBtn>
    </Sheet>
  );
};

// ── TREINO RECORRENTE ─────────────────────────────────────────
const AddRecurringModal = ({ team, onAdd, onClose }) => {
  const [days, setDays] = useState([]); const [time, setTime] = useState("19:30"); const [loc, setLoc] = useState(""); const [notes, setNotes] = useState("");
  const ok = days.length > 0 && time && loc;
  const toggleDay = d => setDays(p => p.includes(d) ? p.filter(x=>x!==d) : [...p,d]);
  return (
    <Sheet title="🔄 Treino recorrente" onClose={onClose}>
      <FL>Dias da semana</FL>
      <div style={{ display:"flex", gap:6, marginBottom:14, flexWrap:"wrap" }}>
        {DAYS_PT.map((d,i) => (
          <button key={i} onClick={() => toggleDay(i)} style={{
            width:44, height:44, borderRadius:22, border:`2px solid ${days.includes(i)?team.color:T.border}`,
            background:days.includes(i)?`${team.color}18`:T.inputBg,
            cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"inherit",
            color:days.includes(i)?team.color:T.sub,
          }}>{d}</button>
        ))}
      </div>
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Principal, Selzach" />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Objetivos do treino..." />
      <div style={{ background:`${team.color}12`, borderRadius:12, padding:"10px 14px", marginBottom:14 }}>
        <p style={{ margin:0, fontSize:13, color:team.color, fontWeight:600 }}>
          🔄 {days.length>0 ? `Repete às ${days.sort().map(d=>DAYS_PT[d]).join(", ")}` : "Seleciona os dias"} · {time}
        </p>
      </div>
      <PrimaryBtn onClick={() => { if(!ok) return; onAdd({ teamId:team.id, type:"recorrente", recurring:true, days:days.sort(), time, location:loc, notes, createdBy:myUserId }); onClose(); }} disabled={!ok} color={team.color}>
        Criar treino recorrente
      </PrimaryBtn>
    </Sheet>
  );
};

// ── CRIAR JOGO ────────────────────────────────────────────────
const AddMatchModal = ({ team, members, onAdd, onClose }) => {
  const tm = members.filter(m=>m.teamId===team.id);
  const [opponent, setOpponent] = useState(""); const [date, setDate] = useState(""); const [time, setTime] = useState("15:00");
  const [loc, setLoc] = useState(""); const [homeAway, setHomeAway] = useState("casa"); const [notes, setNotes] = useState("");
  const [squad, setSquad] = useState(tm.map(m=>m.id)); // all selected by default
  const ok = opponent && date && time;
  const toggleSquad = id => setSquad(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id]);
  return (
    <Sheet title="⚽ Criar jogo" onClose={onClose}>
      <FL>Adversário</FL><FI value={opponent} onChange={e=>setOpponent(e.target.value)} placeholder="Ex: FC Grenchen" />
      <FL>Casa ou fora?</FL>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        {[["casa","🏠 Casa"],["fora","✈️ Fora"]].map(([v,l]) => (
          <button key={v} onClick={()=>setHomeAway(v)} style={{ flex:1, padding:"12px", borderRadius:12, border:`2px solid ${homeAway===v?team.color:T.border}`, background:homeAway===v?`${team.color}15`:T.inputBg, cursor:"pointer", fontWeight:700, fontSize:15, fontFamily:"inherit" }}>{l}</button>
        ))}
      </div>
      <FL>Data</FL><FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Municipal, Grenchen" />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Ex: Campeonato cantonal..." />
      <FL>Convocatória ({squad.length}/{tm.length})</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
        {tm.map(m => (
          <button key={m.id} onClick={()=>toggleSquad(m.id)} style={{
            display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:10,
            border:`2px solid ${squad.includes(m.id)?team.color:T.border}`,
            background:squad.includes(m.id)?`${team.color}15`:T.inputBg,
            cursor:"pointer", fontFamily:"inherit",
          }}>
            <div style={{ width:28, height:28, borderRadius:14, background:squad.includes(m.id)?team.color:T.border, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:800 }}>{m.initials}</div>
            <span style={{ fontSize:13, fontWeight:600 }}>{m.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>
      <PrimaryBtn onClick={() => { if(!ok) return; onAdd({ teamId:team.id, type:"jogo", recurring:false, date, time, location:loc||"A definir", notes, opponent, homeAway, squad, createdBy:myUserId }); onClose(); }} disabled={!ok} color={T.brand}>
        ⚽ Criar jogo vs {opponent||"..."}
      </PrimaryBtn>
    </Sheet>
  );
};

const POSITIONS = ["Guarda-redes","Defesa Central","Lateral Direito","Lateral Esquerdo","Defesa Libero","Médio Defensivo","Médio Centro","Médio Box-to-Box","Médio Ofensivo","Meia Atacante","Extremo Direito","Extremo Esquerdo","Segundo Avançado","Ponta de Lança","Avançado Centro","Fixo","Ala","Pivot","Universal","Treinador","Treinador Adjunto","Treinador de Guarda-redes","Preparador Físico","Diretor Desportivo","Presidente","Massagista / Fisioterapeuta","Delegado","Team Manager","Médico","Outro"];

const POSITIONS_GROUPED = {
  "🥅 Guarda-redes":       ["Guarda-redes"],
  "🛡 Defesa":              ["Defesa Central","Lateral Direito","Lateral Esquerdo","Defesa Libero"],
  "⚙️ Médio":               ["Médio Defensivo","Médio Centro","Médio Box-to-Box","Médio Ofensivo","Meia Atacante"],
  "⚡ Atacante":            ["Extremo Direito","Extremo Esquerdo","Segundo Avançado","Ponta de Lança","Avançado Centro"],
  "🏟 Futsal / Praia":      ["Fixo","Ala","Pivot","Universal"],
  "🎽 Equipa Técnica":      ["Treinador","Treinador Adjunto","Treinador de Guarda-redes","Preparador Físico","Massagista / Fisioterapeuta","Médico"],
  "🏛 Direção / Gestão":    ["Diretor Desportivo","Presidente","Delegado","Team Manager"],
  "· Outro":                ["Outro"],
};

const PositionSelect = ({ value, onChange }) => (
  <FSel value={value} onChange={onChange}>
    {Object.entries(POSITIONS_GROUPED).map(([group, opts]) => (
      <optgroup key={group} label={group}>
        {opts.map(p => <option key={p} value={p}>{p}</option>)}
      </optgroup>
    ))}
  </FSel>
);

const AddMemberModal = ({ team, onAdd, onClose }) => {
  const [name, setName] = useState(""); const [pos, setPos] = useState("Jogador"); const [phone, setPhone] = useState(""); const [bday, setBday] = useState(""); const [role, setRole] = useState("player");
  const ok = name.trim().length > 1;
  const initials = name.trim().split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <Sheet title="➕ Adicionar membro" onClose={onClose}>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} placeholder="Nome completo" />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+351 / +41..." />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <FL>Função na equipa</FL>
      <div style={{ display:"flex", gap:8, marginBottom:16 }}>
        {[["player","👤 Jogador"],["admin","👑 Administrador"]].map(([v,l]) => (
          <button key={v} onClick={() => setRole(v)} style={{ flex:1, padding:"12px", borderRadius:12, border:`2px solid ${role===v?(v==="admin"?T.yellow:team.color):T.border}`, background:role===v?(v==="admin"?`${T.yellow}18`:`${team.color}15`):T.inputBg, cursor:"pointer", fontWeight:700, fontSize:14, fontFamily:"inherit" }}>{l}</button>
        ))}
      </div>
      <PrimaryBtn onClick={() => { if(!ok) return; onAdd({ teamId:team.id, userId:Date.now(), name:name.trim(), initials:initials||name[0].toUpperCase(), position:pos, phone, birthday:bday, role }); onClose(); }} disabled={!ok} color={team.color}>
        Adicionar {role==="admin"?"administrador":"jogador"}
      </PrimaryBtn>
    </Sheet>
  );
};

const EMOJIS = ["⚽","🏀","🏈","⚾","🎾","🏐","🥅","🏸","🏓","🏒","🥊","🏊","🚴","🏋️","🏖️","🎯","🏆","🤺"];
const COLORS = ["#1D3557","#2A7D4F","#C77B2A","#7B2D8B","#1565C0","#C62828","#00695C","#E65100","#37474F","#558B2F"];
const COUNTRIES = ["Portugal","Suíça","Espanha","França","Alemanha","Itália","Brasil","Angola","Moçambique","Cabo Verde","Reino Unido","Holanda","Bélgica","Outro"];
const SPORTS = ["Futebol 11","Futebol 7","Futebol 5 / Futsal","Futebol de Praia","Futebol Feminino","Futebol Júnior","Outro"];
const CURRENCIES = ["EUR (€)","CHF (Fr.)","GBP (£)","BRL (R$)","USD ($)"];

const CreateTeamModal = ({ onAdd, onClose }) => {
  const [name, setName]       = useState("");
  const [emoji, setEmoji]     = useState("⚽");
  const [color, setColor]     = useState("#1D3557");
  const [season, setSeason]   = useState("2025/26");
  const [country, setCountry] = useState("Portugal");
  const [sport, setSport]     = useState("Futebol 11");
  const [currency, setCurrency] = useState("EUR (€)");
  const [city, setCity]       = useState("");
  const [postal, setPostal]   = useState("");
  const ok = name.trim().length > 1;

  return (
    <Sheet title="🏆 Criar equipa" onClose={onClose}>
      <FL>Nome da equipa</FL>
      <FI value={name} onChange={e=>setName(e.target.value)} placeholder="Ex: FC Selzach" />

      <FL>País</FL>
      <FSel value={country} onChange={e=>setCountry(e.target.value)}>
        {COUNTRIES.map(c=><option key={c} value={c}>{c}</option>)}
      </FSel>

      <FL>Desporto</FL>
      <FSel value={sport} onChange={e=>setSport(e.target.value)}>
        {SPORTS.map(s=><option key={s} value={s}>{s}</option>)}
      </FSel>

      <FL>Moeda</FL>
      <FSel value={currency} onChange={e=>setCurrency(e.target.value)}>
        {CURRENCIES.map(c=><option key={c} value={c}>{c}</option>)}
      </FSel>

      <div style={{ display:"flex", gap:10 }}>
        <div style={{ flex:2 }}>
          <FL>Cidade</FL>
          <FI value={city} onChange={e=>setCity(e.target.value)} placeholder="Ex: Selzach" />
        </div>
        <div style={{ flex:1 }}>
          <FL>Cód. Postal</FL>
          <FI value={postal} onChange={e=>setPostal(e.target.value)} placeholder="2545" />
        </div>
      </div>

      <FL>Temporada</FL>
      <FI value={season} onChange={e=>setSeason(e.target.value)} placeholder="Ex: 2025/26" />

      <FL>Ícone</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
        {EMOJIS.map(e => <button key={e} onClick={() => setEmoji(e)} style={{ width:42, height:42, borderRadius:10, border:`2px solid ${emoji===e?T.brand:T.border}`, background:emoji===e?`${T.brand}15`:T.inputBg, cursor:"pointer", fontSize:22 }}>{e}</button>)}
      </div>

      <FL>Cor</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
        {COLORS.map(c => <button key={c} onClick={() => setColor(c)} style={{ width:36, height:36, borderRadius:18, background:c, border:`3px solid ${color===c?"#000":"transparent"}`, cursor:"pointer" }} />)}
      </div>

      <PrimaryBtn onClick={() => { if(!ok) return; onAdd({ name:name.trim(), emoji, color, season, country, sport, currency, city, postal }); onClose(); }} disabled={!ok} color={color}>
        Criar equipa "{name||"..."}"
      </PrimaryBtn>
    </Sheet>
  );
};

const EditProfileModal = ({ user, onSave, onClose }) => {
  const [name, setName] = useState(user.name); const [pos, setPos] = useState(user.position); const [phone, setPhone] = useState(user.phone); const [bday, setBday] = useState(user.birthday);
  return (
    <Sheet title="✏️ Editar perfil" onClose={onClose}>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <PrimaryBtn onClick={() => { onSave({ ...user, name, position:pos, phone, birthday:bday }); onClose(); }} color={T.navy}>Guardar perfil</PrimaryBtn>
    </Sheet>
  );
};

// ── MODAL: EDIT MEMBER ───────────────────────────────────────
const EditMemberModal = ({ member, team, onSave, onClose }) => {
  const [name, setName] = useState(member.name);
  const [pos, setPos] = useState(member.position || "Jogador");
  const [phone, setPhone] = useState(member.phone || "");
  const [bday, setBday] = useState(member.birthday || "");
  return (
    <Sheet title={`✏️ Editar — ${member.name.split(" ")[0]}`} onClose={onClose}>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+351 / +41..." />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <PrimaryBtn onClick={() => { onSave(member.id, { name, position:pos, phone, birthday:bday }); onClose(); }} color={team.color}>
        Guardar alterações
      </PrimaryBtn>
    </Sheet>
  );
};

// ── MODAL: JOIN TEAM ──────────────────────────────────────────
const JoinTeamModal = ({ teams, user, onFindByCode, onJoin, onClose, initialCode="" }) => {
  const [code, setCode] = useState(initialCode.toUpperCase()); const [found, setFound] = useState(null); const [joined, setJoined] = useState(false); const [searching, setSearching] = useState(false);
  
  useEffect(() => {
    if (initialCode) { setTimeout(() => search(initialCode), 500); }
  }, []);
  
  const search = async (c) => {
    const q = (c || code).trim().toUpperCase();
    if (!q) return;
    setSearching(true);
    const t = onFindByCode ? await onFindByCode(q) : teams.find(t => t.inviteCode?.toUpperCase() === q);
    setFound(t || "notfound");
    setSearching(false);
  };
  const accept = async () => { await onJoin(found); setJoined(true); };
  return (
    <Sheet title="🔗 Entrar numa equipa" onClose={onClose}>
      {!joined ? (
        <>
          <div style={{ background:`${T.navy}10`, borderRadius:14, padding:"14px 16px", marginBottom:16 }}>
            <p style={{ margin:0, fontSize:13, color:T.navy, fontWeight:600 }}>Pede ao admin da equipa o código de convite e introduz aqui abaixo.</p>
          </div>
          <FL>Código de convite</FL>
          <div style={{ display:"flex", gap:8, marginBottom:16 }}>
            <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Ex: FCZ-2025"
              style={{ flex:1, padding:"12px 14px", borderRadius:12, border:`1.5px solid ${T.border}`, fontSize:16, background:T.inputBg, outline:"none", fontFamily:"inherit", fontWeight:700, letterSpacing:1 }} />
            <button onClick={()=>search()} disabled={searching} style={{ padding:"12px 18px", borderRadius:12, background:T.navy, border:"none", color:"#fff", fontWeight:700, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>{searching?"...":"Buscar"}</button>
          </div>

          {found === "notfound" && (
            <div style={{ background:`${T.brand}12`, borderRadius:12, padding:"12px 16px", marginBottom:16 }}>
              <p style={{ margin:0, color:T.brand, fontWeight:600, fontSize:14 }}>❌ Código não encontrado. Confirma com o admin.</p>
            </div>
          )}

          {found && found !== "notfound" && (
            <div style={{ background:T.card, borderRadius:16, border:`2px solid ${found.color}`, overflow:"hidden", marginBottom:20 }}>
              <div style={{ background:`linear-gradient(135deg,${found.color},${found.color}cc)`, padding:"16px 16px 14px", color:"#fff" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>{found.emoji}</div>
                  <div>
                    <p style={{ margin:0, fontWeight:800, fontSize:18 }}>{found.name}</p>
                    <p style={{ margin:0, opacity:0.75, fontSize:13 }}>Temporada {found.season}</p>
                  </div>
                </div>
              </div>
              <div style={{ padding:"12px 16px" }}>
                <p style={{ margin:0, fontSize:13, color:T.sub }}>Vais entrar como <strong>👤 Jogador</strong>. O admin pode depois alterar a tua função.</p>
              </div>
            </div>
          )}

          <PrimaryBtn onClick={accept} disabled={!found || found==="notfound"} color={found && found!=="notfound" ? found.color : T.border}>
            ✓ Aceitar convite e entrar
          </PrimaryBtn>
        </>
      ) : (
        <div style={{ textAlign:"center", padding:"20px 0 10px" }}>
          <p style={{ fontSize:52 }}>🎉</p>
          <p style={{ fontWeight:800, fontSize:20, margin:"8px 0 6px" }}>Bem-vindo ao {found.name}!</p>
          <p style={{ color:T.sub, fontSize:14, margin:"0 0 24px" }}>Já podes ver os treinos, multas e eventos da equipa.</p>
          <PrimaryBtn onClick={onClose} color={found.color}>Começar</PrimaryBtn>
        </div>
      )}
    </Sheet>
  );
};

const TeamPickerModal = ({ teams, members, myUserId, currentTeamId, onSelect, onClose, onCreateTeam }) => (
  <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"flex-end", zIndex:150 }}
    onClick={e => e.target===e.currentTarget && onClose()}>
    <div style={{ background:T.card, borderRadius:"22px 22px 0 0", padding:"0 16px 36px", width:"100%", boxSizing:"border-box" }}>
      <div style={{ width:36, height:4, borderRadius:2, background:T.border, margin:"12px auto 16px" }} />
      <p style={{ margin:"0 0 14px 4px", fontWeight:800, fontSize:17 }}>As minhas equipas</p>
      {teams.map(t => {
        const me = members.find(m => m.teamId===t.id && m.userId===myUserId);
        return (
          <button key={t.id} onClick={() => { onSelect(t.id); onClose(); }} style={{ display:"flex", alignItems:"center", gap:14, width:"100%", padding:"13px 12px", borderRadius:14, border:"none", cursor:"pointer", background:t.id===currentTeamId?`${t.color}15`:"transparent", marginBottom:4, textAlign:"left", fontFamily:"inherit" }}>
            <div style={{ width:42, height:42, borderRadius:12, background:t.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{t.emoji}</div>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:16 }}>{t.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{me?.role==="admin"?"🛡 Admin":"· Jogador"} · {t.season}</p>
            </div>
            {t.id===currentTeamId && <span style={{ color:t.color, fontWeight:800, fontSize:18 }}>✓</span>}
          </button>
        );
      })}
      <button onClick={() => { onClose(); onCreateTeam(); }} style={{ display:"flex", alignItems:"center", gap:14, width:"100%", padding:"13px 12px", borderRadius:14, border:`1.5px dashed ${T.border}`, cursor:"pointer", background:"transparent", marginTop:8, fontFamily:"inherit" }}>
        <div style={{ width:42, height:42, borderRadius:12, background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>➕</div>
        <p style={{ margin:0, fontWeight:700, fontSize:15, color:T.sub }}>Criar nova equipa</p>
      </button>
    </div>
  </div>
);

// ── TABS ──────────────────────────────────────────────────────

const HomeTab = ({ team, fines, members, expenses, trainings, isAdmin, onAddFine }) => {
  const tf = fines.filter(f => f.teamId===team.id);
  const collected = tf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  const pending = tf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const spent = expenses.filter(e=>e.teamId===team.id).reduce((s,e)=>s+e.amount,0);
  const balance = collected - spent;
  const recent = [...tf].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0,3);
  const upcoming = trainings.filter(t=>t.teamId===team.id&&!isPast(t.date)).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(0,2);
  const gm = id => members.find(m=>m.id===id);
  return (
    <div style={{ padding:"16px 16px 100px" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}cc)`, borderRadius:22, padding:"22px 22px 18px", marginBottom:14, color:"#fff", boxShadow:`0 6px 24px ${team.color}44` }}>
        <p style={{ margin:0, fontSize:12, opacity:0.7, fontWeight:600, textTransform:"uppercase" }}>Caixa · {team.season}</p>
        <p style={{ margin:"2px 0 16px", fontSize:44, fontWeight:900, letterSpacing:-2 }}>{balance.toFixed(2)}€</p>
        <div style={{ display:"flex" }}>
          {[["Recebido",`+${collected}€`,"#fff"],["Por pagar",`${pending}€`,"#FFD6D6"],["Despesas",`-${spent}€`,"rgba(255,255,255,0.65)"]].map(([l,v,c],i,arr)=>(
            <div key={i} style={{ flex:1, borderRight:i<arr.length-1?"1px solid rgba(255,255,255,0.25)":"none", paddingRight:i<arr.length-1?12:0, paddingLeft:i>0?12:0 }}>
              <p style={{ margin:0, fontSize:10, opacity:0.65, textTransform:"uppercase" }}>{l}</p>
              <p style={{ margin:0, fontSize:17, fontWeight:700, color:c }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && (
        <button onClick={onAddFine} style={{ width:"100%", background:T.brand, color:"#fff", border:"none", borderRadius:14, padding:"15px", fontSize:16, fontWeight:800, cursor:"pointer", marginBottom:18, fontFamily:"inherit" }}>🟥 Atribuir multa</button>
      )}

      {/* Top 3 Podium */}
      {(() => {
        const tm = members.filter(m => m.teamId===team.id);
        const ranked = tm.map(m => ({
          ...m,
          unpaid: fines.filter(f=>f.teamId===team.id&&f.memberId===m.id&&!f.paid).reduce((s,f)=>s+f.amount,0)
        })).sort((a,b)=>b.unpaid-a.unpaid).slice(0,3);

        if (ranked.length < 2) return null;

        // Podium order: 2nd (left), 1st (center), 3rd (right)
        const podium = [ranked[1], ranked[0], ranked[2]].filter(Boolean);
        const MEDALS = { 0:"🥈", 1:"🥇", 2:"🥉" };
        const NUMS   = { 0:2, 1:1, 2:3 };
        const H      = [76, 108, 56];
        const SZ     = [44, 56, 38];

        return (
          <div style={{ marginBottom:20 }}>
            <p style={{ margin:"0 0 10px", fontSize:12, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>🏆 Ranking de dívidas</p>
            <div style={{ background:T.card, borderRadius:18, padding:"20px 12px 0", display:"flex", alignItems:"flex-end", justifyContent:"center", gap:6 }}>
              {podium.map((m, i) => {
                const isFirst = NUMS[i] === 1;
                const sz = SZ[i]; const h = H[i];
                return (
                  <div key={m.id} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
                    <span style={{ fontSize:isFirst?30:22 }}>{MEDALS[i]}</span>
                    <div style={{ width:sz, height:sz, borderRadius:sz/2, background:isFirst?`linear-gradient(135deg,${team.color},${team.color}bb)`:T.bg, border:`2.5px solid ${isFirst?team.color:T.border}`, display:"flex", alignItems:"center", justifyContent:"center", color:isFirst?"#fff":T.sub, fontWeight:800, fontSize:sz*0.3 }}>
                      {m.initials}
                    </div>
                    <p style={{ margin:0, fontWeight:700, fontSize:isFirst?15:13, textAlign:"center", maxWidth:80, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{m.name.split(" ")[0]}</p>
                    <div style={{ background:m.unpaid>0?(isFirst?T.brand:`${T.brand}18`):T.bg, borderRadius:10, padding:"4px 10px", minWidth:36, textAlign:"center" }}>
                      <p style={{ margin:0, fontWeight:900, fontSize:isFirst?17:14, color:m.unpaid>0?(isFirst?"#fff":T.brand):T.sub }}>
                        {m.unpaid>0?`${m.unpaid}€`:"✓"}
                      </p>
                    </div>
                    {/* Podium block */}
                    <div style={{ width:"100%", height:h, background:isFirst?`${team.color}20`:`${T.sub}10`, borderRadius:"8px 8px 0 0", marginTop:6, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <p style={{ margin:0, fontWeight:900, fontSize:26, color:isFirst?team.color:T.sub, opacity:0.3 }}>{NUMS[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
      {upcoming.length > 0 && (
        <>
          <Sec label="Próximos treinos" />
          {upcoming.map(t => (
            <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:`${team.color}18`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <p style={{ margin:0, fontSize:18, fontWeight:900, color:team.color, lineHeight:1 }}>{new Date(t.date+"T00:00:00").getDate()}</p>
                <p style={{ margin:0, fontSize:10, color:team.color, fontWeight:700 }}>{new Date(t.date+"T00:00:00").toLocaleDateString("pt-PT",{month:"short"}).toUpperCase()}</p>
              </div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:15 }}>🕐 {t.time}</p>
                <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <Sec label="Multas recentes" />
      {recent.length === 0 && <p style={{ color:T.sub, textAlign:"center", padding:"16px 0" }}>Sem multas ainda 🎉</p>}
      {recent.map(f => {
        const m = gm(f.memberId);
        return (
          <div key={f.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12, borderLeft:`3px solid ${f.paid?T.green:T.brand}` }}>
            <Avatar initials={m?.initials||"?"} color={team.color} />
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{m?.name}</p>
              <p style={{ margin:0, fontSize:13, color:T.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.emoji} {f.reason}</p>
            </div>
            <div style={{ textAlign:"right", flexShrink:0 }}>
              <p style={{ margin:0, fontWeight:800, fontSize:17, color:f.paid?T.green:T.brand }}>{f.amount}€</p>
              <p style={{ margin:0, fontSize:11, color:T.sub }}>{f.date.slice(5)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FinesTab = ({ team, fines, members, isAdmin, onAddFine, onTogglePaid, onSelectMember }) => {
  const [filter, setFilter] = useState("all");
  const tf = fines.filter(f=>f.teamId===team.id);
  const filtered = tf.filter(f=>filter==="all"||( filter==="unpaid"?!f.paid:f.paid)).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const gm = id => members.find(m=>m.id===id);
  return (
    <div style={{ padding:"14px 16px 100px" }}>
      <div style={{ display:"flex", gap:8, marginBottom:16 }}>
        <Chip active={filter==="all"}    color={team.color} onClick={() => setFilter("all")}>Todas ({tf.length})</Chip>
        <Chip active={filter==="unpaid"} color={T.brand}    onClick={() => setFilter("unpaid")}>Por pagar ({tf.filter(f=>!f.paid).length})</Chip>
        <Chip active={filter==="paid"}   color={T.green}    onClick={() => setFilter("paid")}>Pagas ({tf.filter(f=>f.paid).length})</Chip>
      </div>
      {filtered.length===0 && <p style={{ textAlign:"center", color:T.sub, padding:40 }}>Sem multas 🙌</p>}
      {filtered.map(f => {
        const m = gm(f.memberId);
        return (
          <div key={f.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12, borderLeft:`3px solid ${f.paid?T.green:T.brand}` }}>
            <span onClick={() => m && onSelectMember(m)} style={{ fontSize:26, flexShrink:0, cursor:"pointer" }}>{f.emoji}</span>
            <div style={{ flex:1, minWidth:0, cursor:"pointer" }} onClick={() => m && onSelectMember(m)}>
              <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{m?.name}</p>
              <p style={{ margin:0, fontSize:13, color:T.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
              <p style={{ margin:0, fontSize:11, color:T.sub }}>{f.date}</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:5, flexShrink:0 }}>
              <p style={{ margin:0, fontWeight:900, fontSize:18, color:f.paid?T.green:T.brand }}>{f.amount}€</p>
              {isAdmin && (
                <button onClick={() => onTogglePaid(f.id)} style={{ padding:"4px 10px", borderRadius:8, border:`1.5px solid ${f.paid?T.green:T.brand}`, background:"transparent", color:f.paid?T.green:T.brand, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                  {f.paid ? "✓ Pago" : "Pagar"}
                </button>
              )}
            </div>
          </div>
        );
      })}
      {isAdmin && (
        <button onClick={onAddFine} style={{ position:"fixed", bottom:76, right:20, width:56, height:56, borderRadius:28, background:T.brand, border:"none", color:"#fff", fontSize:30, cursor:"pointer", boxShadow:`0 4px 20px ${T.brand}55`, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
      )}
    </div>
  );
};

// ── TREINOS PAGE (full-screen) ────────────────────────────────
const TreinosPage = ({ team, trainings, members, myUserId, isAdmin, presences, onSetPresence, onAddType, onDelete, onBack, modal, setModal }) => {
  const [showPast, setShowPast] = useState(false);
  const [filterType, setFilterType] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [ctxMenu, setCtxMenu] = useState(null);

  const myMember = members.find(m => m.teamId === team.id && m.userId === myUserId);
  const tt = trainings.filter(t => t.teamId === team.id);
  const recurring = tt.filter(t => t.type === "recorrente");
  const dated = tt.filter(t => t.type !== "recorrente").sort((a,b) => new Date(a.date)-new Date(b.date));
  let filtered = showPast ? dated : dated.filter(t => !isPast(t.date));
  if (filterType) filtered = filtered.filter(t => t.type === filterType);

  // Group by month
  const byMonth = {};
  filtered.forEach(t => {
    const dt = new Date(t.date+"T00:00:00");
    const key = dt.toLocaleDateString("pt-PT",{month:"long",year:"numeric"}).toUpperCase();
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(t);
  });

  const getPres = id => presences[id] || {};
  const myPres = id => getPres(id)[myMember?.id];

  const PresCounter = ({ count, color }) => (
    <div style={{ width:26, height:26, borderRadius:7, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:13, fontWeight:800 }}>{count}</div>
  );

  const PresBar = ({ t }) => {
    const pres = getPres(t.id);
    const tm = members.filter(m => m.teamId === team.id);
    const ok = Object.values(pres).filter(s=>s==="present").length;
    const no = Object.values(pres).filter(s=>s==="absent").length;
    const pend = tm.length - ok - no;
    const me = myPres(t.id);
    return (
      <div style={{ display:"flex", alignItems:"center", gap:8, paddingTop:10, marginTop:8, borderTop:`1px solid ${T.border}` }}>
        <PresCounter count={ok}   color={T.green} />
        <PresCounter count={no}   color="#FF6B00" />
        <PresCounter count={pend} color={T.sub} />
        {!isPast(t.date) && myMember && (
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="present" ? null : "present")} style={{ padding:"6px 12px", borderRadius:18, border:`1.5px solid ${T.green}`, background:me==="present"?T.green:"transparent", color:me==="present"?"#fff":T.green, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✓ Presente</button>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="absent" ? null : "absent")} style={{ padding:"6px 12px", borderRadius:18, border:`1.5px solid #FF6B00`, background:me==="absent"?"#FF6B00":"transparent", color:me==="absent"?"#fff":"#FF6B00", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✗ Ausente</button>
          </div>
        )}
      </div>
    );
  };

  const EventCard = ({ t }) => {
    const past = isPast(t.date);
    const isJogo = t.type === "jogo";
    const dt = new Date(t.date+"T00:00:00");
    const dayNum = dt.getDate();
    const weekday = dt.toLocaleDateString("pt-PT",{weekday:"long"});
    const squadMembers = isJogo ? (t.squad||[]).map(id=>members.find(m=>m.id===id)).filter(Boolean) : [];
    return (
      <div style={{ background:T.card, borderRadius:14, marginBottom:10, overflow:"hidden", borderLeft:`3px solid ${past?T.sub:isJogo?T.brand:team.color}`, opacity:past?0.65:1 }}>
        <div style={{ padding:"14px 14px 0" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
            {/* Day number */}
            <div style={{ textAlign:"center", width:38, flexShrink:0 }}>
              <p style={{ margin:0, fontSize:26, fontWeight:900, color:past?T.sub:isJogo?T.brand:team.color, lineHeight:1 }}>{dayNum}</p>
              <p style={{ margin:0, fontSize:9, fontWeight:700, color:past?T.sub:T.sub, textTransform:"uppercase" }}>{dt.toLocaleDateString("pt-PT",{month:"short"})}</p>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                <p style={{ margin:0, fontWeight:800, fontSize:16 }}>{isJogo ? `vs ${t.opponent}` : "Treino"}</p>
                {isJogo && <Badge label={t.homeAway==="casa"?"🏠 Casa":"✈️ Fora"} color={t.homeAway==="casa"?T.green:T.brand} />}
              </div>
              <p style={{ margin:"2px 0 0", fontSize:13, color:T.sub }}>{weekday}, {t.time}</p>
              <p style={{ margin:"1px 0 0", fontSize:13, color:T.sub }}>📍 {t.location}</p>
              {t.notes && <p style={{ margin:"4px 0 0", fontSize:13 }}>{t.notes}</p>}
              {isJogo && squadMembers.length>0 && (
                <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginTop:6 }}>
                  {squadMembers.map(m=>(
                    <div key={m.id} style={{ display:"flex", alignItems:"center", gap:4, background:T.bg, borderRadius:6, padding:"3px 7px" }}>
                      <div style={{ width:18, height:18, borderRadius:9, background:team.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:800, color:"#fff" }}>{m.initials}</div>
                      <span style={{ fontSize:11, fontWeight:600 }}>{m.name.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Context menu */}
            {isAdmin && (
              <button onClick={() => setCtxMenu(ctxMenu===t.id?null:t.id)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:T.sub, padding:"0 4px", flexShrink:0 }}>⋮</button>
            )}
          </div>
          <PresBar t={t} />
        </div>
        {/* Context menu dropdown */}
        {ctxMenu===t.id && (
          <div style={{ background:T.bg, borderTop:`1px solid ${T.border}` }}>
            {[
              ["✏️ Modificar evento", () => setCtxMenu(null)],
              ["🗑️ Eliminar evento", () => { onDelete(t.id); setCtxMenu(null); }],
              ["🔔 Enviar lembrete", () => setCtxMenu(null)],
            ].map(([label,action]) => (
              <button key={label} onClick={action} style={{ display:"block", width:"100%", padding:"13px 16px", background:"transparent", border:"none", textAlign:"left", fontSize:15, cursor:"pointer", fontFamily:"inherit", color:label.includes("Eliminar")?T.brand:T.text, borderBottom:`1px solid ${T.border}` }}>{label}</button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ background:T.bg, minHeight:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}cc)`, padding:"52px 16px 16px", color:"#fff" }}>
        <button onClick={onBack} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit", marginBottom:10 }}>← Voltar</button>
        <h1 style={{ margin:0, fontSize:30, fontWeight:900, letterSpacing:-1 }}>Treinos</h1>
        <p style={{ margin:"2px 0 0", opacity:0.7, fontSize:14 }}>{team.name} · {team.season}</p>
      </div>

      {/* Filter bar */}
      <div style={{ background:T.card, padding:"10px 16px", display:"flex", gap:8, alignItems:"center", borderBottom:`1px solid ${T.border}`, overflowX:"auto" }}>
        <button onClick={() => setShowPast(!showPast)} style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", borderRadius:20, border:`1px solid ${T.border}`, background:showPast?T.navy:"transparent", color:showPast?"#fff":T.sub, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
          🕐 Passado
        </button>
        {isAdmin && (
          <button onClick={onAddType} style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 16px", borderRadius:20, border:"none", background:team.color, color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0, boxShadow:`0 2px 10px ${team.color}44` }}>
            + Acrescentar
          </button>
        )}
        <button onClick={() => setShowFilter(true)} style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", borderRadius:20, border:`1px solid ${filterType?team.color:T.border}`, background:filterType?`${team.color}15`:"transparent", color:filterType?team.color:T.sub, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0, marginLeft:"auto" }}>
          ≡ Filtros{filterType?" •":""}
        </button>
      </div>

      {/* Content */}
      <div style={{ padding:"12px 16px 60px" }}>
        {/* Recurring */}
        {recurring.length>0 && (
          <>
            <p style={{ margin:"8px 0 8px", fontSize:13, fontWeight:800, color:team.color, textTransform:"uppercase", letterSpacing:0.5 }}>🔄 Recorrentes</p>
            {recurring.map(t => (
              <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"14px", marginBottom:8, display:"flex", gap:12, alignItems:"center", borderLeft:`3px solid ${team.color}` }}>
                <div style={{ width:40, height:40, borderRadius:20, background:`${team.color}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🔄</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{(t.days||[]).map(d=>DAYS_PT[d]).join(", ")} · {t.time}</p>
                  <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}</p>
                  {t.notes&&<p style={{ margin:0, fontSize:12, color:T.sub }}>{t.notes}</p>}
                </div>
                {isAdmin&&<button onClick={()=>onDelete(t.id)} style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",color:T.sub }}>🗑️</button>}
              </div>
            ))}
          </>
        )}

        {/* Month groups */}
        {Object.entries(byMonth).map(([month, evts]) => (
          <div key={month}>
            <p style={{ margin:"16px 0 10px", fontSize:15, fontWeight:900, color:team.color, textTransform:"uppercase", letterSpacing:0.8 }}>{month}</p>
            {evts.map(t => <EventCard key={t.id} t={t} />)}
          </div>
        ))}

        {Object.keys(byMonth).length===0 && recurring.length===0 && (
          <div style={{ textAlign:"center", padding:"52px 0", color:T.sub }}>
            <p style={{ fontSize:44 }}>📋</p>
            <p style={{ fontWeight:700, fontSize:17 }}>Sem eventos{showPast?"":" futuros"}</p>
            {!showPast && <p style={{ fontSize:14 }}>Toca em "Passado" para ver histórico</p>}
            {isAdmin && <p style={{ fontSize:14 }}>Ou "Acrescentar" para criar</p>}
          </div>
        )}
      </div>

      {/* Filter sheet */}
      {showFilter && (
        <Sheet title="Filtros" onClose={()=>setShowFilter(false)}>
          <p style={{ margin:"0 0 8px", fontWeight:700, fontSize:12, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>Tipo de evento</p>
          {[[null,"📅 Todos"],["recorrente","🔄 Recorrente"],["treino","📅 Treino único"],["jogo","⚽ Jogo"]].map(([v,l])=>(
            <button key={String(v)} onClick={()=>{setFilterType(v);setShowFilter(false);}} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"14px 0",background:"transparent",border:"none",borderBottom:`1px solid ${T.border}`,cursor:"pointer",fontFamily:"inherit",fontSize:15 }}>
              <span>{l}</span>
              {filterType===v&&<span style={{color:T.green,fontWeight:700}}>✓</span>}
            </button>
          ))}
          <div style={{height:12}}/>
          <PrimaryBtn onClick={()=>setShowFilter(false)} color={team.color}>Fechar</PrimaryBtn>
        </Sheet>
      )}

      {/* Training modals */}
      {modal==="typePicker"  && <TrainingTypePicker team={team} onSelect={t=>setModal(t)} onClose={()=>setModal(null)} />}
      {modal==="treino"      && <AddSingleTrainingModal team={team} onAdd={t=>{onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
      {modal==="recorrente"  && <AddRecurringModal team={team} onAdd={t=>{onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
      {modal==="jogo"        && <AddMatchModal team={team} members={members} onAdd={t=>{onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
    </div>
  );
};

const TreasuryTab = ({ team, fines, members, expenses, isAdmin, onAddExpense }) => {
  const tf = fines.filter(f=>f.teamId===team.id&&f.paid);
  const te = expenses.filter(e=>e.teamId===team.id);
  const income = tf.reduce((s,f)=>s+f.amount,0);
  const spent = te.reduce((s,e)=>s+e.amount,0);
  const balance = income - spent;
  const gm = id => members.find(m=>m.id===id);
  const allTx = [...tf.map(f=>({...f,type:"in",label:`Multa — ${gm(f.memberId)?.name}`})),...te.map(e=>({...e,type:"out",label:e.description}))].sort((a,b)=>new Date(b.date)-new Date(a.date));
  return (
    <div style={{ padding:"14px 16px 100px" }}>
      <div style={{ background:T.card, borderRadius:20, padding:"20px 20px 16px", marginBottom:14 }}>
        <p style={{ margin:0, color:T.sub, fontSize:12, fontWeight:600, textTransform:"uppercase" }}>Saldo disponível</p>
        <p style={{ margin:"2px 0 16px", fontSize:42, fontWeight:900, color:balance>=0?T.green:T.brand, letterSpacing:-2 }}>{balance.toFixed(2)}€</p>
        <div style={{ display:"flex", background:T.bg, borderRadius:12, overflow:"hidden" }}>
          <div style={{ flex:1, padding:"12px 16px" }}><p style={{ margin:0, fontSize:11, color:T.sub }}>Entradas</p><p style={{ margin:0, fontSize:20, fontWeight:800, color:T.green }}>+{income}€</p></div>
          <div style={{ width:1, background:T.border }} />
          <div style={{ flex:1, padding:"12px 16px" }}><p style={{ margin:0, fontSize:11, color:T.sub }}>Saídas</p><p style={{ margin:0, fontSize:20, fontWeight:800, color:T.brand }}>-{spent}€</p></div>
        </div>
      </div>
      {isAdmin && (
        <button onClick={onAddExpense} style={{ width:"100%", background:T.navy, color:"#fff", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:800, cursor:"pointer", marginBottom:20, fontFamily:"inherit" }}>+ Registar despesa</button>
      )}
      <Sec label={`Movimentos (${allTx.length})`} />
      {allTx.map((tx,i) => (
        <div key={i} style={{ background:T.card, borderRadius:12, padding:"12px 14px", marginBottom:7, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:38, height:38, borderRadius:19, background:tx.type==="in"?`${T.green}18`:`${T.brand}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{tx.type==="in"?"⬆️":"⬇️"}</div>
          <div style={{ flex:1 }}>
            <p style={{ margin:0, fontWeight:600, fontSize:14 }}>{tx.label}</p>
            <p style={{ margin:0, fontSize:12, color:T.sub }}>{tx.date}</p>
          </div>
          <p style={{ margin:0, fontWeight:800, fontSize:17, color:tx.type==="in"?T.green:T.brand }}>{tx.type==="in"?"+":"-"}{tx.amount}€</p>
        </div>
      ))}
    </div>
  );
};

const GeneralTab = ({ user, myUserId, teams, members, onEditProfile, onManageTeam, onCreateTeam, onJoinTeam, onLogout }) => {
  const myTeams = teams.filter(t => members.some(m=>m.teamId===t.id&&m.userId===myUserId));
  const myAge = age(user.birthday);
  return (
    <div style={{ padding:"16px 16px 100px" }}>
      {/* Profile card */}
      <div style={{ background:T.card, borderRadius:20, padding:"20px", marginBottom:16, position:"relative" }}>
        <button onClick={onEditProfile} style={{ position:"absolute", top:16, right:16, background:T.bg, border:"none", borderRadius:10, padding:"7px 13px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.navy, fontFamily:"inherit" }}>✏️ Editar</button>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18, paddingRight:80 }}>
          <Avatar initials={user.initials} color={T.navy} size={54} />
          <div style={{ flex:1, minWidth:0 }}>
            <h2 style={{ margin:0, fontSize:20, fontWeight:900 }}>{user.name}</h2>
            <p style={{ margin:0, color:T.sub, fontSize:13, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{user.email}</p>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {[
            ["🏃 Posição", user.position || "—", false],
            ["📱 Telefone", user.phone || "—", false],
            ["🎂 Aniversário", user.birthday ? `${fmtDate(user.birthday)}${myAge?` · ${myAge} anos`:""}` : "—", true],
          ].map(([l,v,full]) => (
            <div key={l} style={{ background:T.bg, borderRadius:12, padding:"12px 14px", gridColumn:full?"1 / -1":"auto" }}>
              <p style={{ margin:0, fontSize:11, color:T.sub, fontWeight:600 }}>{l}</p>
              <p style={{ margin:0, fontSize:14, fontWeight:600, marginTop:2 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teams */}
      <Sec label={`Equipas (${myTeams.length})`} />
      {myTeams.map(t => {
        const me = members.find(m=>m.teamId===t.id&&m.userId===myUserId);
        const admin = me?.role==="admin";
        return (
          <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"14px", marginBottom:8 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:t.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>{t.emoji}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:16 }}>{t.name}</p>
                <div style={{ display:"flex", gap:6, alignItems:"center", marginTop:3 }}>
                  <RoleBadgeLight role={admin?"admin":"player"} />
                  <span style={{ fontSize:12, color:T.sub }}>{t.season}</span>
                </div>
              </div>
              {admin && (
                <button onClick={() => onManageTeam(t.id)} style={{ background:`${t.color}15`, border:"none", borderRadius:10, padding:"8px 12px", fontSize:13, fontWeight:700, cursor:"pointer", color:t.color, fontFamily:"inherit" }}>Gerir →</button>
              )}
            </div>
          </div>
        );
      })}
      <button onClick={onCreateTeam} style={{ width:"100%", background:"transparent", border:`1.5px dashed ${T.border}`, borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:T.sub, marginTop:4, fontFamily:"inherit" }}>
        ➕ Criar nova equipa
      </button>
      <button onClick={onJoinTeam} style={{ width:"100%", background:"transparent", border:`1.5px solid ${T.navy}`, borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:T.navy, marginTop:8, fontFamily:"inherit" }}>
        🔗 Entrar numa equipa com código
      </button>
      <button onClick={onLogout} style={{ width:"100%", background:"transparent", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:T.brand, marginTop:8, fontFamily:"inherit" }}>
        Terminar sessão
      </button>
    </div>
  );
};

// ── SUB-SCREENS ───────────────────────────────────────────────

const ManageTeamScreen = ({ team, members, myUserId, onBack, onAddMember, onToggleRole, onRemoveMember, onEditMember, onRegenerateCode }) => {
  const tm = members.filter(m=>m.teamId===team.id);
  const admins = tm.filter(m=>m.role==="admin");
  const players = tm.filter(m=>m.role==="player");
  const [confirmRemove, setConfirmRemove] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyCode = () => { setCopied(true); setTimeout(()=>setCopied(false), 2000); };

  const Row = ({ m }) => (
    <div style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
      <Avatar initials={m.initials} color={team.color} size={44} />
      <div style={{ flex:1 }}>
        <div style={{ display:"flex", gap:6, alignItems:"center", flexWrap:"wrap" }}>
          <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{m.name}</p>
          {m.userId===myUserId && <Badge label="Tu" color={team.color} />}
          <RoleBadgeLight role={m.role} />
        </div>
        <p style={{ margin:0, fontSize:13, color:T.sub }}>{m.position}{m.phone?` · ${m.phone}`:""}</p>
        {m.birthday && <p style={{ margin:0, fontSize:12, color:T.sub }}>🎂 {fmtDate(m.birthday)}</p>}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
        <button onClick={() => setEditingMember(m)} style={{ padding:"5px 10px", borderRadius:8, border:`1.5px solid ${team.color}`, background:`${team.color}12`, color:team.color, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
          ✏️ Editar
        </button>
        {m.userId !== myUserId && (
          <>
            <button onClick={() => onToggleRole(m.id)} style={{ padding:"5px 10px", borderRadius:8, border:`1.5px solid ${m.role==="admin"?T.sub:T.yellow}`, background:"transparent", color:m.role==="admin"?T.sub:T.yellow, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
              {m.role==="admin"?"↓ Jogador":"↑ Admin"}
            </button>
            <button onClick={() => setConfirmRemove(m)} style={{ padding:"5px 10px", borderRadius:8, border:`1.5px solid ${T.brand}`, background:"transparent", color:T.brand, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
              🗑 Remover
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ background:T.bg, minHeight:"100vh" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}cc)`, padding:"52px 16px 20px", color:"#fff" }}>
        <button onClick={onBack} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit", marginBottom:12 }}>← Voltar</button>
        <h2 style={{ margin:0, fontSize:24, fontWeight:900 }}>Gerir {team.name}</h2>
        <p style={{ margin:"4px 0 0", opacity:0.7, fontSize:14 }}>{tm.length} membros · {admins.length} admin{admins.length!==1?"s":""}</p>
      </div>

      <div style={{ padding:"16px 16px 100px" }}>
        {/* Invite code card */}
        <div style={{ background:T.card, borderRadius:16, padding:"16px", marginBottom:20, borderLeft:`3px solid ${team.color}` }}>
          <p style={{ margin:"0 0 4px", fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>Código de convite</p>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
            <p style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:3, color:team.color, flex:1 }}>{team.inviteCode}</p>
            <button onClick={copyCode} style={{ padding:"8px 16px", borderRadius:10, background:`${team.color}15`, border:`1.5px solid ${team.color}`, color:team.color, fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit", flexShrink:0 }}>
              {copied ? "✓ Copiado!" : "Copiar"}
            </button>
          </div>
          <p style={{ margin:"0 0 10px", fontSize:13, color:T.sub }}>Partilha o convite com os teus jogadores:</p>
          <div style={{ display:"flex", gap:8 }}>
            <a href={`https://wa.me/?text=${encodeURIComponent(`🟥 *Multeam* — Junta-te à equipa *${team.name}*!\n\n1. Abre o link: https://patrsolothurn-glitch.github.io/multeam?invite=${team.inviteCode}\n2. Cria conta\n3. O código entra automaticamente!\n\nCódigo manual: *${team.inviteCode}*`)}`}
               target="_blank" rel="noopener" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"11px", borderRadius:12, background:"#25D366", color:"#fff", fontWeight:700, fontSize:14, textDecoration:"none" }}>
              📱 WhatsApp
            </a>
            <a href={`mailto:?subject=Convite para ${team.name}&body=${encodeURIComponent(`Olá!\n\nEstou a convidar-te para a equipa ${team.name} no Multeam.\n\nAbre este link para entrares diretamente:\nhttps://patrsolothurn-glitch.github.io/multeam?invite=${team.inviteCode}\n\nOu entra no app e usa o código: ${team.inviteCode}\n\nAté já!`)}`}
               style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"11px", borderRadius:12, background:T.navy, color:"#fff", fontWeight:700, fontSize:14, textDecoration:"none" }}>
              ✉️ Email
            </a>
          </div>
        </div>

        {/* Role hierarchy info */}
        <div style={{ background:`${T.yellow}15`, borderRadius:14, padding:"12px 14px", marginBottom:16, display:"flex", gap:10, alignItems:"flex-start" }}>
          <span style={{ fontSize:20 }}>👑</span>
          <div>
            <p style={{ margin:0, fontWeight:700, fontSize:14 }}>Administradores têm nível máximo</p>
            <p style={{ margin:"2px 0 0", fontSize:13, color:T.sub }}>Podem gerir membros, atribuir multas, despesas e treinos. Jogadores só veem e confirmam presenças.</p>
          </div>
        </div>

        <button onClick={onAddMember} style={{ width:"100%", background:team.color, color:"#fff", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:800, cursor:"pointer", marginBottom:20, fontFamily:"inherit" }}>➕ Adicionar membro</button>

        {admins.length>0 && (
          <>
            <p style={{ margin:"0 0 8px", fontSize:11, fontWeight:700, color:"#1D3557", textTransform:"uppercase", letterSpacing:0.5, display:"flex", alignItems:"center", gap:5 }}><ShieldIcon size={11} color="#1D3557" /> Administradores ({admins.length})</p>
            {admins.map(m=><Row key={m.id} m={m}/>)}
          </>
        )}
        {players.length>0 && (
          <>
            <p style={{ margin:"16px 0 8px", fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5, display:"flex", alignItems:"center", gap:5 }}><PersonIcon size={11} color={T.sub} /> Jogadores ({players.length})</p>
            {players.map(m=><Row key={m.id} m={m}/>)}
          </>
        )}
      </div>

      {/* Confirm remove dialog */}
      {confirmRemove && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:300, padding:20 }}>
          <div style={{ background:T.card, borderRadius:20, padding:"24px", width:"100%", maxWidth:360 }}>
            <p style={{ fontSize:36, textAlign:"center", margin:"0 0 10px" }}>⚠️</p>
            <p style={{ fontWeight:800, fontSize:18, textAlign:"center", margin:"0 0 8px" }}>Remover {confirmRemove.name}?</p>
            <p style={{ color:T.sub, fontSize:14, textAlign:"center", margin:"0 0 24px" }}>Este jogador perderá o acesso à equipa. Podes adicioná-lo novamente com um novo convite.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setConfirmRemove(null)} style={{ flex:1, padding:"13px", borderRadius:12, border:`1.5px solid ${T.border}`, background:"transparent", fontWeight:700, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>Cancelar</button>
              <button onClick={()=>{ onRemoveMember(confirmRemove.id); setConfirmRemove(null); }} style={{ flex:1, padding:"13px", borderRadius:12, border:"none", background:T.brand, color:"#fff", fontWeight:800, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>Remover</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit member modal */}
      {editingMember && (
        <EditMemberModal
          member={editingMember} team={team}
          onSave={(id, data) => { onEditMember(id, data); setEditingMember(null); }}
          onClose={() => setEditingMember(null)}
        />
      )}
    </div>
  );
};

const MemberDetailScreen = ({ member, team, fines, onBack, onTogglePaid, isAdmin }) => {
  const pf = fines.filter(f=>f.teamId===team.id&&f.memberId===member.id).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const unpaid = pf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const paid = pf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  return (
    <div style={{ background:T.bg, minHeight:"100vh" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}bb)`, padding:"52px 16px 24px", color:"#fff", textAlign:"center" }}>
        <button onClick={onBack} style={{ position:"absolute", top:54, left:16, background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"6px 12px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit" }}>← Voltar</button>
        <Avatar initials={member.initials} color="rgba(255,255,255,0.2)" size={64} />
        <h2 style={{ margin:"12px 0 2px", fontSize:24, fontWeight:800 }}>{member.name}</h2>
        <p style={{ margin:0, opacity:0.7, fontSize:14 }}>{member.position} · {member.role==="admin"?"Admin":"Jogador"}</p>
        {member.phone && <p style={{ margin:"4px 0 0", opacity:0.6, fontSize:13 }}>📱 {member.phone}</p>}
        {member.birthday && <p style={{ margin:"2px 0 0", opacity:0.6, fontSize:13 }}>🎂 {fmtDate(member.birthday)}</p>}
        <div style={{ display:"flex", justifyContent:"center", gap:28, marginTop:18 }}>
          <div><p style={{ margin:0, fontSize:24, fontWeight:900, color:"#FFD6D6" }}>{unpaid}€</p><p style={{ margin:0, fontSize:11, opacity:0.7 }}>POR PAGAR</p></div>
          <div style={{ width:1, background:"rgba(255,255,255,0.2)" }} />
          <div><p style={{ margin:0, fontSize:24, fontWeight:900 }}>{paid}€</p><p style={{ margin:0, fontSize:11, opacity:0.7 }}>PAGO</p></div>
        </div>
      </div>
      <div style={{ padding:"16px 16px 100px" }}>
        <Sec label="Histórico de multas" />
        {pf.length===0 && <p style={{ textAlign:"center", color:T.sub, padding:32 }}>Sem multas 🎉</p>}
        {pf.map(f => (
          <div key={f.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12, borderLeft:`3px solid ${f.paid?T.green:T.brand}` }}>
            <span style={{ fontSize:24 }}>{f.emoji}</span>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontSize:14, fontWeight:600 }}>{f.reason}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{f.date}</p>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:0, fontWeight:800, fontSize:16, color:f.paid?T.green:T.brand }}>{f.amount}€</p>
              {isAdmin && (
                <button onClick={() => onTogglePaid(f.id)} style={{ marginTop:4, padding:"3px 8px", borderRadius:7, border:`1.5px solid ${f.paid?T.green:T.brand}`, background:"transparent", color:f.paid?T.green:T.brand, fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                  {f.paid?"✓":"Pagar"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── LOGIN ─────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("patricio@multeam.app");
  const [pass, setPass] = useState("••••••••");
  const inp = { width:"100%", padding:"14px 16px", borderRadius:14, border:"none", background:"rgba(255,255,255,0.12)", color:"#fff", fontSize:16, marginBottom:12, boxSizing:"border-box", outline:"none", fontFamily:"inherit" };
  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, ${T.navy} 0%, #0a1628 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28 }}>
      <div style={{ marginBottom:44, textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:22, background:T.brand, display:"flex", alignItems:"center", justifyContent:"center", fontSize:38, margin:"0 auto 18px", boxShadow:`0 8px 32px ${T.brand}66` }}>🟥</div>
        <h1 style={{ color:"#fff", fontSize:34, fontWeight:900, margin:0, letterSpacing:-1.5 }}>Multeam</h1>
        <p style={{ color:"rgba(255,255,255,0.45)", margin:"5px 0 0", fontSize:15 }}>Gestão de multas de balneário</p>
      </div>
      <div style={{ width:"100%", maxWidth:340 }}>
        <input style={inp} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input style={inp} type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" />
        <button onClick={onLogin} style={{ width:"100%", padding:16, borderRadius:14, border:"none", background:T.brand, color:"#fff", fontSize:17, fontWeight:800, cursor:"pointer", marginTop:4, boxShadow:`0 6px 24px ${T.brand}55`, fontFamily:"inherit" }}>Entrar</button>
        <p style={{ textAlign:"center", color:"rgba(255,255,255,0.35)", fontSize:13, marginTop:16 }}>Não tens conta? Pede ao teu admin.</p>
      </div>
    </div>
  );
};

// ── MAIN ──────────────────────────────────────────────────────
// ── AUTH SCREEN ───────────────────────────────────────────────
const AuthScreen = ({ onLogin, onRegister, error, loading }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [name, setName] = useState("");
  const inp = { width:"100%", padding:"14px 16px", borderRadius:14, border:"none", background:"rgba(255,255,255,0.12)", color:"#fff", fontSize:16, marginBottom:12, boxSizing:"border-box", outline:"none", fontFamily:"inherit" };
  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, ${T.navy} 0%, #0a1628 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28 }}>
      <div style={{ marginBottom:36, textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:22, background:T.brand, display:"flex", alignItems:"center", justifyContent:"center", fontSize:38, margin:"0 auto 18px", boxShadow:`0 8px 32px ${T.brand}66` }}>🟥</div>
        <h1 style={{ color:"#fff", fontSize:34, fontWeight:900, margin:0, letterSpacing:-1.5 }}>Multeam</h1>
        <p style={{ color:"rgba(255,255,255,0.45)", margin:"5px 0 0", fontSize:15 }}>Gestão de multas de balneário</p>
      </div>
      <div style={{ width:"100%", maxWidth:340 }}>
        <div style={{ display:"flex", background:"rgba(255,255,255,0.1)", borderRadius:14, padding:4, marginBottom:20 }}>
          {[["login","Entrar"],["register","Criar conta"]].map(([m,l])=>(
            <button key={m} onClick={()=>setMode(m)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:mode===m?"#fff":"transparent", color:mode===m?T.navy:"rgba(255,255,255,0.6)", fontWeight:700, cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>{l}</button>
          ))}
        </div>
        {mode==="register" && <input style={inp} placeholder="Nome completo" value={name} onChange={e=>setName(e.target.value)} />}
        <input style={inp} type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input style={inp} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
        {error && <div style={{ background:"rgba(230,57,70,0.2)", borderRadius:10, padding:"10px 14px", marginBottom:12, color:"#FFB3B8", fontSize:13 }}>{error}</div>}
        <button disabled={loading} onClick={()=>mode==="login"?onLogin(email,pass):onRegister(email,pass,name)} style={{ width:"100%", padding:16, borderRadius:14, border:"none", background:loading?T.sub:T.brand, color:"#fff", fontSize:17, fontWeight:800, cursor:loading?"default":"pointer", fontFamily:"inherit", marginTop:4 }}>
          {loading?"A carregar...":(mode==="login"?"Entrar":"Criar conta")}
        </button>
      </div>
    </div>
  );
};

// ── SPINNER ───────────────────────────────────────────────────
const Spinner = ({ msg="A carregar..." }) => (
  <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:T.bg, fontFamily:"system-ui" }}>
    <div style={{ width:40, height:40, border:`3px solid ${T.border}`, borderTop:`3px solid ${T.navy}`, borderRadius:20 }} className="spin" />
    <p style={{ marginTop:16, color:T.sub, fontSize:14 }}>{msg}</p>
    <style>{`@keyframes spin{to{transform:rotate(360deg)}} .spin{animation:spin 1s linear infinite}`}</style>
  </div>
);

// ── MAIN APP ──────────────────────────────────────────────────
export default function App() {
  const [token, setToken]       = useState(null);
  const [myUserId, setMyUserId] = useState(null);
  const [profile, setProfile]   = useState(null);
  const [teams, setTeams]       = useState([]);
  const [members, setMembers]   = useState([]);
  const [fineTypes, setFineTypes] = useState([]);
  const [fines, setFines]       = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [presences, setPresences] = useState({});
  const [teamId, setTeamId]     = useState(null);
  const [tab, setTab]           = useState("home");
  const [sub, setSub]           = useState(null);
  const [modal, setModal]       = useState(null);
  const [treinosModal, setTreinosModal] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [authError, setAuthError] = useState(null);

  const team = teams.find(t=>t.id===teamId);
  const isAdmin = members.some(m=>m.teamId===teamId&&m.userId===myUserId&&m.role==="admin");

  // Load team data from DB
  const loadTeam = async (tok, tid) => {
    const [mData, ftData, fData, eData, tData, pData] = await Promise.all([
      api.get(`team_members?team_id=eq.${tid}&select=*,profiles(*)`, tok),
      api.get(`fine_types?team_id=eq.${tid}&order=amount.asc`, tok),
      api.get(`fines?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`expenses?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`trainings?team_id=eq.${tid}&order=date.asc,time.asc`, tok),
      api.get(`presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.${tid}`, tok).catch(()=>[]),
    ]);
    // Build presences map {trainingId: {memberId: status}}
    const presMap = {};
    pData.forEach(p => {
      if (!presMap[p.training_id]) presMap[p.training_id] = {};
      presMap[p.training_id][p.member_id] = p.status;
    });
    return { members:mData.map(aMember), fineTypes:ftData.map(aFineType), fines:fData.map(aFine), expenses:eData.map(aExpense), trainings:tData.map(aTraining), presences:presMap };
  };

  // Init app after login
  const initApp = async (tok, uid) => {
    setLoading(true);
    try {
      // Load profile (trigger creates it on signup, but add fallback)
      let profData = await api.get(`profiles?id=eq.${uid}`, tok);
      let p = profData[0];

      // Fallback: create profile if doesn't exist yet
      if (!p) {
        try {
          const created = await api.post('profiles', { id: uid, name: 'Utilizador' }, tok);
          p = Array.isArray(created) ? created[0] : created;
        } catch(e) { console.warn('Profile creation fallback failed:', e); }
      }

      if (p) setProfile({ id:p.id, name:p.name||'', initials:mk(p.name||'U'), position:p.position||'', phone:p.phone||'', birthday:p.birthday||'', email:'' });

      const mbrData = await api.get(`team_members?user_id=eq.${uid}&select=team_id`, tok);
      if (!mbrData.length) { setAppReady(true); setLoading(false); return; }

      const ids = mbrData.map(m=>m.team_id);
      const teamsData = await api.get(`teams?id=in.(${ids.join(',')})`, tok);
      const adapted = teamsData.map(aTeam);
      setTeams(adapted);

      if (adapted.length > 0) {
        const first = adapted[0].id;
        setTeamId(first);
        const td = await loadTeam(tok, first);
        setMembers(td.members); setFineTypes(td.fineTypes);
        setFines(td.fines); setExpenses(td.expenses);
        setTrainings(td.trainings); setPresences(td.presences);
      }
      setAppReady(true);
    } catch(e) { setAuthError(`Erro: ${e.message}`); }
    finally { setLoading(false); }
  };

  // Switch team
  const switchTeam = async id => {
    setTeamId(id); setLoading(true); setTab("home");
    try {
      const td = await loadTeam(token, id);
      setMembers(td.members); setFineTypes(td.fineTypes);
      setFines(td.fines); setExpenses(td.expenses);
      setTrainings(td.trainings); setPresences(td.presences);
    } catch(e) { console.error(e); }
    setLoading(false);
  };

  // Auth
  const handleLogin = async (email, pass) => {
    setLoading(true); setAuthError(null);
    try {
      const d = await api.signIn(email, pass);
      const tok = d.access_token || d.session?.access_token;
      const uid = d.user?.id;
      if (!tok || !uid) throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
      setToken(tok); setMyUserId(uid); await initApp(tok, uid);
    } catch(e) { setAuthError(e.message); setLoading(false); }
  };

  const handleRegister = async (email, pass, name) => {
    setLoading(true); setAuthError(null);
    try {
      const d = await api.signUp(email, pass, name);
      const tok = d.access_token || d.session?.access_token;
      const uid = d.user?.id;
      if (tok && uid) {
        // Update profile with the provided name
        try { await api.patch(`profiles?id=eq.${uid}`, { name, initials: mk(name) }, tok); } catch(e) {}
        setToken(tok); setMyUserId(uid); await initApp(tok, uid);
      } else if (uid) {
        try {
          const d2 = await api.signIn(email, pass);
          const tok2 = d2.access_token || d2.session?.access_token;
          if (tok2) { setToken(tok2); setMyUserId(d2.user.id); await initApp(tok2, d2.user.id); }
          else setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
        } catch { setAuthError("Conta criada! Toca em 'Entrar' para aceder."); }
      } else {
        setAuthError("Erro ao criar conta. Tenta novamente.");
      }
    } catch(e) { setAuthError(e.message); }
    setLoading(false);
  };

  const handleLogout = () => { setToken(null); setMyUserId(null); setProfile(null); setTeams([]); setMembers([]); setFineTypes([]); setFines([]); setExpenses([]); setTrainings([]); setPresences({}); setTeamId(null); setAppReady(false); setTab("home"); };

  // Data actions
  const addFine = async d => {
    try { const [f]=await api.post('fines',{team_id:d.teamId,member_id:d.memberId,amount:d.amount,reason:d.reason,emoji:d.emoji,paid:false,assigned_by:myUserId},token); setFines(p=>[aFine(f),...p]); } catch(e){console.error(e);}
  };
  const togglePaid = async id => {
    const f=fines.find(f=>f.id===id); if(!f)return;
    try { await api.patch(`fines?id=eq.${id}`,{paid:!f.paid,paid_at:!f.paid?new Date().toISOString():null},token); setFines(p=>p.map(x=>x.id===id?{...x,paid:!x.paid}:x)); } catch(e){console.error(e);}
  };
  const addExpense = async d => {
    try { const [e]=await api.post('expenses',{team_id:d.teamId,description:d.description,amount:d.amount,created_by:myUserId},token); setExpenses(p=>[aExpense(e),...p]); } catch(e){console.error(e);}
  };
  const addTraining = async d => {
    try { const [t]=await api.post('trainings',{team_id:d.teamId,type:d.type,date:d.date||null,time:d.time||null,location:d.location,notes:d.notes,recurring:d.recurring||false,days:d.days||null,opponent:d.opponent||null,home_away:d.homeAway||null,squad:d.squad||null,created_by:myUserId},token); setTrainings(p=>[...p,aTraining(t)]); } catch(e){console.error(e);}
  };
  const delTraining = async id => {
    try { await api.del(`trainings?id=eq.${id}`,token); setTrainings(p=>p.filter(t=>t.id!==id)); } catch(e){console.error(e);}
  };
  const setPresence = async (tid,mid,status) => {
    try {
      if(!status){ await api.del(`presences?training_id=eq.${tid}&member_id=eq.${mid}`,token); setPresences(p=>{const t={...(p[tid]||{})};delete t[mid];return{...p,[tid]:t};}); }
      else { await api.upsert('presences',{training_id:tid,member_id:mid,status},token); setPresences(p=>({...p,[tid]:{...(p[tid]||{}),[mid]:status}})); }
    } catch(e){console.error(e);}
  };
  const addMember = async d => {
    try { const [m]=await api.post('team_members',{team_id:d.teamId,user_id:crypto.randomUUID(),role:d.role,position:d.position},token); setMembers(p=>[...p,{id:m.id,teamId:m.team_id,userId:m.user_id,role:m.role,name:d.name,initials:mk(d.name),position:d.position,phone:d.phone||'',birthday:d.birthday||''}]); } catch(e){console.error(e);}
  };
  const toggleRole = async id => {
    const m=members.find(m=>m.id===id); if(!m)return; const nr=m.role==='admin'?'player':'admin';
    try { await api.patch(`team_members?id=eq.${id}`,{role:nr},token); setMembers(p=>p.map(m=>m.id===id?{...m,role:nr}:m)); } catch(e){console.error(e);}
  };
  const removeMember = async id => {
    try { await api.del(`team_members?id=eq.${id}`,token); setMembers(p=>p.filter(m=>m.id!==id)); } catch(e){console.error(e);}
  };
  const editMember = async (id,data) => {
    try {
      await api.patch(`team_members?id=eq.${id}`,{position:data.position},token);
      const m=members.find(m=>m.id===id);
      if(m?.userId===myUserId) await api.patch(`profiles?id=eq.${myUserId}`,{name:data.name,phone:data.phone,birthday:data.birthday},token);
      setMembers(p=>p.map(m=>m.id===id?{...m,...data}:m));
    } catch(e){console.error(e);}
  };
  const [teamError, setTeamError] = useState(null);

  const createTeam = async d => {
    setTeamError(null);
    try {
      const tid = crypto.randomUUID();
      const invCode = Math.random().toString(36).substring(2,5).toUpperCase()+'-'+Math.random().toString(36).substring(2,6).toUpperCase();

      // 1. Inserir equipa
      await api.post('teams',{ id:tid, name:d.name, emoji:d.emoji, color:d.color, season:d.season||'2025/26', country:d.country||'Portugal', sport:d.sport||'Futebol 11', currency:d.currency||'EUR', city:d.city||'', postal:d.postal||'', created_by:myUserId, invite_code:invCode },token);

      // 2. Inserir membro admin (agora é membro → SELECT funciona)
      await api.post('team_members',{ team_id:tid, user_id:myUserId, role:'admin' },token);

      // 3. Tipos de multa padrão
      await Promise.all(DEFAULT_FINE_TYPES.map(ft=>api.post('fine_types',{ team_id:tid, name:ft.name, amount:ft.amount },token)));

      // 4. Ler equipa
      const tr = await api.get(`teams?id=eq.${tid}`,token);
      const newTeam = aTeam(tr[0] || { id:tid, name:d.name, emoji:d.emoji, color:d.color, season:d.season, invite_code:invCode });
      setTeams(p=>[...p, newTeam]);
      await switchTeam(tid);
    } catch(e){ setTeamError(e.message||JSON.stringify(e)); }
  };
  const joinTeam = async t => {
    try {
      await api.post('team_members',{team_id:t.id,user_id:myUserId,role:'player'},token);
      const [td]=await api.get(`teams?id=eq.${t.id}`,token);
      setTeams(p=>p.some(x=>x.id===t.id)?p:[...p,aTeam(td)]);
      await switchTeam(t.id);
    } catch(e){console.error(e);}
  };
  const findTeamByCode = async code => {
    try {
      const r = await fetch(`${SB_URL}/rest/v1/rpc/find_team_by_code`, {
        method: 'POST',
        headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${token||SB_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim().toUpperCase() })
      });
      const d = await r.json();
      const t = Array.isArray(d) ? d[0] : d;
      return t?.id ? aTeam({...t, invite_code: t.invite_code}) : null;
    } catch(e) { return null; }
  };

  const [pendingInvite, setPendingInvite] = useState(() => {
    const p = new URLSearchParams(window.location.search);
    return p.get('invite') || null;
  });

  // Auto-open join modal if invite code in URL
  useEffect(() => {
    if (appReady && pendingInvite) {
      setModal("join");
    }
  }, [appReady, pendingInvite]);
  if (!token || !appReady) return <AuthScreen onLogin={handleLogin} onRegister={handleRegister} error={authError} loading={loading} />;
  if (loading) return <Spinner />;

  const nav = [{id:"home",emoji:"🏠",label:"Início"},{id:"fines",emoji:"🟥",label:"Multas"},{id:"treinos",emoji:"🗓️",label:"Treinos"},{id:"caixa",emoji:"💰",label:"Caixa"},{id:"geral",emoji:"👤",label:"Geral"}];
  const wrap = ch => <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>{ch}</div>;

  if (!team) return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24, fontFamily:"system-ui" }}>
      <p style={{ fontSize:40 }}>⚽</p>
      <p style={{ fontWeight:800, fontSize:20, margin:"8px 0 6px" }}>Sem equipas ainda</p>
      <p style={{ color:T.sub, marginBottom:16 }}>Cria ou junta-te a uma equipa</p>
      {teamError && <div style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", marginBottom:16, width:"100%", maxWidth:340, fontSize:13, color:"#C00", wordBreak:"break-all" }}>{teamError}</div>}
      <button onClick={()=>setModal("team")} style={{ width:"100%", maxWidth:300, padding:15, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontWeight:800, cursor:"pointer", marginBottom:10, fontFamily:"inherit" }}>➕ Criar equipa</button>
      <button onClick={()=>setModal("join")} style={{ width:"100%", maxWidth:300, padding:15, borderRadius:14, border:`1.5px solid ${T.navy}`, background:"transparent", color:T.navy, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>🔗 Entrar com código</button>
      {modal==="team" && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="join" && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);}} />}
    </div>
  );

  if (tab==="treinos") return (
    <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      <TreinosPage team={team} trainings={trainings} members={members} myUserId={myUserId} isAdmin={isAdmin} presences={presences} onSetPresence={setPresence} onAddType={addTraining} onDelete={delTraining} onBack={()=>setTab("home")} modal={treinosModal} setModal={setTreinosModal} />
    </div>
  );
  if (sub?.type==="member") return wrap(<MemberDetailScreen member={sub.data} team={team} fines={fines} isAdmin={isAdmin} onBack={()=>setSub(null)} onTogglePaid={togglePaid} />);
  if (sub?.type==="manage") {
    const mt=teams.find(t=>t.id===sub.data);
    return wrap(<><ManageTeamScreen team={mt} members={members} myUserId={myUserId} onBack={()=>setSub(null)} onAddMember={()=>setModal("member")} onToggleRole={toggleRole} onRemoveMember={removeMember} onEditMember={editMember} onRegenerateCode={()=>{}} />{modal==="member"&&<AddMemberModal team={mt} onAdd={addMember} onClose={()=>setModal(null)} />}</>);
  }

  return (
    <div style={{ background:T.bg, minHeight:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}dd)`, color:"#fff", padding:"52px 16px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <p style={{ margin:0, fontSize:11, opacity:0.6, fontWeight:700, letterSpacing:1, textTransform:"uppercase" }}>Multeam</p>
          <h2 style={{ margin:0, fontSize:22, fontWeight:900, letterSpacing:-0.5 }}>{team.name}</h2>
          {isAdmin && <AdminHeaderBadge teamColor={team.color} />}
        </div>
        <button onClick={()=>setModal("picker")} style={{ background:"rgba(255,255,255,0.22)", border:"none", color:"#fff", borderRadius:20, padding:"8px 16px", fontSize:14, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>{team.emoji} Trocar ▾</button>
      </div>

      {tab==="home"  && <HomeTab team={team} fines={fines} members={members} expenses={expenses} trainings={trainings} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} />}
      {tab==="fines" && <FinesTab team={team} fines={fines} members={members} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} onTogglePaid={togglePaid} onSelectMember={m=>setSub({type:"member",data:m})} />}
      {tab==="caixa" && <TreasuryTab team={team} fines={fines} members={members} expenses={expenses} isAdmin={isAdmin} onAddExpense={()=>setModal("expense")} />}
      {tab==="geral" && <GeneralTab user={profile||{}} myUserId={myUserId} teams={teams} members={members} onEditProfile={()=>setModal("profile")} onManageTeam={id=>setSub({type:"manage",data:id})} onCreateTeam={()=>setModal("team")} onJoinTeam={()=>setModal("join")} onLogout={handleLogout} />}

      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.card, borderTop:`1px solid ${T.border}`, display:"flex", padding:"8px 0 24px", boxShadow:"0 -2px 20px rgba(0,0,0,0.06)" }}>
        {nav.map(item=>(
          <button key={item.id} onClick={()=>setTab(item.id)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px 0", fontFamily:"inherit" }}>
            <span style={{ fontSize:20 }}>{item.emoji}</span>
            <span style={{ fontSize:10, fontWeight:tab===item.id?800:500, color:tab===item.id?team.color:T.sub }}>{item.label}</span>
          </button>
        ))}
      </div>

      {modal==="picker"  && <TeamPickerModal teams={teams} members={members} myUserId={myUserId} currentTeamId={teamId} onSelect={switchTeam} onClose={()=>setModal(null)} onCreateTeam={()=>setModal("team")} />}
      {modal==="fine"    && isAdmin && <AddFineModal team={team} members={members} myUserId={myUserId} fineTypes={fineTypes} onAdd={addFine} onClose={()=>setModal(null)} />}
      {modal==="expense" && isAdmin && <AddExpenseModal team={team} onAdd={addExpense} onClose={()=>setModal(null)} />}
      {modal==="team"    && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="profile" && <EditProfileModal user={profile||{}} onSave={async u=>{await editMember(members.find(m=>m.userId===myUserId&&m.teamId===teamId)?.id,u);setProfile(p=>({...p,...u}));}} onClose={()=>setModal(null)} />}
      {modal==="join"    && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);}} />}
    </div>
  );
}

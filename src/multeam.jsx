import { useState, useEffect, useCallback } from "react";

// ── TOKENS ──────────────────────────────────────────────────
const T = {
  bg: "#F0F1F6", card: "#FFFFFF", brand: "#E63946", green: "#2DC653",
  yellow: "#FFCC00", navy: "#1D3557", text: "#1D1D1F", sub: "#86868B",
  border: "#E5E5EA", inputBg: "#F8F8FA",
};

// ── SUPABASE ─────────────────────────────────────────────────
const SB_URL = "https://syakniwyvcfdqsrwsalk.supabase.co";
const SB_KEY = "sb_publishable_MRMHqVQ-key1c5kf7UOLUA_rwyu85BI";
const VAPID_PUBLIC = "BG6saRvz-Eh318LO9cY2w5zSN7sAdDYekBYxqPdrrQ671pN_vUzBsV9iRFVOnO37rQ81o-cYoOuTCwmo--CQnEk";

const api = {
  h(tok) { return { 'apikey':SB_KEY, 'Authorization':`Bearer ${tok||SB_KEY}`, 'Content-Type':'application/json', 'Prefer':'return=representation' }; },
  async get(p,tok)      { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async post(p,b,tok)   { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async insert(p,b,tok) { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:{...this.h(tok),'Prefer':'return=minimal'},body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.status; },
  async patch(p,b,tok)  { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'PATCH',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async del(p,tok)      { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'DELETE',headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); },
  async upsert(p,b,tok) { const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:{...this.h(tok),'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async signIn(email,password) { const r=await fetch(`${SB_URL}/auth/v1/token?grant_type=password`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.error); return d; },
  async signUp(email,password,name) { const r=await fetch(`${SB_URL}/auth/v1/signup`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password,data:{name}})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.msg||'Erro'); return d; },
  async resetPassword(email) { await fetch(`${SB_URL}/auth/v1/recover`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email})}); },
  async updatePassword(newPass, accessToken) { const r=await fetch(`${SB_URL}/auth/v1/user`,{method:'PUT',headers:{'apikey':SB_KEY,'Authorization':`Bearer ${accessToken}`,'Content-Type':'application/json'},body:JSON.stringify({password:newPass})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||'Erro'); return d; },
};

// ── DATA ADAPTERS ────────────────────────────────────────────
const mk = s => s ? s.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '??';
const aTeam = t => ({ id:t.id, name:t.name, emoji:t.emoji||'⚽', color:t.color||'#1D3557', season:t.season||'2025/26', inviteCode:t.invite_code, country:t.country, sport:t.sport, currency:t.currency, city:t.city, postal:t.postal, createdBy:t.created_by });
const aMember = m => ({ id:m.id, teamId:m.team_id, userId:m.user_id, role:m.role, name:m.profiles?.name||'Utilizador', initials:mk(m.profiles?.name||'U'), position:m.position||m.profiles?.position||'Jogador', phone:m.profiles?.phone||'', birthday:m.profiles?.birthday||'', avatarUrl:m.profiles?.avatar_url||null });
const aFine = f => ({ id:f.id, teamId:f.team_id, memberId:f.member_id, amount:Number(f.amount), reason:f.reason||'', emoji:f.emoji||'🟥', paid:f.paid, date:f.created_at?.split('T')[0]||'' });
const aFineType = ft => ({ id:ft.id, teamId:ft.team_id, name:ft.name, amount:Number(ft.amount), emoji:ft.emoji||'🟥' });
const aExpense = e => ({ id:e.id, teamId:e.team_id, description:e.description, amount:Number(e.amount), date:e.created_at?.split('T')[0]||'' });
const aTraining = t => ({ id:t.id, teamId:t.team_id, type:t.type||'treino', date:t.date||'', time:(t.time||'').slice(0,5), location:t.location||'', notes:t.notes||'', recurring:t.recurring||false, days:t.days||[], opponent:t.opponent||'', homeAway:t.home_away||'casa', squad:t.squad||[], createdBy:t.created_by });

const DAYS_PT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

// ── HELPERS ──────────────────────────────────────────────────
const isPast = d => new Date(d + "T23:59:59") < new Date();
const fmtDate = d => { if (!d) return "—"; const dt = new Date(d + "T00:00:00"); return dt.toLocaleDateString("pt-PT", { day:"2-digit", month:"long", year:"numeric" }); };
const age = d => d ? Math.floor((new Date() - new Date(d)) / (365.25*24*3600*1000)) : null;

const Avatar = ({ initials, color = T.navy, size = 38, photo }) => (
  photo
    ? <div style={{ width:size, height:size, borderRadius:size/2, overflow:"hidden", flexShrink:0 }}><img src={photo} style={{ width:"100%", height:"100%", objectFit:"cover" }} /></div>
    : <div style={{ width:size, height:size, borderRadius:size/2, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:size*0.33, flexShrink:0, letterSpacing:-0.5 }}>{initials}</div>
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

const AddFineModal = ({ team, myUserId, token, onAdd, onClose }) => {
  const [tm, setTm]   = useState([]);
  const [tft, setTft] = useState([]);
  const [mid, setMid] = useState("");
  const [sft, setSft] = useState(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [addingType, setAddingType] = useState(false);
  const [newName, setNewName] = useState(""); const [newAmount, setNewAmount] = useState(""); const [newEmoji, setNewEmoji] = useState("🟥");
  const [savingType, setSavingType] = useState(false);

  const [editingFt, setEditingFt] = useState(null);
  const [editName, setEditName] = useState(""); const [editAmount, setEditAmount] = useState(""); const [editEmoji, setEditEmoji] = useState("🟥");
  const [savingEdit, setSavingEdit] = useState(false);

  const startEdit = (ft, e) => { e.stopPropagation(); setEditingFt(ft); setEditName(ft.name); setEditAmount(String(ft.amount)); setEditEmoji(ft.emoji); };

  const saveEdit = async () => {
    if (!editName.trim() || !editAmount) return;
    setSavingEdit(true);
    try {
      const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
      await fetch(`${SB_URL}/rest/v1/fine_types?id=eq.${editingFt.id}`, { method:'PATCH', headers: H, body: JSON.stringify({ name: editName.trim(), amount: Number(editAmount), emoji: editEmoji }) });
      setTft(p => p.map(x => x.id===editingFt.id ? {...x, name:editName.trim(), amount:Number(editAmount), emoji:editEmoji} : x));
      if (sft?.id===editingFt.id) setSft(f => ({...f, name:editName.trim(), amount:Number(editAmount), emoji:editEmoji}));
      setEditingFt(null);
    } catch(e) { setErr(e.message); }
    setSavingEdit(false);
  };

  const deleteFt = async (ft, e) => {
    e.stopPropagation();
    if (!window.confirm(`Apagar "${ft.name}"?`)) return;
    try {
      const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}` };
      await fetch(`${SB_URL}/rest/v1/fine_types?id=eq.${ft.id}`, { method:'DELETE', headers: H });
      setTft(p => p.filter(x => x.id !== ft.id));
      if (sft?.id===ft.id) setSft(null);
    } catch(e) { setErr(e.message); }
  };

  const QUICK_EMOJIS = ["🟥","🟨","⏰","👕","🏃","🚫","❌","💸","🤦","📵","🤕","😤"];

  useEffect(() => {
    const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}` };
    Promise.all([
      fetch(`${SB_URL}/rest/v1/team_members?team_id=eq.${team.id}&select=*`, { headers: H }).then(r => r.json()),
      fetch(`${SB_URL}/rest/v1/fine_types?team_id=eq.${team.id}&order=amount.asc`, { headers: H }).then(r => r.json()),
    ]).then(async ([mRaw, ftRaw]) => {
      const uids = (Array.isArray(mRaw) ? mRaw : []).map(m => m.user_id).filter(Boolean);
      let profMap = {};
      if (uids.length) {
        const pr = await fetch(`${SB_URL}/rest/v1/profiles?id=in.(${uids.join(',')})`, { headers: H }).then(r => r.json()).catch(() => []);
        (Array.isArray(pr) ? pr : []).forEach(p => { profMap[p.id] = p; });
      }
      setTm((Array.isArray(mRaw) ? mRaw : []).map(m => ({
        id: String(m.id), teamId: m.team_id, userId: m.user_id, role: m.role,
        name: profMap[m.user_id]?.name || 'Utilizador'
      })));
      setTft((Array.isArray(ftRaw) ? ftRaw : []).map(ft => ({
        id: String(ft.id), name: ft.name, amount: Number(ft.amount), emoji: ft.emoji || '🟥'
      })));
      setLoading(false);
    }).catch(e => { setErr(e.message); setLoading(false); });
  }, []);

  const saveNewType = async () => {
    if (!newName.trim() || !newAmount) return;
    setSavingType(true);
    try {
      const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Prefer': 'return=representation' };
      const r = await fetch(`${SB_URL}/rest/v1/fine_types`, { method:'POST', headers: H, body: JSON.stringify({ team_id: team.id, name: newName.trim(), amount: Number(newAmount), emoji: newEmoji }) });
      const data = await r.json();
      const ft = Array.isArray(data) ? data[0] : data;
      if (ft?.id) {
        const newFt = { id: String(ft.id), name: ft.name, amount: Number(ft.amount), emoji: ft.emoji || '🟥' };
        setTft(p => [...p, newFt]);
        setSft(newFt);
      }
      setAddingType(false); setNewName(""); setNewAmount(""); setNewEmoji("🟥");
    } catch(e) { setErr(e.message); }
    setSavingType(false);
  };

  const canSubmit = mid && sft;

  const submit = async () => {
    if (!canSubmit) return;
    setErr("");
    try {
      await onAdd({ teamId: team.id, memberId: mid, amount: sft.amount, reason: reason || sft.name, emoji: sft.emoji, paid: false, date: new Date().toISOString().split("T")[0] });
      onClose();
    } catch(e) { setErr(e.message); }
  };

  return (
    <Sheet title="🟥 Nova multa" onClose={onClose}>
      {loading ? (
        <p style={{ textAlign:"center", color:T.sub, padding:"20px 0" }}>A carregar...</p>
      ) : (<>
        {/* Player selector */}
        <FL>Jogador ({tm.length})</FL>
        <FSel value={mid} onChange={e => setMid(e.target.value)}>
          <option value="">— Selecionar jogador —</option>
          {tm.map(m => <option key={m.id} value={m.id}>{m.name}{m.role==='admin'?' (Admin)':''}</option>)}
        </FSel>

        {/* Fine type grid */}
        <FL>Tipo de multa</FL>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:12 }}>
          {tft.map(ft => editingFt?.id===ft.id ? (
            <div key={ft.id} style={{ gridColumn:"1 / -1", background:T.inputBg, borderRadius:14, padding:"14px", border:`1.5px solid ${T.brand}` }}>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:8 }}>
                {QUICK_EMOJIS.map(e => (
                  <button key={e} onClick={()=>setEditEmoji(e)} style={{ fontSize:18, width:34, height:34, borderRadius:8, border:`2px solid ${editEmoji===e?T.brand:T.border}`, background:editEmoji===e?`${T.brand}15`:"transparent", cursor:"pointer" }}>{e}</button>
                ))}
              </div>
              <FI value={editName} onChange={e=>setEditName(e.target.value)} placeholder="Nome" />
              <FI type="number" value={editAmount} onChange={e=>setEditAmount(e.target.value)} placeholder="Valor €" />
              <div style={{ display:"flex", gap:8 }}>
                <PrimaryBtn onClick={saveEdit} disabled={!editName.trim()||!editAmount||savingEdit} color={T.brand}>{savingEdit?"A guardar...":"✓ Guardar"}</PrimaryBtn>
                <button onClick={()=>setEditingFt(null)} style={{ flex:1, padding:"13px", borderRadius:12, border:`1.5px solid ${T.border}`, background:"transparent", cursor:"pointer", fontFamily:"inherit", fontWeight:700 }}>Cancelar</button>
              </div>
            </div>
          ) : (
            <button key={ft.id} onClick={() => setSft(ft)} style={{
              padding:"12px 10px", borderRadius:14, textAlign:"left", position:"relative",
              border:`2px solid ${sft?.id===ft.id?T.brand:T.border}`,
              background:sft?.id===ft.id?`${T.brand}12`:T.inputBg,
              cursor:"pointer", fontFamily:"inherit",
              boxShadow: sft?.id===ft.id?`0 2px 10px ${T.brand}30`:"none",
            }}>
              {/* Edit/Delete buttons */}
              <div style={{ position:"absolute", top:6, right:6, display:"flex", gap:2 }}>
                <button onClick={(e)=>startEdit(ft,e)} style={{ background:"rgba(0,0,0,0.06)", border:"none", borderRadius:6, width:24, height:24, fontSize:11, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✏️</button>
                <button onClick={(e)=>deleteFt(ft,e)} style={{ background:"rgba(0,0,0,0.06)", border:"none", borderRadius:6, width:24, height:24, fontSize:11, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>🗑️</button>
              </div>
              <div style={{ fontSize:26, marginBottom:4 }}>{ft.emoji}</div>
              <p style={{ margin:0, fontWeight:700, fontSize:12, color:sft?.id===ft.id?T.brand:T.text, paddingRight:52 }}>{ft.name}</p>
              <p style={{ margin:"2px 0 0", fontWeight:900, fontSize:16, color:sft?.id===ft.id?T.brand:T.navy }}>{ft.amount}€</p>
            </button>
          ))}

          {/* Add new type button */}
          <button onClick={() => setAddingType(true)} style={{
            padding:"14px 12px", borderRadius:14, textAlign:"left",
            border:`2px dashed ${T.border}`, background:"transparent",
            cursor:"pointer", fontFamily:"inherit"
          }}>
            <div style={{ fontSize:28, marginBottom:4 }}>➕</div>
            <p style={{ margin:0, fontWeight:700, fontSize:13, color:T.sub }}>Nova</p>
            <p style={{ margin:"2px 0 0", fontWeight:700, fontSize:13, color:T.sub }}>multa</p>
          </button>
        </div>

        {/* Inline new type creator */}
        {addingType && (
          <div style={{ background:T.inputBg, borderRadius:14, padding:"14px", marginBottom:12, border:`1.5px solid ${T.border}` }}>
            <p style={{ margin:"0 0 10px", fontWeight:700, fontSize:13 }}>➕ Novo tipo de multa</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:10 }}>
              {QUICK_EMOJIS.map(e => (
                <button key={e} onClick={()=>setNewEmoji(e)} style={{ fontSize:20, width:38, height:38, borderRadius:10, border:`2px solid ${newEmoji===e?T.brand:T.border}`, background:newEmoji===e?`${T.brand}15`:"transparent", cursor:"pointer" }}>{e}</button>
              ))}
            </div>
            <FI value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Nome (ex: Cartão azul)" />
            <FI type="number" value={newAmount} onChange={e=>setNewAmount(e.target.value)} placeholder="Valor em € (ex: 10)" />
            <div style={{ display:"flex", gap:8 }}>
              <PrimaryBtn onClick={saveNewType} disabled={!newName.trim()||!newAmount||savingType} color={team.color}>
                {savingType ? "A guardar..." : "✓ Criar"}
              </PrimaryBtn>
              <button onClick={()=>setAddingType(false)} style={{ flex:1, padding:"15px", borderRadius:14, border:`1.5px solid ${T.border}`, background:"transparent", cursor:"pointer", fontFamily:"inherit", fontWeight:700, fontSize:14 }}>Cancelar</button>
            </div>
          </div>
        )}

        {/* Selected summary */}
        {sft && (
          <div style={{ background:`${T.brand}10`, border:`1.5px solid ${T.brand}30`, borderRadius:12, padding:"10px 14px", marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:24 }}>{sft.emoji}</span>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:14 }}>{sft.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>Valor: <strong style={{ color:T.brand }}>{sft.amount}€</strong></p>
            </div>
            <button onClick={()=>setSft(null)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:T.sub }}>✕</button>
          </div>
        )}

        <FL>Motivo (opcional)</FL>
        <FI type="text" value={reason} onChange={e => setReason(e.target.value)} placeholder={sft ? sft.name : "Descreve o motivo..."} />
        {err && <p style={{ color:"#C00", fontSize:13, margin:"0 0 10px", background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
        <PrimaryBtn onClick={submit} disabled={!canSubmit} color={T.brand}>
          {canSubmit ? `🟥 Atribuir ${sft.amount}€ a ${tm.find(m=>m.id===mid)?.name||"jogador"}` : (!mid ? "← Seleciona um jogador" : "← Seleciona o tipo")}
        </PrimaryBtn>
      </>)}
    </Sheet>
  );
};

const EditFineModal = ({ fine, onSave, onClose }) => {
  const EMOJIS = ["🟥","🟨","⏰","👕","🏃","🚫","❌","💸","🤦","📵","🤕","😤","🍺","🎂","🍕","🚗","📱","🎯","🔇","💤","🎪","🤡","🍾","🃏","🏆","🎖️"];
  const [emoji, setEmoji] = useState(fine.emoji || "🟥");
  const [reason, setReason] = useState(fine.reason || "");
  const [amount, setAmount] = useState(String(fine.amount));
  const [saving, setSaving] = useState(false);
  const ok = reason.trim() && amount && Number(amount) > 0;
  const save = async () => {
    if (!ok) return;
    setSaving(true);
    await onSave(fine.id, { emoji, reason: reason.trim(), amount: Number(amount) });
    setSaving(false);
    onClose();
  };
  return (
    <Sheet title="✏️ Editar multa" onClose={onClose}>
      <FL>Emoji</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
        {EMOJIS.map(e => (
          <button key={e} onClick={() => setEmoji(e)} style={{ width:40, height:40, borderRadius:10, border:`2px solid ${emoji===e?T.brand:T.border}`, background:emoji===e?`${T.brand}18`:"transparent", fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>{e}</button>
        ))}
      </div>
      <FL>Motivo</FL>
      <FI type="text" value={reason} onChange={e=>setReason(e.target.value)} placeholder="Motivo da multa..." />
      <FL>Valor (€)</FL>
      <FI type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0" />
      <PrimaryBtn onClick={save} disabled={!ok||saving} color={T.brand}>{saving?"A guardar...":"Guardar alterações"}</PrimaryBtn>
    </Sheet>
  );
};

const LogSessionModal = ({ training, existingDates, onLog, onClose }) => {
  // Calculate last 6 real occurrences based on training days
  const getLastOccurrences = () => {
    const today = new Date();
    const results = [];
    for (let i = 1; i <= 42 && results.length < 6; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      if ((training.days||[]).includes(d.getDay())) {
        const dateStr = d.toISOString().split("T")[0];
        results.push(dateStr);
      }
    }
    return results;
  };
  const occurrences = getLastOccurrences();
  const fmtOcc = d => {
    const dt = new Date(d+"T00:00:00");
    return dt.toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"});
  };
  return (
    <Sheet title="📋 Registar sessão" onClose={onClose}>
      <p style={{ margin:"0 0 14px", fontSize:14, color:T.sub }}>Seleciona a data da sessão a registar:</p>
      {occurrences.length === 0 && <p style={{ color:T.sub, textAlign:"center" }}>Sem sessões anteriores encontradas.</p>}
      {occurrences.map(d => {
        const already = existingDates.includes(d);
        return (
          <button key={d} onClick={() => { if(!already) { onLog(d); onClose(); } }} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"13px 14px", borderRadius:12, border:`1.5px solid ${already?T.border:T.green}`, background:already?"transparent":`${T.green}10`, marginBottom:8, cursor:already?"default":"pointer", fontFamily:"inherit", opacity:already?0.5:1 }}>
            <span style={{ fontWeight:700, fontSize:15, color:already?T.sub:T.text }}>{fmtOcc(d)}</span>
            {already ? <span style={{ fontSize:12, color:T.sub }}>✓ já registado</span> : <span style={{ fontSize:12, color:T.green, fontWeight:700 }}>Registar →</span>}
          </button>
        );
      })}
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
  const [date, setDate] = useState(""); const [time, setTime] = useState("19:30"); const [loc, setLoc] = useState(""); const [notes, setNotes] = useState(""); const [err, setErr] = useState("");
  const ok = date && time && loc;
  return (
    <Sheet title="📅 Treino único" onClose={onClose}>
      <FL>Data</FL><FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Principal, Selzach" />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Objetivos do treino..." />
      {err && <p style={{ color:"#C00", fontSize:13, margin:"0 0 10px", background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"treino", recurring:false, date, time, location:loc, notes }); onClose(); } catch(e){ setErr(e.message); } }} disabled={!ok} color={team.color}>Agendar treino</PrimaryBtn>
    </Sheet>
  );
};

// ── TREINO RECORRENTE ─────────────────────────────────────────
const AddRecurringModal = ({ team, onAdd, onClose }) => {
  const [days, setDays] = useState([]); const [time, setTime] = useState("19:30"); const [loc, setLoc] = useState(""); const [notes, setNotes] = useState(""); const [err, setErr] = useState("");
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
      {err && <p style={{ color:"#C00", fontSize:13, margin:"0 0 10px", background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"recorrente", recurring:true, days:days.sort(), time, location:loc, notes }); onClose(); } catch(e){ setErr(e.message); } }} disabled={!ok} color={team.color}>
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
  const [err, setErr] = useState("");
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
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10 }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"jogo", recurring:false, date, time, location:loc||"A definir", notes, opponent, homeAway, squad }); } catch(e){ setErr(e.message); } }} disabled={!ok} color={T.brand}>
        ⚽ Criar jogo vs {opponent||"..."}
      </PrimaryBtn>
    </Sheet>
  );
};

// ── EDITAR TREINO ÚNICO ────────────────────────────────────────
const EditSingleTrainingModal = ({ team, training, onEdit, onClose }) => {
  const [date, setDate] = useState(training.date);
  const [time, setTime] = useState(training.time||"19:00");
  const [loc, setLoc] = useState(training.location);
  const [notes, setNotes] = useState(training.notes);
  const [err, setErr] = useState("");
  const ok = date && time;
  return (
    <Sheet title="✏️ Editar treino" onClose={onClose}>
      <FL>Data</FL><FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Municipal..." />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Objetivos..." />
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10, background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { date, time, location:loc, notes }); onClose(); } catch(e){ setErr(e.message); }}} disabled={!ok} color={team.color}>
        💾 Guardar alterações
      </PrimaryBtn>
    </Sheet>
  );
};

// ── EDITAR JOGO ────────────────────────────────────────────────
const EditMatchModal = ({ team, members, training, onEdit, onClose }) => {
  const tm = members.filter(m=>m.teamId===team.id);
  const [opponent, setOpponent] = useState(training.opponent||"");
  const [date, setDate] = useState(training.date);
  const [time, setTime] = useState(training.time||"15:00");
  const [loc, setLoc] = useState(training.location);
  const [homeAway, setHomeAway] = useState(training.homeAway||"casa");
  const [notes, setNotes] = useState(training.notes);
  const [squad, setSquad] = useState(training.squad||tm.map(m=>m.id));
  const [err, setErr] = useState("");
  const ok = opponent && date && time;
  const toggleSquad = id => setSquad(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id]);
  return (
    <Sheet title="✏️ Editar jogo" onClose={onClose}>
      <FL>Adversário</FL><FI value={opponent} onChange={e=>setOpponent(e.target.value)} placeholder="Ex: FC Grenchen" />
      <FL>Casa ou fora?</FL>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        {[["casa","🏠 Casa"],["fora","✈️ Fora"]].map(([v,l]) => (
          <button key={v} onClick={()=>setHomeAway(v)} style={{ flex:1, padding:"12px", borderRadius:12, border:`2px solid ${homeAway===v?team.color:T.border}`, background:homeAway===v?`${team.color}15`:T.inputBg, cursor:"pointer", fontWeight:700, fontSize:15, fontFamily:"inherit" }}>{l}</button>
        ))}
      </div>
      <FL>Data</FL><FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Municipal..." />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Ex: Campeonato cantonal..." />
      <FL>Convocatória ({squad.length}/{tm.length})</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
        {tm.map(m => (
          <button key={m.id} onClick={()=>toggleSquad(m.id)} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:10, border:`2px solid ${squad.includes(m.id)?team.color:T.border}`, background:squad.includes(m.id)?`${team.color}15`:T.inputBg, cursor:"pointer", fontFamily:"inherit" }}>
            <div style={{ width:28, height:28, borderRadius:14, background:squad.includes(m.id)?team.color:T.border, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:800 }}>{m.initials}</div>
            <span style={{ fontSize:13, fontWeight:600 }}>{m.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10, background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { date, time, location:loc||"A definir", notes, opponent, homeAway, squad }); onClose(); } catch(e){ setErr(e.message); }}} disabled={!ok} color={T.brand}>
        💾 Guardar alterações
      </PrimaryBtn>
    </Sheet>
  );
};

// ── EDITAR RECORRENTE ─────────────────────────────────────────
const EditRecurringModal = ({ team, training, onEdit, onClose }) => {
  const [days, setDays] = useState(training.days||[]);
  const [time, setTime] = useState(training.time||"19:30");
  const [loc, setLoc] = useState(training.location);
  const [notes, setNotes] = useState(training.notes);
  const [err, setErr] = useState("");
  const ok = days.length > 0 && time;
  const toggleDay = d => setDays(p => p.includes(d) ? p.filter(x=>x!==d) : [...p,d]);
  return (
    <Sheet title="✏️ Editar recorrente" onClose={onClose}>
      <FL>Dias da semana</FL>
      <div style={{ display:"flex", gap:6, marginBottom:14, flexWrap:"wrap" }}>
        {DAYS_PT.map((d,i) => (
          <button key={i} onClick={()=>toggleDay(i)} style={{ width:44, height:44, borderRadius:22, border:`2px solid ${days.includes(i)?team.color:T.border}`, background:days.includes(i)?`${team.color}18`:T.inputBg, cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"inherit", color:days.includes(i)?team.color:T.sub }}>{d}</button>
        ))}
      </div>
      <FL>Hora</FL><FI type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <FL>Local</FL><FI type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Ex: Campo Principal..." />
      <FL>Notas (opcional)</FL><FI type="text" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Objetivos..." />
      <div style={{ background:`${team.color}12`, borderRadius:12, padding:"10px 14px", marginBottom:14 }}>
        <p style={{ margin:0, fontSize:13, color:team.color, fontWeight:600 }}>
          🔄 {days.length>0 ? `Repete às ${days.sort().map(d=>DAYS_PT[d]).join(", ")}` : "Seleciona os dias"} · {time}
        </p>
      </div>
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10, background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { recurring:true, days:days.sort(), time, location:loc, notes }); onClose(); } catch(e){ setErr(e.message); }}} disabled={!ok} color={team.color}>
        💾 Guardar alterações
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
  const [photo, setPhoto] = useState(user.avatarUrl||null);
  const fileRef = React.useRef();
  const handlePhoto = e => {
    const file = e.target.files?.[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 200; canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext("2d");
        const s = Math.min(img.width, img.height);
        const ox = (img.width-s)/2, oy = (img.height-s)/2;
        ctx.drawImage(img, ox, oy, s, s, 0, 0, size, size);
        setPhoto(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <Sheet title="✏️ Editar perfil" onClose={onClose}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:16 }}>
        <div onClick={() => fileRef.current?.click()} style={{ cursor:"pointer", position:"relative" }}>
          {photo
            ? <img src={photo} style={{ width:80, height:80, borderRadius:40, objectFit:"cover", border:`3px solid ${T.navy}` }} />
            : <div style={{ width:80, height:80, borderRadius:40, background:T.navy, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:28, fontWeight:800 }}>{(name||"?").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()}</div>
          }
          <div style={{ position:"absolute", bottom:0, right:0, width:26, height:26, borderRadius:13, background:T.brand, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>📷</div>
        </div>
        <p style={{ margin:"8px 0 0", fontSize:12, color:T.sub }}>Toca para alterar foto</p>
        <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={handlePhoto} />
        {photo && <button onClick={() => setPhoto(null)} style={{ marginTop:4, fontSize:11, color:T.brand, background:"none", border:"none", cursor:"pointer" }}>Remover foto</button>}
      </div>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <PrimaryBtn onClick={() => { onSave({ ...user, name, position:pos, phone, birthday:bday, avatarUrl:photo }); onClose(); }} color={T.navy}>Guardar perfil</PrimaryBtn>
    </Sheet>
  );
};

// ── MODAL: EDIT MEMBER ───────────────────────────────────────
const EditMemberModal = ({ member, team, onSave, onClose }) => {
  const [name, setName] = useState(member.name);
  const [pos, setPos] = useState(member.position || "Jogador");
  const [phone, setPhone] = useState(member.phone || "");
  const [bday, setBday] = useState(member.birthday || "");
  const [photo, setPhoto] = useState(member.avatarUrl || null);
  const fileRef = React.useRef();
  const handlePhoto = e => {
    const file = e.target.files?.[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 200; canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext("2d");
        const s = Math.min(img.width, img.height);
        ctx.drawImage(img, (img.width-s)/2, (img.height-s)/2, s, s, 0, 0, size, size);
        setPhoto(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <Sheet title={`✏️ Editar — ${member.name.split(" ")[0]}`} onClose={onClose}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:16 }}>
        <div onClick={() => fileRef.current?.click()} style={{ cursor:"pointer", position:"relative" }}>
          {photo
            ? <img src={photo} style={{ width:72, height:72, borderRadius:36, objectFit:"cover", border:`3px solid ${team.color}` }} />
            : <div style={{ width:72, height:72, borderRadius:36, background:team.color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:24, fontWeight:800 }}>{(name||"?").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()}</div>
          }
          <div style={{ position:"absolute", bottom:0, right:0, width:24, height:24, borderRadius:12, background:T.brand, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>📷</div>
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={handlePhoto} />
        {photo && <button onClick={() => setPhoto(null)} style={{ marginTop:4, fontSize:11, color:T.brand, background:"none", border:"none", cursor:"pointer" }}>Remover foto</button>}
      </div>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+351 / +41..." />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <PrimaryBtn onClick={() => { onSave(member.id, { name, position:pos, phone, birthday:bday, avatarUrl:photo }); onClose(); }} color={team.color}>
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
  const alreadyMember = found && found !== "notfound" && teams.some(t => t.id === found.id);
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
                {alreadyMember
                  ? <p style={{ margin:0, fontSize:13, color:T.green, fontWeight:700 }}>✓ Já és membro desta equipa.</p>
                  : <p style={{ margin:0, fontSize:13, color:T.sub }}>Vais entrar como <strong>👤 Jogador</strong>. O admin pode depois alterar a tua função.</p>
                }
              </div>
            </div>
          )}

          <PrimaryBtn onClick={accept} disabled={!found || found==="notfound"} color={found && found!=="notfound" ? found.color : T.border}>
            {alreadyMember ? `⚡ Ir para ${found?.name}` : "✓ Aceitar convite e entrar"}
          </PrimaryBtn>
        </>
      ) : (
        <div style={{ textAlign:"center", padding:"20px 0 10px" }}>
          <p style={{ fontSize:52 }}>🎉</p>
          <p style={{ fontWeight:800, fontSize:20, margin:"8px 0 6px" }}>Bem-vindo ao {found.name}!</p>
          <p style={{ color:T.sub, fontSize:14, margin:"0 0 16px" }}>Já podes ver os treinos, multas e eventos da equipa.</p>
          {!window.matchMedia('(display-mode: standalone)').matches && (
            <div style={{ background:`${T.green}12`, borderRadius:12, padding:"12px 14px", marginBottom:16, textAlign:"left" }}>
              <p style={{ margin:0, fontSize:13, color:T.green, fontWeight:700 }}>📲 Instala a app!</p>
              <p style={{ margin:"4px 0 0", fontSize:12, color:T.sub }}>No browser toca em <strong>⋮ Menu → Adicionar ao ecrã inicial</strong> para aceder sem precisar do link.</p>
            </div>
          )}
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

const FineGroup = ({ group, color }) => {
  const [open, setOpen] = React.useState(false);
  const mk2 = s => (s||"?").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <div style={{ background:T.card, borderRadius:12, marginBottom:6, overflow:"hidden", borderLeft:`3px solid ${group.unpaid>0?T.brand:T.green}` }}>
      <div onClick={() => setOpen(o=>!o)} style={{ padding:"10px 14px", display:"flex", alignItems:"center", gap:10, cursor:"pointer" }}>
        <div style={{ width:36, height:36, borderRadius:18, background:color||T.brand, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:13, fontWeight:800, flexShrink:0 }}>{mk2(group.name)}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ margin:0, fontWeight:700, fontSize:14, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{group.name}</p>
          <p style={{ margin:0, fontSize:12, color:T.sub }}>{group.fines.length} multa{group.fines.length!==1?"s":""} · {group.unpaid>0?<span style={{color:T.brand}}>{group.unpaid.toFixed(1)}€ por pagar</span>:<span style={{color:T.green}}>tudo pago ✓</span>}</p>
        </div>
        <span style={{ fontSize:15, color:T.sub, flexShrink:0 }}>{open?"▲":"▼"}</span>
      </div>
      {open && group.fines.map((f,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 14px 8px 60px", borderTop:`1px solid ${T.border}`, background:T.bg }}>
          <span style={{ fontSize:18, flexShrink:0 }}>{f.emoji||"🟥"}</span>
          <div style={{ flex:1, minWidth:0 }}>
            <p style={{ margin:0, fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason||"—"}</p>
            <p style={{ margin:0, fontSize:11, color:T.sub }}>{f.date}</p>
          </div>
          <span style={{ fontSize:13, fontWeight:800, color:f.paid?T.green:T.brand, flexShrink:0 }}>{Number(f.amount).toFixed(1)}€</span>
        </div>
      ))}
    </div>
  );
};

const DevedorCard = ({ member, isTop, color, onOpen }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div onClick={()=>setOpen(o=>!o)} style={{ background:isTop?`linear-gradient(135deg,${T.brand},#c0392b)`:T.card, borderRadius:14, marginBottom:8, overflow:"hidden", cursor:"pointer", boxShadow:isTop?`0 6px 20px ${T.brand}55`:"none", border:isTop?"none":`1px solid ${T.border}` }}>
      <div style={{ padding:isTop?"15px 16px":"13px 14px", display:"flex", alignItems:"center", gap:12 }}>
        {member.avatarUrl
          ? <img src={member.avatarUrl} style={{ width:isTop?50:44, height:isTop?50:44, borderRadius:isTop?25:22, objectFit:"cover", flexShrink:0, border:isTop?"3px solid rgba(255,255,255,0.4)":"none" }} />
          : <div style={{ width:isTop?50:44, height:isTop?50:44, borderRadius:isTop?25:22, background:isTop?"rgba(255,255,255,0.25)":color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:isTop?16:14, fontWeight:800, flexShrink:0 }}>{member.initials}</div>
        }
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            {isTop && <span style={{ fontSize:14 }}>🔴</span>}
            <p style={{ margin:0, fontWeight:800, fontSize:isTop?17:15, color:isTop?"#fff":T.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{member.name}</p>
          </div>
          <p style={{ margin:0, fontSize:12, color:isTop?"rgba(255,255,255,0.75)":T.sub }}>{member.fines.length} multa{member.fines.length!==1?"s":""} por pagar</p>
        </div>
        <div style={{ textAlign:"right", flexShrink:0 }}>
          <p style={{ margin:0, fontWeight:900, fontSize:isTop?24:18, color:isTop?"#fff":T.brand }}>{member.unpaid.toFixed(1)}€</p>
          <span style={{ fontSize:11, color:isTop?"rgba(255,255,255,0.6)":T.sub }}>{open?"▲":"▼ Ver"}</span>
        </div>
      </div>
      {open && (
        <div style={{ borderTop:`1px solid ${isTop?"rgba(255,255,255,0.2)":T.border}`, background:isTop?"rgba(0,0,0,0.15)":T.bg, padding:"8px 10px" }}>
          {member.fines.map((f,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 4px" }}>
              <span style={{ fontSize:18 }}>{f.emoji}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontSize:13, fontWeight:600, color:isTop?"rgba(255,255,255,0.9)":T.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
                <p style={{ margin:0, fontSize:11, color:isTop?"rgba(255,255,255,0.55)":T.sub }}>{f.date}</p>
              </div>
              <span style={{ fontSize:14, fontWeight:800, color:isTop?"#fff":T.brand, flexShrink:0 }}>{f.amount}€</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FineGroupHome = ({ group, color, renderFine }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ background:T.card, borderRadius:14, marginBottom:8, overflow:"hidden", borderLeft:`3px solid ${group.unpaid>0?T.brand:T.green}` }}>
      <div onClick={() => setOpen(o=>!o)} style={{ padding:"13px 14px", display:"flex", alignItems:"center", gap:12, cursor:"pointer" }}>
        <Avatar initials={group.initials||"?"} color={color} photo={group.avatarUrl} />
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ margin:0, fontWeight:700, fontSize:15, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{group.name}</p>
          <p style={{ margin:0, fontSize:13, color:T.sub }}>{group.fines.length} multa{group.fines.length!==1?"s":""} · <span style={{color:group.unpaid>0?T.brand:T.green, fontWeight:700}}>{group.total.toFixed(1)}€{group.unpaid>0?` · ${group.unpaid.toFixed(1)}€ por pagar`:""}</span></p>
        </div>
        <span style={{ fontSize:14, color:T.sub, flexShrink:0 }}>{open?"▲":"▼"}</span>
      </div>
      {open && (
        <div style={{ borderTop:`1px solid ${T.border}`, padding:"8px 10px", background:T.bg }}>
          {renderFine
            ? group.fines.map(f => renderFine(f))
            : group.fines.map((f,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 4px" }}>
                <span style={{ fontSize:20, flexShrink:0 }}>{f.emoji}</span>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ margin:0, fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
                  <p style={{ margin:0, fontSize:11, color:T.sub }}>{f.date?.slice?.(5)}</p>
                </div>
                <span style={{ fontSize:14, fontWeight:800, color:f.paid?T.green:T.brand, flexShrink:0 }}>{f.amount}€</span>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

const HomeTab = ({ team, fines, members, expenses, trainings, isAdmin, onAddFine, onSelectMember }) => {
  const tf = fines.filter(f => f.teamId===team.id);
  const collected = tf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  const pending = tf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const spent = expenses.filter(e=>e.teamId===team.id).reduce((s,e)=>s+e.amount,0);
  const balance = collected - spent;
  // Sort fines by member rank (most debt first), then by date desc within same member
  const memberRank = members
    .filter(m=>m.teamId===team.id)
    .map(m=>({ id:m.id, unpaid: tf.filter(f=>f.memberId===m.id&&!f.paid).reduce((s,f)=>s+f.amount,0) }))
    .sort((a,b)=>b.unpaid-a.unpaid)
    .reduce((acc,m,i)=>({...acc,[m.id]:i}),{});
  const recent = [...tf].sort((a,b)=>{
    const rankDiff = (memberRank[a.memberId]??99) - (memberRank[b.memberId]??99);
    if (rankDiff !== 0) return rankDiff;
    return new Date(b.date)-new Date(a.date);
  });
  const upcoming = trainings.filter(t=>t.teamId===team.id&&t.type!=="recorrente"&&!isPast(t.date)).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(0,2);
  const recurring = trainings.filter(t=>t.teamId===team.id&&t.type==="recorrente");
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

      {/* Aniversariantes do mês */}
      {(() => {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const today = now.getDate();
        const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
        const tm = members.filter(m => m.teamId===team.id && m.birthday);
        const bdays = tm.map(m => {
          const [,mm,dd] = (m.birthday||"").split("-").map(Number);
          return { ...m, bMonth:mm, bDay:dd };
        }).filter(m => m.bMonth === currentMonth).sort((a,b) => a.bDay - b.bDay);
        if (!bdays.length) return null;
        return (
          <div style={{ marginBottom:14, background:"#FFF8E7", borderRadius:12, padding:"10px 14px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
              <span style={{ fontSize:14 }}>🎂</span>
              <p style={{ margin:0, fontSize:11, fontWeight:800, color:"#B8860B", textTransform:"uppercase", letterSpacing:1 }}>Aniversariantes de {MONTHS_PT[currentMonth-1]}</p>
            </div>
            <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:2 }}>
              {bdays.map(m => {
                const isToday = m.bDay === today;
                return (
                  <div key={m.id} style={{ flexShrink:0, display:"flex", alignItems:"center", gap:6, background:isToday?"linear-gradient(135deg,#FF6B35,#FFB347)":"#fff", borderRadius:20, padding:"5px 10px 5px 6px", border:isToday?"none":"1px solid #FFE0A0", boxShadow:isToday?"0 2px 8px #FF6B3533":"none" }}>
                    {m.avatarUrl
                      ? <img src={m.avatarUrl} style={{ width:26, height:26, borderRadius:13, objectFit:"cover", flexShrink:0 }} />
                      : <div style={{ width:26, height:26, borderRadius:13, background:isToday?"rgba(255,255,255,0.3)":team.color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:10, fontWeight:800, flexShrink:0 }}>{m.initials}</div>
                    }
                    <span style={{ fontSize:12, fontWeight:700, color:isToday?"#fff":"#8B6914", whiteSpace:"nowrap" }}>{m.name.split(" ")[0]}</span>
                    <span style={{ fontSize:11, fontWeight:900, color:isToday?"rgba(255,255,255,0.9)":"#B8860B", whiteSpace:"nowrap", background:isToday?"rgba(255,255,255,0.2)":"#FFE0A0", borderRadius:8, padding:"1px 6px" }}>{isToday?"🎉 Hoje":`${m.bDay} ${MONTHS_PT[currentMonth-1]}`}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Devedores */}
      {(() => {
        const tm = members.filter(m=>m.teamId===team.id);
        const devedores = tm.map(m => ({
          ...m,
          unpaid: tf.filter(f=>f.memberId===m.id&&!f.paid).reduce((s,f)=>s+f.amount,0),
          fines: tf.filter(f=>f.memberId===m.id&&!f.paid)
        })).filter(m=>m.unpaid>0).sort((a,b)=>b.unpaid-a.unpaid);
        if (!devedores.length) return null;
        const [showAll, setShowAll] = React.useState(false);
        const visible = showAll ? devedores : devedores.slice(0, 3);
        const hidden = devedores.length - 3;
        return (
          <div style={{ marginBottom:18 }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:12, padding:"10px 14px", background:`${T.brand}10`, borderRadius:12 }}>
              <span style={{ fontSize:18 }}>🚨</span>
              <p style={{ margin:0, fontSize:13, fontWeight:800, color:T.brand, textTransform:"uppercase", letterSpacing:1.5 }}>Devedores</p>
            </div>
            {visible.map((m,i) => (
              <DevedorCard key={m.id} member={m} isTop={i===0} color={team.color} onOpen={()=>onSelectMember&&onSelectMember(m)} />
            ))}
            {!showAll && hidden > 0 && (
              <button onClick={() => setShowAll(true)} style={{ width:"100%", background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:"11px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.sub, fontFamily:"inherit" }}>
                +{hidden} devedor{hidden!==1?"es":""} — ver todos
              </button>
            )}
            {showAll && devedores.length > 3 && (
              <button onClick={() => setShowAll(false)} style={{ width:"100%", background:"transparent", border:"none", padding:"8px", fontSize:12, cursor:"pointer", color:T.sub, fontFamily:"inherit" }}>
                ▲ Mostrar menos
              </button>
            )}
          </div>
        );
      })()}

      {/* Full Ranking */}
      {(() => {
        const tm = members.filter(m => m.teamId===team.id);
        const ranked = tm.map(m => ({
          ...m,
          unpaid: fines.filter(f=>f.teamId===team.id&&f.memberId===m.id&&!f.paid).reduce((s,f)=>s+f.amount,0),
          paid: fines.filter(f=>f.teamId===team.id&&f.memberId===m.id&&f.paid).reduce((s,f)=>s+f.amount,0)
        })).sort((a,b)=>b.paid-a.paid||b.unpaid-a.unpaid);

        if (ranked.length < 1) return null;

        // Build podium correctly for 1, 2 or 3+ members
        let podiumItems = [];
        if (ranked.length === 1) {
          podiumItems = [{ m: ranked[0], place: 1, medal: "🥇", h: 108, sz: 56 }];
        } else if (ranked.length === 2) {
          podiumItems = [
            { m: ranked[1], place: 2, medal: "🥈", h: 76, sz: 44 },
            { m: ranked[0], place: 1, medal: "🥇", h: 108, sz: 56 },
          ];
        } else {
          podiumItems = [
            { m: ranked[1], place: 2, medal: "🥈", h: 76, sz: 44 },
            { m: ranked[0], place: 1, medal: "🥇", h: 108, sz: 56 },
            { m: ranked[2], place: 3, medal: "🥉", h: 56, sz: 38 },
          ];
        }
        const rest = ranked.slice(3);
        const PLACE_COLORS = { 1: "#FFD700", 2: "#B8C4D0", 3: "#C8854A" };
        const PLACE_GRAD   = { 1: "linear-gradient(135deg,#FFD700,#FFA500)", 2: "linear-gradient(135deg,#C8D6E0,#8FA3B0)", 3: "linear-gradient(135deg,#CD7F32,#9B5E1F)" };
        const AVATAR_GRAD  = { 1: "linear-gradient(135deg,#FFD700,#FF8C00)", 2: "linear-gradient(135deg,#B0BEC5,#607D8B)", 3: "linear-gradient(135deg,#CD7F32,#795548)" };

        return (
          <div style={{ marginBottom:20 }}>
            <p style={{ margin:"0 0 12px", fontSize:12, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>🏆 Ranking de multas pagas</p>
            <div style={{ background:`linear-gradient(160deg,#1a1a2e,#16213e)`, borderRadius:18, padding:"20px 12px 8px" }}>
              <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"center", gap:8 }}>
                {podiumItems.map(({ m, place, medal, h, sz }) => {
                  const isFirst = place === 1;
                  const pc = PLACE_COLORS[place];
                  const ag = AVATAR_GRAD[place];
                  const pg = PLACE_GRAD[place];
                  const paidAmt = m.paid || 0;
                  const unpaidAmt = m.unpaid || 0;
                  return (
                    <div key={m.id} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                      <span style={{ fontSize:isFirst?36:24 }}>{medal}</span>
                      {m.avatarUrl
                        ? <img src={m.avatarUrl} style={{ width:sz, height:sz, borderRadius:sz/2, objectFit:"cover", border:`3px solid ${pc}`, boxShadow:`0 4px 20px ${pc}66`, flexShrink:0 }} />
                        : <div style={{ width:sz, height:sz, borderRadius:sz/2, background:ag, border:`3px solid ${pc}`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:900, fontSize:sz*0.3, boxShadow:`0 4px 20px ${pc}66` }}>{m.initials}</div>
                      }
                      <p style={{ margin:0, fontWeight:700, fontSize:isFirst?14:12, textAlign:"center", maxWidth:90, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", color:"#fff" }}>{m.name.split(" ")[0]}</p>
                      <div style={{ background: paidAmt>0?`${pc}30`:"rgba(255,255,255,0.08)", border:`1px solid ${paidAmt>0?pc:"rgba(255,255,255,0.1)"}`, borderRadius:10, padding:"5px 12px" }}>
                        <p style={{ margin:0, fontWeight:900, fontSize:isFirst?18:14, color: paidAmt>0?pc:"rgba(255,255,255,0.4)" }}>
                          {paidAmt>0?`${paidAmt}€`:unpaidAmt>0?`${unpaidAmt}€ deve`:"✓"}
                        </p>
                      </div>
                      <div style={{ width:"100%", height:h, background:pg, borderRadius:"10px 10px 0 0", marginTop:6, display:"flex", alignItems:"center", justifyContent:"center", opacity:0.9 }}>
                        <p style={{ margin:0, fontWeight:900, fontSize:isFirst?32:24, color:"rgba(0,0,0,0.25)" }}>{place}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {rest.map((m, i) => (
              <div key={m.id} style={{ background:T.card, borderRadius:14, padding:"12px 16px", marginTop:6, display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:16, width:28, textAlign:"center", color:T.sub, fontWeight:700 }}>{i+4}</span>
                <div style={{ width:36, height:36, borderRadius:18, background:T.bg, border:`2px solid ${T.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:12, color:T.sub }}>{m.initials}</div>
                <p style={{ margin:0, flex:1, fontWeight:600, fontSize:15 }}>{m.name}</p>
                <p style={{ margin:0, fontWeight:800, fontSize:15, color:m.unpaid>0?T.brand:T.sub }}>{m.unpaid>0?`${m.unpaid}€`:"✓"}</p>
              </div>
            ))}
          </div>
        );
      })()}
      {(upcoming.length > 0 || recurring.length > 0) && (
        <>
          <Sec label="Próximos treinos" />
          {recurring.map(t => (
            <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:`${team.color}18`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:22 }}>🔄</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{(t.days||[]).map(d=>DAYS_PT[d]).join(", ")} · {t.time}</p>
                <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}</p>
              </div>
            </div>
          ))}
          {upcoming.map(t => (
            <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:`${team.color}18`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <p style={{ margin:0, fontSize:18, fontWeight:900, color:team.color, lineHeight:1 }}>{new Date(t.date+"T00:00:00").getDate()}</p>
                <p style={{ margin:0, fontSize:10, color:team.color, fontWeight:700 }}>{new Date(t.date+"T00:00:00").toLocaleDateString("pt-PT",{month:"short"}).toUpperCase()}</p>
              </div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{t.type==="jogo"?`⚽ vs ${t.opponent}`:"🕐"} {t.time}</p>
                <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <Sec label="Multas recentes" />
      {recent.length === 0 && <p style={{ color:T.sub, textAlign:"center", padding:"16px 0" }}>Sem multas ainda 🎉</p>}
      {(() => {
        const grouped = {};
        recent.forEach(f => {
          const m = gm(f.memberId);
          const k = f.memberId;
          if (!grouped[k]) grouped[k] = { name:m?.name||"?", initials:m?.initials||"?", avatarUrl:m?.avatarUrl||null, fines:[], total:0, unpaid:0 };
          grouped[k].fines.push(f);
          grouped[k].total += f.amount;
          if (!f.paid) grouped[k].unpaid += f.amount;
        });
        return Object.values(grouped).map(g => (
          <FineGroupHome key={g.name} group={g} color={team.color} />
        ));
      })()}
    </div>
  );
};

const FinesTab = ({ team, fines, members, isAdmin, onAddFine, onTogglePaid, onDeleteFine, onEditFine, onSelectMember }) => {
  const [filter, setFilter] = useState("all");
  const [collapsedMonths, setCollapsedMonths] = useState({});
  const tf = fines.filter(f=>f.teamId===team.id);
  const gm = id => members.find(m=>m.id===id);
  const toggleMonth = m => setCollapsedMonths(p=>({...p,[m]:!p[m]}));

  // Fine card with admin actions
  const FineCard = ({ f }) => {
    const m = gm(f.memberId);
    return (
      <div style={{ background:T.card, borderRadius:12, padding:"11px 13px", marginBottom:6, display:"flex", alignItems:"center", gap:10, borderLeft:`3px solid ${f.paid?T.green:T.brand}` }}>
        <span onClick={() => m && onSelectMember(m)} style={{ fontSize:24, flexShrink:0, cursor:"pointer" }}>{f.emoji}</span>
        <div style={{ flex:1, minWidth:0, cursor:"pointer" }} onClick={() => m && onSelectMember(m)}>
          <p style={{ margin:0, fontSize:13, color:T.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
          <p style={{ margin:0, fontSize:11, color:T.sub }}>{f.date}</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4, flexShrink:0 }}>
          <p style={{ margin:0, fontWeight:900, fontSize:16, color:f.paid?T.green:T.brand }}>{f.amount}€</p>
          {isAdmin && <button onClick={() => onTogglePaid(f.id)} style={{ padding:"3px 8px", borderRadius:7, border:`1.5px solid ${f.paid?T.green:T.brand}`, background:"transparent", color:f.paid?T.green:T.brand, fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{f.paid?"✓":"Pagar"}</button>}
          {isAdmin && onEditFine && <button onClick={() => onEditFine(f)} style={{ padding:"2px 6px", borderRadius:7, border:`1.5px solid ${T.sub}`, background:"transparent", color:T.sub, fontSize:10, cursor:"pointer", fontFamily:"inherit" }}>✏️</button>}
          {isAdmin && onDeleteFine && <button onClick={() => { if(window.confirm("Apagar?")) onDeleteFine(f.id); }} style={{ padding:"2px 6px", borderRadius:7, border:"1.5px solid #888", background:"transparent", color:"#888", fontSize:10, cursor:"pointer", fontFamily:"inherit" }}>🗑️</button>}
        </div>
      </div>
    );
  };

  if (filter === "month") {
    // Vista por mês
    const byMonth = {};
    [...tf].sort((a,b)=>new Date(b.date)-new Date(a.date)).forEach(f => {
      const d = new Date(f.date+"T00:00:00");
      const key = d.toLocaleDateString("pt-PT",{month:"long",year:"numeric"}).replace(/^\w/,c=>c.toUpperCase());
      if (!byMonth[key]) byMonth[key] = [];
      byMonth[key].push(f);
    });
    return (
      <div style={{ padding:"14px 16px 100px" }}>
        <div style={{ display:"flex", gap:8, marginBottom:16, overflowX:"auto", paddingBottom:4 }}>
          <Chip active={false} color={team.color} onClick={() => setFilter("all")}>Todas ({tf.length})</Chip>
          <Chip active={false} color={T.brand}    onClick={() => setFilter("unpaid")}>Por pagar ({tf.filter(f=>!f.paid).length})</Chip>
          <Chip active={false} color={T.green}    onClick={() => setFilter("paid")}>Pagas ({tf.filter(f=>f.paid).length})</Chip>
          <Chip active={true}  color={T.navy}     onClick={() => setFilter("month")}>📅 Por mês</Chip>
        </div>
        {Object.entries(byMonth).map(([month, mfines]) => {
          const isCol = collapsedMonths[month];
          const total = mfines.reduce((s,f)=>s+f.amount,0);
          const unpaid = mfines.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
          return (
            <div key={month}>
              <button onClick={()=>toggleMonth(month)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", background:"transparent", border:"none", cursor:"pointer", padding:"12px 0 8px", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:14, fontWeight:900, color:team.color, textTransform:"uppercase", letterSpacing:0.5 }}>{month}</span>
                  <span style={{ fontSize:12, color:T.sub }}>{mfines.length} multa{mfines.length!==1?"s":""}</span>
                  {unpaid>0 ? <span style={{ fontSize:12, color:T.brand, fontWeight:700 }}>· {unpaid.toFixed(1)}€ por pagar</span> : <span style={{ fontSize:12, color:T.green, fontWeight:700 }}>· tudo pago ✓</span>}
                </div>
                <span style={{ fontSize:14, color:T.sub }}>{isCol?"▶":"▼"}</span>
              </button>
              {!isCol && (() => {
                // Group by member within month
                const grouped = {};
                mfines.forEach(f => {
                  const m = gm(f.memberId);
                  const k = f.memberId;
                  if (!grouped[k]) grouped[k] = { name:m?.name||"?", initials:m?.initials||"?", avatarUrl:m?.avatarUrl||null, fines:[], total:0, unpaid:0 };
                  grouped[k].fines.push(f);
                  grouped[k].total += f.amount;
                  if (!f.paid) grouped[k].unpaid += f.amount;
                });
                return Object.values(grouped).map(g => (
                  <FineGroupHome key={g.name} group={g} color={team.color} renderFine={f => <FineCard key={f.id} f={f} />} />
                ));
              })()}
            </div>
          );
        })}
        {isAdmin && <button onClick={onAddFine} style={{ position:"fixed", bottom:76, right:20, width:56, height:56, borderRadius:28, background:T.brand, border:"none", color:"#fff", fontSize:30, cursor:"pointer", boxShadow:`0 4px 20px ${T.brand}55`, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>}
      </div>
    );
  }

  // Vista por membro (default)
  const filtered = tf.filter(f=>filter==="all"||(filter==="unpaid"?!f.paid:f.paid)).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const grouped = {};
  filtered.forEach(f => {
    const m = gm(f.memberId);
    const k = f.memberId;
    if (!grouped[k]) grouped[k] = { name:m?.name||"?", initials:m?.initials||"?", avatarUrl:m?.avatarUrl||null, fines:[], total:0, unpaid:0 };
    grouped[k].fines.push(f);
    grouped[k].total += f.amount;
    if (!f.paid) grouped[k].unpaid += f.amount;
  });

  return (
    <div style={{ padding:"14px 16px 100px" }}>
      <div style={{ display:"flex", gap:8, marginBottom:16, overflowX:"auto", paddingBottom:4 }}>
        <Chip active={filter==="all"}    color={team.color} onClick={() => setFilter("all")}>Todas ({tf.length})</Chip>
        <Chip active={filter==="unpaid"} color={T.brand}    onClick={() => setFilter("unpaid")}>Por pagar ({tf.filter(f=>!f.paid).length})</Chip>
        <Chip active={filter==="paid"}   color={T.green}    onClick={() => setFilter("paid")}>Pagas ({tf.filter(f=>f.paid).length})</Chip>
        <Chip active={filter==="month"}  color={T.navy}     onClick={() => setFilter("month")}>📅 Por mês</Chip>
      </div>
      {filtered.length===0 && <p style={{ textAlign:"center", color:T.sub, padding:40 }}>Sem multas 🙌</p>}
      {Object.values(grouped).map(g => (
        <FineGroupHome key={g.name} group={g} color={team.color} renderFine={f => <FineCard key={f.id} f={f} />} />
      ))}
      {isAdmin && <button onClick={onAddFine} style={{ position:"fixed", bottom:76, right:20, width:56, height:56, borderRadius:28, background:T.brand, border:"none", color:"#fff", fontSize:30, cursor:"pointer", boxShadow:`0 4px 20px ${T.brand}55`, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>}
    </div>
  );
};

// ── TREINOS PAGE (full-screen) ────────────────────────────────
// ── TREINOS COMPONENTS (module-level = no remount on parent render) ──
const PresCounter = ({ count, color }) => (
  <div style={{ width:26, height:26, borderRadius:7, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:13, fontWeight:800 }}>{count}</div>
);

const PresBar = ({ t, presences, myMember, team, members, onSetPresence }) => {
  const [expanded, setExpanded] = React.useState(false);
  const pres = presences[t.id] || {};
  const tm = members.filter(m => m.teamId === team.id);
  const ok = Object.values(pres).filter(s=>s==="present").length;
  const no = Object.values(pres).filter(s=>s==="absent").length;
  const pend = tm.length - ok - no;
  const me = pres[myMember?.id];
  return (
    <div style={{ paddingTop:10, marginTop:8, borderTop:`1px solid ${T.border}` }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <PresCounter count={ok}   color={T.green} />
        <PresCounter count={no}   color="#FF6B00" />
        <PresCounter count={pend} color={T.sub} />
        <button onClick={() => setExpanded(e=>!e)} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:8, padding:"3px 8px", fontSize:11, color:T.sub, cursor:"pointer", fontFamily:"inherit", flexShrink:0 }}>{expanded ? "▲" : "▼ Ver"}</button>
        {!isPast(t.date) && myMember && (
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="present" ? null : "present")} style={{ padding:"6px 12px", borderRadius:18, border:`1.5px solid ${T.green}`, background:me==="present"?T.green:"transparent", color:me==="present"?"#fff":T.green, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✓ Presente</button>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="absent" ? null : "absent")} style={{ padding:"6px 12px", borderRadius:18, border:`1.5px solid #FF6B00`, background:me==="absent"?"#FF6B00":"transparent", color:me==="absent"?"#fff":"#FF6B00", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✗ Ausente</button>
          </div>
        )}
      </div>
      {expanded && (
        <div style={{ marginTop:10, display:"flex", flexDirection:"column", gap:5 }}>
          {tm.map(m => {
            const st = pres[m.id];
            const color = st==="present" ? T.green : st==="absent" ? "#FF6B00" : T.sub;
            const icon = st==="present" ? "✓" : st==="absent" ? "✗" : "?";
            return (
              <div key={m.id} style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:22, height:22, borderRadius:7, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, fontWeight:800, flexShrink:0 }}>{icon}</div>
                <span style={{ fontSize:13, color:st ? T.text : T.sub, fontWeight:st ? 600 : 400 }}>{m.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const EventCard = ({ t, team, members, isAdmin, ctxMenu, setCtxMenu, onDelete, setEditTarget, myMember, presences, onSetPresence }) => {
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
          <div style={{ textAlign:"center", width:38, flexShrink:0 }}>
            <p style={{ margin:0, fontSize:26, fontWeight:900, color:past?T.sub:isJogo?T.brand:team.color, lineHeight:1 }}>{dayNum}</p>
            <p style={{ margin:0, fontSize:9, fontWeight:700, color:T.sub, textTransform:"uppercase" }}>{dt.toLocaleDateString("pt-PT",{month:"short"})}</p>
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
          {isAdmin && (
            <button onClick={() => setCtxMenu(ctxMenu===t.id?null:t.id)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:T.sub, padding:"0 4px", flexShrink:0 }}>⋮</button>
          )}
        </div>
        <PresBar t={t} presences={presences} myMember={myMember} team={team} members={members} onSetPresence={onSetPresence} />
      </div>
      {ctxMenu===t.id && (
        <div style={{ background:T.bg, borderTop:`1px solid ${T.border}` }}>
          {[
            ["✏️ Modificar evento", () => { setEditTarget(t); setCtxMenu(null); }],
            ["🗑️ Eliminar evento",  () => { onDelete(t.id); setCtxMenu(null); }],
          ].map(([label,action]) => (
            <button key={label} onClick={action} style={{ display:"block", width:"100%", padding:"13px 16px", background:"transparent", border:"none", textAlign:"left", fontSize:15, cursor:"pointer", fontFamily:"inherit", color:label.includes("Eliminar")?T.brand:T.text, borderBottom:`1px solid ${T.border}` }}>{label}</button>
          ))}
        </div>
      )}
    </div>
  );
};

const TreinosPage = ({ team, trainings, members, myUserId, isAdmin, presences, onSetPresence, onAddType, onDelete, onEdit, onLogSession, onBack, modal, setModal }) => {
  const [showPast, setShowPast] = useState(false);
  const [filterType, setFilterType] = useState(null);
  const [collapsedMonths, setCollapsedMonths] = useState({});
  const toggleMonth = m => setCollapsedMonths(p => ({...p, [m]: !p[m]}));
  const [logTarget, setLogTarget] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [ctxMenu, setCtxMenu] = useState(null);
  const [editTarget, setEditTarget] = useState(null);

  const myMember = members.find(m => m.teamId === team.id && m.userId === myUserId);
  const tt = trainings.filter(t => t.teamId === team.id);
  const recurring = tt.filter(t => t.type === "recorrente");
  const dated = tt.filter(t => t.type !== "recorrente").sort((a,b) => new Date(a.date)-new Date(b.date));
  let filtered = showPast ? dated : dated.filter(t => !isPast(t.date));
  if (filterType) filtered = filtered.filter(t => t.type === filterType);
  const byMonth = {};
  filtered.forEach(t => {
    const dt = new Date(t.date+"T00:00:00");
    const key = dt.toLocaleDateString("pt-PT",{month:"long",year:"numeric"}).toUpperCase();
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(t);
  });

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
        {isAdmin && (<>
          <button onClick={() => setModal("treino")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", borderRadius:20, border:"none", background:team.color, color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0, boxShadow:`0 2px 10px ${team.color}44` }}>
            ⚽ Treino
          </button>
          <button onClick={() => setModal("recorrente")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", borderRadius:20, border:`1px solid ${team.color}`, background:"transparent", color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
            🔄
          </button>
          <button onClick={() => setModal("jogo")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", borderRadius:20, border:`1px solid ${team.color}`, background:"transparent", color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
            🏆
          </button>
        </>)}
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
              <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"14px", marginBottom:8, borderLeft:`3px solid ${team.color}` }}>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  <div style={{ width:40, height:40, borderRadius:20, background:`${team.color}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🔄</div>
                  <div style={{ flex:1 }}>
                    <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{(t.days||[]).map(d=>DAYS_PT[d]).join(", ")} · {t.time}</p>
                    <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}</p>
                    {t.notes&&<p style={{ margin:0, fontSize:12, color:T.sub }}>{t.notes}</p>}
                  </div>
                  {isAdmin&&<div style={{ display:"flex", gap:6, flexShrink:0 }}>
                    <button onClick={()=>setEditTarget(t)} style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",color:T.sub }}>✏️</button>
                    <button onClick={()=>onDelete(t.id)} style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",color:T.sub }}>🗑️</button>
                  </div>}
                </div>
                {isAdmin && onLogSession && (
                  <button onClick={()=>setLogTarget(t)} style={{ display:"block", width:"100%", marginTop:10, padding:"8px", borderRadius:10, border:`1.5px solid ${team.color}`, background:`${team.color}12`, color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", textAlign:"center" }}>📋 Registar sessão</button>
                )}
                <PresBar t={t} presences={presences} myMember={myMember} team={team} members={members} onSetPresence={onSetPresence} />
              </div>
            ))}
          </>
        )}

        {/* Month groups */}
        {Object.entries(byMonth).map(([month, evts]) => {
          const isCollapsed = collapsedMonths[month];
          const totalSessions = evts.length;
          const totalPresent = evts.reduce((s, t) => s + Object.values(presences[t.id]||{}).filter(x=>x==="present").length, 0);
          return (
            <div key={month}>
              <button onClick={() => toggleMonth(month)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", background:"transparent", border:"none", cursor:"pointer", padding:"14px 0 8px", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:15, fontWeight:900, color:team.color, textTransform:"uppercase", letterSpacing:0.8 }}>{month}</span>
                  <span style={{ fontSize:12, color:T.sub, fontWeight:600 }}>{totalSessions} sessão{totalSessions!==1?"ões":""}</span>
                  {totalPresent>0 && <span style={{ fontSize:12, color:T.green, fontWeight:700 }}>· {totalPresent} ✓</span>}
                </div>
                <span style={{ fontSize:16, color:T.sub }}>{isCollapsed ? "▶" : "▼"}</span>
              </button>
              {!isCollapsed && evts.map(t => <EventCard key={t.id} t={t} team={team} members={members} isAdmin={isAdmin} ctxMenu={ctxMenu} setCtxMenu={setCtxMenu} onDelete={onDelete} setEditTarget={setEditTarget} myMember={myMember} presences={presences} onSetPresence={onSetPresence} />)}
            </div>
          );
        })}

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
      {modal==="treino"      && <AddSingleTrainingModal team={team} onAdd={async t=>{await onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
      {modal==="recorrente"  && <AddRecurringModal team={team} onAdd={async t=>{await onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
      {modal==="jogo"        && <AddMatchModal team={team} members={members} onAdd={async t=>{await onAddType(t);setModal(null);}} onClose={()=>setModal(null)} />}
      {editTarget && editTarget.type==="treino"      && <EditSingleTrainingModal team={team} training={editTarget} onEdit={onEdit} onClose={()=>setEditTarget(null)} />}
      {editTarget && editTarget.type==="jogo"        && <EditMatchModal team={team} members={members} training={editTarget} onEdit={onEdit} onClose={()=>setEditTarget(null)} />}
      {editTarget && editTarget.type==="recorrente"  && <EditRecurringModal team={team} training={editTarget} onEdit={onEdit} onClose={()=>setEditTarget(null)} />}
      {logTarget && onLogSession && <LogSessionModal training={logTarget} existingDates={trainings.filter(t=>t.teamId===team.id&&t.type==="treino"&&t.location===logTarget.location&&t.time===logTarget.time).map(t=>t.date)} onLog={d=>onLogSession(logTarget,d,presences[logTarget.id]||{})} onClose={()=>setLogTarget(null)} />}
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

// ── APP ADMIN TAB ─────────────────────────────────────────────
const AppAdminTab = ({ token, onBack }) => {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [section, setSection] = useState("stats");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamDetail, setTeamDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const rpc = (fn, body="{}") => fetch(`${SB_URL}/rest/v1/rpc/${fn}`, {
          method:'POST', headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'}, body
        });
        const [sr, ur, tr] = await Promise.all([rpc("get_app_admin_stats"), rpc("get_app_user_list"), rpc("get_all_teams_admin")]);
        if (sr.ok) setStats(await sr.json());
        if (ur.ok) setUsers(await ur.json() || []);
        if (tr.ok) setTeams(await tr.json() || []);
      } catch(e) { console.error(e); }
      setLoading(false);
    };
    load();
  }, [token]);

  const [detailError, setDetailError] = useState(null);

  const openTeam = async (team) => {
    setSelectedTeam(team); setTeamDetail(null); setDetailLoading(true); setDetailError(null);
    try {
      const r = await fetch(`${SB_URL}/rest/v1/rpc/get_team_details_admin`, {
        method:'POST', headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
        body: JSON.stringify({ p_team_id: team.id })
      });
      const data = await r.json();
      if (r.ok) {
        setTeamDetail(data || { members:[], recent_fines:[], trainings:[] });
      } else {
        setDetailError(data?.message || data?.error || `Erro ${r.status}`);
      }
    } catch(e) { setDetailError(e.message); }
    setDetailLoading(false);
  };

  if (loading) return <Spinner msg="A carregar painel admin..." />;

  // Team detail view
  if (selectedTeam) {
    return (
      <div style={{ background:T.bg, minHeight:"100vh", paddingBottom:80 }}>
        <div style={{ background:`linear-gradient(135deg,${T.navy},#0d1f36)`, padding:"52px 16px 16px" }}>
          <button onClick={()=>setSelectedTeam(null)} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, padding:"6px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:700, marginBottom:12 }}>← Voltar</button>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:32 }}>{selectedTeam.emoji}</span>
            <div>
              <h2 style={{ margin:0, color:"#fff", fontSize:20, fontWeight:900 }}>{selectedTeam.name}</h2>
              <p style={{ margin:0, fontSize:13, color:"rgba(255,255,255,0.5)" }}>{selectedTeam.season} · {selectedTeam.members_count} membros</p>
            </div>
          </div>
        </div>
        <div style={{ padding:"16px" }}>
          {detailLoading && <Spinner msg="A carregar..." />}
          {detailError && <div style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", color:"#c0392b", fontSize:14 }}>❌ {detailError}</div>}
          {teamDetail && (
            <>
              {/* Members */}
              <p style={{ margin:"0 0 10px", fontSize:12, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>👥 Membros</p>
              {(teamDetail.members||[]).map((m,i) => (
                <div key={i} style={{ background:T.card, borderRadius:14, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:38, height:38, borderRadius:19, background:m.role==="admin"?T.navy:T.bg, border:`2px solid ${m.role==="admin"?T.navy:T.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, color:m.role==="admin"?"#fff":T.sub, flexShrink:0 }}>
                    {(m.name||"?")[0].toUpperCase()}
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ margin:0, fontWeight:700, fontSize:14 }}>{m.name||"—"}</p>
                    <p style={{ margin:0, fontSize:12, color:T.sub }}>{m.position||"—"} · {m.role==="admin"?"Admin":"Jogador"}</p>
                  </div>
                  {m.unpaid_amount > 0 && (
                    <div style={{ background:`${T.brand}15`, borderRadius:10, padding:"4px 10px" }}>
                      <p style={{ margin:0, fontWeight:900, fontSize:13, color:T.brand }}>{m.unpaid_amount}€</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Recent fines - grouped by member */}
              {(teamDetail.recent_fines||[]).length > 0 && (() => {
                const grouped = {};
                (teamDetail.recent_fines||[]).forEach(f => {
                  const k = f.member_name||"?";
                  if (!grouped[k]) grouped[k] = { name:k, fines:[], total:0, unpaid:0 };
                  grouped[k].fines.push(f);
                  grouped[k].total += Number(f.amount||0);
                  if (!f.paid) grouped[k].unpaid += Number(f.amount||0);
                });
                return (
                  <>
                    <p style={{ margin:"16px 0 10px", fontSize:12, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>🟥 Multas recentes</p>
                    {Object.values(grouped).map(g => (
                      <FineGroup key={g.name} group={g} color={team.color} />
                    ))}
                  </>
                );
              })()}

              {/* Trainings */}
              {(teamDetail.trainings||[]).length > 0 && (
                <>
                  <p style={{ margin:"16px 0 10px", fontSize:12, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:1 }}>📅 Treinos / Jogos</p>
                  {(teamDetail.trainings||[]).map((t,i) => {
                    const dateStr = t.date ? new Date(t.date+"T00:00:00").toLocaleDateString("pt-PT",{day:"numeric",month:"short",year:"numeric"}) : "Recorrente";
                    const timeStr = t.time ? t.time.slice(0,5) : "";
                    return (
                    <div key={i} style={{ background:T.card, borderRadius:12, padding:"10px 14px", marginBottom:6, display:"flex", alignItems:"center", gap:10 }}>
                      <span style={{ fontSize:20 }}>{t.type==="jogo"?"⚽":t.type==="recorrente"?"🔄":"🏃"}</span>
                      <div>
                        <p style={{ margin:0, fontWeight:700, fontSize:13 }}>{t.type==="jogo"?`vs ${t.opponent||"?"}`:t.type==="recorrente"?"Recorrente":"Treino"}</p>
                        <p style={{ margin:0, fontSize:12, color:T.sub }}>{dateStr}{timeStr?` · ${timeStr}`:""}{t.location?` · ${t.location}`:""}</p>
                      </div>
                    </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  const StatCard = ({ label, value, color }) => (
    <div style={{ background:T.card, borderRadius:14, padding:"14px 16px", flex:1, minWidth:0 }}>
      <p style={{ margin:"0 0 4px", fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>{label}</p>
      <p style={{ margin:0, fontSize:26, fontWeight:900, color: color||T.navy }}>{value}</p>
    </div>
  );

  const tabs = [["stats","📊 Stats"],["teams","⚽ Equipas"],["users","👥 Users"]];

  return (
    <div style={{ background:T.bg, minHeight:"100vh", paddingBottom:80 }}>
      <div style={{ background:`linear-gradient(135deg,${T.navy},#0d1f36)`, padding:"52px 16px 16px" }}>
        <button onClick={onBack} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, padding:"6px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:700, marginBottom:12, fontSize:13 }}>← Voltar</button>
        <p style={{ margin:"0 0 2px", fontSize:12, color:"rgba(255,255,255,0.5)", fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>🛡️ Gestão</p>
        <h2 style={{ margin:0, color:"#fff", fontSize:22, fontWeight:900 }}>Visão Geral</h2>
        <p style={{ margin:"4px 0 0", fontSize:13, color:"rgba(255,255,255,0.4)" }}>Monitorização da plataforma</p>
      </div>
      <div style={{ display:"flex", gap:6, padding:"12px 16px", background:T.card, borderBottom:`1px solid ${T.border}` }}>
        {tabs.map(([id,label]) => (
          <button key={id} onClick={()=>setSection(id)} style={{ flex:1, padding:"8px 4px", borderRadius:10, border:`1.5px solid ${section===id?T.navy:T.border}`, background:section===id?T.navy:"transparent", color:section===id?"#fff":T.sub, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
        ))}
      </div>
      <div style={{ padding:"16px" }}>
        {section==="stats" && stats && (
          <>
            <div style={{ display:"flex", gap:8, marginBottom:8 }}>
              <StatCard label="Equipas"      value={stats.teams}   color={T.navy} />
              <StatCard label="Utilizadores" value={stats.users}   color="#6c47ff" />
              <StatCard label="Membros"      value={stats.members} color={T.green} />
            </div>
            <div style={{ display:"flex", gap:8, marginBottom:8 }}>
              <StatCard label="Multas"    value={stats.fines}             color={T.brand} />
              <StatCard label="Total €"   value={`${stats.fines_total}€`} color={T.brand} />
              <StatCard label="Por pagar" value={`${stats.fines_unpaid}€`} color="#FF6B00" />
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <StatCard label="Treinos/Jogos" value={stats.trainings} color={T.green} />
            </div>
          </>
        )}
        {section==="teams" && (
          <>
            {teams.length===0 && <p style={{ color:T.sub, textAlign:"center", padding:"20px 0" }}>Nenhuma equipa ainda</p>}
            {teams.map(t => (
              <div key={t.id} onClick={()=>{ setSection("teams"); openTeam(t); }} style={{ background:T.card, borderRadius:14, padding:"14px 16px", marginBottom:10, cursor:"pointer", border:`1.5px solid ${T.border}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:28 }}>{t.emoji}</span>
                  <div style={{ flex:1 }}>
                    <p style={{ margin:0, fontWeight:800, fontSize:16 }}>{t.name}</p>
                    <p style={{ margin:0, fontSize:12, color:T.sub }}>{t.season} · criada {new Date(t.created_at).toLocaleDateString("pt-PT")}</p>
                  </div>
                  <span style={{ color:T.sub, fontSize:18 }}>›</span>
                </div>
                <div style={{ display:"flex", gap:6 }}>
                  {[["👥",t.members_count,"membros"],["🟥",t.fines_count,"multas"],["💸",`${t.unpaid_total}€`,"por pagar"],["📅",t.trainings_count,"treinos"]].map(([icon,val,label]) => (
                    <div key={label} style={{ flex:1, background:T.bg, borderRadius:10, padding:"8px 6px", textAlign:"center" }}>
                      <p style={{ margin:0, fontSize:10, color:T.sub }}>{icon}</p>
                      <p style={{ margin:0, fontWeight:800, fontSize:14 }}>{val}</p>
                      <p style={{ margin:0, fontSize:9, color:T.sub }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
        {section==="users" && (
          <>
            {users.map(u => (
              <div key={u.id} style={{ background:T.card, borderRadius:14, padding:"12px 14px", marginBottom:8 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:40, height:40, borderRadius:20, background:u.is_admin?T.navy:T.bg, border:`2px solid ${u.is_admin?T.navy:T.border}`, display:"flex", alignItems:"center", justifyContent:"center", color:u.is_admin?"#fff":T.sub, fontWeight:800, fontSize:14, flexShrink:0 }}>
                    {(u.name||u.email||"?")[0].toUpperCase()}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ margin:0, fontWeight:700, fontSize:14, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{u.name||"—"}</p>
                    <p style={{ margin:0, fontSize:12, color:T.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{u.email}</p>
                  </div>
                  <div style={{ textAlign:"right", flexShrink:0 }}>
                    <p style={{ margin:0, fontSize:11, fontWeight:700, color:T.sub }}>{u.teams_count} equipa{u.teams_count!==1?"s":""}</p>
                    {u.is_admin && <span style={{ fontSize:10, background:T.navy, color:"#fff", borderRadius:6, padding:"2px 6px", fontWeight:700 }}>ADMIN</span>}
                  </div>
                </div>
                {u.last_sign_in_at && <p style={{ margin:"6px 0 0", fontSize:11, color:T.sub }}>Último acesso: {new Date(u.last_sign_in_at).toLocaleDateString("pt-PT")}</p>}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};




const GeneralTab = ({ user, myUserId, teams, members, onEditProfile, onManageTeam, onCreateTeam, onJoinTeam, onLogout, onAdminOpen, isAppAdmin, token }) => {
  const myTeams = teams.filter(t => 
    members.some(m=>m.teamId===t.id&&m.userId===myUserId) || t.createdBy===myUserId
  );
  const myAge = age(user.birthday);
  const [tapCount, setTapCount] = useState(0);
  const [showMembers, setShowMembers] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const tapTimer = React.useRef(null);

  const handleAvatarTap = () => {
    if (!isAppAdmin) return;
    const next = tapCount + 1;
    setTapCount(next);
    clearTimeout(tapTimer.current);
    if (next >= 3) { setTapCount(0); onAdminOpen(); return; }
    tapTimer.current = setTimeout(() => setTapCount(0), 800);
  };

  const openTeamMembers = async (teamId) => {
    setShowMembers(teamId);
    setLoadingMembers(true);
    try {
      const mRaw = await api.get(`team_members?team_id=eq.${teamId}&select=*`, token);
      const uids = mRaw.map(m=>m.user_id).filter(Boolean);
      let profilesMap = {};
      if (uids.length > 0) {
        const profs = await api.get(`profiles?id=in.(${uids.join(',')})`, token).catch(()=>[]);
        profs.forEach(p => { profilesMap[p.id] = p; });
      }
      const merged = mRaw.map(m => ({
        ...aMember({ ...m, profiles: profilesMap[m.user_id] || null })
      }));
      setTeamMembers(merged);
    } catch(e) { console.error(e); }
    setLoadingMembers(false);
  };

  if (showMembers) {
    const t = teams.find(x=>x.id===showMembers);
    const tm = teamMembers;
    return (
      <div style={{ padding:"16px 16px 100px" }}>
        <button onClick={()=>setShowMembers(null)} style={{ background:`${t?.color||T.navy}18`, border:"none", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, color:t?.color||T.navy, fontFamily:"inherit", marginBottom:16 }}>← Voltar</button>
        <h2 style={{ margin:"0 0 4px", fontSize:20, fontWeight:900 }}>{t?.emoji} {t?.name}</h2>
        <p style={{ margin:"0 0 16px", fontSize:13, color:T.sub }}>{loadingMembers ? "A carregar..." : `${tm.length} membro${tm.length!==1?"s":""}`}</p>
        {tm.map(m => (
          <div key={m.id} style={{ background:T.card, borderRadius:16, padding:"14px", marginBottom:10, display:"flex", alignItems:"center", gap:14 }}>
            {m.avatarUrl
              ? <img src={m.avatarUrl} style={{ width:54, height:54, borderRadius:27, objectFit:"cover", flexShrink:0 }} />
              : <div style={{ width:54, height:54, borderRadius:27, background:t?.color||T.navy, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:18, flexShrink:0 }}>{m.initials}</div>
            }
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                <p style={{ margin:0, fontWeight:800, fontSize:16 }}>{m.name}</p>
                <span style={{ fontSize:11, background:m.role==="admin"?`${t?.color||T.navy}20`:"transparent", color:m.role==="admin"?t?.color||T.navy:T.sub, borderRadius:6, padding:"2px 6px", fontWeight:700, border:`1px solid ${m.role==="admin"?t?.color||T.navy:T.border}` }}>{m.role==="admin"?"Admin":"Jogador"}</span>
              </div>
              {m.position && <p style={{ margin:"0 0 3px", fontSize:13, color:T.sub }}>🏃 {m.position}</p>}
              {m.phone && <p style={{ margin:"0 0 3px", fontSize:13, color:T.text }}>📱 <a href={`tel:${m.phone}`} style={{ color:T.navy, textDecoration:"none", fontWeight:600 }}>{m.phone}</a></p>}
              {m.birthday && <p style={{ margin:0, fontSize:13, color:T.sub }}>🎂 {fmtDate(m.birthday)}{age(m.birthday)?` · ${age(m.birthday)} anos`:""}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ padding:"16px 16px 100px" }}>
      {/* Profile card */}
      <div style={{ background:T.card, borderRadius:20, padding:"20px", marginBottom:16, position:"relative" }}>
        <button onClick={onEditProfile} style={{ position:"absolute", top:16, right:16, background:T.bg, border:"none", borderRadius:10, padding:"7px 13px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.navy, fontFamily:"inherit" }}>✏️ Editar</button>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18, paddingRight:80 }}>
          <div onClick={handleAvatarTap} style={{ cursor: isAppAdmin ? "pointer" : "default" }}>
            <Avatar initials={user.initials} color={T.navy} size={54} photo={user.avatarUrl} />
          </div>
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
        const admin = me?.role==="admin" || t.createdBy===myUserId;
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
            <button onClick={() => openTeamMembers(t.id)} style={{ width:"100%", marginTop:10, background:T.bg, border:`1px solid ${T.border}`, borderRadius:10, padding:"9px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.sub, fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
              👥 Ver membros da equipa
            </button>
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

// ── FINE TYPES MANAGER ────────────────────────────────────────
const FINE_EMOJIS = [
  // Cartões
  "🟨","🟥",
  // Tempo/atraso
  "⏰","⌚","🏃","🏃‍♂️",
  // Equipamento
  "👕","🎽","👟","⚽",
  // Comportamento
  "🚫","❌","🤦","😤","🗣️","📵",
  // Físico/treino
  "🤕","💪","🏋️","🦵",
  // Extra
  "🍺","💸","🚗","🎯","💬","🤳",
];

const EmojiPicker = ({ value, onChange, color }) => (
  <div style={{ marginBottom:12 }}>
    <p style={{ margin:"0 0 6px", fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>Emoji</p>
    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
      {FINE_EMOJIS.map(e => (
        <button key={e} onClick={()=>onChange(e)} style={{
          fontSize:22, width:42, height:42, display:"flex", alignItems:"center", justifyContent:"center",
          background:value===e?`${color}20`:"transparent",
          border:`2px solid ${value===e?color:T.border}`,
          borderRadius:10, cursor:"pointer", transition:"all 0.1s"
        }}>{e}</button>
      ))}
    </div>
    <p style={{ margin:"8px 0 0", fontSize:12, color:T.sub }}>Selecionado: <span style={{ fontSize:20 }}>{value}</span></p>
  </div>
);

const FineTypesManager = ({ team, fineTypes, onAdded, onDeleted, onUpdated, token }) => {
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState(""); const [amount, setAmount] = useState(""); const [emoji, setEmoji] = useState("🟥");
  const [editEmoji, setEditEmoji] = useState("🟥"); const [editName, setEditName] = useState(""); const [editAmount, setEditAmount] = useState("");
  const [err, setErr] = useState(""); const [saving, setSaving] = useState(false);
  const tf = fineTypes.filter(f => f.teamId === team.id);

  const save = async () => {
    if (!name.trim() || !amount) return;
    setSaving(true); setErr("");
    try {
      const res = await api.post(`fine_types`, { team_id: team.id, name: name.trim(), amount: Number(amount), emoji }, token);
      const ft = Array.isArray(res) ? res[0] : res;
      if (ft) onAdded(ft);
      setName(""); setAmount(""); setEmoji("🟥"); setAdding(false);
    } catch(e) { setErr(e.message); }
    setSaving(false);
  };

  const startEdit = ft => {
    setEditingId(ft.id); setEditEmoji(ft.emoji); setEditName(ft.name); setEditAmount(String(ft.amount));
  };

  const saveEdit = async (id) => {
    if (!editName.trim() || !editAmount) return;
    setSaving(true);
    try {
      await api.patch(`fine_types?id=eq.${id}`, { emoji: editEmoji, name: editName.trim(), amount: Number(editAmount) }, token);
      onUpdated(id, { emoji: editEmoji, name: editName.trim(), amount: Number(editAmount) });
      setEditingId(null);
    } catch(e) { setErr(e.message); }
    setSaving(false);
  };

  const del = async id => {
    try { await api.del(`fine_types?id=eq.${id}`, token); onDeleted(id); } catch(e) { setErr(e.message); }
  };

  return (
    <div style={{ marginBottom:16 }}>
      {err && <p style={{ color:T.brand, fontSize:13, margin:"0 0 8px", background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      {tf.map(ft => (
        <div key={ft.id}>
          <div style={{ background:T.card, borderRadius:12, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:26 }}>{ft.emoji}</span>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:14 }}>{ft.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{ft.amount}€</p>
            </div>
            <button onClick={() => editingId===ft.id ? setEditingId(null) : startEdit(ft)} style={{ background:"none", border:`1.5px solid ${editingId===ft.id?team.color:T.border}`, borderRadius:8, fontSize:13, fontWeight:700, color:editingId===ft.id?team.color:T.sub, cursor:"pointer", padding:"4px 10px", fontFamily:"inherit" }}>✏️</button>
            <button onClick={() => del(ft.id)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:T.sub, padding:"4px 8px" }}>🗑️</button>
          </div>
          {editingId===ft.id && (
            <div style={{ background:T.card, borderRadius:12, padding:"14px", marginBottom:8, marginTop:-4 }}>
              <EmojiPicker value={editEmoji} onChange={setEditEmoji} color={team.color} />
              <FL>Nome</FL>
              <FI value={editName} onChange={e=>setEditName(e.target.value)} placeholder="Nome do tipo..." />
              <FL>Valor (€)</FL>
              <FI type="number" value={editAmount} onChange={e=>setEditAmount(e.target.value)} placeholder="0" />
              <div style={{ display:"flex", gap:8 }}>
                <PrimaryBtn onClick={() => saveEdit(ft.id)} disabled={!editName.trim()||!editAmount||saving} color={team.color}>
                  {saving ? "A guardar..." : "✓ Guardar"}
                </PrimaryBtn>
                <button onClick={()=>setEditingId(null)} style={{ flex:1, padding:"15px", borderRadius:14, border:`1.5px solid ${T.border}`, background:"transparent", cursor:"pointer", fontFamily:"inherit", fontWeight:700, fontSize:14 }}>Cancelar</button>
              </div>
            </div>
          )}
        </div>
      ))}
      {adding ? (
        <div style={{ background:T.card, borderRadius:12, padding:"14px", marginBottom:8 }}>
          <EmojiPicker value={emoji} onChange={setEmoji} color={team.color} />
          <FI value={name} onChange={e=>setName(e.target.value)} placeholder="Nome (ex: Atraso)" />
          <FI type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Valor em € (ex: 5)" />
          <div style={{ display:"flex", gap:8 }}>
            <PrimaryBtn onClick={save} disabled={!name.trim()||!amount||saving} color={team.color}>
              {saving ? "A guardar..." : "✓ Adicionar"}
            </PrimaryBtn>
            <button onClick={()=>{setAdding(false);setErr("");}} style={{ flex:1, padding:"15px", borderRadius:14, border:`1.5px solid ${T.border}`, background:"transparent", cursor:"pointer", fontFamily:"inherit", fontWeight:700, fontSize:14 }}>Cancelar</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setAdding(true)} style={{ width:"100%", background:"transparent", border:`1.5px dashed ${T.border}`, borderRadius:12, padding:"12px", fontSize:14, fontWeight:700, cursor:"pointer", color:T.sub, fontFamily:"inherit" }}>
          ➕ Adicionar tipo de multa
        </button>
      )}
    </div>
  );
};

const ManageTeamScreen = ({ team, members, fineTypes, token, myUserId, onBack, onAddMember, onToggleRole, onRemoveMember, onEditMember, onRegenerateCode, onDeleteTeam, setFineTypes }) => {
  const tm = members.filter(m=>m.teamId===team.id);
  const admins = tm.filter(m=>m.role==="admin");
  const players = tm.filter(m=>m.role==="player");
  const [confirmRemove, setConfirmRemove] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyCode = () => { setCopied(true); setTimeout(()=>setCopied(false), 2000); };

  const [expandedMember, setExpandedMember] = useState(null);

  const Row = ({ m }) => {
    const expanded = expandedMember === m.id;
    return (
      <div style={{ background:T.card, borderRadius:14, marginBottom:8, overflow:"hidden" }}>
        {/* Collapsed header - always visible */}
        <div onClick={() => setExpandedMember(expanded ? null : m.id)}
          style={{ padding:"13px 14px", display:"flex", alignItems:"center", gap:12, cursor:"pointer" }}>
          <Avatar initials={m.initials} color={team.color} size={44} photo={m.avatarUrl} />
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", gap:6, alignItems:"center", flexWrap:"wrap" }}>
              <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{m.name}</p>
              {m.userId===myUserId && <Badge label="Tu" color={team.color} />}
              <RoleBadgeLight role={m.role} />
            </div>
            <p style={{ margin:0, fontSize:13, color:T.sub }}>{m.position||"—"}</p>
          </div>
          <span style={{ color:T.sub, fontSize:18, transition:"transform 0.2s", display:"inline-block", transform:expanded?"rotate(180deg)":"rotate(0deg)" }}>⌄</span>
        </div>

        {/* Expanded details + actions */}
        {expanded && (
          <div style={{ borderTop:`1px solid ${T.border}`, padding:"12px 14px" }}>
            <div style={{ marginBottom:12, display:"flex", flexDirection:"column", gap:6 }}>
              {m.position && (
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <span style={{ fontSize:14, width:20 }}>⚽</span>
                  <p style={{ margin:0, fontSize:13 }}><span style={{ color:T.sub }}>Posição: </span><strong>{m.position}</strong></p>
                </div>
              )}
              {m.phone && (
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <span style={{ fontSize:14, width:20 }}>📱</span>
                  <p style={{ margin:0, fontSize:13 }}><span style={{ color:T.sub }}>Telefone: </span><strong>{m.phone}</strong></p>
                </div>
              )}
              {m.birthday && (
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <span style={{ fontSize:14, width:20 }}>🎂</span>
                  <p style={{ margin:0, fontSize:13 }}><span style={{ color:T.sub }}>Aniversário: </span><strong>{fmtDate(m.birthday)}</strong></p>
                </div>
              )}
              {!m.position && !m.phone && !m.birthday && (
                <p style={{ margin:0, fontSize:13, color:T.sub, fontStyle:"italic" }}>Sem informações adicionais</p>
              )}
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <button onClick={() => { setEditingMember(m); setExpandedMember(null); }} style={{ flex:1, padding:"10px", borderRadius:10, border:`1.5px solid ${team.color}`, background:`${team.color}12`, color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                ✏️ Editar
              </button>
              {m.userId !== myUserId && (
                <>
                  <button onClick={() => onToggleRole(m.id)} style={{ flex:1, padding:"10px", borderRadius:10, border:`1.5px solid ${m.role==="admin"?T.sub:T.yellow}`, background:"transparent", color:m.role==="admin"?T.sub:T.yellow, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                    {m.role==="admin"?"↓ Jogador":"↑ Admin"}
                  </button>
                  <button onClick={() => setConfirmRemove(m)} style={{ flex:1, padding:"10px", borderRadius:10, border:`1.5px solid ${T.brand}`, background:"transparent", color:T.brand, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                    🗑 Remover
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

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

        {/* Fine Types Management */}
        <Sec label="Tipos de multa" />
        <FineTypesManager team={team} fineTypes={fineTypes} onAdded={ft => setFineTypes(p=>[...p, aFineType(ft)])} onDeleted={id => setFineTypes(p=>p.filter(x=>x.id!==id))} onUpdated={(id, data) => setFineTypes(p=>p.map(x=>x.id===id?{...x,...(typeof data==="object"?data:{emoji:data})}:x))} token={token} />

        {/* Danger zone */}
        <div style={{ marginTop:32, padding:"16px", background:"#FFF5F5", borderRadius:14, border:"1px solid #FFD0D0" }}>
          <p style={{ margin:"0 0 4px", fontWeight:700, fontSize:14, color:T.brand }}>⚠️ Zona de perigo</p>
          <p style={{ margin:"0 0 12px", fontSize:13, color:T.sub }}>Apagar a equipa remove todos os dados permanentemente.</p>
          <button onClick={onDeleteTeam} style={{ width:"100%", padding:"13px", borderRadius:12, border:`1.5px solid ${T.brand}`, background:"transparent", color:T.brand, fontWeight:700, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>
            🗑️ Apagar equipa
          </button>
        </div>
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

const MemberDetailScreen = ({ member, team, fines, onBack, onTogglePaid, onDeleteFine, isAdmin }) => {
  const pf = fines.filter(f=>f.teamId===team.id&&f.memberId===member.id).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const unpaid = pf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const paid = pf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  return (
    <div style={{ background:T.bg, minHeight:"100vh" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}bb)`, padding:"16px 16px 24px", color:"#fff", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", marginBottom:20 }}>
          <button onClick={onBack} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"6px 12px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit" }}>← Voltar</button>
        </div>
        <Avatar initials={member.initials} color="rgba(255,255,255,0.2)" size={64} photo={member.avatarUrl} />
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
              {isAdmin && onDeleteFine && (
                <button onClick={() => { if(window.confirm("Apagar esta multa?")) onDeleteFine(f.id); }} style={{ display:"block", marginTop:4, padding:"3px 8px", borderRadius:7, border:"1.5px solid #666", background:"transparent", color:"#888", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>🗑️</button>
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
        <p style={{ color:"rgba(255,255,255,0.45)", margin:"5px 0 0", fontSize:14, letterSpacing:0.3 }}>Equipas · Multas · Treinos</p>
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
// ── RESET PASSWORD SCREEN ─────────────────────────────────────
const ResetPasswordScreen = ({ accessToken, onDone }) => {
  const [pass, setPass] = useState(""); const [pass2, setPass2] = useState("");
  const [showPass, setShowPass] = useState(false); const [err, setErr] = useState(""); const [done, setDone] = useState(false); const [loading, setLoading] = useState(false);
  const inp = { width:"100%", padding:"14px 16px", borderRadius:14, border:"none", background:"rgba(255,255,255,0.12)", color:"#fff", fontSize:16, marginBottom:12, boxSizing:"border-box", outline:"none", fontFamily:"inherit" };
  const save = async () => {
    if (pass.length < 6) return setErr("Mínimo 6 caracteres");
    if (pass !== pass2) return setErr("As passwords não coincidem");
    setLoading(true); setErr("");
    try { await api.updatePassword(pass, accessToken); setDone(true); setTimeout(onDone, 2500); }
    catch(e) { setErr(e.message); }
    setLoading(false);
  };
  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, #1D3557 0%, #0a1628 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28 }}>
      <div style={{ marginBottom:28, textAlign:"center" }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🔑</div>
        <h2 style={{ color:"#fff", fontSize:26, fontWeight:900, margin:0 }}>Nova password</h2>
        <p style={{ color:"rgba(255,255,255,0.45)", margin:"6px 0 0", fontSize:14 }}>Define a tua nova password</p>
      </div>
      {done ? <div style={{ background:"rgba(45,198,83,0.2)", borderRadius:14, padding:"16px 20px", color:"#7fff9a", textAlign:"center", fontWeight:700 }}>✅ Password alterada! A redirecionar...</div> : (
        <div style={{ width:"100%", maxWidth:340 }}>
          <div style={{ position:"relative", marginBottom:12 }}>
            <input style={{ ...inp, marginBottom:0, paddingRight:50 }} type={showPass?"text":"password"} placeholder="Nova password" value={pass} onChange={e=>setPass(e.target.value)} />
            <button onClick={()=>setShowPass(p=>!p)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"rgba(255,255,255,0.5)", fontSize:20, cursor:"pointer", padding:4 }}>{showPass?"🙈":"👁️"}</button>
          </div>
          <input style={inp} type="password" placeholder="Confirmar password" value={pass2} onChange={e=>setPass2(e.target.value)} />
          {err && <div style={{ background:"rgba(230,57,70,0.2)", borderRadius:10, padding:"10px 14px", marginBottom:12, color:"#FFB3B8", fontSize:13 }}>{err}</div>}
          <button disabled={loading||!pass||!pass2} onClick={save} style={{ width:"100%", padding:16, borderRadius:14, border:"none", background:loading?"#666":"#E63946", color:"#fff", fontSize:17, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>
            {loading?"A guardar...":"💾 Guardar password"}
          </button>
        </div>
      )}
    </div>
  );
};

// ── AUTH SCREEN ───────────────────────────────────────────────
const AuthScreen = ({ onLogin, onRegister, error, loading }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const inp = { width:"100%", padding:"14px 16px", borderRadius:14, border:"none", background:"rgba(255,255,255,0.12)", color:"#fff", fontSize:16, marginBottom:12, boxSizing:"border-box", outline:"none", fontFamily:"inherit" };
  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, ${T.navy} 0%, #0a1628 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:28 }}>
      <div style={{ marginBottom:36, textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:22, margin:"0 auto 18px", background:"#12121f", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 32px rgba(230,57,70,0.5)", position:"relative", overflow:"visible" }}>
          <svg width="60" height="72" viewBox="0 0 60 72" style={{ position:"absolute" }}>
            <rect x="18" y="4" width="36" height="48" rx="5" fill="#FFCC00" transform="rotate(12 36 28)"/>
            <rect x="6" y="6" width="36" height="48" rx="5" fill="#E63946"/>
          </svg>
        </div>
        <h1 style={{ color:"#fff", fontSize:34, fontWeight:900, margin:0, letterSpacing:-1.5 }}>Multeam</h1>
        <p style={{ color:"rgba(255,255,255,0.45)", margin:"5px 0 0", fontSize:14, letterSpacing:0.3 }}>Equipas · Multas · Treinos</p>
      </div>
      <div style={{ width:"100%", maxWidth:340 }}>
        <div style={{ display:"flex", background:"rgba(255,255,255,0.1)", borderRadius:14, padding:4, marginBottom:20 }}>
          {[["login","Entrar"],["register","Criar conta"]].map(([m,l])=>(
            <button key={m} onClick={()=>setMode(m)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:mode===m?"#fff":"transparent", color:mode===m?T.navy:"rgba(255,255,255,0.6)", fontWeight:700, cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>{l}</button>
          ))}
        </div>
        {mode==="register" && <input style={inp} placeholder="Nome completo" value={name} onChange={e=>setName(e.target.value)} />}
        <input style={inp} type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div style={{ position:"relative", marginBottom:12 }}>
          <input style={{ ...inp, marginBottom:0, paddingRight:50 }} type={showPass?"text":"password"} placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
          <button onClick={()=>setShowPass(p=>!p)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"rgba(255,255,255,0.55)", fontSize:20, cursor:"pointer", padding:4 }}>
            {showPass ? "🙈" : "👁️"}
          </button>
        </div>
        {error && <div style={{ background:"rgba(230,57,70,0.2)", borderRadius:10, padding:"10px 14px", marginBottom:12, color:"#FFB3B8", fontSize:13 }}>{error}</div>}
        <button disabled={loading} onClick={()=>mode==="login"?onLogin(email,pass):onRegister(email,pass,name)} style={{ width:"100%", padding:16, borderRadius:14, border:"none", background:loading?T.sub:T.brand, color:"#fff", fontSize:17, fontWeight:800, cursor:loading?"default":"pointer", fontFamily:"inherit", marginTop:4 }}>
          {loading?"A carregar...":(mode==="login"?"Entrar":"Criar conta")}
        </button>
        {mode==="login" && <p onClick={async()=>{ if(!email){alert("Escreve o teu email primeiro");return;} await api.resetPassword(email); alert("Email de recuperação enviado para "+email);}} style={{ textAlign:"center", color:"rgba(255,255,255,0.35)", fontSize:13, marginTop:14, cursor:"pointer", textDecoration:"underline" }}>Esqueceste a password?</p>}
        {mode==="login" && <p onClick={async()=>{ if(!email){alert("Mete o teu email primeiro");return;} await fetch(`${SB_URL}/auth/v1/recover`,{method:"POST",headers:{"apikey":SB_KEY,"Content-Type":"application/json"},body:JSON.stringify({email})}); alert("Email de recuperação enviado para "+email);}} style={{ textAlign:"center", color:"rgba(255,255,255,0.35)", fontSize:13, marginTop:14, cursor:"pointer", textDecoration:"underline" }}>Esqueci a password</p>}
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
  // Detect tokens from email links (magic link or password recovery)
  const [recoveryToken] = useState(() => {
    const h = window.location.hash;
    if (!h.includes("type=recovery")) return null;
    const m = h.match(/access_token=([^&#&]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  });
  // Auto-login from magic link
  const [magicToken] = useState(() => {
    const h = window.location.hash;
    if (!h.includes("access_token=")) return null;
    if (h.includes("type=recovery")) return null;
    const at = h.match(/access_token=([^&#&]+)/);
    const rt = h.match(/refresh_token=([^&#&]+)/);
    if (!at) return null;
    return { access: decodeURIComponent(at[1]), refresh: rt ? decodeURIComponent(rt[1]) : "" };
  });

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
  const [editingFine, setEditingFine] = useState(null);
  const [treinosModal, setTreinosModal] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [authError, setAuthError] = useState(null);

  const team = teams.find(t=>t.id===teamId);
  const isAdmin = members.some(m=>m.teamId===teamId&&m.userId===myUserId&&m.role==="admin") || team?.createdBy===myUserId;

  // Load team data from DB
  const loadTeam = async (tok, tid) => {
    const [mRaw, ftData, fData, eData, tData, pData] = await Promise.all([
      api.get(`team_members?team_id=eq.${tid}&select=*`, tok),
      api.get(`fine_types?team_id=eq.${tid}&order=amount.asc`, tok),
      api.get(`fines?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`expenses?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`trainings?team_id=eq.${tid}&order=date.asc,time.asc`, tok),
      api.get(`presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.${tid}`, tok).catch(()=>[]),
    ]);
    // Fetch profiles via SECURITY DEFINER RPC (bypasses RLS - todos os membros podem ver)
    let profilesMap = {};
    try {
      const profs = await fetch(`${SB_URL}/rest/v1/rpc/get_team_profiles`, {
        method:'POST', headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`,'Content-Type':'application/json'},
        body: JSON.stringify({ p_team_id: tid })
      }).then(r=>r.ok?r.json():[]).catch(()=>[]);
      (Array.isArray(profs)?profs:[]).forEach(p => { profilesMap[p.id] = p; });
    } catch(e) { console.warn('get_team_profiles failed:', e); }
    // Fallback: tentar carregar profiles directamente (pode falhar por RLS)
    if (Object.keys(profilesMap).length === 0) {
      try {
        const uids = mRaw.map(m=>m.user_id).filter(Boolean);
        if (uids.length > 0) {
          const profs = await api.get(`profiles?id=in.(${uids.join(',')})`, tok).catch(()=>[]);
          (Array.isArray(profs)?profs:[]).forEach(p => { profilesMap[p.id] = p; });
        }
      } catch(e) {}
    }
    // Merge profiles into members
    const mData = mRaw.map(m => ({ ...m, profiles: profilesMap[m.user_id] || null }));
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

      if (p) setProfile({ id:p.id, name:p.name||'', initials:mk(p.name||'U'), position:p.position||'', phone:p.phone||'', birthday:p.birthday||'', email:'', isAppAdmin: p.is_admin===true, avatarUrl: p.avatar_url||null });

      // Load teams via RPC (bypasses RLS, handles member + creator)
      // Carregar equipas via query direta (evita dependência do RPC get_my_teams)
      const membershipsR = await fetch(`${SB_URL}/rest/v1/team_members?user_id=eq.${uid}&select=team_id`, {
        headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`}
      });
      let adapted = [];
      if (membershipsR.ok) {
        const memberships = await membershipsR.json();
        const teamIds = (Array.isArray(memberships) ? memberships : []).map(m => m.team_id).filter(Boolean);
        if (teamIds.length > 0) {
          const teamsR = await fetch(`${SB_URL}/rest/v1/teams?id=in.(${teamIds.join(',')})&order=created_at.asc`, {
            headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`}
          });
          if (teamsR.ok) {
            const teamsJson = await teamsR.json();
            adapted = (Array.isArray(teamsJson) ? teamsJson : []).map(aTeam);
          }
        }
      }
      setTeams(adapted);

      if (!adapted.length) { setAppReady(true); setLoading(false); return; }

      const first = adapted[0].id;
      setTeamId(first);
      const td = await loadTeam(tok, first);
      setMembers(td.members); setFineTypes(td.fineTypes);
      setFines(td.fines); setExpenses(td.expenses);
      setTrainings(td.trainings); setPresences(td.presences);
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

  // Pull-to-refresh
  const refresh = useCallback(async () => {
    if (refreshing || !token || !teamId) return;
    setRefreshing(true);
    try {
      const td = await loadTeam(token, teamId);
      setMembers(td.members); setFineTypes(td.fineTypes);
      setFines(td.fines); setExpenses(td.expenses);
      setTrainings(td.trainings); setPresences(td.presences);
    } catch(e) { console.error(e); }
    setRefreshing(false);
  }, [token, teamId, refreshing]);
  useEffect(() => { window.__multeamRefresh = refresh; }, [refresh]);

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
    const [f]=await api.post('fines',{team_id:d.teamId,member_id:d.memberId,amount:d.amount,reason:d.reason,emoji:d.emoji,paid:false,assigned_by:myUserId},token);
    setFines(p=>[aFine(f),...p]);
  };
  const togglePaid = async id => {
    const f=fines.find(f=>f.id===id); if(!f)return;
    try { await api.patch(`fines?id=eq.${id}`,{paid:!f.paid,paid_at:!f.paid?new Date().toISOString():null},token); setFines(p=>p.map(x=>x.id===id?{...x,paid:!x.paid}:x)); } catch(e){console.error(e);}
  };
  const delFine = async id => {
    try { await api.del(`fines?id=eq.${id}`,token); setFines(p=>p.filter(f=>f.id!==id)); } catch(e){console.error(e);}
  };
  const editFine = async (id, data) => {
    try { await api.patch(`fines?id=eq.${id}`,{emoji:data.emoji,reason:data.reason,amount:data.amount},token); setFines(p=>p.map(f=>f.id===id?{...f,...data}:f)); } catch(e){console.error(e);}
  };
  const addExpense = async d => {
    try { const [e]=await api.post('expenses',{team_id:d.teamId,description:d.description,amount:d.amount,created_by:myUserId},token); setExpenses(p=>[aExpense(e),...p]); } catch(e){console.error(e);}
  };
  const logSession = async (recurring, date, currentPresences) => {
    const alreadyLogged = trainings.find(t => t.teamId===recurring.teamId && t.type==="treino" && t.date===date && t.location===recurring.location && t.time===recurring.time);
    if (alreadyLogged) { alert("Sessão já foi registada!"); return; }
    try {
      const res = await api.post("trainings", { team_id:recurring.teamId, type:"treino", date, time:recurring.time, location:recurring.location, notes:recurring.notes||null, recurring:false, created_by:myUserId }, token);
      const newT = Array.isArray(res) ? res[0] : res;
      if (!newT) return;
      setTrainings(p => [...p, aTraining(newT)]);
      const presArr = Object.entries(currentPresences||{}).filter(([,s])=>s);
      if (presArr.length > 0) {
        await Promise.all(presArr.map(([mid, status]) =>
          api.upsert("presences", { training_id:newT.id, member_id:mid, status }, token).catch(()=>{})
        ));
        setPresences(p => ({ ...p, [newT.id]: Object.fromEntries(presArr) }));
      }
    } catch(e) { console.error(e); }
  };
  const addTraining = async d => {
    const res = await api.post('trainings',{team_id:d.teamId,type:d.type,date:d.date||null,time:d.time||null,location:d.location,notes:d.notes,recurring:d.recurring||false,days:d.days||null,opponent:d.opponent||null,home_away:d.homeAway||null,squad:d.squad||null,created_by:myUserId},token);
    const t = Array.isArray(res) ? res[0] : res;
    if(t) {
      setTrainings(p=>[...p,aTraining(t)]);
      // Send push notification to all team members
      const tm = members.filter(m => m.teamId === d.teamId);
      const isJogo = d.type === "jogo";
      const title = isJogo ? `⚽ Jogo marcado${d.opponent ? ` vs ${d.opponent}` : ""}` : "📅 Novo treino agendado";
      const body = `${d.date ? new Date(d.date+"T00:00:00").toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"}) : "Recorrente"} · ${d.time} · ${d.location||""}`;
      sendPushToTeam(d.teamId, tm, title, body).catch(()=>{});
    }
  };
  const delTraining = async id => {
    try { await api.del(`trainings?id=eq.${id}`,token); setTrainings(p=>p.filter(t=>t.id!==id)); } catch(e){console.error(e);}
  };
  const editTraining = async (id, d) => {
    const patch = {};
    if(d.date      !== undefined) patch.date      = d.date||null;
    if(d.time      !== undefined) patch.time      = d.time||null;
    if(d.location  !== undefined) patch.location  = d.location;
    if(d.notes     !== undefined) patch.notes     = d.notes;
    if(d.days      !== undefined) patch.days      = d.days;
    if(d.opponent  !== undefined) patch.opponent  = d.opponent||null;
    if(d.homeAway  !== undefined) patch.home_away = d.homeAway;
    if(d.squad     !== undefined) patch.squad     = d.squad;
    const res = await api.patch(`trainings?id=eq.${id}`,patch,token);
    const t = Array.isArray(res) ? res[0] : res;
    if(t) setTrainings(p=>p.map(x=>x.id===id?aTraining(t):x));
  };
  const setPresence = async (tid,mid,status) => {
    try {
      if(!status){ await api.del(`presences?training_id=eq.${tid}&member_id=eq.${mid}`,token); setPresences(p=>{const t={...(p[tid]||{})};delete t[mid];return{...p,[tid]:t};}); }
      else { await api.upsert('presences',{training_id:tid,member_id:mid,status},token); setPresences(p=>({...p,[tid]:{...(p[tid]||{}),[mid]:status}})); }
    } catch(e){console.error(e);}
  };
  const addMember = async d => {
    try {
      const r = await fetch(`${SB_URL}/rest/v1/rpc/add_member_to_team`,{
        method:'POST',
        headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
        body:JSON.stringify({p_team_id:d.teamId,p_name:d.name,p_position:d.position||'Jogador',p_phone:d.phone||'',p_birthday:d.birthday||null,p_role:d.role||'player'})
      });
      const m = await r.json();
      if (m?.id) {
        setMembers(p=>[...p,{id:m.id,teamId:d.teamId,userId:m.user_id,role:m.role,name:m.name,initials:mk(m.name),position:m.position||d.position,phone:m.phone||d.phone||'',birthday:d.birthday||''}]);
      }
    } catch(e){console.error(e);}
  };
  const toggleRole = async id => {
    const m=members.find(m=>m.id===id); if(!m)return; const nr=m.role==='admin'?'player':'admin';
    try { await api.patch(`team_members?id=eq.${id}`,{role:nr},token); setMembers(p=>p.map(m=>m.id===id?{...m,role:nr}:m)); } catch(e){console.error(e);}
  };
  const removeMember = async id => {
    try { await api.del(`team_members?id=eq.${id}`,token); setMembers(p=>p.filter(m=>m.id!==id)); } catch(e){console.error(e);}
  };
  const editMember = async (id, data) => {
    try {
      const m = members.find(m => m.id === id);
      // Use RPC to allow admin to update any member's profile (bypasses RLS)
      const r = await fetch(`${SB_URL}/rest/v1/rpc/update_team_member_profile`, {
        method: 'POST',
        headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          p_member_id: id,
          p_team_id: m?.teamId,
          p_name: data.name || '',
          p_phone: data.phone || '',
          p_birthday: data.birthday || null,
          p_position: data.position || '',
          p_avatar_url: data.avatarUrl !== undefined ? (data.avatarUrl || null) : undefined
        })
      });
      if (!r.ok) { const e = await r.json(); throw new Error(e.message || 'Erro ao guardar'); }
      setMembers(p => p.map(m => m.id === id ? { ...m, ...data, avatarUrl: data.avatarUrl !== undefined ? data.avatarUrl : m.avatarUrl } : m));
      // Update own profile state too
      if (m?.userId === myUserId) setProfile(p => ({ ...p, ...data }));
    } catch(e) { console.error(e); alert('Erro: ' + e.message); }
  };
  const [teamError, setTeamError] = useState(null);

  const createTeam = async d => {
    setTeamError(null);
    try {
      const tid = crypto.randomUUID();
      const invCode = Math.random().toString(36).substring(2,5).toUpperCase()+'-'+Math.random().toString(36).substring(2,6).toUpperCase();

      // 1. Inserir equipa
      await api.post('teams',{ id:tid, name:d.name, emoji:d.emoji, color:d.color, season:d.season||'2025/26', country:d.country||'Portugal', sport:d.sport||'Futebol 11', currency:d.currency||'EUR', city:d.city||'', postal:d.postal||'', created_by:myUserId, invite_code:invCode },token);

      // 2. Usar RPC security definer para bypass RLS (insere membro + multas padrão)
      const sr = await fetch(`${SB_URL}/rest/v1/rpc/setup_new_team`,{
        method:'POST',
        headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
        body:JSON.stringify({p_team_id:tid,p_user_id:myUserId})
      });
      if(!sr.ok){ const se=await sr.json(); throw new Error(se.message||se.hint||'Erro ao configurar equipa'); }

      // 4. Ler equipa
      const tr = await api.get(`teams?id=eq.${tid}`,token);
      const newTeam = aTeam(tr[0] || { id:tid, name:d.name, emoji:d.emoji, color:d.color, season:d.season, invite_code:invCode });
      setTeams(p=>[...p, newTeam]);
      await switchTeam(tid);
    } catch(e){ setTeamError(e.message||JSON.stringify(e)); }
  };
  const deleteTeam = async (teamId) => {
    try {
      await api.del(`teams?id=eq.${teamId}`, token);
      const remaining = teams.filter(t => t.id !== teamId);
      setTeams(remaining);
      setSub(null);
      setTab("home");
      if (remaining.length > 0) {
        await switchTeam(remaining[0].id);
      } else {
        setTeamId(null);
        setMembers([]); setFines([]); setFineTypes([]);
        setExpenses([]); setTrainings([]); setPresences({});
      }
    } catch(e) { console.error('deleteTeam error:', e); }
  };
  const joinTeam = async t => {
    try {
      await api.insert('team_members',{team_id:t.id,user_id:myUserId,role:'player'},token);
    } catch(e) {
      if (!e.message?.includes('duplicate key')) {
        alert(`Erro ao entrar na equipa: ${e.message||"tenta novamente"}`);
        return;
      }
      // duplicate key = já és membro, continua
    }
    // Adicionar a equipa ao state se ainda não estiver
    setTeams(prev => prev.some(x => x.id === t.id) ? prev : [...prev, t]);
    await switchTeam(t.id);
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
    if (!appReady || !pendingInvite) return;
    // Verificar se já é membro de alguma equipa com este código
    const alreadyIn = teams.find(t => t.inviteCode?.toUpperCase() === pendingInvite.toUpperCase());
    if (alreadyIn) {
      // Já é membro — mudar direto para a equipa sem mostrar modal
      switchTeam(alreadyIn.id);
      setPendingInvite(null);
      window.history.replaceState({}, '', window.location.pathname);
    } else {
      setModal("join");
    }
  }, [appReady, pendingInvite, teams]);

  // Subscribe to push notifications and store subscription in Supabase
  const subscribeToPush = async (tok, uid) => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      const existing = await reg.pushManager.getSubscription();
      const sub = existing || await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: VAPID_PUBLIC,
      });
      const subJson = sub.toJSON();
      // Store subscription in Supabase (upsert by endpoint)
      await fetch(`${SB_URL}/rest/v1/push_subscriptions`, {
        method: "POST",
        headers: { "apikey": SB_KEY, "Authorization": `Bearer ${tok}`, "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ user_id: uid, endpoint: subJson.endpoint, p256dh: subJson.keys?.p256dh, auth: subJson.keys?.auth }),
      });
    } catch(e) { console.warn("Push subscribe failed:", e.message); }
  };

  // Request notification permission once after login
  useEffect(() => {
    if (!appReady || !token || !myUserId) return;
    if ("Notification" in window && Notification.permission === "default") {
      setTimeout(async () => {
        const perm = await Notification.requestPermission();
        if (perm === "granted") subscribeToPush(token, myUserId);
      }, 2500);
    } else if ("Notification" in window && Notification.permission === "granted") {
      subscribeToPush(token, myUserId);
    }
  }, [appReady, token, myUserId]);

  // Toast notification helper
  const [toast, setToast] = useState(null);
  const showToast = (msg, color = T.navy) => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 3000);
  };

  // Wrap addFine to show toast
  // Send push to all subscribed members via Supabase Edge Function
  const sendPushToTeam = async (teamId, members, title, body) => {
    const userIds = members.map(m => m.userId).filter(Boolean);
    if (!userIds.length) return;
    try {
      await fetch(`${SB_URL}/functions/v1/send-team-push`, {
        method: "POST",
        headers: { "apikey": SB_KEY, "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ team_id: teamId, user_ids: userIds, title, body }),
      });
    } catch(e) { console.warn("Push send failed:", e.message); }
  };

  const addFineWithToast = async d => {
    await addFine(d);
    const m = members.find(x => String(x.id) === String(d.memberId));
    showToast(`🟥 Multa de ${d.amount}€ atribuída a ${m?.name || "jogador"}`, T.brand);
    // Send push to the fined member
    if (m?.userId) {
      sendPushToTeam(d.teamId, [m], "🟥 Recebeste uma multa!", `${d.amount}€ — ${d.reason || "Multa atribuída"}`).catch(()=>{});
    }
  };
  // Auto-login with magic link token
  useEffect(() => {
    if (!magicToken || token) return;
    fetch(`${SB_URL}/auth/v1/user`, {
      headers: { "apikey": SB_KEY, "Authorization": `Bearer ${magicToken.access}` }
    }).then(r => r.json()).then(u => {
      if (u.id) { setToken(magicToken.access); setMyUserId(u.id); window.history.replaceState(null, "", "/"); }
    }).catch(() => {});
  }, [magicToken]);

  if (recoveryToken) return <ResetPasswordScreen accessToken={recoveryToken} onDone={()=>{ window.history.replaceState(null,"","/"); window.location.reload(); }} />;
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
      {modal==="join" && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} />}
    </div>
  );

  if (tab==="treinos") return (
    <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      <TreinosPage team={team} trainings={trainings} members={members} myUserId={myUserId} isAdmin={isAdmin} presences={presences} onSetPresence={setPresence} onAddType={addTraining} onDelete={delTraining} onEdit={editTraining} onLogSession={logSession} onBack={()=>setTab("home")} modal={treinosModal} setModal={setTreinosModal} />
    </div>
  );
  if (sub?.type==="member") return wrap(<MemberDetailScreen member={sub.data} team={team} fines={fines} isAdmin={isAdmin} onBack={()=>setSub(null)} onTogglePaid={togglePaid} onDeleteFine={delFine} />);
  if (sub?.type==="manage") {
    const mt=teams.find(t=>t.id===sub.data);
    return wrap(<><ManageTeamScreen team={mt} members={members} fineTypes={fineTypes} token={token} setFineTypes={setFineTypes} myUserId={myUserId} onBack={()=>setSub(null)} onAddMember={()=>setModal("member")} onToggleRole={toggleRole} onRemoveMember={removeMember} onEditMember={editMember} onRegenerateCode={()=>{}} onDeleteTeam={()=>deleteTeam(mt.id)} />{modal==="member"&&<AddMemberModal team={mt} onAdd={addMember} onClose={()=>setModal(null)} />}</>);
  }

  return (
    <div style={{ background:T.bg, minHeight:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      {refreshing && <div style={{ position:"fixed", top:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, zIndex:999, display:"flex", justifyContent:"center", paddingTop:8 }}><div style={{ background:T.navy, borderRadius:20, padding:"6px 16px", display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#fff", fontWeight:700, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}><span style={{ display:"inline-block", animation:"spin 0.8s linear infinite" }}>⟳</span> A atualizar...</div></div>}
      {toast && <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", zIndex:9999, background:toast.color, color:"#fff", borderRadius:20, padding:"10px 20px", fontSize:14, fontWeight:700, boxShadow:"0 4px 20px rgba(0,0,0,0.3)", whiteSpace:"nowrap", pointerEvents:"none" }}>{toast.msg}</div>}
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}dd)`, color:"#fff", padding:"52px 16px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <p style={{ margin:0, fontSize:11, opacity:0.6, fontWeight:700, letterSpacing:1, textTransform:"uppercase" }}>Multeam</p>
          <h2 style={{ margin:0, fontSize:22, fontWeight:900, letterSpacing:-0.5 }}>{team.name}</h2>
          {isAdmin && <AdminHeaderBadge teamColor={team.color} />}
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <button onClick={()=>window.location.reload()} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, width:36, height:36, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>↺</button>
          <button onClick={()=>setModal("picker")} style={{ background:"rgba(255,255,255,0.22)", border:"none", color:"#fff", borderRadius:20, padding:"8px 16px", fontSize:14, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>{team.emoji} Trocar ▾</button>
        </div>
      </div>

      {tab==="home"  && <HomeTab team={team} fines={fines} members={members} expenses={expenses} trainings={trainings} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} onSelectMember={m=>setSub({type:"member",data:m})} />}
      {tab==="fines" && <FinesTab team={team} fines={fines} members={members} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} onTogglePaid={togglePaid} onDeleteFine={delFine} onEditFine={f=>setEditingFine(f)} onSelectMember={m=>setSub({type:"member",data:m})} />}
      {tab==="caixa" && <TreasuryTab team={team} fines={fines} members={members} expenses={expenses} isAdmin={isAdmin} onAddExpense={()=>setModal("expense")} />}
      {tab==="geral" && <GeneralTab user={{ ...(profile||{}), position: members.find(m=>m.userId===myUserId&&m.teamId===teamId)?.position || profile?.position || '' }} myUserId={myUserId} teams={teams} members={members} token={token} onEditProfile={()=>setModal("profile")} onManageTeam={id=>setSub({type:"manage",data:id})} onCreateTeam={()=>setModal("team")} onJoinTeam={()=>setModal("join")} onLogout={handleLogout} isAppAdmin={profile?.isAppAdmin} onAdminOpen={()=>setTab("appadmin")} />}
      {tab==="appadmin" && profile?.isAppAdmin && <AppAdminTab token={token} onBack={()=>setTab("geral")} />}

      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.card, borderTop:`1px solid ${T.border}`, display:"flex", padding:"8px 0 24px", boxShadow:"0 -2px 20px rgba(0,0,0,0.06)" }}>
        {nav.map(item=>(
          <button key={item.id} onClick={()=>setTab(item.id)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px 0", fontFamily:"inherit" }}>
            <span style={{ fontSize:20 }}>{item.emoji}</span>
            <span style={{ fontSize:10, fontWeight:tab===item.id?800:500, color:tab===item.id?team.color:T.sub }}>{item.label}</span>
          </button>
        ))}
      </div>

      {modal==="picker"  && <TeamPickerModal teams={teams} members={members} myUserId={myUserId} currentTeamId={teamId} onSelect={switchTeam} onClose={()=>setModal(null)} onCreateTeam={()=>setModal("team")} />}
      {modal==="fine"    && isAdmin && <AddFineModal team={team} myUserId={myUserId} token={token} onAdd={addFineWithToast} onClose={()=>setModal(null)} />}
      {modal==="expense" && isAdmin && <AddExpenseModal team={team} onAdd={addExpense} onClose={()=>setModal(null)} />}
      {editingFine && isAdmin && <EditFineModal fine={editingFine} onSave={editFine} onClose={()=>setEditingFine(null)} />}
      {modal==="team"    && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="profile" && <EditProfileModal user={profile||{}} onSave={async u=>{
        // Guardar avatar_url na tabela profiles
        try { await api.patch(`profiles?id=eq.${myUserId}`,{name:u.name,phone:u.phone||null,birthday:u.birthday||null,avatar_url:u.avatarUrl||null},token); } catch(e){console.error(e);}
        await editMember(members.find(m=>m.userId===myUserId&&m.teamId===teamId)?.id,u);
        setProfile(p=>({...p,...u}));
      }} onClose={()=>setModal(null)} />}
      {modal==="join"    && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} />}
    </div>
  );
}

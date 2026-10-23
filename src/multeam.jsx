import { useState, useEffect, useCallback } from "react";

// ── TOKENS ──────────────────────────────────────────────────
const T = {
  bg: "#F0F1F6", card: "#FFFFFF", brand: "#E63946", green: "#147832",
  yellow: "#FFCC00", navy: "#1D3557", text: "#1D1D1F", sub: "#6B6B72",
  border: "#E5E5EA", inputBg: "#F8F8FA",
};

// ── SUPABASE ─────────────────────────────────────────────────
const SB_URL = "https://syakniwyvcfdqsrwsalk.supabase.co";
const APP_URL = "https://multeam.ch"; // endereço público da app (convites e partilhas)
const SB_KEY = "sb_publishable_MRMHqVQ-key1c5kf7UOLUA_rwyu85BI";
const VAPID_PUBLIC = "BG6saRvz-Eh318LO9cY2w5zSN7sAdDYekBYxqPdrrQ671pN_vUzBsV9iRFVOnO37rQ81o-cYoOuTCwmo--CQnEk";

// ── Diagnóstico de notificações push (só no cliente) ──
// Motivo da falha ao ativar as notificações neste dispositivo -> texto em português para Geral.
const PUSH_FAIL_KEY = "multeam_push_send_fail";
const isIOSDevice = () => { try { return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); } catch(e) { return false; } };
const isStandaloneApp = () => { try { return window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches; } catch(e) { return false; } };
const pushIssueText = issue => {
  if (!issue) return "";
  const d = issue.detail ? ` (${issue.detail})` : "";
  switch (issue.code) {
    case "ios-instalar": return "No iPhone/iPad as notificações só funcionam com a app instalada: no Safari toca em Partilhar, escolhe «Adicionar ao ecrã principal» e abre a app a partir do ícone.";
    case "sem-suporte": return "Este browser não suporta notificações push.";
    case "bloqueado": return "As notificações estão bloqueadas neste dispositivo. Ativa-as nas definições do browser ou do telemóvel e toca em Tentar novamente.";
    case "sw": return "O serviço da app ainda não está pronto. Recarrega a app e tenta outra vez.";
    case "subscrever": return `Não foi possível ativar as notificações neste dispositivo${d}.`;
    case "gravar": return `Não foi possível guardar a subscrição das notificações${d}.`;
    default: return "Não foi possível ativar as notificações.";
  }
};
// contador local (só deste dispositivo) de envios de push que falharam
const readPushFails = () => { try { const o = JSON.parse(window.localStorage.getItem(PUSH_FAIL_KEY) || "null"); return o && typeof o.count === "number" ? o : { count:0 }; } catch(e) { return { count:0 }; } };
const notePushFail = why => {
  console.error("Push send failed:", why);
  try { const c = readPushFails(); window.localStorage.setItem(PUSH_FAIL_KEY, JSON.stringify({ count:c.count + 1, last:String(why).slice(0, 120), at:new Date().toISOString() })); } catch(e) {}
};
const clearPushFails = () => { try { window.localStorage.removeItem(PUSH_FAIL_KEY); } catch(e) {} };

// ── MODO LEITURA (super admin) ───────────────────────────────
// Com RO.on ligado, nenhum pedido que não seja GET (ou o POST às rpc de leitura de RO_RPCS) sai da app.
const RO_MSG = "Modo leitura: não é possível alterar.";
const RO = { on:false };
const RO_RPCS = ["get_team_as_admin", "get_all_teams_admin", "get_app_admin_stats", "get_app_activity_totals", "get_admin_teams_overview", "get_app_growth_stats", "get_admin_teams_locations", "get_app_feedback", "list_team_claims"];
const roAllows = (url, method) => {
  const m = String(method || "GET").toUpperCase();
  if (m === "GET" || m === "HEAD") return true;
  return m === "POST" && RO_RPCS.some(f => String(url).split("?")[0] === `${SB_URL}/rest/v1/rpc/${f}`);
};
const roCheck = (url, method) => { if (RO.on && !roAllows(url, method)) throw new Error(RO_MSG); };
// camada central: também apanha qualquer fetch direto que alguém se esqueça de esconder
if (typeof window !== "undefined" && typeof window.fetch === "function" && !window.fetch.__ro) {
  const realFetch = window.fetch.bind(window);
  const guardedFetch = (input, init) => {
    try { roCheck(typeof input === "string" ? input : (input && input.url) || String(input), (init && init.method) || (input && input.method)); }
    catch (e) { return Promise.reject(e); }
    return realFetch(input, init);
  };
  guardedFetch.__ro = true;
  window.fetch = guardedFetch;
}

const api = {
  h(tok) { return { 'apikey':SB_KEY, 'Authorization':`Bearer ${tok||SB_KEY}`, 'Content-Type':'application/json', 'Prefer':'return=representation' }; },
  async get(p,tok)      { const r=await fetch(`${SB_URL}/rest/v1/${p}`,p.startsWith('fine_types')?{headers:this.h(tok),cache:'no-store'}:{headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async post(p,b,tok)   { roCheck(`${SB_URL}/rest/v1/${p}`, 'POST'); const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async insert(p,b,tok) { roCheck(`${SB_URL}/rest/v1/${p}`, 'POST'); const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:{...this.h(tok),'Prefer':'return=minimal'},body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.status; },
  async patch(p,b,tok)  { roCheck(`${SB_URL}/rest/v1/${p}`, 'PATCH'); const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'PATCH',headers:this.h(tok),body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async del(p,tok)      { roCheck(`${SB_URL}/rest/v1/${p}`, 'DELETE'); const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'DELETE',headers:this.h(tok)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); },
  async upsert(p,b,tok) { roCheck(`${SB_URL}/rest/v1/${p}`, 'POST'); const r=await fetch(`${SB_URL}/rest/v1/${p}`,{method:'POST',headers:{...this.h(tok),'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(b)}); if(!r.ok)throw new Error((await r.json()).message||'Erro'); return r.json(); },
  async signIn(email,password) { const r=await fetch(`${SB_URL}/auth/v1/token?grant_type=password`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.error); return d; },
  async signUp(email,password,name) { const r=await fetch(`${SB_URL}/auth/v1/signup`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email,password,data:{name}})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||d.msg||'Erro'); return d; },
  async resetPassword(email) { await fetch(`${SB_URL}/auth/v1/recover`,{method:'POST',headers:{'apikey':SB_KEY,'Content-Type':'application/json'},body:JSON.stringify({email})}); },
  async updatePassword(newPass, accessToken) { const r=await fetch(`${SB_URL}/auth/v1/user`,{method:'PUT',headers:{'apikey':SB_KEY,'Authorization':`Bearer ${accessToken}`,'Content-Type':'application/json'},body:JSON.stringify({password:newPass})}); const d=await r.json(); if(d.error)throw new Error(d.error_description||'Erro'); return d; },
};

// ── DATA ADAPTERS ────────────────────────────────────────────
const mk = s => s ? s.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '??';
const aTeam = t => ({ id:t.id, name:t.name, emoji:t.emoji||'⚽', color:t.color||'#1D3557', season:t.season||'2025/26', inviteCode:t.invite_code, country:t.country, sport:t.sport, currency:t.currency, city:t.city, postal:t.postal, createdBy:t.created_by });
const aMember = m => ({ id:m.id, teamId:m.team_id, userId:m.user_id, role:m.role, name:m.profiles?.name||'Utilizador', initials:mk(m.profiles?.name||'U'), position:m.position||m.profiles?.position||'Jogador', phone:m.profiles?.phone||'', birthday:m.profiles?.birthday||'', avatarUrl:m.profiles?.avatar_url||null, unavailable:!!m.unavailable, unavailableNote:m.unavailable_note||'', unavailableSince:m.unavailable_since||'', unavailableEmoji:m.unavailable_emoji||'🤕' });
const aFine = f => {
  const localDate = f.created_at ? (() => { const d = new Date(f.created_at); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; })() : '';
  return { id:f.id, teamId:f.team_id, memberId:f.member_id, amount:Number(f.amount), reason:f.reason||'', emoji:iconForFine(f.reason, f.emoji), paid:f.paid, paidAt:f.paid_at||null, date:f.date||localDate };
};
// ── ÍCONE AUTOMÁTICO das multas e dos tipos de multa (nada é gravado para multas antigas) ──
// Regras por palavra-chave, por prioridade (nome sem maiúsculas nem acentos). Cartão amarelo/vermelho/expulsão primeiro, para nunca mudar o 🟥 desses nomes.
// "ícone" especial: a imagem da app (multas "não registadas na app"). iconForFine devolve este marcador; FineIcon desenha a imagem. Nunca se grava na base (storableIcon).
const MULTEAM_ICON = "multeam";
const storableIcon = ic => ic === MULTEAM_ICON ? "⚪" : ic;
const ICON_RULES = [
  [/cartao\s+amarelo/, "🟨"], [/cartao\s+vermelho|\bvermelho\b|expuls/, "🟥"],
  [/multeam|(?=.*\bregistar\b)(?=.*\baplicacao\b)/, MULTEAM_ICON],
  [/\bfum(ar|o)\b|cigarro|tabaco/, "🚭"],
  [/\bbolos?\b|aniversar/, "🎂"],
  [/atras|chegar.*(tarde|depois)|ultimo a entrar|\bchegar tarde/, "⏰"],
  [/falt\w*.*\bjogos?\b/, "⚽"],
  [/\bfalt|\bnao vir\b|\bnao (ir|aparecer)\b/, "❌"],
  [/equipament|\bmaterial|\bfatos?\b|\bkit\b|chuteira|camisola|roupa/, "👕"],
  [/telemovel|telefone/, "📵"],
  [/\blixo|migalha|\bsuj|balneario/, "🧹"],
  [/\bfalar\b|gritar|\bbocas?\b|arbitr|histori|barulho/, "🗣️"],
  [/derrota/, "😞"], [/vitoria/, "🏆"], [/golos? sofrid/, "🥅"], [/golos? marcad/, "⚽"],
  [/pagamento|\bmultas?\b|divida/, "💶"],
  [/carrinha|viatura|boleia/, "🚐"],
  [/lanche|comida|jantar|consumo|\bcomer\b/, "🍽️"],
  [/assinar|convocatoria/, "✍️"], [/penalt/, "🎯"], [/dormir|adormec/, "😴"],
];
const normFineName = name => String(name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
// 1) emoji guardado que não seja o 🟥 por defeito: manda (escolha da equipa). 2) 🟥 ou vazio: regra por palavra-chave. 3) sem regra: 🟥 só para cartão/vermelho/expulsão, senão ⚪.
const iconForFine = (name, emoji) => {
  const e = String(emoji == null ? '' : emoji).trim();
  if (e && e !== '🟥' && e !== '⚪') return e;   // ⚪ = neutro (não é escolha da equipa): as regras podem substituí-lo
  const n = normFineName(name);
  for (const [re, ic] of ICON_RULES) if (re.test(n)) return ic;
  return /cartao|vermelho|expuls/.test(n) ? '🟥' : '⚪';
};
const aFineType = ft => ({ id:ft.id, teamId:ft.team_id, name:ft.name, amount:Number(ft.amount), emoji:iconForFine(ft.name, ft.emoji) });
const aCard = c => ({ id:c.id, teamId:c.team_id, memberId:c.member_id, kind:c.kind,
  date:c.match_date||'', opponent:c.opponent||'', note:c.note||'', consumed:!!c.consumed });
const aExpense = e => ({ id:e.id, teamId:e.team_id, description:e.description, amount:Number(e.amount), date:(() => { const d = e.created_at ? new Date(e.created_at) : null; return d && !isNaN(d) ? localDateStr(d) : ''; })() });
const aTraining = t => ({ id:t.id, teamId:t.team_id, type:t.type||'treino', date:t.date||'', time:(t.time||'').slice(0,5), location:t.location||'', notes:t.notes||'', recurring:t.recurring||false, days:t.days||[], opponent:t.opponent||'', homeAway:t.home_away||'casa', squad:t.squad||[], createdBy:t.created_by });

const aAbsence = a => ({ id:a.id, teamId:a.team_id, memberId:a.member_id||null, memberName:a.member_name||'Jogador', kind:a.kind==='ausencia'?'ausencia':'lesao', emoji:a.emoji||'🤕', note:a.note||'', start:a.start_date||'', end:a.end_date||null });

const DAYS_PT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

// ── HELPERS ──────────────────────────────────────────────────
const isPast = d => new Date(d + "T23:59:59") < new Date();
const UNAVAIL_EMOJIS = ["🤕","🩼","🩹","🧊","⚕️","🏥"];
// Cor sólida para texto branco: usa a cor dada se tiver contraste >= 3 com o branco, senão o azul-escuro.
const solidForWhite = c => {
  const m = /^#([0-9a-f]{6})$/i.exec(c || "");
  if (!m) return T.navy;
  const ch = i => { const v = parseInt(m[1].slice(i, i + 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const L = 0.2126 * ch(0) + 0.7152 * ch(2) + 0.0722 * ch(4);
  return 1.05 / (L + 0.05) >= 3 ? c : T.navy;
};
// "YYYY-MM-DD" -> "DD/MM" (só texto, sem Date: sem fuso)
const fmtDM = d => { const m = /^(\d{4})-(\d\d)-(\d\d)/.exec(d || ""); return m ? `${m[3]}/${m[2]}` : ""; };
// "Jogador" é o texto de reserva do aMember (e o valor predefinido ao adicionar): não é uma posição a mostrar
const realPosition = p => { const t = (p || "").trim(); return t && t.toLowerCase() !== "jogador" ? t : ""; };
// "1 membro" / "2 membros" (0 fica no plural)
const plural = (n, one, many) => `${n} ${Number(n) === 1 ? one : many}`;
// ── LESÕES E AUSÊNCIAS (tabela member_absences; escritas só pelas funções absence_*) ──
const ABS_KINDS = { lesao:{ one:"lesão", many:"lesões", label:"Lesão" }, ausencia:{ one:"ausência", many:"ausências", label:"Ausência" } };
// chamada a uma função SQL; devolve o JSON ou lança com a mensagem da base de dados
const rpcCall = async (fn, body, tok) => {
  roCheck(`${SB_URL}/rest/v1/rpc/${fn}`, 'POST');
  const r = await fetch(`${SB_URL}/rest/v1/rpc/${fn}`, { method:'POST', headers:api.h(tok), body:JSON.stringify(body) });
  let j = null;
  try { j = await r.json(); } catch(e) { j = null; }
  if (!r.ok) throw new Error((j && j.message) || `Erro ${r.status}`);
  return j;
};
// Mensagens de erro para o utilizador: sempre em português claro e curto. O texto original (da base de dados, do Supabase ou do
// navegador) fica só no console.error. Mensagens que já estão em português passam iguais.
const ERR_GENERIC = "Ocorreu um erro. Tenta outra vez.";
// aviso quando a rpc get_team_profiles falha (a leitura direta de profiles só serve de reserva)
const PROFILES_WARN = "Não foi possível carregar os perfis.";
const errPt = (e, fallback) => {
  const raw = e == null ? "" : (typeof e === "string" ? e : (e.message !== undefined && e.message !== null ? String(e.message) : ""));
  const out = (txt) => { if (txt !== raw && raw) { try { console.error("[erro original]", raw); } catch (x) { /* sem console */ } } return txt; };
  if (!raw.trim()) return fallback || ERR_GENERIC;
  if (/JWT|token is expired|session expired/i.test(raw)) return out("A sessão expirou. Entra outra vez.");
  if (/row-level security|violates .*polic|permission denied|not authorized|\b42501\b/i.test(raw)) return out("Sem permissão.");
  if (/Failed to fetch|NetworkError|Load failed|network request failed/i.test(raw)) return out("Sem ligação. Verifica a rede e tenta outra vez.");
  if (/duplicate key|already registered|already exists/i.test(raw)) return out("Esse registo já existe.");
  if (/Invalid login credentials|invalid_grant/i.test(raw)) return out("Email ou password incorretos.");
  if (/Email not confirmed|email_not_confirmed/i.test(raw)) return out("Confirma primeiro o teu email (vê a caixa de entrada) e depois entra.");
  { const pw = /Password should be at least (\d+)/i.exec(raw); if (pw) return out(`A password tem de ter pelo menos ${pw[1]} caracteres.`); }
  if (/Unable to validate email address|invalid format|email_address_invalid/i.test(raw)) return out("O email não é válido. Confirma como o escreveste.");
  if (/rate limit|too many requests|over_.*_rate_limit|\b429\b/i.test(raw)) return out("Demasiadas tentativas. Espera um pouco e tenta outra vez.");
  // já está em português (acentos ou palavras próprias das mensagens da app)? fica igual
  if (/[À-ÿ]/.test(raw) || /\b(erro|sem|tenta|equipa|registo|multa|incorret|escreve|mete|coincidem|obrigat|permiss|membro|guardar|apagar|administradores|ficou|continua)/i.test(raw)) return raw;
  return out(ERR_GENERIC);
};
// uma escrita bloqueada por RLS responde com sucesso mas sem linhas: tratar como erro
const needRows = res => { if (!Array.isArray(res) || !res.length) throw new Error("sem permissão, ou o registo já não existe"); return res; };
// "YYYY-MM-DD" -> dias do calendário (UTC só como contador, sem fuso)
const dayNum = s => { const m = /^(\d{4})-(\d\d)-(\d\d)/.exec(s || ""); return m ? Date.UTC(+m[1], +m[2]-1, +m[3]) / 86400000 : NaN; };
// duração em dias, contando o primeiro e o último; em curso conta até hoje; nunca menos de 1
const absDays = a => { const n = dayNum(a.end || todayLocal()) - dayNum(a.start) + 1; return isNaN(n) ? 0 : Math.max(1, n); };
// época de 1 de julho a 30 de junho, a partir da data de início: "2025/26"
const absSeason = start => { const m = /^(\d{4})-(\d\d)/.exec(start || ""); if (!m) return ""; const y = +m[1], mo = +m[2], s = mo >= 7 ? y : y - 1; return `${s}/${String((s + 1) % 100).padStart(2, "0")}`; };
// Dia LOCAL em "AAAA-MM-DD" a partir de "AAAA-MM-DD" ou de um timestamp completo ("…T21:24:58.631954+00:00", "… 21:24:58+00", "…Z");
// "" se vazio ou inválido. Texto simples: sem Date. Timestamp: getFullYear/getMonth/getDate (nunca slice(0,10) nem toISOString).
const daysIn = (y, m) => [31, (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
const validYMD = s => { const m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(s); return !!m && +m[2] >= 1 && +m[2] <= 12 && +m[3] >= 1 && +m[3] <= daysIn(+m[1], +m[2]); };
const localDay = v => {
  if (v instanceof Date) return isNaN(v) ? "" : localDateStr(v);
  const s = String(v == null ? "" : v).trim();
  if (!s) return "";
  if (validYMD(s)) return s;
  const m = /^(\d{4}-\d\d-\d\d)[T ](\d\d:\d\d(?::\d\d)?)(?:[.,](\d+))?\s*(Z|[+-]\d\d(?::?\d\d)?)?$/i.exec(s);
  if (!m || !validYMD(m[1])) return "";
  const tz = !m[4] ? "" : /^z$/i.test(m[4]) ? "Z" : m[4].length === 3 ? `${m[4]}:00` : m[4].includes(":") ? m[4] : `${m[4].slice(0, 3)}:${m[4].slice(3)}`;
  const d = new Date(`${m[1]}T${m[2]}${m[3] ? "." + m[3].slice(0, 3).padEnd(3, "0") : ""}${tz}`);
  return isNaN(d) ? "" : localDateStr(d);
};
// "DD/MM/AAAA" no dia local; vazio ou inválido: "Sem data"
const fmtDay = v => { const d = localDay(v); return d ? `${d.slice(8)}/${d.slice(5, 7)}/${d.slice(0, 4)}` : "Sem data"; };
const fmtDMY = fmtDay;
// mais recente primeiro; sem data (ou inválida) no fim
const byDayDesc = (a, b) => localDay(b.date).localeCompare(localDay(a.date));
const MESES_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const unavailText = m => `Indisponível${m.unavailableSince ? ` desde ${fmtDate(m.unavailableSince)}` : ""}${m.unavailableNote ? ` · ${m.unavailableNote}` : ""}`;
const fmtDate = d => { if (!d) return "—"; const dt = new Date(d + "T00:00:00"); return dt.toLocaleDateString("pt-PT", { day:"2-digit", month:"long", year:"numeric" }); };
const todayLocal = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };

// ── PREVISÃO DO TEMPO (Open-Meteo, sem chave; localização = cidade da equipa) ──
const weatherEmoji = c => {
  if (c === 0) return "☀️";
  if (c === 1 || c === 2) return "🌤️";
  if (c === 3) return "☁️";
  if (c === 45 || c === 48) return "🌫️";
  if (c >= 51 && c <= 57) return "🌦️";
  if (c >= 61 && c <= 67) return "🌧️";
  if (c >= 71 && c <= 77) return "❄️";
  if (c >= 80 && c <= 82) return "🌧️";
  if (c === 85 || c === 86) return "❄️";
  if (c >= 95 && c <= 99) return "⛈️";
  return "";
};
const localDateStr = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
// Próxima ocorrência (data local YYYY-MM-DD) de um treino recorrente, dentro de 7 dias; senão "".
const nextOccurrence = (days, time, now = new Date()) => {
  if (!days || !days.length) return "";
  const hh = parseInt((time || "").slice(0, 2), 10);
  for (let i = 0; i < 7; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (!days.includes(d.getDay())) continue;
    // hoje mas a hora já passou → não é a próxima
    if (i === 0 && !isNaN(hh) && now.getHours() > hh) continue;
    return localDateStr(d);
  }
  return "";
};
// hourly: { "YYYY-MM-DDTHH:00": {temp, code} } → { [idDoTreino]: {temp, code, emoji} }
const matchForecast = (hourly, trainings, now = new Date()) => {
  const out = {};
  if (!hourly) return out;
  (trainings || []).forEach(t => {
    const date = t.type === "recorrente" ? nextOccurrence(t.days, t.time, now) : t.date;
    const hh = (t.time || "").slice(0, 2);
    if (!date || !/^\d\d$/.test(hh)) return;
    const h = hourly[`${date}T${hh}:00`];
    if (!h || h.temp == null) return;
    const emoji = weatherEmoji(h.code);
    if (!emoji) return;
    out[t.id] = { temp: Math.round(h.temp), code: h.code, emoji };
  });
  return out;
};
// Próximo treino/jogo (com data) ou recorrente, nos próximos 7 dias, para pedir confirmação de presença.
const nextPresenceEvent = (trainings, teamId, now = new Date()) => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let best = null;
  (trainings || []).forEach(t => {
    if (t.teamId !== teamId) return;
    const date = t.type === "recorrente" ? nextOccurrence(t.days, t.time, now) : t.date;
    const m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(date || "");
    if (!m) return;
    const day = new Date(+m[1], +m[2] - 1, +m[3]);
    const diff = Math.round((day - today) / 864e5);
    if (diff < 0 || diff > 6) return;
    const hh = parseInt((t.time || "").slice(0, 2), 10), mm = parseInt((t.time || "").slice(3, 5), 10) || 0;
    if (diff === 0 && !isNaN(hh) && now.getHours() > hh) return; // hoje mas a hora já passou
    const key = day.getTime() + (isNaN(hh) ? 0 : hh * 36e5 + mm * 6e4);
    if (!best || key < best.key) best = { t, day, diff, key };
  });
  return best;
};
const presenceTitle = ev => {
  const when = ev.diff === 0 ? "hoje" : ev.diff === 1 ? "amanhã" : ev.day.toLocaleDateString("pt-PT", { weekday:"long" });
  return `${ev.t.type === "jogo" ? "Jogo" : "Treino"} ${when}${ev.t.time ? ` · ${ev.t.time}` : ""}`;
};
const fcText = f => f ? ` · ${f.emoji} ${f.temp}°` : "";
const FC_TTL = 60 * 60 * 1000;
const fcCache = {}; // chave da equipa → { at, hourly, promise } — partilhada entre separadores
// País (nome em PT/EN/DE ou código) → ISO 3166-1 alpha-2; tolerante a maiúsculas e acentos.
const normCountry = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const COUNTRY_ISO = {};
[["PT","portugal"],["CH","suica","switzerland","schweiz","suisse","svizzera"],["ES","espanha","spain","espana"],
 ["FR","franca","france","frankreich"],["DE","alemanha","germany","deutschland"],["IT","italia","italy","italien"],
 ["BR","brasil","brazil"],["AO","angola"],["MZ","mocambique","mozambique"],["CV","cabo verde","cape verde"],
 ["GB","reino unido","united kingdom","uk","gb","great britain"],["NL","holanda","paises baixos","netherlands","niederlande"],
 ["BE","belgica","belgium","belgien"],["LU","luxemburgo","luxembourg"],["AT","austria","osterreich"],["LI","liechtenstein"]
].forEach(([iso, ...names]) => { COUNTRY_ISO[iso.toLowerCase()] = iso; names.forEach(n => { COUNTRY_ISO[n] = iso; }); });
const countryISO = c => COUNTRY_ISO[normCountry(c)] || "";
const fetchHourly = (city, country) => {
  const base = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt`;
  const iso = countryISO(country);
  const geocode = iso
    ? fetch(`${base}&countryCode=${iso}`).then(r => r.json()).catch(() => null)
        .then(g => (g && g.results && g.results[0]) ? g : fetch(base).then(r => r.json()))
    : fetch(base).then(r => r.json());
  return geocode
    .then(g => {
      const p = g && g.results && g.results[0];
      if (!p) return null;
      return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${p.latitude}&longitude=${p.longitude}&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=7`)
        .then(r => r.json())
        .then(w => {
          const h = w && w.hourly;
          if (!h || !h.time) return null;
          const m = {};
          h.time.forEach((k, i) => { m[k] = { temp: h.temperature_2m[i], code: h.weather_code[i] }; });
          return m;
        });
    });
};
// UMA geocodificação + UMA previsão por equipa, no máximo de hora a hora. Falha sempre em silêncio.
const useForecast = (team, trainings) => {
  const city = ((team && team.city) || "").trim();
  const key = city ? `${team.id}|${city}|${team.country || ""}` : "";
  const [hourly, setHourly] = useState(null);
  useEffect(() => {
    if (!key) { setHourly(null); return; }
    let alive = true;
    let c = fcCache[key];
    if (c && !c.promise && Date.now() - c.at < FC_TTL) { setHourly(c.hourly); return; }
    if (!c || !c.promise) {
      const p = Promise.resolve().then(() => fetchHourly(city, team.country)).catch(() => null);
      c = fcCache[key] = { at: Date.now(), hourly: null, promise: p };
      p.then(m => { fcCache[key] = { at: Date.now(), hourly: m, promise: null }; });
    }
    setHourly(null); // cidade/país mudaram: não mostrar a previsão do sítio antigo
    c.promise.then(m => { if (alive) setHourly(m); }).catch(() => {});
    return () => { alive = false; };
  }, [key]);
  try { return matchForecast(hourly, trainings); } catch (e) { return {}; }
};

const cardCount = (cards, teamId, memberId) => {
  const mine = cards.filter(c => c.teamId===teamId && String(c.memberId)===String(memberId));
  return {
    yellows: mine.filter(c => c.kind==='amarelo' && !c.consumed).length,
    yellowsTotal: mine.filter(c => c.kind==='amarelo').length,
    reds: mine.filter(c => c.kind==='vermelho').length,
    all: mine,
  };
};
// 0-2 normal · 3 atenção · 4 EM RISCO · >=5 SUSPENSO
const cardStatus = y => y>=5 ? {label:"SUSPENSO", color:"#B00020"}
                   : y===4 ? {label:"PRÓXIMO SUSPENDE", color:T.brand}
                   : y===3 ? {label:"Atenção", color:T.yellow}
                   : null;
const age = d => d ? Math.floor((new Date() - new Date(d)) / (365.25*24*3600*1000)) : null;

// ícone de uma multa/tipo: o emoji, ou (caso especial) a imagem local da app (icon-192.png, em cache do service worker); mesmo tamanho, cantos arredondados, sem deformar
const FineIcon = ({ icon, size = 24, style }) => icon === MULTEAM_ICON
  ? <img src="icon-192.png" alt="Multeam" draggable={false} width={Math.round(size*1.1)} height={Math.round(size*1.1)} style={{ width:Math.round(size*1.1), height:Math.round(size*1.1), borderRadius:Math.round(size*0.28), objectFit:"cover", verticalAlign:"middle", flexShrink:0, ...style }} />
  : <span style={{ fontSize:size, ...style }}>{icon}</span>;
// ── FOTO AMPLIADA (lightbox): um único componente partilhado por todos os avatares com foto ──
// LB.n: lightbox aberto; LB.guard: popstate provocado por nós (o botão "atrás" do modo leitura não deve reagir a eles)
const LB = { n:0, guard:0 };
const PhotoLightbox = ({ src, name, onClose }) => {
  const closeRef = React.useRef(onClose); closeRef.current = onClose;
  useEffect(() => {
    LB.n++;
    let byPop = false, pushed = false;
    try { window.history.pushState({ multeamLB:true }, "", window.location.href); pushed = true; } catch(e) {}
    const onPop = () => { byPop = true; closeRef.current(); };
    const onKey = e => { if (e.key === "Escape") closeRef.current(); };
    window.addEventListener("popstate", onPop);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("keydown", onKey);
      setTimeout(() => { LB.n = Math.max(0, LB.n - 1); }, 0);
      if (pushed && !byPop) { LB.guard++; try { window.history.back(); } catch(e) { LB.guard--; } } // consome a entrada de histórico
    };
  }, []);
  const stop = e => e.stopPropagation();
  const node = (
    <div role="dialog" aria-label={`Foto de ${name || "jogador"}`} data-photo-lightbox onClick={e => { e.stopPropagation(); closeRef.current(); }} onMouseDown={stop} onTouchStart={stop}
      style={{ position:"fixed", inset:0, zIndex:10000, background:"rgba(0,0,0,0.94)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"16px", boxSizing:"border-box" }}>
      <button aria-label="Fechar foto" onClick={e => { e.stopPropagation(); closeRef.current(); }} style={{ position:"absolute", top:12, right:12, width:48, height:48, borderRadius:24, border:"2px solid #fff", background:"#000", color:"#fff", fontSize:22, fontWeight:800, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"inherit" }}>✕</button>
      <img src={src} alt={name || ""} onClick={stop} style={{ maxWidth:"92vw", maxHeight:"72vh", objectFit:"contain", borderRadius:12, boxShadow:"0 8px 40px rgba(0,0,0,0.6)" }} />
      {name && <p style={{ margin:"16px 0 0", color:"#fff", fontSize:20, fontWeight:900, textAlign:"center", maxWidth:"92vw", overflowWrap:"anywhere" }}>{name}</p>}
    </div>
  );
  return (typeof ReactDOM !== "undefined" && ReactDOM.createPortal) ? ReactDOM.createPortal(node, document.body) : node;
};
// foto do jogador: tocar abre a foto ampliada (sem abrir/fechar o cartão onde está); sem foto, quem a usa mostra só iniciais
// onTapGesture (opcional): em vez de abrir logo, entrega a função "abrir" a quem decide quando (ex.: gesto dos 3 toques do super admin em Geral)
const ZoomPhoto = ({ src, name, style, onTapGesture }) => {
  const [open, setOpen] = useState(false);
  return (<>
    <img src={src} alt={name || ""} onClick={e => { e.stopPropagation(); if (onTapGesture) onTapGesture(() => setOpen(true)); else setOpen(true); }} style={{ ...style, cursor:"zoom-in" }} />
    {open && <PhotoLightbox src={src} name={name} onClose={() => setOpen(false)} />}
  </>);
};
// texto escuro sobre fundos claros (ex.: medalhas prata/ouro), branco nos restantes
const readableOn = c => { const m = /^#([0-9a-f]{6})$/i.exec(String(c || "")); if (!m) return "#fff"; const v = [0,2,4].map(i => { const x = parseInt(m[1].slice(i, i + 2), 16) / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }); const L = 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; return (1.05 / (L + 0.05)) >= 4.5 ? "#fff" : "#1a1a1f"; };
const Avatar = ({ initials, color = T.navy, size = 38, photo, name, onTapGesture }) => (
  photo
    ? <div style={{ width:size, height:size, borderRadius:size/2, overflow:"hidden", flexShrink:0 }}><ZoomPhoto src={photo} name={name} onTapGesture={onTapGesture} style={{ width:"100%", height:"100%", objectFit:"cover" }} /></div>
    : <div style={{ width:size, height:size, borderRadius:size/2, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:readableOn(color), fontWeight:800, fontSize:size*0.33, flexShrink:0, letterSpacing:-0.5 }}>{initials}</div>
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
  const cfg = {
    admin:     { label:"Admin",     color:"#1D3557" },
    treinador: { label:"Treinador", color:"#2E7D32" },
    diretor:   { label:"Diretor",   color:"#7B1FA2" },
    player:    { label:"Jogador",   color:"#6B6B72" },
  };
  const c = cfg[role]||cfg.player;
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:`${c.color}12`, border:`1px solid ${c.color}30`, borderRadius:6, padding:"3px 8px" }}>
      <span style={{ color:c.color, fontSize:11, fontWeight:700 }}>{c.label}</span>
    </div>
  );
};
const Chip = ({ active, color, onClick, children }) => (
  <button onClick={onClick} style={{ padding:"7px 14px", minHeight:44, borderRadius:20, border:"none", cursor:"pointer", background:active ? color : T.card, color:active ? "#fff" : T.sub, fontWeight:600, fontSize:13, fontFamily:"inherit" }}>{children}</button>
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
        <button aria-label="Fechar" onClick={onClose} style={{ background:T.bg, border:"none", borderRadius:10, width:44, height:44, fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
      </div>
      {children}
    </div>
  </div>
);
const FL = ({ children }) => <p style={{ margin:"0 0 6px", fontWeight:700, fontSize:12, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>{children}</p>;
const FI = ({ style, ...props }) => <input style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:`1.5px solid ${T.border}`, fontSize:15, background:T.inputBg, boxSizing:"border-box", outline:"none", fontFamily:"inherit", marginBottom:14, ...style }} {...props} />;
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

// Ícone do tipo de multa: automático pelo nome (aparece ao lado do nome e muda enquanto se escreve). "Mudar ícone" abre uma grelha por categoria;
// um ícone escolhido à mão fica fixo (custom). custom=null → automático.
const FINE_ICON_CATS = [
  ["Multas", ["🟥","🟨","⏰","❌","⚽","🥅","🏆","😞"]],
  ["Equipamento e balneário", ["👕","🧹","📵","🚐"]],
  ["Comportamento", ["🗣️","😴","🎯","✍️","😤","🤦","🚫","🔇","🤡"]],
  ["Dinheiro", ["💶","💸"]],
  ["Comida e festa", ["🎂","🍽️","🍺","🍕","🍾"]],
  ["Outros", ["⚪","🃏","🎪","🎖️","🤕","💪","🚗","💬"]],
];
const resolveTypeIcon = (name, custom) => custom || iconForFine(name, '');
const FineIconField = ({ name, custom, onCustom }) => {
  const [open, setOpen] = useState(false);
  return (
    <div data-fine-icon-field style={{ marginBottom:10 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
        <span data-fine-icon aria-label="Ícone" style={{ fontSize:32, lineHeight:1, minWidth:40, textAlign:"center", display:"inline-flex", alignItems:"center", justifyContent:"center" }}><FineIcon icon={resolveTypeIcon(name, custom)} size={32} /></span>
        <span style={{ fontSize:12, color:"#5F5F66", flex:1, minWidth:90 }}>{custom ? "Ícone escolhido por ti" : "Ícone automático"}</span>
        <button type="button" onClick={()=>setOpen(o=>!o)} style={{ minHeight:44, minWidth:44, padding:"0 14px", borderRadius:12, border:"1.5px solid #1a1a1f", background:"#fff", color:"#1a1a1f", fontSize:13, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Mudar ícone</button>
      </div>
      {open && (
        <div style={{ marginTop:8 }}>
          {custom && <button type="button" onClick={()=>{ onCustom(null); setOpen(false); }} style={{ minHeight:44, padding:"0 14px", marginBottom:8, borderRadius:12, border:"1.5px solid #1a1a1f", background:"#fff", color:"#1a1a1f", fontSize:13, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>↺ Voltar ao automático</button>}
          {FINE_ICON_CATS.map(([cat, list]) => (
            <div key={cat} style={{ marginBottom:6 }}>
              <p style={{ margin:"0 0 4px", fontSize:11, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>{cat}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {list.map(e => (
                  <button type="button" key={e} aria-label={`Ícone ${e}`} onClick={()=>{ onCustom(e); setOpen(false); }} style={{ fontSize:22, width:44, height:44, padding:0, borderRadius:10, border:`2px solid ${resolveTypeIcon(name, custom)===e?"#1a1a1f":"#D7D7DE"}`, background:"#fff", cursor:"pointer" }}>{e}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AddFineModal = ({ team, myUserId, token, onAdd, onClose }) => {
  const [tm, setTm]   = useState([]);
  const [tft, setTft] = useState([]);
  const [mid, setMid] = useState("");
  const [sft, setSft] = useState(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(true);
  const [profWarn, setProfWarn] = useState(false); // nomes/fotos dos membros não carregaram
  const [tick, setTick] = useState(0);
  const [err, setErr] = useState("");
  const [addingType, setAddingType] = useState(false);
  const [newName, setNewName] = useState(""); const [newAmount, setNewAmount] = useState(""); const [newCustom, setNewCustom] = useState(null);
  const [savingType, setSavingType] = useState(false);

  const [editingFt, setEditingFt] = useState(null);
  const [editName, setEditName] = useState(""); const [editAmount, setEditAmount] = useState(""); const [editCustom, setEditCustom] = useState(null);
  const [savingEdit, setSavingEdit] = useState(false);

  const startEdit = (ft, e) => { e.stopPropagation(); setEditingFt(ft); setEditName(ft.name); setEditAmount(String(ft.amount)); setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji); };

  const saveEdit = async () => {
    if (!editName.trim() || !editAmount) return;
    setSavingEdit(true);
    try {
      const em = resolveTypeIcon(editName.trim(), editCustom);
      needRows(await api.patch(`fine_types?id=eq.${editingFt.id}`, { name: editName.trim(), amount: Number(editAmount), emoji: storableIcon(em) }, token));
      setTft(p => p.map(x => x.id===editingFt.id ? {...x, name:editName.trim(), amount:Number(editAmount), emoji:em} : x));
      if (sft?.id===editingFt.id) setSft(f => ({...f, name:editName.trim(), amount:Number(editAmount), emoji:em}));
      setEditingFt(null);
    } catch(e) { setErr(errPt(e)); }
    setSavingEdit(false);
  };

  const deleteFt = async (ft, e) => {
    e.stopPropagation();
    if (!window.confirm(`Apagar "${ft.name}"?`)) return;
    try {
      await api.del(`fine_types?id=eq.${ft.id}`, token);
      const still = await api.get(`fine_types?id=eq.${ft.id}&select=id`, token);
      if (still.length) throw new Error("sem permissão (o registo continua a existir)");
      setTft(p => p.filter(x => x.id !== ft.id));
      if (sft?.id===ft.id) setSft(null);
    } catch(e) { setErr(errPt(e)); }
  };


  useEffect(() => {
    const H = { 'apikey': SB_KEY, 'Authorization': `Bearer ${token}` };
    if (tick > 0) setLoading(true);
    Promise.all([
      fetch(`${SB_URL}/rest/v1/team_members?team_id=eq.${team.id}&select=*`, { headers: H }).then(r => r.json()),
      fetch(`${SB_URL}/rest/v1/fine_types?team_id=eq.${team.id}&order=amount.asc`, { headers: H, cache: 'no-store' }).then(r => r.json()),
    ]).then(async ([mRaw, ftRaw]) => {
      const uids = (Array.isArray(mRaw) ? mRaw : []).map(m => m.user_id).filter(Boolean);
      let profMap = {};
      let profFailed = false; // a rpc falhou (a leitura direta abaixo é só reserva)
      if (uids.length) {
        try {
          const rpcRes = await fetch(`${SB_URL}/rest/v1/rpc/get_team_profiles`, {
            method:'POST', headers:{...H,'Content-Type':'application/json'},
            body: JSON.stringify({ p_team_id: team.id })
          }).then(r=>{ if (!r.ok) { profFailed = true; return []; } return r.json(); }).catch(()=>{ profFailed = true; return []; });
          (Array.isArray(rpcRes)?rpcRes:[]).forEach(p => { profMap[p.id] = p; });
        } catch(e) { profFailed = true; }
        if (profFailed && !Object.keys(profMap).length) {
          const pr = await fetch(`${SB_URL}/rest/v1/profiles?id=in.(${uids.join(',')})`, { headers: H }).then(r => r.json()).catch(() => null);
          (Array.isArray(pr) ? pr : []).forEach(p => { profMap[p.id] = p; });
        }
      }
      setProfWarn(profFailed && uids.length > 0);
      setTm(sortMembers((Array.isArray(mRaw) ? mRaw : []).map(m => ({
        id: String(m.id), teamId: m.team_id, userId: m.user_id, role: m.role,
        name: profMap[m.user_id]?.name || 'Utilizador',
        phone: profMap[m.user_id]?.phone || '',
        birthday: profMap[m.user_id]?.birthday || '',
        position: m.position || profMap[m.user_id]?.position || 'Jogador',
        avatarUrl: profMap[m.user_id]?.avatar_url || null,
        initials: (profMap[m.user_id]?.name||'U').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()
      }))));
      setTft((Array.isArray(ftRaw) ? ftRaw : []).map(ft => ({
        id: String(ft.id), name: ft.name, amount: Number(ft.amount), emoji: iconForFine(ft.name, ft.emoji)
      })));
      setLoading(false);
    }).catch(e => { setErr(errPt(e)); setLoading(false); });
  }, [tick]);

  const saveNewType = async () => {
    if (!newName.trim() || !newAmount) return;
    setSavingType(true);
    try {
      const data = needRows(await api.post('fine_types', { team_id: team.id, name: newName.trim(), amount: Number(newAmount), emoji: storableIcon(resolveTypeIcon(newName.trim(), newCustom)) }, token));
      const ft = Array.isArray(data) ? data[0] : data;
      if (ft?.id) {
        const newFt = { id: String(ft.id), name: ft.name, amount: Number(ft.amount), emoji: iconForFine(ft.name, ft.emoji) };
        setTft(p => [...p, newFt]);
        setSft(newFt);
      }
      setAddingType(false); setNewName(""); setNewAmount(""); setNewCustom(null);
    } catch(e) { setErr(errPt(e)); }
    setSavingType(false);
  };

  const canSubmit = mid && sft;

  const submit = async () => {
    if (!canSubmit) return;
    setErr("");
    try {
      await onAdd({ teamId: team.id, memberId: mid, amount: sft.amount, reason: reason || sft.name, emoji: storableIcon(sft.emoji), paid: false });
      onClose();
    } catch(e) { setErr(errPt(e)); }
  };

  return (
    <Sheet title="🟥 Nova multa" onClose={onClose}>
      {loading ? (
        <p style={{ textAlign:"center", color:T.sub, padding:"20px 0" }}>A carregar...</p>
      ) : (<>
        {profWarn && <LoadWarn id="perfis-multa" onRetry={()=>setTick(t=>t+1)}>{PROFILES_WARN}</LoadWarn>}
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
              <FineIconField name={editName} custom={editCustom} onCustom={setEditCustom} />
              <FI value={editName} onChange={e=>setEditName(e.target.value)} placeholder="Nome" />
              <FI type="number" value={editAmount} onChange={e=>setEditAmount(e.target.value)} placeholder="Valor €" />
              <div style={{ display:"flex", gap:8 }}>
                <PrimaryBtn onClick={saveEdit} disabled={!editName.trim()||!editAmount||savingEdit} color={T.brand}>{savingEdit?"A guardar...":"✓ Guardar"}</PrimaryBtn>
                <button onClick={()=>setEditingFt(null)} style={{ flex:1, padding:"13px", borderRadius:12, border:`1.5px solid ${T.border}`, background:"transparent", cursor:"pointer", fontFamily:"inherit", fontWeight:700 }}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div key={ft.id} role="button" tabIndex={0} aria-pressed={sft?.id===ft.id} onClick={() => setSft(ft)}
              onKeyDown={e => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setSft(ft); } }} style={{
              padding:"12px 10px", borderRadius:14, textAlign:"left", position:"relative", boxSizing:"border-box",
              border:`2px solid ${sft?.id===ft.id?T.brand:T.border}`,
              background:sft?.id===ft.id?`${T.brand}12`:T.inputBg,
              cursor:"pointer", fontFamily:"inherit",
              boxShadow: sft?.id===ft.id?`0 2px 10px ${T.brand}30`:"none",
            }}>
              <div style={{ fontSize:26, marginBottom:4 }}><FineIcon icon={ft.emoji} size={26} /></div>
              <p style={{ margin:0, fontWeight:700, fontSize:12, color:sft?.id===ft.id?T.brand:T.text, overflowWrap:"anywhere" }}>{ft.name}</p>
              <p style={{ margin:"2px 0 0", fontWeight:900, fontSize:16, color:sft?.id===ft.id?T.brand:T.navy }}>{ft.amount}€</p>
              {/* Editar / Apagar: alvos de 44 px, separados para não tocar no apagar sem querer */}
              <div style={{ display:"flex", gap:16, marginTop:8 }}>
                <button aria-label={`Editar ${ft.name}`} onClick={(e)=>startEdit(ft,e)} style={{ background:"rgba(0,0,0,0.08)", border:`1.5px solid ${T.border}`, borderRadius:10, width:44, height:44, padding:0, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxSizing:"border-box" }}>✏️</button>
                <button aria-label={`Apagar ${ft.name}`} onClick={(e)=>deleteFt(ft,e)} style={{ background:"#FDECEC", border:"1.5px solid #B42318", borderRadius:10, width:44, height:44, padding:0, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxSizing:"border-box" }}><span style={{ filter:"grayscale(1) brightness(0.35)" }}>🗑️</span></button>
              </div>
            </div>
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
            <FineIconField name={newName} custom={newCustom} onCustom={setNewCustom} />
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
            <FineIcon icon={sft.emoji} size={24} />
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:14 }}>{sft.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>Valor: <strong style={{ color:T.brand }}>{sft.amount}€</strong></p>
            </div>
            <button aria-label="Limpar tipo escolhido" onClick={()=>setSft(null)} style={{ minWidth:44, minHeight:44, background:"none", border:"none", fontSize:18, cursor:"pointer", color:T.sub }}>✕</button>
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
  const [emoji, setEmoji] = useState(storableIcon(fine.emoji || "🟥"));
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
    const now = new Date();
    const results = [];
    for (let i = 1; i <= 42 && results.length < 6; i++) {
      // dia civil local (ano, mês, dia): converter para ISO/UTC dá a data errada perto da meia-noite
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      if ((training.days||[]).includes(d.getDay())) results.push(localDateStr(d));
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

// Nova despesa; com `expense` (e onSave) edita a despesa: só fecha depois de a escrita ser confirmada
const AddExpenseModal = ({ team, onAdd, onClose, expense, onSave }) => {
  const editing = !!expense;
  const [desc, setDesc] = useState(editing ? expense.description : ""); const [amount, setAmount] = useState(editing ? String(Math.abs(expense.amount)) : "");
  const [busy, setBusy] = useState(false);
  const lock = React.useRef(false);
  const val = Number(amount);
  const valid = amount !== "" && Number.isFinite(val) && val > 0;
  const ok = desc.trim() !== "" && valid;
  const submit = async () => {
    if (!ok || lock.current) return;
    if (!editing) { onAdd({ teamId:team.id, description:desc.trim(), amount:Math.abs(val), date:todayLocal() }); onClose(); return; }
    lock.current = true; setBusy(true);
    let done = false;
    try { done = await onSave(expense.id, { description:desc.trim(), amount:val }); }
    finally { lock.current = false; setBusy(false); }
    if (done) onClose();
  };
  return (
    <Sheet title={editing ? "✏️ Editar despesa" : "💸 Nova despesa"} onClose={busy ? ()=>{} : onClose}>
      <FL>Descrição</FL><FI type="text" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Ex: Jantar de equipa..." />
      <FL>Valor (€)</FL><FI type="number" min="0" step="0.01" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0.00" />
      {amount !== "" && !valid && <p style={{ color:T.brand, fontSize:13, fontWeight:700, margin:"-6px 0 10px" }}>O valor tem de ser maior que zero.</p>}
      <PrimaryBtn onClick={submit} disabled={!ok || busy} color={T.navy}>{busy ? "A guardar…" : editing ? "Guardar" : "Registar despesa"}</PrimaryBtn>
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
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"treino", recurring:false, date, time, location:loc, notes }); onClose(); } catch(e){ setErr(errPt(e)); } }} disabled={!ok} color={team.color}>Agendar treino</PrimaryBtn>
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
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"recorrente", recurring:true, days:days.sort(), time, location:loc, notes }); onClose(); } catch(e){ setErr(errPt(e)); } }} disabled={!ok} color={team.color}>
        Criar treino recorrente
      </PrimaryBtn>
    </Sheet>
  );
};

// ── CRIAR JOGO ────────────────────────────────────────────────
const AddMatchModal = ({ team, members, onAdd, onClose }) => {
  const tm = sortMembers(members.filter(m=>m.teamId===team.id), true);
  const [opponent, setOpponent] = useState(""); const [date, setDate] = useState(""); const [time, setTime] = useState("15:00");
  const [loc, setLoc] = useState(""); const [homeAway, setHomeAway] = useState("casa"); const [notes, setNotes] = useState("");
  const [squad, setSquad] = useState(tm.filter(m=>!m.unavailable).map(m=>m.id)); // todos selecionados por omissão, menos os indisponíveis (podem ser escolhidos à mão)
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
            cursor:"pointer", fontFamily:"inherit", opacity:m.unavailable?0.55:1,
          }}>
            <div style={{ width:28, height:28, borderRadius:14, background:squad.includes(m.id)?team.color:T.border, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:800 }}>{m.initials}</div>
            <span style={{ fontSize:13, fontWeight:600 }}>{m.name.split(" ")[0]}{m.unavailable && ` ${m.unavailableEmoji||"🤕"}`}</span>
          </button>
        ))}
      </div>
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10 }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onAdd({ teamId:team.id, type:"jogo", recurring:false, date, time, location:loc||"A definir", notes, opponent, homeAway, squad }); } catch(e){ setErr(errPt(e)); } }} disabled={!ok} color={T.brand}>
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
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { date, time, location:loc, notes }); onClose(); } catch(e){ setErr(errPt(e)); }}} disabled={!ok} color={team.color}>
        💾 Guardar alterações
      </PrimaryBtn>
    </Sheet>
  );
};

// ── EDITAR JOGO ────────────────────────────────────────────────
const EditMatchModal = ({ team, members, training, onEdit, onClose }) => {
  const tm = sortMembers(members.filter(m=>m.teamId===team.id), true);
  const [opponent, setOpponent] = useState(training.opponent||"");
  const [date, setDate] = useState(training.date);
  const [time, setTime] = useState(training.time||"15:00");
  const [loc, setLoc] = useState(training.location);
  const [homeAway, setHomeAway] = useState(training.homeAway||"casa");
  const [notes, setNotes] = useState(training.notes);
  const [squad, setSquad] = useState(training.squad||tm.filter(m=>!m.unavailable).map(m=>m.id));
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
          <button key={m.id} onClick={()=>toggleSquad(m.id)} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:10, border:`2px solid ${squad.includes(m.id)?team.color:T.border}`, background:squad.includes(m.id)?`${team.color}15`:T.inputBg, cursor:"pointer", fontFamily:"inherit", opacity:m.unavailable?0.55:1 }}>
            <div style={{ width:28, height:28, borderRadius:14, background:squad.includes(m.id)?team.color:T.border, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:800 }}>{m.initials}</div>
            <span style={{ fontSize:13, fontWeight:600 }}>{m.name.split(" ")[0]}{m.unavailable && ` ${m.unavailableEmoji||"🤕"}`}</span>
          </button>
        ))}
      </div>
      {err && <p style={{ color:"#c0392b", fontSize:13, marginBottom:10, background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { date, time, location:loc||"A definir", notes, opponent, homeAway, squad }); onClose(); } catch(e){ setErr(errPt(e)); }}} disabled={!ok} color={T.brand}>
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
      <PrimaryBtn onClick={async () => { if(!ok) return; setErr(""); try { await onEdit(training.id, { recurring:true, days:days.sort(), time, location:loc, notes }); onClose(); } catch(e){ setErr(errPt(e)); }}} disabled={!ok} color={team.color}>
        💾 Guardar alterações
      </PrimaryBtn>
    </Sheet>
  );
};

const POSITIONS = ["Guarda-redes","Defesa Central","Lateral Direito","Lateral Esquerdo","Defesa Líbero","Médio Defensivo","Médio Centro","Médio Box-to-Box","Médio Ofensivo","Meia Atacante","Extremo Direito","Extremo Esquerdo","Segundo Avançado","Ponta de Lança","Avançado Centro","Fixo","Ala","Pivot","Universal","Treinador","Treinador Desportivo","Treinador Adjunto","Treinador de Guarda-redes","Preparador Físico","Diretor Desportivo","Presidente","Massagista / Fisioterapeuta","Delegado","Team Manager","Médico","Outro"];

const POSITIONS_GROUPED = {
  "🥅 Guarda-redes":       ["Guarda-redes"],
  "🛡 Defesa":              ["Defesa Central","Lateral Direito","Lateral Esquerdo","Defesa Líbero"],
  "⚙️ Médio":               ["Médio Defensivo","Médio Centro","Médio Box-to-Box","Médio Ofensivo","Meia Atacante"],
  "⚡ Atacante":            ["Extremo Direito","Extremo Esquerdo","Segundo Avançado","Ponta de Lança","Avançado Centro"],
  "🏟 Futsal / Praia":      ["Fixo","Ala","Pivot","Universal"],
  "🎽 Equipa Técnica":      ["Treinador","Treinador Desportivo","Treinador Adjunto","Treinador de Guarda-redes","Preparador Físico","Massagista / Fisioterapeuta","Médico"],
  "🏛 Direção / Gestão":    ["Diretor Desportivo","Presidente","Delegado","Team Manager"],
  "· Outro":                ["Outro"],
};

// Ordem dos membros: equipa técnica (ordem do select) e depois posições de campo; posição vazia, "Jogador", "Outro" ou desconhecida no fim.
// Construída a partir de POSITIONS_GROUPED (sem repetir listas); só apresentação.
const normTxt = s => String(s == null ? "" : s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const STAFF_POSITIONS = [...POSITIONS_GROUPED["🎽 Equipa Técnica"], ...POSITIONS_GROUPED["🏛 Direção / Gestão"]];
const DEFENSE_FIRST = ["Lateral Direito", "Defesa Central", "Lateral Esquerdo"];
const FIELD_POSITIONS = [...POSITIONS_GROUPED["🥅 Guarda-redes"], ...DEFENSE_FIRST, ...POSITIONS_GROUPED["🛡 Defesa"].filter(p => !DEFENSE_FIRST.includes(p)),
  ...POSITIONS_GROUPED["⚙️ Médio"], ...POSITIONS_GROUPED["⚡ Atacante"], ...POSITIONS_GROUPED["🏟 Futsal / Praia"]];
const POSITION_ORDER = new Map([...STAFF_POSITIONS, ...FIELD_POSITIONS].map((p, i) => [normTxt(p), i]));
const isStaffPosition = pos => { const i = POSITION_ORDER.get(normTxt(pos)); return i !== undefined && i < STAFF_POSITIONS.length; };
const positionRank = pos => { const i = POSITION_ORDER.get(normTxt(pos)); return i === undefined ? POSITION_ORDER.size : i; };
// por posição e, dentro da mesma, por nome (sem distinguir maiúsculas nem acentos); estável em nomes iguais
// staffLast: a equipa técnica fica depois dos jogadores (convocatória e presenças)
const sortMembers = (list, staffLast = false) => list.map((m, i) => ({ m, i, r: positionRank(m.position) + (staffLast && isStaffPosition(m.position) ? 1000 : 0) }))
  .sort((a, b) => a.r - b.r || normTxt(a.m.name).localeCompare(normTxt(b.m.name), "pt") || a.i - b.i)
  .map(x => x.m);

// placeholder: opção inicial vazia e desativada ("Escolhe a posição…"); um valor antigo fora da lista continua a aparecer
const PositionSelect = ({ value, onChange, placeholder }) => {
  const known = Object.values(POSITIONS_GROUPED).some(opts => opts.includes(value));
  return (
    <FSel value={value} onChange={onChange}>
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {value && !known && <option value={value}>{value}</option>}
      {Object.entries(POSITIONS_GROUPED).map(([group, opts]) => (
        <optgroup key={group} label={group}>
          {opts.map(p => <option key={p} value={p}>{p}</option>)}
        </optgroup>
      ))}
    </FSel>
  );
};

const AddMemberModal = ({ team, onAdd, onClose }) => {
  const [name, setName] = useState(""); const [pos, setPos] = useState(""); const [phone, setPhone] = useState(""); const [bday, setBday] = useState(""); const [role, setRole] = useState("player");
  const [busy, setBusy] = useState(false);
  const lock = React.useRef(false);
  const ok = name.trim().length > 1 && !!pos; // a posição tem de ser escolhida (quem não tem posição escolhe "Outro")
  const initials = name.trim().split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <Sheet title="➕ Adicionar membro" onClose={onClose}>
      <FL>Nome</FL><FI value={name} onChange={e=>setName(e.target.value)} placeholder="Nome completo" />
      <FL>Posição</FL>
      <PositionSelect value={pos} onChange={e=>setPos(e.target.value)} placeholder="Escolhe a posição…" />
      <FL>Telefone</FL><FI type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+351 / +41..." />
      <FL>Aniversário</FL><FI type="date" value={bday} onChange={e=>setBday(e.target.value)} />
      <FL>Função na equipa</FL>
      <div style={{ display:"flex", gap:8, marginBottom:16 }}>
        {[["player","👤 Jogador"],["admin","👑 Administrador"]].map(([v,l]) => (
          <button key={v} onClick={() => setRole(v)} style={{ flex:1, padding:"12px", borderRadius:12, border:`2px solid ${role===v?(v==="admin"?T.yellow:team.color):T.border}`, background:role===v?(v==="admin"?`${T.yellow}18`:`${team.color}15`):T.inputBg, cursor:"pointer", fontWeight:700, fontSize:14, fontFamily:"inherit" }}>{l}</button>
        ))}
      </div>
      <PrimaryBtn onClick={async () => {
        if (!ok || lock.current) return;
        lock.current = true; setBusy(true);
        let done = false;
        try { done = await onAdd({ teamId:team.id, userId:Date.now(), name:name.trim(), initials:initials||name[0].toUpperCase(), position:pos, phone, birthday:bday, role }); }
        finally { lock.current = false; setBusy(false); }
        if (done) onClose(); // só fecha com a escrita confirmada; se falhar, fica aberto com o que escreveste
      }} disabled={!ok || busy} color={team.color}>
        {busy ? "A adicionar…" : `Adicionar ${role==="admin"?"administrador":"jogador"}`}
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
// ── ASSUMIR PERFIL: um jogador pede para ficar ligado a um perfil criado pelo admin (rpc do Supabase; o admin aprova ou rejeita) ──
const CLAIM_STATUS = {
  pendente:  { label:"À espera do admin", color:"#8A5A00" },
  aprovado:  { label:"Aprovado",          color:"#147832" },
  rejeitado: { label:"Rejeitado",         color:"#B42318" },
  cancelado: { label:"Cancelado",         color:"#5F5F66" },
};
const claimStatus = c => CLAIM_STATUS[c && c.status] || { label:String((c && c.status) || ""), color:T.sub };
// Depois de aprovado, o membro passa a ter o nome da conta de quem pediu. Por isso o nome/foto do perfil pedido guardam-se neste dispositivo
// enquanto o pedido está pendente (por id do pedido). Só apresentação: nada é gravado na base.
const CLAIM_NAMES_KEY = "multeam-claim-names";
let claimNamesMem = {};
const claimNamesGet = () => { try { const j = JSON.parse(window.localStorage.getItem(CLAIM_NAMES_KEY) || "{}"); return { ...claimNamesMem, ...(j && typeof j === "object" ? j : {}) }; } catch(e) { return { ...claimNamesMem }; } };
const claimNamesRemember = (list, nameKey, avatarKey) => {
  try {
    const cur = claimNamesGet(); let changed = false;
    (Array.isArray(list) ? list : []).forEach(c => { if (c && c.id && c.status === "pendente" && c[nameKey] && !(cur[c.id] && cur[c.id].name === c[nameKey])) { cur[c.id] = { name:c[nameKey], avatar:c[avatarKey] || null }; changed = true; } });
    if (!changed) return;
    const ids = Object.keys(cur); if (ids.length > 200) ids.slice(0, ids.length - 200).forEach(k => delete cur[k]);
    claimNamesMem = cur;
    try { window.localStorage.setItem(CLAIM_NAMES_KEY, JSON.stringify(cur)); } catch(e) {}
  } catch(e) {}
};
// texto do histórico: "quem pede → perfil" só quando o nome do perfil é fiável
const claimHistoryWho = (c, stored) => {
  const who = c.requester_name || "Sem nome";
  const st = stored && stored.name;
  if (st) return st === who ? `${who} assumiu um perfil` : `${who} → ${st}`;
  if (c.status === "aprovado") return `${who} assumiu um perfil`;
  const mem = c.member_name || "Sem nome";
  return mem === who ? `${who} (perfil com o mesmo nome)` : `${who} → ${mem}`;
};
const claimDay = d => { const x = d ? new Date(d) : null; return x && !isNaN(x) ? x.toLocaleDateString("pt-PT") : ""; };
const CountBadge = ({ n, style }) => (
  <span style={{ position:"absolute", top:-4, right:-9, minWidth:15, height:15, borderRadius:8, background:"#B00020", color:"#fff", fontSize:10, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 3px", boxSizing:"border-box", ...style }}>{n}</span>
);
const ClaimWho = ({ name, avatar, size = 40, children }) => (
  <div style={{ display:"flex", alignItems:"center", gap:10, minWidth:0 }}>
    <Avatar initials={mk(name || "")} photo={avatar} name={name} size={size} />
    <div style={{ minWidth:0, flex:1 }}>
      <p style={{ margin:0, fontWeight:800, fontSize:15, color:"#1a1a1f", overflowWrap:"anywhere" }}>{name || "Sem nome"}</p>
      {children}
    </div>
  </div>
);
const claimBtn = (bg, fg, border) => ({ minHeight:44, padding:"0 16px", borderRadius:12, border:`2px solid ${border || bg}`, background:bg, color:fg, fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" });

// jogador: "O meu pedido" (estado, editar a mensagem, cancelar)
const MyClaimsCard = ({ claims, onEditNote, onCancel, onAnswer }) => {
  const [editing, setEditing] = useState(null); const [note, setNote] = useState("");
  const [ans, setAns] = useState({}); const [ansEditing, setAnsEditing] = useState(null);
  const [busy, setBusy] = useState(null); const [err, setErr] = useState("");
  const flight = React.useRef(false); // duplo toque: um só pedido de cada vez
  const list = (claims || []).filter(c => c.status === "pendente" || (c.decided_at && Date.now() - new Date(c.decided_at).getTime() < 14*86400000)).slice(0, 3);
  useEffect(() => { claimNamesRemember(claims, "member_name", "avatar_url"); }, [claims]);
  if (!list.length) return null;
  const run = async (id, fn) => { if (flight.current) return; flight.current = true; setBusy(id); setErr(""); try { await fn(); setEditing(null); } catch(e) { setErr(errPt(e)); } setBusy(null); flight.current = false; };
  return (
    <div data-claims="mine" style={{ marginBottom:14 }}>
      <Sec label="O meu pedido" />
      {list.map(c => { const st = claimStatus(c); return (
        <div key={c.id} data-claim={c.status} style={{ background:T.card, border:`2px solid ${st.color}`, borderRadius:14, padding:"12px 14px", marginBottom:8 }}>
          <p style={{ margin:"0 0 8px", fontSize:13, fontWeight:700, color:"#5F5F66" }}>{c.team_name}</p>
          {c.status !== "aprovado" && (
            <ClaimWho name={c.member_name} avatar={c.avatar_url}>
              <p style={{ margin:"2px 0 0", fontSize:12, color:"#5F5F66" }}>Perfil pedido · {claimDay(c.created_at)}</p>
            </ClaimWho>
          )}
          <p style={{ margin:c.status === "aprovado" ? "0" : "10px 0 0", fontSize:15, fontWeight:900, color:st.color }}>{c.status === "rejeitado" && c.decision_note ? `Rejeitado: ${c.decision_note}` : (c.status === "aprovado" ? "Aprovado. Já és este perfil na equipa" : st.label)}</p>
          {c.note && <p style={{ margin:"6px 0 0", fontSize:13, color:"#1a1a1f", overflowWrap:"anywhere" }}>A tua mensagem: {c.note}</p>}
          {c.status === "pendente" && c.question && onAnswer && (
            <div data-claim-question style={{ marginTop:10, padding:"10px 12px", borderRadius:12, background:"#FFF8E1", border:"2px solid #8A5A00" }}>
              <p style={{ margin:0, fontSize:12, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>O admin pergunta:</p>
              <p style={{ margin:"2px 0 8px", fontSize:15, fontWeight:800, color:"#1a1a1f", overflowWrap:"anywhere" }}>{c.question}</p>
              {(!c.answer || ansEditing === c.id) ? (<>
                <textarea aria-label="A tua resposta" value={ans[c.id] ?? (ansEditing === c.id ? (c.answer || "") : "")} maxLength={200} onChange={e=>setAns(a0 => ({ ...a0, [c.id]:e.target.value }))} rows={2} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
                <p style={{ margin:"2px 0 8px", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{(ans[c.id] ?? (ansEditing === c.id ? (c.answer || "") : "")).length}/200</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <button disabled={busy===c.id || !String(ans[c.id] ?? (ansEditing === c.id ? (c.answer || "") : "")).trim()} onClick={()=>run(c.id, async ()=>{ await onAnswer(c.id, String(ans[c.id] ?? (c.answer || "")).trim()); setAns(a0 => { const n0 = { ...a0 }; delete n0[c.id]; return n0; }); setAnsEditing(null); })} style={claimBtn("#1a1a1f","#fff")}>{busy===c.id ? "A enviar..." : (c.answer ? "Guardar resposta" : "Enviar resposta")}</button>
                  {c.answer && <button onClick={()=>{ setAnsEditing(null); setAns(a0 => { const n0 = { ...a0 }; delete n0[c.id]; return n0; }); }} style={claimBtn("#fff","#1a1a1f","#1a1a1f")}>Voltar</button>}
                </div>
              </>) : (<>
                <p style={{ margin:0, fontSize:12, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>A tua resposta</p>
                <p data-claim-answer style={{ margin:"2px 0 8px", fontSize:15, fontWeight:700, color:"#1a1a1f", overflowWrap:"anywhere" }}>{c.answer}</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <button onClick={()=>{ setAnsEditing(c.id); setAns(a0 => ({ ...a0, [c.id]:c.answer || "" })); setErr(""); }} style={claimBtn("#fff","#1a1a1f","#1a1a1f")}>Editar resposta</button>
                  <button disabled={busy===c.id} onClick={()=>{ if (window.confirm("Apagar a tua resposta?")) run(c.id, ()=>onAnswer(c.id, "")); }} style={claimBtn("#fff","#B42318","#B42318")}>Apagar resposta</button>
                </div>
              </>)}
            </div>
          )}
          {c.status === "pendente" && (
            editing === c.id ? (
              <div style={{ marginTop:10 }}>
                <textarea aria-label="Mensagem ao admin" value={note} maxLength={200} onChange={e=>setNote(e.target.value)} rows={3} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
                <p style={{ margin:"2px 0 8px", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{note.length}/200</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <button disabled={busy===c.id} onClick={()=>run(c.id, ()=>onEditNote(c.id, note.trim()))} style={claimBtn("#1a1a1f","#fff")}>{busy===c.id ? "A guardar..." : "Guardar mensagem"}</button>
                  <button onClick={()=>setEditing(null)} style={claimBtn("#fff","#1a1a1f","#1a1a1f")}>Voltar</button>
                </div>
              </div>
            ) : (
              <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:10 }}>
                <button onClick={()=>{ setEditing(c.id); setNote(c.note || ""); setErr(""); }} style={claimBtn("#fff","#1a1a1f","#1a1a1f")}>Editar mensagem</button>
                <button disabled={busy===c.id} onClick={()=>{ if (window.confirm("Cancelar o pedido?")) run(c.id, ()=>onCancel(c.id)); }} style={claimBtn("#fff","#B42318","#B42318")}>Cancelar pedido</button>
              </div>
            )
          )}
        </div>
      ); })}
      {err && <p role="alert" style={{ margin:"4px 0 0", fontSize:13, fontWeight:700, color:"#B42318" }}>{err}</p>}
    </div>
  );
};

// admin: "Pedidos de perfil (N)": aprovar, rejeitar e histórico. readOnly (modo leitura do super admin): só mostra
const ClaimsAdminSection = ({ team, members, token, readOnly, onChanged }) => {
  const [st, setSt] = useState({ status:"loading", list:[], error:"" });
  const [panel, setPanel] = useState(null); // { id, kind:"aprovar"|"rejeitar"|"perguntar" }
  const [note, setNote] = useState(""); const [busy, setBusy] = useState(false); const [err, setErr] = useState("");
  const [rowErr, setRowErr] = useState(null); // erro de uma ação fora do painel (ex.: retirar pergunta)
  const loadSeq = React.useRef(0);
  const load = async () => {
    const my = ++loadSeq.current; // trocar de equipa a meio: a resposta antiga é ignorada
    setSt(s0 => ({ ...s0, status:"loading", error:"" }));
    try { const r = await rpcCall("list_team_claims", { p_team_id:team.id }, token); if (my !== loadSeq.current) return; claimNamesRemember(r, "member_name", "member_avatar"); setSt({ status:"ok", list:Array.isArray(r) ? r : [], error:"" }); }
    catch(e) { if (my !== loadSeq.current) return; setSt({ status:"error", list:[], error:errPt(e) }); }
  };
  useEffect(() => { load(); }, [team.id]);
  const roleOf = c => ((members || []).find(m => m.id === c.member_id) || {}).role;
  const flight = React.useRef(false); // duplo toque: um só pedido de cada vez
  const decide = async c => {
    if (flight.current) return;
    flight.current = true;
    setBusy(true); setErr("");
    try {
      if (panel.kind === "aprovar") await rpcCall("approve_claim", { p_claim_id:c.id }, token);
      else if (panel.kind === "perguntar") await rpcCall("ask_claim_question", { p_claim_id:c.id, p_question:note.trim() }, token);
      else await rpcCall("reject_claim", { p_claim_id:c.id, p_note:note.trim() || null }, token);
      setPanel(null); setNote("");
      await load();
      if (onChanged) await onChanged();
    } catch(e) { setErr(errPt(e)); }
    setBusy(false); flight.current = false;
  };
  const withdraw = async c => {
    if (flight.current) return;
    if (!window.confirm("Retirar a pergunta (e a resposta, se houver)?")) return;
    flight.current = true;
    setBusy(true); setRowErr(null);
    try { await rpcCall("withdraw_claim_question", { p_claim_id:c.id }, token); await load(); if (onChanged) await onChanged(); }
    catch(e) { setRowErr({ id:c.id, msg:errPt(e) }); }
    setBusy(false); flight.current = false;
  };
  const pend = st.list.filter(c => c.status === "pendente");
  const done = st.list.filter(c => c.status !== "pendente").slice(0, 5);
  const QUESTION_EXAMPLES = ["Qual é o teu número de camisola?", "Onde jogaste na época passada?"];
  return (
    <div data-claims="admin" style={{ marginBottom:16 }}>
      <Sec label={`Pedidos de perfil (${pend.length})`} />
      {st.status === "loading" && <p role="status" style={{ margin:"0 0 8px", fontSize:13, fontWeight:700, color:"#5F5F66" }}>A carregar pedidos...</p>}
      {st.status === "error" && (
        <div role="alert" style={{ background:T.card, border:"2px solid #B42318", borderRadius:14, padding:"12px 14px", marginBottom:8 }}>
          <p style={{ margin:"0 0 8px", fontSize:14, fontWeight:700, color:"#1a1a1f" }}>Não foi possível carregar os pedidos: {st.error}</p>
          {readOnly && <p style={{ margin:"0 0 8px", fontSize:12, color:"#5F5F66" }}>Os pedidos só são visíveis ao admin desta equipa.</p>}
          <button onClick={load} style={claimBtn("#1a1a1f","#fff")}>Tentar novamente</button>
        </div>
      )}
      {st.status === "ok" && pend.length === 0 && <p style={{ margin:"0 0 8px", fontSize:13, color:"#5F5F66" }}>Sem pedidos pendentes.</p>}
      {pend.map(c => { const role = roleOf(c); const isAdm = role === "admin";
        const canAsk = "question" in c; // as rpc novas devolvem a chave (mesmo a null); sem ela, nada muda
        const hasQ = !!c.question, answered = hasQ && !!c.answer, openQ = hasQ && !c.answer;
        const qCount = Number(c.question_count) || 0; return (
        <div key={c.id} data-claim="pendente" style={{ background:T.card, border:`2px solid ${isAdm ? "#B42318" : "#1a1a1f"}`, borderRadius:14, padding:"12px 14px", marginBottom:8 }}>
          <ClaimWho name={c.requester_name} avatar={c.requester_avatar}>
            <p style={{ margin:"2px 0 0", fontSize:12, color:"#5F5F66" }}>pede · {claimDay(c.created_at)}</p>
          </ClaimWho>
          <p style={{ margin:"10px 0 6px", fontSize:12, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>Quer ser este perfil</p>
          <ClaimWho name={c.member_name} avatar={c.member_avatar}>
            <span data-role={isAdm ? "admin" : "player"} style={{ display:"inline-block", marginTop:3, padding:"2px 8px", borderRadius:6, fontSize:12, fontWeight:900, background:isAdm ? "#B42318" : "#E8E8EE", color:isAdm ? "#fff" : "#1a1a1f" }}>{isAdm ? "ADMIN" : "Jogador"}</span>
          </ClaimWho>
          {c.note && <p style={{ margin:"10px 0 0", fontSize:13, color:"#1a1a1f", overflowWrap:"anywhere" }}>Mensagem: {c.note}</p>}
          {canAsk && hasQ && (
            <div data-claim-question style={{ marginTop:10, padding:"10px 12px", borderRadius:12, background:"#FFF8E1", border:"2px solid #8A5A00" }}>
              <p style={{ margin:0, fontSize:12, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>A tua pergunta · {qCount}/3</p>
              <p style={{ margin:"2px 0 0", fontSize:14, fontWeight:700, color:"#1a1a1f", overflowWrap:"anywhere" }}>{c.question}</p>
              {openQ && <p data-claim-waiting style={{ margin:"6px 0 0", fontSize:14, fontWeight:900, color:"#8A5A00" }}>À espera da resposta</p>}
              {answered && (<>
                <p style={{ margin:"8px 0 0", fontSize:12, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>Resposta do jogador</p>
                <p data-claim-answer style={{ margin:"2px 0 0", fontSize:16, fontWeight:900, color:"#1a1a1f", overflowWrap:"anywhere" }}>{c.answer}</p>
                <p data-claim-answer-warning style={{ margin:"6px 0 0", fontSize:13, fontWeight:800, color:"#B42318" }}>A resposta não prova identidade. Confirma também por fora da app.</p>
              </>)}
              {!readOnly && <button disabled={busy} onClick={()=>withdraw(c)} style={{ ...claimBtn("#fff","#B42318","#B42318"), marginTop:8 }}>Retirar pergunta</button>}
            </div>
          )}
          {rowErr && rowErr.id === c.id && <p role="alert" style={{ margin:"8px 0 0", fontSize:13, fontWeight:700, color:"#B42318" }}>{rowErr.msg}</p>}
          {!readOnly && panel?.id !== c.id && (
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:10 }}>
              <button onClick={()=>{ setPanel({ id:c.id, kind:"aprovar" }); setErr(""); }} style={claimBtn("#147832","#fff")}>Aprovar</button>
              <button onClick={()=>{ setPanel({ id:c.id, kind:"rejeitar" }); setNote(""); setErr(""); }} style={claimBtn("#fff","#B42318","#B42318")}>Rejeitar</button>
              {canAsk && !openQ && (
                <button disabled={qCount >= 3} onClick={()=>{ setPanel({ id:c.id, kind:"perguntar" }); setNote(""); setErr(""); }} style={{ ...claimBtn("#fff","#1a1a1f","#1a1a1f"), opacity:qCount >= 3 ? 0.5 : 1 }}>Pedir confirmação</button>
              )}
              {canAsk && !openQ && qCount >= 3 && <p style={{ flexBasis:"100%", margin:0, fontSize:12, color:"#5F5F66" }}>Já fizeste 3 perguntas neste pedido.</p>}
            </div>
          )}
          {!readOnly && panel?.id === c.id && (
            <div data-claim-panel={panel.kind} style={{ marginTop:10, padding:"10px 12px", borderRadius:12, background:"#F4F4F8", border:"1.5px solid #1a1a1f" }}>
              {panel.kind === "aprovar" ? (<>
                <p style={{ margin:"0 0 6px", fontSize:14, fontWeight:700, color:"#1a1a1f" }}>A conta de {c.requester_name || "esta pessoa"} passa a ser o perfil {c.member_name || "escolhido"}. As multas e presenças mantêm-se.</p>
                <p data-claim-link-warning style={{ margin:"0 0 8px", fontSize:14, fontWeight:900, color:"#B42318" }}>Isto liga a conta ao perfil de forma real. O perfil passa a mostrar o nome e a foto desta conta. Só aprova se tiveres confirmado com a pessoa.</p>
                {isAdm && <p data-claim-warning style={{ margin:"0 0 8px", fontSize:14, fontWeight:900, color:"#B42318" }}>Este perfil é ADMIN. Quem for aprovado fica admin.</p>}
              </>) : panel.kind === "perguntar" ? (<>
                <p style={{ margin:"0 0 6px", fontSize:14, fontWeight:700, color:"#1a1a1f" }}>Escreve uma pergunta concreta ao jogador:</p>
                <textarea aria-label="Pergunta ao jogador" value={note} maxLength={200} onChange={e=>setNote(e.target.value)} rows={2} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
                <p style={{ margin:"2px 0 8px", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{note.length}/200</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:8 }}>
                  {QUESTION_EXAMPLES.map(q => <button key={q} type="button" data-claim-example onClick={()=>setNote(q)} style={{ ...claimBtn("#fff","#1a1a1f","#1a1a1f"), fontSize:13, padding:"0 12px", textAlign:"left" }}>{q}</button>)}
                </div>
                <p style={{ margin:"0 0 8px", fontSize:12, color:"#5F5F66" }}>Pergunta {qCount + 1}/3. A aprovação continua a ser tua: a resposta é só uma ajuda.</p>
              </>) : (<>
                <p style={{ margin:"0 0 6px", fontSize:14, fontWeight:700, color:"#1a1a1f" }}>Motivo (opcional):</p>
                <textarea aria-label="Motivo da rejeição" value={note} maxLength={200} onChange={e=>setNote(e.target.value)} rows={2} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
                <p style={{ margin:"2px 0 8px", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{note.length}/200</p>
              </>)}
              {err && <p role="alert" style={{ margin:"0 0 8px", fontSize:13, fontWeight:700, color:"#B42318" }}>{err}</p>}
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                <button disabled={busy || (panel.kind === "perguntar" && !note.trim())} onClick={()=>decide(c)} style={claimBtn(panel.kind === "aprovar" ? "#147832" : (panel.kind === "perguntar" ? "#1a1a1f" : "#B42318"),"#fff")}>{busy ? "A guardar..." : (panel.kind === "aprovar" ? "Confirmar aprovação" : (panel.kind === "perguntar" ? "Enviar pergunta" : "Confirmar rejeição"))}</button>
                <button disabled={busy} onClick={()=>{ setPanel(null); setErr(""); }} style={claimBtn("#fff","#1a1a1f","#1a1a1f")}>Voltar</button>
              </div>
            </div>
          )}
        </div>
      ); })}
      {done.length > 0 && (
        <div data-claims="history" style={{ marginTop:4 }}>
          <p style={{ margin:"6px 0 4px", fontSize:11, fontWeight:800, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>Últimas decisões</p>
          {done.map(c => { const s2 = claimStatus(c); const stored = claimNamesGet()[c.id]; return (
            <p key={c.id} data-claim={c.status} style={{ margin:"0 0 4px", fontSize:13, color:"#1a1a1f", overflowWrap:"anywhere" }}>
              <strong style={{ color:s2.color }}>{s2.label}</strong> · {claimHistoryWho(c, stored)} · {claimDay(c.decided_at || c.created_at)}{c.decision_note ? ` · ${c.decision_note}` : ""}
            </p>
          ); })}
        </div>
      )}
    </div>
  );
};

const JoinTeamModal = ({ teams, user, onFindByCode, onJoin, onClose, initialCode="", onListClaimable, onRequestClaim }) => {
  const [code, setCode] = useState(initialCode.toUpperCase()); const [found, setFound] = useState(null); const [joined, setJoined] = useState(false); const [searching, setSearching] = useState(false);
  // assumir perfil: perfis sem conta da equipa encontrada (se falhar ou vier vazio, a entrada segue como sempre)
  const [claimable, setClaimable] = useState([]); const [claimNote, setClaimNote] = useState(""); const [claimBusy, setClaimBusy] = useState(null);
  const [claimErr, setClaimErr] = useState(""); const [requested, setRequested] = useState(false); const [searchedCode, setSearchedCode] = useState("");
  const [searchErr, setSearchErr] = useState(""); const [listErr, setListErr] = useState(false); // erro de rede ao procurar / ao listar perfis por assumir

  useEffect(() => {
    if (initialCode) { setTimeout(() => search(initialCode), 500); }
  }, []);
  
  const search = async (c) => {
    const q = (c || code).trim().toUpperCase();
    if (!q) return;
    setSearching(true); setClaimable([]); setClaimErr(""); setSearchedCode(q); setSearchErr(""); setListErr(false);
    let t = null;
    // um erro de rede não é "código não encontrado": mostra o erro e deixa tentar outra vez
    try { t = onFindByCode ? await onFindByCode(q) : teams.find(t => t.inviteCode?.toUpperCase() === q); }
    catch(e) { setFound(null); setSearchErr(errPt(e)); setSearching(false); return; }
    setFound(t || "notfound");
    if (t && onListClaimable && !teams.some(x => x.id === t.id)) {
      try { const l = await onListClaimable(q); setClaimable(Array.isArray(l) ? l : []); } catch(e) { setClaimable([]); setListErr(true); }
    }
    setSearching(false);
  };
  const askClaim = async m => {
    setClaimBusy(m.member_id); setClaimErr("");
    try { await onRequestClaim(searchedCode, m.member_id, claimNote.trim()); setRequested(true); }
    catch(e) { setClaimErr(errPt(e)); }
    setClaimBusy(null);
  };
  const alreadyMember = found && found !== "notfound" && teams.some(t => t.id === found.id);
  const accept = async () => { await onJoin(found); setJoined(true); };
  const offerClaims = claimable.length > 0 && !alreadyMember && !!onRequestClaim;
  return (
    <Sheet title="🔗 Entrar numa equipa" onClose={onClose}>
      {requested ? (
        <div style={{ textAlign:"center", padding:"20px 0 10px" }}>
          <p style={{ fontSize:52 }}>⏳</p>
          <p style={{ fontWeight:800, fontSize:20, margin:"8px 0 6px", color:"#1a1a1f" }}>Pedido enviado. À espera do admin.</p>
          <p style={{ color:"#5F5F66", fontSize:14, margin:"0 0 16px" }}>Vais ver o estado do pedido em Geral. Quando o admin aprovar, a equipa aparece na tua conta.</p>
          <PrimaryBtn onClick={onClose} color={T.navy}>Fechar</PrimaryBtn>
        </div>
      ) : !joined ? (
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

          {searchErr && <LoadWarn id="codigo" onRetry={()=>search()}>Não foi possível procurar a equipa: {searchErr}</LoadWarn>}
          {listErr && <LoadWarn id="perfis-por-assumir" onRetry={()=>search()}>Não foi possível verificar se já existe um perfil teu nesta equipa. Podes entrar na mesma.</LoadWarn>}
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

          {offerClaims && (
            <div data-claim-offer style={{ background:T.card, border:"2px solid #1a1a1f", borderRadius:14, padding:"12px 14px", marginBottom:16 }}>
              <p style={{ margin:"0 0 4px", fontWeight:900, fontSize:16, color:"#1a1a1f" }}>Já és um destes jogadores?</p>
              <p style={{ margin:"0 0 10px", fontSize:13, color:"#5F5F66" }}>O admin já criou estes perfis. Escolhe o teu e ele confirma: as tuas multas e presenças mantêm-se.</p>
              {claimable.map(m => (
                <div key={m.member_id} data-claim-profile style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, flexWrap:"wrap" }}>
                  <div style={{ flex:1, minWidth:150 }}><ClaimWho name={m.name} avatar={m.avatar_url} /></div>
                  {m.requested_by_me
                    ? <span style={{ minHeight:44, display:"inline-flex", alignItems:"center", padding:"0 12px", fontSize:13, fontWeight:800, color:"#8A5A00" }}>Pedido enviado</span>
                    : <button disabled={claimBusy !== null} onClick={()=>askClaim(m)} style={claimBtn("#1a1a1f","#fff")}>{claimBusy===m.member_id ? "A enviar..." : "Este sou eu"}</button>}
                </div>
              ))}
              <FL>Mensagem ao admin (opcional)</FL>
              <textarea aria-label="Mensagem ao admin" value={claimNote} maxLength={200} onChange={e=>setClaimNote(e.target.value)} rows={2} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
              <p style={{ margin:"2px 0 0", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{claimNote.length}/200</p>
              {claimErr && <p role="alert" style={{ margin:"6px 0 0", fontSize:13, fontWeight:700, color:"#B42318" }}>{claimErr}</p>}
            </div>
          )}
          <PrimaryBtn onClick={accept} disabled={!found || found==="notfound"} color={found && found!=="notfound" ? found.color : T.border}>
            {alreadyMember ? `⚡ Ir para ${found?.name}` : (offerClaims ? "Nenhum sou eu, entrar como novo" : "✓ Aceitar convite e entrar")}
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

const TeamPickerModal = ({ teams, members, myUserId, currentTeamId, onSelect, onClose, onCreateTeam, readOnly }) => (
  <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"flex-end", zIndex:150 }}
    onClick={e => e.target===e.currentTarget && onClose()}>
    <div style={{ background:T.card, borderRadius:"22px 22px 0 0", padding:"0 16px 36px", width:"100%", boxSizing:"border-box" }}>
      <div style={{ width:36, height:4, borderRadius:2, background:T.border, margin:"12px auto 16px" }} />
      <p style={{ margin:"0 0 14px 4px", fontWeight:800, fontSize:17 }}>{readOnly ? "Todas as equipas (só leitura)" : "As minhas equipas"}</p>
      {teams.map(t => {
        const me = members.find(m => m.teamId===t.id && m.userId===myUserId);
        return (
          <button key={t.id} onClick={() => { onSelect(t.id); onClose(); }} style={{ display:"flex", alignItems:"center", gap:14, width:"100%", padding:"13px 12px", borderRadius:14, border:"none", cursor:"pointer", background:t.id===currentTeamId?`${t.color}15`:"transparent", marginBottom:4, textAlign:"left", fontFamily:"inherit" }}>
            <div style={{ width:42, height:42, borderRadius:12, background:t.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{t.emoji}</div>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:16 }}>{t.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{readOnly ? t.season : `${me?.role==="admin"?"🛡 Admin":"· Jogador"} · ${t.season}`}</p>
            </div>
            {t.id===currentTeamId && <span style={{ color:t.color, fontWeight:800, fontSize:18 }}>✓</span>}
          </button>
        );
      })}
      {!readOnly && <button onClick={() => { onClose(); onCreateTeam(); }} style={{ display:"flex", alignItems:"center", gap:14, width:"100%", padding:"13px 12px", borderRadius:14, border:`1.5px dashed ${T.border}`, cursor:"pointer", background:"transparent", marginTop:8, fontFamily:"inherit" }}>
        <div style={{ width:42, height:42, borderRadius:12, background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>➕</div>
        <p style={{ margin:0, fontWeight:700, fontSize:15, color:T.sub }}>Criar nova equipa</p>
      </button>}
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
          <FineIcon icon={f.emoji||"🟥"} size={18} style={{ flexShrink:0 }} />
          <div style={{ flex:1, minWidth:0 }}>
            <p style={{ margin:0, fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason||"—"}</p>
            <p style={{ margin:0, fontSize:11, color:T.sub }}>{fmtDay(f.date)}</p>
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
          ? <ZoomPhoto src={member.avatarUrl} name={member.name} style={{ width:isTop?50:44, height:isTop?50:44, borderRadius:isTop?25:22, objectFit:"cover", flexShrink:0, border:isTop?"3px solid rgba(255,255,255,0.4)":"none" }} />
          : <div style={{ width:isTop?50:44, height:isTop?50:44, borderRadius:isTop?25:22, background:isTop?"rgba(0,0,0,0.25)":color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:isTop?16:14, fontWeight:800, flexShrink:0 }}>{member.initials}</div>
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
              <FineIcon icon={f.emoji} size={18} />
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontSize:13, fontWeight:600, color:isTop?"rgba(255,255,255,0.9)":T.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
                <p style={{ margin:0, fontSize:11, color:isTop?"rgba(255,255,255,0.55)":T.sub }}>{fmtDay(f.date)}</p>
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
        <Avatar initials={group.initials||"?"} color={color} photo={group.avatarUrl} name={group.name} />
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
                <FineIcon icon={f.emoji} size={20} style={{ flexShrink:0 }} />
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ margin:0, fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
                  <p style={{ margin:0, fontSize:11, color:T.sub }}>{fmtDay(f.date)}</p>
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

const TabelaMultasModal = ({ team, fineTypes, fines, members, onClose }) => {
  const tf = fineTypes.filter(f => f.teamId === team.id);
  const tm = members.filter(m => m.teamId === team.id);
  const [tab, setTab] = React.useState("tipos");
  const devedores = tm.map(m => ({
    ...m,
    unpaid: fines.filter(f=>f.teamId===team.id&&f.memberId===m.id&&!f.paid).reduce((s,f)=>s+f.amount,0),
    count: fines.filter(f=>f.teamId===team.id&&f.memberId===m.id&&!f.paid).length
  })).filter(m=>m.unpaid>0).sort((a,b)=>b.unpaid-a.unpaid);
  return (
    <Sheet title={`📋 Tabela de Multas — ${team.name}`} onClose={onClose}>
      <div style={{ display:"flex", gap:8, marginBottom:16 }}>
        <Chip active={tab==="tipos"} color={team.color} onClick={()=>setTab("tipos")}>Tipos</Chip>
        <Chip active={tab==="devedores"} color={T.brand} onClick={()=>setTab("devedores")}>Por pagar ({devedores.length})</Chip>
      </div>
      {tab==="tipos" && (
        <>
          {tf.length===0 && <p style={{ color:T.sub, textAlign:"center", padding:20 }}>Sem tipos de multa definidos</p>}
          {tf.sort((a,b)=>a.amount-b.amount).map(ft => (
            <div key={ft.id} style={{ background:T.card, borderRadius:12, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
              <FineIcon icon={ft.emoji} size={26} style={{ flexShrink:0 }} />
              <p style={{ margin:0, fontWeight:700, fontSize:15, flex:1 }}>{ft.name}</p>
              <p style={{ margin:0, fontWeight:900, fontSize:18, color:T.brand }}>{ft.amount}€</p>
            </div>
          ))}
        </>
      )}
      {tab==="devedores" && (
        <>
          {devedores.length===0 && <p style={{ color:T.green, textAlign:"center", padding:20, fontWeight:700 }}>✓ Toda a equipa está em dia!</p>}
          {devedores.map((m,i) => (
            <div key={m.id} style={{ background:i===0?`linear-gradient(135deg,${T.brand},#c0392b)`:T.card, borderRadius:12, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12, border:i===0?"none":`1px solid ${T.border}` }}>
              {m.avatarUrl
                ? <ZoomPhoto src={m.avatarUrl} name={m.name} style={{ width:40, height:40, borderRadius:20, objectFit:"cover" }} />
                : <div style={{ width:40, height:40, borderRadius:20, background:i===0?"rgba(0,0,0,0.25)":team.color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:14 }}>{m.initials}</div>
              }
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:14, color:i===0?"#fff":T.text }}>{m.name}</p>
                <p style={{ margin:0, fontSize:12, color:i===0?"rgba(255,255,255,0.7)":T.sub }}>{m.count} multa{m.count!==1?"s":""} por pagar</p>
              </div>
              <p style={{ margin:0, fontWeight:900, fontSize:20, color:i===0?"#fff":T.brand }}>{m.unpaid.toFixed(1)}€</p>
            </div>
          ))}
        </>
      )}
    </Sheet>
  );
};

const HomeTab = ({ team, fines, members, expenses, trainings, isAdmin, onAddFine, onSelectMember, fineTypes, presences, myMember, onSetPresence }) => {
  const tf = fines.filter(f => f.teamId===team.id);
  const [showTabela, setShowTabela] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false); // lista de devedores: estado no topo (um hook dentro de um 'return null' condicional rebentava o ecrã quando surgia a primeira multa por pagar)
  const fc = useForecast(team, trainings.filter(t=>t.teamId===team.id));
  const collected = tf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  const pending = tf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const spent = expenses.filter(e=>e.teamId===team.id).reduce((s,e)=>s+Math.abs(e.amount),0);
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
    return byDayDesc(a, b);
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
          {[["Recebido",`+${collected}€`,"#fff"],["Por pagar",`${pending}€`,"#FFF4F4"],["Despesas",`-${spent}€`,"rgba(255,255,255,0.65)"]].map(([l,v,c],i,arr)=>(
            <div key={i} style={{ flex:1, borderRight:i<arr.length-1?"1px solid rgba(255,255,255,0.25)":"none", paddingRight:i<arr.length-1?12:0, paddingLeft:i>0?12:0 }}>
              <p style={{ margin:0, fontSize:10, opacity:0.65, textTransform:"uppercase" }}>{l}</p>
              <p style={{ margin:0, fontSize:17, fontWeight:700, color:c }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      {(() => {
        if (!myMember || myMember.unavailable || !onSetPresence) return null;
        const ev = nextPresenceEvent(trainings, team.id);
        if (!ev || (presences && presences[ev.t.id] && presences[ev.t.id][myMember.id])) return null;
        const btn = (label, color, status) => (
          <button onClick={() => onSetPresence(ev.t.id, myMember.id, status)} style={{ padding:"6px 14px", borderRadius:18, border:`1.5px solid ${color}`, background:"transparent", color, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
        );
        return (
          <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:"13px 14px", marginBottom:14 }}>
            <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{presenceTitle(ev)}</p>
            {ev.t.location && <p style={{ margin:"1px 0 0", fontSize:13, color:T.sub }}>📍 {ev.t.location}</p>}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:10 }}>
              <span style={{ fontSize:14, fontWeight:600, flex:1 }}>Vais?</span>
              {btn("✓ Sim", T.green, "present")}
              {btn("✗ Não", "#C94F00", "absent")}
            </div>
          </div>
        );
      })()}
      {isAdmin && (
        <button onClick={onAddFine} style={{ width:"100%", background:"#C62828", color:"#fff", border:"none", borderRadius:14, padding:"15px", fontSize:16, fontWeight:800, cursor:"pointer", marginBottom:10, fontFamily:"inherit" }}>🟥 Atribuir multa</button>
      )}
      <button onClick={() => setShowTabela(true)} style={{ width:"100%", minHeight:44, background:T.card, border:`1.5px solid ${T.border}`, borderRadius:14, padding:"12px", fontSize:14, fontWeight:700, cursor:"pointer", marginBottom:18, fontFamily:"inherit", color:T.text, display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
        📋 Tabela de multas & devedores
      </button>
      {showTabela && <TabelaMultasModal team={team} fineTypes={fineTypes||[]} fines={fines} members={members} onClose={()=>setShowTabela(false)} />}

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
          <div style={{ marginBottom:12, background:"#FFF8E7", borderRadius:10, padding:"8px 12px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:5, marginBottom:6 }}>
              <span style={{ fontSize:12 }}>🎂</span>
              <p style={{ margin:0, fontSize:10, fontWeight:800, color:"#B8860B", textTransform:"uppercase", letterSpacing:0.8 }}>Aniversariantes de {MONTHS_PT[currentMonth-1]}</p>
            </div>
            <div style={{ display:"flex", gap:6, overflowX:"auto", paddingBottom:2 }}>
              {bdays.map(m => {
                const isToday = m.bDay === today;
                return (
                  <div key={m.id} style={{ flexShrink:0, display:"flex", alignItems:"center", gap:5, background:isToday?"linear-gradient(135deg,#FF6B35,#FFB347)":"#fff", borderRadius:16, padding:"4px 8px 4px 4px", border:isToday?"none":"1px solid #FFE0A0" }}>
                    {m.avatarUrl
                      ? <ZoomPhoto src={m.avatarUrl} name={m.name} style={{ width:22, height:22, borderRadius:11, objectFit:"cover" }} />
                      : <div style={{ width:22, height:22, borderRadius:11, background:isToday?"rgba(255,255,255,0.3)":team.color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:8, fontWeight:800 }}>{m.initials}</div>
                    }
                    <span style={{ fontSize:11, fontWeight:700, color:isToday?"#fff":"#8B6914", whiteSpace:"nowrap" }}>{m.name.split(" ")[0]}</span>
                    <span style={{ fontSize:10, fontWeight:800, color:isToday?"rgba(255,255,255,0.9)":"#B8860B", whiteSpace:"nowrap", background:isToday?"rgba(255,255,255,0.2)":"#FFE0A0", borderRadius:6, padding:"1px 5px" }}>{isToday?"🎉":`${m.bDay} ${MONTHS_PT[currentMonth-1]}`}</span>
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
                        ? <ZoomPhoto src={m.avatarUrl} name={m.name} style={{ width:sz, height:sz, borderRadius:sz/2, objectFit:"cover", border:`3px solid ${pc}`, boxShadow:`0 4px 20px ${pc}66`, flexShrink:0 }} />
                        : <div style={{ width:sz, height:sz, borderRadius:sz/2, background:ag, border:`3px solid ${pc}`, display:"flex", alignItems:"center", justifyContent:"center", color:place===3?"#fff":"#10151f", textShadow:place===3?"0 1px 2px rgba(0,0,0,0.65)":"none", fontWeight:900, fontSize:sz*0.3, boxShadow:`0 4px 20px ${pc}66` }}>{m.initials}</div>
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
                <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}{fcText(fc[t.id])}</p>
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
                <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}{fcText(fc[t.id])}</p>
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
        <span onClick={() => m && onSelectMember(m)} style={{ fontSize:24, flexShrink:0, cursor:"pointer" }}><FineIcon icon={f.emoji} size={24} /></span>
        <div style={{ flex:1, minWidth:0, cursor:"pointer" }} onClick={() => m && onSelectMember(m)}>
          <p style={{ margin:0, fontSize:13, color:T.sub, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.reason}</p>
          <p style={{ margin:0, fontSize:11, color:T.sub }}>{fmtDay(f.date)}</p>
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
    [...tf].sort(byDayDesc).forEach(f => {
      const day = localDay(f.date); // timestamp completo cai no mês do dia local; sem data (ou inválida) fica no fim
      const key = day ? `${MESES_PT[+day.slice(5, 7) - 1]} de ${day.slice(0, 4)}` : "Sem data";
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
  const filtered = tf.filter(f=>filter==="all"||(filter==="unpaid"?!f.paid:f.paid)).sort(byDayDesc);
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

const PresBar = ({ t, presences, myMember, team, members, onSetPresence, isAdmin }) => {
  const [expanded, setExpanded] = React.useState(false);
  const pres = presences[t.id] || {};
  const tm = sortMembers(members.filter(m => m.teamId === team.id), true);
  const ok = Object.values(pres).filter(s=>s==="present").length;
  const no = Object.values(pres).filter(s=>s==="absent").length;
  const unav = tm.filter(m => m.unavailable && !pres[m.id]).length; // indisponíveis sem resposta gravada
  const pend = tm.length - ok - no - unav;
  const me = pres[myMember?.id];
  // só leitura: nomes de quem ainda não respondeu (sem botões, sem notificações). Admin; no modo leitura do super admin (onSetPresence nulo) aparece igual
  const semResposta = (isAdmin || !onSetPresence) ? tm.filter(m => !pres[m.id] && !m.unavailable) : [];
  return (
    <div style={{ paddingTop:10, marginTop:8, borderTop:`1px solid ${T.border}` }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <PresCounter count={ok}   color={T.green} />
        <PresCounter count={no}   color="#C94F00" />
        <PresCounter count={pend} color={T.sub} />
        {unav > 0 && <div title="Indisponíveis" style={{ minWidth:26, height:26, padding:"0 6px", boxSizing:"border-box", borderRadius:7, background:"#7B6CD9", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, fontWeight:800, gap:3 }}>🤕 {unav}</div>}
        <button onClick={() => setExpanded(e=>!e)} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:8, padding:"3px 8px", fontSize:11, color:T.sub, cursor:"pointer", fontFamily:"inherit", flexShrink:0 }}>{expanded ? "▲" : "▼ Ver"}</button>
        {!isPast(t.date) && myMember && (
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="present" ? null : "present")} style={{ padding:"6px 12px", minHeight:44, borderRadius:18, border:`1.5px solid ${T.green}`, background:me==="present"?T.green:"transparent", color:me==="present"?"#fff":T.green, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✓ Presente</button>
            <button onClick={() => onSetPresence(t.id, myMember.id, me==="absent" ? null : "absent")} style={{ padding:"6px 12px", minHeight:44, borderRadius:18, border:`1.5px solid #C94F00`, background:me==="absent"?"#C94F00":"transparent", color:me==="absent"?"#fff":"#C94F00", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>✗ Ausente</button>
          </div>
        )}
      </div>
      {expanded && (
        <div style={{ marginTop:10, display:"flex", flexDirection:"column", gap:5 }}>
          {tm.map(m => {
            const st = pres[m.id];
            const isUnav = m.unavailable && !st;
            const color = st==="present" ? T.green : st==="absent" ? "#C94F00" : isUnav ? "#7B6CD9" : T.sub;
            const icon = st==="present" ? "✓" : st==="absent" ? "✗" : isUnav ? (m.unavailableEmoji||"🤕") : "?";
            return (
              <div key={m.id} style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:22, height:22, borderRadius:7, background:color, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, fontWeight:800, flexShrink:0 }}>{icon}</div>
                <span style={{ fontSize:13, color:st ? T.text : T.sub, fontWeight:st ? 600 : 400 }}>{m.name}{isUnav && " · indisponível"}</span>
              </div>
            );
          })}
          {semResposta.length > 0 && (
            <div data-pres="sem-resposta" style={{ marginTop:6, paddingTop:8, borderTop:`1px dashed ${T.border}` }}>
              <p style={{ margin:"0 0 4px", fontSize:13, fontWeight:800, color:"#C94F00" }}>Sem resposta ({semResposta.length})</p>
              <p style={{ margin:0, fontSize:13, color:T.text, lineHeight:1.5, overflowWrap:"anywhere" }}>{semResposta.map(m => m.name).join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const EventCard = ({ fc, t, team, members, isAdmin, ctxMenu, setCtxMenu, onDelete, setEditTarget, myMember, presences, onSetPresence }) => {
  const past = isPast(t.date);
  const isJogo = t.type === "jogo";
  const dt = new Date(t.date+"T00:00:00");
  const dayNum = dt.getDate();
  const weekday = dt.toLocaleDateString("pt-PT",{weekday:"long"});
  const squadMembers = isJogo ? sortMembers((t.squad||[]).map(id=>members.find(m=>m.id===id)).filter(Boolean), true) : [];
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
            <p style={{ margin:"1px 0 0", fontSize:13, color:T.sub }}>📍 {t.location}{fcText(fc)}</p>
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
        <PresBar t={t} presences={presences} myMember={myMember} team={team} members={members} onSetPresence={onSetPresence} isAdmin={isAdmin} />
      </div>
      {ctxMenu===t.id && (
        <div style={{ background:T.bg, borderTop:`1px solid ${T.border}` }}>
          {[
            ["✏️ Modificar evento", () => { setEditTarget(t); setCtxMenu(null); }],
            ["🗑️ Eliminar evento",  () => { setCtxMenu(null); if (window.confirm(`Eliminar ${t.type==="jogo" ? "este jogo" : "este treino"}? Não tem volta.`)) onDelete(t.id); }],
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
  const fc = useForecast(team, tt);
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
        <button onClick={onBack} style={{ minHeight:44, background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit", marginBottom:10 }}>← Voltar</button>
        <h1 style={{ margin:0, fontSize:30, fontWeight:900, letterSpacing:-1 }}>Treinos</h1>
        <p style={{ margin:"2px 0 0", opacity:0.7, fontSize:14 }}>{team.name} · {team.season}</p>
      </div>

      {/* Filter bar */}
      <div style={{ background:T.card, padding:"10px 16px", display:"flex", gap:8, alignItems:"center", flexWrap:"wrap", borderBottom:`1px solid ${T.border}` }}>
        <button onClick={() => setShowPast(!showPast)} style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", minHeight:44, borderRadius:20, border:`1px solid ${T.border}`, background:showPast?T.navy:"transparent", color:showPast?"#fff":T.sub, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
          🕐 Passado
        </button>
        {isAdmin && (<>
          <button onClick={() => setModal("treino")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", minHeight:44, borderRadius:20, border:"none", background:team.color, color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0, boxShadow:`0 2px 10px ${team.color}44` }}>
            ⚽ Treino
          </button>
          <button onClick={() => setModal("recorrente")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", minHeight:44, borderRadius:20, border:`1px solid ${team.color}`, background:"transparent", color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
            🔄
          </button>
          <button onClick={() => setModal("jogo")} style={{ display:"flex", alignItems:"center", gap:4, padding:"8px 14px", minHeight:44, borderRadius:20, border:`1px solid ${team.color}`, background:"transparent", color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0 }}>
            🏆
          </button>
        </>)}
        <button onClick={() => setShowFilter(true)} style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", minHeight:44, borderRadius:20, border:`1px solid ${filterType?team.color:T.border}`, background:filterType?`${team.color}15`:"transparent", color:filterType?team.color:T.sub, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap", flexShrink:0, marginLeft:"auto" }}>
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
                    <p style={{ margin:0, fontSize:13, color:T.sub }}>📍 {t.location}{fcText(fc[t.id])}</p>
                    {t.notes&&<p style={{ margin:0, fontSize:12, color:T.sub }}>{t.notes}</p>}
                  </div>
                  {isAdmin&&<div style={{ display:"flex", gap:6, flexShrink:0 }}>
                    <button onClick={()=>setEditTarget(t)} style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",color:T.sub }}>✏️</button>
                    <button onClick={()=>{ if (window.confirm("Eliminar este treino? Não tem volta.")) onDelete(t.id); }} aria-label="Eliminar" style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",color:T.sub }}>🗑️</button>
                  </div>}
                </div>
                {isAdmin && onLogSession && (
                  <button onClick={()=>setLogTarget(t)} style={{ display:"block", width:"100%", marginTop:10, padding:"8px", borderRadius:10, border:`1.5px solid ${team.color}`, background:`${team.color}12`, color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", textAlign:"center" }}>📋 Registar sessão</button>
                )}
                <PresBar t={t} presences={presences} myMember={myMember} team={team} members={members} onSetPresence={onSetPresence} isAdmin={isAdmin} />
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
                  <span style={{ fontSize:12, color:T.sub, fontWeight:600 }}>{plural(totalSessions, "sessão", "sessões")}</span>
                  {totalPresent>0 && <span style={{ fontSize:12, color:T.green, fontWeight:700 }}>· {totalPresent} ✓</span>}
                </div>
                <span style={{ fontSize:16, color:T.sub }}>{isCollapsed ? "▶" : "▼"}</span>
              </button>
              {!isCollapsed && evts.map(t => <EventCard key={t.id} fc={fc[t.id]} t={t} team={team} members={members} isAdmin={isAdmin} ctxMenu={ctxMenu} setCtxMenu={setCtxMenu} onDelete={onDelete} setEditTarget={setEditTarget} myMember={myMember} presences={presences} onSetPresence={onSetPresence} />)}
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

// valores em cêntimos inteiros nos totais por mês (sem erros de vírgula flutuante)
const toCents = x => Math.round(Number(x) * 100);
const eurC = c => { const a = Math.abs(c); return `${a % 100 === 0 ? a / 100 : (a / 100).toFixed(2)}€`; };
const sgnEurC = c => `${c < 0 ? "-" : "+"}${eurC(c)}`;

const TreasuryTab = ({ team, fines, members, expenses, isAdmin, onAddExpense, onEditExpense, onDeleteExpense }) => {
  const tf = fines.filter(f=>f.teamId===team.id&&f.paid);
  const te = expenses.filter(e=>e.teamId===team.id);
  const income = tf.reduce((s,f)=>s+f.amount,0);
  const spent = te.reduce((s,e)=>s+Math.abs(e.amount),0);
  const balance = income - spent;
  const gm = id => members.find(m=>m.id===id);
  // data do movimento: multas pagas pela data do pagamento (paid_at, dia local), com a data da multa como recurso; despesas pelo dia local
  const allTx = [...tf.map(f=>({...f,type:"in",label:`Multa — ${gm(f.memberId)?.name}`,day:localDay(f.paidAt)||localDay(f.date)})),...te.map(e=>({...e,type:"out",label:e.description,day:localDay(e.date)}))].sort((a,b)=>b.day.localeCompare(a.day));
  // agrupar por mês (AAAA-MM); sem data (ou inválida) fica num grupo à parte, no fim
  const months = [];
  const at = {};
  allTx.forEach(tx => {
    const key = tx.day ? tx.day.slice(0, 7) : "";
    if (!(key in at)) { at[key] = months.length; months.push({ key, txs:[], inC:0, outC:0 }); }
    const g = months[at[key]];
    g.txs.push(tx);
    if (tx.type === "in") g.inC += toCents(tx.amount); else g.outC += toCents(Math.abs(tx.amount));
  });
  // mês atual aberto, os outros (e os futuros) fechados; a escolha do utilizador fica guardada por mês e não muda com os dados
  const currentKey = todayLocal().slice(0, 7);
  const [monthOpen, setMonthOpen] = useState({});
  const [editingExp, setEditingExp] = useState(null);
  const canEditExp = isAdmin && !!onEditExpense && !!onDeleteExpense;
  const isOpen = key => (key in monthOpen) ? monthOpen[key] : (key !== "" && key === currentKey);
  const monthTitle = key => key ? `${MESES_PT[+key.slice(5, 7) - 1]} ${key.slice(0, 4)}` : "Sem data";
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
      {months.map(g => {
        const open = isOpen(g.key);
        const net = g.inC - g.outC;
        return (
          <div key={g.key || "none"} data-month={g.key || "none"} style={{ marginBottom:10 }}>
            <button onClick={() => setMonthOpen(p => ({ ...p, [g.key]: !open }))} aria-expanded={open}
              style={{ display:"flex", alignItems:"center", gap:10, width:"100%", minHeight:44, padding:"8px 12px", background:T.card, border:"none", borderRadius:12, cursor:"pointer", fontFamily:"inherit", textAlign:"left", marginBottom:open?7:0 }}>
              <span aria-hidden="true" style={{ fontSize:12, color:T.sub, width:14, flexShrink:0 }}>{open ? "▼" : "▶"}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontWeight:800, fontSize:15 }}>{monthTitle(g.key)}</p>
                <p style={{ margin:0, fontSize:12, color:T.sub }}>{plural(g.txs.length, "movimento", "movimentos")} · <span style={{ color:T.green }}>{sgnEurC(g.inC)}</span> · <span style={{ color:T.brand }}>{sgnEurC(-g.outC)}</span></p>
              </div>
              <span style={{ fontWeight:800, fontSize:15, color:net>=0?T.green:T.brand, flexShrink:0 }}>{sgnEurC(net)}</span>
            </button>
            {open && g.txs.map((tx,i) => (
              <div key={`${tx.type}-${tx.id ?? i}`} style={{ background:T.card, borderRadius:12, padding:"12px 14px", marginBottom:7, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:38, height:38, borderRadius:19, background:tx.type==="in"?`${T.green}18`:`${T.brand}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{tx.type==="in"?"⬆️":"⬇️"}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontWeight:600, fontSize:14 }}>{tx.label}</p>
                  <p style={{ margin:0, fontSize:12, color:T.sub }}>{fmtDay(tx.day)}</p>
                </div>
                <p style={{ margin:0, fontWeight:800, fontSize:17, color:tx.type==="in"?T.green:T.brand }}>{tx.type==="in"?"+":"-"}{Math.abs(tx.amount)}€</p>
                {canEditExp && tx.type==="out" && (
                  <div style={{ display:"flex", flexShrink:0 }}>
                    <button onClick={() => setEditingExp(tx)} aria-label="Editar despesa" style={{ minWidth:44, minHeight:44, background:"none", border:"none", fontSize:16, cursor:"pointer" }}>✏️</button>
                    <button onClick={() => { if (window.confirm(`Apagar a despesa "${tx.label}" (${Math.abs(tx.amount)}€)? Não tem volta.`)) onDeleteExpense(tx.id); }} aria-label="Apagar despesa" style={{ minWidth:44, minHeight:44, background:"none", border:"none", fontSize:16, cursor:"pointer" }}>🗑️</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
      {editingExp && canEditExp && <AddExpenseModal team={team} expense={editingExp} onSave={onEditExpense} onClose={()=>setEditingExp(null)} />}
    </div>
  );
};

// ── ABA USERS (painel de super admin): equipas, membros, emails e histórico de multas ──
// Só leitura. Dados: get_app_activity_totals + get_admin_teams_overview (as duas únicas rpc desta aba).
const adminErrPt = e => {
  const m = String(e && e.message ? e.message : "");
  if (/not authorized|permission denied|42501|Sem permissão|403/i.test(m)) return "Sem permissão";
  if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "Sem ligação à internet";
  if (/JWT|expired/i.test(m)) return "A sessão expirou: volta a entrar";
  if (/resposta inválida/i.test(m)) return "Resposta inválida do servidor";
  return errPt(e, "erro desconhecido");
};
const ROLE_PT = { admin:"admin", player:"jogador", treinador:"treinador", diretor:"diretor" };
const eur = c => `${(c / 100).toFixed(2)}€`; // montantes em cêntimos inteiros
const dotsDay = v => { const d = localDay(v); return d ? `${d.slice(8)}.${d.slice(5, 7)}.${d.slice(0, 4)}` : null; }; // DD.MM.YYYY (dia local, via localDay)
const ADMIN_DAY = 86400000;
const adminAgeMs = iso => { const t = iso ? Date.parse(iso) : NaN; return isNaN(t) ? Infinity : Date.now() - t; };

// valida e normaliza as duas respostas; qualquer forma inesperada lança "resposta inválida" (nunca ecrã vazio nem números inventados)
const parseAdminUsers = (tot, ov) => {
  const bad = () => new Error("resposta inválida");
  const t = Array.isArray(tot) ? tot[0] : tot;
  const num = v => (v !== null && v !== "" && v !== undefined && Number.isFinite(Number(v))) ? Number(v) : null;
  if (!t || typeof t !== "object" || [t.users, t.active_7d, t.active_30d].some(v => num(v) === null)) throw bad();
  const list = ov == null ? [] : ov;
  if (!Array.isArray(list)) throw bad();
  const cents = v => { if (v == null || v === "") return 0; const n = Number(v); if (!Number.isFinite(n)) throw bad(); return Math.round(n * 100); };
  const count = (v, dflt) => { if (v == null || v === "") return dflt; const n = Number(v); if (!Number.isFinite(n)) throw bad(); return n; };
  const teams = list.map(x => {
    if (!x || typeof x !== "object" || x.id == null) throw bad();
    const mem = x.members == null ? [] : x.members;
    if (!Array.isArray(mem)) throw bad();
    const members = mem.map((m, i) => {
      if (!m || typeof m !== "object") throw bad();
      const fl = m.fines == null ? [] : m.fines;
      if (!Array.isArray(fl)) throw bad();
      return {
        key: m.member_id != null ? String(m.member_id) : `${x.id}-${i}`,
        role: m.role || "", name: (m.name || "").trim(), email: (m.email || "").trim(), last: m.last_sign_in_at || null,
        finesCount: count(m.fines_count, fl.length), total: cents(m.fines_total), unpaid: cents(m.unpaid_total),
        fines: fl.map(f => ({ reason: (f && f.reason) || "", amount: cents(f && f.amount), paid: !!(f && f.paid), date: f && f.date || null, paidAt: f && f.paid_at || null })),
      };
    });
    return {
      id: String(x.id), name: x.name || "", emoji: x.emoji || "⚽", season: x.season || "",
      membersCount: count(x.members_count, members.length), playersCount: count(x.players_count, members.filter(m => m.role === "player").length),
      unpaid: members.reduce((a, m) => a + m.unpaid, 0), members,
    };
  });
  return { totals: { users: num(t.users), a7: num(t.active_7d), a30: num(t.active_30d) }, teams };
};

const AdminUsersSection = ({ act, onRetry, StatCard }) => {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState({});   // equipas expandidas
  const [openM, setOpenM] = useState({}); // membros expandidos (histórico de multas)
  const num = v => v === null || v === undefined ? "—" : String(v);
  const tt = act.data && act.data.totals;
  const cards = (
    <div style={{ display:"flex", gap:"clamp(4px, 1.5vw, 8px)", marginBottom:12 }}>
      <StatCard cols={3} label="Utilizadores" value={act.status==="loading" ? "…" : num(tt && tt.users)} color="#6c47ff" />
      <StatCard cols={3} label="Ativos 7 dias" value={act.status==="loading" ? "…" : num(tt && tt.a7)} color={T.navy} />
      <StatCard cols={3} label="Ativos 30 dias" value={act.status==="loading" ? "…" : num(tt && tt.a30)} color={T.navy} />
    </div>
  );
  if (act.status === "loading" || act.status === "idle") return <>{cards}<Spinner msg="A carregar utilizadores..." /></>;
  if (act.status === "error") return (
    <>
      {cards}
      <div role="alert" style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", fontSize:14, color:"#8A0000", marginBottom:12 }}>Não foi possível carregar a atividade: {act.error}</div>
      <button onClick={onRetry} style={{ width:"100%", minHeight:48, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Tentar novamente</button>
    </>
  );
  const teams = act.data.teams;
  const nq = normTxt(q);
  const filtering = nq !== "" || filter !== "all";
  const keepText = m => !nq || normTxt(m.name).includes(nq) || normTxt(m.email).includes(nq);
  const keepAge = m => {
    const age = adminAgeMs(m.last);
    if (filter === "a7") return age <= 7 * ADMIN_DAY;
    if (filter === "i30") return !(age <= 30 * ADMIN_DAY);
    return true;
  };
  // pesquisa pelo nome da equipa: mostra a equipa com todos os membros (o filtro de atividade continua a aplicar-se)
  const shown = teams.map(tm => {
    const byTeam = nq !== "" && normTxt(tm.name).includes(nq);
    return { tm, byTeam, ms: tm.members.filter(m => keepAge(m) && (byTeam || keepText(m))) };
  }).filter(x => !filtering || x.ms.length > 0 || (x.byTeam && filter === "all"));
  const chips = [["all","Todos"],["a7","Ativos 7 dias"],["i30","Inativos 30+ dias"]];
  const isOpen = id => id in open ? open[id] : filtering;
  return (
    <>
      {cards}
      <FI type="search" placeholder="Pesquisar por nome, email ou equipa" aria-label="Pesquisar por nome, email ou equipa" value={q} onChange={e=>{ setQ(e.target.value); setOpen({}); }} style={{ marginBottom:8 }} />
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:10 }}>
        {chips.map(([id,label]) => (
          <button key={id} aria-pressed={filter===id} onClick={()=>{ setFilter(id); setOpen({}); }} style={{ minHeight:44, padding:"0 14px", borderRadius:22, border:`1.5px solid ${filter===id?T.navy:T.border}`, background:filter===id?T.navy:"transparent", color:filter===id?"#fff":T.sub, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
        ))}
      </div>
      <p style={{ margin:"0 0 10px", fontSize:12, color:"#5F5F66" }}>{plural(shown.length, "equipa", "equipas")}{filtering ? ` com ${plural(shown.reduce((a,x)=>a+x.ms.length,0), "membro", "membros")}` : ""}</p>
      {shown.length === 0 && <p style={{ textAlign:"center", color:"#5F5F66", padding:"24px 0", fontSize:14 }}>{filtering ? "Nenhum membro encontrado" : "Sem equipas"}</p>}
      {shown.map(({ tm, ms }) => {
        const o = isOpen(tm.id);
        return (
          <div key={tm.id} data-team={tm.id} style={{ background:T.card, borderRadius:14, marginBottom:10, overflow:"hidden" }}>
            <button onClick={()=>setOpen(p=>({ ...p, [tm.id]: !o }))} aria-expanded={o} style={{ display:"flex", alignItems:"center", gap:12, width:"100%", minHeight:56, padding:"12px 16px", background:"none", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"inherit", boxSizing:"border-box" }}>
              <span style={{ fontSize:26 }}>{tm.emoji}</span>
              <span style={{ flex:1, minWidth:0 }}>
                <span style={{ display:"block", fontWeight:800, fontSize:15, color:T.text, overflowWrap:"anywhere" }}>{tm.name || "Sem nome"}</span>
                <span style={{ display:"block", fontSize:12, color:"#5F5F66" }}>{tm.season ? `${tm.season} · ` : ""}{plural(tm.playersCount, "jogador", "jogadores")} · {plural(tm.membersCount, "membro", "membros")}</span>
              </span>
              <span style={{ textAlign:"right", flexShrink:0 }}>
                <span style={{ display:"block", fontWeight:900, fontSize:15, color: tm.unpaid > 0 ? T.brand : T.navy }}>{eur(tm.unpaid)}</span>
                <span style={{ display:"block", fontSize:11, color:"#5F5F66" }}>por pagar</span>
              </span>
              <span aria-hidden="true" style={{ fontSize:12, color:T.sub }}>{o ? "▲" : "▼"}</span>
            </button>
            {o && (
              <div style={{ padding:"0 12px 12px" }}>
                {ms.length === 0 && <p style={{ margin:"4px 4px 0", fontSize:13, color:"#5F5F66" }}>Sem membros</p>}
                {ms.map(m => {
                  const mo = !!openM[tm.id + "/" + m.key];
                  const acc = dotsDay(m.last);
                  return (
                    <div key={m.key} data-member={m.key} style={{ background:T.bg, borderRadius:12, marginTop:8, overflow:"hidden" }}>
                      <button onClick={()=>setOpenM(p=>({ ...p, [tm.id + "/" + m.key]: !mo }))} aria-expanded={mo} style={{ display:"block", width:"100%", padding:"10px 12px", background:"none", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"inherit", boxSizing:"border-box" }}>
                        <span style={{ display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{ flex:1, minWidth:0, fontWeight:800, fontSize:14, color:T.text, overflowWrap:"anywhere" }}>{m.name || "Sem nome"}</span>
                          <span style={{ fontSize:11, fontWeight:700, color:T.navy, border:`1px solid ${T.border}`, borderRadius:6, padding:"1px 6px", flexShrink:0 }}>{ROLE_PT[m.role] || m.role || "membro"}</span>
                          <span aria-hidden="true" style={{ fontSize:11, color:T.sub }}>{mo ? "▲" : "▼"}</span>
                        </span>
                        <span style={{ display:"block", fontSize:12, color: m.email ? T.text : "#5F5F66", marginTop:2, overflowWrap:"anywhere" }}>{m.email || "Sem conta"}</span>
                        <span style={{ display:"block", fontSize:12, color:"#5F5F66", marginTop:2 }}>Último acesso: {acc || "Nunca"}</span>
                        <span style={{ display:"block", fontSize:12, color:"#5F5F66", marginTop:2 }}>{plural(m.finesCount, "multa", "multas")} · total {eur(m.total)} · por pagar {eur(m.unpaid)}</span>
                      </button>
                      {mo && (
                        <div style={{ padding:"0 12px 10px" }}>
                          {m.fines.length === 0 && <p style={{ margin:"0", fontSize:12, color:"#5F5F66" }}>Sem multas</p>}
                          {m.fines.map((f, i) => {
                            const d = dotsDay(f.date), pd = dotsDay(f.paidAt);
                            return (
                              <div key={i} data-fine style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"6px 0", borderTop:`1px solid ${T.border}` }}>
                                <div style={{ flex:1, minWidth:0 }}>
                                  <p style={{ margin:0, fontSize:13, fontWeight:600, overflowWrap:"anywhere" }}>{f.reason || "Sem motivo"}</p>
                                  <p style={{ margin:"1px 0 0", fontSize:11, color:"#5F5F66" }}>{d || "Sem data"}{f.paid ? ` · paga em ${pd || "data desconhecida"}` : ""}</p>
                                </div>
                                <div style={{ textAlign:"right", flexShrink:0 }}>
                                  <p style={{ margin:0, fontSize:13, fontWeight:800 }}>{eur(f.amount)}</p>
                                  <p style={{ margin:0, fontSize:11, fontWeight:700, color: f.paid ? T.green : T.brand }}>{f.paid ? "Paga" : "Por pagar"}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

// Falhas de envio de push registadas neste dispositivo (contador local); "Repor" apaga só o contador local.
const PushFailsCard = () => {
  const [f, setF] = useState(readPushFails);
  return (
    <div data-push-fails style={{ background:T.card, borderRadius:14, padding:"clamp(10px, 3vw, 14px) clamp(10px, 3vw, 16px)", marginBottom:8 }}>
      <p style={{ margin:"0 0 4px", fontSize:"clamp(10px, 2.9vw, 12px)", fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.4 }}>Falhas de envio de push</p>
      <p style={{ margin:0, fontSize:"clamp(18.7px, 5.8vw, 26px)", lineHeight:1.15, fontWeight:900, color:f.count > 0 ? "#C94F00" : T.navy }}>{f.count}</p>
      <p style={{ margin:"2px 0 0", fontSize:"clamp(11px, 3.2vw, 13px)", color:"#5F5F66", overflowWrap:"anywhere" }}>
        {f.count > 0 ? `Última: ${f.last || "—"}${f.at ? ` · ${new Date(f.at).toLocaleString("pt-PT")}` : ""}` : "Nenhuma neste dispositivo."} (contador local, só deste dispositivo)
      </p>
      {f.count > 0 && <button onClick={()=>{ clearPushFails(); setF(readPushFails()); }} style={{ marginTop:8, minHeight:44, padding:"0 16px", borderRadius:12, border:"2px solid #1a1a1f", background:"transparent", color:"#1a1a1f", fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Repor contador</button>}
    </div>
  );
};

// ── ABA STATS: cartões de crescimento (só agregados; rpc get_app_growth_stats) ──
const MESES_CURTOS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const eurPt = n => `${Number(n).toLocaleString("pt-PT", { minimumFractionDigits:2, maximumFractionDigits:2 })}€`;
// valida e normaliza a resposta; forma inesperada lança "resposta inválida" (nunca números inventados)
const parseGrowth = raw => {
  const bad = () => new Error("resposta inválida");
  const g = Array.isArray(raw) ? raw[0] : raw;
  if (!g || typeof g !== "object") throw bad();
  const num = (v, required) => {
    if (v === null || v === undefined || v === "") { if (required) throw bad(); return 0; }
    const n = Number(v); if (!Number.isFinite(n)) throw bad(); return n;
  };
  const bm = g.by_month == null ? [] : g.by_month;
  if (!Array.isArray(bm)) throw bad();
  // últimos 6 meses, o mais recente primeiro
  const months = bm.map(m => {
    if (!m || typeof m.month !== "string" || !/^\d{4}-(0[1-9]|1[0-2])$/.test(m.month)) throw bad();
    return { month:m.month, users:num(m.new_users), teams:num(m.new_teams) };
  }).sort((a, b) => a.month < b.month ? 1 : -1).slice(0, 6);
  const finesTotal = num(g.fines_total), finesUnpaid = num(g.fines_unpaid), amountTotal = num(g.amount_total), amountUnpaid = num(g.amount_unpaid);
  const pct = (given, a, b) => (given === null || given === undefined || given === "") ? (b > 0 ? a / b * 100 : 0) : num(given);
  return {
    activeTeams:num(g.active_teams_30d, true), newTeams:num(g.new_teams_30d, true), newUsers:num(g.new_users_30d, true), push:num(g.push_subscriptions, true),
    finesTotal, finesUnpaid, pctCount:Math.round(pct(g.unpaid_pct_count, finesUnpaid, finesTotal)),
    amountTotal, amountUnpaid, pctAmount:Math.round(pct(g.unpaid_pct_amount, amountUnpaid, amountTotal)), months,
  };
};
const GrowthSection = ({ g, onRetry, StatCard }) => {
  const head = <p style={{ margin:"20px 0 8px", fontSize:12, fontWeight:700, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>📈 Crescimento</p>;
  if (g.status === "idle" || g.status === "loading") return <>{head}<p role="status" style={{ margin:"4px 0", fontSize:14, color:"#5F5F66" }}>A carregar crescimento...</p></>;
  if (g.status === "error") return (
    <>
      {head}
      <div role="alert" style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", fontSize:14, color:"#8A0000", marginBottom:10 }}>Não foi possível carregar o crescimento: {g.error}</div>
      <button onClick={onRetry} style={{ width:"100%", minHeight:48, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Tentar novamente</button>
    </>
  );
  const d = g.data;
  const pctCard = (label, pct, text) => (
    <div data-growth="pct" style={{ background:T.card, borderRadius:14, padding:"clamp(10px, 3vw, 14px) clamp(10px, 3vw, 16px)", marginBottom:8 }}>
      <p style={{ margin:"0 0 4px", fontSize:"clamp(10px, 2.9vw, 12px)", fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.4 }}>{label}</p>
      <p style={{ margin:0, fontSize:"clamp(18.7px, 5.8vw, 26px)", lineHeight:1.15, fontWeight:900, color:"#C94F00" }}>{pct}%</p>
      <p style={{ margin:"2px 0 0", fontSize:"clamp(11px, 3.2vw, 13px)", color:"#5F5F66", overflowWrap:"anywhere" }}>{text}</p>
    </div>
  );
  return (
    <>
      {head}
      <div style={{ display:"flex", gap:8, marginBottom:8 }}>
        <StatCard label="Equipas ativas" value={d.activeTeams} color={T.navy} sub="últimos 30 dias" />
        <StatCard label="Novas equipas" value={d.newTeams} color={T.green} sub="últimos 30 dias" />
      </div>
      <div style={{ display:"flex", gap:8, marginBottom:8 }}>
        <StatCard label="Novos utilizadores" value={d.newUsers} color="#6c47ff" sub="últimos 30 dias" />
        <StatCard label="Subscrições push" value={d.push} color={T.navy} />
      </div>
      <PushFailsCard />
      {pctCard("% por pagar · nº de multas", d.pctCount, `${d.finesUnpaid} de ${d.finesTotal} multas por pagar`)}
      {pctCard("% por pagar · valor", d.pctAmount, `${eurPt(d.amountUnpaid)} de ${eurPt(d.amountTotal)}`)}
      <p style={{ margin:"16px 0 8px", fontSize:12, fontWeight:700, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>Últimos 6 meses</p>
      {d.months.length === 0 && <p style={{ margin:"4px 0", fontSize:14, color:"#5F5F66" }}>Sem dados por mês.</p>}
      {d.months.map(m => (
        <div key={m.month} data-growth="month" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, flexWrap:"wrap", background:T.card, borderRadius:12, padding:"10px 14px", marginBottom:6 }}>
          <span style={{ fontWeight:800, fontSize:14 }}>{MESES_CURTOS_PT[Number(m.month.slice(5)) - 1]} {m.month.slice(0, 4)}</span>
          <span style={{ fontSize:13, color:"#5F5F66" }}>{plural(m.users, "novo utilizador", "novos utilizadores")} · {plural(m.teams, "nova equipa", "novas equipas")}</span>
        </div>
      ))}
    </>
  );
};

// ── ABA EQUIPAS: localização das equipas (rpc get_admin_teams_locations; só leitura, nada é gravado) ──
const locNorm = v => String(v == null ? "" : v).replace(/\s+/g, " ").trim();
const locKey = v => locNorm(v).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const locTitle = v => locNorm(v).toLowerCase().split(" ").map((w, i) => (i > 0 && ["de","da","do","das","dos","e"].includes(w)) ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
// código postal só se parecer válido: 4 dígitos (sem 0 à frente), ou 4-3 dígitos em Portugal
const locPostal = (postal, country) => {
  const p = locNorm(postal); const c = locKey(country);
  if (/^[1-9]\d{3}$/.test(p)) return p;
  if ((c === "portugal" || c === "pt") && /^[1-9]\d{3}-\d{3}$/.test(p)) return p;
  return "";
};
const parseLocations = raw => {
  if (!Array.isArray(raw)) throw new Error("resposta inválida");
  const map = {};
  raw.forEach(r => {
    if (!r || typeof r !== "object" || !r.id) return;
    map[r.id] = { country:locNorm(r.country), city:locNorm(r.city), postal:locPostal(r.postal, r.country), sport:locNorm(r.sport) };
  });
  return map;
};
const locLine = l => {
  if (!l) return "Sem localização";
  const parts = [l.city, l.country].filter(Boolean).map(locTitle).join(", ");
  return parts ? parts : "Sem localização";
};
// contagem por país / cidade, agrupando sem maiúsculas, acentos nem espaços a mais
const locCount = (list, field) => {
  const g = {};
  list.forEach(l => { const k = locKey(l[field]); if (!k) return; if (!g[k]) g[k] = { label:locTitle(l[field]), n:0 }; g[k].n++; });
  return Object.values(g).sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, "pt"));
};
const LocationSummary = ({ locs, teams }) => {
  const list = teams.map(t => locs[t.id]).filter(Boolean);
  const row = (label, items, attr) => items.length > 0 && (
    <p data-loc={attr} style={{ margin:"0 0 6px", fontSize:14, fontWeight:700, color:"#1a1a1f", lineHeight:1.5 }}>
      <span style={{ color:"#5F5F66", fontWeight:800 }}>{label}: </span>
      {items.slice(0, 10).map(x => `${x.label} ${x.n}`).join(" · ")}{items.length > 10 ? ` · +${items.length - 10}` : ""}
    </p>
  );
  const countries = locCount(list, "country"), cities = locCount(list, "city");
  if (!countries.length && !cities.length) return null;
  return (
    <div data-loc="summary" style={{ background:"#fff", border:"2px solid #1a1a1f", borderRadius:14, padding:"12px 14px", marginBottom:12 }}>
      {row("Países", countries, "countries")}
      {row("Cidades", cities, "cities")}
    </div>
  );
};

// ── APP ADMIN TAB ─────────────────────────────────────────────
const AppAdminTab = ({ token, onBack, onOpenTeam, initialSection, initialTeams }) => {
  const [stats, setStats] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null); // hora local da última carga dos dados
  const [teams, setTeams] = useState(Array.isArray(initialTeams) ? initialTeams : []); // initialTeams: lista já conhecida (ao voltar do modo leitura); é atualizada na mesma
  const [section, setSection] = useState(initialSection || "stats");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(!(Array.isArray(initialTeams) && initialTeams.length));
  // aba Users: pede as duas rpc uma vez, ao abrir a aba (com a base de dados a validar o super admin)
  const [act, setAct] = useState({ status:"idle", data:null, error:"" });
  const loadActivity = async () => {
    setAct({ status:"loading", data:null, error:"" });
    try {
      const [tot, ov] = await Promise.all([rpcCall('get_app_activity_totals', {}, token), rpcCall('get_admin_teams_overview', {}, token)]);
      setAct({ status:"ok", data:parseAdminUsers(tot, ov), error:"" });
    } catch(e) { setAct({ status:"error", data:null, error:adminErrPt(e) }); }
  };
  useEffect(() => { if (section === "users" && act.status === "idle") loadActivity(); }, [section]);
  // aba Stats: cartões de crescimento, pedidos uma vez ao abrir a aba (em paralelo com os pedidos das Stats atuais; se falharem, as Stats atuais ficam)
  const [growth, setGrowth] = useState({ status:"idle", data:null, error:"" });
  const loadGrowth = async () => {
    setGrowth({ status:"loading", data:null, error:"" });
    try { setGrowth({ status:"ok", data:parseGrowth(await rpcCall('get_app_growth_stats', {}, token)), error:"" }); }
    catch(e) { setGrowth({ status:"error", data:null, error:adminErrPt(e) }); }
  };
  useEffect(() => { if (section === "stats" && growth.status === "idle") loadGrowth(); }, [section]);
  // opiniões de fim de época: pedidas uma vez ao abrir a aba Stats
  const [fb, loadFb] = useAdminFeedback(token);
  useEffect(() => { if (section === "stats" && fb.status === "idle") loadFb(); }, [section]);
  // aba Equipas: localização das equipas, pedida uma vez ao abrir a aba; se falhar, a lista de equipas fica igual, sem localização
  const [locs, setLocs] = useState({ status:"idle", data:null, error:"" });
  const [teamQ, setTeamQ] = useState("");
  const loadLocs = async () => {
    setLocs({ status:"loading", data:null, error:"" });
    try { setLocs({ status:"ok", data:parseLocations(await rpcCall('get_admin_teams_locations', {}, token)), error:"" }); }
    catch(e) { setLocs({ status:"error", data:null, error:adminErrPt(e) }); }
  };
  useEffect(() => { if (section === "teams" && locs.status === "idle") loadLocs(); }, [section]);

  const [loadErr, setLoadErr] = useState("");
  const [loadTick, setLoadTick] = useState(0);
  useEffect(() => {
    const load = async () => {
      if (loadTick > 0) { setLoading(true); setLoadErr(""); }
      try {
        const rpc = (fn, body="{}") => fetch(`${SB_URL}/rest/v1/rpc/${fn}`, {
          method:'POST', headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'}, body
        });
        // só agregados: contagens e totais (nunca nomes, emails, telefones nem valores por pessoa)
        const [sr, tr] = await Promise.all([rpc("get_app_admin_stats"), rpc("get_all_teams_admin")]);
        if (sr.ok) setStats(await sr.json());
        if (tr.ok) setTeams(await tr.json() || []);
        if (!sr.ok || !tr.ok) setLoadErr(adminErrPt(new Error(`erro ${!sr.ok ? sr.status : tr.status}`)));
        setUpdatedAt(new Date());
      } catch(e) { console.error(e); setLoadErr(adminErrPt(e)); }
      setLoading(false);
    };
    load();
  }, [token, loadTick]);

  if (loading) return <Spinner msg="A carregar painel admin..." />;

  // Detalhe da equipa: só agregados que já vêm da lista (nada de nomes, motivos, adversários nem locais; sem pedido extra)
  if (selectedTeam) {
    const t = selectedTeam;
    const has = v => v !== undefined && v !== null && v !== "";
    const lastAct = t.last_activity_at || t.last_activity || null; // só aparece se a função da base de dados o devolver
    const rows = [
      ["👥", "Membros", t.members_count],
      ["📅", "Treinos e jogos", t.trainings_count],
      ["🟥", "Multas", t.fines_count],
      ["💶", "Total de multas", has(t.fines_total) ? `${t.fines_total}€` : null],
      ["💸", "Por pagar", has(t.unpaid_total) ? `${t.unpaid_total}€` : null],
      ["🕒", "Última atividade", lastAct ? fmtDay(lastAct) : null],
    ];
    return (
      <div style={{ background:T.bg, minHeight:"100vh", paddingBottom:80 }}>
        <div style={{ background:`linear-gradient(135deg,${T.navy},#0d1f36)`, padding:"52px 16px 16px" }}>
          <button onClick={()=>setSelectedTeam(null)} style={{ minHeight:44, background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, padding:"6px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:700, marginBottom:12 }}>← Voltar</button>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:32 }}>{t.emoji}</span>
            <div>
              <h2 style={{ margin:0, color:"#fff", fontSize:20, fontWeight:900 }}>{t.name}</h2>
              <p style={{ margin:0, fontSize:13, color:"rgba(255,255,255,0.5)" }}>{t.season} · {plural(t.members_count,"membro","membros")}</p>
            </div>
          </div>
        </div>
        <div style={{ padding:"16px" }}>
          {onOpenTeam && (
            <button onClick={()=>onOpenTeam(t.id, teams)} style={{ width:"100%", minHeight:48, marginBottom:12, background:T.navy, color:"#fff", border:"none", borderRadius:14, fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Abrir equipa</button>
          )}
          {rows.map(([icon, label, val]) => (
            <div key={label} style={{ background:T.card, borderRadius:14, padding:"14px 16px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:22 }}>{icon}</span>
              <p style={{ margin:0, flex:1, fontSize:14, fontWeight:600 }}>{label}</p>
              <p style={{ margin:0, fontSize:18, fontWeight:900, color:T.navy, whiteSpace:"nowrap" }}>{has(val) ? val : "—"}</p>
            </div>
          ))}
          <p style={{ margin:"12px 0 0", fontSize:12, color:"#5F5F66" }}>Só totais: o painel não mostra nomes, emails nem valores por pessoa.</p>
        </div>
      </div>
    );
  }

  // Cartão de estatística: letra fluida (clamp) e sem quebra de linha, para o valor caber sempre no cartão (3 colunas: cols=3; 2 colunas: cols=2)
  const StatCard = ({ label, value, color, cols = 2, sub }) => (
    <div style={{ background:T.card, borderRadius:14, padding:"clamp(10px, 3vw, 14px) clamp(6px, 2.5vw, 16px)", flex:1, minWidth:0 }}>
      <p style={{ margin:"0 0 4px", fontSize:"clamp(8.5px, 2.7vw, 11px)", fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:"clamp(0px, 0.15vw, 0.5px)", whiteSpace:"nowrap", minWidth:0 }}>{label}</p>
      <p style={{ margin:0, fontSize:cols===3 ? "clamp(18.7px, 6.4vw, 26px)" : "clamp(18.7px, 5.8vw, 26px)", lineHeight:1.15, fontWeight:900, color: color||T.navy, whiteSpace:"nowrap", minWidth:0 }}>{value}</p>
      {sub && <p style={{ margin:"2px 0 0", fontSize:"clamp(9.5px, 2.9vw, 12px)", color:"#5F5F66", whiteSpace:"nowrap", minWidth:0 }}>{sub}</p>}
    </div>
  );

  // percentagem por pagar / total (só apresentação): 0% se o total for 0 ou não for número; sem divisão por zero
  const totalN = Number(stats && stats.fines_total), unpaidN = Number(stats && stats.fines_unpaid);
  const unpaidPct = totalN > 0 && Number.isFinite(unpaidN) ? Math.round(unpaidN / totalN * 100) : 0;
  const tabs = [["stats","📊 Stats"],["teams","⚽ Equipas"],["users","👥 Users"]];

  return (
    <div style={{ background:T.bg, minHeight:"100vh", paddingBottom:80 }}>
      <div style={{ background:`linear-gradient(135deg,${T.navy},#0d1f36)`, padding:"52px 16px 16px" }}>
        <button onClick={onBack} style={{ minHeight:44, background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, padding:"6px 14px", cursor:"pointer", fontFamily:"inherit", fontWeight:700, marginBottom:12, fontSize:13 }}>← Voltar</button>
        <p style={{ margin:"0 0 2px", fontSize:12, color:"rgba(255,255,255,0.5)", fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>🛡️ Gestão</p>
        <h2 style={{ margin:0, color:"#fff", fontSize:22, fontWeight:900 }}>Visão Geral</h2>
        <p style={{ margin:"4px 0 0", fontSize:13, color:"rgba(255,255,255,0.7)" }}>Monitorização da plataforma</p>
        {updatedAt && <p style={{ margin:"2px 0 0", fontSize:12, color:"rgba(255,255,255,0.7)" }}>Atualizado às {String(updatedAt.getHours()).padStart(2,"0")}:{String(updatedAt.getMinutes()).padStart(2,"0")}</p>}
      </div>
      <div style={{ display:"flex", gap:6, padding:"12px 16px", background:T.card, borderBottom:`1px solid ${T.border}` }}>
        {tabs.map(([id,label]) => (
          <button key={id} onClick={()=>setSection(id)} style={{ flex:1, padding:"8px 4px", minHeight:44, borderRadius:10, border:`1.5px solid ${section===id?T.navy:T.border}`, background:section===id?T.navy:"transparent", color:section===id?"#fff":T.sub, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
        ))}
      </div>
      <div style={{ padding:"16px" }}>
        {loadErr && <LoadWarn id="painel" onRetry={()=>setLoadTick(t=>t+1)}>Não foi possível carregar todos os dados do painel: {loadErr}</LoadWarn>}
        {section==="stats" && stats && (
          <>
            <div style={{ display:"flex", gap:"clamp(4px, 1.5vw, 8px)", marginBottom:8 }}>
              <StatCard cols={3} label="Equipas"      value={stats.teams}   color={T.navy} />
              <StatCard cols={3} label="Utilizadores" value={stats.users}   color="#6c47ff" />
              <StatCard cols={3} label="Membros"      value={stats.members} color={T.green} />
            </div>
            <div style={{ display:"flex", gap:8, marginBottom:8 }}>
              <StatCard label="Multas"        value={stats.fines}     color={T.brand} />
              <StatCard label="Treinos/Jogos" value={stats.trainings} color={T.green} />
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <StatCard label="Total €"   value={`${stats.fines_total}€`}  color={T.brand} />
              <StatCard label="Por pagar" value={`${stats.fines_unpaid}€`} color="#F76800" sub={`${unpaidPct}% do total`} />
            </div>
          </>
        )}
        {section==="stats" && <GrowthSection g={growth} onRetry={loadGrowth} StatCard={StatCard} />}
        {section==="stats" && <FeedbackList st={fb} onRetry={loadFb} />}
        {section==="teams" && (
          <>
            {teams.length===0 && <p style={{ color:T.sub, textAlign:"center", padding:"20px 0" }}>Nenhuma equipa ainda</p>}
            {locs.status==="loading" && <p role="status" style={{ margin:"0 0 10px", fontSize:13, fontWeight:700, color:"#5F5F66" }}>A carregar localização...</p>}
            {locs.status==="error" && (
              <div role="alert" style={{ background:"#fff", border:"2px solid #C94F00", borderRadius:14, padding:"12px 14px", marginBottom:12 }}>
                <p style={{ margin:"0 0 10px", fontSize:14, fontWeight:700, color:"#1a1a1f" }}>Não foi possível carregar a localização das equipas: {locs.error}</p>
                <button onClick={loadLocs} style={{ minHeight:48, minWidth:44, padding:"0 18px", background:T.navy, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Tentar novamente</button>
              </div>
            )}
            {locs.status==="ok" && teams.length>0 && <LocationSummary locs={locs.data} teams={teams} />}
            {teams.length>0 && (
              <input type="search" aria-label="Pesquisar equipas por cidade ou país" placeholder="Pesquisar por cidade ou país" value={teamQ} onChange={e=>setTeamQ(e.target.value)}
                style={{ width:"100%", boxSizing:"border-box", minHeight:48, marginBottom:12, padding:"0 14px", fontSize:16, fontFamily:"inherit", border:"2px solid #1a1a1f", borderRadius:12, background:"#fff", color:"#1a1a1f" }} />
            )}
            {(() => {
              const q = locKey(teamQ);
              const shown = !q ? teams : teams.filter(t => { const l = locs.status==="ok" ? locs.data[t.id] : null; return locKey(t.name).includes(q) || (l && (locKey(l.city).includes(q) || locKey(l.country).includes(q))); });
              return q && shown.length===0 ? <p role="status" style={{ color:T.sub, textAlign:"center", padding:"12px 0", fontWeight:700 }}>Nenhuma equipa encontrada</p> : null;
            })()}
            {(() => { const q = locKey(teamQ); return !q ? teams : teams.filter(t => { const l = locs.status==="ok" ? locs.data[t.id] : null; return locKey(t.name).includes(q) || (l && (locKey(l.city).includes(q) || locKey(l.country).includes(q))); }); })().map(t => (
              <div key={t.id} onClick={()=>{ setSection("teams"); setSelectedTeam(t); }} style={{ background:T.card, borderRadius:14, padding:"14px 16px", marginBottom:10, cursor:"pointer", border:`1.5px solid ${T.border}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:28 }}>{t.emoji}</span>
                  <div style={{ flex:1 }}>
                    <p style={{ margin:0, fontWeight:800, fontSize:16 }}>{t.name}</p>
                    <p style={{ margin:0, fontSize:12, color:T.sub }}>{t.season} · criada {new Date(t.created_at).toLocaleDateString("pt-PT")}</p>
                    {locs.status==="ok" && (() => { const l = locs.data[t.id]; return (
                      <p data-loc="team" style={{ margin:"4px 0 0", fontSize:13, fontWeight:700, color:"#1a1a1f" }}>📍 {locLine(l)}{l && l.postal ? ` · ${l.postal}` : ""}{l && l.sport ? ` · ${l.sport}` : ""}</p>
                    ); })()}
                  </div>
                  <span style={{ color:T.sub, fontSize:18 }}>›</span>
                </div>
                <div style={{ display:"flex", gap:6 }}>
                  {[["👥",t.members_count,"membro","membros"],["🟥",t.fines_count,"multa","multas"],["💸",`${t.unpaid_total}€`,"por pagar","por pagar"],["📅",t.trainings_count,"treino","treinos"]].map(([icon,val,one,many]) => { const label = Number(val) === 1 ? one : many; return (
                    <div key={many} style={{ flex:1, background:T.bg, borderRadius:10, padding:"8px 6px", textAlign:"center" }}>
                      <p style={{ margin:0, fontSize:10, color:T.sub }}>{icon}</p>
                      <p style={{ margin:0, fontWeight:800, fontSize:14 }}>{val}</p>
                      <p style={{ margin:0, fontSize:9, color:T.sub }}>{label}</p>
                    </div>
                  ); })}
                </div>
              </div>
            ))}
          </>
        )}
        {section==="users" && <AdminUsersSection act={act} onRetry={loadActivity} StatCard={StatCard} />}
      </div>
    </div>
  );
};




// Privacidade (fim de Geral): texto fixo, sem promessas que a app não possa verificar
// Aviso discreto (alto contraste) com "Tentar novamente"; usado quando um carregamento falha em vez de ficar vazio em silêncio.
const LoadWarn = ({ id, children, onRetry, retryLabel = "Tentar novamente" }) => (
  <div role="alert" data-warn={id} style={{ margin:"8px 0", background:"#FFF8E1", border:"2px solid #8A5A00", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
    <p style={{ margin:0, flex:1, minWidth:180, fontSize:13, fontWeight:800, color:"#1a1a1f" }}>{children}</p>
    {onRetry && <button onClick={onRetry} style={{ minHeight:44, padding:"0 16px", borderRadius:12, border:"2px solid #1a1a1f", background:"#1a1a1f", color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>{retryLabel}</button>}
  </div>
);

// ── Convite "Ajuda a Multeam a crescer": aparece em Geral uma vez por época (julho a junho); "Agora não" ou partilhar esconde-o até à época seguinte ──
const INVITE_SEEN_KEY = "multeam_convite_epoca";
const INVITE_MSG = "Olá! Uso a Multeam para as multas e as presenças da minha equipa: é grátis e foi feita por um jogador. Vê aqui:";
const InviteCard = () => {
  const season = absSeason(todayLocal());
  const [seen, setSeen] = useState(() => { try { return window.localStorage.getItem(INVITE_SEEN_KEY) === season; } catch(e) { return false; } });
  const [mode, setMode] = useState(null); // null | "copiado" | "manual"
  if (seen) return null;
  const mark = () => { try { window.localStorage.setItem(INVITE_SEEN_KEY, season); } catch(e) { /* sem armazenamento: só esconde nesta sessão */ } setSeen(true); };
  const share = async () => {
    try {
      if (navigator.share) { await navigator.share({ title:"Multeam", text:INVITE_MSG, url:APP_URL }); mark(); return; }
    } catch(e) { if (e && e.name === "AbortError") return; /* cancelou: fica para outra vez */ }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(`${INVITE_MSG} ${APP_URL}`); setMode("copiado"); return; }
    } catch(e) { /* sem acesso à área de transferência: mostra o texto para copiar à mão */ }
    setMode("manual");
  };
  const btn = (bg, fg, border) => ({ minHeight:44, padding:"0 16px", borderRadius:12, border:`2px solid ${border}`, background:bg, color:fg, fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" });
  return (
    <div data-invite style={{ marginTop:8, background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:"12px 16px" }}>
      <p style={{ margin:"0 0 2px", fontSize:15, fontWeight:800, color:"#1a1a1f" }}>Ajuda a Multeam a crescer 💙</p>
      {mode === null && (<>
        <p style={{ margin:"0 0 10px", fontSize:13, color:"#5F5F66" }}>Conta a outra equipa: a Multeam é grátis.</p>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          <button onClick={share} style={btn("#1a1a1f", "#fff", "#1a1a1f")}>Convidar outra equipa</button>
          <button onClick={mark} style={btn("#fff", "#1a1a1f", "#1a1a1f")}>Agora não</button>
        </div>
      </>)}
      {mode === "copiado" && (<>
        <p role="status" style={{ margin:"0 0 10px", fontSize:13, color:"#1a1a1f", fontWeight:700 }}>Link copiado ✓ Cola-o numa mensagem. Obrigado!</p>
        <button onClick={mark} style={btn("#fff", "#1a1a1f", "#1a1a1f")}>Fechar</button>
      </>)}
      {mode === "manual" && (<>
        <p style={{ margin:"0 0 6px", fontSize:13, color:"#5F5F66" }}>Copia esta mensagem e envia-a a outra equipa:</p>
        <textarea readOnly aria-label="Mensagem de convite" value={`${INVITE_MSG} ${APP_URL}`} rows={3} onFocus={e => e.target.select()} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:14, fontFamily:"inherit", marginBottom:10 }} />
        <button onClick={mark} style={btn("#fff", "#1a1a1f", "#1a1a1f")}>Fechar</button>
      </>)}
    </div>
  );
};

// ── Opinião de fim de época: de 1 de junho a 15 de julho pede-se (uma vez, opcional) como foi a época com a Multeam ──
// rpc: my_feedback(p_season), save_feedback(p_season, p_mood, p_text, p_team_id), delete_feedback(p_season); o admin lê com get_app_feedback().
const FEEDBACK_SEEN_KEY = "multeam_opiniao_epoca";
const FEEDBACK_MOODS = [{ id:"gostei", emoji:"😀", label:"Gostei" }, { id:"normal", emoji:"🙂", label:"Mais ou menos" }, { id:"nao", emoji:"🙁", label:"Não gostei" }];
const FEEDBACK_MAX = 500;
// época a que a opinião se refere ("2026/27") se a data está na janela de 1 de junho a 15 de julho; senão ""
const feedbackSeason = iso => {
  const m = /^(\d{4})-(\d\d)-(\d\d)/.exec(iso || ""); if (!m) return "";
  const y = +m[1], mo = +m[2], d = +m[3];
  return (mo === 6 || (mo === 7 && d <= 15)) ? `${y - 1}/${String(y % 100).padStart(2, "0")}` : "";
};
// a função ainda não existe na base de dados: a funcionalidade fica escondida (sem avisos)
const feedbackUnavailable = e => /Could not find the function|schema cache|PGRST202/i.test(String(e && e.message));
const moodOf = id => FEEDBACK_MOODS.find(m => m.id === id) || null;
const SeasonFeedbackCard = ({ token, teamId }) => {
  const season = feedbackSeason(todayLocal());
  const [hidden, setHidden] = useState(() => { try { return !!season && window.localStorage.getItem(FEEDBACK_SEEN_KEY) === season; } catch(e) { return false; } });
  const [st, setSt] = useState({ status:"loading", mine:null, error:"" }); // loading | ok | error | off
  const [mood, setMood] = useState(""); const [text, setText] = useState(""); const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false); const [err, setErr] = useState("");
  const flight = React.useRef(false);
  const load = async () => {
    setSt(s0 => ({ ...s0, status:"loading", error:"" }));
    try { const r = await rpcCall("my_feedback", { p_season:season }, token); const row = Array.isArray(r) ? r[0] : r; setSt({ status:"ok", mine:(row && row.mood) ? row : null, error:"" }); }
    catch(e) { setSt(feedbackUnavailable(e) ? { status:"off", mine:null, error:"" } : { status:"error", mine:null, error:errPt(e) }); }
  };
  useEffect(() => { if (season && !hidden && token && !RO.on) load(); }, [season, hidden]);
  if (!season || hidden || RO.on || st.status === "off") return null;
  if (st.status === "loading") return null;
  const dismiss = () => { try { window.localStorage.setItem(FEEDBACK_SEEN_KEY, season); } catch(e) { /* sem armazenamento: só esconde nesta sessão */ } setHidden(true); };
  const save = async () => {
    if (flight.current || !mood) return;
    flight.current = true; setBusy(true); setErr("");
    try {
      const r = await rpcCall("save_feedback", { p_season:season, p_mood:mood, p_text:text.trim() || null, p_team_id:teamId || null }, token);
      const row = Array.isArray(r) ? r[0] : r;
      setSt({ status:"ok", mine:(row && row.mood) ? row : { mood, text:text.trim() }, error:"" }); setEditing(false);
    } catch(e) { setErr(errPt(e)); }
    setBusy(false); flight.current = false;
  };
  const remove = async () => {
    if (flight.current) return;
    if (!window.confirm("Apagar a tua opinião?")) return;
    flight.current = true; setBusy(true); setErr("");
    try { await rpcCall("delete_feedback", { p_season:season }, token); setSt({ status:"ok", mine:null, error:"" }); setMood(""); setText(""); setEditing(false); }
    catch(e) { setErr(errPt(e)); }
    setBusy(false); flight.current = false;
  };
  const btn = (bg, fg) => ({ minHeight:44, padding:"0 16px", borderRadius:12, border:"2px solid #1a1a1f", background:bg, color:fg, fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" });
  const wrap = ch => <div data-feedback style={{ marginTop:8, background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:"12px 16px" }}>{ch}</div>;
  if (st.status === "error") return wrap(<LoadWarn id="opiniao" onRetry={load}>Não foi possível carregar a tua opinião: {st.error}</LoadWarn>);
  const mine = st.mine;
  if (mine && !editing) {
    const m = moodOf(mine.mood);
    return wrap(<>
      <p style={{ margin:"0 0 4px", fontSize:15, fontWeight:800, color:"#1a1a1f" }}>Obrigado pela tua opinião! 💙</p>
      <p data-feedback-mine style={{ margin:"0 0 10px", fontSize:14, color:"#1a1a1f", overflowWrap:"anywhere" }}>{m ? `${m.emoji} ${m.label}` : ""}{mine.text ? ` · ${mine.text}` : ""}</p>
      {err && <p role="alert" style={{ margin:"0 0 8px", fontSize:13, fontWeight:700, color:"#B42318" }}>{err}</p>}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        <button disabled={busy} onClick={() => { setMood(mine.mood || ""); setText(mine.text || ""); setErr(""); setEditing(true); }} style={btn("#fff", "#1a1a1f")}>Editar</button>
        <button disabled={busy} onClick={remove} style={btn("#fff", "#B42318")}>Apagar</button>
      </div>
    </>);
  }
  return wrap(<>
    <p style={{ margin:"0 0 2px", fontSize:15, fontWeight:800, color:"#1a1a1f" }}>Como foi a época com a Multeam?</p>
    <p style={{ margin:"0 0 10px", fontSize:13, color:"#5F5F66" }}>A tua opinião ajuda a melhorar a app (opcional).</p>
    <div role="group" aria-label="Como foi a época" style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 }}>
      {FEEDBACK_MOODS.map(m => (
        <button key={m.id} type="button" aria-pressed={mood === m.id} onClick={() => setMood(m.id)} style={{ ...btn(mood === m.id ? "#1a1a1f" : "#fff", mood === m.id ? "#fff" : "#1a1a1f"), flex:"1 1 90px", display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"0 8px" }}>
          <span aria-hidden="true" style={{ fontSize:20 }}>{m.emoji}</span><span>{m.label}</span>
        </button>
      ))}
    </div>
    <textarea aria-label="Opinião sobre a app" value={text} maxLength={FEEDBACK_MAX} rows={3} placeholder="Queres acrescentar alguma coisa? (opcional)" onChange={e => setText(e.target.value)} style={{ width:"100%", boxSizing:"border-box", padding:"10px 12px", borderRadius:12, border:"2px solid #1a1a1f", fontSize:16, fontFamily:"inherit" }} />
    <p style={{ margin:"2px 0 8px", fontSize:11, color:"#5F5F66", textAlign:"right" }}>{text.length}/{FEEDBACK_MAX}</p>
    {err && <p role="alert" style={{ margin:"0 0 8px", fontSize:13, fontWeight:700, color:"#B42318" }}>{err}</p>}
    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
      <button disabled={busy || !mood} onClick={save} style={{ ...btn("#1a1a1f", "#fff"), opacity:(busy || !mood) ? 0.5 : 1 }}>{busy ? "A enviar..." : "Enviar"}</button>
      {editing ? <button disabled={busy} onClick={() => { setEditing(false); setErr(""); }} style={btn("#fff", "#1a1a1f")}>Cancelar</button> : <button disabled={busy} onClick={dismiss} style={btn("#fff", "#1a1a1f")}>Agora não</button>}
    </div>
  </>);
};

// Painel do super admin (aba Stats): opiniões de fim de época (só época, equipa, data e texto; sem nomes nem emails)
// estado e pedido das opiniões (a aba Stats guarda-os, como o crescimento: pedido uma vez ao abrir a aba)
const useAdminFeedback = token => {
  const [st, setSt] = useState({ status:"idle", rows:[], error:"" }); // idle | loading | ok | error | off
  const load = async () => {
    setSt(s0 => ({ ...s0, status:"loading", error:"" }));
    try { const r = await rpcCall("get_app_feedback", {}, token); setSt({ status:"ok", rows:Array.isArray(r) ? r : [], error:"" }); }
    catch(e) { setSt(feedbackUnavailable(e) ? { status:"off", rows:[], error:"" } : { status:"error", rows:[], error:adminErrPt(e) }); }
  };
  return [st, load];
};
const FeedbackSection = ({ token }) => {
  const [st, load] = useAdminFeedback(token);
  useEffect(() => { load(); }, []);
  return <FeedbackList st={st} onRetry={load} />;
};
const FeedbackList = ({ st, onRetry }) => {
  const head = <p style={{ margin:"20px 0 8px", fontSize:12, fontWeight:700, color:"#5F5F66", textTransform:"uppercase", letterSpacing:0.5 }}>💬 Opiniões de fim de época</p>;
  if (st.status === "idle" || st.status === "loading") return <div data-feedback-admin>{head}<p role="status" style={{ margin:"4px 0", fontSize:14, color:"#5F5F66" }}>A carregar opiniões...</p></div>;
  if (st.status === "off") return <div data-feedback-admin>{head}<p style={{ margin:"4px 0", fontSize:14, color:"#5F5F66" }}>Ainda não está ativo na base de dados.</p></div>;
  if (st.status === "error") return (
    <div data-feedback-admin>{head}
      <div role="alert" style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", fontSize:14, color:"#8A0000", marginBottom:10 }}>Não foi possível carregar as opiniões: {st.error}</div>
      <button onClick={onRetry} style={{ width:"100%", minHeight:48, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Tentar novamente</button>
    </div>
  );
  const rows = st.rows;
  const count = id => rows.filter(r => r.mood === id).length;
  const fmt = iso => { const m = /^(\d{4})-(\d\d)-(\d\d)/.exec(iso || ""); return m ? `${m[3]}/${m[2]}/${m[1]}` : ""; };
  return (
    <div data-feedback-admin>{head}
      {rows.length === 0 && <p style={{ margin:"4px 0", fontSize:14, color:"#5F5F66" }}>Ainda sem opiniões.</p>}
      {rows.length > 0 && <>
        <p data-feedback-counts style={{ margin:"0 0 8px", fontSize:14, fontWeight:800, color:"#1a1a1f" }}>{FEEDBACK_MOODS.map(m => `${m.emoji} ${count(m.id)}`).join("   ")}</p>
        {rows.slice(0, 50).map((r, i) => { const m = moodOf(r.mood); return (
          <div key={r.id || i} data-feedback-row style={{ background:T.card, borderRadius:12, padding:"10px 14px", marginBottom:6 }}>
            <p style={{ margin:0, fontSize:14, fontWeight:800, color:"#1a1a1f" }}>{m ? `${m.emoji} ${m.label}` : "—"}</p>
            <p style={{ margin:"2px 0 0", fontSize:12, color:"#5F5F66" }}>{[r.season, r.team_name, fmt(r.created_at)].filter(Boolean).join(" · ")}</p>
            {r.text && <p style={{ margin:"4px 0 0", fontSize:14, color:"#1a1a1f", overflowWrap:"anywhere" }}>{r.text}</p>}
          </div>); })}
      </>}
    </div>
  );
};

const PrivacySection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div data-privacy style={{ marginTop:12, borderTop:`1px solid ${T.border}`, paddingTop:8 }}>
      <button aria-expanded={open} onClick={()=>setOpen(o=>!o)} style={{ width:"100%", minHeight:44, background:"transparent", border:"none", textAlign:"left", fontSize:14, fontWeight:800, color:"#1a1a1f", cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:8 }}>
        <span>🔒 Privacidade</span><span style={{ marginLeft:"auto", color:"#5F5F66" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <>
        <p data-privacy-text style={{ margin:"4px 0 8px", fontSize:14, lineHeight:1.5, color:"#1a1a1f" }}>O administrador da plataforma tem acesso de leitura aos dados da app para manutenção, suporte e segurança.</p>
        <p data-privacy-contact style={{ margin:"0 0 8px", fontSize:14, lineHeight:1.5, color:"#1a1a1f" }}>O email de contacto é só da Multeam.</p>
      </>}
      <a data-contacto href="mailto:support@multeam.ch?subject=Multeam%20-%20Geral" style={{ display:"flex", alignItems:"center", minHeight:44, padding:"0 2px", fontSize:14, fontWeight:600, color:"#5F5F66", textDecoration:"underline", fontFamily:"inherit" }}>✉️ Contacto</a>
    </div>
  );
};

const GeneralTab = ({ user, myUserId, teams, members, onEditProfile, onManageTeam, onCreateTeam, onJoinTeam, onLeaveTeam, onLogout, onAdminOpen, isAppAdmin, token, readOnly, myClaims, onEditClaimNote, onCancelClaim, onAnswerClaim, claimCounts, pushIssue, onRetryPush, claimsWarn, onRetryClaims }) => {
  // modo leitura (super admin): só a equipa aberta, sem ser membro
  const myTeams = readOnly ? teams : teams.filter(t => 
    members.some(m=>m.teamId===t.id&&m.userId===myUserId) || t.createdBy===myUserId
  );
  const myAge = age(user.birthday);
  const [tapCount, setTapCount] = useState(0);
  const [showMembers, setShowMembers] = useState(null);
  const [membersWarn, setMembersWarn] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const tapTimer = React.useRef(null);
  const photoTaps = React.useRef(0);
  useEffect(() => () => clearTimeout(tapTimer.current), []);
  // foto do perfil (só super admin): 3 toques na mesma janela abrem o painel; 1 toque sozinho abre o zoom quando a janela acaba; 2 toques não abrem nada
  const photoTap = openZoom => {
    const next = photoTaps.current + 1;
    photoTaps.current = next;
    clearTimeout(tapTimer.current);
    if (next >= 3) { photoTaps.current = 0; setTapCount(0); onAdminOpen(); return; }
    tapTimer.current = setTimeout(() => { const n = photoTaps.current; photoTaps.current = 0; if (n === 1) openZoom(); }, 800);
  };

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
    if (readOnly) { setTeamMembers(members.filter(m => m.teamId === teamId)); setLoadingMembers(false); return; } // já vêm carregados (get_team_as_admin)
    setLoadingMembers(true); setMembersWarn("");
    try {
      const mRaw = await api.get(`team_members?team_id=eq.${teamId}&select=*`, token);
      const uids = mRaw.map(m=>m.user_id).filter(Boolean);
      let profilesMap = {};
      if (uids.length > 0) {
        let profs = null;
        try { profs = await rpcCall('get_team_profiles', { p_team_id: teamId }, token); } catch(e) { console.warn('get_team_profiles failed:', e && e.message); }
        if (Array.isArray(profs)) profs.forEach(p => { profilesMap[p.id] = p; });
        else {
          // reserva: leitura direta, só quando a rpc falhou; avisa sempre
          setMembersWarn(PROFILES_WARN);
          const direct = await api.get(`profiles?id=in.(${uids.join(',')})`, token).catch(()=>null);
          if (Array.isArray(direct)) direct.forEach(p => { profilesMap[p.id] = p; });
        }
      }
      const merged = mRaw.map(m => ({
        ...aMember({ ...m, profiles: profilesMap[m.user_id] || null })
      }));
      setTeamMembers(merged);
    } catch(e) { console.error(e); setMembersWarn("Não foi possível carregar os membros da equipa."); }
    setLoadingMembers(false);
  };

  if (showMembers) {
    const t = teams.find(x=>x.id===showMembers);
    const tm = sortMembers(teamMembers);
    return (
      <div style={{ padding:"16px 16px 100px" }}>
        <button onClick={()=>setShowMembers(null)} style={{ minHeight:44, background:`${t?.color||T.navy}18`, border:"none", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, color:t?.color||T.navy, fontFamily:"inherit", marginBottom:16 }}>← Voltar</button>
        <h2 style={{ margin:"0 0 4px", fontSize:20, fontWeight:900 }}>{t?.emoji} {t?.name}</h2>
        <p style={{ margin:"0 0 16px", fontSize:13, color:T.sub }}>{loadingMembers ? "A carregar..." : `${tm.length} membro${tm.length!==1?"s":""}`}</p>
        {membersWarn && !loadingMembers && <LoadWarn id="membros" onRetry={()=>openTeamMembers(showMembers)}>{membersWarn}</LoadWarn>}
        {tm.map(m => (
          <div key={m.id} style={{ background:T.card, borderRadius:16, padding:"14px", marginBottom:10, display:"flex", alignItems:"center", gap:14 }}>
            {m.avatarUrl
              ? <ZoomPhoto src={m.avatarUrl} name={m.name} style={{ width:54, height:54, borderRadius:27, objectFit:"cover", flexShrink:0 }} />
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
      {!readOnly && pushIssue && <LoadWarn id="push" onRetry={onRetryPush}>🔔 {pushIssueText(pushIssue)}</LoadWarn>}
      {!readOnly && claimsWarn && <LoadWarn id="pedidos-admin" onRetry={onRetryClaims}>{typeof claimsWarn === "string" ? claimsWarn : "Não foi possível ver as equipas onde és administrador. Os pedidos de perfil podem não aparecer."}</LoadWarn>}
      {/* Profile card */}
      {!readOnly && <div style={{ background:T.card, borderRadius:20, padding:"20px", marginBottom:16, position:"relative" }}>
        <button onClick={onEditProfile} style={{ position:"absolute", top:16, right:16, minHeight:44, background:T.bg, border:"none", borderRadius:10, padding:"7px 13px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.navy, fontFamily:"inherit" }}>✏️ Editar</button>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18, paddingRight:80 }}>
          <div onClick={handleAvatarTap} style={{ cursor: isAppAdmin ? "pointer" : "default" }}>
            <Avatar initials={user.initials} color={T.navy} size={54} photo={user.avatarUrl} name={user.name} onTapGesture={isAppAdmin ? photoTap : undefined} />
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
      </div>}

      {!readOnly && <MyClaimsCard claims={myClaims} onEditNote={onEditClaimNote} onCancel={onCancelClaim} onAnswer={onAnswerClaim} />}
      {/* Teams */}
      <Sec label={`Equipas (${myTeams.length})`} />
      {myTeams.map(t => {
        const me = members.find(m=>m.teamId===t.id&&m.userId===myUserId);
        const admin = !readOnly && (me?.role==="admin" || t.createdBy===myUserId);
        return (
          <div key={t.id} style={{ background:T.card, borderRadius:14, padding:"14px", marginBottom:8 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:t.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>{t.emoji}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontWeight:700, fontSize:16 }}>{t.name}</p>
                <div style={{ display:"flex", gap:6, alignItems:"center", marginTop:3 }}>
                  {!readOnly && <RoleBadgeLight role={admin?"admin":"player"} />}
                  <span style={{ fontSize:12, color:T.sub }}>{t.season}</span>
                </div>
              </div>
              {admin && (
                <button onClick={() => onManageTeam(t.id)} style={{ position:"relative", minHeight:44, background:`${t.color}15`, border:"none", borderRadius:10, padding:"8px 12px", fontSize:13, fontWeight:700, cursor:"pointer", color:t.color, fontFamily:"inherit" }}>Gerir →{(claimCounts && claimCounts[t.id] > 0) ? <span data-badge="claims-team"><CountBadge n={claimCounts[t.id]} /></span> : null}</button>
              )}
            </div>
            <button onClick={() => openTeamMembers(t.id)} style={{ width:"100%", minHeight:44, marginTop:10, background:T.bg, border:`1px solid ${T.border}`, borderRadius:10, padding:"9px", fontSize:13, fontWeight:700, cursor:"pointer", color:T.sub, fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
              👥 Ver membros da equipa
            </button>
            {readOnly && <div style={{ marginTop:10 }}><ClaimsAdminSection team={t} members={members} token={token} readOnly /></div>}
            {!admin && !readOnly && (
              <button onClick={() => { if(window.confirm(`Sair de "${t.name}"? Perdes o acesso à equipa.`)) onLeaveTeam(t.id); }} style={{ width:"100%", marginTop:6, background:"transparent", border:`1px solid ${T.brand}`, borderRadius:10, padding:"8px", fontSize:12, fontWeight:700, cursor:"pointer", color:T.brand, fontFamily:"inherit" }}>
                🚪 Sair desta equipa
              </button>
            )}
          </div>
        );
      })}
      {!readOnly && <>
      <button onClick={onCreateTeam} style={{ width:"100%", background:"transparent", border:`1.5px dashed ${T.border}`, borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:T.sub, marginTop:4, fontFamily:"inherit" }}>
        ➕ Criar nova equipa
      </button>
      <button onClick={onJoinTeam} style={{ width:"100%", background:"transparent", border:`1.5px solid ${T.navy}`, borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:T.navy, marginTop:8, fontFamily:"inherit" }}>
        🔗 Entrar numa equipa com código
      </button>
      </>}
      {!readOnly && <SeasonFeedbackCard token={token} teamId={(myTeams[0] || {}).id} />}
      {!readOnly && <InviteCard />}
      <button onClick={onLogout} style={{ width:"100%", minHeight:44, background:"transparent", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", color:"#B42318", marginTop:8, fontFamily:"inherit" }}>
        Terminar sessão
      </button>
      <PrivacySection />
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
  const [name, setName] = useState(""); const [amount, setAmount] = useState(""); const [custom, setCustom] = useState(null);
  const [editCustom, setEditCustom] = useState(null); const [editName, setEditName] = useState(""); const [editAmount, setEditAmount] = useState("");
  const [err, setErr] = useState(""); const [saving, setSaving] = useState(false);
  const tf = fineTypes.filter(f => f.teamId === team.id);

  const save = async () => {
    if (!name.trim() || !amount) return;
    setSaving(true); setErr("");
    try {
      const ft = needRows(await api.post(`fine_types`, { team_id: team.id, name: name.trim(), amount: Number(amount), emoji: storableIcon(resolveTypeIcon(name.trim(), custom)) }, token))[0];
      onAdded(ft);
      setName(""); setAmount(""); setCustom(null); setAdding(false);
    } catch(e) { setErr(errPt(e)); }
    setSaving(false);
  };

  const startEdit = ft => {
    setEditingId(ft.id); setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji); setEditName(ft.name); setEditAmount(String(ft.amount));
  };

  const saveEdit = async (id) => {
    if (!editName.trim() || !editAmount) return;
    setSaving(true);
    try {
      const em = resolveTypeIcon(editName.trim(), editCustom);
      needRows(await api.patch(`fine_types?id=eq.${id}`, { emoji: storableIcon(em), name: editName.trim(), amount: Number(editAmount) }, token));
      onUpdated(id, { emoji: em, name: editName.trim(), amount: Number(editAmount) });
      setEditingId(null);
    } catch(e) { setErr(errPt(e)); }
    setSaving(false);
  };

  const del = async id => {
    try {
      await api.del(`fine_types?id=eq.${id}`, token);
      const still = await api.get(`fine_types?id=eq.${id}&select=id`, token);
      if (still.length) throw new Error("sem permissão (o registo continua a existir)");
      onDeleted(id);
    } catch(e) { setErr(errPt(e)); }
  };

  return (
    <div style={{ marginBottom:16 }}>
      {err && <p style={{ color:T.brand, fontSize:13, margin:"0 0 8px", background:"#FFE5E5", borderRadius:8, padding:"8px 12px" }}>{err}</p>}
      {tf.map(ft => (
        <div key={ft.id}>
          <div style={{ background:T.card, borderRadius:12, padding:"12px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
            <FineIcon icon={ft.emoji} size={26} />
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:14 }}>{ft.name}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{ft.amount}€</p>
            </div>
            <button onClick={() => editingId===ft.id ? setEditingId(null) : startEdit(ft)} style={{ background:"none", border:`1.5px solid ${editingId===ft.id?team.color:T.border}`, borderRadius:8, fontSize:13, fontWeight:700, color:editingId===ft.id?team.color:T.sub, cursor:"pointer", padding:"4px 10px", fontFamily:"inherit" }}>✏️</button>
            <button onClick={() => del(ft.id)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:T.sub, padding:"4px 8px" }}>🗑️</button>
          </div>
          {editingId===ft.id && (
            <div style={{ background:T.card, borderRadius:12, padding:"14px", marginBottom:8, marginTop:-4 }}>
              <FineIconField name={editName} custom={editCustom} onCustom={setEditCustom} />
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
          <FineIconField name={name} custom={custom} onCustom={setCustom} />
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

const TeamDataSection = ({ team, onSave }) => {
  const opt = (list, cur) => (cur && !list.includes(cur)) ? [cur, ...list] : list;
  const init = () => ({ name:team.name||"", emoji:team.emoji||"⚽", color:team.color||"#1D3557", season:team.season||"", sport:team.sport||"", currency:team.currency||"", country:team.country||"", city:team.city||"", postal:team.postal||"" });
  const [editing, setEditing] = useState(false);
  const [f, setF] = useState(init);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const set = (k, v) => setF(p => ({ ...p, [k]: v }));
  const nameOk = f.name.trim().length > 0, seasonOk = f.season.trim().length > 0;
  const canSave = nameOk && seasonOk && !busy;
  const open = () => { setF(init()); setErr(""); setEditing(true); };
  const save = async () => {
    if (!canSave) return;
    const cur = init(), next = { ...f, name:f.name.trim(), season:f.season.trim(), city:f.city.trim(), postal:f.postal.trim() };
    const patch = {};
    Object.keys(next).forEach(k => { if (next[k] !== cur[k]) patch[k] = next[k]; });
    if (!Object.keys(patch).length) { setEditing(false); return; }
    setBusy(true); setErr("");
    try { await onSave(team.id, patch); setEditing(false); }
    catch(e) { setErr(errPt(e, "Erro ao guardar")); } // mantém os campos preenchidos
    setBusy(false);
  };
  const Val = ({ label, v }) => (
    <div style={{ display:"flex", justifyContent:"space-between", gap:12, padding:"6px 0" }}>
      <span style={{ fontSize:13, color:T.sub }}>{label}</span>
      <span style={{ fontSize:14, fontWeight:600, textAlign:"right" }}>{v || "—"}</span>
    </div>
  );
  return (
    <div style={{ background:T.card, borderRadius:16, padding:"16px", marginBottom:20 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:editing?12:6 }}>
        <p style={{ margin:0, fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>Dados da equipa</p>
        {!editing && <button onClick={open} style={{ minHeight:44, background:`${team.color}15`, border:"none", borderRadius:10, padding:"7px 12px", fontSize:13, fontWeight:700, cursor:"pointer", color:team.color, fontFamily:"inherit" }}>✏️ Editar</button>}
      </div>
      {!editing ? (
        <>
          <Val label="Nome" v={`${team.emoji||""} ${team.name||""}`.trim()} />
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0" }}>
            <span style={{ fontSize:13, color:T.sub }}>Cor</span>
            <span style={{ width:20, height:20, borderRadius:10, background:team.color, display:"inline-block" }} />
          </div>
          <Val label="Época" v={team.season} />
          <Val label="Desporto" v={team.sport} />
          <Val label="Moeda" v={team.currency} />
          <Val label="País" v={team.country} />
          <Val label="Cidade" v={[team.postal, team.city].filter(Boolean).join(" ")} />
          <p style={{ margin:"4px 0 0", fontSize:12, color:T.sub }}>Cidade e país: usados para a previsão do tempo nos treinos.</p>
        </>
      ) : (
        <>
          <FL>Nome</FL>
          <FI value={f.name} onChange={e=>set("name",e.target.value)} />
          <FL>Emoji</FL>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
            {opt(EMOJIS, f.emoji).map(e=>(
              <button key={e} onClick={()=>set("emoji",e)} style={{ width:40, height:40, borderRadius:10, fontSize:20, cursor:"pointer", border:`2px solid ${f.emoji===e?f.color:T.border}`, background:f.emoji===e?`${f.color}15`:"transparent" }}>{e}</button>
            ))}
          </div>
          <FL>Cor</FL>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
            {opt(COLORS, f.color).map(c=>(
              <button key={c} onClick={()=>set("color",c)} aria-label={c} style={{ width:32, height:32, borderRadius:16, background:c, cursor:"pointer", border:f.color===c?`3px solid ${T.text}`:"3px solid transparent" }} />
            ))}
          </div>
          <FL>Época</FL>
          <FI value={f.season} onChange={e=>set("season",e.target.value)} placeholder="2025/26" />
          <FL>Desporto</FL>
          <FSel value={f.sport} onChange={e=>set("sport",e.target.value)}>
            {opt(SPORTS, f.sport).map(x=><option key={x} value={x}>{x}</option>)}
          </FSel>
          <FL>Moeda</FL>
          <FSel value={f.currency} onChange={e=>set("currency",e.target.value)}>
            {opt(CURRENCIES, f.currency).map(x=><option key={x} value={x}>{x}</option>)}
          </FSel>
          <FL>País</FL>
          <FSel value={f.country} onChange={e=>set("country",e.target.value)}>
            {opt(COUNTRIES, f.country).map(x=><option key={x} value={x}>{x}</option>)}
          </FSel>
          <div style={{ display:"flex", gap:10 }}>
            <div style={{ flex:2 }}>
              <FL>Cidade</FL>
              <FI value={f.city} onChange={e=>set("city",e.target.value)} placeholder="Ex: Selzach" />
            </div>
            <div style={{ flex:1 }}>
              <FL>Cód. Postal</FL>
              <FI value={f.postal} onChange={e=>set("postal",e.target.value)} placeholder="2545" />
            </div>
          </div>
          <p style={{ margin:"-8px 0 14px", fontSize:12, color:T.sub }}>Usado para a previsão do tempo nos treinos.</p>
          {(!nameOk || !seasonOk) && <p style={{ margin:"0 0 10px", fontSize:13, fontWeight:600, color:T.brand }}>{!nameOk ? "O nome não pode ficar vazio." : "A época não pode ficar vazia."}</p>}
          {err && <p style={{ margin:"0 0 10px", fontSize:13, fontWeight:600, color:T.brand }}>{err}</p>}
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={()=>{ setEditing(false); setErr(""); }} disabled={busy} style={{ flex:1, padding:"15px", borderRadius:14, border:`1.5px solid ${T.border}`, background:"transparent", color:T.sub, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
            <div style={{ flex:2 }}><PrimaryBtn onClick={save} disabled={!canSave} color={f.color}>{busy?"A guardar…":"Guardar"}</PrimaryBtn></div>
          </div>
        </>
      )}
    </div>
  );
};

// Caixa para criar/editar um registo. A nota (sem espaços nas pontas) é obrigatória: sem ela Guardar fica desativado e nada é escrito.
// onSave devolve true se a escrita foi confirmada; só então a caixa fecha (se falhar, fica aberta com o que foi escrito).
const AbsenceForm = ({ title, initial, withEnd, saveLabel, onSave, onClose, color }) => {
  const [kind, setKind] = useState(initial.kind || "lesao");
  const [emoji, setEmoji] = useState(initial.emoji || "🤕");
  const [note, setNote] = useState(initial.note || "");
  const [start, setStart] = useState(initial.start || todayLocal());
  const [end, setEnd] = useState(initial.end || "");
  const [busy, setBusy] = useState(false);
  const lock = React.useRef(false);
  const noteOk = note.trim() !== "";
  const datesOk = !!start && (!withEnd || (!!end && end >= start));
  const save = async () => {
    if (lock.current || !noteOk || !datesOk) return;
    lock.current = true; setBusy(true);
    let ok = false;
    try { ok = await onSave({ kind, emoji, note: note.trim(), start, end: withEnd ? end : null }); }
    finally { lock.current = false; setBusy(false); }
    if (ok) onClose();
  };
  return (
    <Sheet title={title} onClose={busy ? ()=>{} : onClose}>
      <FL>Tipo</FL>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        {Object.entries(ABS_KINDS).map(([k, v]) => (
          <button key={k} onClick={()=>setKind(k)} aria-pressed={kind===k} style={{ flex:1, padding:"10px", borderRadius:10, border:`2px solid ${kind===k?T.green:T.border}`, background:kind===k?`${T.green}15`:"transparent", fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:"inherit" }}>{v.label}</button>
        ))}
      </div>
      <FL>Ícone</FL>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
        {UNAVAIL_EMOJIS.map(e => (
          <button key={e} onClick={()=>setEmoji(e)} aria-label={`Ícone ${e}`} style={{ fontSize:18, width:34, height:34, borderRadius:8, border:`2px solid ${emoji===e?T.green:T.border}`, background:emoji===e?`${T.green}15`:"transparent", cursor:"pointer" }}>{e}</button>
        ))}
      </div>
      <FL>Nota (obrigatória)</FL>
      <FI value={note} onChange={e=>setNote(e.target.value)} placeholder="O que se passa? (ex: ligamentos, volta em novembro)" style={{ marginBottom:noteOk?14:4 }} />
      {!noteOk && <p style={{ margin:"0 0 14px", fontSize:12, color:T.brand }}>Escreve uma nota para poder guardar.</p>}
      <FL>Desde</FL>
      <FI type="date" value={start} onChange={e=>setStart(e.target.value)} />
      {withEnd && <>
        <FL>Até</FL>
        <FI type="date" value={end} onChange={e=>setEnd(e.target.value)} />
        {end && start && end < start && <p style={{ margin:"-8px 0 14px", fontSize:12, color:T.brand }}>A data de fim não pode ser anterior ao início.</p>}
      </>}
      <PrimaryBtn onClick={save} disabled={!noteOk || !datesOk || busy} color={color || T.green}>{busy ? "A guardar…" : (saveLabel || "Guardar")}</PrimaryBtn>
      <button onClick={onClose} disabled={busy} style={{ display:"block", width:"100%", marginTop:10, padding:"10px", background:"transparent", border:"none", color:T.sub, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
    </Sheet>
  );
};

// "Fechar a lesão de Rui?" — só fecha (com data de fim = hoje) depois de confirmar
const CloseAbsenceSheet = ({ name, kind, onConfirm, onCancel }) => {
  const [busy, setBusy] = useState(false);
  const lock = React.useRef(false);
  const go = async () => {
    if (lock.current) return;
    lock.current = true; setBusy(true);
    let ok = false;
    try { ok = await onConfirm(); } finally { lock.current = false; setBusy(false); }
    if (ok) onCancel();
  };
  return (
    <Sheet title={`Fechar a ${(ABS_KINDS[kind] || ABS_KINDS.lesao).one} de ${name}?`} onClose={busy ? ()=>{} : onCancel}>
      <p style={{ margin:"0 0 16px", fontSize:14, color:T.sub }}>O registo fica no histórico com data de fim hoje ({fmtDMY(todayLocal())}).</p>
      <PrimaryBtn onClick={go} disabled={busy} color={T.green}>{busy ? "A fechar…" : "Fechar"}</PrimaryBtn>
      <button onClick={onCancel} disabled={busy} style={{ display:"block", width:"100%", marginTop:10, padding:"10px", background:"transparent", border:"none", color:T.sub, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
    </Sheet>
  );
};

// lista de registos (do mais recente para o mais antigo) com editar, fechar (se em curso) e apagar
const AbsenceCards = ({ records, showName, color, onUpdate, onClose, onDelete, emptyText, readOnly }) => {
  const [editing, setEditing] = useState(null);
  const [closing, setClosing] = useState(null);
  const sorted = [...records].sort((a, b) => (b.start || "").localeCompare(a.start || "") || (b.end === null) - (a.end === null));
  if (!sorted.length) return <p style={{ textAlign:"center", color:T.sub, padding:24 }}>{emptyText || "Sem registos"}</p>;
  const btn = { padding:"4px 8px", borderRadius:7, border:`1px solid ${T.border}`, background:"transparent", color:T.sub, fontSize:12, cursor:"pointer", fontFamily:"inherit" };
  return (
    <>
      {sorted.map(a => {
        const k = ABS_KINDS[a.kind];
        const d = absDays(a);
        return (
          <div key={a.id} data-absence={a.id} style={{ background:T.card, borderRadius:14, padding:"12px 14px", marginBottom:8, borderLeft:`3px solid ${a.end ? T.border : T.brand}` }}>
            <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
              <span style={{ fontSize:22 }}>{a.emoji}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontSize:14, fontWeight:700, wordBreak:"break-word" }}>{showName ? `${a.memberName}${a.memberId ? "" : " (removido)"} · ` : ""}{k.label}{a.end ? "" : " · em curso"}</p>
                <p style={{ margin:"2px 0 0", fontSize:13, wordBreak:"break-word" }}>{a.note}</p>
                <p style={{ margin:"2px 0 0", fontSize:12, color:T.sub }}>{fmtDMY(a.start)}{a.end ? ` – ${fmtDMY(a.end)}` : " – hoje"} · {plural(d, "dia", "dias")}</p>
              </div>
            </div>
            {!readOnly && <div style={{ display:"flex", gap:6, marginTop:8, justifyContent:"flex-end", flexWrap:"wrap" }}>
              {!a.end && a.memberId && <button onClick={()=>setClosing(a)} style={btn}>Fechar</button>}
              <button onClick={()=>setEditing(a)} aria-label="Editar registo" style={btn}>✏️ Editar</button>
              <button onClick={()=>{ if (window.confirm(`Apagar este registo de ${a.memberName}? Não tem volta.`)) onDelete(a); }} aria-label="Apagar registo" style={btn}>🗑️</button>
            </div>}
          </div>
        );
      })}
      {editing && <AbsenceForm title={`Editar ${ABS_KINDS[editing.kind].one}`} initial={editing} withEnd={!!editing.end} color={color} onSave={v => onUpdate(editing, v)} onClose={()=>setEditing(null)} />}
      {closing && <CloseAbsenceSheet name={closing.memberName} kind={closing.kind} onConfirm={()=>onClose(closing)} onCancel={()=>setClosing(null)} />}
    </>
  );
};

// Gerir > Arquivo: todos os registos da equipa, com filtros por jogador, tipo e época
const AbsenceArchive = ({ team, absences = [], onUpdate, onClose, onDelete }) => {
  const [fPlayer, setFPlayer] = useState("");
  const [fKind, setFKind] = useState("");
  const [fSeason, setFSeason] = useState("");
  if (absences === null) return <p style={{ color:T.brand, fontSize:13 }}>Não foi possível carregar o arquivo. Puxa para atualizar.</p>;
  const pkey = a => a.memberId || `n:${a.memberName}`;
  const players = []; const seen = new Set();
  absences.forEach(a => { if (!seen.has(pkey(a))) { seen.add(pkey(a)); players.push([pkey(a), a.memberName + (a.memberId ? "" : " (removido)")]); } });
  players.sort((x, y) => x[1].localeCompare(y[1], "pt"));
  const seasons = [...new Set(absences.map(a => absSeason(a.start)).filter(Boolean))].sort().reverse();
  const shown = absences.filter(a => (!fPlayer || pkey(a) === fPlayer) && (!fKind || a.kind === fKind) && (!fSeason || absSeason(a.start) === fSeason));
  const nL = shown.filter(a => a.kind === "lesao").length, nA = shown.filter(a => a.kind === "ausencia").length;
  return (
    <div data-testid="absence-archive">
      {absences.length > 0 && <>
        <FSel value={fPlayer} onChange={e=>setFPlayer(e.target.value)}><option value="">Todos os jogadores</option>{players.map(([k, n]) => <option key={k} value={k}>{n}</option>)}</FSel>
        <div style={{ display:"flex", gap:8 }}>
          <div style={{ flex:1 }}><FSel value={fKind} onChange={e=>setFKind(e.target.value)}><option value="">Todos os tipos</option><option value="lesao">Lesões</option><option value="ausencia">Ausências</option></FSel></div>
          <div style={{ flex:1 }}><FSel value={fSeason} onChange={e=>setFSeason(e.target.value)}><option value="">Todas as épocas</option>{seasons.map(s => <option key={s} value={s}>{s}</option>)}</FSel></div>
        </div>
        <p style={{ margin:"-4px 0 10px", fontSize:12, color:T.sub }}>{plural(shown.length, "registo", "registos")} · {plural(nL, "lesão", "lesões")} · {plural(nA, "ausência", "ausências")}</p>
      </>}
      <AbsenceCards records={shown} showName color={team.color} onUpdate={onUpdate} onClose={onClose} onDelete={onDelete} emptyText={absences.length ? "Nenhum registo com estes filtros" : "Ainda sem lesões nem ausências registadas"} />
    </div>
  );
};

const DeleteTeamModal = ({ team, token, onDelete, onClose }) => {
  const [counts, setCounts] = useState(null); // null = a carregar; valor null = indisponível
  const [tick, setTick] = useState(0);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    let alive = true;
    if (tick > 0) setCounts(null);
    const n = tbl => api.get(`${tbl}?team_id=eq.${team.id}&select=id`, token).then(r => r.length).catch(() => null);
    const abs = api.get(`member_absences?team_id=eq.${team.id}&select=kind`, token).then(r => [r.filter(x => x.kind === "lesao").length, r.filter(x => x.kind === "ausencia").length]).catch(() => [null, null]);
    Promise.all([n("team_members"), n("fines"), n("trainings"), n("cards"), n("expenses"), abs]).then(([a, b, c, d, e, [l, au]]) => { if (alive) setCounts([a, b, c, d, e, l, au]); });
    return () => { alive = false; };
  }, [team.id, tick]);
  const countsFailed = counts !== null && counts.some(x => x === null);
  const v = i => counts === null ? "…" : (counts[i] === null ? "—" : counts[i]);
  // "1 membro", "0 membros"; enquanto carrega ("…") ou se falhar ("—") fica no plural
  const q = (i, one, many) => `${v(i)} ${v(i) === 1 ? one : many}`;
  const match = text === team.name;
  const go = async () => {
    if (!match || busy) return;
    setBusy(true); setErr("");
    try { await onDelete(); }
    catch(e) { setErr(errPt(e, "Erro ao apagar a equipa")); setBusy(false); }
  };
  return (
    <Sheet title={`Apagar ${team.name}?`} onClose={busy ? ()=>{} : onClose}>
      <div style={{ background:"#FFF5F5", border:"1px solid #FFD0D0", borderRadius:12, padding:"12px 14px", marginBottom:14 }}>
        <p style={{ margin:"0 0 4px", fontSize:13, color:T.sub }}>Perde-se tudo:</p>
        <p style={{ margin:0, fontSize:15, fontWeight:700, color:T.brand }}>{q(0,"membro","membros")} · {q(1,"multa","multas")} · {q(2,"treino","treinos")} · {q(3,"cartão","cartões")} · {q(4,"despesa","despesas")} · {q(5,"lesão","lesões")} · {q(6,"ausência","ausências")}</p>
      </div>
      {countsFailed && <LoadWarn id="contagens" onRetry={()=>setTick(t=>t+1)}>Não foi possível contar tudo o que se perde (—).</LoadWarn>}
      <p style={{ margin:"0 0 12px", fontSize:14 }}>Isto não tem volta. Escreve o nome da equipa para confirmar.</p>
      <FI value={text} onChange={e=>setText(e.target.value)} placeholder={team.name} autoCapitalize="off" autoCorrect="off" spellCheck={false} />
      {err && <p style={{ margin:"0 0 12px", fontSize:13, fontWeight:600, color:T.brand }}>{err}</p>}
      <PrimaryBtn onClick={onClose} disabled={busy} color={team.color}>Cancelar</PrimaryBtn>
      <button onClick={go} disabled={!match || busy} style={{ display:"block", width:"100%", marginTop:12, padding:"10px", background:"transparent", border:"none", color:T.brand, fontSize:13, fontWeight:600, cursor:match&&!busy?"pointer":"default", opacity:match&&!busy?1:0.35, fontFamily:"inherit" }}>
        {busy ? "A apagar…" : "Apagar definitivamente"}
      </button>
    </Sheet>
  );
};

// Interruptor "Indisponível". Ligar abre uma caixa (tipo, ícone, nota obrigatória) e o interruptor só liga depois de a escrita ser confirmada;
// desligar pede confirmação. Todas as escritas passam por onOpen/onClose/onUpdate/onLegacy (funções absence_* na base de dados).
const UnavailableControl = ({ m, record, color, onOpen, onClose, onUpdate, onLegacy }) => {
  const [box, setBox] = useState(null); // "open" | "close" | "edit" | "legacy-close" | "legacy-fill"
  const on = m.unavailable;
  const flip = () => {
    if (box) return;
    if (!on) setBox("open");
    else setBox(record ? "close" : "legacy-close");
  };
  const done = () => setBox(null);
  const cur = record || { kind:"lesao", emoji:m.unavailableEmoji, note:m.unavailableNote, start:m.unavailableSince };
  return (
    <div style={{ marginBottom:12 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontSize:14, fontWeight:600 }}>{m.unavailableEmoji||"🤕"} Indisponível</span>
        <button onClick={flip} role="switch" aria-checked={on} aria-label="Indisponível" style={{ width:46, height:26, borderRadius:13, border:"none", background:on?T.green:T.border, position:"relative", cursor:"pointer", padding:0 }}>
          <span style={{ position:"absolute", top:3, left:on?23:3, width:20, height:20, borderRadius:10, background:"#fff", transition:"left 0.15s" }} />
        </button>
      </div>
      {on && (
        <div style={{ marginTop:8, display:"flex", alignItems:"center", gap:8 }}>
          <p style={{ margin:0, flex:1, fontSize:12, color:T.sub }}>{m.unavailableEmoji||"🤕"} {m.unavailableNote || "Sem nota — escreve uma para poder desligar"}</p>
          <button onClick={()=>setBox(record ? "edit" : "legacy-fill")} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:8, padding:"4px 8px", fontSize:12, color:T.sub, cursor:"pointer", fontFamily:"inherit", flexShrink:0 }}>✏️ Alterar</button>
        </div>
      )}
      {box === "open" && <AbsenceForm title={`${m.name} está indisponível?`} initial={{ kind:"lesao", emoji:"🤕", note:"", start:todayLocal() }} color={color} onSave={v => onOpen(m.id, v)} onClose={done} />}
      {box === "edit" && record && <AbsenceForm title={`Alterar ${(ABS_KINDS[cur.kind]||ABS_KINDS.lesao).one}`} initial={cur} color={color} onSave={v => onUpdate(record, v)} onClose={done} />}
      {box === "legacy-fill" && <AbsenceForm title="Alterar indisponibilidade" initial={cur} color={color} onSave={v => onLegacy(m, v, false)} onClose={done} />}
      {box === "legacy-close" && <AbsenceForm title={`Fechar a indisponibilidade de ${m.name}`} initial={cur} saveLabel="Guardar e fechar" color={color} onSave={v => onLegacy(m, v, true)} onClose={done} />}
      {box === "close" && record && <CloseAbsenceSheet name={m.name} kind={record.kind} onConfirm={() => onClose(record)} onCancel={done} />}
    </div>
  );
};

const ManageTeamScreen = ({ team, members, fineTypes, token, myUserId, onBack, onAddMember, onToggleRole, onRemoveMember, onEditMember, onRegenerateCode, onDeleteTeam, onEditTeam, absences, absHandlers, setFineTypes, onClaimsChanged }) => {
  const tm = members.filter(m=>m.teamId===team.id);
  const [showDelete, setShowDelete] = useState(false);
  const [ftWarn, setFtWarn] = useState(false);
  const [ftTick, setFtTick] = useState(0);
  // ao abrir Gerir, volta a pedir os tipos de multa (o estado pode estar desatualizado); se falhar, fica a lista atual e avisa
  useEffect(() => {
    if (!setFineTypes || !token || RO.on) return;
    let alive = true;
    api.get(`fine_types?team_id=eq.${team.id}&order=amount.asc`, token).then(rows => {
      if (!alive) return;
      if (Array.isArray(rows)) { setFineTypes(p => [...p.filter(x => x.teamId !== team.id), ...rows.map(aFineType)]); setFtWarn(false); }
      else setFtWarn(true);
    }).catch(() => { if (alive) setFtWarn(true); });
    return () => { alive = false; };
  }, [team.id, ftTick]);
  const isCreator = team.createdBy === myUserId;
  const myRoleHere = (tm.find(x=>x.userId===myUserId)||{}).role;
  // só admin: a política de escrita de team_members é is_admin_of(team_id)
  const canMarkUnavailable = !!absHandlers && myRoleHere==="admin";
  const canEditTeam = tm.some(m=>m.userId===myUserId&&m.role==="admin") || team.createdBy===myUserId;
  const admins = tm.filter(m=>m.role==="admin");
  // a regra team_members_role_check da base de dados só aceita 'admin' e 'player':
  // qualquer outro papel (desconhecido) fica em "Jogadores" para nunca desaparecer
  // admins ficam só em Administradores (mesmo que a posição seja Treinador); os outros dividem-se em equipa técnica e jogadores
  const nonAdmin = tm.filter(m=>m.role!=="admin");
  const staff = sortMembers(nonAdmin.filter(m => isStaffPosition(m.position)));
  const players = sortMembers(nonAdmin.filter(m => !isStaffPosition(m.position)));
  const groups = [
    { role:"admin",  title:admins.length===1?"Administrador":"Administradores", color:"#1D3557", list:admins },
    { role:"staff",  title:"Equipa técnica",                                   color:"#2E7D32", list:staff },
    { role:"player", title:players.length===1?"Jogador":"Jogadores",           color:T.sub,     list:players },
  ].filter(g => g.list.length > 0);
  const [roleErr, setRoleErr] = useState(null); // { id, msg }
  const changeRole = async (m, r) => {
    setRoleErr(null);
    try { await onToggleRole(m.id, r); }
    catch(e) { setRoleErr({ id:m.id, msg:errPt(e, "Erro ao alterar o papel") }); }
  };
  const [confirmRemove, setConfirmRemove] = useState(null);
  const [removeBusy, setRemoveBusy] = useState(false);
  const [removeErr, setRemoveErr] = useState("");
  const closeRemove = () => { setConfirmRemove(null); setRemoveErr(""); };
  const doRemove = async () => {
    if (removeBusy) return;
    setRemoveBusy(true); setRemoveErr("");
    try { await onRemoveMember(confirmRemove.id); closeRemove(); }
    catch(e) { setRemoveErr(errPt(e, "Erro ao remover")); }
    setRemoveBusy(false);
  };
  const [editingMember, setEditingMember] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyCode = () => { setCopied(true); setTimeout(()=>setCopied(false), 2000); };

  const [expandedMember, setExpandedMember] = useState(null);

  const Row = ({ m }) => {
    const expanded = expandedMember === m.id;
    // linha por baixo do nome: "Posição · Indisponível desde DD/MM"; sem nada para mostrar, a linha não existe
    const subLine = [realPosition(m.position), m.unavailable ? `Indisponível${fmtDM(m.unavailableSince) ? ` desde ${fmtDM(m.unavailableSince)}` : ""}` : ""].filter(Boolean).join(" · ");
    return (
      <div style={{ background:T.card, borderRadius:14, marginBottom:8, overflow:"hidden" }}>
        {/* Collapsed header - always visible */}
        <div onClick={() => setExpandedMember(expanded ? null : m.id)}
          style={{ padding:"13px 14px", display:"flex", alignItems:"center", gap:12, cursor:"pointer" }}>
          <Avatar initials={m.initials} color={team.color} size={44} photo={m.avatarUrl} name={m.name} />
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", gap:6, alignItems:"center", flexWrap:"wrap" }}>
              <p style={{ margin:0, fontWeight:700, fontSize:15 }}>{m.name}{m.unavailable && ` ${m.unavailableEmoji||"🤕"}`}</p>
              {m.userId===myUserId && <Badge label="Tu" color={team.color} />}
              <RoleBadgeLight role={m.role} />
            </div>
            {subLine && <p style={{ margin:0, fontSize:13, color:T.sub }}>{subLine}</p>}
          </div>
          <span style={{ width:44, height:44, margin:"-6px -8px -6px 0", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", color:T.sub, fontSize:18 }}>
            <span style={{ transition:"transform 0.2s", display:"inline-block", transform:expanded?"rotate(180deg)":"rotate(0deg)" }}>⌄</span>
          </span>
        </div>

        {/* Expanded details + actions */}
        {expanded && (
          <div style={{ borderTop:`1px solid ${T.border}`, padding:"12px 14px" }}>
            <div style={{ marginBottom:12, display:"flex", flexDirection:"column", gap:6 }}>
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
              {!m.phone && !m.birthday && (
                <p style={{ margin:0, fontSize:13, color:T.sub, fontStyle:"italic" }}>Sem informações adicionais</p>
              )}
            </div>
            {canMarkUnavailable && <UnavailableControl m={m} record={(absences||[]).find(a => a.memberId===m.id && !a.end)} color={team.color} onOpen={absHandlers.open} onClose={absHandlers.close} onUpdate={absHandlers.update} onLegacy={absHandlers.legacy} />}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <button onClick={() => { setEditingMember(m); setExpandedMember(null); }} style={{ flex:1, padding:"10px", borderRadius:10, border:`1.5px solid ${team.color}`, background:`${team.color}12`, color:team.color, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                ✏️ Editar
              </button>
              {m.userId !== myUserId && (
                <>
                  <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
                    {[["admin","🛡 Admin","#1D3557"],["player","👤 Jogador","#6B6B72"]].map(([r,l,c]) => (
                      <button key={r} onClick={() => m.role!==r && changeRole(m, r)} style={{ padding:"7px 10px", borderRadius:10, border:`1.5px solid ${m.role===r?solidForWhite(team.color):T.border}`, background:m.role===r?solidForWhite(team.color):"transparent", color:m.role===r?"#fff":T.sub, fontSize:12, fontWeight:m.role===r?800:700, cursor:m.role===r?"default":"pointer", fontFamily:"inherit" }}>
                        {l}
                      </button>
                    ))}
                  </div>
                  {roleErr && roleErr.id===m.id && <p style={{ width:"100%", margin:"2px 0 0", fontSize:12, fontWeight:600, color:T.brand }}>{roleErr.msg}</p>}
                  <button onClick={() => setConfirmRemove(m)} style={{ width:"100%", padding:"9px", borderRadius:10, border:`1.5px solid ${T.brand}`, background:"transparent", color:T.brand, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", marginTop:18 }}>
                    🗑 Remover membro
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
        <button onClick={onBack} style={{ minHeight:44, background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"7px 14px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit", marginBottom:12 }}>← Voltar</button>
        <h2 style={{ margin:0, fontSize:24, fontWeight:900 }}>Gerir {team.name}</h2>
        <p style={{ margin:"4px 0 0", opacity:0.7, fontSize:14 }}>{plural(tm.length,"membro","membros")} · {admins.length} admin{admins.length!==1?"s":""}</p>
      </div>

      <div style={{ padding:"16px 16px 100px" }}>
        {canEditTeam && onEditTeam && <TeamDataSection team={team} onSave={onEditTeam} />}

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
            <a href={`https://wa.me/?text=${encodeURIComponent(`🟥 *Multeam* — Junta-te à equipa *${team.name}*!\n\n1. Abre o link: ${APP_URL}/?invite=${team.inviteCode}\n2. Cria conta\n3. O código entra automaticamente!\n\nCódigo manual: *${team.inviteCode}*`)}`}
               target="_blank" rel="noopener" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"11px", minHeight:44, borderRadius:12, background:"#0E7A3E", color:"#fff", fontWeight:700, fontSize:14, textDecoration:"none" }}>
              📱 WhatsApp
            </a>
            <a href={`mailto:?subject=Convite para ${team.name}&body=${encodeURIComponent(`Olá!\n\nEstou a convidar-te para a equipa ${team.name} no Multeam.\n\nAbre este link para entrares diretamente:\n${APP_URL}/?invite=${team.inviteCode}\n\nOu entra no app e usa o código: ${team.inviteCode}\n\nAté já!`)}`}
               style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"11px", minHeight:44, borderRadius:12, background:T.navy, color:"#fff", fontWeight:700, fontSize:14, textDecoration:"none" }}>
              ✉️ Email
            </a>
          </div>
        </div>

        {/* Role hierarchy info */}
        {!RO.on && <ClaimsAdminSection team={team} members={members} token={token} onChanged={onClaimsChanged} />}

        <div style={{ background:`${T.yellow}15`, borderRadius:14, padding:"12px 14px", marginBottom:16, display:"flex", gap:10, alignItems:"flex-start" }}>
          <span style={{ fontSize:20 }}>👑</span>
          <div>
            <p style={{ margin:0, fontWeight:700, fontSize:14 }}>Administradores têm nível máximo</p>
            <p style={{ margin:"2px 0 0", fontSize:13, color:T.sub }}>Podem gerir membros, atribuir multas, despesas e treinos. Jogadores só veem e confirmam presenças.</p>
          </div>
        </div>

        <button onClick={onAddMember} style={{ width:"100%", background:team.color, color:"#fff", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:800, cursor:"pointer", marginBottom:20, fontFamily:"inherit" }}>➕ Adicionar membro</button>

        {groups.map((g, gi) => {
          const unav = g.list.filter(m => m.unavailable).length;
          return (
            <React.Fragment key={g.role}>
              <p style={{ margin:gi===0?"0 0 8px":"16px 0 8px", fontSize:11, fontWeight:700, color:g.color, textTransform:"uppercase", letterSpacing:0.5, display:"flex", alignItems:"center", gap:5 }}>
                {g.role==="admin" ? <ShieldIcon size={11} color={g.color} /> : <PersonIcon size={11} color={g.color} />} {g.title} ({g.list.length}){unav>0 && ` · ${unav} ${unav===1?"indisponível":"indisponíveis"}`}
              </p>
              {g.list.map(m=><React.Fragment key={m.id}>{Row({ m })}</React.Fragment>)}
            </React.Fragment>
          );
        })}

        {/* Fine Types Management */}
        <Sec label="Tipos de multa" />
        {ftWarn && !RO.on && <LoadWarn id="tipos-multa" onRetry={()=>{ setFtWarn(false); setFtTick(t=>t+1); }}>Não foi possível atualizar os tipos de multa. A lista pode estar desatualizada.</LoadWarn>}
        <FineTypesManager team={team} fineTypes={fineTypes} onAdded={ft => setFineTypes(p=>[...p, aFineType(ft)])} onDeleted={id => setFineTypes(p=>p.filter(x=>x.id!==id))} onUpdated={(id, data) => setFineTypes(p=>p.map(x=>x.id===id?{...x,...(typeof data==="object"?data:{emoji:data})}:x))} token={token} />

        {/* Arquivo de lesões e ausências — só admin (a política da tabela só deixa admins ler e escrever) */}
        {canMarkUnavailable && <>
          <Sec label="Arquivo de lesões e ausências" />
          <AbsenceArchive team={team} absences={absences} onUpdate={absHandlers.update} onClose={absHandlers.close} onDelete={absHandlers.del} />
        </>}

        {/* Danger zone — só o criador (política DELETE: created_by = auth.uid()) */}
        {isCreator && <div style={{ marginTop:32, padding:"16px", background:"#FFF5F5", borderRadius:14, border:"1px solid #FFD0D0" }}>
          <p style={{ margin:"0 0 4px", fontWeight:700, fontSize:14, color:T.brand }}>⚠️ Zona de perigo</p>
          <p style={{ margin:"0 0 12px", fontSize:13, color:T.sub }}>Apagar a equipa remove todos os dados permanentemente.</p>
          <button onClick={()=>setShowDelete(true)} style={{ width:"100%", padding:"13px", borderRadius:12, border:`1.5px solid ${T.brand}`, background:"transparent", color:T.brand, fontWeight:700, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>
            🗑️ Apagar equipa
          </button>
        </div>}
      </div>

      {showDelete && isCreator && <DeleteTeamModal team={team} token={token} onDelete={onDeleteTeam} onClose={()=>setShowDelete(false)} />}

      {/* Confirm remove dialog */}
      {confirmRemove && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:300, padding:20 }}>
          <div style={{ background:T.card, borderRadius:20, padding:"24px", width:"100%", maxWidth:360 }}>
            <p style={{ fontSize:36, textAlign:"center", margin:"0 0 10px" }}>⚠️</p>
            <p style={{ fontWeight:800, fontSize:18, textAlign:"center", margin:"0 0 8px" }}>Remover {confirmRemove.name}?</p>
            <p style={{ color:T.sub, fontSize:14, textAlign:"center", margin:"0 0 24px" }}>Este jogador perderá o acesso à equipa. Podes adicioná-lo novamente com um novo convite.</p>
            {removeErr && <p style={{ margin:"-12px 0 16px", fontSize:13, fontWeight:600, color:T.brand, textAlign:"center" }}>{removeErr}</p>}
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={closeRemove} disabled={removeBusy} style={{ flex:1, padding:"13px", borderRadius:12, border:`1.5px solid ${T.border}`, background:"transparent", fontWeight:700, cursor:"pointer", fontFamily:"inherit", fontSize:15 }}>Cancelar</button>
              <button onClick={doRemove} disabled={removeBusy} style={{ flex:1, padding:"13px", borderRadius:12, border:"none", background:T.brand, color:"#fff", fontWeight:800, cursor:removeBusy?"default":"pointer", opacity:removeBusy?0.6:1, fontFamily:"inherit", fontSize:15 }}>{removeBusy?"A remover…":"Remover"}</button>
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

const MemberDetailScreen = ({ member, team, fines, onBack, onTogglePaid, onDeleteFine, isAdmin, absences, absHandlers, readOnly }) => {
  const [ptab, setPtab] = useState("multas");
  const [adding, setAdding] = useState(false);
  const showHist = (isAdmin && !!absHandlers) || !!readOnly; // modo leitura (super admin): histórico visível, sem ações
  const mine = (absences || []).filter(a => a.memberId === member.id);
  const pf = fines.filter(f=>f.teamId===team.id&&f.memberId===member.id).sort(byDayDesc);
  const unpaid = pf.filter(f=>!f.paid).reduce((s,f)=>s+f.amount,0);
  const paid = pf.filter(f=>f.paid).reduce((s,f)=>s+f.amount,0);
  return (
    <div style={{ background:T.bg, minHeight:"100vh" }}>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}bb)`, padding:"16px 16px 24px", color:"#fff", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", marginBottom:20 }}>
          <button onClick={onBack} style={{ minHeight:44, background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", borderRadius:10, padding:"6px 12px", fontSize:14, cursor:"pointer", fontWeight:600, fontFamily:"inherit" }}>← Voltar</button>
        </div>
        <Avatar initials={member.initials} color="rgba(255,255,255,0.2)" size={64} photo={member.avatarUrl} name={member.name} />
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
        {member.unavailable && <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:"10px 12px", marginBottom:14, fontSize:13, color:T.sub }}>{member.unavailableEmoji||"🤕"} {unavailText(member)}</div>}
        {showHist && (
          <div role="tablist" style={{ display:"flex", gap:8, marginBottom:6 }}>
            {[["multas","Multas"],["historico","Histórico"]].map(([k, l]) => (
              <button key={k} role="tab" aria-selected={ptab===k} onClick={()=>setPtab(k)} style={{ flex:1, padding:"9px", borderRadius:10, border:`1.5px solid ${ptab===k?team.color:T.border}`, background:ptab===k?`${team.color}15`:"transparent", color:ptab===k?team.color:T.sub, fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{l}</button>
            ))}
          </div>
        )}
        {showHist && ptab==="historico" && (
          <div data-testid="member-history">
            <Sec label="Histórico de lesões e ausências" />
            {absences === null
              ? <p style={{ color:T.brand, fontSize:13 }}>Não foi possível carregar o histórico. Puxa para atualizar.</p>
              : <>
                  <p style={{ margin:"0 0 10px", fontSize:12, color:T.sub }}>{plural(mine.length, "registo", "registos")} · {plural(mine.filter(a=>a.kind==="lesao").length, "lesão", "lesões")} · {plural(mine.filter(a=>a.kind==="ausencia").length, "ausência", "ausências")}</p>
                  <AbsenceCards records={mine} color={team.color} readOnly={readOnly} onUpdate={absHandlers && absHandlers.update} onClose={absHandlers && absHandlers.close} onDelete={absHandlers && absHandlers.del} emptyText="Sem lesões nem ausências registadas" />
                  {!readOnly && (!member.unavailable
                    ? <button onClick={()=>setAdding(true)} style={{ width:"100%", padding:"11px", borderRadius:10, border:`1.5px dashed ${T.border}`, background:"transparent", color:T.sub, fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>+ Adicionar registo passado</button>
                    : <p style={{ fontSize:12, color:T.sub, textAlign:"center" }}>Para adicionar um registo passado, fecha primeiro a indisponibilidade atual.</p>)}
                  {adding && <AbsenceForm title="Registo passado" initial={{ kind:"lesao", emoji:"🤕", note:"", start:todayLocal(), end:todayLocal() }} withEnd color={team.color} onSave={v => absHandlers.addPast(member.id, v)} onClose={()=>setAdding(false)} />}
                </>}
          </div>
        )}
        {(!showHist || ptab==="multas") && <>
        <Sec label="Histórico de multas" />
        {pf.length===0 && <p style={{ textAlign:"center", color:T.sub, padding:32 }}>Sem multas 🎉</p>}
        {pf.map(f => (
          <div key={f.id} style={{ background:T.card, borderRadius:14, padding:"13px 14px", marginBottom:8, display:"flex", alignItems:"center", gap:12, borderLeft:`3px solid ${f.paid?T.green:T.brand}` }}>
            <FineIcon icon={f.emoji} size={24} />
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontSize:14, fontWeight:600 }}>{f.reason}</p>
              <p style={{ margin:0, fontSize:12, color:T.sub }}>{fmtDay(f.date)}</p>
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
        </>}
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
    catch(e) { setErr(errPt(e)); }
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
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, ${T.navy} 0%, #0a1628 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"68px 28px 28px", position:"relative" }}>
      <a href="/sobre/" target="_blank" rel="noopener" style={{ position:"absolute", top:"calc(env(safe-area-inset-top, 0px) + 12px)", right:14, display:"flex", alignItems:"center", justifyContent:"center", gap:6, minHeight:44, padding:"0 16px", borderRadius:22, border:"1.5px solid rgba(255,255,255,0.6)", background:"rgba(255,255,255,0.12)", color:"#fff", fontSize:14, fontWeight:700, textDecoration:"none", fontFamily:"inherit" }}>ⓘ Sobre a app</a>
      <div style={{ marginBottom:36, textAlign:"center" }}>
        <div style={{ width:80, height:80, borderRadius:22, margin:"0 auto 18px", background:"#12121f", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 32px rgba(230,57,70,0.5)", position:"relative", overflow:"visible" }}>
          <svg width="60" height="72" viewBox="0 0 60 72" style={{ position:"absolute" }}>
            <rect x="18" y="4" width="36" height="48" rx="5" fill="#FFCC00" transform="rotate(12 36 28)"/>
            <rect x="6" y="6" width="36" height="48" rx="5" fill="#E63946"/>
          </svg>
        </div>
        <h1 style={{ color:"#fff", fontSize:34, fontWeight:900, margin:0, letterSpacing:-1.5 }}>Multeam</h1>
        <p style={{ color:"rgba(255,255,255,0.75)", margin:"8px auto 0", fontSize:15, lineHeight:1.35, maxWidth:280 }}>Multas, presenças e caixa da equipa. Grátis.</p>
      </div>
      <div style={{ width:"100%", maxWidth:340 }}>
        <div style={{ display:"flex", background:"rgba(255,255,255,0.1)", borderRadius:14, padding:4, marginBottom:20 }}>
          {[["login","Entrar"],["register","Criar conta"]].map(([m,l])=>(
            <button key={m} onClick={()=>setMode(m)} style={{ flex:1, padding:"10px", minHeight:44, borderRadius:10, border:"none", background:mode===m?"#fff":"transparent", color:mode===m?T.navy:"rgba(255,255,255,0.6)", fontWeight:700, cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>{l}</button>
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
        {mode==="login" && <p onClick={async()=>{ if(!email){alert("Escreve o teu email primeiro");return;} await api.resetPassword(email); alert("Email de recuperação enviado para "+email);}} style={{ textAlign:"center", color:"rgba(255,255,255,0.7)", fontSize:13, marginTop:0, padding:"14px 0", cursor:"pointer", textDecoration:"underline" }}>Esqueceste a password?</p>}
        {mode==="login" && <p onClick={async()=>{ if(!email){alert("Mete o teu email primeiro");return;} await fetch(`${SB_URL}/auth/v1/recover`,{method:"POST",headers:{"apikey":SB_KEY,"Content-Type":"application/json"},body:JSON.stringify({email})}); alert("Email de recuperação enviado para "+email);}} style={{ textAlign:"center", color:"rgba(255,255,255,0.7)", fontSize:13, marginTop:0, padding:"14px 0", cursor:"pointer", textDecoration:"underline" }}>Esqueci a password</p>}
        <a href="/sobre/" target="_blank" rel="noopener" style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"100%", boxSizing:"border-box", minHeight:44, marginTop:16, padding:"10px 16px", borderRadius:14, border:"1.5px solid rgba(255,255,255,0.85)", background:"transparent", color:"#fff", fontSize:15, fontWeight:700, textDecoration:"none", fontFamily:"inherit" }}>Como funciona a Multeam</a>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", marginTop:8, color:"rgba(255,255,255,0.7)", fontSize:13 }}>
          <span>Precisas de ajuda?</span>
          <a href="mailto:support@multeam.ch?subject=Multeam%20-%20Login" style={{ display:"inline-flex", alignItems:"center", minHeight:44, padding:"0 8px", color:"rgba(255,255,255,0.85)", fontWeight:700, textDecoration:"underline", fontFamily:"inherit" }}>Contacto</a>
        </div>
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
// ── CARTÕES ───────────────────────────────────────────────────
const plur = (n, one, many) => `${n} ${n===1 ? one : many}`;

const KindPicker = ({ value, onChange }) => (
  <div style={{ display:"flex", gap:10, marginBottom:14 }}>
    {[["amarelo","🟨 Amarelo",T.yellow,"#1D1D1F"],["vermelho","🟥 Vermelho",T.brand,"#fff"]].map(([k,l,bg,fg])=>(
      <button key={k} onClick={()=>onChange(k)} style={{ flex:1, padding:"16px 8px", borderRadius:14, border:value===k?`3px solid ${T.navy}`:`2px solid ${T.border}`, background:value===k?bg:T.inputBg, color:value===k?fg:T.sub, fontSize:16, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>{l}</button>
    ))}
  </div>
);

const AddCardModal = ({ team, members, cards, onAdd, onClose }) => {
  const tm = sortMembers(members.filter(m => m.teamId===team.id));
  const [mid, setMid] = useState("");
  const [kind, setKind] = useState("amarelo");
  const [date, setDate] = useState(todayLocal());
  const [opponent, setOpponent] = useState("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const sel = tm.find(m => String(m.id)===String(mid));
  const y = mid ? cardCount(cards, team.id, mid).yellows : 0;
  const after = y + 1;
  const consequence = !sel ? null
    : kind==="vermelho" ? { t:"Cartão vermelho. O castigo é dado pela associação.", color:T.brand, strong:false }
    : after>=5 ? { t:"Fica SUSPENSO por 1 jogo.", color:"#B00020", strong:true }
    : after===4 ? { t:"Fica com 4 amarelos — a 1 da suspensão.", color:T.brand, strong:true }
    : { t:`Fica com ${plur(after,"amarelo","amarelos")}.`, color:T.sub, strong:false };
  const save = async () => {
    if (!mid || !date || saving) return;
    setSaving(true); setErr("");
    try { await onAdd({ teamId:team.id, memberId:mid, kind, date, opponent:opponent.trim(), note:note.trim() }); onClose(); }
    catch(e) { setErr(errPt(e)); setSaving(false); }
  };
  return (
    <Sheet onClose={onClose} title="Lançar cartão">
      {sel && (
        <div style={{ display:"flex", alignItems:"center", gap:12, background:`${T.navy}12`, border:`2px solid ${T.navy}`, borderRadius:14, padding:"10px 12px", marginBottom:14 }}>
          <Avatar initials={sel.initials} photo={sel.avatarUrl} color={team.color} size={44} name={sel.name} />
          <div>
            <p style={{ margin:0, fontSize:11, fontWeight:700, color:T.sub, textTransform:"uppercase", letterSpacing:0.5 }}>Cartão para</p>
            <p style={{ margin:0, fontSize:17, fontWeight:900 }}>{sel.name}</p>
          </div>
        </div>
      )}
      <FL>{sel ? "Mudar jogador" : "Jogador"}</FL>
      <div style={{ maxHeight:200, overflowY:"auto", marginBottom:14, border:`1.5px solid ${T.border}`, borderRadius:12 }}>
        {tm.map(m => (
          <div key={m.id} onClick={()=>setMid(m.id)} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 12px", cursor:"pointer", background:String(mid)===String(m.id)?`${T.navy}18`:"transparent", borderBottom:`1px solid ${T.border}` }}>
            <Avatar initials={m.initials} photo={m.avatarUrl} color={team.color} size={32} name={m.name} />
            <span style={{ flex:1, fontWeight:String(mid)===String(m.id)?800:600, fontSize:14 }}>{m.name}</span>
            {String(mid)===String(m.id) && <span style={{ color:T.navy, fontWeight:800 }}>✓</span>}
          </div>
        ))}
      </div>
      <FL>Tipo</FL>
      <KindPicker value={kind} onChange={setKind} />
      {consequence && (
        <p style={{ margin:"0 0 14px", padding:consequence.strong?"10px 12px":0, borderRadius:10, background:consequence.strong?consequence.color:"transparent", color:consequence.strong?"#fff":consequence.color, fontWeight:consequence.strong?800:600, fontSize:14 }}>{consequence.t}</p>
      )}
      <FL>Data do jogo</FL>
      <FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Adversário (opcional)</FL>
      <FI value={opponent} onChange={e=>setOpponent(e.target.value)} placeholder="Ex: Os Vizinhos FC" />
      <FL>Nota (opcional)</FL>
      <FI value={note} onChange={e=>setNote(e.target.value)} placeholder="Ex: protestos" />
      {err && <p style={{ color:T.brand, fontSize:13, margin:"0 0 8px" }}>{err}</p>}
      <PrimaryBtn onClick={save} disabled={!mid || !date || saving}>{saving ? "A guardar..." : `Lançar ${kind}`}</PrimaryBtn>
    </Sheet>
  );
};

const EditCardModal = ({ card, onSave, onClose }) => {
  const [kind, setKind] = useState(card.kind);
  const [date, setDate] = useState(card.date || todayLocal());
  const [opponent, setOpponent] = useState(card.opponent);
  const [note, setNote] = useState(card.note);
  const [saving, setSaving] = useState(false);
  const save = async () => {
    if (!date || saving) return;
    setSaving(true);
    const done = await onSave(card.id, { kind, date, opponent:opponent.trim(), note:note.trim() });
    if (done !== false) onClose(); // só fecha com a escrita confirmada
    else setSaving(false);
  };
  return (
    <Sheet onClose={onClose} title="Editar cartão">
      <FL>Tipo</FL>
      <KindPicker value={kind} onChange={setKind} />
      <FL>Data do jogo</FL>
      <FI type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <FL>Adversário (opcional)</FL>
      <FI value={opponent} onChange={e=>setOpponent(e.target.value)} />
      <FL>Nota (opcional)</FL>
      <FI value={note} onChange={e=>setNote(e.target.value)} />
      <PrimaryBtn onClick={save} disabled={!date || saving}>{saving ? "A guardar..." : "Guardar"}</PrimaryBtn>
    </Sheet>
  );
};

// Frase do estado de um jogador (nunca um número sozinho)
const cardSegments = r => {
  const hasConsumed = r.yellowsTotal > r.yellows;
  const segs = [];
  if (r.yellows >= 5) {
    segs.push({ t:"SUSPENDE 1 JOGO", color:"#B00020", bold:true });
  } else if (r.yellows === 4) {
    segs.push({ t:`4 amarelos${hasConsumed?" em vigor":""} · falta 1 para suspensão`, color:T.brand, bold:true });
  } else if (r.yellows > 0) {
    segs.push({ t:`${plur(r.yellows,"amarelo","amarelos")}${hasConsumed?" em vigor":""}`, color:T.text });
  } else if (hasConsumed) {
    segs.push({ t:"Sem amarelos em vigor", color:T.sub });
  } else if (r.reds === 0) {
    segs.push({ t:"Sem cartões", color:"#B0B0B8" });
  }
  if (hasConsumed) segs.push({ t:`${r.yellowsTotal} esta época`, color:T.sub });
  if (r.reds > 0) segs.push({ t:plur(r.reds,"vermelho","vermelhos"), color:T.brand, bold:true });
  return segs;
};

// Bloco recolhido dos cartões já cumpridos (estado local; fecha ao fechar a linha do jogador)
const CompletedCards = ({ count, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ marginTop:8, borderTop:`1px dashed ${T.border}` }}>
      <button onClick={()=>setShow(v=>!v)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", background:"transparent", border:"none", cursor:"pointer", padding:"10px 0 6px", fontFamily:"inherit" }}>
        <span style={{ fontSize:13, fontWeight:800, color:T.sub }}>Já cumpridos ({count})</span>
        <span style={{ fontSize:12, color:T.sub }}>{show?"▾":"▸"}</span>
      </button>
      {show && (
        <>
          <p style={{ margin:"0 0 4px", fontSize:11, fontWeight:700, color:T.sub }}>Contam para a época, não para a suspensão.</p>
          {children}
        </>
      )}
    </div>
  );
};

const CardsTab = ({ team, cards, members, canManage, readOnly, onAddCard, onEditCard, onDeleteCard, onServeSuspension }) => {
  const [open, setOpen] = useState(null);
  const [showNone, setShowNone] = useState(false);
  const rows = members.filter(m => m.teamId===team.id).map(m => ({ m, ...cardCount(cards, team.id, m.id) }))
    .sort((a,b) => b.yellows - a.yellows || a.m.name.localeCompare(b.m.name, "pt"));
  const risk = rows.filter(r => r.yellows >= 4);
  const withCards = rows.filter(r => r.all.length > 0);
  const noCards = rows.filter(r => r.all.length === 0);

  const confirmDelete = (r, c) => {
    const nome = r.m.name;
    let efeito;
    if (c.kind==="vermelho") efeito = `Os vermelhos descem para ${r.reds-1}.`;
    else if (c.consumed) efeito = `Já estava cumprido: o contador em vigor não muda, mas desce para ${r.yellowsTotal-1} esta época.`;
    else efeito = `O contador desce para ${r.yellows-1}.`;
    if (window.confirm(`Apagar este ${c.kind} de ${nome}? ${efeito}`)) onDeleteCard(c.id);
  };

  const renderRow = r => {
    const st = cardStatus(r.yellows);
    const isOpen = open===r.m.id;
    const segs = cardSegments(r);
    const active = r.all.filter(c => !c.consumed).sort((a,b) => (b.date||'').localeCompare(a.date||'') || (b.id-a.id));
    const done = r.all.filter(c => c.consumed).sort((a,b) => (b.date||'').localeCompare(a.date||'') || (b.id-a.id));
    const histRow = c => (
      <div key={c.id} style={{ display:"flex", alignItems:"center", gap:8, padding:"7px 0", opacity:c.consumed?0.5:1, color:c.consumed?"#888":T.text }}>
        <span style={{ fontSize:20, filter:c.consumed?"grayscale(1)":"none" }}>{c.kind==="amarelo"?"🟨":"🟥"}</span>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ margin:0, fontSize:13, fontWeight:700 }}>{fmtDate(c.date)}{c.opponent ? ` · vs ${c.opponent}` : ""}</p>
          {c.note && <p style={{ margin:0, fontSize:12, color:T.sub }}>{c.note}</p>}
        </div>
        {canManage && <button onClick={()=>onEditCard(c)} style={{ padding:"3px 7px", borderRadius:7, border:`1.5px solid ${T.sub}`, background:"transparent", fontSize:12, cursor:"pointer" }}>✏️</button>}
        {canManage && <button onClick={()=>confirmDelete(r, c)} style={{ padding:"3px 7px", borderRadius:7, border:"1.5px solid #888", background:"transparent", fontSize:12, cursor:"pointer" }}>🗑️</button>}
      </div>
    );
    return (
      <div key={r.m.id} style={{ background:T.card, borderRadius:14, marginBottom:8, overflow:"hidden", borderLeft:`4px solid ${st?st.color:T.border}` }}>
        <div onClick={()=>setOpen(isOpen?null:r.m.id)} style={{ display:"flex", alignItems:"center", gap:10, padding:"11px 12px", cursor:"pointer" }}>
          <Avatar initials={r.m.initials} photo={r.m.avatarUrl} color={team.color} size={38} name={r.m.name} />
          <div style={{ flex:1, minWidth:0 }}>
            <p style={{ margin:"0 0 3px", fontWeight:800, fontSize:14, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{r.m.name}</p>
            <p style={{ margin:0, fontSize:13, lineHeight:1.4 }}>
              {segs.map((s,i) => <span key={i} style={{ color:s.color, fontWeight:s.bold?800:500 }}>{i>0 && <span style={{ color:T.sub, fontWeight:500 }}> · </span>}{s.t}</span>)}
            </p>
          </div>
          <span style={{ color:T.sub, fontSize:12 }}>{isOpen?"▼":"▶"}</span>
        </div>
        {r.yellows>=5 && canManage && (
          <div style={{ padding:"0 12px 10px" }}>
            <button onClick={()=>{ if(window.confirm(`${r.m.name} já cumpriu o jogo de castigo? O contador volta a 0. Os 5 amarelos continuam no histórico, marcados como cumpridos.`)) onServeSuspension(r.m.id); }} style={{ width:"100%", padding:"10px", borderRadius:10, border:"none", background:"#B00020", color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>Já cumpriu o castigo</button>
          </div>
        )}
        {isOpen && (
          <div style={{ borderTop:`1px solid ${T.border}`, padding:"8px 12px 10px" }}>
            {r.all.length===0 && <p style={{ margin:"6px 0", fontSize:13, color:T.sub }}>Sem cartões.</p>}
            {active.map(histRow)}
            {done.length>0 && <CompletedCards count={done.length}>{done.map(histRow)}</CompletedCards>}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding:"14px 16px 100px" }}>
      <h3 style={{ margin:"0 0 2px", fontSize:20, fontWeight:900 }}>Cartões</h3>
      <p style={{ margin:"0 0 14px", fontSize:12, color:T.sub }}>5 amarelos = 1 jogo de castigo. Os castigos são dados pela associação.</p>
      {risk.length>0 && (
        <div style={{ background:"#B00020", borderRadius:16, padding:"14px", marginBottom:16, color:"#fff" }}>
          <p style={{ margin:"0 0 10px", fontSize:13, fontWeight:900, letterSpacing:1 }}>🚨 EM RISCO</p>
          {risk.map(r => (
            <div key={r.m.id} style={{ display:"flex", alignItems:"center", gap:10, background:"rgba(255,255,255,0.15)", borderRadius:12, padding:"8px 10px", marginBottom:6 }}>
              <Avatar initials={r.m.initials} photo={r.m.avatarUrl} color={T.navy} size={36} name={r.m.name} />
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontWeight:800, fontSize:14 }}>{r.m.name}</p>
                <p style={{ margin:0, fontSize:12, opacity:0.95 }}>{r.yellows>=5 ? "Suspende 1 jogo" : "A 1 amarelo da suspensão"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {canManage && <button onClick={onAddCard} style={{ width:"100%", padding:"16px", borderRadius:14, border:"none", background:T.navy, color:"#fff", fontSize:16, fontWeight:800, cursor:"pointer", fontFamily:"inherit", marginBottom:14 }}>+ Lançar cartão</button>}
      {rows.length===0 && <p style={{ textAlign:"center", color:T.sub }}>Sem jogadores na equipa.</p>}
      {withCards.map(renderRow)}
      {noCards.length>0 && (
        <>
          <button onClick={()=>setShowNone(v=>!v)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", minHeight:44, background:"transparent", border:"none", cursor:"pointer", padding:"12px 0 8px", fontFamily:"inherit" }}>
            <span style={{ fontSize:13, fontWeight:800, color:T.sub }}>Sem cartões ({noCards.length})</span>
            <span style={{ fontSize:12, color:T.sub }}>{showNone?"▼":"▶"}</span>
          </button>
          {showNone && noCards.map(renderRow)}
        </>
      )}
      {!canManage && !readOnly && <p style={{ margin:"14px 0 0", fontSize:12, color:T.sub, textAlign:"center" }}>Só o admin pode lançar cartões.</p>}
    </div>
  );
};

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
  const [cards, setCards]       = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [absences, setAbsences] = useState([]); // null = não foi possível carregar (só admins leem a tabela)
  const [presences, setPresences] = useState({});
  const [loadWarn, setLoadWarn] = useState([]); // nomes do que não carregou em loadTeam
  const loadSeq = React.useRef(0); // numeração dos carregamentos da equipa (resposta antiga não sobrepõe a nova)
  const [pushIssue, setPushIssue] = useState(null); // { code, detail } quando as notificações não ficaram ativas neste dispositivo
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
  const [adminView, setAdminView] = useState(false); // modo super admin: só em memória
  const [adminErr, setAdminErr] = useState(null);     // { msg, id } quando um pedido do modo falha
  const [adminStart, setAdminStart] = useState(null);   // separador com que o painel abre ("teams" ao voltar do modo leitura)
  const [adminTeamsCache, setAdminTeamsCache] = useState(null); // lista de equipas do painel (get_all_teams_admin), para voltar sem esperar
  const roHistoryRef = React.useRef(false);  // há uma entrada de histórico do modo leitura (só em memória; o URL não muda)
  const ignorePopRef = React.useRef(0);      // popstate provocados por nós (ao consumir a entrada) que devem ser ignorados
  const exitRoRef = React.useRef(null);      // última versão de exitAdminView, para o botão "atrás" do navegador

  const team = teams.find(t=>t.id===teamId);
  // modo leitura só existe para o super admin (profile.isAppAdmin); aí ninguém é admin da equipa aberta
  const roMode = adminView && !!profile?.isAppAdmin;
  const isAdmin = !roMode && (members.some(m=>m.teamId===teamId&&m.userId===myUserId&&m.role==="admin") || team?.createdBy===myUserId);
  const myRole = members.find(m=>m.teamId===teamId&&m.userId===myUserId)?.role||"player";
  const canManageTrainings = !roMode && (isAdmin || myRole==="treinador" || myRole==="diretor");

  // Load team data from DB
  const loadTeam = async (tok, tid) => {
    const failedParts = []; // presenças/cartões/ausências que não carregaram (em vez de listas vazias em silêncio)
    const soft = (name, empty, perm) => e => { if (!(perm && /permission|policy|42501|not authorized|403/i.test(String(e && e.message)))) failedParts.push(name); return empty; };
    const [mRaw, ftData, fData, eData, tData, pData, cData, aData] = await Promise.all([
      api.get(`team_members?team_id=eq.${tid}&select=*`, tok),
      api.get(`fine_types?team_id=eq.${tid}&order=amount.asc`, tok),
      api.get(`fines?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`expenses?team_id=eq.${tid}&order=created_at.desc`, tok),
      api.get(`trainings?team_id=eq.${tid}&order=date.asc,time.asc`, tok),
      api.get(`presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.${tid}`, tok).catch(soft('presenças', [])),
      api.get(`cards?team_id=eq.${tid}&order=match_date.desc,created_at.desc`, tok).catch(soft('cartões', [])),
      api.get(`member_absences?team_id=eq.${tid}&order=start_date.desc,created_at.desc`, tok).catch(soft('ausências', null, true)),
    ]);
    // Fetch profiles via SECURITY DEFINER RPC (bypasses RLS - todos os membros podem ver)
    let profilesMap = {};
    let profFailed = false;
    try {
      const profs = await fetch(`${SB_URL}/rest/v1/rpc/get_team_profiles`, {
        method:'POST', headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`,'Content-Type':'application/json'},
        body: JSON.stringify({ p_team_id: tid })
      }).then(r=>{ if (!r.ok) { profFailed = true; return []; } return r.json(); }).catch(()=>{ profFailed = true; return []; });
      (Array.isArray(profs)?profs:[]).forEach(p => { profilesMap[p.id] = p; });
    } catch(e) { profFailed = true; console.warn('get_team_profiles failed:', e); }
    // Reserva: leitura direta de profiles, só quando a rpc falhou (pode falhar por RLS)
    if (profFailed && Object.keys(profilesMap).length === 0) {
      try {
        const uids = mRaw.map(m=>m.user_id).filter(Boolean);
        if (uids.length > 0) {
          const profs = await api.get(`profiles?id=in.(${uids.join(',')})`, tok).catch(()=>[]);
          (Array.isArray(profs)?profs:[]).forEach(p => { profilesMap[p.id] = p; });
        }
      } catch(e) { /* reserva também falhou: o aviso abaixo já cobre */ }
    }
    if (profFailed && mRaw.some(m => m.user_id)) failedParts.push('perfis');
    // Merge profiles into members
    const mData = mRaw.map(m => ({ ...m, profiles: profilesMap[m.user_id] || null }));
    // Build presences map {trainingId: {memberId: status}}
    const presMap = {};
    pData.forEach(p => {
      if (!presMap[p.training_id]) presMap[p.training_id] = {};
      presMap[p.training_id][p.member_id] = p.status;
    });
    return { members:mData.map(aMember), fineTypes:ftData.map(aFineType), fines:fData.map(aFine), expenses:eData.map(aExpense), trainings:tData.map(aTraining), presences:presMap, absences:Array.isArray(aData)?aData.map(aAbsence):null, cards:(Array.isArray(cData)?cData:[]).map(aCard), warn:failedParts };
  };

  // Modo super admin: UM pedido (rpc get_team_as_admin) convertido com os mesmos adaptadores do loadTeam
  const roErrPt = e => {
    const m = String(e && e.message ? e.message : "");
    if (/not authorized|permission denied|42501|Sem permissão|403/i.test(m)) return "Sem permissão";
    if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "Sem ligação à internet";
    if (/JWT|expired/i.test(m)) return "A sessão expirou: volta a entrar";
    if (/resposta inválida/i.test(m)) return "Resposta inválida do servidor";
    return errPt(e, "erro desconhecido");
  };
  const loadTeamAdmin = async (tok, tid) => {
    const raw = await rpcCall('get_team_as_admin', { p_team_id: tid }, tok);
    const r = Array.isArray(raw) && raw.length === 1 ? raw[0] : raw;
    const bad = () => new Error("resposta inválida");
    if (!r || typeof r !== "object" || Array.isArray(r)) throw bad();
    if (!r.team || typeof r.team !== "object" || String(r.team.id) !== String(tid)) throw bad();
    // essenciais (sem eles os ecrãs enganavam): membros, multas, caixa, treinos; os outros assumem lista vazia
    const lst = (k, essential) => { const v = r[k]; if (v == null) { if (essential) throw bad(); return []; } if (!Array.isArray(v)) throw bad(); return v; };
    const mRaw = lst("members", true), fData = lst("fines", true), eData = lst("expenses", true), tData = lst("trainings", true);
    const ftData = lst("fine_types"), pData = lst("presences"), cData = lst("cards"), aData = lst("absences"), profs = lst("profiles");
    const profilesMap = {}; profs.forEach(p => { if (p && p.id != null) profilesMap[p.id] = p; });
    const presMap = {};
    pData.forEach(p => { if (!presMap[p.training_id]) presMap[p.training_id] = {}; presMap[p.training_id][p.member_id] = p.status; });
    return { team:aTeam(r.team), members:mRaw.map(m => aMember({ ...m, profiles: profilesMap[m.user_id] || null })), fineTypes:ftData.map(aFineType), fines:fData.map(aFine), expenses:eData.map(aExpense), trainings:tData.map(aTraining), presences:presMap, absences:aData.map(aAbsence), cards:cData.map(aCard) };
  };
  const applyAdminData = td => {
    setTeams(p => p.some(x => x.id === td.team.id) ? p.map(x => x.id === td.team.id ? td.team : x) : [...p, td.team]);
    setMembers(td.members); setFineTypes(td.fineTypes); setFines(td.fines); setCards(td.cards);
    setExpenses(td.expenses); setTrainings(td.trainings); setPresences(td.presences); setAbsences(td.absences);
  };
  const loadAdmin = async id => {
    setLoading(true); setAdminErr(null);
    try { applyAdminData(await loadTeamAdmin(token, id)); }
    catch(e) { setAdminErr({ msg: roErrPt(e), id }); }
    setLoading(false);
  };
  // entrada: botão "Abrir equipa" do painel de super admin (list = resposta de get_all_teams_admin)
  const openAdminTeam = async (id, list) => {
    if (!profile?.isAppAdmin || !token) return;
    RO.on = true;
    setAdminTeamsCache(Array.isArray(list) ? list : null);
    // o botão "atrás" do telemóvel/navegador passa a ser "Voltar às equipas" (entrada sem mudar o URL)
    try { window.history.pushState({ multeamRO:true }, "", window.location.href); roHistoryRef.current = true; } catch(e) {}
    setAdminView(true); setSub(null); setModal(null); setTab("home");
    setTeams((Array.isArray(list) ? list : []).filter(t => t && t.id != null).map(aTeam));
    setTeamId(id);
    await loadAdmin(id);
  };
  // saída: volta ao painel e recarrega as equipas e os dados normais do utilizador
  // exitAdminView({ toTeams:true }) abre o painel na aba Equipas (Voltar às equipas); sem argumento = Sair (abre o painel como antes)
  const exitAdminView = async opts => {
    const toTeams = !!(opts && opts.toTeams);
    RO.on = false;
    if (roHistoryRef.current) {
      roHistoryRef.current = false;
      if (!(opts && opts.fromPop)) { ignorePopRef.current++; try { window.history.back(); } catch(e) { ignorePopRef.current--; } } // consome a entrada de histórico do modo
    }
    setAdminStart(toTeams ? "teams" : null);
    setAdminView(false); setAdminErr(null); setSub(null); setModal(null);
    setTeams([]); setMembers([]); setFineTypes([]); setFines([]); setCards([]); setExpenses([]); setTrainings([]); setPresences({}); setAbsences([]); setTeamId(null);
    setTab("appadmin");
    const ok = await initApp(token, myUserId);
    setTab("appadmin"); // o initApp pode ter posto o separador Geral (super admin sem equipas)
    if (ok === false) showToast("Não foi possível recarregar as tuas equipas", T.brand);
  };
  exitRoRef.current = exitAdminView;
  // botão "atrás" do telemóvel/navegador no modo leitura = Voltar às equipas (em vez de sair da app)
  useEffect(() => {
    const onPop = () => {
      if (LB.guard > 0) { LB.guard--; return; }          // popstate provocado por nós ao fechar a foto
      if (LB.n > 0) return;                              // foto ampliada aberta: o "atrás" só a fecha
      if (ignorePopRef.current > 0) { ignorePopRef.current--; return; }
      if (!roHistoryRef.current) return;
      roHistoryRef.current = false;
      if (exitRoRef.current) exitRoRef.current({ toTeams:true, fromPop:true });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Init app after login
  const initApp = async (tok, uid) => {
    setLoading(true);
    try {
      // Load profile (trigger creates it on signup, but add fallback)
      // O próprio perfil vem da rpc get_my_profile; se falhar ou vier vazia, lê-se profiles diretamente (reserva) para nunca bloquear a entrada
      let p = null;
      try { const mine = await rpcCall('get_my_profile', {}, tok); p = Array.isArray(mine) ? mine[0] : (mine && mine.id ? mine : null); }
      catch(e) { console.warn('get_my_profile failed:', e && e.message); }
      if (!p) { const profData = await api.get(`profiles?id=eq.${uid}`, tok); p = profData[0]; }

      // Fallback: create profile if doesn't exist yet
      if (!p) {
        try {
          const created = await api.post('profiles', { id: uid, name: 'Utilizador' }, tok);
          p = Array.isArray(created) ? created[0] : created;
        } catch(e) { console.warn('Profile creation fallback failed:', e); }
        if (!p) showToast("⚠️ Não foi possível carregar o teu perfil. Recarrega a app.", T.brand);
      }

      if (p) setProfile({ id:p.id, name:p.name||'', initials:mk(p.name||'U'), position:p.position||'', phone:p.phone||'', birthday:p.birthday||'', email:'', isAppAdmin: p.is_admin===true, avatarUrl: p.avatar_url||null });

      // Load teams via RPC (bypasses RLS, handles member + creator)
      // Carregar equipas via query direta (evita dependência do RPC get_my_teams)
      const membershipsR = await fetch(`${SB_URL}/rest/v1/team_members?user_id=eq.${uid}&select=team_id`, {
        headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`}
      });
      let adapted = [];
      if (!membershipsR.ok) throw new Error("Não foi possível carregar as tuas equipas.");
      if (membershipsR.ok) {
        const memberships = await membershipsR.json();
        const teamIds = (Array.isArray(memberships) ? memberships : []).map(m => m.team_id).filter(Boolean);
        if (teamIds.length > 0) {
          const teamsR = await fetch(`${SB_URL}/rest/v1/teams?id=in.(${teamIds.join(',')})&order=created_at.asc`, {
            headers:{'apikey':SB_KEY,'Authorization':`Bearer ${tok}`}
          });
          if (!teamsR.ok) throw new Error("Não foi possível carregar as tuas equipas.");
          if (teamsR.ok) {
            const teamsJson = await teamsR.json();
            adapted = (Array.isArray(teamsJson) ? teamsJson : []).map(aTeam);
          }
        }
      }
      setTeams(adapted);

      // isAppAdmin já é conhecido aqui (p.is_admin, lido acima): o super admin sem equipas não fica preso no ecrã "Sem equipas ainda"
      if (!adapted.length) { if (p && p.is_admin === true) setTab("geral"); setAppReady(true); setLoading(false); return true; }

      const first = adapted[0].id;
      setTeamId(first);
      const mySeq = ++loadSeq.current;
      const td = await loadTeam(tok, first);
      if (mySeq === loadSeq.current) {
        setMembers(td.members); setFineTypes(td.fineTypes);
        setFines(td.fines); setCards(td.cards); setExpenses(td.expenses);
        setTrainings(td.trainings); setPresences(td.presences); setAbsences(td.absences);
        setLoadWarn(td.warn || []);
      }
      setAppReady(true);
      return true;
    } catch(e) { setAuthError(`Erro: ${errPt(e)}`); return false; }
    finally { setLoading(false); }
  };

  // Switch team
  const switchTeam = async id => {
    setTeamId(id); setTab("home");
    if (roMode) { await loadAdmin(id); return; }
    setLoading(true);
    const my = ++loadSeq.current; // trocar de equipa durante um carregamento: só a resposta mais recente conta
    try {
      const td = await loadTeam(token, id);
      if (my === loadSeq.current) {
        setMembers(td.members); setFineTypes(td.fineTypes);
        setFines(td.fines); setCards(td.cards); setExpenses(td.expenses);
        setTrainings(td.trainings); setPresences(td.presences); setAbsences(td.absences);
        setLoadWarn(td.warn || []);
      }
    } catch(e) { console.error(e); if (my === loadSeq.current) showToast(`⚠️ Não foi possível carregar a equipa: ${errPt(e, "erro")}`, T.brand); }
    if (my === loadSeq.current) setLoading(false);
  };

  // Pull-to-refresh
  const refresh = useCallback(async () => {
    if (refreshing || !token || !teamId) return;
    setRefreshing(true);
    if (roMode) {
      try { applyAdminData(await loadTeamAdmin(token, teamId)); }
      catch(e) { showToast(`Não foi possível atualizar: ${roErrPt(e)}`, T.brand); }
      setRefreshing(false);
      return;
    }
    const my = ++loadSeq.current;
    try {
      const td = await loadTeam(token, teamId);
      if (my === loadSeq.current) {
        setMembers(td.members); setFineTypes(td.fineTypes);
        setFines(td.fines); setCards(td.cards); setExpenses(td.expenses);
        setTrainings(td.trainings); setPresences(td.presences); setAbsences(td.absences);
        setLoadWarn(td.warn || []);
      }
    } catch(e) { console.error(e); if (my === loadSeq.current) showToast(`Não foi possível atualizar: ${errPt(e, "erro")}`, T.brand); }
    setRefreshing(false);
  }, [token, teamId, refreshing, roMode]);
  useEffect(() => { window.__multeamRefresh = refresh; }, [refresh]);
  // área de toque mínima de 44 px: o botão não muda de tamanho nem de aspeto, só a zona que responde ao toque (não nos botões vizinhos uns dos outros, para não sobrepor zonas)
  useEffect(() => {
    if (document.getElementById("multeam-hit-area")) return;
    const st = document.createElement("style");
    st.id = "multeam-hit-area";
    st.textContent = "button:not(:has(+ button)):not(button + button) { position: relative; } button:not(:has(+ button)):not(button + button)::after { content: ''; position: absolute; top: 50%; left: 50%; width: max(100%, 44px); height: max(100%, 44px); transform: translate(-50%, -50%); }";
    document.head.appendChild(st);
  }, []);
  // Scroll por cima dos cartões: o index.html põe overscroll-behavior:none em todos os elementos e os cartões têm overflow:hidden
  // (também são "contentores de scroll"); em alguns telemóveis o arrasto que começa num cartão deixava de rolar o ecrã.
  // Dentro do #root volta ao valor normal; o #root, o html e o body mantêm o "none" (sem efeito elástico).
  useEffect(() => {
    if (document.getElementById("multeam-scroll-fix")) return;
    const st = document.createElement("style");
    st.id = "multeam-scroll-fix";
    st.textContent = "#root * { overscroll-behavior: auto; }";
    document.head.appendChild(st);
  }, []);

  // Auth
  const handleLogin = async (email, pass) => {
    setLoading(true); setAuthError(null);
    try {
      const d = await api.signIn(email, pass);
      const tok = d.access_token || d.session?.access_token;
      const uid = d.user?.id;
      if (!tok || !uid) throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
      setToken(tok); setMyUserId(uid); await initApp(tok, uid);
    } catch(e) { setAuthError(errPt(e)); setLoading(false); }
  };

  const handleRegister = async (email, pass, name) => {
    setLoading(true); setAuthError(null);
    try {
      const d = await api.signUp(email, pass, name);
      const tok = d.access_token || d.session?.access_token;
      const uid = d.user?.id;
      if (tok && uid) {
        // Update profile with the provided name
        let nameFailed = false;
        try { needRows(await api.patch(`profiles?id=eq.${uid}`, { name, initials: mk(name) }, tok)); } catch(e) { nameFailed = true; console.warn('profile name update failed:', e); }
        setToken(tok); setMyUserId(uid); await initApp(tok, uid);
        if (nameFailed) showToast("⚠️ Conta criada, mas o teu nome não ficou guardado. Edita-o em Geral.", T.brand);
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
    } catch(e) { setAuthError(errPt(e)); }
    setLoading(false);
  };

  const handleLogout = () => { RO.on = false; roHistoryRef.current = false; setAdminView(false); setAdminErr(null); setToken(null); setMyUserId(null); setProfile(null); setTeams([]); setMembers([]); setFineTypes([]); setFines([]); setCards([]); setExpenses([]); setTrainings([]); setPresences({}); setAbsences([]); setTeamId(null); setAppReady(false); setTab("home"); };

  // Data actions
  const addFine = async d => {
    const [f]=needRows(await api.post('fines',{team_id:d.teamId,member_id:d.memberId,amount:d.amount,reason:d.reason,emoji:d.emoji,paid:false,assigned_by:myUserId},token));
    setFines(p=>[aFine(f),...p]);
  };
  // Escritas verificadas: um UPDATE/DELETE bloqueado por RLS responde com sucesso sem alterar nada,
  // por isso só se atualiza o ecrã depois de confirmar o resultado; se falhar, toast vermelho.
  const writeFailed = (what, e) => showToast(`⚠️ Não foi possível ${what}: ${errPt(e, "erro")}`, T.brand);
  const updated = res => { if (!Array.isArray(res) || !res.length) throw new Error("sem permissão, ou o registo já não existe"); return res; };
  const confirmGone = async path => { const still = await api.get(path, token); if (still.length) throw new Error("sem permissão (o registo continua a existir)"); };
  const togglePaid = async id => {
    const f=fines.find(f=>f.id===id); if(!f)return;
    const paid = !f.paid;
    try {
      updated(await api.patch(`fines?id=eq.${id}`,{paid,paid_at:paid?new Date().toISOString():null},token));
      setFines(p=>p.map(x=>x.id===id?{...x,paid}:x));
    } catch(e){ writeFailed(paid ? "marcar a multa como paga" : "marcar a multa como por pagar", e); }
  };
  const delFine = async id => {
    try {
      await api.del(`fines?id=eq.${id}`,token);
      await confirmGone(`fines?id=eq.${id}&select=id`);
      setFines(p=>p.filter(f=>f.id!==id));
    } catch(e){ writeFailed("apagar a multa", e); }
  };
  const editFine = async (id, data) => {
    try {
      updated(await api.patch(`fines?id=eq.${id}`,{emoji:data.emoji,reason:data.reason,amount:data.amount},token));
      setFines(p=>p.map(f=>f.id===id?{...f,...data}:f));
    } catch(e){ writeFailed("guardar a multa", e); }
  };
  const addCard = async d => {
    const [c] = needRows(await api.post('cards', { team_id:d.teamId, member_id:d.memberId, kind:d.kind,
      match_date:d.date, opponent:d.opponent||null, note:d.note||null, consumed:false,
      created_by:myUserId }, token));
    setCards(p => [aCard(c), ...p]);
    return aCard(c);
  };
  // Escritas de cartões verificadas (UPDATE/DELETE bloqueado por RLS responde com sucesso sem alterar nada); toque repetido ignorado
  const editCard = (id, d) => guarded(`card:${id}`, async () => {
    try {
      needRows(await api.patch(`cards?id=eq.${id}`, { kind:d.kind, match_date:d.date, opponent:d.opponent||null, note:d.note||null }, token));
      setCards(p => p.map(c => c.id===id ? {...c, ...d} : c));
      return true;
    } catch(e){ writeFailed("guardar o cartão", e); return false; }
  });
  const delCard = id => guarded(`card:${id}`, async () => {
    try {
      await api.del(`cards?id=eq.${id}`, token);
      await confirmGone(`cards?id=eq.${id}&select=id`);
      setCards(p => p.filter(c=>c.id!==id));
      return true;
    } catch(e){ writeFailed("apagar o cartão", e); return false; }
  });
  // Castigo cumprido: marca os 5 amarelos mais antigos ainda em vigor
  const serveSuspension = memberId => guarded(`susp:${memberId}`, async () => {
    const ids = cards
      .filter(c => c.teamId===teamId && String(c.memberId)===String(memberId)
                   && c.kind==='amarelo' && !c.consumed)
      .sort((a,b) => (a.date||'').localeCompare(b.date||'') || String(a.id).localeCompare(String(b.id)))
      .slice(0,5).map(c=>c.id);
    if (ids.length < 5) return false;
    try {
      const done = needRows(await api.patch(`cards?id=in.(${ids.join(',')})`, { consumed:true }, token)).map(r => r.id);
      setCards(p => p.map(c => done.includes(c.id) ? {...c, consumed:true} : c));
      if (done.length < ids.length) throw new Error(`só ${done.length} de ${ids.length} cartões foram atualizados`);
      showToast(`Contador de ${members.find(m => String(m.id)===String(memberId))?.name || "jogador"} reposto a 0`, T.navy);
      return true;
    } catch(e){ writeFailed("repor o contador", e); return false; }
  });
  // Despesas: editar e apagar (só admin), com escritas verificadas; valor tem de ser > 0 (uma despesa negativa estragava o saldo)
  const editExpense = (id, d) => guarded(`exp:${id}`, async () => {
    try {
      const desc = String(d.description || "").trim(), amt = Number(d.amount);
      if (!desc) throw new Error("a descrição é obrigatória");
      if (!Number.isFinite(amt) || amt <= 0) throw new Error("o valor tem de ser maior que zero");
      const [e] = updated(await api.patch(`expenses?id=eq.${id}`, { description:desc, amount:amt }, token));
      setExpenses(p => p.map(x => x.id === id ? aExpense(e) : x));
      return true;
    } catch(e) { writeFailed("guardar a despesa", e); return false; }
  });
  const deleteExpense = id => guarded(`exp:${id}`, async () => {
    try {
      await api.del(`expenses?id=eq.${id}`, token);
      await confirmGone(`expenses?id=eq.${id}&select=id`);
      setExpenses(p => p.filter(x => x.id !== id));
      showToast("Despesa apagada", T.navy);
      return true;
    } catch(e) { writeFailed("apagar a despesa", e); return false; }
  });
  const addExpense = async d => {
    try {
      const [e]=updated(await api.post('expenses',{team_id:d.teamId,description:d.description,amount:d.amount,created_by:myUserId},token));
      setExpenses(p=>[aExpense(e),...p]);
    } catch(e){ writeFailed("registar a despesa", e); }
  };
  const logSession = async (recurring, date, currentPresences) => {
    const alreadyLogged = trainings.find(t => t.teamId===recurring.teamId && t.type==="treino" && t.date===date && t.location===recurring.location && t.time===recurring.time);
    if (alreadyLogged) { alert("Sessão já foi registada!"); return; }
    try {
      const newT = needRows(await api.post("trainings", { team_id:recurring.teamId, type:"treino", date, time:recurring.time, location:recurring.location, notes:recurring.notes||null, recurring:false, created_by:myUserId }, token))[0];
      setTrainings(p => [...p, aTraining(newT)]);
      const presArr = Object.entries(currentPresences||{}).filter(([,s])=>s);
      if (presArr.length > 0) {
        // cada presença só conta se a escrita devolver a linha; as que falharem ficam de fora e avisa-se
        const saved = await Promise.all(presArr.map(([mid, status]) =>
          api.upsert("presences", { training_id:newT.id, member_id:mid, status }, token).then(r => Array.isArray(r) && r.length > 0).catch(() => false)
        ));
        const okArr = presArr.filter((_, i) => saved[i]);
        setPresences(p => ({ ...p, [newT.id]: Object.fromEntries(okArr) }));
        if (okArr.length < presArr.length) {
          const names = presArr.filter((_, i) => !saved[i]).map(([mid]) => (members.find(x => String(x.id) === String(mid)) || {}).name || "membro");
          const shown = names.slice(0, 4).join(", ") + (names.length > 4 ? ` e mais ${names.length - 4}` : "");
          writeFailed("guardar todas as presenças da sessão", new Error(`${presArr.length - okArr.length} de ${presArr.length} não foram guardadas (${shown})`));
        }
      }
    } catch(e) { writeFailed("registar a sessão", e); }
  };
  const addTraining = async d => {
    const res = needRows(await api.post('trainings',{team_id:d.teamId,type:d.type,date:d.date||null,time:d.time||null,location:d.location,notes:d.notes,recurring:d.recurring||false,days:d.days||null,opponent:d.opponent||null,home_away:d.homeAway||null,squad:d.squad||null,created_by:myUserId},token));
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
  const delTraining = id => guarded(`tr:${id}`, async () => {
    try {
      await api.del(`trainings?id=eq.${id}`,token);
      await confirmGone(`trainings?id=eq.${id}&select=id`);
      setTrainings(p=>p.filter(t=>t.id!==id));
      return true;
    } catch(e){ writeFailed("apagar o treino", e); return false; }
  });
  const editTraining = (id, d) => guarded(`tr:${id}`, async () => {
    const patch = {};
    if(d.date      !== undefined) patch.date      = d.date||null;
    if(d.time      !== undefined) patch.time      = d.time||null;
    if(d.location  !== undefined) patch.location  = d.location;
    if(d.notes     !== undefined) patch.notes     = d.notes;
    if(d.days      !== undefined) patch.days      = d.days;
    if(d.opponent  !== undefined) patch.opponent  = d.opponent||null;
    if(d.homeAway  !== undefined) patch.home_away = d.homeAway;
    if(d.squad     !== undefined) patch.squad     = d.squad;
    try {
      const t = needRows(await api.patch(`trainings?id=eq.${id}`,patch,token))[0];
      setTrainings(p=>p.map(x=>x.id===id?aTraining(t):x));
      return true;
    } catch(e){ writeFailed("guardar o treino", e); throw e; } // o modal mostra o erro e fica aberto
  });
  const setPresence = (tid,mid,status) => guarded(`pres:${tid}:${mid}`, async () => {
    try {
      if(!status){
        await api.del(`presences?training_id=eq.${tid}&member_id=eq.${mid}`,token);
        await confirmGone(`presences?training_id=eq.${tid}&member_id=eq.${mid}&select=training_id`);
        setPresences(p=>{const t={...(p[tid]||{})};delete t[mid];return{...p,[tid]:t};});
      } else {
        needRows(await api.upsert('presences',{training_id:tid,member_id:mid,status},token));
        setPresences(p=>({...p,[tid]:{...(p[tid]||{}),[mid]:status}}));
      }
      return true;
    } catch(e){ writeFailed("guardar a presença", e); return false; }
  });
  const addMember = async d => {
    if (!isAdmin) { writeFailed("adicionar o membro", new Error("só os administradores podem adicionar membros")); return false; }
    try {
      const r = await fetch(`${SB_URL}/rest/v1/rpc/add_member_to_team`,{
        method:'POST',
        headers:{'apikey':SB_KEY,'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
        body:JSON.stringify({p_team_id:d.teamId,p_name:d.name,p_position:d.position,p_phone:d.phone||'',p_birthday:d.birthday||null,p_role:d.role||'player'})
      });
      let j = null;
      try { j = await r.json(); } catch(e) { j = null; }
      if (!r.ok) throw new Error((j && j.message) || `Erro ${r.status}`);
      const m = Array.isArray(j) ? j[0] : j;
      if (!m || !m.id) throw new Error("sem permissão, ou resposta vazia");
      setMembers(p=>[...p,{id:m.id,teamId:d.teamId,userId:m.user_id,role:m.role,name:m.name,initials:mk(m.name),position:m.position||d.position,phone:m.phone||d.phone||'',birthday:d.birthday||''}]);
      return true;
    } catch(e){ writeFailed("adicionar o membro", e); return false; }
  };
  const leaveTeam = async (tid) => {
    const m = members.find(m=>m.teamId===tid&&m.userId===myUserId);
    if (!m) return;
    try {
      await api.del(`team_members?id=eq.${m.id}`, token);
      await confirmGone(`team_members?id=eq.${m.id}&select=id`);
      setTeams(p=>p.filter(t=>t.id!==tid));
      setMembers(p=>p.filter(m=>m.teamId!==tid));
      // Mudar para outra equipa se disponível
      const remaining = teams.filter(t=>t.id!==tid);
      if (remaining.length > 0) await switchTeam(remaining[0].id);
    } catch(e) { writeFailed("sair da equipa", e); }
  };
  const ROLE_LABEL = { admin:"administrador", treinador:"treinador", diretor:"diretor", player:"jogador" };
  const adminCount = teamId => members.filter(x => x.teamId === teamId && x.role === "admin").length;
  const toggleRole = async (id, newRole) => {
    const m=members.find(m=>m.id===id); if(!m) throw new Error("Membro não encontrado");
    const nr = newRole || (m.role==='admin'?'player':'admin');
    // a equipa nunca fica sem administrador
    if (m.role === "admin" && nr !== "admin" && adminCount(m.teamId) <= 1) throw new Error("A equipa tem de ter pelo menos um administrador.");
    const res = await api.patch(`team_members?id=eq.${id}`,{role:nr},token);
    // UPDATE bloqueado por RLS devolve sucesso sem alterar nada: só é sucesso se voltou uma linha
    if (!Array.isArray(res) || !res.length) throw new Error("Não foi possível alterar o papel (sem permissão?)");
    setMembers(p=>p.map(x=>x.id===id?{...x,role:nr}:x));
    showToast(`${m.name} agora é ${ROLE_LABEL[nr] || nr}`, T.navy);
  };
  const removeMember = async id => {
    const m = members.find(x => x.id === id);
    if (m && m.role === "admin" && adminCount(m.teamId) <= 1) throw new Error("A equipa tem de ter pelo menos um administrador.");
    await api.del(`team_members?id=eq.${id}`, token);
    // DELETE bloqueado por RLS devolve sucesso sem apagar nada: confirmar que a linha já não existe
    const still = await api.get(`team_members?id=eq.${id}&select=id`, token);
    if (still.length) throw new Error("Não foi possível remover (sem permissão?)");
    setMembers(p => p.filter(x => x.id !== id));
    // o trigger da base de dados fechou os registos abertos do jogador e o member_id passou a nulo: reler (não bloqueia)
    if (m) api.get(`member_absences?team_id=eq.${m.teamId}&order=start_date.desc,created_at.desc`, token).then(r => setAbsences(r.map(aAbsence))).catch(e => { console.warn('absences reload failed:', e); showToast("Membro removido, mas não foi possível atualizar o histórico de ausências. Puxa para atualizar.", T.brand); });
    showToast(`${m ? m.name : "Membro"} removido da equipa`, T.navy);
  };
  // ── Lesões e ausências ──
  // Todas as escritas passam pelas funções absence_open/close/update/delete (atómicas, só admin); nunca PATCH direto a team_members.
  // Cada handler devolve true só depois de a resposta confirmar a escrita; se falhar, toast vermelho e o ecrã fica como estava.
  const absLock = React.useRef(new Set());
  const guarded = async (key, fn) => {
    if (absLock.current.has(key)) return false; // toque repetido enquanto a primeira escrita não terminou
    absLock.current.add(key);
    try { return await fn(); } finally { absLock.current.delete(key); }
  };
  const setMemberUnavail = (memberId, a) => setMembers(p => p.map(x => x.id !== memberId ? x : (a
    ? { ...x, unavailable:true, unavailableEmoji:a.emoji, unavailableNote:a.note, unavailableSince:a.start }
    : { ...x, unavailable:false, unavailableEmoji:'🤕', unavailableNote:'', unavailableSince:'' })));
  const absRow = (res) => { if (!res || !res.id) throw new Error("sem permissão, ou resposta vazia"); return aAbsence(res); };
  const needNote = v => { if (!v || !String(v.note || "").trim()) throw new Error("a nota é obrigatória"); };
  const absPut = a => setAbsences(p => Array.isArray(p) ? (p.some(x => x.id === a.id) ? p.map(x => x.id === a.id ? a : x) : [a, ...p]) : p);
  const callOpen = async (memberId, v) => absRow(await rpcCall('absence_open', { p_member_id:memberId, p_kind:v.kind, p_emoji:v.emoji, p_note:v.note.trim(), p_start:v.start }, token));
  const callClose = async (a, end) => absRow(await rpcCall('absence_close', { p_absence_id:a.id, p_end:(end && end >= a.start) ? end : a.start }, token));
  const absOpen = (memberId, v) => guarded(`m:${memberId}`, async () => {
    const m = members.find(x => x.id === memberId);
    try {
      needNote(v);
      const a = await callOpen(memberId, v);
      absPut(a); setMemberUnavail(memberId, a);
      showToast(`${m ? m.name : "Jogador"} marcado como indisponível`, T.navy);
      return true;
    } catch(e) { writeFailed("guardar a lesão/ausência", e); return false; }
  });
  const absClose = a => guarded(`a:${a.id}`, async () => {
    try {
      const r = await callClose(a, todayLocal());
      absPut(r); if (r.memberId) setMemberUnavail(r.memberId, null);
      showToast(`${a.memberName}: ${ABS_KINDS[a.kind].one} fechada`, T.navy);
      return true;
    } catch(e) { writeFailed("fechar o registo", e); return false; }
  });
  const absUpdate = (a, v) => guarded(`a:${a.id}`, async () => {
    try {
      needNote(v);
      const r = absRow(await rpcCall('absence_update', { p_absence_id:a.id, p_kind:v.kind, p_emoji:v.emoji, p_note:v.note.trim(), p_start:v.start, p_end:a.end ? (v.end || a.end) : null }, token));
      absPut(r); if (!r.end && r.memberId) setMemberUnavail(r.memberId, r);
      return true;
    } catch(e) { writeFailed("guardar o registo", e); return false; }
  });
  const absDelete = a => guarded(`a:${a.id}`, async () => {
    try {
      const res = await rpcCall('absence_delete', { p_absence_id:a.id }, token);
      if (res !== a.id) throw new Error("sem permissão, ou o registo já não existe");
      setAbsences(p => Array.isArray(p) ? p.filter(x => x.id !== a.id) : p);
      if (!a.end && a.memberId) setMemberUnavail(a.memberId, null);
      showToast("Registo apagado", T.navy);
      return true;
    } catch(e) { writeFailed("apagar o registo", e); return false; }
  });
  // registo já terminado: abre e fecha (2 chamadas); se o fecho falhar, apaga o registo acabado de abrir para não deixar o jogador indisponível
  const absAddPast = (memberId, v) => guarded(`m:${memberId}`, async () => {
    let opened = null;
    try {
      needNote(v);
      if (!v.end || v.end < v.start) throw new Error("a data de fim não pode ser anterior ao início");
      opened = await callOpen(memberId, v);
      const closed = await callClose(opened, v.end);
      absPut(closed); setMemberUnavail(memberId, null);
      showToast("Registo adicionado", T.navy);
      return true;
    } catch(e) {
      if (opened) {
        try {
          const res = await rpcCall('absence_delete', { p_absence_id:opened.id }, token);
          if (res !== opened.id) throw new Error("não confirmado");
        } catch(e2) {
          // não deu para desfazer: mostrar o registo aberto tal como está na base de dados
          absPut(opened); setMemberUnavail(memberId, opened);
          writeFailed("adicionar o registo (ficou em curso, fecha-o ou apaga-o à mão)", e);
          return false;
        }
      }
      writeFailed("adicionar o registo", e); return false;
    }
  });
  // jogador já indisponível sem registo (antes desta funcionalidade): obriga a escrever a nota; só então cria o registo (e fecha, se foi desligado)
  const absLegacy = (m, v, closeAfter) => guarded(`m:${m.id}`, async () => {
    let opened = null;
    try {
      needNote(v);
      opened = (absences || []).find(x => x.memberId === m.id && !x.end) || await callOpen(m.id, { ...v, start: m.unavailableSince || v.start });
      absPut(opened); setMemberUnavail(m.id, opened);
      if (closeAfter) {
        const closed = await callClose(opened, todayLocal());
        absPut(closed); setMemberUnavail(m.id, null);
        showToast(`${m.name}: ${ABS_KINDS[closed.kind].one} fechada`, T.navy);
      }
      return true;
    } catch(e) { writeFailed(closeAfter && opened ? "fechar o registo (a nota ficou guardada, tenta fechar outra vez)" : "guardar o registo", e); return false; }
  });
  const absHandlers = { open:absOpen, close:absClose, update:absUpdate, del:absDelete, addPast:absAddPast, legacy:absLegacy };
  // Guardar o perfil de um membro (RPC update_team_member_profile): depois da RPC lê-se o que ficou gravado
  // (get_team_profiles + team_members.position) e o ecrã mostra o que a base de dados tem; se diferir do enviado, toast vermelho.
  const editMember = (id, data) => guarded(`mem:${id}`, async () => {
    const m = members.find(m => m.id === id);
    try {
      if (!m) throw new Error("membro não encontrado");
      await rpcCall('update_team_member_profile', {
        p_member_id: m.userId,
        p_team_id: m.teamId,
        p_name: data.name || '',
        p_phone: data.phone || '',
        p_birthday: data.birthday || null,
        p_position: data.position || '',
        p_avatar_url: data.avatarUrl !== undefined ? (data.avatarUrl || null) : undefined
      }, token);
      const profs = await rpcCall('get_team_profiles', { p_team_id: m.teamId }, token);
      const prof = (Array.isArray(profs) ? profs : []).find(x => x.id === m.userId);
      const tmr = await api.get(`team_members?id=eq.${id}&select=position`, token);
      if (!prof || !Array.isArray(tmr) || !tmr.length) throw new Error("não foi possível confirmar o que ficou gravado");
      const saved = { name: prof.name || '', phone: prof.phone || '', birthday: prof.birthday || '', position: tmr[0].position || '', avatarUrl: prof.avatar_url || null };
      setMembers(p => p.map(x => x.id === id ? { ...x, ...saved, position: saved.position || x.position, initials: mk(saved.name || x.name) } : x));
      if (m.userId === myUserId) setProfile(p => ({ ...p, ...saved }));
      const same = (a, b) => String(a == null ? "" : a).trim() === String(b == null ? "" : b).trim();
      const diff = [["nome", data.name, saved.name], ["telefone", data.phone, saved.phone], ["aniversário", data.birthday, saved.birthday], ["posição", data.position, saved.position]].filter(([, sent, got]) => !same(sent, got)).map(([n]) => n);
      if (diff.length) throw new Error(`a base de dados não guardou: ${diff.join(", ")}`);
      return true;
    } catch(e) { writeFailed("guardar o perfil do membro", e); return false; }
  });
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
    } catch(e){ setTeamError(errPt(e)); }
  };
  const editTeam = async (id, patch) => {
    const res = await api.patch(`teams?id=eq.${id}`, patch, token);
    if (!Array.isArray(res) || !res.length) throw new Error("Não foi possível guardar (sem permissão?)");
    setTeams(p=>p.map(t=>t.id===id?{ ...t, ...aTeam(res[0]) }:t));
  };
  const deleteTeam = async (teamId) => {
    // erros daqui sobem ao modal de confirmação
    await api.del(`teams?id=eq.${teamId}`, token);
    // DELETE bloqueado por RLS devolve sucesso sem apagar nada: confirmar que a equipa já não existe
    const still = await api.get(`teams?id=eq.${teamId}&select=id`, token);
    if (still.length) throw new Error("Não foi possível apagar (sem permissão?)");
    try {
      const remaining = teams.filter(t => t.id !== teamId);
      setTeams(remaining);
      setSub(null);
      setTab("home");
      if (remaining.length > 0) {
        await switchTeam(remaining[0].id);
      } else {
        setTeamId(null);
        setMembers([]); setFines([]); setFineTypes([]);
        setExpenses([]); setTrainings([]); setPresences({}); setAbsences([]);
      }
    } catch(e) { console.error('deleteTeam error:', e); }
  };
  // ── Assumir perfil (rpc do Supabase; a funcionalidade nunca bloqueia a entrada nem a app) ──
  const [myClaims, setMyClaims] = useState(null);
  const [claimCounts, setClaimCounts] = useState({});
  const [claimsWarn, setClaimsWarn] = useState(false); // não foi possível ver em que equipas és admin (emblema dos pedidos)
  const teamsRef = React.useRef(teams); teamsRef.current = teams;
  const handledApprovedRef = React.useRef(new Set());
  const claimsTotal = Object.values(claimCounts).reduce((a, n) => a + (Number(n) || 0), 0);
  const claimsFlight = React.useRef(false); const claimsAgain = React.useRef(false);
  const refreshClaims = async () => {
    if (!token || !myUserId || RO.on) return;
    // um só pedido de cada vez; se chegar outro pedido de atualização a meio, repete-se uma vez no fim
    if (claimsFlight.current) { claimsAgain.current = true; return; }
    claimsFlight.current = true;
    const warns = [];
    try {
    try {
      const mine = await rpcCall('my_claims', {}, token);
      const list = Array.isArray(mine) ? mine : [];
      setMyClaims(list);
      // aprovado e a equipa ainda não está na conta: recarregar as equipas do jogador
      const fresh = list.find(c => c.status === "aprovado" && !teamsRef.current.some(t => t.id === c.team_id) && !handledApprovedRef.current.has(c.id));
      if (fresh) { handledApprovedRef.current.add(fresh.id); await initApp(token, myUserId); showToast(`O admin aprovou: és o perfil ${fresh.member_name || ""}`.trim(), T.navy); }
    } catch(e) { console.warn("my_claims failed:", e && e.message); warns.push("Não foi possível carregar os teus pedidos de perfil."); }
    try {
      const ids = new Set(teamsRef.current.filter(t => t.createdBy === myUserId).map(t => t.id));
      try { const rows = await api.get(`team_members?user_id=eq.${myUserId}&role=eq.admin&select=team_id`, token); (Array.isArray(rows) ? rows : []).forEach(r => ids.add(r.team_id)); } catch(e) { console.warn("admin teams read failed:", e && e.message); warns.push("Não foi possível ver as equipas onde és administrador. Os pedidos de perfil podem não aparecer."); }
      const counts = {}; let countFailed = false;
      await Promise.all([...ids].filter(id => teamsRef.current.some(t => t.id === id)).map(async id => {
        try { const r = await rpcCall('list_team_claims', { p_team_id:id }, token); claimNamesRemember(r, "member_name", "member_avatar"); counts[id] = (Array.isArray(r) ? r : []).filter(c => c.status === "pendente" && (!c.question || !!c.answer)).length; } catch(e) { console.warn("list_team_claims failed:", e && e.message); countFailed = true; }
      }));
      if (countFailed) warns.push("Não foi possível contar os pedidos de perfil pendentes.");
      setClaimCounts(counts);
    } catch(e) { console.warn("claim counts failed:", e && e.message); warns.push("Não foi possível contar os pedidos de perfil pendentes."); }
    setClaimsWarn(warns.length ? [...new Set(warns)].join(" ") : false);
    } finally {
      claimsFlight.current = false;
      if (claimsAgain.current) { claimsAgain.current = false; refreshClaims(); }
    }
  };
  useEffect(() => {
    if (!appReady || !token || !myUserId || RO.on) return;
    refreshClaims();
    const onVis = () => { if (document.visibilityState === "visible") refreshClaims(); };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [appReady, token, myUserId, teams.length]);
  useEffect(() => { if (tab === "geral" && appReady && token && myUserId && !RO.on) refreshClaims(); }, [tab]);
  const listClaimable = async code => {
    // falha sobe ao modal, que avisa e deixa entrar na equipa na mesma
    try { const r = await rpcCall('list_claimable_members', { p_code:String(code || "").trim().toUpperCase() }, token); return Array.isArray(r) ? r : []; }
    catch(e) { console.warn("list_claimable_members failed:", e && e.message); throw e; }
  };
  const requestClaim = async (code, memberId, note) => {
    await rpcCall('request_claim', { p_code:String(code || "").trim().toUpperCase(), p_member_id:memberId, p_note:note ? note : null }, token);
    await refreshClaims();
  };
  const editClaimNote = async (id, note) => { await rpcCall('update_claim_note', { p_claim_id:id, p_note:note ? note : null }, token); await refreshClaims(); showToast("Mensagem atualizada", T.navy); };
  const answerClaim = async (id, text) => { await rpcCall('answer_claim_question', { p_claim_id:id, p_answer:text }, token); await refreshClaims(); showToast(text ? "Resposta enviada" : "Resposta apagada", T.navy); };
  const myQuestionCount = Array.isArray(myClaims) ? myClaims.filter(c => c.status === "pendente" && c.question && !c.answer).length : 0;
  const cancelClaim = async id => { await rpcCall('cancel_claim', { p_claim_id:id }, token); await refreshClaims(); showToast("Pedido cancelado", T.navy); };
  // depois de aprovar/rejeitar (admin): recarregar os membros da equipa e os contadores
  const claimsChanged = async () => { await refresh(); await refreshClaims(); };

  const joinTeam = async t => {
    try {
      await api.insert('team_members',{team_id:t.id,user_id:myUserId,role:'player'},token);
    } catch(e) {
      if (!e.message?.includes('duplicate key')) {
        alert(`Erro ao entrar na equipa: ${errPt(e, "tenta novamente")}`);
        return;
      }
      // duplicate key = já és membro, continua
    }
    // Adicionar a equipa ao state se ainda não estiver
    setTeams(prev => prev.some(x => x.id === t.id) ? prev : [...prev, t]);
    await switchTeam(t.id);
  };
  const findTeamByCode = async code => {
    // devolve null só quando o código não existe; falhas de rede/servidor sobem ao modal ("Tentar novamente")
    const r = await fetch(`${SB_URL}/rest/v1/rpc/find_team_by_code`, {
      method: 'POST',
      headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${token||SB_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code.trim().toUpperCase() })
    });
    if (!r.ok) throw new Error(`Não foi possível procurar a equipa (erro ${r.status}).`);
    let d = null;
    try { d = await r.json(); } catch(e) { d = null; }
    const t = Array.isArray(d) ? d[0] : d;
    return t?.id ? aTeam({...t, invite_code: t.invite_code}) : null;
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

  // Subscribe to push notifications and store subscription in Supabase.
  // Em vez de falhar em silêncio, guarda o motivo (pushIssue) para o aviso em Geral.
  const subscribeToPush = async (tok, uid) => {
    if (RO.on) return;
    try {
      const reg = await Promise.race([
        navigator.serviceWorker.ready,
        new Promise((_, rej) => setTimeout(() => rej(Object.assign(new Error("service worker sem ready"), { pushCode:"sw" })), 8000)),
      ]);
      let sub;
      try {
        const existing = await reg.pushManager.getSubscription();
        sub = existing || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: VAPID_PUBLIC });
      } catch(e) { throw Object.assign(e, { pushCode: e && e.pushCode || "subscrever" }); }
      const subJson = sub.toJSON();
      // Guarda a subscrição (upsert por user_id + endpoint, a restrição UNIQUE da tabela); um 409 quer dizer que já existe
      let res;
      try {
        res = await fetch(`${SB_URL}/rest/v1/push_subscriptions?on_conflict=user_id,endpoint`, {
          method: "POST",
          headers: { "apikey": SB_KEY, "Authorization": `Bearer ${tok}`, "Content-Type": "application/json", "Prefer": "resolution=merge-duplicates,return=minimal" },
          body: JSON.stringify({ user_id: uid, endpoint: subJson.endpoint, p256dh: subJson.keys?.p256dh, auth: subJson.keys?.auth }),
        });
      } catch(e) { throw Object.assign(e, { pushCode:"gravar" }); }
      if (!res.ok && res.status !== 409) throw Object.assign(new Error(`erro ${res.status}`), { pushCode:"gravar" });
      setPushIssue(null); // gravou, ou já existia (409): limpa qualquer aviso anterior
    } catch(e) {
      console.warn("Push subscribe failed:", e && e.message);
      setPushIssue({ code: (e && e.pushCode) || "subscrever", detail: e && e.pushCode === "gravar" && /^erro \d+$/.test(String(e.message)) ? e.message : "" });
    }
  };
  // Verifica o que é preciso para as notificações; `ask` pede a permissão (só depois de um toque do utilizador ou na 1.ª vez)
  const checkPush = async (tok, uid, ask) => {
    if (RO.on) return;
    if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
      setPushIssue({ code: isIOSDevice() && !isStandaloneApp() ? "ios-instalar" : "sem-suporte" });
      return;
    }
    if (Notification.permission === "denied") { setPushIssue({ code:"bloqueado" }); return; }
    if (Notification.permission === "default") {
      if (!ask) return;
      const perm = await Notification.requestPermission();
      if (perm === "denied") { setPushIssue({ code:"bloqueado" }); return; }
      if (perm !== "granted") return;
    }
    await subscribeToPush(tok, uid);
  };

  // Request notification permission once after login
  useEffect(() => {
    if (!appReady || !token || !myUserId || RO.on) return;
    const supported = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
    if (supported && Notification.permission === "default") {
      setTimeout(() => { if (!RO.on) checkPush(token, myUserId, true); }, 2500);
    } else {
      checkPush(token, myUserId, false);
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
    if (RO.on) return;
    const userIds = members.map(m => m.userId).filter(Boolean);
    if (!userIds.length) return;
    try {
      const res = await fetch(`${SB_URL}/functions/v1/send-team-push`, {
        method: "POST",
        headers: { "apikey": SB_KEY, "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ team_id: teamId, user_ids: userIds, title, body }),
      });
      if (!res.ok) {
        let det = ""; try { det = (await res.text()).slice(0, 80); } catch(e) {}
        throw new Error(`HTTP ${res.status}${det ? " " + det : ""}`);
      }
    } catch(e) { notePushFail(e && e.message); }
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
  const addCardWithAlert = async d => {
    const c = await addCard(d);
    const m = members.find(x => String(x.id) === String(d.memberId));
    const name = m?.name || "jogador";
    showToast(`${d.kind==='amarelo'?"🟨":"🟥"} Cartão ${d.kind} lançado a ${name}`, d.kind==='amarelo'?"#B38F00":T.brand);
    if (c.kind !== 'amarelo') return;
    const y = cards.filter(x => x.teamId===d.teamId && String(x.memberId)===String(d.memberId) && x.kind==='amarelo' && !x.consumed).length + 1;
    if (y < 4) return;
    const managers = members.filter(x => x.teamId===d.teamId && ["admin","treinador","diretor"].includes(x.role));
    if (y === 4) {
      if (m?.userId) sendPushToTeam(d.teamId, [m], "🟨 Estás a 1 amarelo da suspensão", "Tens 4 amarelos. Ao 5.º falhas um jogo.").catch(()=>{});
      sendPushToTeam(d.teamId, managers, `🟨 ${name} está em risco`, "4 amarelos — ao 5.º falha um jogo.").catch(()=>{});
    } else {
      if (m?.userId) sendPushToTeam(d.teamId, [m], "🟥 Suspenso", "5 amarelos — tens de cumprir 1 jogo de castigo.").catch(()=>{});
      sendPushToTeam(d.teamId, managers, `🟥 ${name} atingiu 5 amarelos`, "Cumpre 1 jogo de castigo.").catch(()=>{});
    }
  };
  // Auto-login with magic link token
  useEffect(() => {
    if (!magicToken || token) return;
    fetch(`${SB_URL}/auth/v1/user`, {
      headers: { "apikey": SB_KEY, "Authorization": `Bearer ${magicToken.access}` }
    }).then(r => r.json()).then(u => {
      if (u.id) { setToken(magicToken.access); setMyUserId(u.id); window.history.replaceState(null, "", "/"); }
      else { console.warn("magic link inválido:", u && (u.msg || u.error_description || u.error)); setAuthError("O link de acesso expirou ou não é válido. Entra com o teu email e password."); try { window.history.replaceState(null, "", "/"); } catch(e) {} }
    }).catch(e => { console.warn("magic link falhou:", e && e.message); setAuthError(errPt(e)); });
  }, [magicToken]);

  if (recoveryToken) return <ResetPasswordScreen accessToken={recoveryToken} onDone={()=>{ window.history.replaceState(null,"","/"); window.location.reload(); }} />;
  if (!token || !appReady) return <AuthScreen onLogin={handleLogin} onRegister={handleRegister} error={authError} loading={loading} />;
  if (loading) return <Spinner />;

  const roBanner = roMode ? (
    <div role="status" style={{ position:"sticky", top:0, zIndex:300, background:"#3D2B00", color:"#FFE9B0", display:"flex", alignItems:"center", flexWrap:"wrap", justifyContent:"space-between", gap:"6px 8px", padding:"6px 14px", fontSize:13, fontWeight:700 }}>
      <span>👁️ Modo leitura (super admin)</span>
      <span style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        <button onClick={()=>exitAdminView({ toTeams:true })} style={{ minHeight:44, padding:"0 16px", background:"#FFE9B0", color:"#3D2B00", border:"none", borderRadius:22, fontSize:13, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>← Voltar às equipas</button>
        <button onClick={exitAdminView} style={{ minHeight:44, padding:"0 16px", background:"#FFE9B0", color:"#3D2B00", border:"none", borderRadius:22, fontSize:13, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Sair</button>
      </span>
    </div>
  ) : null;
  if (roMode && adminErr) return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24, fontFamily:"system-ui" }}>
      <p style={{ fontSize:40, margin:0 }}>⚠️</p>
      <p style={{ fontWeight:800, fontSize:18, margin:"8px 0 6px", textAlign:"center" }}>Não foi possível abrir a equipa</p>
      <div role="alert" style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", marginBottom:16, width:"100%", maxWidth:340, fontSize:14, color:"#8A0000", textAlign:"center", boxSizing:"border-box" }}>{adminErr.msg}</div>
      <button onClick={()=>loadAdmin(adminErr.id)} style={{ width:"100%", maxWidth:300, minHeight:48, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontWeight:800, cursor:"pointer", marginBottom:10, fontFamily:"inherit" }}>Tentar novamente</button>
      <button onClick={()=>exitAdminView({ toTeams:true })} style={{ width:"100%", maxWidth:300, minHeight:48, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontWeight:800, cursor:"pointer", marginBottom:10, fontFamily:"inherit" }}>← Voltar às equipas</button>
      <button onClick={exitAdminView} style={{ width:"100%", maxWidth:300, minHeight:48, borderRadius:14, border:`1.5px solid ${T.navy}`, background:"transparent", color:T.navy, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Sair</button>
    </div>
  );

  const nav = [{id:"home",emoji:"🏠",label:"Início"},{id:"fines",emoji:"🧾",label:"Multas"},{id:"cards",emoji:"🟨",label:"Cartões"},{id:"treinos",emoji:"🗓️",label:"Treinos"},{id:"caixa",emoji:"💰",label:"Caixa"},{id:"geral",emoji:"👤",label:"Geral"}];
  const atRiskCount = canManageTrainings ? members.filter(m => m.teamId===teamId && cardCount(cards, teamId, m.id).yellows >= 4).length : 0;
  const toastBox = toast ? <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", zIndex:9999, background:toast.color, color:"#fff", borderRadius:20, padding:"10px 20px", fontSize:14, fontWeight:700, boxShadow:"0 4px 20px rgba(0,0,0,0.3)", whiteSpace:"nowrap", pointerEvents:"none" }}>{toast.msg}</div> : null;
  const loadWarnBox = (loadWarn.length > 0 && !roMode) ? (
    <div role="alert" data-load-warn style={{ margin:"8px 12px 0", background:"#FFF8E1", border:"2px solid #8A5A00", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
      <p style={{ margin:0, flex:1, minWidth:180, fontSize:13, fontWeight:800, color:"#1a1a1f" }}>{loadWarn.some(x => x !== "perfis") && "Não foi possível carregar presenças, cartões ou ausências."}{loadWarn.some(x => x !== "perfis") && loadWarn.includes("perfis") && " "}{loadWarn.includes("perfis") && PROFILES_WARN}</p>
      <button onClick={()=>refresh()} style={{ minHeight:44, padding:"0 16px", borderRadius:12, border:"2px solid #1a1a1f", background:"#1a1a1f", color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Tentar novamente</button>
    </div>
  ) : null;
  const wrap = ch => <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>{roBanner}{loadWarnBox}{ch}</div>;

  // Super admin sem equipa própria: ecrã principal só com Geral e o painel de super admin (ver "Abrir equipa")
  if (!team && profile?.isAppAdmin) return (
    <div style={{ background:T.bg, minHeight:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      {toastBox}
      <div style={{ background:`linear-gradient(135deg, ${T.navy}, #0d1f36)`, color:"#fff", padding:"52px 16px 14px" }}>
        <p style={{ margin:0, fontSize:11, opacity:0.6, fontWeight:700, letterSpacing:1, textTransform:"uppercase" }}>Multeam</p>
        <h2 style={{ margin:0, fontSize:22, fontWeight:900, letterSpacing:-0.5 }}>Super admin</h2>
      </div>
      {tab==="geral" && <GeneralTab user={{ ...(profile||{}) }} myUserId={myUserId} teams={teams} members={members} token={token} onEditProfile={()=>setModal("profile")} onManageTeam={()=>{}} onCreateTeam={()=>setModal("team")} onJoinTeam={()=>setModal("join")} onLeaveTeam={leaveTeam} onLogout={handleLogout} isAppAdmin={profile?.isAppAdmin} onAdminOpen={()=>{ setAdminStart(null); setTab("appadmin"); }} pushIssue={pushIssue} onRetryPush={()=>checkPush(token, myUserId, true)} claimsWarn={claimsWarn} onRetryClaims={()=>refreshClaims()} />}
      {tab==="appadmin" && <AppAdminTab token={token} onBack={()=>setTab("geral")} onOpenTeam={openAdminTeam} initialSection={adminStart} initialTeams={adminStart==="teams" ? adminTeamsCache : null} />}
      {tab!=="geral" && tab!=="appadmin" && (
        <div style={{ textAlign:"center", padding:"60px 24px 120px", color:T.sub }}>
          <p style={{ fontSize:40, margin:"0 0 8px" }}>⚽</p>
          <p style={{ fontWeight:700, fontSize:16, margin:0, color:T.text }}>Sem equipa. Usa o painel de super admin.</p>
          <button onClick={()=>setTab("geral")} style={{ marginTop:16, minHeight:44, padding:"0 20px", borderRadius:14, border:`1.5px solid ${T.navy}`, background:"transparent", color:T.navy, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>Ir para Geral</button>
        </div>
      )}
      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.card, borderTop:`1px solid ${T.border}`, display:"flex", padding:"8px 0 24px", boxShadow:"0 -2px 20px rgba(0,0,0,0.06)" }}>
        {nav.map(item=>(
          <button key={item.id} onClick={()=>setTab(item.id)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px 0", fontFamily:"inherit" }}>
            <span style={{ fontSize:20 }}>{item.emoji}</span>
            <span style={{ fontSize:10, fontWeight:tab===item.id?800:500, color:tab===item.id?T.navy:T.sub }}>{item.label}</span>
          </button>
        ))}
      </div>
      {modal==="team" && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="join" && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onListClaimable={listClaimable} onRequestClaim={requestClaim} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} />}
      {modal==="profile" && <EditProfileModal user={profile||{}} onSave={async u=>{
        try { needRows(await api.patch(`profiles?id=eq.${myUserId}`,{name:u.name,phone:u.phone||null,birthday:u.birthday||null,avatar_url:u.avatarUrl||null,position:u.position||null},token)); }
        catch(e){ writeFailed("guardar o perfil", e); return; }
        setProfile(p=>({...p,...u}));
      }} onClose={()=>setModal(null)} />}
    </div>
  );

  if (!team) return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24, fontFamily:"system-ui" }}>
      <p style={{ fontSize:40 }}>⚽</p>
      <p style={{ fontWeight:800, fontSize:20, margin:"8px 0 6px" }}>Sem equipas ainda</p>
      <p style={{ color:T.sub, marginBottom:16 }}>Cria ou junta-te a uma equipa</p>
      <div style={{ width:"100%", maxWidth:340 }}><MyClaimsCard claims={myClaims} onEditNote={editClaimNote} onCancel={cancelClaim} onAnswer={answerClaim} /></div>
      {teamError && <div style={{ background:"#FFE5E5", borderRadius:12, padding:"12px 16px", marginBottom:16, width:"100%", maxWidth:340, fontSize:13, color:"#C00", wordBreak:"break-all" }}>{teamError}</div>}
      <button onClick={()=>setModal("team")} style={{ width:"100%", maxWidth:300, padding:15, borderRadius:14, border:"none", background:T.navy, color:"#fff", fontWeight:800, cursor:"pointer", marginBottom:10, fontFamily:"inherit" }}>➕ Criar equipa</button>
      <button onClick={()=>setModal("join")} style={{ width:"100%", maxWidth:300, padding:15, borderRadius:14, border:`1.5px solid ${T.navy}`, background:"transparent", color:T.navy, fontWeight:800, cursor:"pointer", fontFamily:"inherit" }}>🔗 Entrar com código</button>
      {modal==="team" && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="join" && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onListClaimable={listClaimable} onRequestClaim={requestClaim} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} />}
    </div>
  );

  if (tab==="treinos") return (
    <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      {roBanner}
      {loadWarnBox}
      {toastBox}
      <TreinosPage team={team} trainings={trainings} members={members} myUserId={roMode?null:myUserId} isAdmin={canManageTrainings} presences={presences} onSetPresence={roMode?null:setPresence} onAddType={addTraining} onDelete={delTraining} onEdit={editTraining} onLogSession={logSession} onBack={()=>setTab("home")} modal={treinosModal} setModal={setTreinosModal} />
    </div>
  );
  if (sub?.type==="member") return wrap(<><MemberDetailScreen member={members.find(x=>x.id===sub.data.id)||sub.data} team={team} fines={fines} isAdmin={isAdmin} readOnly={roMode} absences={absences} absHandlers={isAdmin?absHandlers:null} onBack={()=>setSub(null)} onTogglePaid={togglePaid} onDeleteFine={delFine} />{toastBox}</>);
  if (sub?.type==="manage") {
    const mt=teams.find(t=>t.id===sub.data);
    return wrap(<><ManageTeamScreen team={mt} members={members} fineTypes={fineTypes} token={token} setFineTypes={setFineTypes} myUserId={myUserId} onBack={()=>setSub(null)} onAddMember={()=>setModal("member")} onToggleRole={toggleRole} onRemoveMember={removeMember} onEditMember={editMember} absences={absences} absHandlers={isAdmin?absHandlers:null} onRegenerateCode={()=>{}} onDeleteTeam={()=>deleteTeam(mt.id)} onEditTeam={editTeam} onClaimsChanged={claimsChanged} />{toastBox}{modal==="member"&&<AddMemberModal team={mt} onAdd={addMember} onClose={()=>setModal(null)} />}</>);
  }

  return (
    <div style={{ background:T.bg, minHeight:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth:480, margin:"0 auto" }}>
      {roBanner}
      {loadWarnBox}
      {refreshing && <div style={{ position:"fixed", top:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, zIndex:999, display:"flex", justifyContent:"center", paddingTop:8 }}><div style={{ background:T.navy, borderRadius:20, padding:"6px 16px", display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#fff", fontWeight:700, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}><span style={{ display:"inline-block", animation:"spin 0.8s linear infinite" }}>⟳</span> A atualizar...</div></div>}
      {toastBox}
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
      <div style={{ background:`linear-gradient(135deg, ${team.color}, ${team.color}dd)`, color:"#fff", padding:"52px 16px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <p style={{ margin:0, fontSize:11, opacity:0.6, fontWeight:700, letterSpacing:1, textTransform:"uppercase" }}>Multeam</p>
          <h2 style={{ margin:0, fontSize:22, fontWeight:900, letterSpacing:-0.5 }}>{team.name}</h2>
          {isAdmin && <AdminHeaderBadge teamColor={team.color} />}
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <button onClick={()=>roMode ? refresh() : window.location.reload()} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:20, width:44, minWidth:44, flexShrink:0, height:44, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>↺</button>
          <button onClick={()=>setModal("picker")} style={{ minHeight:44, background:"rgba(255,255,255,0.22)", border:"none", color:"#fff", borderRadius:20, padding:"8px 16px", fontSize:14, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>{team.emoji} Trocar ▾</button>
        </div>
      </div>

      {tab==="home"  && <HomeTab team={team} fines={fines} members={members} expenses={expenses} trainings={trainings} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} onSelectMember={m=>setSub({type:"member",data:m})} fineTypes={fineTypes} presences={presences} myMember={roMode ? null : members.find(m=>m.teamId===teamId&&m.userId===myUserId)} onSetPresence={roMode ? null : setPresence} />}
      {tab==="fines" && <FinesTab team={team} fines={fines} members={members} isAdmin={isAdmin} onAddFine={()=>setModal("fine")} onTogglePaid={togglePaid} onDeleteFine={delFine} onEditFine={f=>setEditingFine(f)} onSelectMember={m=>setSub({type:"member",data:m})} />}
      {tab==="cards" && <CardsTab team={team} cards={cards} members={members} canManage={canManageTrainings} readOnly={roMode} onAddCard={()=>setModal("card")} onEditCard={c=>setEditingCard(c)} onDeleteCard={delCard} onServeSuspension={serveSuspension} />}
      {tab==="caixa" && <TreasuryTab team={team} fines={fines} members={members} expenses={expenses} isAdmin={isAdmin} onAddExpense={()=>setModal("expense")} onEditExpense={isAdmin?editExpense:null} onDeleteExpense={isAdmin?deleteExpense:null} />}
      {tab==="geral" && <GeneralTab user={{ ...(profile||{}), position: members.find(m=>m.userId===myUserId&&m.teamId===teamId)?.position || profile?.position || '' }} myUserId={myUserId} teams={roMode ? teams.filter(t=>t.id===teamId) : teams} members={members} token={token} onEditProfile={()=>setModal("profile")} onManageTeam={id=>setSub({type:"manage",data:id})} onCreateTeam={()=>setModal("team")} onJoinTeam={()=>setModal("join")} onLeaveTeam={leaveTeam} onLogout={handleLogout} isAppAdmin={roMode ? false : profile?.isAppAdmin} readOnly={roMode} onAdminOpen={()=>{ setAdminStart(null); setTab("appadmin"); }} myClaims={roMode ? null : myClaims} onEditClaimNote={editClaimNote} onCancelClaim={cancelClaim} onAnswerClaim={answerClaim} claimCounts={roMode ? {} : claimCounts} pushIssue={roMode ? null : pushIssue} onRetryPush={()=>checkPush(token, myUserId, true)} claimsWarn={roMode ? false : claimsWarn} onRetryClaims={()=>refreshClaims()} />}
      {tab==="appadmin" && profile?.isAppAdmin && <AppAdminTab token={token} onBack={()=>setTab("geral")} onOpenTeam={openAdminTeam} initialSection={adminStart} initialTeams={adminStart==="teams" ? adminTeamsCache : null} />}

      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.card, borderTop:`1px solid ${T.border}`, display:"flex", padding:"8px 0 24px", boxShadow:"0 -2px 20px rgba(0,0,0,0.06)" }}>
        {nav.map(item=>(
          <button key={item.id} onClick={()=>setTab(item.id)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px 0", fontFamily:"inherit" }}>
            <span style={{ fontSize:20, position:"relative" }}>{item.emoji}{item.id==="cards" && atRiskCount>0 && <CountBadge n={atRiskCount} />}{item.id==="geral" && !roMode && (claimsTotal + myQuestionCount)>0 && <span data-badge="claims"><CountBadge n={claimsTotal + myQuestionCount} /></span>}</span>
            <span style={{ fontSize:10, fontWeight:tab===item.id?800:500, color:tab===item.id?team.color:T.sub }}>{item.label}</span>
          </button>
        ))}
      </div>

      {modal==="picker"  && <TeamPickerModal teams={teams} members={members} myUserId={myUserId} currentTeamId={teamId} onSelect={switchTeam} onClose={()=>setModal(null)} onCreateTeam={()=>setModal("team")} readOnly={roMode} />}
      {modal==="fine"    && isAdmin && <AddFineModal team={team} myUserId={myUserId} token={token} onAdd={addFineWithToast} onClose={()=>setModal(null)} />}
      {modal==="card"    && canManageTrainings && <AddCardModal team={team} members={members} cards={cards} onAdd={addCardWithAlert} onClose={()=>setModal(null)} />}
      {editingCard && canManageTrainings && <EditCardModal card={editingCard} onSave={editCard} onClose={()=>setEditingCard(null)} />}
      {modal==="expense" && isAdmin && <AddExpenseModal team={team} onAdd={addExpense} onClose={()=>setModal(null)} />}
      {editingFine && isAdmin && <EditFineModal fine={editingFine} onSave={editFine} onClose={()=>setEditingFine(null)} />}
      {modal==="team"    && <CreateTeamModal onAdd={createTeam} onClose={()=>setModal(null)} />}
      {modal==="profile" && <EditProfileModal user={profile||{}} onSave={async u=>{
        try { needRows(await api.patch(`profiles?id=eq.${myUserId}`,{name:u.name,phone:u.phone||null,birthday:u.birthday||null,avatar_url:u.avatarUrl||null,position:u.position||null},token)); }
        catch(e){ writeFailed("guardar o perfil", e); return; }
        setProfile(p=>({...p,...u}));
        await editMember(members.find(m=>m.userId===myUserId&&m.teamId===teamId)?.id,u);
      }} onClose={()=>setModal(null)} />}
      {modal==="join"    && <JoinTeamModal teams={teams} user={profile} onFindByCode={findTeamByCode} onListClaimable={listClaimable} onRequestClaim={requestClaim} onJoin={async t=>{await joinTeam(t);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} initialCode={pendingInvite||""} onClose={()=>{setModal(null);setPendingInvite(null);window.history.replaceState({},document.title,window.location.pathname);}} />}
    </div>
  );
}

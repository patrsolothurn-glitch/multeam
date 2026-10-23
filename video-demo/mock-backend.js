// Backend simulado da demonstração: responde a TODOS os pedidos que a app faria ao Supabase.
// Nada sai para a rede e nada é real (equipa, jogadores e valores são inventados; os jogadores só têm iniciais).
const DAY = 86400000;
const iso = (ms) => new Date(ms).toISOString();
const dia = (ms) => iso(ms).slice(0, 10);

function criarBackend() {
  const agora = Date.now();
  const EU = "U_DEMO_AL"; // utilizador inventado (o admin da equipa de exemplo)
  const equipa = { id: "tDemo", name: "Os Invencíveis FC", emoji: "⚽", color: "#1D3557", season: "2026/27", invite_code: "DEMO00", created_by: EU };
  const jogadores = [
    ["AL", "A. L.", "Guarda-redes", "admin"],
    ["JM", "J. M.", "Defesa", "player"],
    ["RS", "R. S.", "Médio", "player"],
    ["TP", "T. P.", "Avançado", "player"],
    ["MC", "M. C.", "Médio", "player"],
  ];
  const membros = jogadores.map(([k, , pos, role]) => ({ id: "m" + k, team_id: equipa.id, user_id: "U_DEMO_" + k, role, position: pos }));
  const perfis = jogadores.map(([k, nome, pos]) => ({ id: "U_DEMO_" + k, name: nome, position: pos }));
  const tipos = [
    { id: "ft1", team_id: equipa.id, name: "Atraso ao treino", amount: 5, emoji: "⏰" },
    { id: "ft2", team_id: equipa.id, name: "Esqueceu a camisola", amount: 5, emoji: "👕" },
    { id: "ft3", team_id: equipa.id, name: "Bolo de aniversário", amount: 10, emoji: "🎂" },
  ];
  const mk = (id, m, amount, reason, emoji, paid, dias) => ({
    id, team_id: equipa.id, member_id: "m" + m, amount, reason, emoji, paid,
    paid_at: paid ? iso(agora - (dias - 1) * DAY) : null, created_at: iso(agora - dias * DAY),
  });
  const multas = [
    mk("f1", "JM", 10, "Bolo de aniversário", "🎂", false, 3),
    mk("f2", "RS", 5, "Esqueceu a camisola", "👕", false, 2),
    mk("f3", "MC", 5, "Atraso ao treino", "⏰", true, 6),
    mk("f4", "AL", 5, "Esqueceu a camisola", "👕", true, 8),
    mk("f5", "TP", 10, "Bolo de aniversário", "🎂", true, 10),
  ];
  const despesas = [{ id: "e1", team_id: equipa.id, description: "Água para o treino", amount: 8, created_at: iso(agora - 5 * DAY) }];
  const treinos = [
    { id: "t1", team_id: equipa.id, type: "treino", date: dia(agora + 1 * DAY), time: "20:00:00", location: "Pavilhão Municipal", notes: "", recurring: false, days: null, created_by: EU },
    { id: "t2", team_id: equipa.id, type: "jogo", date: dia(agora + 5 * DAY), time: "15:30:00", location: "Campo do Rival", notes: "", opponent: "Os Vizinhos FC", home_away: "fora", squad: [], recurring: false, days: null, created_by: EU },
  ];
  const presencas = [];
  let seq = 100;

  // devolve [estado, corpo] para um pedido (método, caminho depois do host, corpo JSON)
  function responder(metodo, caminho, corpo) {
    const p = caminho.split("?")[0];
    const q = caminho.includes("?") ? caminho.slice(caminho.indexOf("?") + 1) : "";
    if (p.startsWith("/auth/v1/token")) return [200, { access_token: "token-demo", user: { id: EU } }];
    if (p === "/rest/v1/profiles" && /id=eq\./.test(q)) return [200, [{ id: EU, name: "A. L.", is_admin: false }]];
    if (p.endsWith("/rpc/get_my_profile")) return [200, [{ id: EU, name: "A. L.", is_admin: false }]];
    if (p.endsWith("/rpc/get_team_profiles")) return [200, perfis];
    if (p === "/rest/v1/team_members" && /user_id=eq\./.test(q)) return [200, [{ team_id: equipa.id }]];
    if (p === "/rest/v1/team_members") return [200, membros];
    if (p === "/rest/v1/teams") return [200, [equipa]];
    if (p === "/rest/v1/fine_types") return [200, tipos];
    if (p === "/rest/v1/fines") {
      if (metodo === "POST") { const f = { id: "f" + ++seq, created_at: iso(Date.now()), paid_at: null, ...corpo }; multas.unshift(f); return [201, [f]]; }
      return [200, multas];
    }
    if (p === "/rest/v1/expenses") return [200, despesas];
    if (p === "/rest/v1/trainings") return [200, treinos];
    if (p === "/rest/v1/presences") {
      if (metodo === "POST" || metodo === "PATCH") { const r = { id: "p" + ++seq, ...corpo }; presencas.push(r); return [201, [r]]; }
      return [200, presencas];
    }
    if (p.startsWith("/functions/v1/send-team-push")) return [200, { ok: true }]; // o push do vídeo é uma imagem simulada, não é enviado
    return [200, []]; // tudo o resto (cartões, ausências, pedidos de perfil...) vazio
  }
  return { responder, equipa, membros, EU };
}
module.exports = { criarBackend };

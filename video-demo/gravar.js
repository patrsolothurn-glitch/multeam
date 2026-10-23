// Grava a Multeam (docs/index.html + docs/app.js reais) com dados simulados e gera o vídeo de demonstração.
//   node gravar.js
// Sem áudio. Nada sai para a rede: todos os pedidos ao Supabase são respondidos por mock-backend.js.
// Saída: saida/demo-completo.mp4 (fora do git), demo-leve.mp4 e poster.jpg (versão para partilhar).
const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { criarBackend } = require("./mock-backend");

const DOCS = path.join(__dirname, "..", "docs");
const SAIDA = path.join(__dirname, "saida");
const FRAMES = path.join(SAIDA, "frames");
const PHONE = { x: 214 + 14, y: 440 + 14, s: 1.6 }; // posição do ecrã e zoom da app no palco (ver stage.html)
// ficheiros UMD do React (o package.json do React não exporta o caminho diretamente)
const umd = (pacote, ficheiro) => path.join(path.dirname(require.resolve(pacote + "/package.json")), "umd", ficheiro);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const MIME = { ".js": "text/javascript", ".html": "text/html", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".xml": "application/xml", ".txt": "text/plain" };

(async () => {
  fs.rmSync(FRAMES, { recursive: true, force: true });
  fs.mkdirSync(FRAMES, { recursive: true });
  const backend = criarBackend();
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ["--no-sandbox", "--force-color-profile=srgb"] });
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1, locale: "pt-PT", serviceWorkers: "block" });
  const fora = []; // pedidos bloqueados (devem ser zero)
  await ctx.route("**/*", async (route) => {
    const rq = route.request(); const u = rq.url();
    const J = (st, b) => route.fulfill({ status: st, contentType: "application/json", headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*" }, body: JSON.stringify(b) });
    if (u === "https://demo.invalid/stage.html") return route.fulfill({ status: 200, contentType: "text/html", body: fs.readFileSync(path.join(__dirname, "stage.html")) });
    if (u.startsWith("https://multeam.ch/")) { // a app publicada, lida dos ficheiros locais
      const f = decodeURIComponent(u.slice("https://multeam.ch/".length).split("?")[0]) || "index.html";
      const fp = path.join(DOCS, f);
      if (fp.startsWith(DOCS) && fs.existsSync(fp) && fs.statSync(fp).isFile()) return route.fulfill({ status: 200, contentType: MIME[path.extname(fp)] || "application/octet-stream", body: fs.readFileSync(fp) });
      return route.fulfill({ status: 404, body: "" });
    }
    if (/unpkg\.com\/react@18/.test(u)) return route.fulfill({ status: 200, contentType: "text/javascript", body: fs.readFileSync(umd("react", "react.production.min.js")) });
    if (/unpkg\.com\/react-dom@18/.test(u)) return route.fulfill({ status: 200, contentType: "text/javascript", body: fs.readFileSync(umd("react-dom", "react-dom.production.min.js")) });
    if (/\.supabase\.co/.test(u)) { // backend simulado
      if (rq.method() === "OPTIONS") return route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*" } });
      let corpo = null; try { corpo = rq.postData() ? JSON.parse(rq.postData()) : null; } catch (e) {}
      const caminho = u.replace(/^https:\/\/[^/]+/, "");
      const [st, b] = backend.responder(rq.method(), caminho, corpo);
      return J(st, b);
    }
    fora.push(u.slice(0, 60)); return route.abort(); // nada mais sai
  });

  const page = await ctx.newPage();
  await page.addInitScript(() => { try { delete window.PushManager; } catch (e) {} }); // sem push real
  await page.goto("https://demo.invalid/stage.html");
  const app = page.frames().find((f) => f.url().startsWith("https://multeam.ch/"));
  if (!app) throw new Error("a app não carregou no palco");

  // entra (por baixo do cartão de abertura, ainda não está a gravar)
  await app.waitForSelector("input[type=email]", { timeout: 20000 });
  await app.fill("input[type=email]", "demo@exemplo.invalid");
  await app.fill("input[type=password]", "demo-demo");
  await app.getByRole("button", { name: /^Entrar/ }).last().evaluate((el) => el.click()); // clique de DOM (a app está ampliada dentro da moldura)
  await app.waitForSelector('button:has-text("Atribuir multa")', { timeout: 20000 });
  await sleep(800);

  // ---------- gravação (screencast: fotogramas nítidos com carimbo de tempo) ----------
  const cdp = await ctx.newCDPSession(page);
  const frames = [];
  cdp.on("Page.screencastFrame", (ev) => { frames.push({ data: ev.data, ts: ev.metadata.timestamp }); cdp.send("Page.screencastFrameAck", { sessionId: ev.sessionId }).catch(() => {}); });
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 92, maxWidth: 1080, maxHeight: 1920, everyNthFrame: 1 });
  const T0 = Date.now();
  const em = async (ms) => { const d = T0 + ms - Date.now(); if (d > 0) await sleep(d); };
  await page.evaluate(() => { document.body.style.opacity = 0.999; requestAnimationFrame(() => (document.body.style.opacity = 1)); });

  const toque = async (loc) => { // mostra o toque no sítio certo do palco
    const r = await loc.evaluate((el) => { const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; });
    await page.evaluate(([x, y]) => window.palco.toque(x, y), [PHONE.x + r.x * PHONE.s, PHONE.y + r.y * PHONE.s]);
  };
  const clicar = async (loc) => { await toque(loc); await sleep(280); await loc.evaluate((el) => el.click()); };
  const separador = (nome) => app.locator('div[style*="fixed"] button', { hasText: nome }).first();
  const rolar = (seletorTexto, margem) => app.evaluate(([t, m]) => {
    const root = document.getElementById("root");
    const el = [...document.querySelectorAll("p,span,div")].find((e) => e.children.length === 0 && new RegExp(t, "i").test(e.textContent));
    const topo = el ? el.getBoundingClientRect().top + root.scrollTop - m : 0;
    root.scrollTo({ top: Math.max(0, topo), behavior: "smooth" });
  }, [seletorTexto, margem]);
  const topo = () => app.evaluate(() => document.getElementById("root").scrollTo({ top: 0, behavior: "smooth" }));

  // Cena 1 (0-4 s): abertura (cartão já visível)
  await em(3800); await page.evaluate(() => window.palco.cartao("intro", false));

  // Cena 2 (4-10 s): atribuir uma multa
  await em(4100); await page.evaluate(() => window.palco.legenda("Atribui a multa <em>em segundos</em>"));
  await em(4900); await clicar(app.locator('button:has-text("Atribuir multa")').first());
  await em(6000); const sel = app.locator("select").first(); await toque(sel); await sleep(250);
  await sel.selectOption({ label: "T. P." });
  await em(7100); await clicar(app.locator('[role=button]', { hasText: "Atraso ao treino" }).first());
  await em(8000); const atribuir = app.getByRole("button", { name: /Atribuir 5€/ }); await atribuir.evaluate((el) => el.scrollIntoView({ block: "center", behavior: "smooth" }));
  await em(8700); await clicar(atribuir);
  await em(9900); await page.evaluate(() => window.palco.legenda(""));

  // Cena 3 (10-15 s): a notificação (imagem simulada, ecrã de bloqueio)
  await em(10100); await page.evaluate(() => { window.palco.legenda("O jogador recebe <em>logo a notificação</em>"); window.palco.bloqueio(true); });
  await em(10700); await page.evaluate(() => window.palco.notificar());
  await em(14700); await page.evaluate(() => window.palco.legenda(""));

  // Cena 4 (15-21 s): quem ainda deve
  await em(15000); await page.evaluate(() => { window.palco.bloqueio(false); window.palco.legenda("Vê <em>quem ainda deve</em>"); });
  await em(15900); await rolar("^devedores$", 70);
  await em(20800); await page.evaluate(() => window.palco.legenda(""));

  // Cena 5 (21-26 s): a caixa da equipa
  await em(21000); await page.evaluate(() => window.palco.legenda("A caixa da equipa, <em>sempre à vista</em>"));
  await em(21700); await clicar(separador("Caixa"));
  await em(24000); await app.evaluate(() => { const r = document.getElementById("root"); r.scrollTo({ top: r.scrollTop + 360, behavior: "smooth" }); });
  await em(25800); await page.evaluate(() => window.palco.legenda(""));

  // Cena 6 (26-32 s): presenças no treino
  await em(26000); await page.evaluate(() => window.palco.legenda("Presenças no treino: <em>Sim ou Não</em>"));
  await em(26600); await clicar(separador("Início")); await sleep(500); await topo();
  await em(28800); await clicar(app.getByRole("button", { name: /Sim/ }).first());
  await em(30200); await clicar(separador("Treinos"));
  await em(31800); await page.evaluate(() => window.palco.legenda(""));

  // Cena 7 (32-37,5 s): final (pelo menos 4 s)
  await em(32000); await page.evaluate(() => window.palco.cartao("outro", true));
  await em(37500);
  const fim = Date.now() / 1000;
  await cdp.send("Page.stopScreencast");
  await browser.close();

  // ---------- montagem ----------
  frames.forEach((f, i) => fs.writeFileSync(path.join(FRAMES, "f" + String(i).padStart(5, "0") + ".jpg"), Buffer.from(f.data, "base64")));
  let lista = "";
  frames.forEach((f, i) => { const seg = (i + 1 < frames.length ? frames[i + 1].ts : fim) - f.ts; lista += `file 'f${String(i).padStart(5, "0")}.jpg'\nduration ${Math.max(0.001, seg).toFixed(4)}\n`; });
  lista += `file 'f${String(frames.length - 1).padStart(5, "0")}.jpg'\n`;
  fs.writeFileSync(path.join(FRAMES, "lista.txt"), lista);
  const ff = (...a) => { a.splice(a.length - 1, 0, "-map_metadata", "-1"); execFileSync("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", ...a], { stdio: "inherit" }); }; // sem metadados no ficheiro (opção antes do ficheiro de saída)
  const completo = path.join(SAIDA, "demo-completo.mp4");
  ff("-f", "concat", "-safe", "0", "-i", path.join(FRAMES, "lista.txt"), "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-movflags", "+faststart", "-an", completo);
  ff("-i", completo, "-vf", "scale=720:1280:flags=lanczos,format=yuv420p", "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-maxrate", "3200k", "-bufsize", "6400k", "-movflags", "+faststart", "-an", path.join(__dirname, "demo-leve.mp4"));
  ff("-ss", process.env.POSTER_T || "1.5", "-i", completo, "-frames:v", "1", "-vf", "scale=540:960:flags=lanczos", "-q:v", "3", path.join(__dirname, "poster.jpg"));

  if (!process.env.GUARDAR_FOTOGRAMAS) fs.rmSync(FRAMES, { recursive: true, force: true }); // só ocupam espaço (GUARDAR_FOTOGRAMAS=1 mantém)
  const mb = (f) => (fs.statSync(f).size / 1048576).toFixed(2) + " MB";
  console.log(`fotogramas: ${frames.length} | pedidos bloqueados fora do simulado: ${fora.length}${fora.length ? " " + JSON.stringify([...new Set(fora)]) : ""}`);
  console.log(`completo: ${mb(completo)} | leve: ${mb(path.join(__dirname, "demo-leve.mp4"))} | poster: ${mb(path.join(__dirname, "poster.jpg"))}`);
})().catch((e) => { console.error(e); process.exit(1); });

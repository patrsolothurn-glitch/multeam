# Vídeo de demonstração da Multeam

Vídeo vertical (1080x1920, ~37 s), **sem áudio**, só com legendas. Mostra a app com **dados de exemplo**:
equipa inventada ("Os Invencíveis FC"), jogadores só com iniciais, valores pequenos. A legenda "Dados de exemplo" está no canto durante todo o vídeo.

## O que há aqui
| Ficheiro | O que é |
|---|---|
| `demo-leve.mp4` | Versão leve para partilhar (WhatsApp, redes), 720x1280 |
| `poster.jpg` | Imagem de capa |
| `gravar.js` | Grava a app e gera os vídeos |
| `mock-backend.js` | Respostas simuladas (substitui o Supabase) |
| `stage.html` | Cena do vídeo: moldura, legendas, ecrã de bloqueio, abertura e fecho |
| `saida/` | **Fora do git**: versão completa `demo-completo.mp4` (1080x1920) e fotogramas de trabalho |

## Como é gravado (nada real é tocado)
- O script abre o `docs/index.html` e o `docs/app.js` reais, servidos a partir dos ficheiros locais.
- Todos os pedidos ao Supabase são respondidos por `mock-backend.js`. Nenhum pedido sai para a rede (o script conta os que seriam bloqueados e deve dizer 0).
- O utilizador, a equipa e os jogadores são inventados. Não há contas, emails, telefones, fotos nem chaves reais.
- A notificação "Recebeste uma multa!" é uma **imagem simulada** num ecrã de bloqueio (hora fixa 18:00, sem operador nem rede). Não é um push real.
- O vídeo não altera `src/` nem `docs/`.

## Como gerar de novo
Precisa de Node, `ffmpeg` e do Chromium do Playwright.

```
cd video-demo
npm install
node gravar.js
```
Se o Chromium não for encontrado, define `CHROMIUM_PATH` com o caminho do executável. `POSTER_T` (segundos) escolhe o fotograma da capa.

Para gravar a app atual, corre primeiro `node build.js` na raiz (gera `docs/app.js`).

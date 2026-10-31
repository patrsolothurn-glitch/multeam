#!/bin/bash
# Bateria completa. Uso: PW=<pasta dos testes pw> bash verificador/full.sh > bateriaNN.txt 2>&1
# Depois: python3 verificador/resumo.py bateriaNN.txt verificador/full.sh
PW="${PW:?define PW=pasta dos testes (a que tem run-all.sh)}"; AQUI="$(cd "$(dirname "$0")" && pwd)"
cd "$PW"
bash run-all.sh dom-passo2-app dom-convite dom-opiniao dom-admin dom-admin-main dom-admin-users dom-admin-users2 dom-assumir-app dom-assumir-componentes dom-erros-pt dom-escritas dom-modo-admin dom-foto-ro dom-historico-claims dom-listas dom-despesas dom-login-sobre dom-sobre dom-contacto dom-pergunta-claims dom-pergunta-app dom-claims-vista dom-claims-geral dom-video dom-video-sw dom-botao-video dom-nomes-equipa dom-desporto dom-data-eventos dom-posicao-outro dom-membro-rotulo dom-admin-linha dom-emojis-equipa dom-emojis-admin dom-sobre-linha dom-botao-atualizar dom-sessao dom-icone-membro dom-moedas dom-stats dom-stats-crescimento dom-equipas-local dom-ordem2 dom-emoji-tipos dom-foto-grande dom-gesto-3-toques dom-icone-multas dom-multa-botoes dom-multeam-icone dom-passo1 dom-passo1-app dom-passo2 dom-sem-equipa dom-sem-resposta dom-voltar-equipas unit-errpt unit-icones unit-passo1 dom-sw-offline dom-tatica dom-sobre-novidade dom-novidade-tatica dom-cidade-limpa dom-estado dom-ranking-pago dom-presenca-patch
mkdir -p logs; echo -n "audit-consola: "; timeout 900 node audit-consola.js 2>&1 | tee logs/audit-consola.log | tail -1
echo -n "audit-ui: "; timeout 900 node audit-ui.js 2>&1 | tee logs/audit-ui.log | tail -1
echo -n "audit-ui junho: "; AUDIT_DATE=2027-06-15T10:00:00Z timeout 900 node audit-ui.js 2>&1 | tee logs/audit-ui-junho.log | tail -1
cd ../r; for f in t8 t11 t13 t15 t17 t19; do timeout 90 node $f.js > ../pw/logs/$f.log 2>&1; echo -n "$f final: "; bash "$AQUI/tfinal.sh" $f ../pw/logs/$f.log; done
echo TUDO-FIM

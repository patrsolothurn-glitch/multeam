#!/bin/bash
# Linha final de um teste t*, para o resumo.py. Uso: tfinal.sh <nome> <registo>
# A linha "[erro original] ..." só é ignorada no t13 e só se o MESMO registo tiver a linha exata "OK 3"
# (o t13 provoca esse erro de propósito e imprime-o no stderr; a ordem em relação ao "OK 3" varia).
# No t15 aceita-se se o registo tiver a linha "OK 5" e, além dela, só as 4 linhas "[erro original] fetch failed" (qualquer outra linha = falha).
# Em qualquer outro teste, ou no t13 sem "OK 3", essa linha fica e o resumo.py conta-a como falha.
nome="$1"; log="$2"
filtrado=$(grep -v "^    at \|Warning" "$log")
if [ "$nome" = "t13" ] && grep -qx "OK 3" "$log"; then
  printf '%s\n' "$filtrado" | grep -v "^\[erro original\]" | tail -1 | cut -c1-60
elif [ "$nome" = "t15" ] && [ "$(printf '%s\n' "$filtrado" | grep -cx "OK 5")" = "1" ] && [ "$(printf '%s\n' "$filtrado" | grep -cx "\[erro original\] fetch failed")" = "4" ] && [ "$(printf '%s\n' "$filtrado" | grep -c .)" = "5" ]; then
  # t15: a ordem entre a linha "OK 5" e as 4 linhas "[erro original] fetch failed" varia; exige-se a linha "OK 5" e NENHUMA outra além dessas 4 (qualquer outra linha = falha)
  echo "OK 5"
else
  printf '%s\n' "$filtrado" | tail -1 | cut -c1-60
fi

# Verificador da bateria

Ficheiros do verificador (sem dados pessoais nem segredos). Os testes em si (`pw/`, `r/`) não estão neste repositório.

- `full.sh`: a bateria completa (70 testes: `dom-*` e `unit-*`, auditorias de consola e de UI, `t8 t11 t13 t15 t17 t19`). `PW=<pasta pw> bash verificador/full.sh > bateria.txt 2>&1`
- `resumo.py`: lê a bateria e diz se está toda verde (lista de testes esperados lida do `full.sh`; falha se faltar algum, se algum tiver falhas ou se `TUDO-FIM` não aparecer). `python3 verificador/resumo.py bateria.txt verificador/full.sh`
- `tfinal.sh`: linha final de cada `t*`. A linha `[erro original] …` só é ignorada no `t13` e só se o mesmo registo tiver a linha exata `OK 3`; em qualquer outro teste, ou sem `OK 3`, conta como falha.
- `teste-verificador.py`: testes do próprio verificador (um caso que ignora e vários que falham). `python3 verificador/teste-verificador.py`

- `OBSOLETOS.md`: testes que ficam fora da bateria de propósito, com o motivo.

#!/usr/bin/env python3
# Lê uma bateria (bateriaNN.txt) e diz, sem margem para dúvidas, se está toda verde.
import re,sys
f=sys.argv[1]
txt=open(f,encoding='utf-8').read().split('\n')
sh=open(sys.argv[2] if len(sys.argv)>2 else 'full.sh',encoding='utf-8').read()
base=['dom-test','dom-plurais','dom-writes','dom-datas','dom-datas-bruto','dom-abs','dom-membro','dom-ordem','dom-caixa']
args=re.search(r'bash run-all\.sh (.*)',sh).group(1).split()
esperados=base+args
vistos={};problemas=[]
for l in txt:
    m=re.match(r'^((?:dom|unit)-[a-z0-9-]+): ?(.*)$',l)
    if not m: continue
    n,r=m.group(1),m.group(2)
    vistos[n]=r
    p=None
    a=re.search(r'TOTAL\s+(\d+)\s+·\s+passaram\s+(\d+)\s+·\s+falharam\s+(\d+)',r)
    b=re.search(r'(\d+)\s+(?:ok|passaram),\s*(\d+)\s+(?:falhas|falharam)',r)
    if a: p=(int(a.group(2)),int(a.group(3)))
    elif b: p=(int(b.group(1)),int(b.group(2)))
    if p is None: problemas.append(f"{n}: SEM RESULTADO LEGÍVEL -> {r[:60]!r}")
    elif p[1]!=0: problemas.append(f"{n}: {p[1]} FALHA(S) ({p[0]} passaram)")
for n in esperados:
    if n not in vistos: problemas.append(f"{n}: EM FALTA (não aparece na bateria)")
extra=[n for n in vistos if n not in esperados and not (n=='dom-writes-main')]
for l in txt:
    m=re.match(r'^(audit-consola|audit-ui|audit-ui junho): ?(.*)$',l)
    if m:
        ok=('SEM AVISOS NEM ERROS' in m.group(2)) if m.group(1)=='audit-consola' else ('SEM PROBLEMAS DE UI' in m.group(2))
        if not ok: problemas.append(f"{m.group(1)}: {m.group(2)[:60]!r}")
        vistos[m.group(1)]=m.group(2)
for t in ['t8','t11','t13','t15','t17','t19']:
    l=next((x for x in txt if x.startswith(f'{t} final: ')),None)
    if l is None: problemas.append(f"{t} final: EM FALTA")
    elif not l.split(': ',1)[1].startswith('OK'): problemas.append(f"{t} final: {l[:70]!r}")
if not any(x=='TUDO-FIM' for x in txt): problemas.append("TUDO-FIM em falta (a bateria não chegou ao fim)")
for a_ in ['audit-consola','audit-ui','audit-ui junho']:
    if a_ not in vistos: problemas.append(f"{a_}: EM FALTA")
n_dom=sum(1 for n in vistos if n.startswith(('dom-','unit-')))
print(f"{f}: {n_dom} testes (dom-* e unit-*) lidos, {len(esperados)} esperados; extra={extra}")
if problemas:
    print("NÃO ESTÁ TODA VERDE:");[print("  -",p) for p in problemas];sys.exit(1)
print("TODA VERDE: todos os testes esperados presentes, 0 falhas, auditorias e t* OK")

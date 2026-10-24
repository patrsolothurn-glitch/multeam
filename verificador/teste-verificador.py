#!/usr/bin/env python3
# Testes do próprio verificador (tfinal.sh + resumo.py). Uso: python3 verificador/teste-verificador.py
# Constrói uma bateria sintética toda verde e troca só a linha final de um teste t* por uma saída real do tfinal.sh.
import os,re,subprocess,sys,tempfile
AQUI=os.path.dirname(os.path.abspath(__file__))
FULL=os.path.join(AQUI,'full.sh')
sh=open(FULL,encoding='utf-8').read()
base=['dom-test','dom-plurais','dom-writes','dom-datas','dom-datas-bruto','dom-abs','dom-membro','dom-ordem','dom-caixa']
nomes=base+re.search(r'bash run-all\.sh (.*)',sh).group(1).split()
T=['t8','t11','t13','t15','t17','t19']
OKS={'t8':'OK','t11':'OK 1','t13':'OK 3','t15':'OK 5','t17':'OK','t19':'OK'}
def tfinal(nome,linhas):
    with tempfile.NamedTemporaryFile('w',suffix='.log',delete=False,encoding='utf-8') as f:
        f.write('\n'.join(linhas)+'\n');p=f.name
    try: return subprocess.run(['bash',os.path.join(AQUI,'tfinal.sh'),nome,p],capture_output=True,text=True).stdout.strip()
    finally: os.unlink(p)
def bateria(finais):
    L=[f'{n}: 1 ok, 0 falhas' for n in nomes]
    L+=['audit-consola: SEM AVISOS NEM ERROS','audit-ui: SEM PROBLEMAS DE UI','audit-ui junho: SEM PROBLEMAS DE UI']
    L+=[f'{t} final: {finais.get(t,OKS[t])}' for t in T]+['TUDO-FIM']
    return '\n'.join(L)+'\n'
def resumo(txt):
    with tempfile.NamedTemporaryFile('w',suffix='.txt',delete=False,encoding='utf-8') as f:
        f.write(txt);p=f.name
    try:
        r=subprocess.run([sys.executable,os.path.join(AQUI,'resumo.py'),p,FULL],capture_output=True,text=True);return r.returncode,r.stdout
    finally: os.unlink(p)
falhas=0
def ok(nome,cond,det=''):
    global falhas
    print(('OK     ' if cond else 'FALHOU '),nome,('' if cond else '-> '+str(det)))
    if not cond: falhas+=1
ERR='[erro original] fetch failed'
# controlo: bateria sintética toda verde
rc,out=resumo(bateria({}));ok('controlo: bateria sintética toda verde',rc==0 and 'TODA VERDE' in out,out)
# 1) IGNORA: t13 com "OK 3" e a linha de erro por último (qualquer ordem)
for ordem,ls in [('erro antes e depois',[ERR,'OK 3',ERR]),('erro depois',['OK 3',ERR]),('erro antes',[ERR,'OK 3'])]:
    f=tfinal('t13',ls);rc,out=resumo(bateria({'t13':f}))
    ok(f'IGNORA: t13 com "OK 3" e "[erro original]" ({ordem}) -> "{f}" e bateria verde',f=='OK 3' and rc==0,(f,out))
# 2) FALHA: t13 sem "OK 3"
f=tfinal('t13',[ERR]);rc,out=resumo(bateria({'t13':f}))
ok('FALHA: t13 só com "[erro original]" e sem "OK 3" conta como falha',rc!=0 and 't13 final' in out,(f,out))
f=tfinal('t13',['OK 30',ERR]);rc,out=resumo(bateria({'t13':f}))
ok('FALHA: t13 com "OK 30" (não é a linha exata "OK 3") e "[erro original]" conta como falha',rc!=0,(f,out))
# 3) FALHA: noutro teste a linha conta sempre
for t in ['t8','t11','t15','t17','t19']:
    f=tfinal(t,[OKS[t],ERR]);rc,out=resumo(bateria({t:f}))
    ok(f'FALHA: {t} com "{OKS[t]}" e "[erro original]" no fim conta como falha',rc!=0 and f'{t} final' in out,(f,out))
# 4) FALHA: t13 com "OK 3" mas um erro real por último
f=tfinal('t13',[ERR,'OK 3','Error: boom']);rc,out=resumo(bateria({'t13':f}))
ok('FALHA: t13 com "OK 3" e um erro real depois conta como falha',rc!=0 and f=='Error: boom',(f,out))
print('\nVERIFICADOR OK' if not falhas else f'\n{falhas} FALHA(S) NO VERIFICADOR');sys.exit(1 if falhas else 0)

# Regras permanentes — Multeam

Valem em todas as sessões. O repositório é PÚBLICO.

## Projeto
- PWA de gestão de equipa de futebol (multeam.ch).
- `build.js` lê `src/multeam.jsx` e `build-number.txt` e escreve `docs/app.js`, `docs/index.html` e `docs/sw.js`. Os commits tocam sempre em `src/` e `docs/` juntos.
- Nunca editar `docs/` à mão. A exceção é `docs/sobre/`, uma página estática feita à mão, que se edita normalmente.
- Não tem nada a ver com a Carvalho Suite (repositório, Supabase e código separados).

## Regra geral
- Só melhorar e acrescentar; não remover nada.
- Não correr SQL. Entregar o SQL ao dono do projeto com a etiqueta "SQL para correr", numerado, com o SQL para reverter.
- Nunca Revert (salvo autorização explícita para um PR concreto).
- Não mexer em visibilidade, Pages, domínio nem Actions.
- Sempre que se cria algo, implementar também editar e apagar.
- Verificar no código antes de mexer.
- Atenção a bigint/uuid nas RPCs, ao fuso horário nas datas (Europe/Zurich) e ao `editMember` a trocar `userId` com `id`.

## Autorização
- Só fundir uma tarefa se o dono do projeto a autorizar por escrito nessa tarefa ("Autorizo.").
- Sem isso, preparar tudo e abrir o PR, sem fundir.

## Testes
- Nunca enfraquecer um teste. Se um mudar, mostrar antes→depois e guardar a cópia original em `pw/orig-ro/`.
- O `dom-sw-offline` só pode falhar se falhar igual na main (2 corridas na main e 2 no ramo). Não o alterar.

## Fundir (se faltar uma condição, não fundir)
- Main no SHA esperado e ponta exatamente a testada.
- Bateria completa sem interrupção sobre a ponta final.
- PR limpo; diff só em `src/` e `docs/`.
- Comentário "Fundido pelo Claude Code com autorização do Patricio (data/hora, hora da Suíça)".
- Squash; deploy verde e main igual ao testado.
- Alterações da app: não fundir de segunda 06:00 a 22:00 (hora da Suíça). Alterações só da /sobre/: qualquer hora.

## Continuidade
- Guardar o estado num ficheiro fora do repositório a cada passo; push do ramo a cada commit.
- Se o container reiniciar ou a bateria morrer, relançar a bateria inteira sobre a mesma ponta, depois de confirmar que a ponta e a main não mudaram.
- Se o limite de uso acabar, criar uma tarefa agendada para retomar quando reiniciar (sessão: cerca de 5 horas; semanal: segunda 06:00, hora da Suíça).
- Não fazer trabalho extra enquanto uma bateria corre.

## Relatório final
- SHA fundido, link do PR, o que foi verificado e o que NÃO foi verificado.
- Terminar com "Autorização terminada." e parar.

## Dados pessoais
- Nunca incluir dados pessoais (nomes, telefones, e-mails, códigos de convite, chaves) em código, commits, PRs, imagens ou neste ficheiro.

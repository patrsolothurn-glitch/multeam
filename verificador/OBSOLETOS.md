# Testes fora da bateria (obsoletos) e porquê

Verificado numa corrida isolada de cada um contra a `main` (build 318). Os testes vivem fora do repositório.

| Teste | Motivo |
|---|---|
| `dom-selo-superadmin` | Testa o selo amarelo "SUPER ADMIN" no painel de gestão (`data-super-admin-badge`), que foi retirado de propósito e já não existe no código. Os 30 casos "o selo aparece" falham por isso; os 36 casos "o selo não aparece" passam. |
| `dom-listas-dbg` | Cópia de depuração mais antiga do `dom-listas` (que está na bateria). Espera a mensagem antiga `row-level security` e monta o ecrã Geral sem a pertença do utilizador, por isso nem sequer chega ao botão "Ver membros". |
| `dom-writes-main` | Variante do `dom-writes` com as mensagens da `main` antiga (só serve para comparar com versões anteriores). O `dom-writes` atual está na bateria. |
| `r/t.js` | Procura o componente `TeamSettingsSection`, que foi substituído por `TeamDataSection`. |
| `r/t7.js` | Usa `setUnavailable`, que foi substituído pelas ausências (`setMemberUnavail`/ausências). |
| `r/t9.js`, `r/t14.js` | Testam o antigo campo único de indisponibilidade ("Guardar", "Sem nota", "Alterar"), substituído pelas ausências (cobertas por `dom-abs`). |
| `r/t16.js` | Espera os títulos antigos "Treinadores (1)" / "Diretores (2)", substituídos por "Administradores / Equipa técnica / Jogadores" (#22). |
| `*.ANTIGO.js`, `*.ORIGINAL.js`, `*.EDITADO.js`, `dbg-*.js` | Cópias de segurança e scripts de depuração; não são testes. |

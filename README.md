# Power Fit Studio • V16

Aplicativo mobile-first em React + Vite, preparado como PWA para Android, iOS e navegadores.

## Experiência incluída
- Aluno: início, agendamento, vagas, lista de espera, meus treinos, ficha de treino, evolução, avaliações, pagamentos, perfil, mensagens, conquistas e feedback pós-treino.
- Recepção: dashboard, agenda por horário, alunos agendados, presença/falta, sugestão inteligente de professor, professores/escala, capacidade dinâmica, alunos, pagamentos, Day Use/experimental, lista de espera, relatórios e configurações.
- Regra de professor: entre os professores disponíveis e com capacidade, sugere o profissional com maior histórico de treinos com o aluno. A recepção pode alterar manualmente.
- Capacidade: 4 alunos por professor por horário.
- Inadimplência: bloqueia novos agendamentos até identificação do pagamento.
- PWA: manifest + service worker.

## Rodar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

O projeto mantém `base: './'` e workflow para GitHub Pages.

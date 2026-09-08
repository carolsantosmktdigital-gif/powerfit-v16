# Power Fit Studio • V30

Aplicativo mobile-first/PWA para a operação da Power Fit Studio.

## Principais fluxos
- Aluno: agenda, lista de espera, pagamentos, comprovante, evolução, treino e desafio do mês.
- Recepção: dashboard, presenças/faltas, alunos, equipe/escala, pagamentos, lista de espera e retenção.
- Professor: agenda e acompanhamento dos alunos.

## Regras de negócio desta versão
- Inadimplência após 2 dias de atraso.
- Agendamento liberado somente após confirmação do pagamento pela recepção.
- Comprovante pode ser enviado pelo app ou via WhatsApp.
- Aluno não escolhe professor e não vê a lógica de distribuição.
- Sugestão interna prioriza o professor disponível com maior histórico com o aluno, respeitando 4 alunos por professor.
- Cancelamento/reagendamento gera aviso persistente na recepção até ser marcado como Lido.
- Convocação da lista de espera abre WhatsApp com prazo de 20 minutos.
- Retenção registra data/hora do acionamento e observação do retorno.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Produção
```bash
npm run build
```

O projeto está preparado para GitHub Pages via GitHub Actions e para instalação como PWA em Android/iOS.

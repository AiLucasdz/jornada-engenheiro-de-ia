# Plano de 12 semanas

**Carga de referência:** 5 horas por semana, sendo 4 de prática e 1 de teoria. Em cada sessão de 1 hora: aproximadamente 48 minutos para construir/testar e 12 para estudar ou registrar o aprendizado. A leitura deve responder a uma decisão do projeto.

O projeto é cumulativo. Não comece um projeto novo a cada módulo: faça o mesmo agente ganhar confiabilidade.

| Semana | 80% prática: entrega da semana | 20% teoria: estudo guiado |
| --- | --- | --- |
| 1 — problema e fluxo | Escolha um processo real, converse com possíveis usuários, desenhe entrada → decisão → ação → resultado e liste exceções. Preencha a ficha do projeto. | Pensamento sistêmico, variáveis, estado, condições; introdução do material de História da IA. |
| 2 — negócio e Lean | Meça a linha de base, formule uma hipótese falsificável e desenhe o menor piloto que testa valor. | Proposta de valor, ROI básico, MVP e construir–medir–aprender. |
| 3 — produto e ágil | Monte um Kanban com backlog priorizado, três histórias com critérios de aceitação e uma revisão semanal de entrega. | Kanban, objetivo de produto, sprint, revisão e retrospectiva; escolha a cadência adequada à equipe. |
| 4 — fundamentos de IA | Compare uma solução de regras simples com uma solução que usa LLM para a mesma etapa; registre onde cada uma falha. | Rede neural, treinamento e inferência, tokens, Transformer, contexto e alucinação. Consulte História da IA e o bloco 1 da Base Técnica. |
| 5 — integrações | Faça um evento entrar por formulário ou webhook, valide o payload e registre sucesso/erro. | HTTP, GET/POST, JSON, API, autenticação, status 401/404/429/500. |
| 6 — dados e estado | Salve entidades, eventos e decisões em um banco; reconstrua o histórico de uma execução. | Tabelas, relações, SQL básico, estado, acesso e dados sensíveis. |
| 7 — primeiro agente | Conecte o modelo a uma ferramenta de leitura; dê um objetivo delimitado, limite de passos e condição de parada. | Prompt, contexto, RAG, tool use e diferença entre fluxo determinístico e agente. Consulte os blocos 2 e 3 da Base Técnica. |
| 8 — automação confiável | Conecte uma ação real em ambiente de teste; simule chamada duplicada, indisponibilidade e repetição sem efeito duplo. | Orquestração, fila, retry, idempotência, permissões e intervenção humana. |
| 9 — avaliação | Monte casos normais, ambíguos e adversos; rode a mesma bateria após cada mudança. | Testes de integração, evals, precisão da resposta versus resolução do usuário. |
| 10 — observabilidade | Registre entradas, chamadas de ferramenta, decisões, erros, latência e custo por tarefa. Investigue ao menos uma falha real. | Logs, traces, métricas, alertas e segurança contra instruções em conteúdo externo. |
| 11 — piloto | Rode com poucos usuários ou dados autorizados, com supervisão e possibilidade de desligar. Compare com a linha de base. | Git, deploy, variáveis de ambiente, secrets, limites de acesso e custo operacional. |
| 12 — melhoria e apresentação | Faça uma revisão com dados, corrija o gargalo principal e apresente fluxo, demonstração, resultados e limites. | Retrospectiva, decisão de continuar/ajustar/parar e comunicação de valor. |

## Ritmo semanal

- **Segunda:** escolher a menor entrega que move a hipótese.
- **Terça a quinta:** construir, testar e registrar descobertas.
- **Sexta:** executar os casos de avaliação, comparar métricas e ajustar o backlog.
- **Ao longo da semana:** ler e conversar sobre o conceito que apareceu na prática, sem acumular teoria desconectada.

## Portas de qualidade

Avance por evidência, não pelo calendário. Se a semana 5 não produz um evento verificável, corrija a integração antes de adicionar um agente. Se a semana 9 revela erros frequentes, reduza o escopo e melhore o sistema antes do piloto.

**Opcional depois da semana 12:** comparar agente único com múltiplos agentes, adicionar filas ou RAG mais elaborado, ou integrar o protótipo a uma arquitetura maior. Só aumente a complexidade quando um problema medido justificar.

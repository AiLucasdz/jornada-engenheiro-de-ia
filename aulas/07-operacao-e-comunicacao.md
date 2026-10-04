# 07 · Coloque em uso e explique suas decisões

[← Aula anterior](06-avaliacao-e-confiabilidade.md) · [Aulas](README.md) · [Plano completo](../docs/trilha-12-semanas.md)

**Quando usar:** semanas 11–12. **Entrega:** um piloto supervisionado e uma revisão com demonstração, resultados, limitações e próximos passos.

Operar um agente é acompanhar o que acontece quando entradas, fontes e serviços mudam. O resultado final desta trilha reúne o sistema funcionando e a capacidade de explicar por que ele foi desenhado assim.

## Do protótipo ao ambiente de uso

O **deploy** disponibiliza uma versão da aplicação em seu ambiente de execução. Separe configurações do código, guarde segredos no mecanismo apropriado e documente como iniciar, interromper e recuperar o serviço. Identifique a versão em uso para relacionar reclamações às alterações recentes.

O Git, usado desde a primeira semana, permite comparar versões e revisar mudanças. Voltar o código para uma versão anterior não desfaz automaticamente uma ação no CRM ou uma alteração de dados. Seu plano de recuperação precisa considerar tanto a aplicação quanto os efeitos que ela já produziu.

Comece com poucos usuários ou um conjunto restrito de dados autorizados. Defina quem acompanha o piloto, como recebe os alertas e quando interrompe a automação. Inclua um caminho para uma pessoa continuar o atendimento se uma ferramenta falhar.

## Serverless e tempo de execução

**Serverless** é um modelo de execução em que o provedor gerencia parte da infraestrutura necessária para rodar seu código. Você continua responsável por configuração, permissões, dados e comportamento da aplicação. Há servidores, mesmo que você não precise administrá-los diretamente.

Serviços como [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) permitem executar funções em resposta a eventos. A adequação depende de carga, limites, duração e custos. A inicialização de um ambiente pode acrescentar latência, frequentemente chamada **cold start**.

Pense em chamar um transporte por demanda: você reduz a necessidade de manter um recurso próprio sempre disponível, mas precisa considerar espera e condições de uso. Um agente com execução longa pode precisar de trabalho em segundo plano, fila e retomada de estado. Teste o caminho real antes de escolher só pela facilidade do primeiro deploy.

## Latência: acompanhe a experiência completa

**Latência** é o tempo de espera associado a uma operação. No nosso agente, meça desde a chegada da mensagem até a primeira resposta útil e até a conclusão da ação. A resposta inicial pode ser rápida e o registro no CRM continuar pendente.

A mediana descreve um ponto central; o **p95** indica o valor abaixo do qual ficam aproximadamente 95% das observações, conforme o método de cálculo. Em uma amostra pequena, percentis variam bastante. Registre tamanho da amostra, período e tipos de tarefa para interpretar o número.

Divida a duração por etapa: recuperação, modelo, ferramenta e fila. Se o CRM consome a maior parte do tempo, reduzir o prompt pode trazer pouco ganho ao usuário. A observabilidade da aula anterior deve mostrar onde agir.

## Custo por tarefa e cache

Some os componentes realmente cobrados: tokens de entrada e saída, possíveis categorias adicionais do provedor, ferramentas, armazenamento e infraestrutura. Registre a moeda e a referência de preços utilizada. Uma comparação útil para o produto é:

```text
custo por resolução = custo total observado / tarefas resolvidas no período
```

Defina “resolvida” com clareza. Uma resposta encerrada automaticamente, seguida de reabertura, pode não representar uma resolução real. Acompanhe também esforço humano e taxa de encaminhamento para não esconder custo em outra etapa.

**Cache** reaproveita trabalho quando as condições permitem. Cache de prompt pode reduzir custo ou latência ao reutilizar partes compatíveis da entrada; regras, disponibilidade e descontos variam por provedor e modelo. Cache de resposta guarda uma resposta pronta e tem outro risco: servir conteúdo desatualizado ou inadequado a uma pessoa diferente.

No agente de leads, uma mudança de preço exige revisar onde o dado está armazenado e como os caches são invalidados. Nunca presuma uma redução percentual fixa. Confira os indicadores de uso e compare execuções equivalentes. A economia só conta se o sistema continuar atendendo aos critérios de qualidade.

## Comunicação técnica é tornar a decisão verificável

Explique o sistema seguindo o caminho da informação: mensagem recebida → validação → consulta → resposta → ação → medição. Mostre uma execução real de teste e uma falha conhecida. Para cada decisão, diga qual necessidade ela atende e qual evidência sustenta a escolha.

| Tema | Explicação que ajuda o time a decidir |
| --- | --- |
| RAG | “Buscamos documentos autorizados e enviamos os trechos relevantes ao modelo; a atualização depende do nosso pipeline.” |
| Escolha do modelo | “Comparamos versões nos casos do projeto e observamos qualidade, custo e tempo.” |
| Autonomia | “O modelo escolhe a consulta; a autorização para alterar o CRM é aplicada pela integração.” |
| Qualidade | “Estes casos passaram, estes falharam e esta categoria precisa melhorar antes de ampliar o uso.” |
| Incidente | “A fonte estava antiga; identificamos a versão no trace, corrigimos a atualização e adicionamos um caso de regressão.” |

Quando ainda não souber, separe o que observou da hipótese. “Não confirmei a causa; vou comparar as versões da fonte e repetir o caso” é mais útil que apresentar uma explicação sem evidência.

## Laboratório · 80% prática

Reserve **4 horas por semana** para colocar o projeto em uso e fazer a revisão final.

**Semana 11 — piloto:** publique a versão avaliada no ambiente escolhido; confira acesso e configuração; rode poucos casos acompanhados; teste interrupção e encaminhamento humano; meça duração, consumo, resolução e reabertura. Documente quem mantém as fontes e quem cuida de falhas da integração.

**Semana 12 — melhoria e apresentação:** compare os resultados com a linha de base das primeiras semanas. Escolha o gargalo mais importante, faça uma alteração pequena e execute a avaliação novamente. Prepare uma demonstração de cerca de cinco minutos com problema, fluxo, caso bem-sucedido, falha conhecida e decisão de continuar, ajustar ou parar.

Registre um caso completo no [modelo de experimento](../modelos/experimento.md): contexto → falha → investigação → mudança → resultado medido → limitação. Não invente melhora onde a amostra ainda não permite concluir.

**Você concluiu quando:** outra pessoa consegue entender o fluxo, executar os casos documentados, encontrar o responsável pela operação e avaliar os resultados sem depender da sua memória.

## Estudo guiado · 20% teoria

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Production best practices](https://developers.openai.com/api/docs/guides/production-best-practices) | Práticas de operação pertinentes à sua integração. | Rever configuração e acompanhamento antes de ampliar o piloto. |
| [Microsoft Learn](https://learn.microsoft.com/pt-br/training/) ou [Google Cloud — treinamento](https://cloud.google.com/learn/training) | Um módulo do ambiente de execução escolhido. | Entender seus limites e como observar a aplicação. |
| [AWS Lambda — introdução](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) | Use se estiver considerando funções por evento. | Verificar adequação à duração e à carga do agente. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Arquitetura, operação e otimização. | Priorizar uma melhoria orientada por medição. |

**Co-Intelligence**, de Ethan Mollick, oferece um aprofundamento opcional sobre trabalho com IA. Use a [página da editora](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/) para conhecer a obra. Na **1 hora de estudo** semanal, mantenha o foco na decisão que o piloto exige agora.

Depois da revisão, mantenha uma rotina leve: acompanhar as [fontes e comunidades](../docs/comunidades.md), selecionar uma mudança relevante, experimentar no ambiente de teste e incorporá-la só quando os resultados justificarem. Novas ferramentas entram no projeto para atender uma necessidade observada.

[Revisar o projeto central →](../docs/projeto-central.md) · [Consultar todas as aulas →](README.md)

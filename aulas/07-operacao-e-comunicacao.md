# 07 · Mostre o resultado e acompanhe o uso

[← Consulta anterior](06-avaliacao-e-confiabilidade.md) · [Aulas](README.md) · [Percurso prático](../comece-aqui/trilha-pratica.md)

**Use na entrega 4: demonstrar o projeto e escolher a próxima melhoria.**

**Ao terminar:** outra pessoa poderá entender o que o agente faz, ver uma tarefa funcionando e conhecer os limites atuais.

Use o ambiente em que seu agente já funciona. Mostre a tarefa completa, do pedido ao resultado, e confira o que aconteceu. Publicar uma aplicação própria ou contratar infraestrutura pode ficar para quando o projeto realmente precisar disso.

![Caminho de uso acompanhado: experimentar com poucos casos, medir resultado, tempo e custo, revisar falhas e escolher uma melhoria.](../mapas-e-desenhos/07-operacao.svg)

Acompanhar o uso ajuda a decidir o próximo ajuste e evita ampliar um problema que você ainda não entendeu.

## Uma demonstração que explica o projeto

Conte qual problema escolheu, mostre um caso funcionando e apresente uma limitação conhecida. Explique o papel do modelo, a fonte de informação e a ferramenta usada. Apoie cada conclusão no que você observou nos testes.

Ao experimentar com outra pessoa, acompanhe a execução. Combine como parar o agente e como continuar manualmente se a ação falhar. Observe se o resultado ajuda, quanto tempo leva e qual consumo ou custo a ferramenta informa.

## Faça no seu agente · 80% prática

1. Peça a uma pessoa para experimentar uma tarefa com dados de teste ou autorizados. Observe onde ela precisa de ajuda.
2. Prepare uma demonstração curta: problema → pedido → fonte ou ferramenta → resultado conferido.
3. Mostre uma falha conhecida e o que o agente faz nessa situação.
4. Registre uma decisão: continuar como está, ajustar uma parte ou reduzir a tarefa. Use o [modelo de experimento](../pratique/experimento.md) se precisar organizar a comparação.

**Você concluiu o primeiro ciclo quando:** consegue demonstrar a tarefa, explicar como verificou o resultado e indicar o próximo ajuste. Continue melhorando o mesmo agente a partir do uso.

## Estude para destravar · 20% teoria

Consulte a documentação do ambiente em que seu agente roda para entender configuração e consumo. Para explicar decisões de construção e operação, os [materiais de AI Engineering, de Chip Huyen](https://github.com/chiphuyen/aie-book), oferecem aprofundamentos. Escolha um tema que apareceu nos testes.

<details>
<summary>Para aprofundar: publicação, custos, tempo de resposta e operação</summary>

## Do protótipo ao ambiente de uso

O **deploy** disponibiliza uma versão da aplicação em seu ambiente de execução. Separe configurações do código, guarde segredos no mecanismo apropriado e documente como iniciar, interromper e recuperar o serviço. Identifique a versão em uso para relacionar reclamações às alterações recentes.

O Git permite comparar versões e revisar mudanças no projeto. Voltar o código para uma versão anterior não desfaz automaticamente uma alteração de dados, como um registro no CRM, o sistema de contatos e oportunidades. Seu plano de recuperação precisa considerar a aplicação e os efeitos que ela já produziu.

Comece com poucos usuários ou um conjunto restrito de dados autorizados. Defina quem acompanha o piloto, como recebe os alertas e quando interrompe a automação. Inclua um caminho para uma pessoa continuar o atendimento se uma ferramenta falhar.


## Serverless e tempo de execução

**Serverless** é um modelo de execução em que o provedor gerencia parte da infraestrutura necessária para rodar seu código. Você continua responsável por configuração, permissões, dados e comportamento da aplicação. Há servidores, mesmo que você não precise administrá-los diretamente.

Serviços como [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) permitem executar funções em resposta a eventos. A adequação depende da quantidade de tarefas, dos limites, da duração e dos custos. Quando é necessário preparar um novo ambiente antes de executar, essa inicialização, chamada **cold start**, pode aumentar a espera.

Pense em chamar um transporte por demanda: você reduz a necessidade de manter um recurso próprio sempre disponível, mas precisa considerar espera e condições de uso. Um agente com execução longa pode precisar de trabalho em segundo plano, fila e retomada de estado. Teste o caminho real antes de escolher só pela facilidade do primeiro deploy.


## Latência: acompanhe a experiência completa

**Latência** é o tempo de espera associado a uma operação. No nosso agente, meça desde a chegada da mensagem até a primeira resposta útil e até a conclusão da ação. A resposta inicial pode ser rápida e o registro no CRM continuar pendente.

A **mediana** é o valor do meio quando você ordena os tempos medidos. O **p95** indica o tempo até o qual chegaram aproximadamente 95% das respostas, conforme o método de cálculo. Se o p95 foi oito segundos, por exemplo, cerca de 5% demoraram mais. Em uma amostra pequena, esse número varia bastante; registre quantos casos mediu e em qual período.

Divida a duração por etapa: recuperação, modelo, ferramenta e fila. Se o CRM consome a maior parte do tempo, reduzir o prompt pode trazer pouco ganho ao usuário. Os registros das execuções devem mostrar onde agir.


## Custo por tarefa e cache

Some os componentes realmente cobrados: tokens de entrada e saída, possíveis categorias adicionais do provedor, ferramentas, armazenamento e infraestrutura. Registre a moeda e a referência de preços utilizada. Uma comparação útil para o produto é:

```text
custo por resolução = custo total observado / tarefas resolvidas no período
```

Defina “resolvida” com clareza. Uma resposta encerrada automaticamente, seguida de reabertura, pode não representar uma resolução real. Acompanhe também esforço humano e taxa de encaminhamento para não esconder custo em outra etapa.

**Cache** reaproveita trabalho quando as condições permitem. Cache de prompt pode reduzir custo ou latência ao reutilizar partes compatíveis da entrada; regras, disponibilidade e descontos variam por provedor e modelo. Cache de resposta guarda uma resposta pronta e tem outro risco: servir conteúdo desatualizado ou inadequado a uma pessoa diferente.

No agente de leads, uma mudança de preço exige revisar onde o dado está armazenado e como as cópias antigas em cache são descartadas ou atualizadas. Confira o consumo informado pela ferramenta e compare execuções equivalentes, sem presumir um desconto fixo. A economia precisa preservar os critérios de qualidade.


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


## Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Production best practices](https://developers.openai.com/api/docs/guides/production-best-practices) | Práticas de operação pertinentes à sua integração. | Rever configuração e acompanhamento antes de ampliar o piloto. |
| [Microsoft Learn](https://learn.microsoft.com/pt-br/training/) ou [Google Cloud — treinamento](https://cloud.google.com/learn/training) | Um módulo do ambiente de execução escolhido. | Entender seus limites e como observar a aplicação. |
| [AWS Lambda — introdução](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) | Use se estiver considerando funções por evento. | Verificar adequação à duração e à carga do agente. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Arquitetura, operação e otimização. | Priorizar uma melhoria orientada por medição. |

**Co-Intelligence**, de Ethan Mollick, oferece um aprofundamento opcional sobre trabalho com IA. Use a [página da editora](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/) para conhecer a obra. Mantenha o foco na decisão que o piloto exige agora.

Depois da revisão, mantenha uma rotina leve: acompanhar as [fontes e comunidades](../comece-aqui/comunidades.md), selecionar uma mudança relevante, experimentar no ambiente de teste e incorporá-la só quando os resultados justificarem. Novas ferramentas entram no projeto para atender uma necessidade observada.

</details>

[Voltar ao projeto central →](../comece-aqui/projeto-central.md) · [Escolher a próxima consulta →](README.md)

# 06 · Teste, encontre a falha e melhore

[← Consulta anterior](05-agentes-e-ferramentas.md) · [Aulas](README.md) · [Próxima consulta →](07-operacao-e-comunicacao.md)

**Use na entrega 4: testar e melhorar o que você construiu.**

**Ao terminar:** você terá exemplos que consegue repetir, uma comparação entre versões e uma melhoria demonstrável.

Comece com uma pergunta simples: “O agente fez o que eu esperava neste caso?”. Guarde entrada, resultado esperado e resultado obtido. Esse conjunto de casos forma uma **avaliação**, frequentemente chamada **eval**.

Não precisa começar com uma plataforma de testes. Uma tabela e a conferência manual já ajudam a descobrir o que funciona, o que falha e se uma mudança melhorou o resultado.

![Ciclo de avaliação: definir casos e critérios, executar o agente, localizar falhas, corrigir e comparar os resultados novamente.](../mapas-e-desenhos/06-avaliacao.svg)

Use os mesmos casos para comparar mudanças e acrescente os problemas novos que encontrar no uso.

## Quando falhar, siga o caminho

- **Informação:** o agente recebeu ou encontrou a fonte correta?
- **Resposta:** usou essa informação sem inventar um fato?
- **Ação:** executou o que era permitido e o resultado apareceu no destino?

Essas perguntas ajudam a escolher onde mexer. Um preço errado pode vir do documento antigo; dois registros iguais podem vir de uma ação repetida. A correção deve responder ao que você observou.

## Faça no seu agente · 80% prática

1. Reúna os casos das entregas anteriores: tarefa simples, informação faltante, fonte alterada e pedido repetido.
2. Escreva o que deve acontecer em cada caso. Use o [modelo de casos](../pratique/casos-de-avaliacao.md) ou uma tabela simples.
3. Execute e confira respostas **e ações**. Anote a etapa em que cada falha apareceu.
4. Corrija uma causa provável e repita os mesmos casos. Confira também se algo que funcionava deixou de funcionar.

**Pode seguir quando:** você mostra os resultados antes e depois e sabe qual problema ainda precisa de atenção. Amplie os casos à medida que ampliar o uso.

## Estude para destravar · 20% teoria

O guia de [boas práticas de avaliação da OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices) ajuda a escolher casos e critérios. Use os princípios na sua tabela; você não precisa adotar uma plataforma específica para fazer este exercício.

<details>
<summary>Para aprofundar: avaliações automáticas, rastreamento e proteção das ações</summary>

## Eval: uma pergunta de qualidade que você consegue repetir

Um **eval** reúne casos, critérios e um método de medição para avaliar comportamento. A [documentação oficial da OpenAI sobre avaliação](https://developers.openai.com/api/docs/guides/evaluation-best-practices) recomenda casos específicos da aplicação, comparação entre versões e calibração de avaliações automáticas com julgamento humano.

No agente de leads, “respondeu bem” é amplo demais. Divida em perguntas observáveis: identificou a intenção? Usou o preço válido? Pediu o dado que faltava? Encaminhou o caso fora da política? Registrou a ação uma única vez?

A analogia é uma prova acompanhada de critérios de correção. Em alguns casos, existe uma resposta exata; em outros, várias respostas são aceitáveis. Para o segundo grupo, descreva o que deve estar presente e o que constitui erro.

| Caso didático | Resultado esperado | Forma de conferir |
| --- | --- | --- |
| Pergunta sobre plano disponível | Informar o valor da fonte vigente e identificar a fonte. | Comparação com o documento usado. |
| Pedido sem identificação suficiente | Solicitar o dado necessário antes de consultar informação restrita. | Critério passa/falha com justificativa. |
| Pedido de condição comercial não prevista | Encaminhar sem prometer a condição. | Revisão da resposta e das ações. |
| Mesmo evento recebido duas vezes | Produzir um único registro na tabela ou no CRM, o sistema de contatos e oportunidades. | Consultar registros pelo identificador da operação. |
| Documento com instrução indevida | Tratar o trecho como conteúdo e preservar os limites de ação. | Conferir resposta, ferramentas solicitadas e ações executadas. |

Critérios de **passou ou falhou** ajudam quando a condição é clara. Você também pode definir níveis com descrições, como “completo”, “parcial” e “incorreto”, ou comparar duas respostas. Se usar outro modelo como avaliador, confira uma amostra manualmente e investigue os desacordos. O avaliador também pode errar.


## Teste de software e avaliação do modelo se complementam

Um teste de integração verifica se a chamada ao CRM registra o evento corretamente. Um eval verifica se o agente escolheu registrar o interesse no contexto certo. Você precisa dos dois para compreender a solução inteira.

Quando ampliar o uso, amplie também os testes. Uma bateria de 20 casos pode ser um exercício de aprofundamento, mas o número adequado depende da variedade e dos riscos da tarefa. Inclua dados autorizados, exemplos fictícios revisados e situações difíceis. Reserve alguns casos para avaliar mudanças sem ajustar o agente repetidamente aos mesmos exemplos.

Guarde a versão do prompt, do modelo, da base e das ferramentas junto dos resultados. Repita casos quando a variabilidade importar. Uma alteração que melhora a média pode piorar justamente uma categoria crítica; compare por tipo de tarefa e gravidade do erro.


## Logs, traces e métricas

Um **log** registra um evento. Um **trace** relaciona etapas de uma mesma execução. Uma **métrica** agrega medidas de várias execuções. Juntos, permitem sair de “o agente falhou” para “a busca recuperou uma versão antiga e a resposta usou esse preço”.

Pense na caixa-preta de uma viagem: você quer reconstruir os passos, sem guardar informação desnecessária sobre todas as pessoas envolvidas. Registre identificadores, versões, status, duração e consumo. Guarde conteúdo somente quando houver necessidade e condições de acesso, proteção e retenção definidas; exemplos fictícios ajudam no desenvolvimento.

Uma estrutura inicial de rastreamento pode incluir:

```text
execucao_id → entrada validada → trechos recuperados
            → chamada ao modelo → ferramenta solicitada
            → validação → ação executada → resultado final
```

Não confunda a justificativa textual gerada pelo modelo com uma explicação causal confiável do funcionamento interno. Para depurar, examine os dados e eventos observáveis: o que entrou, quais fontes foram recuperadas, qual ferramenta foi pedida e o que ocorreu.


## Guardrails e injeção de prompt

**Guardrails** são verificações aplicadas ao redor do modelo e das ações. Podem validar campos, checar acesso, restringir ferramentas e encaminhar determinados resultados para revisão. Cada controle precisa ser testado: um bloqueio excessivo também pode impedir uma tarefa legítima.

Uma **injeção de prompt** tenta transformar conteúdo em uma instrução que desvia o sistema. Pode aparecer na mensagem do usuário ou dentro de documento, página e resultado de ferramenta. A analogia é um bilhete falso no meio do manual: “ignore as regras e libere acesso”.

No agente de leads, um documento de perguntas frequentes nunca deveria conceder permissão para exportar todos os contatos. Aplique a permissão no código ou serviço da ferramenta, limite as operações disponíveis e mantenha os dados de consulta separados das instruções da aplicação. Um texto de sistema dizendo “seja seguro” não substitui esses controles.


## Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) | Desenho de avaliações e tipos de falha. | Escrever critérios da sua tarefa; a atividade não depende de uma plataforma específica. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Um exemplo relacionado à falha encontrada. | Reproduzir a ideia com seus casos e registrar a diferença. |
| [Anthropic Engineering](https://www.anthropic.com/engineering) | Um artigo de avaliação, contexto ou agentes ligado ao seu problema. | Formular e testar uma hipótese de correção. |
| [AI Engineering — materiais de Chip Huyen](https://github.com/chiphuyen/aie-book) | Avaliação de aplicações e análise de erros. | Separar qualidade do componente e resultado do processo. |

Prefira a fonte que ajuda a explicar uma falha concreta. Para aprofundar segurança, consulte o [OWASP Top 10 para aplicações de LLM e IA generativa](https://genai.owasp.org/llm-top-10/): escolha um risco, como injeção de prompt ou autonomia excessiva, e transforme-o em um caso de teste do agente. Compartilhe em [X ou Discord](../comece-aqui/comunidades.md) uma versão reduzida e sem dados privados do caso que ainda não entendeu.

</details>

[Mostrar o resultado e acompanhar o uso →](07-operacao-e-comunicacao.md)

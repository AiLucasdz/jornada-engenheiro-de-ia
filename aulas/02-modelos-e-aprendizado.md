# 02 · Entenda o modelo antes de confiar na resposta

[← Aula anterior](01-historia-e-problemas.md) · [Aulas](README.md) · [Próxima aula →](03-integracoes-e-dados.md)

**Quando usar:** semana 4. **Entrega:** comparar regras e LLM na mesma tarefa, explicando seus resultados e limites.

O seu agente vai usar um modelo como parte do sistema. Entender como esse componente aprende e gera respostas ajuda a formular tarefas, estimar consumo e reconhecer quando uma resposta precisa de verificação.

## Rede neural, treinamento e inferência

Uma rede neural transforma entradas em saídas usando operações organizadas em camadas e parâmetros ajustáveis. Imagine uma mesa de som com muitos controles: cada ajuste muda como os sinais se combinam. A analogia ajuda a visualizar os parâmetros, mas uma rede não é uma coleção de fatos guardados em gavetas.

No **treinamento**, exemplos e um objetivo de aprendizagem orientam o ajuste desses parâmetros. Uma função de perda quantifica o erro em relação ao objetivo. A **retropropagação**, ou backpropagation, calcula gradientes: como pequenas mudanças nos parâmetros afetam essa perda. Um otimizador usa essa informação para realizar ajustes. Não é uma atribuição humana de culpa nem uma prova de compreensão.

As GPUs se tornaram importantes porque realizam muitas operações numéricas em paralelo. A combinação entre métodos, dados e capacidade de processamento permitiu treinar redes maiores. A história de AlexNet e ImageNet, na [aula anterior](01-historia-e-problemas.md), mostra essas peças trabalhando juntas. A série de [3Blue1Brown sobre retropropagação](https://www.3blue1brown.com/lessons/backpropagation/) oferece uma explicação visual desses ajustes.

Na **inferência**, usamos os parâmetros aprendidos para produzir uma saída. Uma conversa comum não atualiza automaticamente os pesos do modelo a cada mensagem. O produto pode manter histórico ou memória, e o fornecedor pode ter políticas específicas de uso de dados; isso é diferente de o modelo aprender imediatamente com cada correção.

## Escala e pós-treinamento

As **leis de escala** descrevem relações empíricas entre tamanho do modelo, quantidade de dados, computação e uma medida de erro de previsão. O estudo de [Kaplan e colaboradores](https://arxiv.org/abs/2001.08361) encontrou regularidades nessas relações. Isso ajuda a planejar recursos de treinamento dentro das condições estudadas; não garante que um modelo maior resolva melhor qualquer tarefa da sua aplicação. Para escolher um modelo para o agente, compare qualidade, custo e tempo nos seus próprios casos.

O **pós-treinamento** adapta um modelo já treinado a comportamentos desejados, como seguir instruções. No trabalho do [InstructGPT](https://arxiv.org/abs/2203.02155), pesquisadores usaram demonstrações humanas para um ajuste supervisionado e avaliações de preferência para uma etapa de **RLHF**: aprendizado por reforço com feedback humano. Esse processo melhorou a preferência pelas respostas nas condições do estudo, mas os modelos continuaram cometendo erros. Uma resposta prestativa e uma resposta factual precisam de verificações próprias.

No projeto, essa distinção orienta uma decisão concreta: você pode usar um modelo já preparado para seguir instruções e concentrar o trabalho em contexto, ferramentas e avaliação. Corrigir uma informação no prompt não é executar essas etapas de treinamento novamente.

## O que um LLM faz

Um modelo de linguagem estima continuações para uma sequência de tokens. Repetindo esse processo, produz textos, código e outros formatos de saída compatíveis com o sistema. O treinamento pode levar o modelo a representar regularidades da linguagem e conhecimentos; sua resposta, porém, não vem automaticamente de uma consulta a uma fonte atualizada.

A **data de corte do conhecimento**, quando informada, orienta sobre a cobertura temporal de parte do treinamento. Não garante que o modelo saiba tudo antes dessa data. Busca e ferramentas podem trazer dados atuais durante uma execução, desde que o sistema realmente as use.

No agente de leads, pergunte separadamente: “o modelo interpreta esta mensagem?” e “o sistema tem a tabela de preços válida?”. A primeira é uma capacidade do modelo; a segunda exige uma fonte e um caminho de acesso.

## Tokens e janela de contexto

Um **token** é uma unidade usada pelo modelo para representar a entrada e a saída. Pode corresponder a parte de palavra, palavra, pontuação ou outro elemento. A divisão depende do tokenizador, do idioma e do conteúdo. Use a contagem reportada pelo provedor; uma regra fixa de caracteres por token pode errar bastante.

A **janela de contexto** é o limite do que o modelo pode considerar em uma execução, com regras de capacidade que variam por modelo e API. Instruções, mensagens, resultados de ferramentas e documentos ocupam espaço; planeje também o espaço necessário à resposta.

Pense no contexto como uma mesa de trabalho. Você seleciona o que colocar sobre ela. Uma mesa maior permite incluir mais material, mas não garante que todo detalhe seja usado corretamente. Se a aplicação omite um dado importante ou o dilui em conteúdo irrelevante, a resposta pode piorar.

## Transformer e atenção

O Transformer, apresentado em [Attention Is All You Need](https://arxiv.org/abs/1706.03762), usa mecanismos de atenção para combinar informações de posições diferentes de uma sequência. Em “o cliente pediu a proposta porque ele estava com pressa”, as relações entre “ele”, “cliente” e o restante ajudam a construir uma representação da frase.

A arquitetura favoreceu paralelismo no treinamento e ganhou grande importância em modelos de linguagem. Isso não significa que todos os modelos tenham a mesma arquitetura, nem que uma janela longa elimine falhas de atenção. Na geração autoregressiva, a produção da continuação continua condicionada ao que veio antes.

## Prompt, temperatura e respostas sem fundamento

O **prompt** reúne as entradas que orientam o modelo. Instruções de sistema ou de desenvolvedor definem comportamento conforme a API; a mensagem do usuário traz a tarefa; documentos e ferramentas oferecem contexto. Versione as instruções importantes: mudar o prompt pode mudar o comportamento do produto.

A **temperatura**, quando disponível, altera a distribuição usada para escolher a continuação. Valores menores tendem a reduzir variação, mas não garantem saídas idênticas nem fatos corretos. Alguns modelos não expõem esse controle. Consulte a documentação do modelo escolhido e teste com as mesmas entradas.

Uma **alucinação** é uma saída incorreta ou sem apoio suficiente apresentada de maneira plausível. Exigir uma resposta objetiva não basta para evitá-la. Forneça fontes, permita sinalizar ausência de informação e verifique o resultado. Um campo JSON válido também pode conter uma informação falsa.

## Laboratório · 80% prática

Reserve **4 horas** para testar a classificação de mensagens do mesmo agente:

1. Separe ao menos dez mensagens com a categoria esperada: dúvida, interesse comercial ou encaminhamento humano. Inclua ambiguidades e informação insuficiente.
2. Construa uma versão de regras simples. Por exemplo, detectar palavras frequentes. Guarde seus resultados como referência.
3. Escreva uma instrução para o LLM contendo tarefa, categorias, formato esperado e como agir sem informação suficiente. Evite colocar as respostas esperadas junto das mensagens de teste.
4. Execute os mesmos casos nas duas versões. Registre acertos, erros, tempo e consumo informado pela ferramenta, quando disponível.
5. Altere uma variável: exemplos no prompt, instrução de recusa ou temperatura suportada. Repita e compare.
6. Faça uma pergunta sobre preço usando uma tabela fictícia; depois remova a tabela. Observe se o modelo admite a falta de base ou inventa um valor.

Se usar uma IA para programar, peça uma alteração pequena com critérios de aceitação. Leia a diferença entre versões, execute os exemplos e peça explicação sobre o trecho que não entendeu. Você deve conseguir verificar o efeito da alteração.

**Você concluiu quando:** explica por que cada abordagem acertou ou falhou, distingue contexto de treinamento e demonstra um caso em que fluência não foi suficiente.

## Estudo guiado · 20% teoria

Escolha uma fonte para a **1 hora de estudo** da semana. Use as outras quando surgir uma dúvida específica.

| Recurso | Trecho ou atividade | Retorno ao projeto |
| --- | --- | --- |
| [Google — Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?hl=pt-br) | Introdução a modelos, dados e generalização. | Explicar por que testar em exemplos novos é necessário. |
| [3Blue1Brown — redes neurais](https://www.3blue1brown.com/lessons/neural-networks/) | Vídeo e demonstração visual de reconhecimento de dígitos. | Identificar entrada, parâmetros e saída no modelo que você usa. |
| [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Lição introdutória de IA generativa e modelos. | Reproduzir uma atividade usando mensagens do seu agente. |
| [OpenAI — Learn](https://developers.openai.com/learn) | Selecione uma introdução compatível com a tarefa escolhida. | Conferir a forma recomendada de implementar essa tarefa. |

Para aprofundar depois, **The Hundred-Page Machine Learning Book**, de Andriy Burkov, organiza fundamentos; **Build a Large Language Model (From Scratch)**, de Sebastian Raschka, e **Neural Networks: Zero to Hero**, de Andrej Karpathy, ajudam a construir modelos pequenos. Consulte os [links e percursos de aprofundamento](../docs/fontes-e-comunidade.md) sem transformar a semana em uma maratona de cursos.

[Próxima aula: integrações e dados →](03-integracoes-e-dados.md)

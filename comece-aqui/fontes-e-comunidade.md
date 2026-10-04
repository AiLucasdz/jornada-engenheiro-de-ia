# Onde estudar: uma fonte, uma aplicação

[← Comece aqui](README.md) · [Trilha prática](trilha-pratica.md) · [Pesquisar](como-pesquisar.md) · [X e Discord](comunidades.md)

**Escolha a entrega em que está e abra a leitura principal.** Estude o suficiente para experimentar no seu agente. As [aulas](../aulas/README.md) explicam os conceitos; os aprofundamentos ficam disponíveis quando você quiser ir além.

Use **80% do tempo para praticar e 20% para estudar** como referência. Você pode começar com o Hermes e aprender durante o uso, sem estudar programação, matemática ou bancos de dados antes da primeira tarefa.

## Curso ou vídeo para começar

**Se puder investir:** Lucas recomenda o curso e a comunidade do [Bruno Okamoto no Pixel AI Hub](https://pixelaihub.pixeleducacao.com.br/) como ponto de partida. É uma recomendação pessoal, **sem parceria com o Bruno**. Aplique aqui o que aprender por lá.

**Se estiver sem orçamento para o curso:** comece pelo vídeo do Lucas [Crie seu Agente de IA Hermes em menos de 20 minutos](https://youtu.be/VHh2D9agRps). O vídeo é aberto; modelos, ferramentas e hospedagem podem ter custos conforme a configuração.

Nos dois caminhos, continue com o mesmo agente nas quatro entregas abaixo. O [guia de estudo](como-estudar.md) ajuda a aproveitar o que você já colocou para funcionar.

## 1 · Seu primeiro agente e uma tarefa

**Comece por:** [o vídeo do Lucas sobre Hermes](https://youtu.be/VHh2D9agRps). Para conferir um passo da configuração, consulte a [documentação oficial do Hermes Agent](https://hermes-agent.nousresearch.com/docs/).

**Aplique:** escolha uma tarefa pequena, como resumir um arquivo de teste. Execute, confira o resultado e anote o que funcionou. Essa é a primeira entrega da [trilha prática](trilha-pratica.md).

**Se quiser entender melhor sua escolha:** a [aula de história e problemas](../aulas/01-historia-e-problemas.md) conecta as possibilidades e os limites da IA ao que você quer construir.

<details>
<summary>Quero aprofundar: história, possibilidades e organização do projeto</summary>

Escolha apenas o recurso que responde à sua curiosidade. Livros e cursos completos são opcionais.

| Sua pergunta | Fonte | O que levar para a prática |
| --- | --- | --- |
| Como trabalhar melhor com IA? | [Claude Academy](https://academy.claude.com/) ou [Co-Intelligence — Ethan Mollick](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/). | Delegar uma tarefa pequena e conferir a resposta. |
| Como a IA chegou até aqui? | [Artificial Intelligence: A Guide for Thinking Humans — Melanie Mitchell](https://us.macmillan.com/books/9781250404855/artificialintelligence/) e [Genius Makers — Cade Metz](https://www.penguinrandomhouse.com/books/565698/genius-makers-by-cade-metz/). | Identificar uma promessa que precisa de um teste. |
| Prefiro ouvir uma conversa sobre a história | [StarTalk com Geoffrey Hinton](https://startalkmedia.com/show/the-origins-of-artificial-intelligence-with-geoffrey-hinton/). | Escolher uma afirmação e conferir sua fonte. |
| Onde aplicar IA no negócio? | [Prediction Machines — Agrawal, Gans e Goldfarb](https://www.predictionmachines.ai/) e [princípios de Lean Startup](https://theleanstartup.com/principles). | Escolher uma tarefa útil e um jeito simples de verificar melhora. |
| Como observar se uma máquina funciona bem? | [Computing Machinery and Intelligence — Alan Turing, 1950](https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-9). Comece pelo início do texto. | Trocar uma expectativa vaga por um resultado observável. |
| Como guardar e organizar meu projeto? | [Introduction to GitHub — GitHub Skills](https://github.com/skills/introduction-to-github). | Guardar uma versão e registrar o que mudou. |
| Como organizar entregas em equipe? | [Guia do Scrum](https://scrumguides.org/scrum-guide.html). | Combinar uma entrega pequena e revisar o resultado com alguém. |

</details>

## 2 · Contexto e fontes para responder melhor

**Comece por:** [aula de contexto e fontes](../aulas/04-contexto-e-rag.md). Leia primeiro como fornecer uma informação junto da pergunta; avance para busca em documentos quando isso ajudar sua tarefa.

**Aplique:** entregue ao agente um arquivo curto e faça perguntas sobre ele. Peça que indique a fonte. Depois faça uma pergunta que o arquivo não responde e confira como o agente lida com a falta de informação.

<details>
<summary>Quero aprofundar: modelos, busca em documentos e aprendizado</summary>

A [aula sobre modelos](../aulas/02-modelos-e-aprendizado.md) explica tokens, contexto e como as respostas são produzidas. Você pode consultar um conceito de cada vez.

| Sua pergunta | Fonte | O que experimentar ou observar |
| --- | --- | --- |
| Quero visualizar uma rede neural | [Redes neurais — 3Blue1Brown](https://www.3blue1brown.com/lessons/neural-networks/) e [retropropagação](https://www.3blue1brown.com/lessons/backpropagation/). | Distinguir usar um modelo de treinar um modelo. |
| Quero revisar fundamentos de aprendizado de máquina | [Machine Learning Crash Course — Google](https://developers.google.com/machine-learning/crash-course?hl=pt-br) ou [The Hundred-Page Machine Learning Book — Andriy Burkov](https://www.themlbook.com/). | Entender por que verificar o sistema com exemplos novos. |
| Quero buscar em mais documentos | [Generative AI for Beginners — Microsoft](https://github.com/microsoft/generative-ai-for-beginners) ou [OpenAI Cookbook](https://developers.openai.com/cookbook). Escolha um exemplo de busca. | Comparar a fonte encontrada com a resposta gerada. |
| Quero entender RAG e adaptação de modelos | [AI Engineering — Chip Huyen](https://huyenchip.com/books/), com [recursos públicos de apoio](https://github.com/chiphuyen/aie-book). | Decidir se precisa de busca ou se um arquivo no contexto já resolve. |
| Como funciona a atenção? | [Explicação visual — 3Blue1Brown](https://www.3blue1brown.com/lessons/attention/) e [Attention Is All You Need — Vaswani e colaboradores](https://arxiv.org/abs/1706.03762). | Relacionar o contexto enviado com a resposta; no artigo, começar pelo resumo e diagrama. |
| Por que dados e capacidade de computação importam? | [The Bitter Lesson — Richard Sutton](http://incompleteideas.net/IncIdeas/BitterLesson.html) e [Scaling Laws for Neural Language Models — Kaplan e colaboradores](https://arxiv.org/abs/2001.08361). | Distinguir os argumentos dos textos de uma garantia de resultado no seu projeto. |
| Quero construir um modelo pequeno por dentro | [Neural Networks: Zero to Hero — Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) e [Build a Large Language Model (From Scratch) — Sebastian Raschka](https://www.manning.com/books/build-a-large-language-model-from-scratch), com [código do autor](https://github.com/rasbt/LLMs-from-scratch). | Explorar uma atividade de tokenização ou uma rede pequena. |

O último caminho é um estudo técnico posterior, com programação e matemática próprias desses materiais. Você pode concluir as quatro entregas usando modelos prontos.

</details>

## 3 · Uma ação útil

**Comece por:** [aula de agentes e ferramentas](../aulas/05-agentes-e-ferramentas.md). Foque em como um pedido do modelo se transforma em uma ação permitida.

**Aplique:** peça ao agente que use as fontes para produzir e salvar um relatório em uma pasta de teste. Confira o arquivo e o caminho usado. Depois adapte a ação à sua tarefa, aumentando o alcance aos poucos.

<details>
<summary>Quero aprofundar: ferramentas, integrações e dados</summary>

Consulte a [aula de integrações e dados](../aulas/03-integracoes-e-dados.md) quando precisar ligar outro sistema ao agente. Um banco de dados ou uma integração nova só entra quando sua tarefa precisar.

| Sua pergunta | Fonte | O que aplicar |
| --- | --- | --- |
| Como escolher o que o agente decide? | [Building effective agents — Anthropic](https://www.anthropic.com/engineering/building-effective-agents). | Definir a tarefa, as ferramentas permitidas e quando parar. |
| Quero acompanhar um exercício de agente | [Agents Course — Hugging Face](https://huggingface.co/learn/agents-course/unit0/introduction). | Comparar o exemplo com a ação que seu agente já executa. |
| Como conectar a ferramenta escolhida? | [Hermes Agent](https://hermes-agent.nousresearch.com/docs/), [OpenAI Developers](https://developers.openai.com/learn), [Claude Platform Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs). Escolha só a documentação que corresponde à sua ferramenta. | Fazer uma chamada pequena e conferir entrada, ação e resultado. |
| O que acontece numa chamada entre sistemas? | [Visão geral do HTTP — MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview). | Investigar uma chamada que falhou. |
| Preciso guardar registros num banco | [Tutorial do PostgreSQL](https://www.postgresql.org/docs/current/tutorial.html). | Salvar e consultar o histórico de uma tarefa quando essa necessidade surgir. |

</details>

## 4 · Testar, melhorar e demonstrar

**Comece por:** [aula de avaliação](../aulas/06-avaliacao-e-confiabilidade.md). Leia como escolher perguntas e resultados esperados para conferir o agente.

**Aplique:** repita as mesmas tarefas, incluindo uma informação ausente e uma ação que falhe. Corrija um problema e teste novamente. Mostre uma tarefa funcionando, uma limitação e a melhoria feita, usando os [registros de prática](../pratique/README.md).

<details>
<summary>Quero aprofundar: avaliação, custos e uso contínuo</summary>

A [aula de operação e comunicação](../aulas/07-operacao-e-comunicacao.md) ajuda quando você quiser colocar o agente em uso frequente ou compartilhar com outras pessoas.

| Sua pergunta | Fonte | O que aplicar |
| --- | --- | --- |
| Como tornar meus testes mais consistentes? | [Evaluation best practices — OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices) e [guias de Evals](https://developers.openai.com/learn/evals). | Registrar o resultado esperado e comparar versões com os mesmos casos. |
| Quero investigar uma falha concreta | [Anthropic Engineering](https://www.anthropic.com/engineering), [OpenAI Cookbook](https://developers.openai.com/cookbook) ou [recursos de AI Engineering](https://github.com/chiphuyen/aie-book). | Escolher um exemplo ligado à falha e testar uma correção. |
| Como preparar o uso contínuo? | [Production best practices — OpenAI](https://developers.openai.com/api/docs/guides/production-best-practices). | Conferir configuração, acompanhamento e limites da aplicação. |
| Quero explorar hospedagem ou monitoramento | [Microsoft Learn](https://learn.microsoft.com/pt-br/training/) ou [treinamento do Google Cloud](https://cloud.google.com/learn/training). | Selecionar apenas o módulo do ambiente que pretende usar. |
| Como feedback humano participa do treinamento? | [Training language models to follow instructions with human feedback — Ouyang e colaboradores](https://arxiv.org/abs/2203.02155). | Distinguir uma resposta preferida de uma resposta factualmente correta. |

Os artigos de pesquisa são leituras opcionais. Treinar modelos ou implantar serviços em nuvem não é condição para demonstrar seu primeiro agente funcionando.

</details>

## Consulta rápida por fonte

Use esta lista quando souber o que procura. Para começar, siga a leitura principal da entrega atual.

### OpenAI

[Learn](https://developers.openai.com/learn) para encontrar guias; [Cookbook](https://developers.openai.com/cookbook) para consultar exemplos; [Evals](https://developers.openai.com/learn/evals) para aprofundar a verificação dos resultados.

### Anthropic

[Claude Academy](https://academy.claude.com/) para aprender a trabalhar com IA; [documentação](https://platform.claude.com/docs/en/intro) para usar a ferramenta; [Engineering](https://www.anthropic.com/engineering) para investigar decisões e experiências de construção.

### Google

[Gemini API](https://ai.google.dev/gemini-api/docs) para consultar a integração escolhida. O [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?hl=pt-br) e o [treinamento do Google Cloud](https://cloud.google.com/learn/training) ficam como aprofundamentos conforme sua necessidade.

### GitHub

[Introduction to GitHub](https://github.com/skills/introduction-to-github) para começar a guardar seu projeto; [GitHub Learn](https://learn.github.com/) e [recursos de Git e GitHub](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) para consultar como organizar e revisar mudanças.

### Microsoft

[Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) para selecionar uma lição ligada à tarefa. O [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) ajuda a pesquisar um conceito ou ferramenta específica.

### Outras bases

[Hermes Agent](https://hermes-agent.nousresearch.com/docs/) para configurar e explorar seu agente. Os aprofundamentos das quatro entregas reúnem Hugging Face, MDN, PostgreSQL, livros, vídeos e artigos originais. Abra o bloco ligado à sua dúvida.

## Pesquisa e acompanhamento durante a prática

1. Abra [sua entrega atual](trilha-pratica.md) e escolha a próxima tarefa.
2. Consulte uma fonte que ajude a executá-la.
3. Experimente e guarde o resultado no [registro de experimento](../pratique/experimento.md).
4. Use [X e Discord](comunidades.md) para descobrir ideias e conversar sobre o que testou.

O [guia de pesquisa](como-pesquisar.md) traz exemplos de buscas no Google e nas documentações. Escolha uma ideia e volte ao agente para experimentá-la.

Fontes consultadas em **04/10/2026**. Idioma, acesso e catálogo variam por recurso; escolha o trecho que ajuda a próxima entrega.

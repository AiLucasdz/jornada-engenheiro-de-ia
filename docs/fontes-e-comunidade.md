# Onde estudar: fontes e aplicações

[← Guias](README.md) · [Como estudar](como-estudar.md) · [Pesquisar](como-pesquisar.md) · [X e Discord](comunidades.md)

**Estude um conceito e use-o no projeto.** As [aulas da jornada](../aulas/README.md) reúnem história da IA, base técnica, exemplos e exercícios. Esta página ajuda a escolher a fonte que acompanha cada aula: uma principal para começar e aprofundamentos conforme sua dúvida.

Reserve cerca de **20% do tempo para estudar e 80% para construir, testar e explicar**. As leituras abaixo cabem em trechos; concluir uma etapa depende da entrega prática. Livros são opcionais, e as aulas, os vídeos e as fontes abertas permitem seguir a trilha sem comprar material.

## Escolha sua etapa

| Etapa | Aula e pergunta central | Entrega que a leitura ajuda a construir |
| --- | --- | --- |
| Semanas 1–2 | [História e problemas](../aulas/01-historia-e-problemas.md): por que aplicar IA aqui? | Um problema delimitado, uma métrica e um primeiro protótipo. |
| Semana 3, com Git desde a 1 | [Organização da prática](trilha-12-semanas.md): como avançar em pequenas entregas? | Critérios de aceitação e mudanças registradas no repositório. |
| Semana 4 | [Modelos e aprendizado](../aulas/02-modelos-e-aprendizado.md): o que o modelo faz? | Comparação entre regras e LLM com os mesmos exemplos. |
| Semanas 5–6 | [Integrações e dados](../aulas/03-integracoes-e-dados.md): como ligar as peças? | Uma integração validada e um histórico consultável. |
| Semanas 6–7 | [Contexto e RAG](../aulas/04-contexto-e-rag.md): de onde vem a informação? | Respostas verificáveis com documentos do projeto. |
| Semanas 7–8 | [Agentes e ferramentas](../aulas/05-agentes-e-ferramentas.md): quando o sistema pode agir? | Um fluxo com ferramentas, limites e recuperação de falhas. |
| Semanas 9–10 | [Avaliação e confiabilidade](../aulas/06-avaliacao-e-confiabilidade.md): como saber se melhorou? | Casos de teste e comparação de versões. |
| Semanas 11–12 | [Operação e comunicação](../aulas/07-operacao-e-comunicacao.md): como manter funcionando? | Publicação, instruções de uso e evidências de funcionamento. |

## Semanas 1–2 · História, limites e escolha do problema

**Leitura principal:** [Aula 1 — História e problemas](../aulas/01-historia-e-problemas.md). Relacione os ciclos de expectativa da IA com escopo, dados, manutenção e resultados do seu projeto.

**Aplique:** escreva qual processo será melhorado, como funciona hoje e qual evidência demonstrará uma melhora. Faça o primeiro protótipo e registre uma situação em que ele falha.

Escolha um aprofundamento conforme a pergunta:

| Para entender… | Recomendação | Use no exercício |
| --- | --- | --- |
| História e limites, com linguagem acessível | [Artificial Intelligence: A Guide for Thinking Humans — Melanie Mitchell](https://us.macmillan.com/books/9781250404855/artificialintelligence/). Comece pelo trecho disponível na editora. | Diferencie o que a demonstração sugere do que você realmente mediu. |
| Pessoas e decisões que moldaram o campo | [Genius Makers — Cade Metz](https://www.penguinrandomhouse.com/books/565698/genius-makers-by-cade-metz/). Livro opcional de contexto histórico. | Identifique uma dependência de dados, computação ou organização no projeto. |
| A relação entre previsão e decisão de negócio | [Prediction Machines — Agrawal, Gans e Goldfarb](https://www.predictionmachines.ai/). O site dos autores também reúne artigos e apresentações. | Separe previsão, decisão, ação e custo de um erro no seu processo. |
| Como trabalhar com um modelo no dia a dia | [Co-Intelligence — Ethan Mollick](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/). Livro opcional sobre colaboração com IA. | Delegue uma tarefa pequena, revise a resposta e registre os limites encontrados. |
| O argumento original sobre avaliação de máquinas | [Computing Machinery and Intelligence — Alan Turing, 1950](https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-9). Leia o início do texto no arquivo de Turing. | Transforme uma afirmação vaga sobre inteligência em um teste observável. |
| A história contada em uma conversa | [The Origins of Artificial Intelligence — StarTalk com Geoffrey Hinton](https://startalkmedia.com/show/the-origins-of-artificial-intelligence-with-geoffrey-hinton/). Vídeo e áudio opcionais. | Escolha uma afirmação, identifique se é fato ou opinião e confira a fonte. |

Para praticar delegação sem depender de um livro, escolha um módulo da [Claude Academy](https://academy.claude.com/). Para definir um experimento pequeno, consulte os [princípios de Lean Startup](https://theleanstartup.com/principles).

## Semana 3 · Organizar a construção

**Leitura principal:** [Introduction to GitHub — GitHub Skills](https://github.com/skills/introduction-to-github). Comece a usá-lo já na primeira semana; na terceira, consolide a rotina de entregas.

**Aplique na [trilha](trilha-12-semanas.md):** crie uma tarefa com critério de aceitação, faça uma mudança em uma branch e revise o diff antes de incorporá-la. Registre o teste executado.

**Se precisar aprofundar:** consulte objetivo, incremento e inspeção no [Guia do Scrum](https://scrumguides.org/scrum-guide.html). Use esses conceitos para revisar sua entrega semanal.

## Semana 4 · Entender modelos e aprendizado

**Leitura principal:** [Aula 2 — Modelos e aprendizado](../aulas/02-modelos-e-aprendizado.md), acompanhada da explicação visual [But what is a Neural Network? — 3Blue1Brown](https://www.3blue1brown.com/lessons/neural-networks/).

**Aplique:** compare uma solução com regras e uma com LLM usando as mesmas entradas. Explique treinamento, inferência, erro e generalização a partir do que observou.

| Sua próxima dúvida | Aprofundamento opcional | Prática curta |
| --- | --- | --- |
| Como a rede aprende? | [Backpropagation — 3Blue1Brown](https://www.3blue1brown.com/lessons/backpropagation/) e um módulo do [Machine Learning Crash Course — Google](https://developers.google.com/machine-learning/crash-course?hl=pt-br). | Desenhe previsão → erro → gradiente → ajuste dos pesos. |
| Qual é a base de ML que preciso revisar? | [The Hundred-Page Machine Learning Book — Andriy Burkov](https://www.themlbook.com/). Consulte o tópico ligado à sua lacuna. | Explique por que separar exemplos de treino e teste. |
| Quero implementar uma rede pequena | [Neural Networks: Zero to Hero — Andrej Karpathy](https://karpathy.ai/zero-to-hero.html). Comece por micrograd; requer Python e noções de derivadas. | Execute o exemplo, altere um parâmetro e observe o erro. |
| Quero montar um LLM por dentro | [Build a Large Language Model (From Scratch) — Sebastian Raschka](https://www.manning.com/books/build-a-large-language-model-from-scratch), com [código público do autor](https://github.com/rasbt/LLMs-from-scratch). | Reproduza o exemplo de tokenização; amplie depois para atenção. |
| O que mudou com o Transformer? | [Attention Is All You Need — Vaswani e colaboradores, 2017](https://arxiv.org/abs/1706.03762). Comece pelo resumo, introdução e diagrama. | Relacione tokens, embeddings e atenção no desenho do modelo. |
| Por que escala ganhou importância? | [The Bitter Lesson — Richard Sutton, 2019](http://incompleteideas.net/IncIdeas/BitterLesson.html) ou [Scaling Laws for Neural Language Models — Kaplan e colaboradores, 2020](https://arxiv.org/abs/2001.08361). | Registre o argumento do texto e uma limitação para aplicá-lo ao seu projeto. |

O ensaio de Sutton apresenta uma interpretação histórica; o artigo de scaling laws relata relações empíricas em condições de treinamento específicas. Use ambos para formular hipóteses, e avalie a qualidade da sua aplicação com exemplos próprios.

## Semanas 5–6 · Integrar APIs e organizar dados

**Leitura principal:** [Aula 3 — Integrações e dados](../aulas/03-integracoes-e-dados.md), com a [visão geral do HTTP — MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview).

**Aplique:** acompanhe uma requisição do início ao fim. Valide entrada e saída, trate uma falha e guarde um registro que permita investigar o resultado.

**Para a implementação:** escolha apenas a documentação do provedor que vai usar: [OpenAI Developers](https://developers.openai.com/learn), [Claude Platform Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs). Ao persistir dados, faça a parte de consultas do [tutorial do PostgreSQL](https://www.postgresql.org/docs/current/tutorial.html).

## Semanas 6–7 · Contexto, recuperação e RAG

**Leitura principal:** [Aula 4 — Contexto e RAG](../aulas/04-contexto-e-rag.md). Monte primeiro uma base pequena que você consiga conferir manualmente.

**Aplique:** compare respostas sem contexto, com um trecho escolhido por você e com recuperação de documentos. Confira se a fonte recuperada sustenta cada resposta e teste uma pergunta sem resposta na base.

**Para implementar:** escolha a lição de busca e dados externos em [Generative AI for Beginners — Microsoft](https://github.com/microsoft/generative-ai-for-beginners), ou um exemplo ligado à sua tarefa no [OpenAI Cookbook](https://developers.openai.com/cookbook).

**Para aprofundar:** consulte RAG e construção de aplicações em [AI Engineering — Chip Huyen](https://huyenchip.com/books/). O [repositório da autora](https://github.com/chiphuyen/aie-book) reúne recursos públicos de apoio. Se a dúvida for atenção, use a explicação visual [Attention in transformers — 3Blue1Brown](https://www.3blue1brown.com/lessons/attention/).

## Semanas 7–8 · Agentes, fluxos e ferramentas

**Leitura principal:** [Aula 5 — Agentes e ferramentas](../aulas/05-agentes-e-ferramentas.md), com [Building effective agents — Anthropic](https://www.anthropic.com/engineering/building-effective-agents).

**Aplique:** desenhe o caminho fixo do fluxo, as decisões permitidas ao modelo e quando parar. Conecte uma ferramenta de leitura, valide os argumentos e teste indisponibilidade e resposta inesperada.

**Para aprofundar:** escolha um exercício do [Agents Course — Hugging Face](https://huggingface.co/learn/agents-course/unit0/introduction) e compare seu ciclo de decisão com o agente da trilha. Consulte a documentação do seu provedor para implementar chamadas de ferramentas.

## Semanas 9–10 · Avaliar e melhorar com evidências

**Leitura principal:** [Aula 6 — Avaliação e confiabilidade](../aulas/06-avaliacao-e-confiabilidade.md), com [Evaluation best practices — OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices).

**Aplique:** transforme falhas reais em casos de teste. Compare duas versões usando os mesmos casos, incluindo uma pergunta ambígua, uma resposta sem fonte e uma falha de ferramenta. Registre qualidade, tempo e custo quando disponíveis.

**Para aprofundar:** leia o resumo e observe o processo de treinamento em [Training language models to follow instructions with human feedback — Ouyang e colaboradores, 2022](https://arxiv.org/abs/2203.02155), o artigo do InstructGPT. Diferencie avaliar preferências humanas de verificar correção factual. Para desenho de avaliações e análise de erros, retome esses tópicos em [AI Engineering e seus recursos de apoio](https://github.com/chiphuyen/aie-book).

## Semanas 11–12 · Operar e explicar o sistema

**Leitura principal:** [Aula 7 — Operação e comunicação](../aulas/07-operacao-e-comunicacao.md), com [Production best practices — OpenAI](https://developers.openai.com/api/docs/guides/production-best-practices). Use os conceitos no ambiente escolhido para seu projeto.

**Aplique:** publique uma versão utilizável, documente configuração e limites, acompanhe uma execução com logs e simule uma falha de dependência. Outra pessoa deve conseguir usar a solução a partir das instruções.

**Se precisar aprofundar:** selecione um módulo de implantação ou monitoramento no [Microsoft Learn](https://learn.microsoft.com/pt-br/training/) ou no [treinamento do Google Cloud](https://cloud.google.com/learn/training). Confira os requisitos do laboratório e escolha somente o que será aplicado agora.

## Consulta por provedor

Use os diretórios abaixo quando surgir uma dúvida durante a construção. A sequência de estudo é a das aulas acima.

### OpenAI

| Recurso oficial | O que estudar | Aplicação sugerida |
| --- | --- | --- |
| [OpenAI Developers — Learn](https://developers.openai.com/learn) | Guias de construção de agentes e aplicações. | Semanas 4–7: seguir um exemplo pequeno e adaptar as entradas ao seu projeto. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Exemplos de implementação para uma dúvida concreta. | Semanas 5–10: reproduzir um exemplo, alterar uma variável e registrar o efeito. |
| [Evals — guias e exemplos](https://developers.openai.com/learn/evals) | Como definir e executar avaliações. | Semana 9: transformar falhas do agente em casos de avaliação repetíveis. |

**Comece por:** Learn; consulte o Cookbook quando tiver uma tarefa definida. A documentação do recurso escolhido deve orientar a implementação e a versão da API.

### Anthropic

| Recurso oficial | O que estudar | Aplicação sugerida |
| --- | --- | --- |
| [Claude Academy](https://academy.claude.com/) | Fluência em IA, uso de Claude e construção com seus produtos. | Semanas 1–4: praticar como delegar uma tarefa e avaliar a resposta. |
| [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Escolhas de desenho entre fluxos e agentes. | Semana 7: desenhar onde o fluxo é fixo e onde o modelo pode decidir. |
| [Claude Platform Docs](https://platform.claude.com/docs/en/intro) | Integração com a API e uso de ferramentas. | Semanas 5–8: conectar uma ferramenta de leitura e verificar seus argumentos. |
| [Anthropic Engineering](https://www.anthropic.com/engineering) | Relatos técnicos sobre agentes, contexto e avaliação. | Semanas 7–10: escolher um artigo que ajude a investigar uma falha atual. |

**Comece por:** Academy para fundamentos; para o primeiro agente, leia o artigo de desenho antes de ampliar a autonomia.

### Google

| Recurso oficial | O que estudar | Aplicação sugerida |
| --- | --- | --- |
| [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?hl=pt-br) | Fundamentos de aprendizado de máquina; selecione os módulos necessários. | Semana 4: explicar treinamento e inferência e comparar regras com modelo. |
| [Gemini API — documentação](https://ai.google.dev/gemini-api/docs) | Primeira integração, saídas estruturadas e chamadas de ferramentas. | Semanas 5–8: extrair dados de uma entrada e validar o formato antes de agir. |
| [Google Cloud — treinamento](https://cloud.google.com/learn/training) | Cursos e laboratórios, conforme a necessidade do projeto. | Semanas 8–11: escolher um laboratório relacionado ao ambiente em que vai operar. |

**Comece por:** um conceito do Crash Course ou o início rápido da Gemini API, conforme sua lacuna. Confira os requisitos de acesso e uso do laboratório escolhido.

### GitHub

| Recurso oficial | O que estudar | Aplicação sugerida |
| --- | --- | --- |
| [Introduction to GitHub — Skills](https://github.com/skills/introduction-to-github) | Repositório, branch, commit e pull request. | Desde a semana 1: guardar o projeto e revisar uma mudança antes de incorporá-la. |
| [GitHub Learn](https://learn.github.com/) | Catálogo de aprendizado e guias de produtos. | Semanas 3–11: procurar a atividade que atende sua necessidade de colaboração ou automação. |
| [Git e GitHub — recursos de aprendizado](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) | Orientação para estudar controle de versão. | Recuperar uma versão e explicar a diferença entre duas entregas. |

**Comece por:** Introduction to GitHub e aplique no mesmo repositório em que constrói o agente.

### Microsoft

| Recurso oficial | O que estudar | Aplicação sugerida |
| --- | --- | --- |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Lições e exemplos de aplicações com IA generativa. | Semanas 4–9: selecionar a lição ligada à entrega e reproduzir um exercício. |
| [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) | Módulos e roteiros de aprendizado; busque o tema da semana. | Semanas 4–11: estudar um módulo de IA ou operação e aplicar a decisão ao agente. |

**Comece por:** uma lição de Generative AI for Beginners; use o Learn para aprofundar a parte que precisa agora.

### Outras bases

| Fonte | Tema e etapa | Aplicação sugerida |
| --- | --- | --- |
| [Hugging Face — Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) | Agentes; semanas 7–8. | Reproduzir um exercício e comparar seu ciclo de decisão com o agente da trilha. |
| [MDN — visão geral do HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) | Requisições e respostas; semana 5. | Inspecionar uma chamada da integração e explicar método, status e conteúdo. |
| [PostgreSQL — tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Banco relacional e SQL; semana 6. | Gravar eventos e consultar o histórico de uma execução. |
| [Lean Startup — princípios](https://theleanstartup.com/principles) | Hipóteses e experimentação; semana 2. | Definir a menor entrega capaz de testar a hipótese do projeto. |
| [Guia do Scrum](https://scrumguides.org/scrum-guide.html) | Objetivo, incremento e inspeção; semana 3. | Definir critérios de aceitação e uma revisão semanal. |

## Curso citado no material original

**Bruno Okamoto:** mantenha como complemento de prática guiada, caso você já tenha acesso ao curso recomendado. Refaça o exercício no seu agente e registre as adaptações e os testes. O arquivo original não identifica o curso ou a edição; por isso, não vinculamos uma oferta específica nem tornamos a compra uma etapa da trilha.

## Pesquisa e acompanhamento durante a prática

1. Abra [a semana atual](trilha-12-semanas.md), leia a aula e confira a entrega.
2. Escolha uma fonte que responda à decisão mais próxima.
3. Anote uma ideia e implemente um teste.
4. Guarde a fonte junto com [o experimento](../modelos/experimento.md).
5. Use [X e Discord](comunidades.md) para discutir o resultado ou uma dúvida que permaneceu.

Reserve uma sessão curta por semana para acompanhar as contas e comunidades do guia. Escolha uma descoberta, confira a documentação ou o artigo original e decida se vale um experimento. Para buscas no Google, exemplos de consultas e critérios de seleção, use [Como pesquisar](como-pesquisar.md).

Curadoria por etapa e referências de livros, vídeos e artigos revisadas em **04/10/2026**. Idioma, catálogo e requisitos de acesso variam por recurso; escolha o módulo, exemplo ou trecho que cabe nos 20% de estudo. Documentação pode ser aberta mesmo quando a execução de uma API ou laboratório exige conta ou créditos.

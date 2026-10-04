# 01 · Da história da IA ao seu primeiro problema

[← Aulas](README.md) · [Plano de 12 semanas](../docs/trilha-12-semanas.md) · [Próxima aula →](02-modelos-e-aprendizado.md)

**Quando usar:** semanas 1–2. **Entrega:** um protótipo pequeno, um problema delimitado e uma hipótese que você consegue testar.

A história da IA ajuda a decidir o que construir. Ela mostra como demonstrações impressionantes podem esconder limitações, por que dados e infraestrutura importam e como o custo de manutenção aparece depois da primeira entrega. Nesta aula, você transforma essas lições em decisões para o [seu agente](../docs/projeto-central.md).

## Uma linha do tempo para tomar decisões

| Período | O que mudou | A pergunta que fica para seu projeto |
| --- | --- | --- |
| 1943–1950 · fundações | McCulloch e Pitts descreveram um modelo matemático de neurônio. Turing propôs investigar comportamento observável em uma conversa, deslocando a discussão para um teste. | Qual comportamento vou observar para dizer que o sistema funciona? |
| 1956–1973 · primeiras expectativas | O encontro de Dartmouth consolidou o nome inteligência artificial. O perceptron de Rosenblatt explorou aprendizado; ELIZA mostrou como regras simples podiam sustentar uma conversa que parecia humana. | Estou medindo capacidade ou me impressionando com a apresentação? |
| Década de 1970 · primeiro inverno | Limites técnicos, promessas excessivas e decisões de financiamento contribuíram para uma retração. Problemas simples em laboratório não se generalizavam facilmente. | Em quais situações meu protótipo ainda falha? |
| Década de 1980 · sistemas especialistas | Sistemas como MYCIN e XCON representavam conhecimento em regras. Aplicações delimitadas demonstraram utilidade, mas bases grandes de regras exigiam manutenção. | Quanto trabalho será necessário quando o processo mudar? |
| Fim dos anos 1980–1990 · retração e continuidade | O mercado de sistemas especialistas perdeu força. Ao mesmo tempo, a pesquisa continuou: o trabalho de Rumelhart, Hinton e Williams, de 1986, ajudou a popularizar a retropropagação em redes neurais. | Estou confundindo a viabilidade de uma ideia com as limitações de uma implementação? |
| 1990–2011 · métodos e dados | Deep Blue venceu Kasparov em 1997; a pesquisa em aprendizado estatístico avançou; conjuntos de dados como ImageNet permitiram comparar sistemas em tarefas comuns. | Tenho exemplos representativos e um critério compartilhado de comparação? |
| 2012–2022 · deep learning e linguagem | AlexNet combinou redes profundas, dados e GPUs. O Transformer, proposto em 2017, ampliou as possibilidades dos modelos de linguagem. Em 2022, o ChatGPT popularizou o acesso por conversa. | O que falta aqui: capacidade do modelo, dados, integração ou uma interface utilizável? |
| Aplicações atuais · ferramentas e agentes | Modelos são integrados a busca, bancos, código e ferramentas. Construir uma solução passa a envolver também permissões, estado, avaliação e operação. | Como uma resposta vira uma ação verificável? |

As datas organizam a história; elas não provam que houve uma causa única para cada avanço ou inverno. O artigo [Why AI is Harder Than We Think, de Melanie Mitchell](https://arxiv.org/abs/2104.12871), discute justamente a distância recorrente entre expectativas e dificuldades reais.

## Cinco lições que entram no projeto

**Defina sucesso antes de automatizar.** Uma resposta bem escrita pode não resolver o problema. No exemplo de qualificação de leads, o resultado é uma primeira resposta útil e um encaminhamento correto. “Parecer inteligente” não serve como critério de aceitação.

**Comece por um processo delimitado.** Os sistemas especialistas ajudam a enxergar o valor de resolver uma tarefa concreta. “Melhorar o comercial” ainda é amplo. “Receber uma mensagem fora do horário, identificar a intenção e registrar o encaminhamento” permite testar entradas, regras e saídas.

**Calcule a manutenção.** Uma automação pode funcionar hoje e exigir revisão quando mudam preços, produtos ou integrações. Imagine uma receita de cozinha: ela é útil enquanto os ingredientes e o processo continuam válidos. Alguém precisa atualizar a receita e conferir o resultado quando isso muda.

**Dados de avaliação são parte da construção.** Uma tabela com perguntas e respostas aceitáveis permite comparar versões. Inclua casos fáceis, ambíguos e sem resposta disponível. Não escolha só exemplos que valorizam a demonstração.

**Descubra o gargalo atual.** Uma resposta errada pode vir de dados desatualizados, uma regra ruim ou uma integração que não executou. Trocar de modelo só ajuda quando a limitação está nele. Mais adiante, você aprenderá a localizar essa falha por camada.

## Regras, aprendizado e produto

Em um programa de regras, alguém escreve explicitamente o que fazer: se falta o contato, pedir o contato. Em aprendizado de máquina, um modelo ajusta parâmetros a partir de dados para produzir previsões. Uma aplicação pode combinar os dois: a IA interpreta uma mensagem livre; o código valida campos obrigatórios e decide quais ações são permitidas.

Pense em uma central de atendimento. A política de quem pode receber desconto é uma regra de negócio. Identificar se “queria entender os planos” expressa interesse comercial é uma tarefa de interpretação. Não é necessário entregar as duas decisões ao mesmo mecanismo.

A linha de base é o resultado do processo antes da mudança. Sem ela, você pode demonstrar funcionamento, mas terá dificuldade para demonstrar melhora. Meça também o que não pode piorar: resposta incorreta, esforço humano, custo e satisfação.

## Laboratório · 80% prática

Use **4 horas por semana** como referência, distribuídas entre estas duas entregas. Os tempos são ajustáveis; a evidência de funcionamento é o critério para avançar.

**Semana 1 — faça o caminho existir:**

1. Escolha o processo e descreva quem chega, o que precisa e qual resultado espera. Preencha a [ficha do projeto](../modelos/ficha-do-projeto.md).
2. Separe cinco mensagens fictícias ou autorizadas: duas simples, duas ambíguas e uma fora do escopo.
3. Construa um protótipo que recebe a mensagem e registra o pedido. Use regras simples para sugerir uma categoria ou faça essa classificação manualmente, deixando isso documentado. A comparação formal com um LLM entra na semana 4.
4. Peça a uma pessoa para usar o protótipo e observe onde precisa explicar o funcionamento.
5. Salve a primeira versão no GitHub. Registre o que funciona, o que falhou e o próximo ajuste.

**Semana 2 — teste a hipótese:**

1. Meça ou estime explicitamente a linha de base com uma pequena amostra. Identifique estimativas para não apresentá-las como medições.
2. Escreva a hipótese: “Acreditamos que [mudança] melhora [métrica] para [público], preservando [limite de qualidade]”.
3. Execute os mesmos casos com o fluxo atual e o protótipo. Registre resultado, tempo e necessidade de intervenção.
4. Escolha uma melhoria a partir da maior dificuldade encontrada e registre um [experimento](../modelos/experimento.md).

**Você concluiu quando:** consegue demonstrar o fluxo, explicar qual decisão precisa de IA e apresentar pelo menos uma evidência que apoia ou enfraquece a hipótese.

## Estudo guiado · 20% teoria

Reserve **1 hora por semana**: leia esta aula, escolha uma fonte abaixo e volte ao protótipo com uma decisão para testar. Os livros são aprofundamentos opcionais; não é preciso comprá-los para seguir a trilha.

| Escolha conforme sua dúvida | Como estudar | O que aplicar |
| --- | --- | --- |
| [Melanie Mitchell — Artificial Intelligence: A Guide for Thinking Humans](https://us.macmillan.com/books/9781250404855/artificialintelligence/) | Leia um trecho sobre capacidades e limites; anote uma expectativa que precisa de teste. | Transformar essa expectativa em um caso do seu agente. |
| [Lean Startup — princípios](https://theleanstartup.com/principles) | Foque no ciclo de hipótese, experimento e aprendizagem. | Reduzir o piloto à menor entrega que testa valor. |
| [GitHub Skills — Introduction to GitHub](https://github.com/skills/introduction-to-github) | Pratique repositório, branch, commit e pull request no próprio projeto. | Registrar e revisar a primeira entrega. |
| [Claude Academy](https://academy.claude.com/) | Escolha uma atividade introdutória sobre trabalhar com IA. | Especificar uma tarefa e conferir a resposta com um critério explícito. |

Para ampliar a leitura histórica, procure **Genius Makers**, de Cade Metz; para entender decisões de negócio, **Máquinas Preditivas**, de Agrawal, Gans e Goldfarb. Os caminhos de consulta estão na [curadoria de estudo](../docs/fontes-e-comunidade.md). Leve uma observação do protótipo aos [canais de acompanhamento](../docs/comunidades.md), junto com o que você já testou.

[Continuar no plano: semana 3, produto e cadência →](../docs/trilha-12-semanas.md) · [Depois: modelos e aprendizado →](02-modelos-e-aprendizado.md)

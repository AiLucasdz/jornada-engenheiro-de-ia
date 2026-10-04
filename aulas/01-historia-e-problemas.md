# 01 · Escolha uma tarefa que vale a pena resolver

[← Aulas](README.md) · [Percurso prático](../comece-aqui/trilha-pratica.md) · [Próxima consulta →](02-modelos-e-aprendizado.md)

**Use na entrega 1: colocar o agente para funcionar e escolher uma tarefa.**

**Ao terminar:** você terá uma tarefa pequena para o seu agente, exemplos para experimentar e uma forma simples de conferir o resultado.

Você não precisa começar criando tudo. Se já colocou o Hermes para funcionar, use essa base para experimentar uma tarefa sua. O exemplo da trilha é atender **leads: pessoas interessadas em um produto ou serviço**. Pode ser outra tarefa que você conhece: organizar pedidos, consultar documentos ou preparar um resumo.

## O que a história da IA ensina aqui

A história da IA reúne tentativas de ensinar máquinas por regras e por exemplos. Algumas aplicações funcionaram bem em tarefas delimitadas; outras esbarraram em expectativas altas, limitações e manutenção. Hoje, modelos mais capazes continuam precisando de uma tarefa clara, informação adequada e verificação.

A lição para começar é concreta: escolha algo que você consegue observar e testar. “Melhorar o atendimento” é amplo. “Responder uma dúvida sobre os planos e mostrar a fonte” permite conferir se o agente ajudou.

![Marcos da história da IA conectados a decisões sobre problema, dados, limites e manutenção do projeto.](../mapas-e-desenhos/01-historia.svg)

A linha do tempo ajuda a entender por que testar resultados e cuidar dos dados continuam sendo parte da construção.

## Faça no seu agente · 80% prática

1. Escolha **uma tarefa** e escreva o resultado esperado em uma frase. Use a [ficha do projeto](../pratique/ficha-do-projeto.md) se precisar organizar a ideia.
2. Separe três exemplos fictícios ou autorizados: um simples, um incompleto e um fora do que o agente deve fazer.
3. Experimente os exemplos no agente que já está funcionando. Observe a resposta e confira o resultado.
4. Registre o que deu certo, o que falhou e uma próxima melhoria. Guarde o material no repositório do projeto para acompanhar a evolução.

**Pode seguir quando:** você consegue mostrar a tarefa e dizer como confere se ela foi realizada. Uma primeira versão pequena já serve.

## Estude para destravar · 20% teoria

Leia o que ajuda a decidir o próximo ajuste e volte ao agente. A [Claude Academy](https://academy.claude.com/) oferece atividades sobre trabalhar com IA; o [GitHub Skills](https://github.com/skills/introduction-to-github) ajuda a guardar e revisar seu projeto. Escolha conforme a dificuldade que encontrou.

<details>
<summary>Para aprofundar: a história da IA e as decisões que ela ajuda a tomar</summary>

## Uma linha do tempo para tomar decisões

| Período | O que mudou | A pergunta que fica para seu projeto |
| --- | --- | --- |
| 1943–1950 · fundações | McCulloch e Pitts descreveram um modelo matemático de neurônio. Turing propôs um teste baseado em uma conversa para investigar o comportamento de máquinas. | Qual comportamento vou observar para dizer que o sistema funciona? |
| 1956–1973 · primeiras expectativas | O encontro de Dartmouth consolidou o nome inteligência artificial. O perceptron de Rosenblatt explorou aprendizado; ELIZA mostrou como regras simples podiam sustentar uma conversa que parecia humana. | Estou medindo capacidade ou me impressionando com a apresentação? |
| Década de 1970 · primeiro inverno | Limites técnicos, promessas excessivas e decisões de financiamento contribuíram para uma retração. Problemas simples em laboratório não se generalizavam facilmente. | Em quais situações meu protótipo ainda falha? |
| Década de 1980 · sistemas especialistas | Sistemas como MYCIN e XCON representavam conhecimento em regras. Aplicações delimitadas demonstraram utilidade, mas bases grandes de regras exigiam manutenção. | Quanto trabalho será necessário quando o processo mudar? |
| Fim dos anos 1980–1990 · retração e continuidade | O mercado de sistemas especialistas perdeu força. Ao mesmo tempo, a pesquisa continuou: o trabalho de Rumelhart, Hinton e Williams, de 1986, ajudou a popularizar a retropropagação em redes neurais. | Estou confundindo a viabilidade de uma ideia com as limitações de uma implementação? |
| 1990–2011 · métodos e dados | Deep Blue venceu Kasparov em 1997; a pesquisa em aprendizado estatístico avançou; conjuntos de dados como ImageNet permitiram comparar sistemas em tarefas comuns. | Tenho exemplos representativos e um critério compartilhado de comparação? |
| 2012–2022 · redes profundas e linguagem | AlexNet combinou redes com muitas camadas, dados e processadores capazes de realizar muitas contas em paralelo, as GPUs. O Transformer, proposto em 2017, ampliou as possibilidades dos modelos de linguagem. Em 2022, o ChatGPT popularizou o acesso por conversa. | O que falta aqui: capacidade do modelo, dados, integração ou uma interface utilizável? |
| Aplicações atuais · ferramentas e agentes | Modelos são integrados a busca, bancos, código e ferramentas. Construir uma solução passa a envolver também permissões, estado, avaliação e operação. | Como uma resposta vira uma ação verificável? |

As datas organizam a história; elas não provam que houve uma causa única para cada avanço ou inverno. O artigo [Why AI is Harder Than We Think, de Melanie Mitchell](https://arxiv.org/abs/2104.12871), discute justamente a distância recorrente entre expectativas e dificuldades reais.


## Cinco lições que entram no projeto

**Defina sucesso antes de automatizar.** Uma resposta bem escrita pode não resolver o problema. No exemplo dos leads, queremos uma primeira resposta útil e um encaminhamento correto. Esses resultados podem ser conferidos; “parecer inteligente” não deixa claro o que verificar.

**Comece por um processo delimitado.** Os sistemas especialistas ajudam a enxergar o valor de resolver uma tarefa concreta. “Melhorar o comercial” ainda é amplo. “Receber uma mensagem fora do horário, identificar a intenção e registrar o encaminhamento” permite testar entradas, regras e saídas.

**Calcule a manutenção.** Uma automação pode funcionar hoje e exigir revisão quando mudam preços, produtos ou integrações. Imagine uma receita de cozinha: ela é útil enquanto os ingredientes e o processo continuam válidos. Alguém precisa atualizar a receita e conferir o resultado quando isso muda.

**Dados de avaliação são parte da construção.** Uma tabela com perguntas e respostas aceitáveis permite comparar versões. Inclua casos fáceis, ambíguos e sem resposta disponível. Não escolha só exemplos que valorizam a demonstração.

**Descubra onde o processo falha.** Uma resposta errada pode vir de dados desatualizados, uma regra ruim ou uma ação que não foi executada. Antes de trocar o modelo, investigue o caminho da informação. Mais adiante, você aprenderá a localizar a etapa que precisa de correção.


## Regras, aprendizado e produto

Em um programa de regras, alguém escreve o que fazer: se falta o contato, pedir o contato. Em **aprendizado de máquina**, o treinamento ajusta os valores internos de um modelo a partir de dados para que ele produza previsões. Uma aplicação pode combinar os dois: a IA interpreta uma mensagem livre; o código confere campos obrigatórios e aplica permissões.

Pense em uma central de atendimento. A política de quem pode receber desconto é uma regra de negócio. Identificar se “queria entender os planos” expressa interesse comercial é uma tarefa de interpretação. Não é necessário entregar as duas decisões ao mesmo mecanismo.

A **linha de base** é o resultado do processo antes da mudança. Por exemplo, quanto tempo uma pessoa costuma esperar pela primeira resposta útil. Essa medida permite comparar o protótipo com o atendimento atual. Acompanhe também erros, esforço humano, custo e satisfação para perceber efeitos indesejados.


## Mais fontes para consultar


| Escolha conforme sua dúvida | Como estudar | O que aplicar |
| --- | --- | --- |
| [Melanie Mitchell — Artificial Intelligence: A Guide for Thinking Humans](https://us.macmillan.com/books/9781250404855/artificialintelligence/) | Leia um trecho sobre capacidades e limites; anote uma expectativa que precisa de teste. | Transformar essa expectativa em um caso do seu agente. |
| [Lean Startup — princípios](https://theleanstartup.com/principles) | Foque no ciclo de hipótese, experimento e aprendizagem. | Reduzir o piloto à menor entrega que testa valor. |
| [GitHub Skills — Introduction to GitHub](https://github.com/skills/introduction-to-github) | Pratique repositório, branch, commit e pull request no próprio projeto. | Registrar e revisar a primeira entrega. |
| [Claude Academy](https://academy.claude.com/) | Escolha uma atividade introdutória sobre trabalhar com IA. | Especificar uma tarefa e conferir a resposta com um critério explícito. |

Para ampliar a leitura histórica, procure **Genius Makers**, de Cade Metz; para entender decisões de negócio, **Máquinas Preditivas**, de Agrawal, Gans e Goldfarb. Os caminhos de consulta estão na [curadoria de estudo](../comece-aqui/fontes-e-comunidade.md). Leve uma observação do protótipo aos [canais de acompanhamento](../comece-aqui/comunidades.md), junto com o que você já testou.

</details>

[Entenda o modelo que seu agente usa →](02-modelos-e-aprendizado.md)

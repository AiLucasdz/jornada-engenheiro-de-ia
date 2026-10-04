<a id="aulas"></a>

# Sete aulas completas para construir seu agente

[← Voltar ao guia principal](../README.md)

**Explicação, exercício, desenho e fontes no mesmo lugar.** Encontre a pergunta ligada à sua tarefa e faça a prática no agente que já colocou para funcionar. Os blocos “Para aprofundar” guardam a história completa, a base técnica e outras leituras dentro de cada assunto.

A numeração organiza os temas. Você pode começar pela dúvida que tem agora e voltar às demais quando precisar. Use **80% do tempo para experimentar e conferir resultados e 20% para estudar**, no seu ritmo.

| O que quero entender ou fazer | Vá direto ao assunto |
| --- | --- |
| Escolher uma tarefa e entender de onde a IA veio | [01 · História e escolha do problema](#aula-01) |
| Entender o modelo, o agente e como orientar uma tarefa | [02 · O modelo é o motor; o Hermes é o carro](#aula-02) |
| Acompanhar uma informação e seu registro | [03 · Integrações e dados](#aula-03) |
| Usar documentos e conferir a fonte da resposta | [04 · Contexto e fontes](#aula-04) |
| Fazer o agente executar uma ação | [05 · Ferramentas e limites](#aula-05) |
| Descobrir o erro e verificar uma melhoria | [06 · Testes e avaliação](#aula-06) |
| Demonstrar valor, construir em público e preparar uma oferta | [07 · Uso, demonstração e primeira oferta](#aula-07) |

**Seu projeto passa por quatro entregas:** uma tarefa funcionando; contexto e fontes; uma ação útil; testes e demonstração. As aulas apoiam essas entregas. Escolha um exercício, anote o que observou e retome a construção.


---

<a id="aula-01"></a>

## 01 · Escolha uma tarefa que vale a pena resolver

**Use na entrega 1: colocar o agente para funcionar e escolher uma tarefa.**

**Ao terminar:** você terá uma tarefa pequena para o seu agente, exemplos para experimentar e uma forma simples de conferir o resultado.

Você não precisa começar criando tudo. Se já colocou o Hermes para funcionar, use essa base para experimentar uma tarefa sua. O exemplo da trilha é atender **leads: pessoas interessadas em um produto ou serviço**. Pode ser outra tarefa que você conhece: organizar pedidos, consultar documentos ou preparar um resumo.

### 01.1 · O que a história da IA ensina aqui

A história da IA reúne tentativas de ensinar máquinas por regras e por exemplos. Algumas aplicações funcionaram bem em tarefas delimitadas; outras esbarraram em expectativas altas, limitações e manutenção. Hoje, modelos mais capazes continuam precisando de uma tarefa clara, informação adequada e verificação.

A lição para começar é concreta: escolha algo que você consegue observar e testar. “Melhorar o atendimento” é amplo. “Responder uma dúvida sobre os planos e mostrar a fonte” permite conferir se o agente ajudou.

<p class="compact-visual"><a href="../mapas-e-desenhos/01-historia.svg"><img src="../mapas-e-desenhos/01-historia.svg" width="153" alt="Marcos da história da IA conectados a decisões sobre problema, dados, limites e manutenção do projeto." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

A linha do tempo ajuda a entender por que testar resultados e cuidar dos dados continuam sendo parte da construção.

### 01.2 · Faça no seu agente · 80% prática

1. Escolha **uma tarefa** e escreva o resultado esperado em uma frase. Anote quatro campos: **quem usa, tarefa, informações disponíveis e como conferir o resultado**.
2. Separe três exemplos fictícios ou autorizados: um simples, um incompleto e um fora do que o agente deve fazer.
3. Experimente os exemplos no agente que já está funcionando. Observe a resposta e confira o resultado.
4. Registre o que deu certo, o que falhou e uma próxima melhoria. Guarde o material no repositório do projeto para acompanhar a evolução.

**Pode seguir quando:** você consegue mostrar a tarefa e dizer como confere se ela foi realizada. Uma primeira versão pequena já serve.

### 01.3 · Estude para destravar · 20% teoria

Leia o que ajuda a decidir o próximo ajuste e volte ao agente. A [Claude Academy](https://academy.claude.com/) oferece atividades sobre trabalhar com IA; o [GitHub Skills](https://github.com/skills/introduction-to-github) ajuda a guardar e revisar seu projeto. Escolha conforme a dificuldade que encontrou.

<details>
<summary>Para aprofundar: a história da IA e as decisões que ela ajuda a tomar</summary>

### 01.4 · Uma linha do tempo para tomar decisões

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

### 01.5 · Cinco lições que entram no projeto

**Defina sucesso antes de automatizar.** Uma resposta bem escrita pode não resolver o problema. No exemplo dos leads, queremos uma primeira resposta útil e um encaminhamento correto. Esses resultados podem ser conferidos; “parecer inteligente” não deixa claro o que verificar.

**Comece por um processo delimitado.** Os sistemas especialistas ajudam a enxergar o valor de resolver uma tarefa concreta. “Melhorar o comercial” ainda é amplo. “Receber uma mensagem fora do horário, identificar a intenção e registrar o encaminhamento” permite testar entradas, regras e saídas.

**Calcule a manutenção.** Uma automação pode funcionar hoje e exigir revisão quando mudam preços, produtos ou integrações. Imagine uma receita de cozinha: ela é útil enquanto os ingredientes e o processo continuam válidos. Alguém precisa atualizar a receita e conferir o resultado quando isso muda.

**Dados de avaliação são parte da construção.** Uma tabela com perguntas e respostas aceitáveis permite comparar versões. Inclua casos fáceis, ambíguos e sem resposta disponível. Não escolha só exemplos que valorizam a demonstração.

**Descubra onde o processo falha.** Uma resposta errada pode vir de dados desatualizados, uma regra ruim ou uma ação que não foi executada. Antes de trocar o modelo, investigue o caminho da informação. Mais adiante, você aprenderá a localizar a etapa que precisa de correção.

### 01.6 · Regras, aprendizado e produto

Em um programa de regras, alguém escreve o que fazer: se falta o contato, pedir o contato. Em **aprendizado de máquina**, o treinamento ajusta os valores internos de um modelo a partir de dados para que ele produza previsões. Uma aplicação pode combinar os dois: a IA interpreta uma mensagem livre; o código confere campos obrigatórios e aplica permissões.

Pense em uma central de atendimento. A política de quem pode receber desconto é uma regra de negócio. Identificar se “queria entender os planos” expressa interesse comercial é uma tarefa de interpretação. Não é necessário entregar as duas decisões ao mesmo mecanismo.

A **linha de base** é o resultado do processo antes da mudança. Por exemplo, quanto tempo uma pessoa costuma esperar pela primeira resposta útil. Essa medida permite comparar o protótipo com o atendimento atual. Acompanhe também erros, esforço humano, custo e satisfação para perceber efeitos indesejados.

### 01.7 · Mais fontes para consultar

| Escolha conforme sua dúvida | Como estudar | O que aplicar |
| --- | --- | --- |
| [Melanie Mitchell — Artificial Intelligence: A Guide for Thinking Humans](https://us.macmillan.com/books/9781250404855/artificialintelligence/) | Leia um trecho sobre capacidades e limites; anote uma expectativa que precisa de teste. | Transformar essa expectativa em um caso do seu agente. |
| [Lean Startup — princípios](https://theleanstartup.com/principles) | Foque no ciclo de hipótese, experimento e aprendizagem. | Reduzir o piloto à menor entrega que testa valor. |
| [GitHub Skills — Introduction to GitHub](https://github.com/skills/introduction-to-github) | Pratique repositório, branch, commit e pull request no próprio projeto. | Registrar e revisar a primeira entrega. |
| [Claude Academy](https://academy.claude.com/) | Escolha uma atividade introdutória sobre trabalhar com IA. | Especificar uma tarefa e conferir a resposta com um critério explícito. |

Para ampliar a leitura histórica, consulte [Genius Makers, de Cade Metz](https://www.penguinrandomhouse.com/books/565698/genius-makers-by-cade-metz/); para entender decisões de negócio, [Máquinas Preditivas, de Agrawal, Gans e Goldfarb](https://www.predictionmachines.ai/). São aprofundamentos opcionais. Leve uma observação do protótipo ao [X](https://x.com/ailucasdz) ou aos Discords de [Nous Research](https://discord.gg/NousResearch) e [OpenClaw](https://discord.gg/clawd), junto com o que você já testou.

</details>

---

<a id="aula-02"></a>

## 02 · Entenda o modelo dentro do seu agente

**Use nas entregas 1 e 2: entender o agente e dar a ele as informações certas.**

**Ao terminar:** você entenderá o papel do modelo e do agente, saberá preparar uma tarefa e terá comparado duas maneiras de pedi-la.

### 02.1 · O modelo é o motor; o Hermes é o carro pronto

Um **LLM**, ou modelo de linguagem, é como o **motor**: recebe uma entrada e produz uma resposta que ajuda o sistema a realizar a tarefa. O **Hermes é o carro pronto**: um sistema agente que reúne o modelo, as instruções, a memória e as ferramentas necessárias para consultar informações e executar ações.

<p class="compact-visual"><a href="../mapas-e-desenhos/motor-e-carro.svg"><img src="../mapas-e-desenhos/motor-e-carro.svg" width="640" alt="Analogia entre agente e carro: modelo como motor, Hermes como carro, tarefa como destino, contexto como mapa e endereços, verificação e permissões como painel e freios." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Na analogia, a **tarefa é o destino**, o **contexto é o mapa com os endereços**, e as **verificações e permissões são o painel e os freios**: ajudam a acompanhar o que aconteceu e limitar as ações.

**Você escolhe o objetivo, configura os limites e confere o resultado.** Para organizar pedidos, por exemplo, o destino pode ser uma tabela preenchida; o mapa são os pedidos e as regras; a ferramenta é o acesso à tabela. Comece com essa tarefa pequena no agente que já funciona.

### 02.2 · Três ideias para usar agora

- **Prompt é o que orienta a resposta.** Diga qual é a tarefa, qual resultado espera e o que fazer se faltar informação.
- **Contexto é a informação disponível nessa interação.** Inclui a conversa, documentos e resultados de ferramentas que o sistema fornece ao modelo.
- **Uma resposta convincente pode estar errada.** Quando o modelo apresenta informação incorreta ou sem apoio de forma plausível, chamamos isso de alucinação. Confira os fatos e as ações.

Corrigir uma informação na conversa não é treinar novamente o modelo. O produto pode guardar histórico ou memória para reutilizar depois; isso também não significa que seus parâmetros foram alterados.

### 02.3 · Faça no seu agente · 80% prática

1. Escolha a tarefa da primeira entrega e escreva um pedido curto.
2. Execute o pedido e guarde a resposta.
3. Melhore o pedido com o resultado esperado, um exemplo ou uma informação que estava faltando.
4. Repita com os mesmos casos e compare: ficou mais útil, correto e fácil de conferir?

**Pode seguir quando:** você reconhece o que mudou no pedido e mostra o efeito na resposta. Se usar IA para programar, peça uma mudança pequena e confira o resultado antes da próxima.

### 02.4 · Estude para destravar · 20% teoria

A introdução de [Generative AI for Beginners, da Microsoft](https://github.com/microsoft/generative-ai-for-beginners), ajuda a entender modelos de linguagem. Use uma lição ligada à dúvida que apareceu no exercício. A matemática e a construção de modelos podem ficar para quando você quiser abrir essa parte do sistema.

<details>
<summary>Para aprofundar: treinamento, tokens, atenção e limites do modelo</summary>

### 02.5 · Como essas peças se encaixam

<p class="compact-visual"><a href="../mapas-e-desenhos/02-modelo-e-agente.svg"><img src="../mapas-e-desenhos/02-modelo-e-agente.svg" width="153" alt="Modelo de linguagem dentro do sistema agente, acompanhado por instruções, dados, ferramentas e memória; Hermes representa uma estrutura que reúne essas peças." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

O modelo participa das decisões; o sistema ao redor permite consultar dados, executar ações e guardar resultados. Quando o modelo pede uma ferramenta, esse sistema verifica o pedido, executa a operação permitida e devolve o resultado.

### 02.6 · Rede neural, treinamento e inferência

Uma **rede neural** transforma entradas em saídas usando operações organizadas em camadas. Seus **parâmetros** são valores numéricos ajustados durante o treinamento. Imagine uma mesa de som com muitos controles: cada ajuste muda como os sinais se combinam.

No **treinamento**, exemplos e um objetivo orientam o ajuste desses parâmetros. A **função de perda** mede o erro em relação ao objetivo. A **retropropagação**, ou *backpropagation*, calcula gradientes: medidas de como pequenas mudanças nos parâmetros afetam essa perda. Um **otimizador** usa essas medidas para ajustar os parâmetros e tentar reduzir o erro.

As GPUs, processadores capazes de realizar muitas operações numéricas em paralelo, ajudam nesse trabalho. Métodos, dados e capacidade de processamento permitiram treinar redes maiores. A história de AlexNet e ImageNet mostra essas peças trabalhando juntas. A série de [3Blue1Brown sobre retropropagação](https://www.3blue1brown.com/lessons/backpropagation/) oferece uma explicação visual dos ajustes.

Na **inferência**, usamos os parâmetros aprendidos para produzir uma saída. Uma conversa comum não atualiza automaticamente os pesos do modelo a cada mensagem. O produto pode manter histórico ou memória, e o fornecedor pode ter políticas específicas de uso de dados; isso é diferente de o modelo aprender imediatamente com cada correção.

### 02.7 · Escala e pós-treinamento

As **leis de escala** descrevem relações observadas em experimentos entre tamanho do modelo, quantidade de dados, capacidade de processamento e erro de previsão. O estudo de [Kaplan e colaboradores](https://arxiv.org/abs/2001.08361) encontrou regularidades nessas relações. Elas ajudam a planejar o treinamento nas condições estudadas. Para escolher um modelo para o agente, ainda é necessário comparar qualidade, custo e tempo nos seus próprios casos.

O **pós-treinamento** adapta um modelo já treinado a comportamentos desejados, como seguir instruções. No trabalho do [InstructGPT](https://arxiv.org/abs/2203.02155), pesquisadores usaram demonstrações humanas para um ajuste supervisionado e avaliações de preferência para uma etapa de **RLHF**: aprendizado por reforço com feedback humano. Esse processo melhorou a preferência pelas respostas nas condições do estudo, mas os modelos continuaram cometendo erros. Uma resposta prestativa e uma resposta factual precisam de verificações próprias.

No projeto, essa distinção orienta uma decisão concreta: você pode usar um modelo já preparado para seguir instruções e concentrar o trabalho em contexto, ferramentas e avaliação. Corrigir uma informação no prompt não é executar essas etapas de treinamento novamente.

### 02.8 · O que um LLM faz

Um modelo de linguagem estima continuações para uma sequência de pequenas unidades chamadas **tokens**, explicadas a seguir. Repetindo esse processo, produz textos, código e outros formatos de saída. O treinamento permite representar padrões da linguagem e conhecimentos; a resposta não vem automaticamente de uma consulta a uma fonte atualizada.

A **data de corte do conhecimento**, quando informada, orienta sobre a cobertura temporal de parte do treinamento. Não garante que o modelo saiba tudo antes dessa data. Busca e ferramentas podem trazer dados atuais durante uma execução, desde que o sistema realmente as use.

No agente de leads, pergunte separadamente: “o modelo interpreta esta mensagem?” e “o sistema tem a tabela de preços válida?”. A primeira é uma capacidade do modelo; a segunda exige uma fonte e um caminho de acesso.

### 02.9 · Tokens e janela de contexto

Um **token** é uma unidade usada pelo modelo para representar a entrada e a saída. Pode corresponder a parte de palavra, palavra, pontuação ou outro elemento. A divisão depende do tokenizador, do idioma e do conteúdo. Use a contagem reportada pelo provedor; uma regra fixa de caracteres por token pode errar bastante.

A **janela de contexto** é o limite do que o modelo pode considerar em uma execução, com regras de capacidade que variam por modelo e API. Instruções, mensagens, resultados de ferramentas e documentos ocupam espaço; planeje também o espaço necessário à resposta.

Pense no contexto como uma mesa de trabalho. Você seleciona o que colocar sobre ela. Uma mesa maior permite incluir mais material, mas não garante que todo detalhe seja usado corretamente. Se a aplicação omite um dado importante ou o dilui em conteúdo irrelevante, a resposta pode piorar.

### 02.10 · Transformer e atenção

O Transformer, apresentado em [Attention Is All You Need](https://arxiv.org/abs/1706.03762), usa mecanismos de atenção para combinar informações de posições diferentes de uma sequência. Em “o cliente pediu a proposta porque ele estava com pressa”, as relações entre “ele”, “cliente” e o restante ajudam a construir uma representação da frase.

A arquitetura permitiu realizar mais operações em paralelo durante o treinamento e ganhou grande importância em modelos de linguagem. Ainda existem outras arquiteturas, e uma janela longa não garante o uso correto de todos os detalhes. Na geração **autoregressiva**, cada novo token depende da sequência que já existe.

### 02.11 · Prompt, temperatura e respostas sem fundamento

O **prompt** reúne as entradas que orientam o modelo. Instruções de sistema ou de desenvolvedor definem o comportamento esperado; a mensagem do usuário traz a tarefa; documentos e ferramentas oferecem contexto. Guarde versões das instruções importantes: mudar o prompt pode mudar o comportamento do produto. A forma de enviar cada parte depende da interface usada para acessar o modelo.

A **temperatura**, quando disponível, ajusta as probabilidades usadas para escolher a continuação. Valores menores tendem a reduzir a variedade de respostas, mas não garantem saídas idênticas nem fatos corretos. Alguns modelos não oferecem esse controle. Consulte a documentação do modelo escolhido e teste com as mesmas entradas.

Uma **alucinação** é uma saída incorreta ou sem apoio suficiente apresentada de maneira plausível. Exigir uma resposta objetiva não basta para evitá-la. Forneça fontes, permita sinalizar ausência de informação e verifique o resultado. Um campo JSON válido também pode conter uma informação falsa.

### 02.12 · Mais fontes para consultar

| Recurso | Trecho ou atividade | Retorno ao projeto |
| --- | --- | --- |
| [Google — Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?hl=pt-br) | Introdução a modelos, dados e generalização. | Explicar por que testar em exemplos novos é necessário. |
| [3Blue1Brown — redes neurais](https://www.3blue1brown.com/lessons/neural-networks/) | Vídeo e demonstração visual de reconhecimento de dígitos. | Identificar entrada, parâmetros e saída no modelo que você usa. |
| [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Lição introdutória de IA generativa e modelos. | Reproduzir uma atividade usando mensagens do seu agente. |
| [OpenAI — Learn](https://developers.openai.com/learn) | Selecione uma introdução compatível com a tarefa escolhida. | Conferir a forma recomendada de implementar essa tarefa. |

Para aprofundar depois, [The Hundred-Page Machine Learning Book, de Andriy Burkov](https://www.themlbook.com/), organiza fundamentos; [Build a Large Language Model (From Scratch), de Sebastian Raschka](https://www.manning.com/books/build-a-large-language-model-from-scratch), com [código do autor](https://github.com/rasbt/LLMs-from-scratch), e [Neural Networks: Zero to Hero, de Andrej Karpathy](https://karpathy.ai/zero-to-hero.html), ajudam a construir modelos pequenos. São caminhos opcionais para estudar programação e mecanismos internos; você pode continuar o projeto usando modelos prontos.

</details>

---

<a id="aula-03"></a>

## 03 · Entenda por onde a informação passa

**Use na entrega 3: conectar uma ação ao agente.**

**Ao terminar:** você conseguirá acompanhar uma informação desde a entrada até o resultado, usando uma ferramenta pronta e um arquivo ou uma tabela de teste.

Uma **integração** conecta o agente a outro recurso: um arquivo, uma planilha ou um sistema. Quando já existe uma ferramenta pronta para isso, comece por ela. O objetivo é entender o que entra, o que ela pode fazer e como você confere o resultado.

<p class="compact-visual"><a href="../mapas-e-desenhos/03-integracoes.svg"><img src="../mapas-e-desenhos/03-integracoes.svg" width="167" alt="Caminho da mensagem recebida até a validação, o processamento e o registro, com resultado e histórico consultáveis." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Acompanhe uma mensagem pelo desenho: cada etapa precisa receber a informação certa e deixar um resultado que você consiga conferir.

### 03.1 · Três coisas para conferir

**Entrada:** quais dados a ferramenta precisa? Para registrar um pedido, talvez bastem identificador, mensagem e situação. Defina o que acontece se faltar algum campo.

**Permissão:** o agente pode apenas ler ou também alterar? Comece com um recurso de teste e conceda somente o acesso necessário à tarefa.

**Resultado:** a ação realmente aconteceu? Abra o arquivo ou a tabela para conferir. A frase “pronto, registrei” não substitui a verificação.

### 03.2 · Faça no seu agente · 80% prática

1. Escolha uma ferramenta que seu agente já oferece, como ler ou atualizar um arquivo permitido.
2. Crie um arquivo ou tabela de teste com poucos dados fictícios. Use-o para registrar o resultado da tarefa.
3. Envie um caso completo e outro com informação faltando. Confira como o agente se comporta e o que ficou registrado.
4. Repita o primeiro pedido. Observe se criou uma duplicata e registre o ajuste necessário.

**Pode seguir quando:** você mostra a entrada, a ação e o resultado salvo. Uma conexão própria por código só entra quando uma ferramenta existente não atende ao que você precisa.

### 03.3 · Estude para destravar · 20% teoria

Consulte a documentação da ferramenta que escolheu. Se estiver usando o Hermes, comece pela [documentação oficial](https://hermes-agent.nousresearch.com/docs/). Se precisar criar uma conexão, a [introdução a HTTP da MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) explica como programas trocam pedidos e respostas.

<details>
<summary>Para aprofundar: APIs, bancos de dados e atualização automática</summary>

### 03.4 · API, HTTP e JSON

Uma **API** é uma interface para um programa usar recursos de outro. **HTTP** é um protocolo: um conjunto de regras para trocar pedidos e respostas. Uma API HTTP recebe esses pedidos em endereços chamados **endpoints**. Muitas seguem o estilo **REST**, que organiza o acesso a recursos como clientes e pedidos; HTTP e REST não são sinônimos. Pense em um balcão com pedidos aceitos, informações obrigatórias e respostas possíveis.

Uma **requisição** é um pedido enviado ao serviço. Ela costuma reunir método, endereço, cabeçalhos — informações sobre o pedido — e corpo, que carrega o conteúdo quando necessário. O método `GET` normalmente consulta um recurso; `POST` envia dados para processamento ou criação. **JSON** é um formato de dados que usa campos nomeados, listas, textos, números e outros valores.

No seu protótipo, um evento fictício pode ser representado assim:

```json
{
  "evento_id": "evt_demo_001",
  "lead_id": "lead_demo_007",
  "mensagem": "Quero conhecer o plano para minha equipe",
  "recebido_em": "2026-10-01T19:30:00Z"
}
```

Um JSON válido ainda pode estar incompleto. Valide campos obrigatórios, tipos, tamanho e valores aceitos antes de seguir. `lead_id` em texto não prova que quem enviou o evento tenha acesso àquele lead.

### 03.5 · Autenticação, webhook e respostas de erro

**Autenticação** identifica quem fez a chamada; **autorização** determina o que essa identidade pode fazer. Chaves de API são credenciais de acesso: mantenha-as fora do repositório e dos exemplos públicos. Guarde-as nas configurações do ambiente, por meio de variáveis de ambiente ou de um serviço de armazenamento de segredos.

Um **webhook** permite que outro sistema envie um aviso quando algo acontece. Em vez de perguntar repetidamente se chegou um lead, você recebe um evento. Valide a origem pelo mecanismo documentado pelo serviço; não presuma autenticidade só porque o corpo parece correto.

| Resposta ou condição | O que investigar | Comportamento útil |
| --- | --- | --- |
| `401` | Credencial ausente ou rejeitada. | Corrigir autenticação; repetir sem mudança tende a falhar novamente. |
| `403` | A chamada não tem permissão. | Conferir o acesso exigido para a operação. |
| `404` | Recurso ou caminho não encontrado. | Conferir endpoint e identificador. |
| `429` | Limite de uso atingido. | Respeitar a orientação da API e limitar novas tentativas. |
| `5xx` | Falha no servidor ou serviço intermediário. | Registrar o erro e avaliar uma repetição controlada. |
| Timeout | Não houve resposta dentro do prazo. | Verificar se a ação chegou a ocorrer antes de repeti-la. |

O **rate limit** é um limite de requisições ou consumo por intervalo. A política varia por serviço. Uma integração confiável trata o resultado real da chamada e não interpreta toda ausência de resposta como “nada aconteceu”. O funcionamento de requisições e respostas é detalhado na [visão geral de HTTP da MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview).

### 03.6 · SQL, estado e histórico

**SQL** é uma linguagem para consultar e modificar dados em bancos relacionais, que organizam informações em tabelas conectadas. Uma tabela pode guardar pessoas; outra, mensagens recebidas. Cada registro tem um identificador que permite encontrá-lo e relacioná-lo aos demais. Um banco operacional atende ao uso diário do produto, como receber um lead e atualizar seu encaminhamento.

O **estado** responde “como está agora?”; o **histórico de eventos** responde “como chegou aqui?”. Guardar apenas o status final dificulta investigar falhas. Uma estrutura inicial pode ter uma tabela de leads e outra de eventos, ligada pelo identificador do lead.

Se você criar uma tabela `eventos` com `lead_id`, `tipo`, `status` e `ocorrido_em`, esta consulta didática exibe a sequência de um lead fictício:

```sql
SELECT tipo, status, ocorrido_em
FROM eventos
WHERE lead_id = 'lead_demo_007'
ORDER BY ocorrido_em;
```

Ao usar valores vindos de usuários em código, utilize **consultas parametrizadas**: escreva a consulta com lugares reservados aos valores e deixe a biblioteca do banco preenchê-los. Assim, o texto recebido é tratado como dado, sem ser colado diretamente ao comando SQL.

Um **data warehouse**, como BigQuery ou Snowflake, atende principalmente a consultas analíticas e integração de históricos. A analogia é o caixa da loja versus o setor que compara vendas de vários anos. Essa distinção ajuda a escolher a arquitetura; seu primeiro protótipo não precisa de um warehouse só por usar IA.

### 03.7 · ETL e pipeline: o dado também precisa de manutenção

**ETL** significa extrair, transformar e carregar. Um **pipeline de dados** é uma sequência organizada dessas tarefas, que pode ser executada novamente. Para os leads, pode padronizar datas e campos antes de salvar. Para a base de consulta do agente, pode ler documentos, extrair texto, dividir em trechos e atualizar o índice — a estrutura usada para encontrar conteúdo depois.

A atualização precisa cobrir inclusão, alteração e exclusão. Se o preço antigo continuar no índice, o modelo pode responder com a fonte errada mesmo que sua instrução esteja correta. Guarde origem, versão e momento de atualização para descobrir qual dado foi usado.

### 03.8 · Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [MDN — HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) | Estrutura de requisições e respostas. | Explicar a chamada real da sua integração. |
| [PostgreSQL — tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Tabelas, consultas e relações. | Persistir eventos e consultar um histórico. |
| [Google — Gemini API](https://ai.google.dev/gemini-api/docs) ou [Anthropic — documentação](https://platform.claude.com/docs/en/intro) | Início rápido e contrato da API que você escolheu. | Validar uma chamada mínima antes de automatizar. |
| [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) | Um módulo de dados ou integração correspondente à sua lacuna. | Melhorar o desenho do estado ou a consulta. |

Consulte também **AI Engineering**, de Chip Huyen, para relacionar dados e arquitetura de aplicação. O [repositório da autora](https://github.com/chiphuyen/aie-book) reúne materiais de apoio. Para investigar uma dificuldade, anote a ferramenta, a entrada usada, a mensagem de erro e o resultado esperado. Pesquise a mensagem exata na documentação e experimente uma correção pequena.

</details>

---

<a id="aula-04"></a>

## 04 · Dê ao agente a fonte certa

**Use na entrega 2: dar contexto e fontes ao agente.**

**Ao terminar:** o agente terá um material de consulta e você conseguirá conferir de onde veio a resposta.

Comece com um documento curto: regras do processo, planos oferecidos ou perguntas frequentes. Forneça esse material ao agente e peça que mostre qual trecho usou. Se a resposta não estiver no documento, ele deve dizer o que falta ou encaminhar a dúvida.

Quando o sistema busca trechos relevantes antes de responder, esse caminho é chamado **RAG**: geração de resposta apoiada em informação recuperada de uma fonte. Para começar, você pode usar um arquivo pequeno e a ferramenta de leitura que já existe no agente.

<p class="compact-visual"><a href="../mapas-e-desenhos/04-contexto-e-rag.svg"><img src="../mapas-e-desenhos/04-contexto-e-rag.svg" width="132" alt="RAG em dois caminhos: preparar e atualizar documentos para busca; depois recuperar trechos a partir de uma pergunta e gerar a resposta com fonte." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

O desenho separa cuidar da fonte e consultá-la; uma resposta só pode acompanhar uma mudança se o sistema tiver acesso à informação atualizada.

### 04.1 · Faça no seu agente · 80% prática

1. Prepare um documento curto e fictício com as informações necessárias à tarefa. Coloque título e data de atualização.
2. Faça três perguntas: uma respondida pelo documento, uma incompleta e uma sem resposta disponível.
3. Confira a resposta e o trecho usado. Se estiver errada, veja primeiro se o agente leu a informação correta.
4. Altere uma informação e repita a pergunta. Depois retire uma informação e confira se o agente reconhece a falta dela.

**Pode seguir quando:** você consegue apontar a fonte da resposta e demonstrar o que acontece quando a informação muda ou não existe.

### 04.2 · Estude para destravar · 20% teoria

Use a lição de busca ou RAG de [Generative AI for Beginners, da Microsoft](https://github.com/microsoft/generative-ai-for-beginners), se precisar entender melhor esse caminho. Só avance para dividir documentos, criar índices ou usar embeddings quando o tamanho ou a qualidade da busca justificar esse trabalho.

<details>
<summary>Para aprofundar: RAG, embeddings, divisão de documentos e fine-tuning</summary>

### 04.3 · Prompt, recuperação e fine-tuning

Enviar informação na pergunta, buscar documentos e treinar novamente o modelo são formas diferentes de melhorar uma aplicação. Compare o que muda em cada uma:

| Abordagem | O que acontece | Quando experimentar | O que manter |
| --- | --- | --- | --- |
| Conteúdo direto no prompt | A aplicação envia as informações junto da pergunta. | A base é pequena e cabe no contexto sem desperdício relevante. | Instrução, versão da informação e limites de contexto. |
| RAG | A aplicação recupera conteúdo de uma fonte e o inclui na chamada ao modelo. | Há documentos ou registros que precisam ser selecionados conforme a pergunta. | Busca, atualização, permissões, relevância e avaliação. |
| Fine-tuning | Um processo adicional de treinamento modifica parâmetros do modelo. | Há um comportamento ou desempenho recorrente a melhorar, dados adequados e evidência de que o ajuste compensa. | Conjunto de treinamento, avaliação separada, custos e versões. |

Fine-tuning pode afetar conhecimentos e capacidades, mas não funciona como um banco de dados que você edita para publicar preços. Para fatos que mudam, uma fonte consultável costuma facilitar atualização e verificação. RAG e fine-tuning também podem coexistir; a escolha depende do problema observado.

No nosso agente, comece com uma pequena tabela fictícia de planos no contexto. Adicione recuperação quando selecionar a fonte passar a ser uma necessidade real. Antes de sofisticar a busca, crie perguntas com respostas esperadas.

### 04.4 · Embeddings: um mapa aproximado

Um **embedding** representa um item como um vetor: uma lista de números. Essas listas permitem comparar textos por uma medida de proximidade. Modelos de embedding podem aproximar textos relacionados, como “quero encerrar meu plano” e “cancelamento”, mesmo sem palavras iguais.

Pense em um mapa de assuntos: proximidade ajuda a encontrar trechos candidatos, mas não prova que eles respondem à pergunta. Nomes, números, códigos e negativas podem exigir busca por palavras exatas ou filtros. RAG pode combinar essa busca com vetores, consultar um banco com SQL ou obter dados por uma API.

Um **banco vetorial** armazena vetores e permite buscar itens parecidos. Ele pode guardar também **metadados**: informações sobre cada item, como fonte, versão e quem pode acessá-lo. Uma extensão como pgvector adiciona esse recurso ao PostgreSQL; serviços dedicados são outras opções. Compare a qualidade da busca e o trabalho de manutenção com o volume de dados do seu projeto.

### 04.5 · Chunking: recortar sem perder o significado

**Chunking** é dividir documentos em unidades de recuperação. Se cada trecho for enorme, você traz conteúdo irrelevante. Se for pequeno demais, perde o contexto. É como recortar um manual em fichas: a ficha “R$ 200” não diz a qual plano pertence nem em que condições o preço vale.

Comece respeitando títulos, seções ou pares de pergunta e resposta. Guarde junto do texto a fonte, o identificador, a versão e os metadados de acesso. Em tabelas, preserve a relação entre rótulos e valores. Compare estratégias com as perguntas reais do projeto: não há um tamanho universal que maximize qualidade.

### 04.6 · RAG tem dois caminhos

**Indexação — preparar para buscar:** ler a fonte → extrair e limpar → dividir em trechos → gerar embeddings, se usados → salvar trechos e metadados. Quando a fonte muda, o pipeline precisa atualizar ou remover o que ficou obsoleto.

**Consulta — buscar para responder:** receber a pergunta → aplicar permissões e filtros → recuperar trechos candidatos → selecionar conteúdo útil → montar o contexto → gerar resposta → verificar e apresentar a fonte.

A analogia é uma consulta a um manual durante o trabalho. A pessoa ainda pode interpretar errado, e alguém pode ter entregue a página errada. O acesso ao manual ajuda, mas não substitui o controle do processo.

No agente de leads, uma resposta sobre plano deve apontar o documento e a versão usados. Se o preço mudou, teste o tempo entre alterar a fonte e o novo valor ficar disponível. RAG não atualiza sozinho nem garante atualização instantânea: isso depende do pipeline, dos índices e de eventuais caches.

### 04.7 · Diagnóstico em três camadas

| Camada | O que conferir no agente | Possível correção |
| --- | --- | --- |
| Recuperação | O trecho necessário foi encontrado? Era atual e autorizado? | Corrigir fonte, extração, divisão, filtros ou estratégia de busca. |
| Geração | A resposta está apoiada nos trechos enviados? | Melhorar instruções, seleção de contexto, modelo ou verificação. |
| Resultado | A pessoa conseguiu avançar no processo? | Corrigir integração, clareza da resposta ou encaminhamento humano. |

Se o agente acertou o preço, mas não registrou o pedido de contato, a informação estava correta e o processo ficou incompleto. Essa distinção evita corrigir a parte errada do sistema.

### 04.8 · Mais fontes para consultar

| Recurso | O que estudar | O que aplicar |
| --- | --- | --- |
| [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Selecione a lição sobre RAG ou busca. | Reproduzir o fluxo com seus três documentos. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Procure um exemplo de recuperação ou embeddings adequado à ferramenta escolhida. | Alterar apenas o recorte ou a busca e comparar resultados. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Consulte os tópicos de RAG, dados e adaptação de modelos. | Justificar sua escolha entre contexto direto, recuperação e ajuste do modelo. |

Os capítulos de atenção e embeddings da [série de 3Blue1Brown](https://www.3blue1brown.com/?topic=neural-networks) ajudam a visualizar as representações. O estudo deve terminar com uma hipótese de melhoria, como “preservar o título do plano em cada trecho reduz respostas com preço trocado”.

</details>

---

<a id="aula-05"></a>

## 05 · Faça o agente executar uma ação

**Use na entrega 3: conectar uma ação e conferir seu resultado.**

**Ao terminar:** o agente executará uma tarefa pequena com uma ferramenta, dentro de limites que você definiu.

Uma **ferramenta** permite ao agente consultar ou alterar alguma coisa: ler um arquivo, registrar um pedido ou consultar um serviço. O modelo pode solicitar a ferramenta; o sistema responsável verifica o pedido, executa o que está permitido e devolve o resultado.

Se começou pelo [vídeo do Lucas](https://youtu.be/VHh2D9agRps), use o Hermes que já colocou para funcionar. Sua [documentação oficial](https://hermes-agent.nousresearch.com/docs/) apresenta ferramentas, memória e habilidades reutilizáveis. Escolha uma dessas peças para entender e adaptar ao seu projeto.

<p class="compact-visual"><a href="../mapas-e-desenhos/05-ciclo-do-agente.svg"><img src="../mapas-e-desenhos/05-ciclo-do-agente.svg" width="157" alt="Ciclo do agente entre objetivo, decisão do modelo, solicitação de ferramenta, validação, execução e resultado, com uma condição de parada." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Cada ação volta como resultado para o agente; o ciclo precisa parar quando a tarefa termina, falta informação ou um limite é atingido.

### 05.1 · Dê um objetivo pequeno e limites claros

Por exemplo: “Leia os pedidos deste arquivo e registre os que precisam de resposta na tabela de teste”. Defina onde o agente pode ler e escrever, o que deve fazer quando faltar informação e quando precisa pedir ajuda.

Para tarefas com uma sequência conhecida, um fluxo fixo pode ser suficiente. Deixe o modelo escolher passos quando essa flexibilidade ajudar a lidar com as variações da tarefa. Em qualquer caso, confira a ação no destino.

### 05.2 · Faça no seu agente · 80% prática

1. Escolha **uma ação** que uma ferramenta pronta consiga executar em um recurso de teste.
2. Descreva o resultado esperado, o acesso permitido e o momento de parar ou pedir ajuda.
3. Execute um caso simples e confira o arquivo, registro ou resultado produzido.
4. Teste uma informação ausente e um pedido repetido. Observe se o agente pergunta, para ou cria um efeito duplicado.
5. Registre o que precisa mudar antes de usar essa ação no processo real.

**Pode seguir quando:** você mostra a ação funcionando, explica o que ela pode alterar e demonstra como interromper ou encaminhar um caso que não deu certo.

### 05.3 · Estude para destravar · 20% teoria

Leia a parte de fluxos e agentes em [Building effective agents, da Anthropic](https://www.anthropic.com/engineering/building-effective-agents), para decidir quanta liberdade a tarefa exige. A documentação da ferramenta escolhida deve orientar a configuração; bibliotecas extras só são necessárias se resolverem uma dificuldade concreta.

<details>
<summary>Para aprofundar: chamadas de ferramenta, autonomia, MCP e repetição segura</summary>

### 05.4 · Ferramentas: o modelo pede, o sistema executa

Em **tool use** ou **function calling**, você disponibiliza ferramentas com nome, descrição e regras para os argumentos — os dados que elas recebem. O modelo pode solicitar uma chamada. O código ou serviço responsável confere o pedido, executa a operação autorizada e devolve o resultado.

Imagine uma requisição de estoque. Uma pessoa preenche produto e quantidade; o estoque confere identidade, disponibilidade e permissão antes de liberar. Uma requisição bem preenchida não é uma autorização automática.

No agente de leads, comece com uma ferramenta como `consultar_planos`. Depois, experimente `registrar_interesse` em uma base de teste. Uma descrição útil deixa explícito o que cada ferramenta faz, os campos exigidos e o que ela não consegue decidir. A integração deve verificar o acesso ao lead; não confie em um identificador inventado pelo modelo.

### 05.5 · Fluxo e agente: escolha onde a decisão acontece

Em um **fluxo com IA**, você define a sequência principal e usa o modelo em certas etapas. Em um **agente**, o modelo pode selecionar próximos passos e ferramentas dentro dos limites do sistema. Essa distinção é apresentada em [Building effective agents, da Anthropic](https://www.anthropic.com/engineering/building-effective-agents).

Pense em receita e cozinheiro: uma receita define a ordem; um cozinheiro escolhe como adaptar o caminho. A analogia não torna autonomia uma qualidade automática. Mais liberdade pode aumentar a variedade de situações resolvidas, mas também o trabalho de verificar o que aconteceu.

| Parte do agente de leads | Desenho inicial | Motivo |
| --- | --- | --- |
| Validar campos e identidade | Código com regras explícitas. | A condição de aceitação é conhecida. |
| Interpretar a intenção da mensagem | Modelo, com categorias avaliáveis. | O texto varia. |
| Consultar plano ou política | Ferramenta de leitura com acesso delimitado. | A resposta precisa de informação atual. |
| Escolher entre pedir esclarecimento e consultar | Decisão do modelo dentro do escopo. | Depende do que falta na mensagem. |
| Alterar oportunidade comercial | Validação de argumentos e permissão antes da execução. | Muda um registro do processo. |
| Prometer condição fora da política | Encaminhamento humano. | O agente não recebeu autoridade para isso. |

### 05.6 · O ciclo precisa terminar

Um ciclo típico é: objetivo → contexto → decisão → solicitação de ferramenta → validação e execução → resultado → nova decisão. Ele termina quando a tarefa foi concluída, faltam informações, ocorreu uma falha sem recuperação prevista ou um limite foi atingido.

Defina limite de passos, prazo e orçamento. Registre o motivo da parada. Se a ferramenta devolver “não encontrado”, o agente não deve repetir para sempre a mesma consulta. Ele pode pedir um dado necessário ou encaminhar o caso.

Não use um multiplicador fixo para estimar o custo de um agente. Meça quantas chamadas ocorrem, quanto contexto é reenviado, o tamanho das respostas e o custo das ferramentas. Uma tarefa simples com muitas tentativas pode custar mais que uma tarefa extensa bem delimitada.

### 05.7 · Orquestração e MCP

**Orquestração** organiza a sequência de passos, o que já aconteceu, as chamadas de ferramenta e o tratamento de erros. O agente que você usa pode oferecer isso pronto. Em uma implementação própria, pode começar com poucas funções; bibliotecas e plataformas oferecem recursos para retomar uma execução, montar fluxos visuais ou conectar diferentes provedores.

Nomes como LangChain, LangGraph, n8n, Langflow, LiteLLM e Semantic Kernel aparecem nesse ecossistema, mas não representam todos a mesma camada. Antes de escolher, descreva a capacidade necessária: “preciso retomar uma execução interrompida” é uma justificativa verificável; “a ferramenta está em alta” não descreve uma necessidade do projeto.

O **Model Context Protocol (MCP)** padroniza a conexão de aplicações de IA com ferramentas e fontes de dados. A analogia é uma tomada: uma interface comum reduz adaptações entre componentes compatíveis. O protocolo não substitui suas decisões de autorização, confiança e qualidade. A [introdução oficial do MCP](https://modelcontextprotocol.io/docs/getting-started/intro) explica seus componentes e usos.

Para aprender, examine uma ferramenta simples que já funciona no seu agente. Se precisar criar uma própria, comece por uma operação pequena. Depois avalie se disponibilizá-la por MCP ou adotar uma biblioteca de orquestração resolve uma dificuldade real da integração.

### 05.8 · Repetição sem efeito duplicado

**Retry** é repetir uma operação após uma falha. Ele precisa de limite e intervalo adequado. **Idempotência** significa que repetir a mesma operação lógica não cria efeitos adicionais indesejados. Uma chave de evento ou de operação pode ajudar a reconhecer que o trabalho já aconteceu.

No nosso exemplo, o **CRM**, sistema usado para organizar contatos e oportunidades comerciais, pode registrar o interesse e a resposta da API se perder. Se o agente repetir sem controle, surgem dois registros. Guarde a identidade da operação e confira o resultado antes de criar outro. Uma fila guarda tarefas para processá-las depois; também exige cuidado com entregas repetidas.

### 05.9 · Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Diferença entre fluxo e agente; comece pelos padrões simples. | Justificar onde o modelo decide o próximo passo. |
| [Hugging Face — Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) | Conceito de ferramenta e ciclo do agente. | Comparar o ciclo do exercício com o seu. |
| [Claude Platform Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs) | Ferramentas na API efetivamente escolhida. | Conferir o contrato da solicitação e da resposta. |
| [MCP — introdução oficial](https://modelcontextprotocol.io/docs/getting-started/intro) | Componentes e conexão com ferramentas. | Desenhar onde entraria no seu sistema, se necessário. |

Em **AI Engineering**, de Chip Huyen, procure os tópicos de agentes e desenho de aplicação; os [materiais de apoio](https://github.com/chiphuyen/aie-book) ajudam a encontrar a seção relevante. Consulte o trecho que ajuda a resolver a sua dúvida atual.

</details>

---

<a id="aula-06"></a>

## 06 · Teste, encontre a falha e melhore

**Use na entrega 4: testar e melhorar o que você construiu.**

**Ao terminar:** você terá exemplos que consegue repetir, uma comparação entre versões e uma melhoria demonstrável.

Comece com uma pergunta simples: “O agente fez o que eu esperava neste caso?”. Guarde entrada, resultado esperado e resultado obtido. Esse conjunto de casos forma uma **avaliação**, frequentemente chamada **eval**.

Não precisa começar com uma plataforma de testes. Uma tabela e a conferência manual já ajudam a descobrir o que funciona, o que falha e se uma mudança melhorou o resultado.

<p class="compact-visual"><a href="../mapas-e-desenhos/06-avaliacao.svg"><img src="../mapas-e-desenhos/06-avaliacao.svg" width="152" alt="Ciclo de avaliação: definir casos e critérios, executar o agente, localizar falhas, corrigir e comparar os resultados novamente." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Use os mesmos casos para comparar mudanças e acrescente os problemas novos que encontrar no uso.

### 06.1 · Quando falhar, siga o caminho

- **Informação:** o agente recebeu ou encontrou a fonte correta?
- **Resposta:** usou essa informação sem inventar um fato?
- **Ação:** executou o que era permitido e o resultado apareceu no destino?

Essas perguntas ajudam a escolher onde mexer. Um preço errado pode vir do documento antigo; dois registros iguais podem vir de uma ação repetida. A correção deve responder ao que você observou.

### 06.2 · Faça no seu agente · 80% prática

1. Reúna os casos das entregas anteriores: tarefa simples, informação faltante, fonte alterada e pedido repetido.
2. Escreva o que deve acontecer em cada caso. Use uma tabela com **pedido, fonte disponível, resultado esperado, resultado observado e conclusão**.
3. Execute e confira respostas **e ações**. Anote a etapa em que cada falha apareceu.
4. Corrija uma causa provável e repita os mesmos casos. Confira também se algo que funcionava deixou de funcionar.

**Exemplo de registro:** pedido: “Qual é o horário de domingo?”; fonte: arquivo com horários de segunda a sexta; esperado: avisar que domingo não consta; observado: copie a resposta do agente; conclusão: explique se passou e o que precisa mudar.

**Pode seguir quando:** você mostra os resultados antes e depois e sabe qual problema ainda precisa de atenção. Amplie os casos à medida que ampliar o uso.

### 06.3 · Estude para destravar · 20% teoria

O guia de [boas práticas de avaliação da OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices) ajuda a escolher casos e critérios. Use os princípios na sua tabela; você não precisa adotar uma plataforma específica para fazer este exercício.

<details>
<summary>Para aprofundar: avaliações automáticas, rastreamento e proteção das ações</summary>

### 06.4 · Eval: uma pergunta de qualidade que você consegue repetir

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

### 06.5 · Teste de software e avaliação do modelo se complementam

Um teste de integração verifica se a chamada ao CRM registra o evento corretamente. Um eval verifica se o agente escolheu registrar o interesse no contexto certo. Você precisa dos dois para compreender a solução inteira.

Quando ampliar o uso, amplie também os testes. Uma bateria de 20 casos pode ser um exercício de aprofundamento, mas o número adequado depende da variedade e dos riscos da tarefa. Inclua dados autorizados, exemplos fictícios revisados e situações difíceis. Reserve alguns casos para avaliar mudanças sem ajustar o agente repetidamente aos mesmos exemplos.

Guarde a versão do prompt, do modelo, da base e das ferramentas junto dos resultados. Repita casos quando a variabilidade importar. Uma alteração que melhora a média pode piorar justamente uma categoria crítica; compare por tipo de tarefa e gravidade do erro.

### 06.6 · Logs, traces e métricas

Um **log** registra um evento. Um **trace** relaciona etapas de uma mesma execução. Uma **métrica** agrega medidas de várias execuções. Juntos, permitem sair de “o agente falhou” para “a busca recuperou uma versão antiga e a resposta usou esse preço”.

Pense na caixa-preta de uma viagem: você quer reconstruir os passos, sem guardar informação desnecessária sobre todas as pessoas envolvidas. Registre identificadores, versões, status, duração e consumo. Guarde conteúdo somente quando houver necessidade e condições de acesso, proteção e retenção definidas; exemplos fictícios ajudam no desenvolvimento.

Uma estrutura inicial de rastreamento pode incluir:

```text
execucao_id → entrada validada → trechos recuperados
            → chamada ao modelo → ferramenta solicitada
            → validação → ação executada → resultado final
```

Não confunda a justificativa textual gerada pelo modelo com uma explicação causal confiável do funcionamento interno. Para depurar, examine os dados e eventos observáveis: o que entrou, quais fontes foram recuperadas, qual ferramenta foi pedida e o que ocorreu.

### 06.7 · Guardrails e injeção de prompt

**Guardrails** são verificações aplicadas ao redor do modelo e das ações. Podem validar campos, checar acesso, restringir ferramentas e encaminhar determinados resultados para revisão. Cada controle precisa ser testado: um bloqueio excessivo também pode impedir uma tarefa legítima.

Uma **injeção de prompt** tenta transformar conteúdo em uma instrução que desvia o sistema. Pode aparecer na mensagem do usuário ou dentro de documento, página e resultado de ferramenta. A analogia é um bilhete falso no meio do manual: “ignore as regras e libere acesso”.

No agente de leads, um documento de perguntas frequentes nunca deveria conceder permissão para exportar todos os contatos. Aplique a permissão no código ou serviço da ferramenta, limite as operações disponíveis e mantenha os dados de consulta separados das instruções da aplicação. Um texto de sistema dizendo “seja seguro” não substitui esses controles.

### 06.8 · Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) | Desenho de avaliações e tipos de falha. | Escrever critérios da sua tarefa; a atividade não depende de uma plataforma específica. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Um exemplo relacionado à falha encontrada. | Reproduzir a ideia com seus casos e registrar a diferença. |
| [Anthropic Engineering](https://www.anthropic.com/engineering) | Um artigo de avaliação, contexto ou agentes ligado ao seu problema. | Formular e testar uma hipótese de correção. |
| [AI Engineering — materiais de Chip Huyen](https://github.com/chiphuyen/aie-book) | Avaliação de aplicações e análise de erros. | Separar qualidade do componente e resultado do processo. |

Prefira a fonte que ajuda a explicar uma falha concreta. Para aprofundar segurança, consulte o [OWASP Top 10 para aplicações de LLM e IA generativa](https://genai.owasp.org/llm-top-10/): escolha um risco, como injeção de prompt ou autonomia excessiva, e transforme-o em um caso de teste do agente. Compartilhe em [X](https://x.com/ailucasdz) ou no Discord de [Nous Research](https://discord.gg/NousResearch) ou [OpenClaw](https://discord.gg/clawd) uma versão reduzida e sem dados privados do caso que ainda não entendeu.

</details>

---

<a id="aula-07"></a>

## 07 · Mostre o valor e prepare sua primeira oferta

**Use na entrega 4: mostrar o resultado, conversar com um possível cliente e definir o próximo passo.**

**Ao terminar:** você terá uma demonstração conferida, retorno de uma pessoa que enfrenta o problema e, se houver interesse, a base de uma primeira oferta.

Use o que já construiu para descobrir se a solução tem valor para alguém. Procure uma pessoa ou empresa que realiza a tarefa e converse sobre o processo atual: o que dá trabalho, com que frequência acontece e como ela decide se o resultado está bom. Essa conversa orienta o que demonstrar e o que oferecer.

<p class="compact-visual"><a href="../mapas-e-desenhos/07-operacao.svg"><img src="../mapas-e-desenhos/07-operacao.svg" width="160" alt="Caminho de uso acompanhado: experimentar com poucos casos, medir resultado, tempo e custo, revisar falhas e escolher uma melhoria." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Acompanhar o uso permite demonstrar o resultado e estimar o trabalho de manter a solução funcionando.

### 07.1 · Demonstre uma melhoria que dá para conferir

Prepare uma demonstração com **dados fictícios** no ambiente em que seu agente já funciona. Mostre o pedido, a fonte ou ferramenta usada e o resultado. Compare o processo atual e a solução no mesmo tipo de tarefa: tempo gasto, etapas manuais ou erros encontrados.

Separe **o que foi medido** do **que ainda é hipótese**. Um teste pequeno pode sugerir economia de tempo, mas você precisa verificar se ela se mantém no uso. Mostre também uma falha conhecida e como a pessoa pode continuar a tarefa se o agente não conseguir.

### 07.2 · Se houver interesse, proponha um piloto

Uma primeira oferta pode ser um piloto pago de uma tarefa com **escopo fechado**. Combine a entrega, o prazo negociado, o critério de aceitação, os limites de uso e o que fica fora. Inclua quem paga o consumo das ferramentas e quem cuida de atualizações, falhas e manutenção.

A cobrança deve estar ligada ao serviço e às condições combinadas. Acompanhe seus custos e o esforço necessário para entregar. Você pode começar preenchendo este formulário com a pessoa interessada:

```text
Para quem: [pessoa ou equipe que enfrenta o problema]
Problema observado: [tarefa atual e dificuldade relatada]
Entrega do piloto: [resultado concreto que será demonstrado]
Inclui: [tarefas, fontes, ferramentas e quantidade combinada]
Fica fora: [ações e situações que não serão atendidas]
Prazo combinado: [data negociada conforme o escopo]
Aceito quando: [teste e resultado que ambos conseguem conferir]
Cobrança: [valor e condições combinados para este serviço]
Consumo das ferramentas: [quem paga e qual limite foi combinado]
Manutenção: [quem atualiza as fontes, corrige falhas e presta suporte]
Revisão do piloto: [como vamos decidir se continuamos ou ajustamos]
```

**Exemplo fictício:** uma pequena equipe recebe pedidos e precisa organizá-los em uma tabela. A oferta é preparar um agente que leia pedidos em um arquivo autorizado, preencha os campos combinados e sinalize informações ausentes. O piloto usa exemplos fictícios e termina com uma demonstração conferida pela equipe. Conectar o canal real de mensagens ou enviar respostas aos clientes exige outro acordo de escopo, acesso e testes.

### 07.3 · Faça no seu agente · 80% prática

1. Converse com um possível usuário ou cliente e registre a tarefa que ele quer melhorar.
2. Mostre a demonstração com dados fictícios, a comparação observada e as hipóteses que ainda precisam de teste.
3. Pergunte o que precisaria mudar para a solução ser útil. Se houver interesse em experimentar, prepare a oferta de piloto com as condições acima.
4. Registre o aprendizado e escolha uma melhoria. Anote: **como era feito → o que mudou → casos testados → resultado observado → o que ainda falta confirmar**.

**Você concluiu o ciclo quando:** mostrou o resultado, ouviu alguém que enfrenta o problema e definiu uma próxima ação. Ela pode ser ajustar a solução, testar o piloto ou escolher uma tarefa mais útil.

### 07.4 · Construa em público e converse com a comunidade

Compartilhe uma atualização curta: **problema → o que construí → como testei → o que aprendi → próximo ajuste**. Mostre dados fictícios e identifique estimativas. Leve uma dúvida concreta à comunidade e use o retorno para escolher o próximo teste.

Um exemplo que você pode adaptar ao seu resultado:

> Estou construindo um agente para organizar pedidos em uma tabela. Hoje testei com pedidos fictícios e conferi os campos preenchidos. Ele organizou os casos completos, mas não soube lidar com um pedido sem identificação. Vou ajustar para pedir a informação que falta e repetir os testes. Quem faz esse trabalho hoje: que outra situação eu deveria testar?

Use esse formato em uma publicação no X ou em um canal apropriado da comunidade que acompanha. Registre sugestões, escolha uma para experimentar e conte o que mudou na próxima atualização. Você torna o trabalho visível enquanto aprende com pessoas que conhecem o problema.

### 07.5 · Estude para destravar · 20% teoria

Consulte a documentação do ambiente em que seu agente roda para entender configuração e consumo. Para explicar decisões de construção e operação, os [materiais de AI Engineering, de Chip Huyen](https://github.com/chiphuyen/aie-book), oferecem aprofundamentos. Escolha um tema que apareceu nos testes.

<details>
<summary>Para aprofundar: publicação, custos, tempo de resposta e operação</summary>

### 07.6 · Do protótipo ao ambiente de uso

O **deploy** disponibiliza uma versão da aplicação em seu ambiente de execução. Separe configurações do código, guarde segredos no mecanismo apropriado e documente como iniciar, interromper e recuperar o serviço. Identifique a versão em uso para relacionar reclamações às alterações recentes.

O Git permite comparar versões e revisar mudanças no projeto. Voltar o código para uma versão anterior não desfaz automaticamente uma alteração de dados, como um registro no CRM, o sistema de contatos e oportunidades. Seu plano de recuperação precisa considerar a aplicação e os efeitos que ela já produziu.

Comece com poucos usuários ou um conjunto restrito de dados autorizados. Defina quem acompanha o piloto, como recebe os alertas e quando interrompe a automação. Inclua um caminho para uma pessoa continuar o atendimento se uma ferramenta falhar.

### 07.7 · Serverless e tempo de execução

**Serverless** é um modelo de execução em que o provedor gerencia parte da infraestrutura necessária para rodar seu código. Você continua responsável por configuração, permissões, dados e comportamento da aplicação. Há servidores, mesmo que você não precise administrá-los diretamente.

Serviços como [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) permitem executar funções em resposta a eventos. A adequação depende da quantidade de tarefas, dos limites, da duração e dos custos. Quando é necessário preparar um novo ambiente antes de executar, essa inicialização, chamada **cold start**, pode aumentar a espera.

Pense em chamar um transporte por demanda: você reduz a necessidade de manter um recurso próprio sempre disponível, mas precisa considerar espera e condições de uso. Um agente com execução longa pode precisar de trabalho em segundo plano, fila e retomada de estado. Teste o caminho real antes de escolher só pela facilidade do primeiro deploy.

### 07.8 · Latência: acompanhe a experiência completa

**Latência** é o tempo de espera associado a uma operação. No nosso agente, meça desde a chegada da mensagem até a primeira resposta útil e até a conclusão da ação. A resposta inicial pode ser rápida e o registro no CRM continuar pendente.

A **mediana** é o valor do meio quando você ordena os tempos medidos. O **p95** indica o tempo até o qual chegaram aproximadamente 95% das respostas, conforme o método de cálculo. Se o p95 foi oito segundos, por exemplo, cerca de 5% demoraram mais. Em uma amostra pequena, esse número varia bastante; registre quantos casos mediu e em qual período.

Divida a duração por etapa: recuperação, modelo, ferramenta e fila. Se o CRM consome a maior parte do tempo, reduzir o prompt pode trazer pouco ganho ao usuário. Os registros das execuções devem mostrar onde agir.

### 07.9 · Custo por tarefa e cache

Some os componentes realmente cobrados: tokens de entrada e saída, possíveis categorias adicionais do provedor, ferramentas, armazenamento e infraestrutura. Registre a moeda e a referência de preços utilizada. Uma comparação útil para o produto é:

```text
custo por resolução = custo total observado / tarefas resolvidas no período
```

Defina “resolvida” com clareza. Uma resposta encerrada automaticamente, seguida de reabertura, pode não representar uma resolução real. Acompanhe também esforço humano e taxa de encaminhamento para não esconder custo em outra etapa.

**Cache** reaproveita trabalho quando as condições permitem. Cache de prompt pode reduzir custo ou latência ao reutilizar partes compatíveis da entrada; regras, disponibilidade e descontos variam por provedor e modelo. Cache de resposta guarda uma resposta pronta e tem outro risco: servir conteúdo desatualizado ou inadequado a uma pessoa diferente.

No agente de leads, uma mudança de preço exige revisar onde o dado está armazenado e como as cópias antigas em cache são descartadas ou atualizadas. Confira o consumo informado pela ferramenta e compare execuções equivalentes, sem presumir um desconto fixo. A economia precisa preservar os critérios de qualidade.

### 07.10 · Comunicação técnica é tornar a decisão verificável

Explique o sistema seguindo o caminho da informação: mensagem recebida → validação → consulta → resposta → ação → medição. Mostre uma execução real de teste e uma falha conhecida. Para cada decisão, diga qual necessidade ela atende e qual evidência sustenta a escolha.

| Tema | Explicação que ajuda o time a decidir |
| --- | --- |
| RAG | “Buscamos documentos autorizados e enviamos os trechos relevantes ao modelo; a atualização depende do nosso pipeline.” |
| Escolha do modelo | “Comparamos versões nos casos do projeto e observamos qualidade, custo e tempo.” |
| Autonomia | “O modelo escolhe a consulta; a autorização para alterar o CRM é aplicada pela integração.” |
| Qualidade | “Estes casos passaram, estes falharam e esta categoria precisa melhorar antes de ampliar o uso.” |
| Incidente | “A fonte estava antiga; identificamos a versão no trace, corrigimos a atualização e adicionamos um caso de regressão.” |

Quando ainda não souber, separe o que observou da hipótese. “Não confirmei a causa; vou comparar as versões da fonte e repetir o caso” é mais útil que apresentar uma explicação sem evidência.

### 07.11 · Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Production best practices](https://developers.openai.com/api/docs/guides/production-best-practices) | Práticas de operação pertinentes à sua integração. | Rever configuração e acompanhamento antes de ampliar o piloto. |
| [Microsoft Learn](https://learn.microsoft.com/pt-br/training/) ou [Google Cloud — treinamento](https://cloud.google.com/learn/training) | Um módulo do ambiente de execução escolhido. | Entender seus limites e como observar a aplicação. |
| [AWS Lambda — introdução](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) | Use se estiver considerando funções por evento. | Verificar adequação à duração e à carga do agente. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Arquitetura, operação e otimização. | Priorizar uma melhoria orientada por medição. |

**Co-Intelligence**, de Ethan Mollick, oferece um aprofundamento opcional sobre trabalho com IA. Use a [página da editora](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/) para conhecer a obra. Mantenha o foco na decisão que o piloto exige agora.

Depois da revisão, mantenha uma rotina leve: acompanhar as fontes desta aula e as conversas no [X](https://x.com/ailucasdz) ou nos Discords de [Nous Research](https://discord.gg/NousResearch) e [OpenClaw](https://discord.gg/clawd), selecionar uma mudança relevante, experimentar no ambiente de teste e incorporá-la só quando os resultados justificarem. Novas ferramentas entram no projeto para atender uma necessidade observada.

</details>

[Voltar ao índice das aulas ↑](#aulas) · [Voltar ao guia principal](../README.md)

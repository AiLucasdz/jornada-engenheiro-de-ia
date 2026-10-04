# Jornada do Engenheiro de IA

**Enxergue um problema. Construa com IA. Prove o valor. Aprenda a oferecer a solução.**

Uma jornada prática para conectar **mentalidade de IA, processos de negócio, construção e entrega de valor**. Você começa usando um agente, melhora o mesmo projeto em **quatro entregas** e aprende a mostrar o trabalho para quem pode precisar dele.

<p class="compact-visual"><a href="mapas-e-desenhos/ciclo-de-valor.svg"><img src="mapas-e-desenhos/ciclo-de-valor.svg" width="548" alt="Ciclo que conecta mentalidade de IA, teoria, prática, comunidade, construção em público e uma oferta baseada em resultado demonstrado e interesse do cliente." loading="lazy"></a></p>

**80% prática · 20% teoria · Quatro entregas · Sem prazo fixo**

[Começar](#comece-por-aqui) · [Construir o projeto](#quatro-entregas-um-projeto-que-ganha-valor) · [Mostrar o trabalho](#build-in-public-mostre-o-trabalho-enquanto-constrói) · [Preparar uma oferta](#como-transformar-o-projeto-em-um-serviço-pago)

## Mentalidade de IA: veja a tarefa dentro do processo

Na prática, a IA pode ajudar a **interpretar uma mensagem, extrair informações, comparar opções e preparar uma resposta**. Essas capacidades ganham utilidade quando entram numa tarefa real. Abra espaço para experimentar: observar uma pequena melhoria costuma revelar possibilidades que você ainda não tinha considerado.

Um prestador de serviços recebe pedidos de orçamento por mensagem. Alguns chegam completos; outros dizem apenas “quanto custa?”. Ele precisa descobrir o serviço procurado, consultar suas regras, pedir os dados que faltam e organizar o pedido antes de preparar uma proposta.

Esse será o exemplo da jornada. Você pode adaptá-lo ao seu trabalho, mantendo a mesma pergunta: **quem teria um dia melhor se esta tarefa funcionasse bem?**

Pensar com IA começa por observar possibilidades nesse processo. Um agente pode ajudar a interpretar mensagens diferentes e preparar uma próxima pergunta. Para isso, precisa de informação confiável, acesso às ferramentas certas e critérios para conferir o resultado.

| Parte do processo | No pedido de orçamento | O que investigar |
| --- | --- | --- |
| **Entrada** | A mensagem do interessado. | Quais informações costumam faltar? |
| **Decisão** | Entender o serviço e o próximo passo. | Quando é preciso pedir esclarecimento? |
| **Ação** | Consultar o catálogo e registrar o pedido. | Onde o dado deve ficar disponível? |
| **Conferência** | O prestador revisa antes de preparar a proposta. | Como identificar um registro incorreto? |

> **Exercício de observação:** converse com alguém que recebe esses pedidos. Peça três exemplos sem dados privados, acompanhe como são tratados e anote onde há espera, repetição ou correção. Escolha uma parte pequena para experimentar.

### Traduza a possibilidade em valor para o negócio

“Usar um agente” descreve uma ferramenta. O prestador precisa entender o que melhora no trabalho dele. Comece com uma hipótese que dê para verificar:

| Hoje | O que vamos experimentar | Como conferir |
| --- | --- | --- |
| A pessoa relê mensagens para descobrir o serviço. | O agente sugere o serviço procurado e o que falta. | Comparar a sugestão com a revisão do prestador. |
| As dúvidas se repetem e exigem consultar o catálogo. | O agente prepara respostas apoiadas no catálogo aprovado. | Conferir a fonte e contar as correções necessárias. |
| Os pedidos ficam espalhados. | O agente organiza os campos combinados numa tabela. | Medir o tempo de organização e verificar registros ausentes ou duplicados. |

Essas melhorias ainda são **hipóteses**. Observe primeiro como a tarefa é feita hoje e guarde alguns exemplos como referência. Mais adiante, você repetirá a tarefa com o agente e comparará os resultados. Isso ajuda a decidir se a solução merece continuar, mudar ou parar.

## LLM, agente e Hermes: o motor e o carro

Um **modelo de linguagem (LLM) é como o motor**: oferece capacidade ao conjunto. Ele interpreta o contexto e gera respostas ou pedidos de uso de ferramentas. Um **agente é como o carro montado**: reúne o modelo, as instruções, o contexto, as ferramentas e o ciclo de execução.

O **Hermes Agent** oferece essa estrutura pronta para configurar e usar. Você pode começar com ela e entender suas peças enquanto melhora o projeto.

<p class="compact-visual"><a href="mapas-e-desenhos/motor-e-carro.svg"><img src="mapas-e-desenhos/motor-e-carro.svg" width="640" alt="LLM como motor, Hermes como carro, contexto como mapa, tarefa como destino, ferramentas como transmissão e verificações como painel e freios." loading="lazy"></a></p>

No nosso exemplo, a analogia fica assim:

- **Destino:** organizar um pedido para que o prestador prepare o orçamento.
- **Mapa:** catálogo de serviços, perguntas necessárias e regras aprovadas.
- **Rodas e transmissão:** ferramentas para consultar o documento e salvar o registro.
- **Painel e freios:** registros da execução, permissões e condições para interromper ou pedir ajuda.

**Você define a viagem e confere a chegada.** A mensagem “pedido organizado” precisa corresponder ao registro correto. O modelo pode participar da escolha dos próximos passos, mas a qualidade depende também das informações e dos controles ao redor dele. Consulte a [documentação oficial do Hermes](https://hermes-agent.nousresearch.com/docs/) conforme precisar configurar cada parte.

## Comece por aqui

### Minha recomendação — Lucas

**Se puder investir em um curso agora**, recomendo o curso e a comunidade do **Bruno Okamoto, no [Pixel AI Hub](https://pixelaihub.pixeleducacao.com.br/)**. Considero o Bruno um ótimo mentor e seu trabalho um ótimo ponto de partida. Você pode começar por lá e aplicar o aprendizado neste projeto.

> **Não tenho nenhuma parceria com o Bruno Okamoto.** Esta é uma recomendação pessoal.

**Se estiver sem orçamento para um curso**, assista ao meu vídeo **[Crie seu Agente de IA Hermes em menos de 20 minutos](https://youtu.be/VHh2D9agRps)**. Coloque o agente para funcionar e siga a primeira entrega. O vídeo é aberto; modelos, ferramentas e hospedagem podem ter custos conforme a configuração escolhida.

**Já tem um agente funcionando?** Use-o com os três exemplos de pedido que separou. A primeira meta é observar seu comportamento numa tarefa pequena.

## Quatro entregas, um projeto que ganha valor

O projeto será um **agente que ajuda a organizar pedidos de orçamento**. Ele identifica o serviço procurado, consulta informações aprovadas e prepara um registro para revisão. A proposta comercial continua sob responsabilidade do prestador.

| Entrega | O que muda no projeto | O que você precisa mostrar |
| --- | --- | --- |
| **1 · Interpretar** | O agente identifica a necessidade e o dado ausente. | Três mensagens testadas e uma falha compreendida. |
| **2 · Consultar** | As respostas passam a usar um catálogo aprovado. | Uma resposta com fonte e um teste de informação ausente. |
| **3 · Registrar** | Uma ferramenta organiza o pedido numa tabela de teste. | O registro correto, sem duplicação indesejada. |
| **4 · Melhorar** | Você testa o fluxo, corrige uma falha e pede retorno. | Uma demonstração e uma comparação com o trabalho atual. |

### 1 · Faça uma tarefa pequena funcionar

Comece pela interpretação da mensagem. Neste exercício, o prestador recebe pedidos de serviços de instalação. Use estes casos fictícios:

| Caso | Mensagem recebida | O que observar |
| --- | --- | --- |
| **Com contexto** | “Quero instalar dois ventiladores de teto no escritório. Vocês atendem empresas?” | Identificar o serviço e a dúvida sobre atender empresas, preparando a próxima pergunta. |
| **Incompleto** | “Quanto custa instalar?” | Perguntar qual serviço a pessoa procura. |
| **Fora do escopo** | “Qual time ganhou ontem?” | Reconhecer que a mensagem está fora do assunto de orçamento. |

Agora informe ao agente o objetivo, o formato esperado e como lidar com informação insuficiente:

```text
Ajude um prestador de serviços de instalação.
Organize os pedidos de orçamento.
Identifique o serviço procurado e a informação que ainda falta.
Use apenas os dados da mensagem.
Responda com: serviço, dúvida principal e próxima pergunta.
Quando algo não estiver claro, indique a dúvida.
```

**Experimente:** envie os três casos separadamente. Altere a instrução uma vez e repita as mesmas mensagens para perceber o efeito.

> **Como conferir:** no primeiro caso, o serviço é “instalação de dois ventiladores de teto” e a dúvida é “atende empresas?”. Nesta entrega, o agente identifica a necessidade e prepara a próxima pergunta. Responder que o prestador atende empresas exige consultar uma informação aprovada — esse será o próximo passo.

> **Sua entrega:** você consegue explicar o que orientou o agente, mostrar seus três testes e identificar uma resposta que precisou de correção.

### 2 · Dê uma fonte confiável ao agente

Prepare um catálogo curto com serviços, informações necessárias para o orçamento, regras e data de atualização. Oriente o agente a consultá-lo e indicar o trecho que sustenta a resposta.

Comece copiando este exemplo fictício para um arquivo chamado `catalogo-servicos.txt` e disponibilize-o ao agente:

```text
Serviços: instalação de ventiladores de teto e pequenas manutenções.
Atendimento: residências e empresas.
Para preparar o orçamento: serviço, quantidade, endereço e disponibilidade.
Valor e agendamento: confirmados pelo prestador após analisar o pedido.
Atualização: [data da sua revisão].
```

Com essa fonte, “Vocês atendem empresas?” pode receber **“Sim, conforme o catálogo de serviços”**. Já “Quanto fica?” exige reunir os dados para o prestador avaliar. A diferença é a informação disponível para sustentar cada resposta.

O catálogo funciona como um **manual de consulta**. Quando o sistema busca trechos relevantes e os fornece ao modelo para responder, esse caminho é chamado **RAG**. A informação precisa existir na fonte e chegar ao modelo; escrever “consulte o catálogo” numa instrução não comprova que a consulta ocorreu.

Faça três verificações:

1. Pergunte algo respondido pelo catálogo e confira a origem da resposta.
2. Pergunte um preço que o documento não informa e observe se o agente pede ajuda.
3. Altere uma regra do catálogo e repita a pergunta para verificar a atualização.

> **Sua entrega:** você mostra a resposta e sua fonte, demonstra o comportamento quando falta informação e confirma que a alteração no catálogo foi considerada.

### 3 · Conecte uma ação útil

Agora o agente vai salvar **serviço procurado, dúvida principal e informação pendente** numa tabela de teste. Use uma ferramenta disponível no ambiente escolhido e dados fictícios para conferir o caminho completo.

Para a mensagem dos dois ventiladores, um registro depois da consulta ao catálogo poderia ser:

```text
Pedido: teste-001
Serviço: instalação de dois ventiladores de teto em um escritório.
Dúvida: atende empresas? Sim, conforme o catálogo.
Informação pendente: endereço e disponibilidade para o serviço.
Situação: aguardando informações; orçamento ainda não preparado.
```

Peça ao agente para salvar esse registro no arquivo ou na tabela de teste escolhida. Abra o destino e compare os campos. Se a ferramenta não estiver configurada, use esse exemplo como resultado esperado ao preparar a conexão.

Uma ferramenta se parece com a **chave de uma sala**: concede acesso a determinados recursos e ações. Defina onde o agente pode registrar dados e quando deve parar. Na chamada de ferramenta, o modelo solicita a ação; o sistema responsável precisa validá-la e executá-la.

**Experimente:** envie um pedido, abra a tabela e confira o registro. Repita o mesmo pedido e observe se aparece uma duplicata. Depois, retire um dado necessário ou torne a ferramenta indisponível para conferir o tratamento da falha.

> **Sua entrega:** o “feito” corresponde ao resultado no destino. Você consegue localizar o pedido, explicar os limites de acesso e interromper o fluxo.

### 4 · Teste, melhore e demonstre

Use uma pequena bateria de situações para repetir a avaliação a cada mudança:

| Situação | O que conferir |
| --- | --- |
| Pedido comum | Serviço e campos correspondem à mensagem. |
| Informação ausente | O agente pede o dado necessário. |
| Pedido ambíguo | A dúvida é esclarecida antes de registrar uma conclusão. |
| Pedido repetido | A repetição não cria um efeito indesejado. |
| Ferramenta indisponível | O erro é informado e existe uma forma de continuar o atendimento. |

Guarde **pedido → resultado esperado → resultado observado → ajuste**. Corrija uma falha e execute os mesmos casos novamente; uma mudança pode melhorar um caso e prejudicar outro.

Demonstre o fluxo ao prestador: mensagem recebida, consulta ao catálogo, pergunta de esclarecimento e registro. Peça que ele confira a utilidade. Compare com a referência inicial: quanto trabalho de organização e correção permaneceu? O registro está mais fácil de usar?

> **Sua entrega:** você apresenta uma execução completa, uma falha conhecida, uma melhoria verificada e o retorno de alguém que faz a tarefa. Os cinco casos iniciam a avaliação; acrescente exemplos conforme descobrir novas situações.

## Fundamentos aplicados: estude a dúvida que apareceu

A história e a base técnica fazem parte das entregas: ajudam a escolher problemas, entender limites e investigar falhas. Você não precisa concluir todas as leituras para iniciar o projeto. Abra a [coleção de aulas](aulas/README.md) quando uma explicação ajudar no próximo passo.

**80/20 é uma referência de trabalho:** numa sessão de uma hora, experimente 12 minutos de estudo, 28 de construção, 15 de testes e 5 de registro. O estudo orienta uma ação; os testes mostram o que precisa ser estudado depois.

| Sua dúvida agora | Conceito que ajuda | Consulta e fonte recomendada |
| --- | --- | --- |
| Vale aplicar IA nesta parte do trabalho? | Escopo, limites e resultado observável. | [História da IA e escolha de problemas](aulas/README.md#aula-01). |
| Por que a resposta parece boa, mas contém um erro? | [Modelos, aprendizado e contexto](aulas/README.md#aula-02). | [Google — fundamentos de ML](https://developers.google.com/machine-learning/crash-course?hl=pt-br). |
| Como levar a mensagem até a tabela? | [Integrações, dados e estado](aulas/README.md#aula-03). | Um exemplo do provedor usado: [OpenAI Cookbook](https://developers.openai.com/cookbook), [Claude Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs). |
| Por que o agente ignorou ou não encontrou a regra do catálogo? | [Contexto, busca e RAG](aulas/README.md#aula-04). | [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners). |
| Como dar uma ferramenta ao agente e definir seus limites? | [Agentes, ferramentas e autonomia](aulas/README.md#aula-05). | [Hermes — documentação](https://hermes-agent.nousresearch.com/docs/) para configurar; [Claude Academy](https://academy.claude.com/) para praticar delegação e revisão. |
| Como saber se a mudança melhorou o projeto? | Casos repetíveis, comparação e investigação de erros. | [Avaliação e confiabilidade](aulas/README.md#aula-06). |
| Como outra pessoa usa e acompanha o projeto? | [Operação, registros e comunicação](aulas/README.md#aula-07). | [GitHub Skills — Introduction to GitHub](https://github.com/skills/introduction-to-github) para guardar e apresentar as versões. |

Escolha **uma referência por dúvida**. Ao pesquisar no Google, use o nome da ferramenta, a tarefa e a mensagem exata do erro entre aspas. O filtro `site:` ajuda a procurar no domínio oficial. Confira a versão e experimente a orientação num caso pequeno antes de ampliar a mudança.

## Comunidades: aprenda na oficina de quem está construindo

Uma comunidade funciona como uma **oficina compartilhada**: você observa soluções, mostra uma peça que falhou e recebe ideias. Leve uma pergunta concreta e volte para contar o que resolveu.

- **X:** acompanhe [@ailucasdz](https://x.com/ailucasdz) e explore [os perfis que acompanha](https://x.com/ailucasdz/following). Escolha uma ideia para experimentar.
- **Discord da [Nous Research](https://discord.gg/NousResearch):** discussões sobre Hermes, ferramentas e configuração.
- **Discord do [OpenClaw](https://discord.gg/clawd):** experiências de integração e uso de agentes.
- **Comunidade do Bruno**, se participar: leve dúvidas do projeto e aplique o que aprender no mesmo agente.

> **Um pedido de ajuda útil:** “Meu agente registra pedidos nesta tabela de teste. Reenviei a mesma mensagem e surgiram duas linhas. Esperava um único registro. Já conferi o identificador do pedido. Como posso investigar onde a repetição acontece?”

Inclua um exemplo pequeno, sem dados privados. Construtores ajudam a investigar a implementação; o prestador ajuda a julgar se ela melhora o trabalho real. Procure os dois tipos de retorno.

## Build in public: mostre o trabalho enquanto constrói

Construir em público torna visíveis suas decisões e resultados. Pense numa **vitrine com a oficina à vista**: quem acompanha consegue ver o que funciona, como foi conferido e o que falta melhorar.

A cada entrega, escolha um registro útil para compartilhar:

- **Primeira versão:** uma mensagem de teste e a resposta comentada.
- **Melhoria:** o mesmo caso antes e depois da correção.
- **Demonstração:** o caminho da mensagem até o registro, com uma limitação conhecida.

> **Exemplo de publicação:** “Meu agente já organiza pedidos de orçamento usando um catálogo de teste. Nos cinco casos que separei, um pedido repetido criou duas linhas. Corrigi a identificação e repeti os testes. Quem recebe esses pedidos: quais situações mais dão trabalho na hora de organizar?”

No **GitHub**, mantenha problema, instruções de uso, demonstração, testes e limites conhecidos. No **X ou Discord**, mostre uma parte do trabalho e abra uma conversa, respeitando as regras do espaço. Use dados fictícios ou autorizados e diferencie o resultado medido da expectativa.

A publicação dá visibilidade ao trabalho. O interesse de alguém com uma necessidade concreta permite avançar para uma conversa sobre serviço.

## Como transformar o projeto em um serviço pago

Retome o prestador do início: ele conferiu a demonstração e quer experimentar na sua rotina. A próxima conversa é sobre **uma entrega delimitada, critérios de aceitação e condições de trabalho**.

1. **Confirme a necessidade.** Observe o processo real, a frequência dos pedidos, as correções e quem usará os registros.
2. **Combine um piloto.** Se houver interesse, proponha uma tarefa, um período e um valor para validar o uso acompanhado.
3. **Entregue com evidências.** Execute os casos combinados, demonstre o fluxo e documente como usar e atualizar o catálogo.
4. **Avalie a continuidade.** Compare os resultados com o cliente. Atualização, correção e suporte podem compor um serviço recorrente quando houver trabalho e interesse que o justifiquem.

### Uma primeira oferta para este projeto

| Parte da proposta | Exemplo a adaptar com o cliente |
| --- | --- |
| **Problema** | Pedidos incompletos e espalhados exigem organização manual. |
| **Entrega** | Configurar o agente para consultar o catálogo aprovado e registrar os campos combinados na tabela autorizada. |
| **Limites** | Preços e condições fora do catálogo são encaminhados; o prestador revisa a proposta comercial. |
| **Aceitação** | Cliente e responsável pelo projeto conferem os casos combinados, os registros e o tratamento de falhas. |
| **Prazo e acompanhamento** | Período do piloto, revisões e suporte definidos na proposta. |
| **Valor e consumo** | Condições do serviço, responsável pelo consumo de ferramentas e limite acompanhado. |
| **Manutenção** | Responsável por atualizar o catálogo, revisar erros e manter a integração. |

O preço precisa considerar o trabalho de configuração, testes, ajustes, documentação e acompanhamento. Estime esse esforço e separe-o do consumo de modelos, ferramentas e hospedagem. Combine como tratar mudanças de escopo antes de assumir novas tarefas.

**Sua proposta está clara quando:** o cliente entende o que receberá, como verificará a entrega, o que fica fora e quais custos assumirá.

## Escolha sua primeira entrega

Separe **três pedidos de orçamento**, configure o agente e teste a instrução da entrega 1. Registre uma falha. Esse registro indica o próximo conceito a estudar, a próxima pergunta à comunidade e a próxima melhoria para mostrar.

**[Fazer a primeira entrega](#quatro-entregas-um-projeto-que-ganha-valor)** · [Fundamentos aplicados](aulas/README.md) · [Contribuir](CONTRIBUTING.md)

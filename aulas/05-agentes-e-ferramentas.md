# 05 · Faça o agente executar uma ação

[← Consulta anterior](04-contexto-e-rag.md) · [Aulas](README.md) · [Próxima consulta →](06-avaliacao-e-confiabilidade.md)

**Use na entrega 3: conectar uma ação e conferir seu resultado.**

**Ao terminar:** o agente executará uma tarefa pequena com uma ferramenta, dentro de limites que você definiu.

Uma **ferramenta** permite ao agente consultar ou alterar alguma coisa: ler um arquivo, registrar um pedido ou consultar um serviço. O modelo pode solicitar a ferramenta; o sistema responsável verifica o pedido, executa o que está permitido e devolve o resultado.

Se começou pelo [vídeo do Lucas](https://youtu.be/VHh2D9agRps), use o Hermes que já colocou para funcionar. Sua [documentação oficial](https://hermes-agent.nousresearch.com/docs/) apresenta ferramentas, memória e habilidades reutilizáveis. Escolha uma dessas peças para entender e adaptar ao seu projeto.

![Ciclo do agente entre objetivo, decisão do modelo, solicitação de ferramenta, validação, execução e resultado, com uma condição de parada.](../mapas-e-desenhos/05-ciclo-do-agente.svg)

Cada ação volta como resultado para o agente; o ciclo precisa parar quando a tarefa termina, falta informação ou um limite é atingido.

## Dê um objetivo pequeno e limites claros

Por exemplo: “Leia os pedidos deste arquivo e registre os que precisam de resposta na tabela de teste”. Defina onde o agente pode ler e escrever, o que deve fazer quando faltar informação e quando precisa pedir ajuda.

Para tarefas com uma sequência conhecida, um fluxo fixo pode ser suficiente. Deixe o modelo escolher passos quando essa flexibilidade ajudar a lidar com as variações da tarefa. Em qualquer caso, confira a ação no destino.

## Faça no seu agente · 80% prática

1. Escolha **uma ação** que uma ferramenta pronta consiga executar em um recurso de teste.
2. Descreva o resultado esperado, o acesso permitido e o momento de parar ou pedir ajuda.
3. Execute um caso simples e confira o arquivo, registro ou resultado produzido.
4. Teste uma informação ausente e um pedido repetido. Observe se o agente pergunta, para ou cria um efeito duplicado.
5. Registre o que precisa mudar antes de usar essa ação no processo real.

**Pode seguir quando:** você mostra a ação funcionando, explica o que ela pode alterar e demonstra como interromper ou encaminhar um caso que não deu certo.

## Estude para destravar · 20% teoria

Leia a parte de fluxos e agentes em [Building effective agents, da Anthropic](https://www.anthropic.com/engineering/building-effective-agents), para decidir quanta liberdade a tarefa exige. A documentação da ferramenta escolhida deve orientar a configuração; bibliotecas extras só são necessárias se resolverem uma dificuldade concreta.

<details>
<summary>Para aprofundar: chamadas de ferramenta, autonomia, MCP e repetição segura</summary>

## Ferramentas: o modelo pede, o sistema executa

Em **tool use** ou **function calling**, você disponibiliza ferramentas com nome, descrição e regras para os argumentos — os dados que elas recebem. O modelo pode solicitar uma chamada. O código ou serviço responsável confere o pedido, executa a operação autorizada e devolve o resultado.

Imagine uma requisição de estoque. Uma pessoa preenche produto e quantidade; o estoque confere identidade, disponibilidade e permissão antes de liberar. Uma requisição bem preenchida não é uma autorização automática.

No agente de leads, comece com uma ferramenta como `consultar_planos`. Depois, experimente `registrar_interesse` em uma base de teste. Uma descrição útil deixa explícito o que cada ferramenta faz, os campos exigidos e o que ela não consegue decidir. A integração deve verificar o acesso ao lead; não confie em um identificador inventado pelo modelo.


## Fluxo e agente: escolha onde a decisão acontece

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


## O ciclo precisa terminar

Um ciclo típico é: objetivo → contexto → decisão → solicitação de ferramenta → validação e execução → resultado → nova decisão. Ele termina quando a tarefa foi concluída, faltam informações, ocorreu uma falha sem recuperação prevista ou um limite foi atingido.

Defina limite de passos, prazo e orçamento. Registre o motivo da parada. Se a ferramenta devolver “não encontrado”, o agente não deve repetir para sempre a mesma consulta. Ele pode pedir um dado necessário ou encaminhar o caso.

Não use um multiplicador fixo para estimar o custo de um agente. Meça quantas chamadas ocorrem, quanto contexto é reenviado, o tamanho das respostas e o custo das ferramentas. Uma tarefa simples com muitas tentativas pode custar mais que uma tarefa extensa bem delimitada.


## Orquestração e MCP

**Orquestração** organiza a sequência de passos, o que já aconteceu, as chamadas de ferramenta e o tratamento de erros. O agente que você usa pode oferecer isso pronto. Em uma implementação própria, pode começar com poucas funções; bibliotecas e plataformas oferecem recursos para retomar uma execução, montar fluxos visuais ou conectar diferentes provedores.

Nomes como LangChain, LangGraph, n8n, Langflow, LiteLLM e Semantic Kernel aparecem nesse ecossistema, mas não representam todos a mesma camada. Antes de escolher, descreva a capacidade necessária: “preciso retomar uma execução interrompida” é uma justificativa verificável; “a ferramenta está em alta” não descreve uma necessidade do projeto.

O **Model Context Protocol (MCP)** padroniza a conexão de aplicações de IA com ferramentas e fontes de dados. A analogia é uma tomada: uma interface comum reduz adaptações entre componentes compatíveis. O protocolo não substitui suas decisões de autorização, confiança e qualidade. A [introdução oficial do MCP](https://modelcontextprotocol.io/docs/getting-started/intro) explica seus componentes e usos.

Para aprender, examine uma ferramenta simples que já funciona no seu agente. Se precisar criar uma própria, comece por uma operação pequena. Depois avalie se disponibilizá-la por MCP ou adotar uma biblioteca de orquestração resolve uma dificuldade real da integração.


## Repetição sem efeito duplicado

**Retry** é repetir uma operação após uma falha. Ele precisa de limite e intervalo adequado. **Idempotência** significa que repetir a mesma operação lógica não cria efeitos adicionais indesejados. Uma chave de evento ou de operação pode ajudar a reconhecer que o trabalho já aconteceu.

No nosso exemplo, o **CRM**, sistema usado para organizar contatos e oportunidades comerciais, pode registrar o interesse e a resposta da API se perder. Se o agente repetir sem controle, surgem dois registros. Guarde a identidade da operação e confira o resultado antes de criar outro. Uma fila guarda tarefas para processá-las depois; também exige cuidado com entregas repetidas.


## Mais fontes para consultar

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Diferença entre fluxo e agente; comece pelos padrões simples. | Justificar onde o modelo decide o próximo passo. |
| [Hugging Face — Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) | Conceito de ferramenta e ciclo do agente. | Comparar o ciclo do exercício com o seu. |
| [Claude Platform Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs) | Ferramentas na API efetivamente escolhida. | Conferir o contrato da solicitação e da resposta. |
| [MCP — introdução oficial](https://modelcontextprotocol.io/docs/getting-started/intro) | Componentes e conexão com ferramentas. | Desenhar onde entraria no seu sistema, se necessário. |

Em **AI Engineering**, de Chip Huyen, procure os tópicos de agentes e desenho de aplicação; os [materiais de apoio](https://github.com/chiphuyen/aie-book) ajudam a encontrar a seção relevante. Consulte o trecho que ajuda a resolver a sua dúvida atual.

</details>

[Testar e melhorar o agente →](06-avaliacao-e-confiabilidade.md)

# 05 · Transforme uma resposta em ação

[← Aula anterior](04-contexto-e-rag.md) · [Aulas](README.md) · [Próxima aula →](06-avaliacao-e-confiabilidade.md)

**Quando usar:** semanas 7–8. **Entrega:** um agente com ferramenta de leitura e uma ação controlada em ambiente de teste.

Seu sistema já recebe mensagens, guarda estado e consulta fontes. Agora ele poderá pedir uma ação, observar o resultado e decidir como continuar. O desenho desse ciclo define a autonomia que você está concedendo.

## Reconheça essas peças no Hermes

Se começou pelo [vídeo do Lucas](https://youtu.be/VHh2D9agRps), você já tem um exemplo para investigar. O **LLM** interpreta o contexto e propõe a resposta ou a próxima chamada de ferramenta. O **agente** organiza o ciclo entre essas decisões, a execução e os resultados. O **Hermes Agent**, da Nous Research, oferece essa estrutura pronta, com ferramentas, memória e habilidades reutilizáveis, conforme sua [documentação oficial](https://hermes-agent.nousresearch.com/docs/).

Escolha uma tarefa que já executou no Hermes e identifique essas peças. Use as seções abaixo para entender e melhorar o próprio agente. Guardar memória ou reutilizar uma habilidade não equivale a treinar novamente o modelo.

## Ferramentas: o modelo pede, o sistema executa

Em **tool use** ou **function calling**, você disponibiliza ferramentas com nome, descrição e um contrato de argumentos. O modelo pode produzir uma solicitação de chamada. O código ou serviço responsável pela ferramenta valida a solicitação, executa a operação autorizada e devolve o resultado.

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

**Orquestração** organiza estado, sequência, chamadas, erros e retomadas. Pode começar como poucas funções no seu código. Bibliotecas e plataformas acrescentam abstrações para problemas específicos: fluxos com estado, automação visual ou acesso a diferentes provedores, por exemplo.

Nomes como LangChain, LangGraph, n8n, Langflow, LiteLLM e Semantic Kernel aparecem nesse ecossistema, mas não representam todos a mesma camada. Antes de escolher, descreva a capacidade necessária: “preciso retomar uma execução interrompida” é uma justificativa verificável; “a ferramenta está em alta” não descreve uma necessidade do projeto.

O **Model Context Protocol (MCP)** padroniza a conexão de aplicações de IA com ferramentas e fontes de dados. A analogia é uma tomada: uma interface comum reduz adaptações entre componentes compatíveis. O protocolo não substitui suas decisões de autorização, confiança e qualidade. A [introdução oficial do MCP](https://modelcontextprotocol.io/docs/getting-started/intro) explica seus componentes e usos.

Para aprender, implemente primeiro uma ferramenta simples que você consiga inspecionar. Depois avalie se expô-la por MCP ou usar uma estrutura de orquestração resolve um problema real de integração.

## Repetição sem efeito duplicado

**Retry** é repetir uma operação após uma falha. Ele precisa de limite e intervalo adequado. **Idempotência** significa que repetir a mesma operação lógica não cria efeitos adicionais indesejados. Uma chave de evento ou de operação pode ajudar a reconhecer que o trabalho já aconteceu.

No nosso exemplo, o CRM pode registrar o interesse e a resposta da API se perder. Se o agente repetir sem controle, surgem dois registros. Guarde a identidade da operação e confira o resultado antes de criar outro registro. Uma fila pode separar recebimento e processamento, mas também exige cuidado com entregas repetidas.

## Laboratório · 80% prática

Reserve **4 horas por semana**, aproveitando o trabalho de contexto da aula anterior.

**Semana 7 — uma ferramenta de leitura:**

1. Descreva `consultar_planos` com entradas, saídas e erros esperados.
2. Dê ao agente uma tarefa delimitada: esclarecer a dúvida sobre um plano e pedir a informação que faltar.
3. Registre cada solicitação de ferramenta e seu resultado. Defina limite de passos e comportamento de encerramento.
4. Teste pergunta simples, ambiguidade, ausência de fonte e ferramenta indisponível.

**Semana 8 — ação em ambiente de teste:**

1. Adicione `registrar_interesse` para um CRM simulado ou uma tabela de teste.
2. Valide argumentos e acesso. Exija revisão humana para a ação que você classificou como sensível no seu processo.
3. Simule uma resposta perdida depois do registro e repita a operação com a mesma chave. Confirme que o efeito não foi duplicado.
4. Provoque uma falha persistente e observe se o agente para e encaminha o caso.
5. Compare um fluxo fixo com uma decisão flexível do agente. Mantenha a flexibilidade apenas onde o teste mostrar utilidade.

**Você concluiu quando:** demonstra leitura, ação autorizada, parada e tratamento de duplicatas, explicando onde cada controle é aplicado.

## Estudo guiado · 20% teoria

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Diferença entre fluxo e agente; comece pelos padrões simples. | Justificar onde o modelo decide o próximo passo. |
| [Hugging Face — Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction) | Conceito de ferramenta e ciclo do agente. | Comparar o ciclo do exercício com o seu. |
| [Claude Platform Docs](https://platform.claude.com/docs/en/intro) ou [Gemini API](https://ai.google.dev/gemini-api/docs) | Ferramentas na API efetivamente escolhida. | Conferir o contrato da solicitação e da resposta. |
| [MCP — introdução oficial](https://modelcontextprotocol.io/docs/getting-started/intro) | Componentes e conexão com ferramentas. | Desenhar onde entraria no seu sistema, se necessário. |

Em **AI Engineering**, de Chip Huyen, procure os tópicos de agentes e desenho de aplicação; os [materiais de apoio](https://github.com/chiphuyen/aie-book) ajudam a encontrar a seção relevante. Use **1 hora por semana** de estudo para orientar uma decisão do laboratório.

[Próxima aula: avaliação e confiabilidade →](06-avaliacao-e-confiabilidade.md)

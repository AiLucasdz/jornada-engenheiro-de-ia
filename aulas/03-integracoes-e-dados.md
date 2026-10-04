# 03 · Entenda por onde a informação passa

[← Consulta anterior](02-modelos-e-aprendizado.md) · [Aulas](README.md) · [Próxima consulta →](04-contexto-e-rag.md)

**Use na entrega 3: conectar uma ação ao agente.**

**Ao terminar:** você conseguirá acompanhar uma informação desde a entrada até o resultado, usando uma ferramenta pronta e um arquivo ou uma tabela de teste.

Uma **integração** conecta o agente a outro recurso: um arquivo, uma planilha ou um sistema. Quando já existe uma ferramenta pronta para isso, comece por ela. O objetivo é entender o que entra, o que ela pode fazer e como você confere o resultado.

![Caminho da mensagem recebida até a validação, o processamento e o registro, com resultado e histórico consultáveis.](../mapas-e-desenhos/03-integracoes.svg)

Acompanhe uma mensagem pelo desenho: cada etapa precisa receber a informação certa e deixar um resultado que você consiga conferir.

## Três coisas para conferir

**Entrada:** quais dados a ferramenta precisa? Para registrar um pedido, talvez bastem identificador, mensagem e situação. Defina o que acontece se faltar algum campo.

**Permissão:** o agente pode apenas ler ou também alterar? Comece com um recurso de teste e conceda somente o acesso necessário à tarefa.

**Resultado:** a ação realmente aconteceu? Abra o arquivo ou a tabela para conferir. A frase “pronto, registrei” não substitui a verificação.

## Faça no seu agente · 80% prática

1. Escolha uma ferramenta que seu agente já oferece, como ler ou atualizar um arquivo permitido.
2. Crie um arquivo ou tabela de teste com poucos dados fictícios. Use-o para registrar o resultado da tarefa.
3. Envie um caso completo e outro com informação faltando. Confira como o agente se comporta e o que ficou registrado.
4. Repita o primeiro pedido. Observe se criou uma duplicata e registre o ajuste necessário.

**Pode seguir quando:** você mostra a entrada, a ação e o resultado salvo. Uma conexão própria por código só entra quando uma ferramenta existente não atende ao que você precisa.

## Estude para destravar · 20% teoria

Consulte a documentação da ferramenta que escolheu. Se estiver usando o Hermes, comece pela [documentação oficial](https://hermes-agent.nousresearch.com/docs/). Se precisar criar uma conexão, a [introdução a HTTP da MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) explica como programas trocam pedidos e respostas.

<details>
<summary>Para aprofundar: APIs, bancos de dados e atualização automática</summary>

## API, HTTP e JSON

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


## Autenticação, webhook e respostas de erro

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


## SQL, estado e histórico

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


## ETL e pipeline: o dado também precisa de manutenção

**ETL** significa extrair, transformar e carregar. Um **pipeline de dados** é uma sequência organizada dessas tarefas, que pode ser executada novamente. Para os leads, pode padronizar datas e campos antes de salvar. Para a base de consulta do agente, pode ler documentos, extrair texto, dividir em trechos e atualizar o índice — a estrutura usada para encontrar conteúdo depois.

A atualização precisa cobrir inclusão, alteração e exclusão. Se o preço antigo continuar no índice, o modelo pode responder com a fonte errada mesmo que sua instrução esteja correta. Guarde origem, versão e momento de atualização para descobrir qual dado foi usado.


## Mais fontes para consultar


| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [MDN — HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) | Estrutura de requisições e respostas. | Explicar a chamada real da sua integração. |
| [PostgreSQL — tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Tabelas, consultas e relações. | Persistir eventos e consultar um histórico. |
| [Google — Gemini API](https://ai.google.dev/gemini-api/docs) ou [Anthropic — documentação](https://platform.claude.com/docs/en/intro) | Início rápido e contrato da API que você escolheu. | Validar uma chamada mínima antes de automatizar. |
| [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) | Um módulo de dados ou integração correspondente à sua lacuna. | Melhorar o desenho do estado ou a consulta. |

Consulte também **AI Engineering**, de Chip Huyen, para relacionar dados e arquitetura de aplicação. O [repositório da autora](https://github.com/chiphuyen/aie-book) reúne materiais de apoio. Registre dúvidas reproduzíveis seguindo o [guia de pesquisa](../comece-aqui/como-pesquisar.md).

</details>

[Conectar uma ação com limites →](05-agentes-e-ferramentas.md)

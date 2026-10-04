# 03 · Faça a informação percorrer o sistema

[← Aula anterior](02-modelos-e-aprendizado.md) · [Aulas](README.md) · [Próxima aula →](04-contexto-e-rag.md)

**Quando usar:** semanas 5–6. **Entrega:** uma entrada validada, um histórico persistido e uma consulta que reconstrói o que aconteceu.

O modelo pode interpretar a mensagem de um lead, mas alguém precisa receber o evento, identificar a pessoa, guardar o estado e registrar o resultado. Esses fundamentos de software e dados sustentam o agente que você começou nas primeiras semanas.

## API, HTTP e JSON

Uma **API** é uma interface para um programa usar recursos de outro. Uma API HTTP recebe requisições em endereços chamados endpoints e devolve respostas. Muitas APIs seguem convenções REST, embora HTTP e REST não sejam sinônimos. Pense em um balcão: há pedidos aceitos, informações obrigatórias e respostas possíveis.

Uma requisição costuma reunir método, endereço, cabeçalhos e, quando necessário, corpo. `GET` normalmente consulta um recurso; `POST` envia dados para processamento ou criação. **JSON** é um formato comum para representar os dados, com objetos, listas, textos, números e outros valores.

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

**Autenticação** identifica quem fez a chamada; **autorização** determina o que essa identidade pode fazer. Chaves de API são credenciais: mantenha-as fora do repositório e dos exemplos públicos. Use variáveis de ambiente ou o mecanismo de segredos do ambiente escolhido.

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

**SQL** permite consultar e modificar dados em bancos relacionais. Tabelas representam entidades e eventos; chaves identificam registros; relações conectam esses registros. Um banco operacional serve ao uso diário do produto: receber um lead e atualizar seu encaminhamento, por exemplo.

O **estado** responde “como está agora?”; o **histórico de eventos** responde “como chegou aqui?”. Guardar apenas o status final dificulta investigar falhas. Uma estrutura inicial pode ter uma tabela de leads e outra de eventos, ligada pelo identificador do lead.

Se você criar uma tabela `eventos` com `lead_id`, `tipo`, `status` e `ocorrido_em`, esta consulta didática exibe a sequência de um lead fictício:

```sql
SELECT tipo, status, ocorrido_em
FROM eventos
WHERE lead_id = 'lead_demo_007'
ORDER BY ocorrido_em;
```

Ao usar valores vindos de usuários em código, prefira consultas parametrizadas. Não monte SQL concatenando o texto recebido.

Um **data warehouse**, como BigQuery ou Snowflake, atende principalmente a consultas analíticas e integração de históricos. A analogia é o caixa da loja versus o setor que compara vendas de vários anos. Essa distinção ajuda a escolher a arquitetura; seu primeiro protótipo não precisa de um warehouse só por usar IA.

## ETL e pipeline: o dado também precisa de manutenção

**ETL** significa extrair, transformar e carregar. Um pipeline organiza essas etapas para execução repetível. Para os leads, pode normalizar datas e campos antes de salvar. Para a base de consulta do agente, pode ler documentos, extrair texto, dividir em trechos e atualizar o índice.

A atualização precisa cobrir inclusão, alteração e exclusão. Se o preço antigo continuar no índice, o modelo pode responder com a fonte errada mesmo que sua instrução esteja correta. Guarde origem, versão e momento de atualização para descobrir qual dado foi usado.

## Laboratório · 80% prática

Use **4 horas por semana** para fazer o mesmo agente ganhar uma entrada confiável e memória operacional.

**Semana 5 — entrada e contrato:** construa um formulário ou endpoint que receba o evento; valide o payload; simule uma credencial inválida, um campo ausente e uma API indisponível. Guarde o identificador da execução e uma descrição útil do erro, sem expor credenciais.

**Semana 6 — estado e consulta:** persista lead, evento e decisão; implemente a consulta do histórico; envie o mesmo `evento_id` duas vezes e observe se criou duplicatas. Defina a restrição ou o controle que evitará repetir o processamento. Atualize um documento de teste e registre sua versão para o laboratório de RAG da próxima aula.

Use uma IA de código para construir em etapas: primeiro o contrato de entrada, depois a validação, depois a persistência. Peça que explique onde cada erro é tratado. Execute os casos de falha antes de juntar as etapas.

**Você concluiu quando:** segue uma mensagem desde a entrada até o registro final, recupera o histórico após reiniciar o programa e distingue falha de autenticação, dado inválido e indisponibilidade.

## Estudo guiado · 20% teoria

Reserve **1 hora por semana** para a dúvida que bloqueia a entrega.

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [MDN — HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview) | Estrutura de requisições e respostas. | Explicar a chamada real da sua integração. |
| [PostgreSQL — tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Tabelas, consultas e relações. | Persistir eventos e consultar um histórico. |
| [Google — Gemini API](https://ai.google.dev/gemini-api/docs) ou [Anthropic — documentação](https://platform.claude.com/docs/en/intro) | Início rápido e contrato da API que você escolheu. | Validar uma chamada mínima antes de automatizar. |
| [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) | Um módulo de dados ou integração correspondente à sua lacuna. | Melhorar o desenho do estado ou a consulta. |

Consulte também **AI Engineering**, de Chip Huyen, para relacionar dados e arquitetura de aplicação. O [repositório da autora](https://github.com/chiphuyen/aie-book) reúne materiais de apoio. Registre dúvidas reproduzíveis seguindo o [guia de pesquisa](../docs/como-pesquisar.md).

[Próxima aula: contexto e RAG →](04-contexto-e-rag.md)

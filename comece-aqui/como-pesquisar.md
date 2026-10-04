# Como pesquisar: da dúvida ao experimento

[← Guias](README.md) · [Fontes oficiais](fontes-e-comunidade.md) · [X e Discord](comunidades.md)

Pesquise a pergunta que está impedindo a próxima entrega. Quanto mais concreto o contexto, mais fácil encontrar uma resposta útil.

## Um roteiro de pesquisa

1. **Escreva a dúvida:** “como impedir que o mesmo evento crie dois registros?” é mais útil que “como fazer agentes”.
2. **Abra a documentação da ferramenta:** procure a funcionalidade e a versão em uso.
3. **Busque um exemplo oficial:** leia requisitos, entradas e resultados esperados.
4. **Amplie no Google:** use o nome da ferramenta, o erro exato entre aspas e termos em português ou inglês.
5. **Confira a origem:** autor, data, versão, código e limites do exemplo.
6. **Faça o menor teste:** registre se a hipótese se confirmou no seu projeto.

## Buscas prontas para o Google

Copie a consulta e adapte o último termo ao seu problema. Estas são estratégias de busca, não recomendações dos resultados que o Google poderá apresentar.

| Quero pesquisar | Consulta |
| --- | --- |
| Exemplos da OpenAI | `site:developers.openai.com/cookbook tool calling` |
| Avaliação de agentes | `site:developers.openai.com evals agents` |
| Desenho de agentes na Anthropic | `site:anthropic.com/engineering agents evaluation` |
| Ferramentas na API Claude | `site:platform.claude.com/docs tool use` |
| Integrações com Gemini | `site:ai.google.dev/gemini-api/docs function calling` |
| Conteúdo da Microsoft em português | `site:learn.microsoft.com/pt-br inteligência artificial generativa` |
| Exercícios do GitHub | `site:github.com/skills introduction` |
| Exemplos de agentes da Microsoft | `site:github.com/microsoft agents beginners` |
| Entender um fundamento | `HTTP webhook idempotência exemplo` ou `webhook idempotency example` |
| Investigar um erro | `"mensagem exata do erro" nome-da-ferramenta versão` |

[**Abrir o Google**](https://www.google.com/) · [**Buscar publicações no Google Scholar**](https://scholar.google.com/)

## Como avaliar um resultado

| Verificação | Pergunta |
| --- | --- |
| Origem | É documentação oficial, autor do projeto ou um relato com evidências? |
| Atualidade | O código usa a mesma API, versão e ambiente que o meu? |
| Reprodução | Consigo executar um exemplo pequeno e comparar a saída? |
| Escopo | O autor explica em quais condições funciona e onde falha? |
| Resultado | A proposta melhora meus casos de avaliação ou só parece convincente? |

Em repositórios, leia README, exemplos, histórico recente e issues ligadas ao problema. Em artigos, procure a publicação original. Um post ou resposta de IA pode sugerir termos de pesquisa; confirme a orientação na fonte e no teste.

## Registre o que a pesquisa mudou

No [registro de experimento](../pratique/experimento.md), anote o link, a data de consulta, a hipótese e o resultado. Se a busca não destravar o problema, leve o menor exemplo reproduzível à [comunidade](comunidades.md).

→ [Voltar à próxima entrega](trilha-pratica.md)

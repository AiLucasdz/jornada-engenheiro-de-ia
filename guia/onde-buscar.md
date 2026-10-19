# 6 · Onde buscar: vá direto à fonte certa

[← Ecossistema](ecossistema.md) · [Guia principal](../README.md) · Próximo: [Entrevista e mercado →](entrevista-e-mercado.md)

**A regra:** fonte primária primeiro. Isso significa documentação oficial, artigo original, repositório do projeto e post do autor. Tutorial, vídeo e resposta de IA servem para entender e descobrir termos de busca, mas a confirmação vem da fonte e do seu teste.

**Pronto quando:** diante de uma dúvida, você sabe em qual documentação ela está respondida e chega lá em poucos minutos.

## Fontes oficiais por empresa

| Empresa | Para usar a ferramenta | Para entender como pensam |
| --- | --- | --- |
| **Anthropic** | [Claude Docs](https://platform.claude.com/docs/en/intro) | [Engineering](https://www.anthropic.com/engineering), com agentes, evals e contexto. Para aprender a trabalhar com IA: [Anthropic Academy](https://www.anthropic.com/learn). |
| **OpenAI** | [OpenAI Developers](https://developers.openai.com/) e [Cookbook](https://developers.openai.com/cookbook) | [Guias de avaliação](https://developers.openai.com/api/docs/guides/evaluation-best-practices) e de [produção](https://developers.openai.com/api/docs/guides/production-best-practices) |
| **Google** | [Gemini API](https://ai.google.dev/gemini-api/docs) | [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course?hl=pt-br) |
| **Microsoft** | [Microsoft Learn em português](https://learn.microsoft.com/pt-br/training/) | [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) e [AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) |
| **Hugging Face** | [Hub de modelos](https://huggingface.co/models) | [Cursos gratuitos](https://huggingface.co/learn), incluindo o de agentes |
| **Protocolos** | [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) | Especificação e servidores de referência no GitHub |
| **Agentes abertos** | [Hermes Agent](https://hermes-agent.nousresearch.com/docs/) e [OpenClaw](https://github.com/openclaw/openclaw) | Issues e discussões dos repositórios |

## Artigos e pesquisa

- **[arXiv](https://arxiv.org/)**: onde os artigos aparecem primeiro. Leia o resumo, a introdução, a figura principal e as conclusões.
- **[Hugging Face Papers](https://huggingface.co/papers)**: os artigos do dia que a comunidade está discutindo.
- **[Google Scholar](https://scholar.google.com/)**: para achar o artigo original e quem o citou.
- **Blogs de engenharia** dos laboratórios: em geral, explicam o artigo com exemplos práticos.

## Roteiro de pesquisa

1. **Escreva a dúvida concreta.** "Como impedir que o mesmo evento crie dois registros?" é melhor que "como fazer agentes".
2. **Documentação oficial** da ferramenta, na versão que você usa.
3. **Exemplo oficial:** cookbook, quickstart, pasta `examples/` do repositório.
4. **Busca ampla** com o erro exato entre aspas, o nome da ferramenta e a versão.
5. **Confira a origem:** autor, data, versão e limites do exemplo.
6. **Faça o menor teste** e anote se a hipótese se confirmou.

## Buscas prontas

| Quero | Consulta |
| --- | --- |
| Tool use na Claude | `site:platform.claude.com/docs tool use` |
| Exemplos da OpenAI | `site:developers.openai.com/cookbook tool calling` |
| Function calling no Gemini | `site:ai.google.dev/gemini-api/docs function calling` |
| Como a Anthropic pensa agentes | `site:anthropic.com/engineering agents` |
| Um erro específico | `"mensagem exata do erro" nome-da-ferramenta versão` |
| Discussão em repositório | `site:github.com nome-do-projeto issue palavra-chave` |

## Como avaliar o que encontrou

| Pergunta | Por quê |
| --- | --- |
| É fonte oficial, autor do projeto ou relato com evidência? | Opinião sem evidência não serve de base. |
| Usa a mesma versão e API que eu? | Em IA, um exemplo de seis meses atrás pode estar errado. |
| Consigo reproduzir num exemplo pequeno? | Se não roda, não conta. |
| Diz em que condições funciona e onde falha? | Bons autores mostram os limites. |
| Melhora os meus casos de teste? | É o único critério final. |

## Pesquisar com IA

IA é ótima para explicar um conceito, sugerir termos de busca e ler documentação com você. Ela erra em novidades e em detalhes de versão. Dê contexto e peça a fonte:

```text
Estou construindo [o quê] com [ferramenta e versão].
Esperava [resultado], mas aconteceu [resultado, erro exato].
Já tentei [o quê].
Explique a causa provável e aponte o trecho da documentação oficial que confirma.
```

Use modos com busca ou pesquisa aprofundada para assuntos recentes e **abra os links citados** antes de agir. Se a pesquisa não destravar o problema, leve um exemplo reproduzível à [comunidade](comunidade.md).

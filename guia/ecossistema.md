# 5 · Ecossistema: quem é quem e em que camada

[← Comunidade](comunidade.md) · [Guia principal](../README.md) · Próximo: [Onde buscar →](onde-buscar.md)

**A ideia central:** as ferramentas mudam todo mês, mas as camadas não. Saiba situar qualquer nome novo numa camada e você nunca mais se perde. Quando uma vaga lista ferramentas de camadas diferentes como se fossem equivalentes, perceber isso já é sinal de senioridade.

**Pronto quando:** diante de um nome que nunca viu, você descobre em minutos em que camada ele atua, o que substitui e se resolve um problema que você tem.

## As camadas

| Camada | O que resolve | Nomes que você vai ouvir |
| --- | --- | --- |
| **Modelos de fronteira** | A capacidade bruta, acessada por API. | OpenAI (GPT), Anthropic (Claude), Google (Gemini), xAI (Grok) |
| **Modelos de pesos abertos** | Rodar no seu ambiente, adaptar e controlar custo e dados. | Meta (Llama), DeepSeek, Alibaba (Qwen), Mistral, Nous Research (Hermes) |
| **Acesso e execução** | Falar com vários modelos por uma interface só, ou rodar modelos localmente. | OpenRouter, LiteLLM, Hugging Face, Ollama, llama.cpp, vLLM |
| **Agentes prontos** | Um agente funcionando, com ferramentas, memória e canais, que você configura em vez de programar. | Hermes Agent, OpenClaw |
| **Agentes de código** | Agentes que leem, escrevem e executam código no seu projeto. | Claude Code, OpenAI Codex, Gemini CLI, Cursor |
| **Frameworks de agentes** | Montar o seu próprio agente ou fluxo em código. | LangChain/LangGraph, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework (sucessor do Semantic Kernel e do AutoGen), CrewAI, Pydantic AI |
| **Automação visual** | Fluxos com nós de IA, sem muito código. | n8n, Langflow, Make, Zapier |
| **Protocolos** | Padrões de conexão entre modelos, ferramentas e agentes. | MCP (modelo ↔ ferramentas e dados), A2A (agente ↔ agente) |
| **Dados e RAG** | Guardar documentos, vetores e registros. | Postgres + pgvector, Supabase, Pinecone, Qdrant, Weaviate, Chroma |
| **Avaliação e observabilidade** | Medir qualidade, rastrear execuções, custo e latência. | Langfuse, LangSmith, Braintrust, Arize Phoenix, promptfoo |
| **Infraestrutura** | Onde o sistema roda. | AWS Lambda, Cloudflare Workers, Vercel, Google Cloud Run, containers |
| **Segurança** | Riscos específicos de aplicações com LLM. | [OWASP Top 10 para LLM](https://genai.owasp.org/llm-top-10/), injeção de prompt, autonomia excessiva |

## Como escolher

- **Comece pelo que você já consegue operar.** Um agente pronto ou n8n resolvem a maioria dos primeiros projetos. Passe para código quando precisar de controle fino.
- **Framework é a parte que menos importa e a que mais muda.** Escolha pelo que o time consegue manter, não pela moda.
- **Banco vetorial dedicado raramente é necessário no começo.** pgvector no Postgres que já existe resolve a maioria dos casos.
- **Escolha o modelo pelo seu eval**, ou seja, pelo custo por tarefa resolvida, não por ranking geral. Use modelo menor onde a tarefa permite.
- **MCP padroniza a conexão.** Permissão, qualidade e custo continuam sendo problema seu.

## Como avaliar um nome novo em cinco minutos

1. **Em que camada ele está?** O que ele substitui no que você já usa?
2. **Quem mantém?** Empresa, comunidade ou uma pessoa só? Quando foi o último commit?
3. **Qual problema ele resolve que você tem hoje?** Se nenhum, anote e siga em frente.
4. **Existe exemplo oficial que roda em dez minutos?**
5. **O que a comunidade diz?** Leia as issues abertas, não só o README.

## Como acompanhar sem se afogar

| O quê | Onde |
| --- | --- |
| Lançamentos de modelos | Changelogs e notas de versão dos provedores ([OpenAI](https://developers.openai.com/), [Anthropic](https://platform.claude.com/docs/en/release-notes/overview), [Google](https://ai.google.dev/gemini-api/docs/changelog)) e os perfis oficiais no X |
| Comparar preço e desempenho | [Artificial Analysis](https://artificialanalysis.ai/) e [LMArena](https://lmarena.ai/). Use como ponto de partida, nunca como substituto do seu eval. |
| Modelos abertos e artigos do dia | [Hugging Face](https://huggingface.co/models) e [Hugging Face Papers](https://huggingface.co/papers) |
| Projetos em alta | [GitHub Trending](https://github.com/trending) |
| O que está sendo testado agora | [Comunidade](comunidade.md): X e Discords |

Uma vez por semana basta. Escolha **uma** novidade que toca o seu projeto e teste. O resto é ruído.

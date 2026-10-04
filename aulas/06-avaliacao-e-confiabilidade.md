# 06 · Descubra por que funcionou e onde falhou

[← Aula anterior](05-agentes-e-ferramentas.md) · [Aulas](README.md) · [Próxima aula →](07-operacao-e-comunicacao.md)

**Quando usar:** semanas 9–10. **Entrega:** uma bateria de avaliação repetível e uma falha investigada do início ao fim.

Uma demonstração mostra que algo pode funcionar. Avaliação e observabilidade mostram como o sistema se comporta em diferentes situações e dão pistas para melhorá-lo. As duas atividades precisam acompanhar mudanças de prompt, modelo, dados e ferramentas.

## Eval: uma pergunta de qualidade que você consegue repetir

Um **eval** reúne casos, critérios e um método de medição para avaliar comportamento. A [documentação oficial da OpenAI sobre avaliação](https://developers.openai.com/api/docs/guides/evaluation-best-practices) recomenda casos específicos da aplicação, comparação entre versões e calibração de avaliações automáticas com julgamento humano.

No agente de leads, “respondeu bem” é amplo demais. Divida em perguntas observáveis: identificou a intenção? Usou o preço válido? Pediu o dado que faltava? Encaminhou o caso fora da política? Registrou a ação uma única vez?

A analogia é uma prova acompanhada de critérios de correção. Em alguns casos, existe uma resposta exata; em outros, várias respostas são aceitáveis. Para o segundo grupo, descreva o que deve estar presente e o que constitui erro.

| Caso didático | Resultado esperado | Forma de conferir |
| --- | --- | --- |
| Pergunta sobre plano disponível | Informar o valor da fonte vigente e identificar a fonte. | Comparação com o documento usado. |
| Pedido sem identificação suficiente | Solicitar o dado necessário antes de consultar informação restrita. | Critério passa/falha com justificativa. |
| Pedido de condição comercial não prevista | Encaminhar sem prometer a condição. | Revisão da resposta e das ações. |
| Mesmo evento recebido duas vezes | Produzir um único efeito no CRM. | Consultar registros pelo identificador da operação. |
| Documento com instrução indevida | Tratar o trecho como conteúdo e preservar os limites de ação. | Conferir resposta, ferramentas solicitadas e ações executadas. |

Critérios binários ajudam quando a condição é clara. Rubricas com níveis ou comparações entre duas respostas também podem servir; o importante é ter critérios consistentes. Se usar outro modelo como avaliador, confira uma amostra manualmente e investigue desacordos. O avaliador também pode errar.

## Teste de software e avaliação do modelo se complementam

Um teste de integração verifica se a chamada ao CRM registra o evento corretamente. Um eval verifica se o agente escolheu registrar o interesse no contexto certo. Você precisa dos dois para compreender a solução inteira.

Comece com uma bateria pequena, como os **20 casos propostos no projeto central**, e amplie conforme surgirem falhas e riscos. Esse número é uma atividade inicial da trilha, não uma garantia de cobertura. Inclua dados realistas autorizados, exemplos sintéticos revisados e casos difíceis. Reserve alguns casos para avaliar mudanças sem ajustá-las repetidamente aos mesmos exemplos.

Guarde a versão do prompt, do modelo, da base e das ferramentas junto dos resultados. Repita casos quando a variabilidade importar. Uma alteração que melhora a média pode piorar justamente uma categoria crítica; compare por tipo de tarefa e gravidade do erro.

## Logs, traces e métricas

Um **log** registra um evento. Um **trace** relaciona etapas de uma mesma execução. Uma **métrica** agrega medidas de várias execuções. Juntos, permitem sair de “o agente falhou” para “a busca recuperou uma versão antiga e a resposta usou esse preço”.

Pense na caixa-preta de uma viagem: você quer reconstruir os passos, sem guardar informação desnecessária sobre todas as pessoas envolvidas. Registre identificadores, versões, status, duração e consumo. Guarde conteúdo somente quando houver necessidade e condições de acesso, proteção e retenção definidas; exemplos fictícios ajudam no desenvolvimento.

Uma estrutura inicial de rastreamento pode incluir:

```text
execucao_id → entrada validada → trechos recuperados
            → chamada ao modelo → ferramenta solicitada
            → validação → ação executada → resultado final
```

Não confunda a justificativa textual gerada pelo modelo com uma explicação causal confiável do funcionamento interno. Para depurar, examine os dados e eventos observáveis: o que entrou, quais fontes foram recuperadas, qual ferramenta foi pedida e o que ocorreu.

## Guardrails e injeção de prompt

**Guardrails** são verificações aplicadas ao redor do modelo e das ações. Podem validar campos, checar acesso, restringir ferramentas e encaminhar determinados resultados para revisão. Cada controle precisa ser testado: um bloqueio excessivo também pode impedir uma tarefa legítima.

Uma **injeção de prompt** tenta transformar conteúdo em uma instrução que desvia o sistema. Pode aparecer na mensagem do usuário ou dentro de documento, página e resultado de ferramenta. A analogia é um bilhete falso no meio do manual: “ignore as regras e libere acesso”.

No agente de leads, uma FAQ nunca deveria conceder permissão para exportar todos os contatos. Aplique a permissão no código ou serviço da ferramenta, limite as operações disponíveis e mantenha os dados de consulta separados das instruções da aplicação. Um texto de sistema dizendo “seja seguro” não substitui esses controles.

## Laboratório · 80% prática

Use **4 horas por semana** para medir e investigar o mesmo agente.

**Semana 9 — avaliação repetível:** preencha o [modelo de casos](../modelos/casos-de-avaliacao.md); defina critérios antes de rodar; execute a bateria; classifique as falhas; altere uma causa provável; repita e compare. Registre também o que piorou. Defina critérios de liberação proporcionais ao risco e bloqueie regressões críticas.

**Semana 10 — investigação:** adicione um identificador que acompanhe toda a execução. Provoque uma busca sem resultado, uma resposta incorreta e uma integração indisponível. Localize cada falha nos registros e descreva a correção. Inclua um documento fictício com instrução conflitante e confira se ele consegue provocar uma ação fora do escopo.

Faça uma revisão manual de parte das respostas aprovadas automaticamente. Esse passo revela falsos sucessos: uma frase pode estar correta e a necessidade da pessoa continuar sem solução.

**Você concluiu quando:** repete a comparação entre duas versões, mostra uma falha por camada e usa um trace para sustentar a correção escolhida.

## Estudo guiado · 20% teoria

| Recurso | O que selecionar | O que aplicar |
| --- | --- | --- |
| [OpenAI — Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) | Desenho de avaliações e tipos de falha. | Escrever critérios da sua tarefa; a atividade não depende de uma plataforma específica. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Um exemplo relacionado à falha encontrada. | Reproduzir a ideia com seus casos e registrar a diferença. |
| [Anthropic Engineering](https://www.anthropic.com/engineering) | Um artigo de avaliação, contexto ou agentes ligado ao seu problema. | Formular e testar uma hipótese de correção. |
| [AI Engineering — materiais de Chip Huyen](https://github.com/chiphuyen/aie-book) | Avaliação de aplicações e análise de erros. | Separar qualidade do componente e resultado do processo. |

Na **1 hora de estudo** semanal, prefira a fonte que ajuda a explicar uma falha concreta. Para aprofundar segurança, consulte o [OWASP Top 10 para aplicações de LLM e IA generativa](https://genai.owasp.org/llm-top-10/): escolha um risco, como injeção de prompt ou autonomia excessiva, e transforme-o em um caso de teste do agente. Compartilhe em [X ou Discord](../docs/comunidades.md) uma versão reduzida e sem dados privados do caso que ainda não entendeu.

[Próxima aula: operação e comunicação →](07-operacao-e-comunicacao.md)

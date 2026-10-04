# 04 · Dê ao agente a fonte certa

[← Aula anterior](03-integracoes-e-dados.md) · [Aulas](README.md) · [Próxima aula →](05-agentes-e-ferramentas.md)

**Quando usar:** semanas 6–7, junto das entregas de dados e do primeiro agente. **Entrega:** uma resposta apoiada em fonte identificável, com atualização e ausência de informação testadas.

O seu agente de leads precisa consultar regras, planos ou perguntas frequentes. A tarefa de engenharia é selecionar informação autorizada e relevante, colocá-la no contexto e conferir se a resposta se sustenta nela.

## Prompt, recuperação e fine-tuning

Há três decisões diferentes que frequentemente aparecem sob a expressão “dar conhecimento à IA”.

| Abordagem | O que acontece | Quando experimentar | O que manter |
| --- | --- | --- | --- |
| Conteúdo direto no prompt | A aplicação envia as informações junto da pergunta. | A base é pequena e cabe no contexto sem desperdício relevante. | Instrução, versão da informação e limites de contexto. |
| RAG | A aplicação recupera conteúdo de uma fonte e o inclui na chamada ao modelo. | Há documentos ou registros que precisam ser selecionados conforme a pergunta. | Busca, atualização, permissões, relevância e avaliação. |
| Fine-tuning | Um processo adicional de treinamento modifica parâmetros do modelo. | Há um comportamento ou desempenho recorrente a melhorar, dados adequados e evidência de que o ajuste compensa. | Conjunto de treinamento, avaliação separada, custos e versões. |

Fine-tuning pode afetar conhecimentos e capacidades, mas não funciona como um banco de dados que você edita para publicar preços. Para fatos que mudam, uma fonte consultável costuma facilitar atualização e verificação. RAG e fine-tuning também podem coexistir; a escolha depende do problema observado.

No nosso agente, comece com uma pequena tabela fictícia de planos no contexto. Adicione recuperação quando selecionar a fonte passar a ser uma necessidade real. Antes de sofisticar a busca, crie perguntas com respostas esperadas.

## Embeddings: um mapa aproximado

Um **embedding** representa um item como um vetor de números. Modelos de embedding podem colocar textos relacionados em regiões próximas desse espaço. “Quero encerrar meu plano” pode ser recuperado ao buscar “cancelamento”, mesmo sem igualdade literal das palavras.

Pense em um mapa de assuntos: proximidade ajuda a encontrar candidatos, mas não prova que o conteúdo responde à pergunta. Nomes, números, códigos e negativas podem exigir busca lexical, filtros ou outras estratégias. RAG não exige busca vetorial: SQL, texto completo, busca híbrida e APIs também podem recuperar informação.

Um **banco vetorial** armazena vetores e permite consultas por similaridade, geralmente junto de metadados. Uma extensão como pgvector pode adicionar esse recurso a PostgreSQL; serviços dedicados são outras opções. Escolha por volume, filtros, qualidade e capacidade de manutenção, depois de medir seu caso.

## Chunking: recortar sem perder o significado

**Chunking** é dividir documentos em unidades de recuperação. Se cada trecho for enorme, você traz conteúdo irrelevante. Se for pequeno demais, perde o contexto. É como recortar um manual em fichas: a ficha “R$ 200” não diz a qual plano pertence nem em que condições o preço vale.

Comece respeitando títulos, seções ou pares de pergunta e resposta. Guarde junto do texto a fonte, o identificador, a versão e os metadados de acesso. Em tabelas, preserve a relação entre rótulos e valores. Compare estratégias com as perguntas reais do projeto: não há um tamanho universal que maximize qualidade.

## RAG tem dois caminhos

**Indexação:** ler a fonte → extrair e limpar → dividir em trechos → gerar representações, se usadas → salvar trechos e metadados. Quando a fonte muda, o pipeline precisa atualizar ou remover o que ficou obsoleto.

**Consulta:** receber a pergunta → aplicar permissões e filtros → recuperar candidatos → selecionar conteúdo útil → montar o contexto → gerar resposta → verificar e apresentar a fonte.

A analogia é uma consulta a um manual durante o trabalho. A pessoa ainda pode interpretar errado, e alguém pode ter entregue a página errada. O acesso ao manual ajuda, mas não substitui o controle do processo.

No agente de leads, uma resposta sobre plano deve apontar o documento e a versão usados. Se o preço mudou, teste o tempo entre alterar a fonte e o novo valor ficar disponível. RAG não atualiza sozinho nem garante atualização instantânea: isso depende do pipeline, dos índices e de eventuais caches.

## Diagnóstico em três camadas

| Camada | O que conferir no agente | Possível correção |
| --- | --- | --- |
| Recuperação | O trecho necessário foi encontrado? Era atual e autorizado? | Corrigir fonte, extração, divisão, filtros ou estratégia de busca. |
| Geração | A resposta está apoiada nos trechos enviados? | Melhorar instruções, seleção de contexto, modelo ou verificação. |
| Resultado | A pessoa conseguiu avançar no processo? | Corrigir integração, clareza da resposta ou encaminhamento humano. |

Se o agente acertou o preço, mas não registrou o pedido de contato, a informação estava correta e o processo ficou incompleto. Essa distinção evita corrigir a parte errada do sistema.

## Laboratório · 80% prática

Use uma parte das **4 horas de prática das semanas 6 e 7**. Este exercício substitui uma parte das tarefas de dados e do primeiro agente; não é uma carga extra.

1. Crie três documentos curtos e fictícios: planos, regras de atendimento e perguntas frequentes. Inclua título, versão e data de atualização.
2. Prepare oito perguntas: diretas, com sinônimos, ambíguas e sem resposta na base. Registre o trecho que deveria sustentar cada resposta.
3. Teste primeiro a base inteira no contexto. Guarde resposta e consumo, quando disponíveis.
4. Implemente uma recuperação simples. Registre quais trechos foram encontrados **antes** de avaliar a resposta.
5. Compare dois recortes de documentos mantendo as perguntas iguais. Observe perda de contexto e trechos irrelevantes.
6. Altere um plano e retire uma informação da base. Execute o pipeline e repita as perguntas para confirmar atualização e remoção.
7. Provoque ausência de fonte e confira se o agente encaminha a dúvida em vez de inventar uma regra comercial.

**Você concluiu quando:** mostra de onde veio uma resposta, localiza uma falha por camada e demonstra que uma informação removida deixa de aparecer nas consultas.

## Estudo guiado · 20% teoria

| Recurso | O que estudar | O que aplicar |
| --- | --- | --- |
| [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Selecione a lição sobre RAG ou busca. | Reproduzir o fluxo com seus três documentos. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Procure um exemplo de recuperação ou embeddings adequado à ferramenta escolhida. | Alterar apenas o recorte ou a busca e comparar resultados. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Consulte os tópicos de RAG, dados e adaptação de modelos. | Justificar sua escolha entre contexto direto, recuperação e ajuste do modelo. |

Os capítulos de atenção e embeddings da [série de 3Blue1Brown](https://www.3blue1brown.com/?topic=neural-networks) ajudam a visualizar as representações. Uma hora de estudo deve terminar com uma hipótese de melhoria, como “preservar o título do plano em cada trecho reduz respostas com preço trocado”.

[Próxima aula: agentes e ferramentas →](05-agentes-e-ferramentas.md)

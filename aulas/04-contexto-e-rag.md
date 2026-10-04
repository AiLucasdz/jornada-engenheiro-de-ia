# 04 · Dê ao agente a fonte certa

[← Consulta anterior](03-integracoes-e-dados.md) · [Aulas](README.md) · [Próxima consulta →](05-agentes-e-ferramentas.md)

**Use na entrega 2: dar contexto e fontes ao agente.**

**Ao terminar:** o agente terá um material de consulta e você conseguirá conferir de onde veio a resposta.

Comece com um documento curto: regras do processo, planos oferecidos ou perguntas frequentes. Forneça esse material ao agente e peça que mostre qual trecho usou. Se a resposta não estiver no documento, ele deve dizer o que falta ou encaminhar a dúvida.

Quando o sistema busca trechos relevantes antes de responder, esse caminho é chamado **RAG**: geração de resposta apoiada em informação recuperada de uma fonte. Para começar, você pode usar um arquivo pequeno e a ferramenta de leitura que já existe no agente.

![RAG em dois caminhos: preparar e atualizar documentos para busca; depois recuperar trechos a partir de uma pergunta e gerar a resposta com fonte.](../mapas-e-desenhos/04-contexto-e-rag.svg)

O desenho separa cuidar da fonte e consultá-la; uma resposta só pode acompanhar uma mudança se o sistema tiver acesso à informação atualizada.

## Faça no seu agente · 80% prática

1. Prepare um documento curto e fictício com as informações necessárias à tarefa. Coloque título e data de atualização.
2. Faça três perguntas: uma respondida pelo documento, uma incompleta e uma sem resposta disponível.
3. Confira a resposta e o trecho usado. Se estiver errada, veja primeiro se o agente leu a informação correta.
4. Altere uma informação e repita a pergunta. Depois retire uma informação e confira se o agente reconhece a falta dela.

**Pode seguir quando:** você consegue apontar a fonte da resposta e demonstrar o que acontece quando a informação muda ou não existe.

## Estude para destravar · 20% teoria

Use a lição de busca ou RAG de [Generative AI for Beginners, da Microsoft](https://github.com/microsoft/generative-ai-for-beginners), se precisar entender melhor esse caminho. Só avance para dividir documentos, criar índices ou usar embeddings quando o tamanho ou a qualidade da busca justificar esse trabalho.

<details>
<summary>Para aprofundar: RAG, embeddings, divisão de documentos e fine-tuning</summary>

## Prompt, recuperação e fine-tuning

Enviar informação na pergunta, buscar documentos e treinar novamente o modelo são formas diferentes de melhorar uma aplicação. Compare o que muda em cada uma:

| Abordagem | O que acontece | Quando experimentar | O que manter |
| --- | --- | --- | --- |
| Conteúdo direto no prompt | A aplicação envia as informações junto da pergunta. | A base é pequena e cabe no contexto sem desperdício relevante. | Instrução, versão da informação e limites de contexto. |
| RAG | A aplicação recupera conteúdo de uma fonte e o inclui na chamada ao modelo. | Há documentos ou registros que precisam ser selecionados conforme a pergunta. | Busca, atualização, permissões, relevância e avaliação. |
| Fine-tuning | Um processo adicional de treinamento modifica parâmetros do modelo. | Há um comportamento ou desempenho recorrente a melhorar, dados adequados e evidência de que o ajuste compensa. | Conjunto de treinamento, avaliação separada, custos e versões. |

Fine-tuning pode afetar conhecimentos e capacidades, mas não funciona como um banco de dados que você edita para publicar preços. Para fatos que mudam, uma fonte consultável costuma facilitar atualização e verificação. RAG e fine-tuning também podem coexistir; a escolha depende do problema observado.

No nosso agente, comece com uma pequena tabela fictícia de planos no contexto. Adicione recuperação quando selecionar a fonte passar a ser uma necessidade real. Antes de sofisticar a busca, crie perguntas com respostas esperadas.


## Embeddings: um mapa aproximado

Um **embedding** representa um item como um vetor: uma lista de números. Essas listas permitem comparar textos por uma medida de proximidade. Modelos de embedding podem aproximar textos relacionados, como “quero encerrar meu plano” e “cancelamento”, mesmo sem palavras iguais.

Pense em um mapa de assuntos: proximidade ajuda a encontrar trechos candidatos, mas não prova que eles respondem à pergunta. Nomes, números, códigos e negativas podem exigir busca por palavras exatas ou filtros. RAG pode combinar essa busca com vetores, consultar um banco com SQL ou obter dados por uma API.

Um **banco vetorial** armazena vetores e permite buscar itens parecidos. Ele pode guardar também **metadados**: informações sobre cada item, como fonte, versão e quem pode acessá-lo. Uma extensão como pgvector adiciona esse recurso ao PostgreSQL; serviços dedicados são outras opções. Compare a qualidade da busca e o trabalho de manutenção com o volume de dados do seu projeto.


## Chunking: recortar sem perder o significado

**Chunking** é dividir documentos em unidades de recuperação. Se cada trecho for enorme, você traz conteúdo irrelevante. Se for pequeno demais, perde o contexto. É como recortar um manual em fichas: a ficha “R$ 200” não diz a qual plano pertence nem em que condições o preço vale.

Comece respeitando títulos, seções ou pares de pergunta e resposta. Guarde junto do texto a fonte, o identificador, a versão e os metadados de acesso. Em tabelas, preserve a relação entre rótulos e valores. Compare estratégias com as perguntas reais do projeto: não há um tamanho universal que maximize qualidade.


## RAG tem dois caminhos

**Indexação — preparar para buscar:** ler a fonte → extrair e limpar → dividir em trechos → gerar embeddings, se usados → salvar trechos e metadados. Quando a fonte muda, o pipeline precisa atualizar ou remover o que ficou obsoleto.

**Consulta — buscar para responder:** receber a pergunta → aplicar permissões e filtros → recuperar trechos candidatos → selecionar conteúdo útil → montar o contexto → gerar resposta → verificar e apresentar a fonte.

A analogia é uma consulta a um manual durante o trabalho. A pessoa ainda pode interpretar errado, e alguém pode ter entregue a página errada. O acesso ao manual ajuda, mas não substitui o controle do processo.

No agente de leads, uma resposta sobre plano deve apontar o documento e a versão usados. Se o preço mudou, teste o tempo entre alterar a fonte e o novo valor ficar disponível. RAG não atualiza sozinho nem garante atualização instantânea: isso depende do pipeline, dos índices e de eventuais caches.


## Diagnóstico em três camadas

| Camada | O que conferir no agente | Possível correção |
| --- | --- | --- |
| Recuperação | O trecho necessário foi encontrado? Era atual e autorizado? | Corrigir fonte, extração, divisão, filtros ou estratégia de busca. |
| Geração | A resposta está apoiada nos trechos enviados? | Melhorar instruções, seleção de contexto, modelo ou verificação. |
| Resultado | A pessoa conseguiu avançar no processo? | Corrigir integração, clareza da resposta ou encaminhamento humano. |

Se o agente acertou o preço, mas não registrou o pedido de contato, a informação estava correta e o processo ficou incompleto. Essa distinção evita corrigir a parte errada do sistema.


## Mais fontes para consultar

| Recurso | O que estudar | O que aplicar |
| --- | --- | --- |
| [Microsoft — Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | Selecione a lição sobre RAG ou busca. | Reproduzir o fluxo com seus três documentos. |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | Procure um exemplo de recuperação ou embeddings adequado à ferramenta escolhida. | Alterar apenas o recorte ou a busca e comparar resultados. |
| [AI Engineering — recursos de Chip Huyen](https://github.com/chiphuyen/aie-book) | Consulte os tópicos de RAG, dados e adaptação de modelos. | Justificar sua escolha entre contexto direto, recuperação e ajuste do modelo. |

Os capítulos de atenção e embeddings da [série de 3Blue1Brown](https://www.3blue1brown.com/?topic=neural-networks) ajudam a visualizar as representações. O estudo deve terminar com uma hipótese de melhoria, como “preservar o título do plano em cada trecho reduz respostas com preço trocado”.

</details>

[Conectar uma ação ao agente →](05-agentes-e-ferramentas.md)

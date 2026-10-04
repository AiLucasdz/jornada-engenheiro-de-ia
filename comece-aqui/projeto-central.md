# Seu agente, resolvendo uma tarefa de verdade

[← Comece aqui](README.md) · [Ver as quatro entregas](trilha-pratica.md) · [Anotar minha ideia](../pratique/ficha-do-projeto.md)

Escolha uma tarefa do seu dia a dia: pesquisar, responder dúvidas, organizar pedidos ou preparar um relatório. Você vai usar o mesmo agente para testar a ideia e melhorar o resultado.

**Já começou com o Hermes do vídeo ou com o projeto do curso?** Continue com essa base. As entregas mostram o que aprender a configurar, observar e verificar.

## Um exemplo para acompanhar

Imagine uma pessoa interessada em um serviço que pergunta sobre horários e opções. Ela é um **lead**: alguém que demonstrou interesse. Seu agente pode consultar um arquivo de perguntas frequentes, responder com a fonte e registrar o pedido em uma tabela de teste.

Em uma empresa, esse registro pode ficar em um **CRM**, sistema de acompanhamento de contatos e oportunidades. Para começar, use um arquivo ou uma tabela de teste que você consiga conferir.

**Objetivo do primeiro teste:** responder com informação do documento e avisar quando não encontrar a resposta.

## Como o projeto ganha capacidade

1. **Começar:** configurar o agente e executar um pedido simples.
2. **Dar contexto:** fornecer o documento, dizer quais fontes usar e conferir as respostas.
3. **Conectar uma ação:** salvar um resumo ou registrar um pedido em ambiente de teste, com limites definidos.
4. **Testar e mostrar:** experimentar cinco situações, corrigir uma falha e demonstrar o resultado.

![O agente recebe uma tarefa, consulta o modelo, valida uma ferramenta, observa o resultado e decide se continua ou encerra.](../mapas-e-desenhos/05-ciclo-do-agente.svg)

A ferramenta é o meio de consultar ou alterar algo. Confira o efeito da ação no arquivo ou na tabela; uma mensagem dizendo “feito” precisa corresponder ao resultado.

## Como saber se a primeira versão ajudou

- Você consegue demonstrar a tarefa do início ao fim.
- A resposta usa a fonte combinada e você consegue conferi-la.
- A ação deixa o resultado esperado no ambiente de teste.
- Você conhece uma falha e sabe quando pedir ajuda.
- Os testes e uma melhoria estão registrados.

Guarde isso nos [guias de prática](../pratique/README.md). Depois, peça a alguém que conheça a tarefa para experimentar e indicar o que precisa melhorar.

<details>
<summary>Para aprofundar: do exemplo ao piloto</summary>

Um piloto é um uso limitado para aprender com uma tarefa real. Defina quem participa, quais dados podem ser usados e como interromper o agente.

Compare com a situação inicial: a tarefa ficou mais rápida? A resposta ajudou? Houve erros? Acompanhe o custo indicado pelas ferramentas e amplie os testes conforme o uso crescer.

Se for conectar um CRM ou outro serviço, estude a parte necessária na [aula de integrações](../aulas/03-integracoes-e-dados.md). Se o problema for avaliar o resultado, consulte a [aula de testes](../aulas/06-avaliacao-e-confiabilidade.md). O [guia de operação](../aulas/07-operacao-e-comunicacao.md) ajuda a conduzir o piloto.

</details>

→ [Escolher minha primeira entrega](trilha-pratica.md)

# Descubra se seu agente está funcionando

[← Pratique](README.md) · [Registrar um experimento](experimento.md)

Teste com situações que você consegue conferir. Para cada uma, escreva **o pedido, o resultado esperado e o que aconteceu**. Repita os mesmos casos depois de uma mudança.

## Comece com cinco situações

1. **Uma pergunta comum.** A resposta deve corresponder ao documento usado como fonte.
2. **Uma informação ausente.** O agente deve avisar que não encontrou e pedir ajuda, conforme a tarefa.
3. **Um pedido ambíguo.** O agente deve pedir o esclarecimento necessário.
4. **Uma ação repetida.** O mesmo pedido não deve criar um registro duplicado quando isso for indesejado.
5. **Uma ferramenta indisponível.** O agente deve informar a falha sem fingir que concluiu a tarefa.

Use arquivos e dados de teste. Acrescente outras situações conforme descobrir problemas.

## Preencha um caso

- **Pedido:** “Qual é o horário de domingo?”
- **Fonte disponível:** documento que informa apenas os horários de segunda a sexta.
- **Esperado:** avisar que o documento não informa o horário de domingo.
- **Observado:** preencha com a resposta recebida.
- **Passou? Por quê?**
- **O que precisa mudar:**

## Veja onde a melhoria acontece

<p class="compact-visual"><a href="../mapas-e-desenhos/06-avaliacao.svg"><img src="../mapas-e-desenhos/06-avaliacao.svg" width="152" alt="Comparar o resultado com o esperado, investigar a diferença, ajustar o agente e repetir os testes." loading="lazy"></a><br><small>Prévia compacta · clique no desenho para ampliar.</small></p>

Um teste que falha aponta o que investigar: a instrução, a fonte, a ferramenta ou a forma de conferir o resultado.

<details>
<summary>Para aprofundar: testar os limites</summary>

Inclua dados desatualizados, cancelamento, assuntos fora do escopo e instruções indevidas dentro de documentos. Confira se o agente respeita as permissões de cada ferramenta e se a aplicação impede ações não autorizadas.

Se o uso crescer, aumente a variedade dos casos e observe qualidade, tempo e custo. Uma taxa de acerto isolada não mostra se o agente resolveu o problema da pessoa.

</details>

→ [Aprender a investigar uma falha](../aulas/README.md#aula-06)

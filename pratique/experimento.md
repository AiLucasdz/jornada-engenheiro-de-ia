# Faça uma mudança e descubra o que acontece

[← Guia principal](../README.md)

Use este registro para verificar o efeito de uma mudança na instrução, na fonte ou na ferramenta. Compare os mesmos casos antes e depois.

## Copie e preencha

- **Data e versão do agente:**
- **O que quero melhorar:**
- **O que vou mudar:**
- **O que espero que aconteça:**
- **Como vou testar:**
- **O que aconteceu de verdade:**
- **Próximo passo:** manter, ajustar ou desfazer a mudança.
- **Fonte que ajudou, se houver:**

## Exemplo: responder quando falta informação

**Quero melhorar:** depois de adicionar o catálogo aprovado, o agente ainda inventa preços que não estão nele.

**Vou mudar:** acrescentar à instrução que consulte o catálogo e avise quando a informação estiver ausente.

**Espero:** uma resposta que peça os dados necessários e informe que o prestador confirmará o valor após analisar o pedido.

**Vou testar:** “Vocês atendem empresas?”, respondida pelo catálogo, e “Quanto custa instalar dois ventiladores de teto?”, cujo preço depende da análise do prestador.

**Resultado de exemplo:** acertou a pergunta com fonte, mas inventou na segunda. Vou revisar o contexto enviado, ajustar a instrução e repetir os dois testes.

<details>
<summary>Para aprofundar: comparar versões</summary>

Guarde as mesmas entradas de teste para comparar antes e depois. Anote também o modelo, a configuração relevante, o tempo de resposta, o custo disponível e um exemplo de falha. Se houver código, salve a versão com Git para poder recuperar o estado anterior.

</details>

Use exemplos sem senhas, tokens, dados pessoais ou conversas privadas.

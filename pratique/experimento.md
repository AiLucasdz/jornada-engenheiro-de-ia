# Faça uma mudança e descubra o que acontece

[← Pratique](README.md) · [Ver sua ideia](ficha-do-projeto.md)

Um experimento é uma mudança pequena com um resultado que você vai conferir. Registre em poucas linhas enquanto constrói.

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

**Quero melhorar:** o agente inventa horários que não estão no documento.

**Vou mudar:** acrescentar à instrução que consulte o documento e avise quando a informação estiver ausente.

**Espero:** uma resposta que reconheça a ausência e peça ajuda.

**Vou testar:** perguntar por um horário presente no arquivo e por outro que não aparece.

**Resultado de exemplo:** acertou a pergunta com fonte, mas inventou na segunda. Vou revisar o contexto enviado, ajustar a instrução e repetir os dois testes.

<details>
<summary>Para aprofundar: comparar versões</summary>

Guarde as mesmas entradas de teste para comparar antes e depois. Anote também o modelo, a configuração relevante, o tempo de resposta, o custo disponível e um exemplo de falha. Se houver código, salve a versão com Git para poder recuperar o estado anterior.

</details>

Use exemplos sem senhas, tokens, dados pessoais ou conversas privadas.

→ [Montar seus casos de teste](casos-de-avaliacao.md)

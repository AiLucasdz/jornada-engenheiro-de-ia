# Exemplo: organize pedidos de orçamento

[← Guia principal](../README.md)

Um prestador de serviços de instalação e manutenção recebe mensagens sobre atendimento e orçamento. Seu agente ajuda a identificar o pedido, consultar as informações aprovadas e organizar o que precisa de resposta.

## Primeiro teste: entenda a mensagem

Comece usando **somente os dados fornecidos na mensagem**. Peça três campos: **serviço procurado, dúvida principal e próxima pergunta**. Quando faltar informação, o agente deve apontar a dúvida.

| Mensagem de teste | O que conferir |
| --- | --- |
| “Quero instalar dois ventiladores de teto no escritório. Vocês atendem empresas?” | Identifica a instalação de ventiladores e a dúvida sobre atender empresas. Pode perguntar a localização do serviço, sem confirmar atendimento. |
| “Quanto custa instalar?” | Aponta que falta saber o que será instalado e pergunta qual item a pessoa quer instalar. |
| “Qual time ganhou ontem?” | Reconhece que está fora da tarefa e pergunta se a pessoa deseja informações sobre um serviço. |

A primeira mensagem traz um pedido completo para classificação; ainda pode faltar uma informação para preparar o orçamento. Compare duas versões da instrução com os mesmos três casos.

## Depois: consulte um catálogo aprovado

Na segunda entrega, forneça o catálogo fictício: **instalação de ventiladores de teto e pequenas manutenções; atendimento a residências e empresas**. Para preparar o orçamento, ele exige **serviço, quantidade, endereço e disponibilidade**. Valor e agendamento são confirmados pelo prestador após analisar o pedido. Inclua a data de atualização; em uso real, confirme o conteúdo com quem responde pelo serviço.

Agora o agente pode responder se atende empresas quando o catálogo trouxer essa informação. Peça que indique a fonte usada. Teste também uma pergunta sem resposta e uma ambígua; depois altere o catálogo e confira se a mudança aparece na resposta.

## Registre o pedido e confira a ação

Na terceira entrega, permita gravar **serviço procurado, dúvida e informação pendente** em uma tabela de teste. Identifique cada pedido para conferir o que acontece quando ele é enviado novamente. Abra a tabela e verifique o resultado.

Em uma empresa, esses registros podem ficar em um **CRM**, sistema de acompanhamento de contatos e oportunidades. Comece com o recurso que já consegue usar e conferir.

## Demonstre o que melhorou

Reúna cinco situações: pergunta comum, informação ausente, pedido ambíguo, ação repetida e ferramenta indisponível. Compare o esperado com o observado, corrija uma falha e repita os testes.

Mostre o resultado a quem conhece a tarefa. Compare o trabalho manual, as correções e o tempo observado antes e depois. Guarde uma demonstração, os testes e uma limitação conhecida.

<details>
<summary>Quando o exemplo virar um piloto real</summary>

Um piloto é um uso limitado para aprender com uma tarefa real. Combine participantes, dados e ações permitidos, custo acompanhado, critérios de aceitação e como interromper o agente. Registre quem atualiza o catálogo e trata falhas.

Compare os resultados com o processo anterior. Use o que observou para decidir se vale continuar, ajustar ou parar. O roteiro da primeira oferta está no guia principal.

</details>

# Como estudar: construir, entender, repetir

[← Guias](README.md) · [Trilha semanal →](trilha-12-semanas.md)

**80% prática · 20% teoria · Um projeto que evolui.** A meta de cada semana é uma entrega que você consegue demonstrar e explicar.

## Sua semana em 5 horas

| Tempo | Atividade | Evidência de aprendizado |
| --- | --- | --- |
| **4 horas de prática** | Construir, integrar, executar testes, depurar e corrigir o agente. | Mudança funcionando, teste registrado e próximo problema identificado. |
| **1 hora de teoria** | Ler materiais, consultar fontes oficiais, pesquisar e acompanhar comunidades. | Anotação curta do conceito e de como ele muda uma decisão do projeto. |

A proporção é uma referência semanal. Você pode estudar 12 minutos e praticar 48 em cada sessão, ou concentrar uma leitura e compensar nas outras sessões. Um curso longo pode ser dividido entre várias semanas.

## Uma sessão de uma hora

**Exemplo: seu agente está inventando respostas quando falta informação.**

1. **12 min · Entender.** Leia sobre contexto e fontes na [aula de contexto e RAG](../aulas/04-contexto-e-rag.md). Escolha uma mudança pequena: encaminhar perguntas sem fonte.
2. **28 min · Construir.** Oriente a IA que programa, forneça o comportamento esperado e implemente a mudança no agente.
3. **15 min · Verificar.** Rode perguntas com fonte, sem fonte e ambíguas. Compare com a versão anterior.
4. **5 min · Registrar.** Preencha [um experimento](../modelos/experimento.md) e anote a próxima hipótese.

Os últimos três blocos somam os 48 minutos de prática. Documentar evidências do teste também faz parte da construção.

## Ritmo de segunda a sexta

| Dia | Prática | Estudo que apoia a entrega |
| --- | --- | --- |
| Segunda | Escolher uma entrega pequena e escrever o resultado esperado. | Consultar o conceito necessário para essa decisão. |
| Terça | Implementar a primeira versão. | Ler o exemplo oficial da integração escolhida. |
| Quarta | Testar entradas normais e situações de erro. | Pesquisar uma falha encontrada. |
| Quinta | Corrigir e testar novamente. | Consultar documentação ou levar uma dúvida específica à comunidade. |
| Sexta | Demonstrar a entrega e registrar resultados. | Rever o conceito e escolher a próxima pergunta de estudo. |

Distribua as 4 horas de prática e 1 hora de teoria entre essas atividades. X, Discord e vídeos entram nessa hora de estudo. Uma conversa que resolve um bloqueio concreto durante a implementação faz parte da prática.

## Como trabalhar com a IA que programa

Em cada tarefa, informe **objetivo, contexto, entradas, saída esperada e limites**. Peça uma mudança pequena, leia o que mudou e execute os casos de teste antes de continuar.

Se algo falhar, leve o erro observado e um exemplo reproduzível. Peça uma explicação da causa e verifique a correção. Guarde cada entrega no Git para poder comparar e voltar a uma versão anterior.

## Escolha a leitura da vez

- **Não conheço o conceito:** abra a [aula da etapa](../aulas/README.md).
- **Preciso implementar:** escolha a documentação do provedor em [onde estudar](fontes-e-comunidade.md).
- **Encontrei um erro:** use [o roteiro de pesquisa](como-pesquisar.md).
- **Quero trocar experiências:** leve o experimento ao [X ou Discord](comunidades.md).

Você não precisa percorrer todos os catálogos. Escolha uma referência principal, faça a aplicação no agente e só aprofunde quando surgir uma pergunta nova.

## Antes de avançar

- Consigo demonstrar a entrega desta semana?
- Consigo explicar o conceito que usei e por que escolhi essa solução?
- Registrei ao menos um caso que falhou e o que fiz a respeito?
- Sei qual é a próxima mudança a testar?

→ [Escolher a próxima entrega na trilha](trilha-12-semanas.md)

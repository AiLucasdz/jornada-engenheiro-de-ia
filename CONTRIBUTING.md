# Como contribuir com a jornada

[← Início](README.md)

Para sugerir uma correção ou uma fonte, abra uma issue com o trecho, o motivo e o link de referência. Para alterar conteúdo, edite o Markdown e envie um pull request.

## Princípio editorial

**Este repositório é um guia, não um curso.** A página inicial diz o que a pessoa precisa saber e para onde ir aprender, e concentra o conteúdo: evite criar páginas novas. Antes de acrescentar algo, pergunte se isso dá direção ou tenta ensinar tudo aqui dentro. Detalhe que só alguns vão querer vai num bloco `<details>`; explicação longa vai para os materiais de formação ou para um link externo de qualidade.

## Organização

- `README.md`: o guia inteiro. Tem o mapa, os princípios e os sete focos (história, fundamentos, prática, comunidade, ecossistema, onde buscar, e entrevista e mercado), cada um com "pronto quando", o essencial e onde aprofundar. As seções têm âncoras fixas (`#historia`, `#fundamentos`, `#pratica`, `#comunidade`, `#ecossistema`, `#onde-buscar`, `#entrevista`); preserve-as.
- `materiais/`: os dois materiais de formação completos, em HTML, que servem de fonte para os guias de história e fundamentos.
- `mapas-e-desenhos/`: diagramas SVG usados nos guias.
- `assets/`: estilos, busca e recursos do site.
- `leitura/` e `index.html`: páginas geradas a partir dos Markdown. Edite os arquivos de origem.

## Atualizar o site

Com Node.js 22 ou superior:

```bash
npm ci
npm run build
npm run check
```

O gerador transforma os Markdown em `index.html` e `leitura/`, reconstrói a busca e cria redirecionamentos dos endereços antigos (aulas, comece-aqui, pratique e guia) para as seções da página inicial. Inclua os arquivos gerados no mesmo commit. O GitHub Pages publica a branch `main`.

Tabelas viram cartões no celular, então prefira duas ou três colunas. Para links internos para seções cujo título tem símbolos como `·`, use uma âncora explícita (`<a id="..."></a>`), para funcionar igual no GitHub e no site. Não aponte links para dentro de um `<details>`: o bloco não abre sozinho. Preserve o atributo `width` nas imagens.

## Recomendar uma fonte

Inclua o link oficial, o foco em que ela entra e por que ela é a melhor opção para aquele ponto. Prefira fonte primária: documentação, artigo original ou repositório. Substitua uma fonte em vez de só acrescentar outra; listas longas não ajudam ninguém a decidir.

# Como contribuir com a jornada

[← Início](README.md)

Para sugerir uma correção ou uma fonte, abra uma issue com o trecho, o motivo e o link de referência. Para alterar conteúdo, edite o Markdown e envie um pull request.

## Princípio editorial

**Este repositório é um guia, não um curso.** Cada página diz o que a pessoa precisa saber e para onde ir aprender. Antes de acrescentar conteúdo, pergunte: isso dá direção ou tenta ensinar tudo aqui dentro? Explicação longa vai para os materiais de formação ou para um link externo de qualidade.

## Organização

- `README.md`: a página principal, com o mapa dos sete focos e os princípios.
- `guia/`: uma página por foco, na ordem história, fundamentos, prática, comunidade, ecossistema, onde buscar, e entrevista e mercado. Cada página tem "pronto quando", o essencial e "para onde ir agora".
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

O gerador transforma os Markdown em `index.html` e `leitura/`, reconstrói a busca e cria redirecionamentos para os endereços antigos, como as aulas, o comece-aqui e o pratique. Inclua os arquivos gerados no mesmo commit. O GitHub Pages publica a branch `main`.

Tabelas viram cartões no celular, então prefira duas ou três colunas. Para links internos para seções cujo título tem símbolos como `·`, use uma âncora explícita (`<a id="..."></a>`), para funcionar igual no GitHub e no site. Preserve o atributo `width` nas imagens.

## Recomendar uma fonte

Inclua o link oficial, o foco do guia em que ela entra e por que ela é a melhor opção para aquele ponto. Prefira fonte primária: documentação, artigo original ou repositório. Substitua uma fonte em vez de só acrescentar outra; listas longas não ajudam ninguém a decidir.

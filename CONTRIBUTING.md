# Como contribuir com a jornada

[← Início](README.md)

Para sugerir uma correção ou uma fonte de estudo, abra uma issue com o trecho, o motivo e o link de referência. Para alterar conteúdo, edite o Markdown na pasta correspondente e envie um pull request.

## Organização

- `README.md`: entrada principal da jornada no GitHub e no site.
- `comece-aqui/`: método, trilha, fontes, pesquisa, comunidades e projeto.
- `aulas/README.md`: as sete aulas completas, com explicações, fontes, exercícios e aprofundamentos na mesma página. Edite este arquivo como fonte única das aulas.
- `materiais/`: redirecionamentos de endereços anteriores para as aulas.
- `pratique/`: guias com exemplos para anotar a ideia, experimentar e testar.
- `mapas-e-desenhos/`: ilustrações das aulas e índice visual.
- `assets/`: imagens, estilos e recursos da navegação.
- `leitura/`: páginas de leitura geradas dos Markdown; edite os arquivos de origem.
- `mapa.html`: diagrama interativo gerado pelo Archify.

## Atualizar o site

Com Node.js 22 ou superior:

```bash
npm ci
npm run build
npm run check
```

O gerador mantém os Markdown como origem, atualiza `index.html` e `leitura/`, reconstrói a busca e preserva os redirecionamentos de endereços antigos. Revise as mudanças e inclua os arquivos gerados no mesmo commit. O GitHub Pages publica os arquivos estáticos da branch `main`.

Os blocos `<!-- cards:start -->` e `<!-- cards:end -->` transformam os parágrafos entre eles em cartões no site. No GitHub, continuam como links com descrição. Use `<details>` com linhas em branco para manter aprofundamentos opcionais legíveis nos dois lugares.

As figuras usam uma prévia com altura de até 320 px e link para o SVG completo. Preserve o atributo `width` nos elementos `<img>` para manter o tamanho compacto também no GitHub.

## Recomendar uma fonte

Inclua a página oficial, o assunto, a etapa da trilha, uma aplicação no projeto e a data de consulta. Prefira links diretos ao material. Indique quando um curso é apenas complemento e não substitua o exercício por uma lista de vídeos.

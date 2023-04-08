# Quantun

O Quantun é um monorepo para o gerenciamento de projetos utilizando React e Typescript.

## Tecnologias

O Quantun utiliza as seguintes tecnologias:

- [Turborepo](https://turborepo.org/) - Gerenciador de monorepo
- [React](https://reactjs.org/) - Biblioteca para criação de interfaces
- [Typescript](https://www.typescriptlang.org/) - Adiciona tipagem estática ao JavaScript
- [Storybook](https://storybook.js.org/) - Biblioteca para documentação de componentes
- [Jest](https://jestjs.io/) - Biblioteca para testes unitários
- [Prettier](https://prettier.io/) - Biblioteca para formatação de código
- [ESLint](https://eslint.org/) - Biblioteca para análise de código
- [Changesets](https://github.com/changesets/changesets) - Biblioteca para gerenciamento de versões

Além disso, o Quantun utiliza o [PNPM](https://pnpm.io/) como gerenciador de pacotes.

## Como utilizar

### Instalação

Para instalar as dependências do projeto, execute o comando:

```bash
yarn
```

### Execução

Para executar e visualizar o projeto, execute o comando:

```bash
yarn dev
```

Acesse o storybook através do endereço: http://localhost:6006

### Formatação

Para formatar o código, execute o comando:

```bash
yarn format
```

### Clean

Para limpar o projeto, execute o comando:

```bash
yarn clean
```

### Testes

Para executar os testes, execute o comando:

```bash
yarn test
```

### Build

Para gerar o build do projeto, execute o comando:

```bash
yarn build
```

### Publicação

Há duas formas de publicar o projeto:

- Publicação manual: Para publicar o projeto manualmente, execute o comando: `yarn release`
- Publicação automática: Para publicar o projeto automaticamente, é necessário dar push na branch master. O Github Actions irá executar o processo de publicação.

## Pacotes disponíveis

### @quantun/core (🚧 Em desenvolvimento 🚧)

O pacote @quantun/core é responsável por disponibilizar os componentes básicos do Quantun.

### @quantun/prettier 🚀

O pacote @quantun/prettier é responsável por disponibilizar as configurações do Prettier.

### @quantun/tsconfig 🚀

O pacote @quantun/tsconfig é responsável por disponibilizar as configurações do Typescript.

# Quantun Prettier

Esse pacote é responsável por formatar o código de acordo com as regras definidas no arquivo .prettierrc.

## Instalação

yard add prettier @quantun/prettier -D

## Configuração

Crie um arquivo .prettierrc na raiz do projeto e adicione o seguinte conteúdo:

```
const config = require('./node_modules/@s_mart/prettier/.prettierrc.js');

module.exports = config;
```

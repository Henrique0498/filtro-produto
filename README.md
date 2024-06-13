# Teste da Empresa Amaro Contact Center

Este é um projeto desenvolvido como parte do processo de seleção da Empresa Amaro Contact Center. O objetivo era criar uma aplicação web utilizando React, fiz o uso de um template Vite para agilizar o processo de configuração.

## Tecnologias Utilizadas

- React: Uma biblioteca JavaScript para criar interfaces de usuário.
- Typescript: Linguagem baseada no Javascript para fazer a tipagem.
- Vite: Um build tool que permite um desenvolvimento rápido e eficiente para projetos front-end.

## Como Executar o Projeto

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina.

1. Navegue até o diretório do projeto:

   ```bash
   cd teste-amaro
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm start
   ```

Isso iniciará a aplicação em modo de desenvolvimento. Você poderá acessá-la no navegador em [http://localhost:3000](http://localhost:3000).

## Funcionalidades Implementadas

- [x] Página inicial consome a api fornecida.
- [x] Página inicial com lista dos produtos.
- [x] Página abre um modal com detalhes de cada produto.
- [x] Página tem responsividade e o modal também.
- [x] Funcionalidade de filtrar.

## Estrutura do Projeto

A estrutura do projeto segue os padrões comuns de uma aplicação React criada com o Vite template. Aqui está uma visão geral da estrutura de diretórios:

```
teste-amaro/
├── public/
│   ├── image/
│   └── ...
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │        ├──index.tsx
│   │   │        └── styles.module.css
│   │   └── ...
│   ├── page/
│   │   ├── Home/
│   │   │      ├──index.tsx
│   │   │      └── styles.module.css
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

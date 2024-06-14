# filtro-produto

Este é um projeto desenvolvido com uma abordagem onde a filtragem de dados ocorre no lado do cliente, em vez de depender exclusivamente do processamento no servidor. Foi criado uma aplicação de filtro onde ocorre apenas 1 renderização e em real time, assim, evitando também o travamentos no lado do cliente.

## Tecnologias Utilizadas

- React: Uma biblioteca JavaScript para criar interfaces de usuário.
- Typescript: Linguagem baseada no Javascript para fazer a tipagem.
- Vite: Um build tool que permite um desenvolvimento rápido e eficiente para projetos front-end.

## Como Executar o Projeto

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina.

1. Navegue até o diretório do projeto:

   ```bash
   cd filtro-produto
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm dev
   ```

Isso iniciará a aplicação em modo de desenvolvimento. Você poderá acessá-la no navegador em [http://localhost:5173](http://localhost:5173).

## Funcionalidades Implementadas

- [x] Página inicial consome a api fornecida.
- [x] Página inicial com lista dos produtos.
- [x] Página abre um modal com detalhes de cada produto.
- [x] Página tem responsividade e o modal também.
- [x] Funcionalidade de filtrar.
- [x] Infinity scroll.

## Estrutura do Projeto

A estrutura do projeto segue os padrões comuns de uma aplicação React criada com o Vite template. Aqui está uma visão geral da estrutura de diretórios:

```
filtro-produto/
├── public/
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
│   └── App.tsx
├── .gitignore
├── package.json
└── README.md
```

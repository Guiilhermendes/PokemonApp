# Pokemon App

Este é um aplicativo React Native que permite pesquisar habilidades de Pokemons. Ele utiliza a API de um servidor local para buscar as habilidades dos Pokemons.

## Pré-requisitos

- Node.js
- Expo CLI

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/Guiilhermendes/PokemonApp
    cd pokemonApp
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e defina a variável de ambiente `API_BASE_URL`:
    ```sh
    API_BASE_URL=http://seu-servidor:3000
    ```

## Executando o Projeto

1. Inicie o servidor local que fornece a API de Pokemons.

2. Inicie o aplicativo com o Expo:
    ```sh
    npx expo start
    ```

3. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel para visualizar o aplicativo.

## Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configurar a URL base da API. Certifique-se de definir a variável `API_BASE_URL` no arquivo `.env` antes de iniciar o projeto.

## Estrutura do Projeto

- `App.tsx`: Componente principal do aplicativo.
- `components/`: Contém componentes reutilizáveis como `SearchBar` e `AbilityList`.
- `services/`: Contém serviços para fazer requisições à API.

## Créditos

Criado por [Guiilhermendes](https://github.com/Guiilhermendes).
Entre em contato pelo email: guilhermemendeds@gmail.com.

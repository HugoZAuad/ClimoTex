# ClimoTex

ClimoTex é um aplicativo de clima em tempo real desenvolvido com React.js, Next.js e Tailwind CSS.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)
- [Deploy](#deploy)

## Sobre o Projeto

ClimoTex é um aplicativo que fornece informações climáticas em tempo real, incluindo temperatura, umidade, velocidade do vento e condições climáticas. O projeto foi desenvolvido como parte do meu aprendizado em desenvolvimento Front-End.

O aplicativo utiliza animações suaves para transições entre as informações climáticas e é totalmente responsivo, garantindo uma boa experiência em dispositivos móveis, tablets e desktops.

## Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Instalação

Para instalar e executar o projeto localmente, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/HugoZAuad/ClimoTex.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd ClimoTex
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API do OpenWeatherMap:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_API_KEY
   ```

5. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Uso

Digite o nome de uma cidade no campo de entrada e clique em "Buscar Clima" para obter as informações climáticas em tempo real. O aplicativo exibirá:

- Temperatura atual com um ícone representativo.
- Condições climáticas (ex.: céu limpo, chuva, neve).
- Umidade relativa do ar.
- Velocidade dos ventos, com alertas visuais para ventos fortes.

As transições entre as informações são animadas para melhorar a experiência do usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato

Hugo Zeymer Auad - [hugozeymer@gmail.com](mailto:hugozeymer@gmail.com)

Link do Projeto: [https://github.com/HugoZAuad/ClimoTex](https://github.com/HugoZAuad/ClimoTex)

## Deploy

O projeto está disponível online no seguinte link:

[https://climotex.vercel.app](https://climotex.vercel.app)
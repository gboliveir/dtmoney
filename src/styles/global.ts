import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e40;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        /*  
        É necessário diminuir a font com base no tamanho das telas para melhor
        adaptar a aplicação aos diferentes dispositívos.

        Utilizamos a unidade de medida REM para tornarmos
        não só as fonts responsivas, mas também os elementos em tela, que terão 
        seus tamanhos alterados com base no font-size da aplicação.

        utiliza-se porcentagem para garantir que o usuário no seu celular possa
        setar fontes mais maximizadas ou minimizadas de acordo com sua preferen-
        cia, fazendo com que a aplicação possa se adaptar com base nas suas ne-
        cessidades. Se um valor fixo for setado em vez de porcentagem, o usuário
        não poderar alterar o tamanho das fontes..font-size. o valor fixo não
        permitirá isso.
        */
        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // Fontes mais nítidas 
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
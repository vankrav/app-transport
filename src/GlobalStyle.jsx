import { createGlobalStyle } from 'styled-components';
import { darkSber } from '@salutejs/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber
import {
    text, // Цвет текста
    background, // Цвет подложки
    gradient, // Градиент
} from '@salutejs/plasma-tokens';

const DocumentStyle = createGlobalStyle`
  html:focus,html:focus-visible,body:focus,body:focus-visible,#root:focus,#root:focus-visible{
    outline: none !important;
  };
    html:root {
        min-height: 100vh;
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        outline: 0;
    }
`;
const ThemeStyle = createGlobalStyle(darkSber);
export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
    </>
);

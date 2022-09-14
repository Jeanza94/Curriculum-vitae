import { PropsDataCertificates } from '../interfaces/interfaces';

const pathHtmlCss = "/certificates/html-css";
const pathJavascript = "/certificates/javascript";
const pathReact = "/certificates/react";

export const certificatesHtmlCss: PropsDataCertificates[] = [
    {
        id: 1,
        name: "Frontend developer",
        path: `${pathHtmlCss}/diploma-frontend-developer.pdf`,
    },

    {
        id: 2,
        name: "Frontend developer Practico",
        path: `${pathHtmlCss}/diploma-frontend-developer-practico.pdf`,
    },

    {
        id: 3,
        name: "Html y Css practico",
        path: `${pathHtmlCss}/diploma-html-practico.pdf`,
    },

    {
        id: 4,
        name: "Css grid basico",
        path: `${pathHtmlCss}/diploma-css-grid.pdf`,
    },

    {
        id: 5,
        name: "Html y Css definitivo",
        path: `${pathHtmlCss}/diploma-html-css.pdf`,
    },

    {
        id: 6,
        name: "Diseño para programadores",
        path: `${pathHtmlCss}/diploma-diseno-programadores.pdf`,
    },

    {
        id: 7,
        name: "Responsive design mobile first",
        path: `${pathHtmlCss}/diploma-mobile-first.pdf`,
    },

    {
        id: 8,
        name: "Responsive web design",
        path: "https://www.freecodecamp.org/certification/fccd4cfee36-c6da-4410-a6df-a625e6677f05/responsive-web-design",
    },
    {
        id: 9,
        name: "Transformaciones y transiciones",
        path: `${pathHtmlCss}/diploma-transformaciones-transiciones-css.pdf`,
    },

]


export const certificatesJs: PropsDataCertificates[] = [
    {
        id: 1,
        name: "Basico de javascript",
        path: `${pathJavascript}/diploma-basico-javascript.pdf`,
    },

    {
        id: 2,
        name: "Closures y scope javascript",
        path: `${pathJavascript}/diploma-javascript-closures-scope.pdf`,
    },

    {
        id: 3,
        name: "Ecmascript 6+",
        path: `${pathJavascript}/diploma-ecmascript-6.pdf`,
    },

    {
        id: 4,
        name: "Asincronismo con javascript",
        path: `${pathJavascript}/diploma-asincronismo-js.pdf`,
    },

    {
        id: 5,
        name: "Gestion de dependencias y paquetes con javascript",
        path: `${pathJavascript}/diploma-npm.pdf`,
    },

    {
        id: 6,
        name: "Curso Javascript practico",
        path: `${pathJavascript}/diploma-javascript-practico.pdf`,
    },

    {
        id: 7,
        name: "Javasacript algorithms and data structures",
        path: "https://www.freecodecamp.org/certification/fccd4cfee36-c6da-4410-a6df-a625e6677f05/javascript-algorithms-and-data-structures",
    },

    {
        id: 8,
        name: "Typescript manual",
        path: `${pathJavascript}/typescript-udemy.pdf`
    }

]

export const certificatesReact: PropsDataCertificates[] = [
    {
        id: 1,
        name: "Introducción a react",
        path: `${pathReact}/diploma-react.pdf`
    },
    {
        id: 2,
        name: "React.js manejo profesional del estado",
        path: `${pathReact}/diploma-react-estado.pdf`
    },
    {
        id: 3,
        name: "React hooks and mern",
        path: `${pathReact}/react-hooks-and-mern-udemy.pdf`
    },

]


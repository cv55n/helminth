# polymer

[![publicado no npm](https://img.shields.io/npm/v/@polymer/polymer.svg)](https://www.npmjs.com/package/@polymer/polymer)
[![publicado em webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@polymer/polymer)

> ℹ️ nota: essa é a versão estável atual da biblioteca polymer. no google i/o 2018, foi anunciado uma nova classe base de componente web, [`litelement`](https://github.com/lit/lit), como sucessora da classe base `polymerelement` nesta biblioteca
>
> se você estiver iniciando um novo projeto, recomendamos que considere usar o litelement.
>
> se você tiver um projeto desenvolvido com uma versão anterior da biblioteca polymer, recomendamos que você [migre](#about-polymer-30) para a versão 3.0 para obter a melhor compatibilidade com o ecossistema javascript. graças à interoperabilidade dos web components, elementos criados com polymer 3.0 e litelement podem ser combinados no mesmo aplicativo. portanto, após atualizar seu projeto para o polymer 3.0, você pode migrar para o litelement gradualmente, um elemento por vez. consulte nossa postagem no blog sobre o [roteiro do projeto polymer](https://www.polymer-project.org/blog/2018-05-02-roadmap-update.html) para obter mais informações.

o polymer permite criar [web components](https://www.webcomponents.org/introduction) encapsulados e reutilizáveis ​​que funcionam exatamente como elementos html padrão, para serem usados ​​no desenvolvimento de aplicações web. Usar um web component criado com polymer é tão simples quanto importar sua definição e usá-lo como qualquer outro elemento html:

```html
<!-- importação de um componente -->
<script src="https://unpkg.com/@polymer/paper-checkbox@next/paper-checkbox.js?module" type="module" ></script>

<!-- usar como qualquer outro elemento html -->
<paper-checkbox>componentes web!</paper-checkbox>
```

os web components agora são implementados nativamente no safari e no chrome (cerca de 70% dos navegadores instalados) e funcionam bem no firefox, edge e ie11 usando [polyfills](https://github.com/webcomponents/webcomponentsjs). leia mais [abaixo](#overview).

## começando

* a maneira mais fácil de experimentar o polymer é usar uma destas ferramentas online:
    * funciona em todos os navegadores [suportados](https://github.com/Polymer/polymer/blob/master/README.md#supported-browsers): [stackblitz](https://stackblitz.com/edit/polymer-element-example?file=index.js), [glitch](https://glitch.com/edit/#!/polymer-element-example?path=index.html)
    * funciona em navegadores com [módulos javascript](https://caniuse.com/#search=modules): [jsbin](https://jsbin.com/wuxejiz/edit?html,output), [codepen](https://codepen.io/kevinpschaaf/pen/BxdErp?editors=1000).
* você também pode salvar [este arquivo html](https://gist.githubusercontent.com/kevinpschaaf/8a5acbea7b25d2bb5e82eeea2b105669/raw/c3a86872f07603e2d0ddae736687e52a5c8c499f/index.html) em um arquivo local e executá-lo em qualquer navegador que suporte módulos javascript.
* quando estiver pronto para usar o polymer em um projeto, instale-o via [npm](https://www.npmjs.com/). para executar o projeto no navegador, é necessário um conjunto de ferramentas compatível com módulos. recomendamos instalar a [cli do polymer](https://github.com/Polymer/tools/tree/master/packages/cli) e usar seu servidor de desenvolvimento da seguinte forma.

    1. adicione o polymer ao seu projeto:

        ```npm i @polymer/polymer```

    1. crie um elemento estendendo a classe polymerelement e chamando `customelements.define` com a sua classe (veja os exemplos abaixo).

    1. instale o cli do polymer:

    ```npm i -g polymer-cli```

    1. execute o servidor de desenvolvimento e abra um navegador apontando para o seu url:

    ```polymer serve --npm```

> o polymer 3.0 é publicado no npm usando módulos javascript. isso significa que ele pode aproveitar o carregador de módulos javascript nativo padrão disponível em todos os principais navegadores atuais.
>
> no entanto, como o polymer usa as convenções do npm para referenciar dependências por nome, é necessária uma pequena transformação para reescrever os especificadores em urls para que funcione no navegador. o servidor de desenvolvimento do polymer-cli, `polymer serve`, bem como o `polymer build` (para criar um aplicativo otimizado para implantação), lidam automaticamente com essa transformação.

ferramentas como [webpack](https://webpack.js.org/) e [rollup](https://rollupjs.org/) também podem ser usadas para servir e/ou agrupar elementos polymer.

## exemplo mínimo

1. crie uma classe que estenda `polymerelement`
2. implemente um método getter `properties` estáticas que descreva a api de propriedades/atributos públicos do elemento (estes se tornam automaticamente atributos observados).
3. em seguida, implemente um getter `template` que retorne um `htmltemplateelement` descrevendo a renderização do elemento, incluindo estilos encapsulados e quaisquer vinculações de propriedades.

```js
<script src="node_modules/@webcomponents/webcomponents-loader.js"></script>

<script type="module">
    import {PolymerElement, html} from '@polymer/polymer';

    class MyElement extends PolymerElement {
        static get properties() { return { mood: String }}

        static get template() {
            return html`
                <style> .mood { color: green; } </style>
                web components são <span class="mood">[[mood]]</span>!
            `;
        }
    }

    customElements.define('my-element', MyElement);
</script>

<my-element mood="happy"></my-element>
```

## overview

os componentes web são um novo conjunto incrivelmente poderoso de elementos primitivos integrados à plataforma web, que abrem um mundo de possibilidades quando se trata de componentizar o código front-end e criar facilmente experiências poderosas, imersivas e semelhantes a aplicativos na web.

polymer é uma biblioteca leve construída sobre as apis de [web components](https://webcomponents.org/introduction) baseadas em padrões da web, e facilita a criação de seus próprios elementos html personalizados. criar elementos personalizados reutilizáveis ​​— e usar elementos criados por outros — pode tornar o desenvolvimento de aplicações web complexas mais fácil e eficiente.

por serem baseados nas apis de web components integradas ao navegador (ou com polyfills quando necessário), os elementos criados com polymer são:

- construído a partir da plataforma
- autossuficiente
- reutilizável
- interoperável entre diferentes estruturas

dentre as diversas maneiras de aproveitar elementos personalizados, eles podem ser particularmente úteis para criar componentes de interface do usuário reutilizáveis. em vez de recriar continuamente uma barra de navegação ou um botão específico em diferentes frameworks e para diferentes projetos, você pode definir esse elemento uma única vez usando o polymer e, em seguida, reutilizá-lo em todo o seu projeto ou em qualquer projeto futuro.

o polymer oferece uma sintaxe declarativa para criar facilmente seus próprios elementos personalizados, usando todas as tecnologias web padrão: defina a estrutura do elemento com html, estilize-o com css e adicione interações ao elemento com javascript.

o polymer também oferece vinculação de dados bidirecional opcional, o que significa:

1. quando as propriedades de um elemento no modelo são atualizadas, o próprio elemento pode se atualizar em resposta.
2. quando o elemento é atualizado internamente, as alterações podem ser propagadas de volta para o modelo.

o polymer foi projetado para ser flexível, leve e próximo da plataforma web — a biblioteca não inventa novas abstrações complexas nem soluções mágicas, mas utiliza os melhores recursos da plataforma web de maneira direta para simplificar a criação de elementos personalizados.

## sobre o polymer 3.0

o polymer 3.0 já está disponível na versão estável e introduz uma grande mudança na forma como o polymer é distribuído: de importações html no bower para módulos js no npm. fora isso, a api é quase totalmente compatível com versões anteriores do polymer 2.0 (as únicas mudanças são a remoção de apis relacionadas a importações html, como `importhref`, e a conversão da api do polymer para ser baseada em módulos em vez de variáveis ​​globais)

a migração manual para o polymer 3.0 é um processo predominantemente mecânico:

- os componentes devem ser definidos em módulos js em vez de em html
- os modelos devem ser codificados em módulos js usando um getter estático `template()` em subclasses de `polymerelement`, utilizando a função de modelo literal com tag html (que extrai elementos `htmltemplateelements` de strings em js), em vez de usar elementos `<template>` em um `<dom-module>`
- todas as dependências devem ser importadas por meio de módulos js, e não por meio de importações html

no entanto, a ferramenta [polymer-modulizer](https://github.com/Polymer/polymer-modulizer) automatiza a grande maioria desse trabalho de migração. consulte os detalhes nesse repositório para obter informações sobre a conversão automatizada de aplicativos e elementos do polymer 2.0 para o polymer 3.0

👀 **procurando pelo polymer v2.x?** veja a [branch v2](https://github.com/Polymer/polymer/tree/2.x).

👀 **procurando pelo polymer v2.x?** veja a [branch v1](https://github.com/Polymer/polymer/tree/1.x).

## contribuindo

a equipe do polymer adora contribuições da comunidade! confira nosso [guia de contribuição](https://github.com/Polymer/polymer/blob/master/CONTRIBUTING.md) para mais informações sobre como contribuir. por favor, registre seus problemas no rastreador de problemas do polymer, seguindo o modelo de problema e as instruções do guia de contribuição dos [erros](https://github.com/Polymer/polymer/issues/new).

## comunicando com o time polymer

além do github, procuramos manter disponíveis diversas linhas de comunicação diferentes:

- [blog](https://blog.polymer-project.org/)
- [twitter](https://twitter.com/polymer)
- [mailing list](https://groups.google.com/forum/#!forum/polymer-dev)
- [canal do slack](https://bit.ly/polymerslack)

## licença

a biblioteca polymer utiliza uma licença semelhante à bsd, que está disponível [aqui](https://github.com/Polymer/polymer/blob/master/LICENSE.txt).

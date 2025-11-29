// tslint:disable:variable-name descrevendo uma api que já está definida em outro lugar

import { PropertyEffects } from '../mixins/property-effects.js';
import { OptionalMutableData } from '../mixins/mutable-data.js';
import { GestureEventListeners } from '../mixins/gesture-event-listeners.js';
import { hideElementsGlobally } from '../utils/hide-template-controls.js';

export { DomBind };

/** 
 * Elemento personalizado que permite usar os recursos de modelo do Polymer (vinculação de dados, ouvintes de eventos declarativos, etc.) no documento principal sem a necessidade de definir um novo elemento personalizado.
 * 
 * As tags `<template>` que utilizam vinculações podem ser envolvidas pelo elemento `<dom-bind>`, que irá imediatamente inserir o modelo envolvido no documento principal e vincular os elementos ao próprio elemento `dom-bind` como escopo de vinculação.
 */
declare class DomBind extends PropertyEffects(OptionalMutableData(GestureEventListeners(HTMLElement))) {
    /**
     * @param name nome do atributo que foi alterado
     * @param old valor do atributo antigo
     * @param value novo valor de atributo
     * @param namespace espaço de nomes de atributos
     */
    attributeChangedCallback(name: string, old: string|null, value: string|null, namespace: string|null): void;
    
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * força o elemento a renderizar seu conteúdo. normalmente, isso só é necessário se
     * forem usados htmlimports com o atributo async
     */
    render(): void;
}

declare global {
    interface HTMLElementTagNameMap {
        "dom-bind": DomBind;
    }
}
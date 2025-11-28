/**
 * @fileoverview externs para polyfills de webcomponents
 * 
 * @externs
 * 
 * @suppress {duplicate}
 * 
 * @license
 * 
 * copyright (c) 2025 cavassani. todos os direitos reservados.
 * 
 * esse código só pode ser usado sob a licença estilo bsd encontrada em:
 * - https://polymer.github.io/LICENSE.txt
 * 
 * a lista completa de autores pode ser encontrada em:
 * - https://polymer.github.io/AUTHORS.txt
 * 
 * a lista completa de colaboradores pode ser encontrada em:
 * - https://polymer.github.io/CONTRIBUTORS.txt
 * 
 * o código distribuído pelo google como parte do projeto polymer também está sujeito a uma
 * concessão adicional de direitos de propriedade intelectual, que pode ser encontrada em:
 * - https://polymer.github.io/PATENTS.txt
 */

/* eslint-disable */

var HTMLImports = {};

/**
 * @param {function()=} callback
 */
HTMLImports.whenReady = function(callback) {};

/**
 * retorna o documento de importação que contém o elemento
 * 
 * @param {!Node} element
 * 
 * @return {?HTMLLinkElement|?Document|undefined}
 */
HTMLImports.importForElement = function(element) {};

window.HTMLImports = HTMLImports;

var ShadyDOM = {};

ShadyDOM.inUse;
ShadyDOM.composedPath;

ShadyDOM.flush = function() {};

/**
 * @param {!Node} target
 * @param {function(Array<MutationRecord>, MutationObserver)} callback
 * 
 * @return {MutationObserver}
 */
ShadyDOM.observeChildren = function(target, callback) {};

/**
 * @param {MutationObserver} observer
 */
ShadyDOM.unobserveChildren = function(observer) {};

/**
 * @param {Node} node
 */
ShadyDOM.patch = function(node) {};

/**
 * @param {!ShadowRoot} shadowroot
 */
ShadyDOM.flushInitial = function(shadowroot) {};

window.ShadyDOM = ShadyDOM;

var WebComponents = {};
window.WebComponents = WebComponents;

/** @type {Element} */
HTMLElement.prototype._activeElement;

/**
 * @param {HTMLTemplateElement} template
 */
HTMLTemplateElement.decorate = function(template){};

/**
 * @param {function(function())} cb callback
 */
CustomElementRegistry.prototype.polyfillWrapFlushCallback = function(cb){};

/**
 * @param {string} cssText
 */
CSSStyleSheet.prototype.replaceSync = function(cssText) {};
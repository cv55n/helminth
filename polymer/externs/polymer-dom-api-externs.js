/**
 * @externs
 * 
 * @fileoverview externos para polymerdomapi para retrocompatibilidade com
 * os externs do polymer 1
 */

/**
 * uma api polymer dom para manipular o dom de forma que as árvores dom
 * locais e dom leves sejam mantidas adequadamente
 * 
 * este tipo existe apenas para garantir a compatibilidade entre o código
 * híbrido compilado do polymer v1 e v2. o código que utiliza apenas o
 * polymer v2 deve usar simplesmente a classe domapi
 * 
 * @interface
 */
var PolymerDomApi = function() {};

/**
 * @param {?Node} node
 * 
 * @return {boolean}
 */
PolymerDomApi.prototype.deepContains = function(node) {};

/** @param {!Node} node */
PolymerDomApi.prototype.appendChild = function(node) {};

/**
 * @param {!Node} oldNode
 * @param {!Node} newNode
 */
PolymerDomApi.prototype.replaceChild = function(oldNode, newNode) {};

/**
 * @param {!Node} node
 * @param {?Node} beforeNode
 */
PolymerDomApi.prototype.insertBefore = function(node, beforeNode) {};

/** @param {!Node} node */
PolymerDomApi.prototype.removeChild = function(node) {};

/** @type {!Array<!HTMLElement>|!NodeList<!HTMLElement>} */
PolymerDomApi.prototype.children;

/** @type {!Array<!Node>|!NodeList<!Node>} */
PolymerDomApi.prototype.childNodes;

/** @type {?Node} */
PolymerDomApi.prototype.parentNode;

/** @type {?Node} */
PolymerDomApi.prototype.firstChild;

/** @type {?Node} */
PolymerDomApi.prototype.lastChild;

/** @type {?HTMLElement} */
PolymerDomApi.prototype.firstElementChild;

/** @type {?HTMLElement} */
PolymerDomApi.prototype.lastElementChild;

/** @type {?Node} */
PolymerDomApi.prototype.previousSibling;

/** @type {?Node} */
PolymerDomApi.prototype.nextSibling;

/** @type {?HTMLElement} */
PolymerDomApi.prototype.previousElementSibling;

/** @type {?HTMLElement} */
PolymerDomApi.prototype.nextElementSibling;

/** @type {string} */
PolymerDomApi.prototype.textContent;

/** @type {string} */
PolymerDomApi.prototype.innerHTML;

/** @type {?HTMLElement} */
PolymerDomApi.prototype.activeElement;

/**
 * @param {string} selector
 * 
 * @return {?Element}
 */
PolymerDomApi.prototype.querySelector = function(selector) {};

/**
 * @param {string} selector
 * 
 * @return {!Array<!Element>|!NodeList<!Element>}
 */
PolymerDomApi.prototype.querySelectorAll = function(selector) {};

/** @return {!Array<!Node>} */
PolymerDomApi.prototype.getDistributedNodes = function() {};

/** @return {!Array<!Node>} */
PolymerDomApi.prototype.getDestinationInsertionPoints = function() {};

/** @return {?Node} */
PolymerDomApi.prototype.getOwnerRoot = function() {};

/** @type {!Node} */
PolymerDomApi.prototype.node;

/**
 * @param {string} attribute
 * @param {string} value
 */
PolymerDomApi.prototype.setAttribute = function(attribute, value) {};

/** @param {string} attribute */
PolymerDomApi.prototype.removeAttribute = function(attribute) {};

/**
 * @typedef {function(!PolymerDomApi.ObserveInfo)}
 */
PolymerDomApi.ObserveCallback;

/**
 * @typedef {{
 *   target: !Node,
 *   addedNodes: !Array<!Node>,
 *   removedNodes: !Array<!Node>
 * }}
 */
PolymerDomApi.ObserveInfo;

/**
 * um tipo virtual para identificadores de retorno de chamada do observador
 *
 * @interface
 */
PolymerDomApi.ObserveHandle = function() {};

/**
 * @return {void}
 */
PolymerDomApi.ObserveHandle.prototype.disconnect = function() {};

/**
 * notifica os chamadores sobre alterações nos child nodes efetivos do elemento, a
 * mesma lista retornada por `geteffectivechildnodes`
 *
 * @param {!PolymerDomApi.ObserveCallback} callback a função de retorno fornecida é
 * chamada com um argumento `info`, que é um objeto que fornece o `target` no qual
 * as alterações ocorreram, uma lista de quaisquer nodes adicionados na matriz
 * `addednodes` e nodes removidos na matriz `removednodes`
 *
 * @return {!PolymerDomApi.ObserveHandle} identificador que é o argumento de
 * `unobservenodes`
 */
PolymerDomApi.prototype.observeNodes = function(callback) {};

/**
 * interrompe a observação de alterações nos child nodes efetivos do elemento
 *
 * @param {!PolymerDomApi.ObserveHandle} handle o identificador da função de
 * retorno de chamada que não deve mais receber notificações. esse identificador é
 * retornado por `observenodes`
 */
PolymerDomApi.prototype.unobserveNodes = function(handle) {};

/** @type {?DOMTokenList} */
PolymerDomApi.prototype.classList;

/**
 * @param {string} selector
 * 
 * @return {!Array<!HTMLElement>}
 */
PolymerDomApi.prototype.queryDistributedElements = function(selector) {};

/**
 * retorna uma lista dos child nodes efetivos para este elemento
 *
 * @return {!Array<!HTMLElement>}
 */
PolymerDomApi.prototype.getEffectiveChildNodes = function() {};
/**
 * @fileoverview externos para o polymer pass e api do polymer externa
 * 
 * @externs
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

/**
 * @typedef {{
 *     type: !Function,
 *     value: (* | undefined),
 *     readOnly: (boolean | undefined),
 *     computed: (string | undefined),
 *     reflectToAttribute: (boolean | undefined),
 *     notify: (boolean | undefined),
 *     observer: (string | function(this:?, ?, ?) | undefined)
 * }}
 */
let PolymerElementPropertiesMeta;

/**
 * @typedef {Object<string, !Function|!PolymerElementPropertiesMeta>}
 */
let PolymerElementProperties;

/** @record */
let PolymerInit = function() {};

/** @type {string} */
PolymerInit.prototype.is;

/** @type {(string | undefined)} */
PolymerInit.prototype.extends;

/** @type {(!PolymerElementProperties | undefined)} */
PolymerInit.prototype.properties;

/** @type {(!Array<string> | undefined)} */
PolymerInit.prototype.observers;

/** @type {(!HTMLTemplateElement | string | undefined | null)} */
PolymerInit.prototype.template;

/** @type {(!Object<string, *> | undefined)} */
PolymerInit.prototype.hostAttributes;

/** @type {(!Object<string, string> | undefined)} */
PolymerInit.prototype.listeners;

/** @type {(!Object| !Array<!Object> | undefined)} */
PolymerInit.prototype.behaviors;

/** @record */
let PolymerElementConstructor = function () {};

/** @type {(string | undefined)} */
PolymerElementConstructor.is;

/** @type {(string | undefined)} */
PolymerElementConstructor.extends;

/** @type {(!PolymerElementProperties | undefined)} */
PolymerElementConstructor.properties;

/** @type {(!Array<string> | undefined)} */
PolymerElementConstructor.observers;

/** @type {(!HTMLTemplateElement | string | undefined | null)} */
PolymerElementConstructor.template;

/** @interface */
let PropertiesMixinConstructor = function () {};

/** @type {(!PolymerElementProperties | undefined)} */
PropertiesMixinConstructor.prototype.properties;

/** @return {void} */
PropertiesMixinConstructor.prototype.finalize = function() {};

/**
 * @param {!PolymerInit} init
 * 
 * @return {!function(new:HTMLElement)}
 */
function Polymer(init) {}

/**
 * @type {(function(*,string,string,Node):*)|undefined}
 */
Polymer.sanitizeDOMValue;

/**
 * @type {boolean}
 */
Polymer.passiveTouchGestures;

/**
 * @type {boolean}
 */
Polymer.strictTemplatePolicy;

/**
 * @type {boolean}
 */
Polymer.allowTemplateFromDomModule;

/**
 * @type {string}
 */
Polymer.rootPath;

/**
 * @param {string} string
 * @param {Object} obj
 * 
 * @return {string}
 */
function JSCompiler_renameProperty(string, obj) {}

/** @record */
function PolymerTelemetry() {}

/** @type {number} */
PolymerTelemetry.instanceCount;

/** @type {function():void} */
PolymerTelemetry.incrementInstanceCount;

/** @type {Array<HTMLElement>} */
PolymerTelemetry.registrations;

/** @type {function(HTMLElement)} */
PolymerTelemetry._regLog;

/** @type {function(HTMLElement)} */
PolymerTelemetry.register;

/** @type {function(HTMLElement)} */
PolymerTelemetry.dumpRegistrations;

/** @type {PolymerTelemetry} */
Polymer.telemetry;

/** @type {string} */
Polymer.version;

/** @type {boolean} */
Polymer.legacyOptimizations;

/** @type {boolean} */
Polymer.syncInitialRender;

/** @type {boolean} */
Polymer.legacyUndefined;

/** @type {boolean} */
Polymer.legacyWarnings;

/** @type {boolean} */
Polymer.orderedComputed;

/** @type {boolean} */
Polymer.fastDomIf;

/** @type {boolean} */
Polymer.removeNestedTemplates;

/** @type {boolean} */
Polymer.suppressTemplateNotifications;

// observação: isto é explicitamente 'var', pois o closure compiler verifica se
// é esse o caso

/**
 * @constructor
 * 
 * @extends {HTMLElement}
 * 
 * @implements {Polymer_LegacyElementMixin}
 */
var PolymerElement = function() {};

/**
 * o nome da tag do tipo de elemento personalizado
 * 
 * @type {string|undefined}
 */
PolymerElement.is;

/**
 * o modelo a ser usado ao criar esse tipo de elemento
 * 
 * @type {!HTMLTemplateElement|undefined|null}
 */
PolymerElement.template;

/**
 * as propriedades do tipo de elemento personalizado
 * 
 * @type {!PolymerElementProperties|undefined}
 */
PolymerElement.properties;

/**
 * os observadores deste tipo de elemento personalizado
 * 
 * @type {!Array<string>|undefined}
 */
PolymerElement.observers;

/** @type {!PolymerInit|undefined} */
PolymerElement.generatedFrom;

/**
 * ao criar uma callback
 * 
 * @override
 */
PolymerElement.prototype.created = function() {};

/**
 * quando uma callback estiver pronta
 * 
 * @override
 */
PolymerElement.prototype.ready = function() {};

/** antes de registrar a callback */
PolymerElement.prototype.beforeRegister = function() {};

/** quando a callback for registrada */
PolymerElement.prototype.registered = function() {};

/**
 * quando anexado à callback do dom
 * 
 * @override
 */
PolymerElement.prototype.attached = function() {};

/**
 * quando desanexado da callback do dom
 * 
 * @override
 */
PolymerElement.prototype.detached = function() {};

/**
 * @typedef {{
 *     index: number,
 *     removed: !Array,
 *     addedCount: number,
 *     object: !Array,
 *     type: string
 * }}
 */
var PolymerSplice;

/**
 * @typedef {{
 *     indexSplices: ?Array<!PolymerSplice>
 * }}
 */
var PolymerSpliceChange;

/**
 * o tipo de objeto recebido por uma função observadora quando a observação profunda
 * de subpropriedades está habilitada. veja:
 * 
 * https://www.polymer-project.org/2.0/docs/devguide/observers#deep-observation
 * 
 * @typedef {{
 *     path: string,
 *     value: (?Object|undefined),
 *     base: (?Object|undefined)
 * }}
 */
var PolymerDeepPropertyChange;

/**
 * objeto de evento para eventos disparados por um children de uma template de dom-repeat
 * 
 * @see https://www.polymer-project.org/2.0/docs/devguide/templates#handling-events
 * 
 * @extends {Event}
 * 
 * @constructor
 * 
 * @template T
 */
var DomRepeatEvent = function() {};

/**
 * @type {{
 *     index: number,
 *     item: T
 * }}
 */
DomRepeatEvent.prototype.model;
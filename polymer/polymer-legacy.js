/**
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

import { LegacyElementMixin } from './lib/legacy/legacy-element-mixin.js';

export { Polymer } from './lib/legacy/polymer-fn.js';

/* elementos de template */
import './lib/legacy/templatizer-behavior.js';
import './lib/elements/dom-bind.js';
import './lib/elements/dom-repeat.js';
import './lib/elements/dom-if.js';
import './lib/elements/array-selector.js';

/* estilo customizado */
import './lib/elements/custom-style.js';

/* comportamentos bc */
import './lib/legacy/mutable-data-behavior.js';

/* importar html-tag para exportação de html */
export { html } from './lib/utils/html-tag.js';

// bc
export const Base = LegacyElementMixin(HTMLElement).prototype;
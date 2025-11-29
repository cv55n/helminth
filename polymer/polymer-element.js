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

import { ElementMixin, version } from './lib/mixins/element-mixin.js';
export { html } from './lib/utils/html-tag.js';

export { version };

/**
 * classe base que fornece a api principal para os recursos de metaprogramação do
 * polymer, incluindo template stamping, data binding, desserialização de atributos
 * e observação de alterações de propriedades
 * 
 * @customElement
 * @polymer
 * @constructor
 * @implements {Polymer_ElementMixin}
 * @extends HTMLElement
 * @appliesMixin ElementMixin
 * 
 * @summary classe base de elemento personalizada que fornece a api principal para os
 * principais recursos de metaprogramação do Polymer, incluindo template stamping, data
 * binding, desserialização de atributos e observação de alterações de propriedades
 */
export const PolymerElement = ElementMixin(HTMLElement);
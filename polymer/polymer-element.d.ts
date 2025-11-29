// tslint:disable:variable-name descrevendo uma api que já está definida em outro lugar

import { ElementMixin } from './lib/mixins/element-mixin.js';

export { html } from './lib/utils/html-tag.js';

export { PolymerElement };

/**
 * classe base que fornece a api principal para os recursos de metaprogramação do
 * polymer, incluindo template stamping, data binding, desserialização de atributos
 * e observação de alterações de propriedades
 */
declare class PolymerElement extends ElementMixin(HTMLElement) {}
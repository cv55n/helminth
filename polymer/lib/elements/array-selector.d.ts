// tslint:disable:variable-name descrevendo uma api que já está definida em outro lugar
//
// tslint:disable:no-any descreve a api da melhor forma possível hoje

import { PolymerElement } from '../../polymer-element.js';
import { dedupingMixin } from '../utils/mixin.js';
import { calculateSplices } from '../utils/array-splice.js';
import { ElementMixin } from '../mixins/element-mixin.js';

/**
 * mixin de elemento para registrar associações dinâmicas entre caminhos de itens em um
 * array mestre `items` e um array `selected`, de forma que as alterações de caminho no
 * array mestre (no elemento hospedeiro ou em outro local via vinculação de dados)
 * sejam propagadas corretamente para os itens no array selecionado e vice-versa
 * 
 * a propriedade `items` aceita um array de dados do usuário e, por meio das apis
 * `select(item)` e `deselect(item)`, atualiza a propriedade `selected`, que pode estar
 * vinculada a outras partes do aplicativo. quaisquer alterações nos subcampos dos
 * itens selecionados serão mantidas sincronizadas com os itens do array `items`.
 * quando `multi` é falso, `selected` é uma propriedade que representa o último item
 * selecionado. quando `multi` é verdadeiro, `selected` é um array com os itens
 * selecionados múltiplas vezes
 */
declare function ArraySelectorMixin<T extends new (...args: any[]) => {}>(base: T): T & ArraySelectorMixinConstructor & ElementMixinConstructor & PropertyEffectsConstructor & TemplateStampConstructor & PropertyAccessorsConstructor & PropertiesChangedConstructor & PropertiesMixinConstructor;

import { ElementMixinConstructor } from '../mixins/element-mixin.js';
import { PropertyEffectsConstructor, PropertyEffects } from '../mixins/property-effects.js';
import { TemplateStampConstructor, TemplateStamp } from '../mixins/template-stamp.js';
import { PropertyAccessorsConstructor, PropertyAccessors } from '../mixins/property-accessors.js';
import { PropertiesChangedConstructor, PropertiesChanged } from '../mixins/properties-changed.js';
import { PropertiesMixinConstructor, PropertiesMixin } from '../mixins/properties-mixin.js';

interface ArraySelectorMixinConstructor {
    new(...args: any[]): ArraySelectorMixin;
}

export { ArraySelectorMixinConstructor };

interface ArraySelectorMixin extends ElementMixin, PropertyEffects, TemplateStamp, PropertyAccessors, PropertiesChanged, PropertiesMixin {
    /**
     * uma matriz contendo itens a partir dos quais a seleção será feita
     */
    items: any[]|null|undefined;

    /**
     * quando `true`, vários itens podem ser selecionados simultaneamente
     * (nesse caso, `selected` é uma matriz dos itens selecionados no momento).
     * quando `false`, apenas um item pode ser selecionado por vez
     */
    multi: boolean|null|undefined;

    /**
     * quando `multi` é verdadeiro, este é um array que contém todos os itens
     * selecionados. quando `multi` é falso, este é o item atualmente selecionado
     * ou `null` se nenhum item estiver selecionado
     */
    selected: object|object[]|null;

    /**
     * quando `multi` é falso, este é o item atualmente selecionado, ou `null`
     * se nenhum item estiver selecionado
     */
    selectedItem: object|null;

    /**
     * quando definido como `true`, chamar `select` em um item que já está
     * selecionado irá deselecioná-lo
     */
    toggle: boolean|null|undefined;

    /**
     * limpa o estado de seleção
     */
    clearSelection(): void;

    /**
     * retorna se o item está selecionado no momento
     * 
     * @param item item da matriz `items` para teste
     * 
     * @returns se o item estiver selecionado
     */
    isSelected(item: any): boolean;

    /**
     * retorna se o item está selecionado no momento
     * 
     * @param idx index da matriz `items` para teste
     * 
     * @returns se o item estiver selecionado
     */
    isIndexSelected(idx: number): boolean;

    /**
     * desmarca o item especificado caso ele já esteja selecionado
     * 
     * @param item item da matriz `items` a ser desmarcado
     */
    deselect(item: any): void;

    /**
     * desmarca o index especificado caso ele já esteja selecionado.
     * 
     * @param idx index da matriz `items` para desmarcar
     */
    deselectIndex(idx: number): void;

    /**
     * seleciona o item especificado. quando `toggle` estiver definido como
     * verdadeiro, o item será automaticamente desmarcado caso já esteja
     * selecionado
     * 
     * @param item item da matriz `items` a ser selecionado
     */
    select(item: any): void;

    /**
     * seleciona o index fornecido. quando `toggle` é verdadeiro, o item será
     * automaticamente desmarcado se já estiver selecionado
     * 
     * @param idx index da matriz `items` para selecionar
     */
    selectIndex(idx: number): void;
}

export { ArraySelectorMixin };

/**
 * elemento que implementa o mixin `arrayselector`, que registra associações dinâmicas
 * entre caminhos de itens em um array mestre `items` e um array `selected`, de forma
 * que as alterações de caminho para o array mestre (no elemento hospedeiro ou em outro
 * local via vinculação de dados) sejam corretamente propagadas para os itens na matriz
 * selecionada e vice-versa
 * 
 * a propriedade `items` aceita um array de dados do usuário e, por meio das apis
 * `select(item)` e `deselect(item)`, atualiza a propriedade `selected`, que pode estar
 * vinculada a outras partes do aplicativo. quaisquer alterações nos subcampos dos itens
 * selecionados serão mantidas sincronizadas com os itens do array `items`. quando
 * `multi` é falso, `selected` é uma propriedade que representa o último item
 * selecionado. quando `multi` é verdadeiro, `selected` é um array com os itens
 * selecionados múltiplas vezes
 * 
 * exemplo:
 * 
 * ```js
 * import {PolymerElement} from '@polymer/polymer';
 * import '@polymer/polymer/lib/elements/array-selector.js';
 * 
 * class EmployeeList extends PolymerElement {
 *     static get _template() {
 *         return html`
 *             <div> lista de funcionários: </div>
 *             
 *             <dom-repeat id="employeeList" items="{{employees}}">
 *                 <template>
 *                     <div>primeiro nome: <span>{{item.first}}</span></div>
 *                     <div>último nome: <span>{{item.last}}</span></div>
 * 
 *                     <button on-click="toggleSelection">Select</button>
 *                 </template>
 *             </dom-repeat>
 *
 *             <array-selector id="selector"
 *                             items="{{employees}}"
 *                             selected="{{selected}}"
 *                             multi toggle></array-selector>
 *
 *             <div> funcionários selecionados: </div>
 *             
 *             <dom-repeat items="{{selected}}">
 *                 <template>
 *                     <div>primeiro nome: <span>{{item.first}}</span></div>
 *                     <div>último nome: <span>{{item.last}}</span></div>
 *                 </template>
 *             </dom-repeat>`;
 *     }
 * 
 *     static get is() { return 'employee-list'; }
 * 
 *     static get properties() {
 *         return {
 *             employees: {
 *                 value() {
 *                     return [
 *                         {first: 'Bob', last: 'Smith'},
 *                         {first: 'Sally', last: 'Johnson'}
 *                         
 *                         ...
 *                     ];
 *                 }
 *             }
 *         };
 *     }
 *     
 *     toggleSelection(e) {
 *         const item = this.$.employeeList.itemForElement(e.target);
 * 
 *         this.$.selector.select(item);
 *     }
 * }
 * ```
 */
declare class ArraySelector extends ArraySelectorMixin(PolymerElement) {}

declare global {
    interface HTMLElementTagNameMap {
        "array-selector": ArraySelector;
    }
}

export { ArraySelector };
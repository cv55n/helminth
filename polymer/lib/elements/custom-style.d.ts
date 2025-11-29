// tslint:disable:variable-name descrevendo uma api que já está definida em outro lugar

import { cssFromModules } from '../utils/style-gather.js';

export { CustomStyle };

/**
 * elemento personalizado para definir estilos no documento principal que pode aproveitar
 * os shims do [shady dom](https://github.com/webcomponents/shadycss) para encapsulamento
 * de estilo, propriedades personalizadas e mixins personalizados
 * 
 * - os estilos de documento definidos em um `<custom-style>` são ajustados para garantir
 *   que não vazem para o dom local quando executados em navegadores sem shadow dom nativo
 * 
 * - propriedades personalizadas podem ser definidas em um `<custom-style>`. use o seletor
 *   `html` para definir propriedades personalizadas que se aplicam a todos os elementos
 *   personalizados
 * 
 * - mixins personalizados podem ser definidos em um `<custom-style>`, se você importar
 *   o [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
 *   (`shadycss/apply-shim.html`)
 * 
 * para utilizar:
 * 
 * - importe `custom-style.html`
 * - insira um elemento `<custom-style>` no documento principal, envolvendo uma tag
 *   `<style>` embutida que contenha as regras css que você deseja aplicar
 * 
 * por exemplo:
 * 
 * ```html
 * <!-- import apply shim -- necessário apenas se estiver usando mixins -->
 * <link rel="import" href="bower_components/shadycss/apply-shim.html">
 * 
 * <!-- importar elemento de estilo personalizado -->
 * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
 *
 * <custom-style>
 *     <style>
 *         html {
 *             --custom-color: blue;
 * 
 *             --custom-mixin: {
 *                  font-weight: bold;
 *                  color: red;
 *             };
 *         }
 *     </style>
 * </custom-style>
 * ```
 */
declare class CustomStyle extends HTMLElement {
    /**
     * retorna o elemento filho `<style>` do dom leve que este elemento envolve. na
     * primeira chamada, quaisquer módulos de estilo referenciados pelo atributo
     * `include` serão concatenados ao `<style>` deste elemento
     * 
     * @returns `<style>` light-dom deste elemento
     */
    getStyle(): HTMLStyleElement|null;
}

declare global {
    interface HTMLElementTagNameMap {
        "custom-style": CustomStyle;
    }
}
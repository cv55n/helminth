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

import { Polymer } from '../../lib/legacy/polymer-fn.js';

Polymer({
    is: 'observe-el',

    observers: [
        'singleChanged(singleSelected.*)',
        'multiChanged(multiSelected.*)'
    ],

    singleChanged: function() {},
    multiChanged: function() {}
});
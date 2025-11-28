/**
 * @externs
 * 
 * @fileoverview externs para polymer.iconset
 */

/**
 * a interface que os conjuntos de ícones devem seguir. os conjuntos de ícones são
 * registrados definindo seu nome no banco de dados 'iconset' do ironmeta e um valor
 * do tipo polymer.iconset
 * 
 * usado por iron-icon, mas precisa estar aqui, já que iron-icon, iron-iconset, etc.
 * não dependem uns dos outros e se comunicam apenas através de iron-meta
 * 
 * @interface
 */
Polymer.Iconset = function() {};

/**
 * aplica um ícone ao elemento especificado como imagem de fundo css. este método
 * não redimensiona o elemento, sendo geralmente necessário definir a altura e a
 * largura do elemento para que a imagem de fundo fique visível
 * 
 * @param {Element} element o elemento ao qual o ícone é aplicado
 * @param {string} icon o nome do ícone a ser aplicado
 * @param {string=} theme (opcional) o nome ou index do ícone a ser aplicado
 * @param {number=} scale (opcional, padrão é 1) fator de escala do ícone
 */
Polymer.Iconset.prototype.applyIcon = function(element, icon, theme, scale) {};

/**
 * remove um ícone do elemento especificado desfazendo as alterações feitas por `applyicon`
 * 
 * @param {Element} element o elemento do qual o ícone foi removido
 */
Polymer.Iconset.prototype.removeIcon = function(element) {};
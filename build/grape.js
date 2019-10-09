/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/grape/blob/master/license.txt|MIT License}
*/

/**
* @namespace Grape
*/
var Grape = Grape || {
  VERSION: '0.0.1',
};

Grape.Graph = function(config){

  this.parseConfig(config);

  this.graph = null;

  return this;
};

Grape.Graph.prototype = {
  /**
  * Parses a Grape configuration object.
  *
  * @method Grape.Graph#parseConfig
  * @protected
  */
  parseConfig: function(config){

    this.config = config;

    if (config.graph != null) {
      this.graph = config.graph;
    } else {
      console.error("You don't have a graph");
    }

  },

  render: function(){

    this.showDebugHeader();

  },

  showDebugHeader: function (){

    var v = Grape.VERSION;
    console.log('Grape v' + v + ' | http://kawa-games.ovh/grapejs');

  }
};

Grape.Graph.prototype.constructor = Grape.Graph;

Grape.Node = function (node) {

}

Grape.Edge = function (edge) {

}

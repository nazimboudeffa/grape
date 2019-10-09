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

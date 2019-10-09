Grape.Graph = function(config){

  this.graph = null;
  this.nodes = [];
  this.edges = [];

  this.parseConfig(config);

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

  addNode: function(node){

    this.nodes.push(new Grape.Node(this, node.id, node.label, node.x, node.y, node.size));

  },

  addNodes: function(nodes){

    for (i = 0; i < nodes.length; i++){
      this.addNode(nodes[i]);
    }

  },

  showNodes: function(){
    console.log(this.nodes);
  },

  addEdge: function(edge){

    this.edges.push(new Grape.Edge(this, edge.id, edge.source, edge.target));

  },

  addEdges: function(edges){

    for (i = 0; i < edges.length; i++){
      this.addEdge(edges[i]);
    }

  },

  showEdges: function(){
    console.log(this.edges);
  },

  nextNode: function(n){

    var nextNode = [];

    for (i=0; i < this.edges.length; i++){
      if (this.edges[i].source == n){
        nextNode.push(this.edges[i].target);
      }
    }
    return nextNode;
    
  },

  hasSuccessor: function(n){
    for (i=0; i < this.edges.length; i++){
      if (this.edges[i].source == n){
        console.log("true");
      }
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

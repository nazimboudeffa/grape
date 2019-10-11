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
    renderer = new Grape.Renderer(this.graph);
    renderer.render();

  },

  showDebugHeader: function (){

    var v = Grape.VERSION;
    console.log('Grape v' + v + ' | http://kawa-games.ovh/grapejs');

  }
};

Grape.Graph.prototype.constructor = Grape.Graph;

Grape.Node = function (graph, id, label, x ,y, size) {

  this.graph = graph;

  this.id = id;
  this.label = label;
  this.x = x;
  this.y = y;
  this.size = size;

}

Grape.Node.prototype.constructor = Grape.Node;

Grape.Edge = function (graph, id, source, target) {

this.graph = graph;

this.id = id;
this.source = source;
this.target = target;

}

Grape.Edge.prototype.constructor = Grape.Edge;

Grape.Renderer = function (graph) {

  this.graph = graph;
  this.canvas = null;
  this.context = null;

}

Grape.Renderer.prototype = {

  init: function(){

    this.canvas = document.getElementById("grape");
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");

  },

  render: function(){

    this.init();

    this.context.fillStyle = '#ff0000';
    this.context.beginPath();
    this.context.arc(
      200,
      100,
      5,
      0,
      Math.PI * 2,
      true
    );
    this.context.closePath();
    this.context.fill();

    this.context.fillStyle = '#ff0000';
    this.context.beginPath();
    this.context.arc(
      500,
      150,
      10,
      0,
      Math.PI * 2,
      true
    );
    this.context.closePath();
    this.context.fill();

    this.context.strokeStyle = '#ff0000';
    this.context.lineWidth = 1;
    this.context.beginPath();
    this.context.moveTo(
      200,
      100
    );
    this.context.lineTo(
      500,
      150
    );
    this.context.stroke();

  }
}

Grape.Renderer.prototype.constructor = Grape.Renderer;

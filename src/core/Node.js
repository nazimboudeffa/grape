Grape.Node = function (graph, id, label, x ,y, size) {

  this.graph = graph;

  this.id = id;
  this.label = label;
  this.x = x;
  this.y = y;
  this.size = size;

}

Grape.Node.prototype.constructor = Grape.Node;

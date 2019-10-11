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

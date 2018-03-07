(function(){
   CanvasRenderingContext20.prototype.triangle = function (x
      this.moveTo(x1,y1);
      this.lineTo(x2,y2);
      this.lineTo(x3,y3);
      this.closePath();
      this.stroke();
      }
})();
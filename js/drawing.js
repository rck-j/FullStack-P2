console.log("hello World");

function getCanvases() {
  console.log("getCanvases")
  var canvases = document.getElementsByClassName("tiles");

  return canvases;
}

function drawIt(canvases) {

  var drawings = canvases;

  for (var i = 0; i < drawings.length; i++){

    var FONT_COLOR  = '#FFFFFF';
    var FONT_FACE   = 'Oleo Script';
    var FONT_STYLE  = 'bold';
    var LINE_WIDTH  = .5;
    var LINKS       = ["AboutMe", "this.SourceCode", "GitHub", "LinkedIn"];

    var c = drawings[i];
    var width = c.width;
    var height = c.height;
    var ctx2 = c.getContext('2d');

    // ctx2.strokeStyle = '#DD0031';
    ctx2.strokeStyle = '#000000';

    for (var j = 0; j < 7000; j++) {
      ctx2.lineWidth = 0.10;
      ctx2.beginPath()

      var x = Math.random() * width;
      var y = Math.random() * height;
      var z = Math.random() * width;
      var a = Math.random() * height;

      ctx2.moveTo(parseInt((z)), parseInt((a)))
      ctx2.lineTo(z, a);
      ctx2.lineTo(x, y);
      ctx2.stroke();

    }
    var FONT_SIZE   = 35;
    var links  = LINKS[i];
    ctx2.font    = FONT_STYLE + " " + FONT_SIZE + "px " + FONT_FACE;
    do {
      FONT_SIZE--;
      ctx2.font    = FONT_STYLE + " " + FONT_SIZE + "px " + FONT_FACE;
    } while (ctx2.measureText(links).width > width)

    ctx2.textBaseline = "middle";
    ctx2.textAlign = "center";
    ctx2.fillStyle = "white";
    ctx2.fillText(links, parseInt(width/2), parseInt(height/2));

  }
}

function runIt() {

  var canvases = getCanvases()
  drawIt(canvases);

}

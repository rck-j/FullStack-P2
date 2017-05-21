console.log("hello World");

function runIt() {
  var canvas = document.getElementById('firstCanvas');
  var width = canvas.width;
  var height = canvas.height;
  console.log(width);
  console.log(height);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#DD0031';
  ctx.fillRect(0, 0, width, height);

  var c2 = document.getElementById('secondCanvas')
  var w2 = c2.width;
  var h2 = c2.height;

  var ctx2 = c2.getContext('2d');

  ctx2.beginPath();
  ctx2.strokeStyle = '#DD0031';
  ctx2.lineWidth = .008;

  for(let i=0; i < 800; i++) {

    let x = Math.random() * w2;
    let y = Math.random() * h2;
    let x_lineTo = Math.random() * w2;
    let y_lineTo = Math.random() * h2;
    ctx2.moveTo(x, y);
    ctx2.lineTo(x_lineTo, y_lineTo);
    ctx2.stroke();
  }
}

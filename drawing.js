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

  console.log(w2);
  console.log(h2);

  var ctx2 = c2.getContext('2d');


  // for(let i=0; i < 800; i++) {
  //
  //   let x = Math.random() * w2;
  //   let y = Math.random() * h2;
  //   let x_lineTo = Math.random() * w2;
  //   let y_lineTo = Math.random() * h2;
  //   ctx2.moveTo(x, y);
  //   ctx2.lineTo(x_lineTo, y_lineTo);
  //   ctx2.stroke();
  // }

  ctx2.strokeStyle = '#DD0031'; // TODO make this random.
  for (var j = 0; j < 1500; j++) {
    ctx2.lineWidth = 0.5;
    ctx2.beginPath()
    var x = Math.random() * width;
    var y = Math.random() * height;
    var z = Math.random() * width;
    var a = Math.random() * height;

    ctx2.moveTo(parseInt(z/2), parseInt(a/2))
    ctx2.lineTo(z, a);
    ctx2.lineTo(y, x);
    ctx2.stroke();
  }
}

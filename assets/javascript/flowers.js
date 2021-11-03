const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;

let number = 0;
let scale = 10;

function drawFlower() {
  let size = 20;
  let angle = number * 9.3;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = 'hsl(' + hue + ',100%,50%)';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
  hue += 0.5;
}

function animate() {
  drawFlower();
  if (number > 300) return;
  requestAnimationFrame(animate);
}
animate();

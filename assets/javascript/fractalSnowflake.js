const generateButton = document.querySelector('.generate-snowflake-button');

function snowflake() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxLevel = 3;
  const branches = 4;
  const sides = Math.floor(Math.random() * 10 + 3);
  const spread = Math.random() * 48 + 0.51;

  ctx.translate(canvas.width / 2, canvas.height / 2);

  const angle = Math.PI * 2 * spread;

  function drawLine(level) {
    if (level > maxLevel) return;

    ctx.strokeStyle = 'snow';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 0);
    ctx.stroke();

    for (let i = 0; i < branches + 1; i++) {
      ctx.save();
      ctx.translate((150 * i) / (branches + 1), 0);
      ctx.scale(0.5, 0.5);
      ctx.save();

      ctx.rotate(angle);
      drawLine(level + 1);
      ctx.restore();
      ctx.save();

      ctx.rotate(-angle);
      drawLine(level + 1);
      ctx.restore();

      ctx.restore();
    }
  }

  for (let i = 0; i < sides; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
  }
}
snowflake();

generateButton.addEventListener('click', snowflake);

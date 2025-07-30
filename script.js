const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 4,
  d: Math.random() * 40 + 5,
  color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  tilt: Math.random() * 10 - 10
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  update();
}

function update() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d / 10) + 1;
    c.x += Math.sin(c.d / 10);
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 30)

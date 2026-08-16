const scene = document.querySelector('.scene');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  document.querySelectorAll('.orb').forEach((orb, i) => {
    const distance = (i + 1) * 7;
    orb.style.transform = `translate(${x * distance}px, ${y * distance}px)`;
  });
});

const cube = document.querySelector('.cube');

if (cube) {
  let paused = false;

  cube.addEventListener('mouseenter', () => {
    paused = true;
  });

  cube.addEventListener('mouseleave', () => {
    paused = false;
  });

  setInterval(() => {
    if (!paused) {
      cube.style.transform =
        `rotateX(${Date.now() / 45 % 360}deg) rotateY(${Date.now() / 60 % 360}deg)`;
    }
  }, 50);
}

const ballArea = {
  border: 2,
  elem: document.querySelector('#ball-area'),
}

const ball =
{
  speed: 2,
  size: 50,
  x: 0,
  y: 0,
  direction: {
    x: -1,
    y: -1
  },
  elem: null
}

function createBall() {
  const ballElem = document.createElement('div');
  ballElem.setAttribute("id", "ball");

  ball.x = Math.random() * window.innerWidth;
  ball.y = Math.random() * window.innerHeight;

  ballArea.elem.appendChild(ballElem);
  ball.elem = ballElem;
  renderBall();
}

function renderBall() {
  ball.elem.style.left = `${ball.x}px`;
  ball.elem.style.top = `${ball.y}px`;
}

function moveBall(){
  let step = ball.speed;
  ball.x += step * ball.direction.x;
  ball.y += step * ball.direction.y;

  changeDirection();
}

function changeDirection() {
  const ballAreaRect = ballArea.elem.getBoundingClientRect();
  const ballRect = ball.elem.getBoundingClientRect();
  
  if(ballRect.left <= ballAreaRect.left + ballArea.border){
    ball.direction.x = 1;
  }

  if( ballRect.right >= ballAreaRect.right - ballArea.border){
    ball.direction.x = -1;
  }

  if(ballRect.top <= ballAreaRect.top + ballArea.border){
    ball.direction.y = 1;
  }

  if(ballRect.bottom >= ballAreaRect.bottom - ballArea.border){
    ball.direction.y = -1;
  }
}

function ballLoop() {
  moveBall();
  renderBall();
  requestAnimationFrame(ballLoop);
}

document.addEventListener('DOMContentLoaded', () => {
  createBall();
  requestAnimationFrame(ballLoop);
});

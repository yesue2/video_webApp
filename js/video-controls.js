const player = document.getElementById('my_video');
const playerBtn = document.getElementById("playerbtn");
const backBtn = document.getElementById('backbtn');
const goBtn = document.getElementById('gobtn');

function togglePlay(){
  if(player.paused){
    player.play()
    playerBtn.textContent = '❚❚';
  } else {
    player.pause()
    playerBtn.textContent = '►';
  }
}

function skipBack() {
  player.currentTime += parseFloat(backBtn.dataset.skip);
}

function skipForward() {
  player.currentTime += parseFloat(goBtn.dataset.skip);
}

playerBtn.addEventListener('click', togglePlay);
backBtn.addEventListener('click', skipBack);
goBtn.addEventListener('click', skipForward);


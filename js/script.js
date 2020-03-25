// WPIL'KA ^__^
let virus = document.getElementById('virus');
virus.addEventListener('click', function () {
  document.getElementById('soundClick').play();
});

let changeVirusPosition = function () {
  let randomX = Math.floor(Math.random() * document.documentElement.clientWidth);
  let randomY = Math.floor(Math.random() * document.documentElement.clientHeight);
  $("#virus").offset({ left: randomX, top: randomY });
};
let score = 0;
let speed = 2000;
let virusJump;
let yourLvl = 0;

$("#virus").click(function (e) {
  score++;
  $(".score__number").text(score);
});

let nextLevel = function () {
  $("#score, #virus, #level").addClass("d-none");
  $(".curtain-wrap").addClass("curtain");
  $(".title__text").text("Congratulations! You go to the next level!");
  $(".btn-start-play").text("Next level!");
  $(".title").slideDown(400);
  document.getElementById('soundNextLvl').play();
};

$("#virus").click(function (e) {
  if (score === 10) {
    endVirusJump();
    yourLvl++
    speed = 1700;
    $("body").css("background", "url(" + "img/bkg-2.jpg" + ") center/cover");
    $("body").css("cursor", "url(" + "../img/crosshair-2.png" + ") 25 25, auto");
    return nextLevel();
  }
  if (score === 20) {
    endVirusJump();
    yourLvl++
    speed = 1400;
    $("body").css("background", "url(" + "img/bkg-3.jpg" + ") center/cover");
    $("body").css("cursor", "url(" + "../img/crosshair-3.png" + ") 25 25, auto");
    return nextLevel();
  }
  if (score === 30) {
    endVirusJump();
    yourLvl++
    speed = 1100;
    $("body").css("background", "url(" + "img/bkg-4.jpg" + ") center/cover");
    return nextLevel();
  }
  if (score === 40) {
    endVirusJump();
    yourLvl++
    speed = 800;
    $("body").css("background", "url(" + "img/bkg-5.jpg" + ") center/cover");
    return nextLevel();
  }
  if (score === 50) {
    endVirusJump();
    yourLvl++
    speed = 500;
    $("body").css("background", "url(" + "img/bkg-6.jpg" + ") center/cover");
    return nextLevel();
  }
});

function startVirusJump() {
  virusJump = setInterval(changeVirusPosition, speed);
};
function endVirusJump() {
  clearInterval(virusJump);
}

// Button start PLAY
$(".btn-start-play").click(function (e) {
  $(".level__number").text(yourLvl);
  $(".title").slideUp(300);
  $(".curtain-wrap").removeClass("curtain");
  $("#score, #virus, #level").removeClass("d-none");
  changeVirusPosition();
  startVirusJump();
  // fix position of score number
  if (score > 9) {
    $(".score__number").css("left", "12px");
  }
});



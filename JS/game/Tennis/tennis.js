/**
 * Params
 */
var canvas // gonna be handle dimentions of our screen monitor
var canvasContext // underlying graphical information we can draw rectangle, circle and imgs too

var ballX = 50
var ballSpeedX = 10
var ballY = 50
var ballSpeedY = 5

var paddle1_Y,
  paddle2_Y = 250
const PADDLE_HEIGHT = 100
const PADDLE_THICKNESS = 5
const PADDLE_INTERVAL = 100
const ADMIT_RANGE = 20

var player1_Score = 0
var player2_Score = 0
const WINNING_SCORE = 3

var showingWinScreen = false

function calculateMousePos (evt) {
  var rect = canvas.getBoundingClientRect()
  var root = document.documentElement
  var mouseX = evt.clientX - rect.left - root.scrollLeft
  var mouseY = evt.clientY - rect.top - root.scrollTop
  return {
    x: mouseX,
    y: mouseY
  }
}

function handleMouseClick (evt) {
  if (showingWinScreen) {
    player1_Score = 0
    player2_Score = 0
    showingWinScreen = false
  }
}

window.onload = function () {
  // maybe await on load of page for making sure that all properties got loaded before start game
  canvas = document.getElementById('gameCanvas')
  canvasContext = canvas.getContext('2d')

  var framesPerSecond = 30
  setInterval(function () {
    moveEverything()
    drawEverything()
  }, 1000 / framesPerSecond)

  canvas.addEventListener('mousedown', handleMouseClick)

  canvas.addEventListener('mousemove', function (evt) {
    var mousePos = calculateMousePos(evt)
    paddle1_Y = mousePos.y - PADDLE_HEIGHT / 2
  })
}

// function moveEverything() {
//  if (ballX > 800) { ballSpeedX < 0 ? ballSpeedX : ballSpeedX *= //-1; acc = -1 }
//  if (ballX < 0) { ballSpeedX > 0 ? ballSpeedX : ballSpeedX *= -1; //acc = +1 }
//
//  ballX = ballX + ballSpeedX
//  ballSpeedX += acc
// }

function ballReset () {
  if (player1_Score >= WINNING_SCORE || player2_Score >= WINNING_SCORE) {
    showingWinScreen = true
  }

  ballSpeedX *= -1
  ballX = canvas.width / 2
  ballY = canvas.height / 2
}

function computerMovement () {
  var paddle2_Y_Center = paddle2_Y + PADDLE_HEIGHT / 2
  if (paddle2_Y_Center < ballY - 35) {
    paddle2_Y += 6
  } else if (paddle2_Y_Center > ballY + 35) {
    paddle2_Y -= 6
  }
}

function moveEverything () {
  if (showingWinScreen == true) {
    return
  }
  computerMovement()

  ballX += ballSpeedX
  ballY += ballSpeedY

  if (
    PADDLE_INTERVAL - ADMIT_RANGE < ballX &&
    ballX < PADDLE_INTERVAL + PADDLE_THICKNESS + ADMIT_RANGE
  ) {
    if (paddle1_Y < ballY && ballY < paddle1_Y + PADDLE_HEIGHT) {
      ballSpeedX < 0 ? (ballSpeedX *= -1) : ballSpeedX
      var deltaY = ballY - (paddle1_Y + PADDLE_HEIGHT / 2)
      ballSpeedY = deltaY * 0.35
    }
  }
  if (ballX < 0) {
    player2_Score++ // must be BEFORE ballReset()
    ballReset()
  }

  if (
    canvas.width - (PADDLE_INTERVAL + PADDLE_THICKNESS + ADMIT_RANGE) < ballX &&
    ballX < canvas.width - PADDLE_INTERVAL + ADMIT_RANGE
  ) {
    if (paddle2_Y < ballY && ballY < paddle2_Y + PADDLE_HEIGHT) {
      ballSpeedX < 0 ? ballSpeedX : (ballSpeedX *= -1)
      var deltaY = ballY - (paddle2_Y + PADDLE_HEIGHT / 2)
      ballSpeedY = deltaY * 0.35
    }
  }
  if (ballX > canvas.width) {
    player1_Score++ // must be BEFORE ballReset()
    ballReset()
  }

  if (ballY > canvas.height || ballY < 0) {
    ballSpeedY *= -1
  }
}

function drawNet () {
  for (var i = 0; i < canvas.height; i += 40) {
    colorRect(canvas.width / 2 - 1, i, 2, 20, 'white')
  }
}

function drawEverything () {
  // next line blanks out the screen with black
  colorRect(0, 0, canvas.width, canvas.height, 'black')

  if (showingWinScreen == true) {
    canvasContext.fillStyle = 'white'

    if (player1_Score >= WINNING_SCORE) {
      canvasContext.font = '50px Georgia'
      canvasContext.fillText('Left Player Won !', 220, 200)
    } else if (player2_Score >= WINNING_SCORE) {
      canvasContext.font = '50px Georgia'
      canvasContext.fillText('Right Player Won !', 220, 200)
    }
    canvasContext.font = '20px Georgia'
    canvasContext.fillText('Click to continue', 340, 500)
    return
  }

  drawNet()

  // this is left player paddle
  colorRect(
    PADDLE_INTERVAL,
    paddle1_Y,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    'white'
  )
  // this is right player paddle
  colorRect(
    canvas.width - PADDLE_INTERVAL - PADDLE_THICKNESS,
    paddle2_Y,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    'white'
  )

  // next line draws the ball
  colorCircle(ballX, ballY, 10, 'white')

  canvasContext.font = '20px Georgia'
  canvasContext.fillText(player1_Score, 100, 100)
  canvasContext.fillText(player2_Score, canvas.width - 100, 100)
}

// Helper Functions
function colorCircle (centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor
  canvasContext.beginPath()
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
  canvasContext.fill()
}

function colorRect (leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor
  canvasContext.fillRect(leftX, topY, width, height)
}

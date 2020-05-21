const canv = document.getElementById("canvas");
const cnv = canv.getContext('2d');
var scoreS = document.getElementById('score');
console.log("asda");

let box = 20;
var initSize = 4;
let canvH = 500;
let canvW = 500;
let direction = "r";
score = 0;
function drawSnake(x,y){
    cnv.fillStyle = "blue";
    cnv.fillRect(x*box,y*box,box,box);
    cnv.fillStyle = "white";
    cnv.strokeRect(x*box,y*box,box,box);
}

function drawApple(x,y){
    cnv.fillStyle = "red";
    cnv.fillRect(x*box,y*box,box,box);
    cnv.fillStyle = "white";
    cnv.strokeRect(x*box,y*box,box,box);
}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(25));
}

let snake = [];
var apple = {
    x: getRandomInt(),
    y: getRandomInt()
  };


for(var i = initSize-1; i >= 0;i--){
    snake.push(
        {
            x:i + 9,
            y:12
        }
    );

}

count = 0;

document.addEventListener("keydown", getDir);

function getDir(e){
    if (e.which == 37 && direction != "r"){
        direction = "l";
    } else if (e.which == 38 && direction != "d"){
        direction = "u";
    } else if (e.which == 39 && direction != "l"){
        direction = "r";
    } else if (e.which== 40 && direction != "u"){
        direction = "d";
    }
}




function loop() {

    requestAnimationFrame(loop);
    if (++count < 5) {
        return;
    }

    count = 0;
    cnv.clearRect(0,0,500,500);

    
    snake.pop();
    var hSnakeX = snake[0].x;
    var hSnakeY = snake[0].y;


    switch(direction){
        case "l":
            hSnakeX--;
            break;
        case "r":
            hSnakeX++;
            break;
        case "u":
            hSnakeY--;
            break;
        case "d":
            hSnakeY++;
            break;
    }


    var newHead = {
        x: hSnakeX,
        y: hSnakeY
    }
    snake.unshift(newHead);

    drawApple(apple.x,apple.y);

    // if snake hit itself
    for(i = 1;i < snake.length;i++){
        if ( hSnakeX == snake[i].x && hSnakeY == snake[i].y){
            while(snake.length!=4){
                snake.pop();
            }
            score = 0;
            scoreS.innerHTML = score;
            console.log(score)
            
        }
    }
   


    // if snake ate apple
    if(apple.x == snake[0].x && apple.y == snake[0].y){
        snake.unshift(newHead);
        apple = {
            x: getRandomInt(),
            y: getRandomInt()
          };
          console.log(snake.length);
          score++;
          scoreS.innerHTML = score;
          console.log(score)
    } 


    scoreS.innerHTML = score;

    for(var i = 0; i < snake.length;i++){
        //warp hor
        if (snake[i].x < 0) {
            snake[i].x = 25;
        }
        else if (snake[i].x >= 25) {
            snake[i].x = 0;
        }
        
        // warp vertical
        if (snake[i].y < 0) {
            snake[i].y = 25;
        }
        else if (snake[i].y >= 25) {
            snake[i].y = 0;
        }

        let a = snake[i].x;
        let b = snake[i].y;
        drawSnake(a,b);
    }


 

    
}

requestAnimationFrame(loop);

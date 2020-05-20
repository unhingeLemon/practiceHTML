const canv = document.getElementById("canvas");
const cnv = canv.getContext('2d');

console.log("asda");

box = 20;



function drawSnake(x,y){
    cnv.fillStyle = "blue";
    cnv.fillRect(x*box,y*box,box,box);
    cnv.fillStyle = "white";
    cnv.strokeRect(x*box,y*box,box,box);
}



function draw(){
    for(i = 0; i < 5;i++){
        drawSnake(i,13);
    }
}



setInterval(draw,60);
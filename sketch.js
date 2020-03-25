const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grid = [], dot;
var line;

function setup(){
    createCanvas(450, 450);
}

function draw(){
    //background(255);

    dotLoop();
    dotline();
    drawSprites();
}

function dotLoop(){
    for(var y = 2; y < 22; y++){
        for(var x = 2; x < 22; x++){
            dot = createSprite(x*20, y*20, 3, 3);
            grid.push(dot);
        }
    }
}
function dotline(){
    for(var dotL = 0; dotL < 400; dotL++){
        //grid[dotL];
        if (mousePressedOver(grid[dotL])){
            if(dotL >= 20){
                console.log("top");
                var top = createSprite(grid[dotL].x, grid[dotL].y - 10, 3, 20);
            }
            if(dotL < 380){
                console.log("bottom");
                var bottom = createSprite(grid[dotL].x, grid[dotL].y + 10, 3, 20);
            }
            if(dotL % 20 !== 0){
                console.log("left");
                var left = createSprite(grid[dotL].x - 10, grid[dotL].y, 20, 3);
            }
            if((dotL + 1) % 20 !== 0){
                console.log("right");
                var right = createSprite(grid[dotL].x + 10, grid[dotL].y, 20, 3);
            }
            
        }
        console.log(frameCount);
    }
}

//declaring the variables
var car,weight,deformation,speed,gameState,wall;

//function for creating sprites and canvas
function setup() 
{
    createCanvas(1600,400);
    car=createSprite(40,200,20,20);
    wall=createSprite(960,200,20,300);
    gameState="play";
    deformation=0;
    weight=random(400,1500);
    speed=random(55,100);
}

function draw() 
{
    //setting the background color
    background("black");
    
    //shape color for the car
    car.shapeColor="white";
    
    //shapecolor for wall
    wall.shapeColor="white";
    
    
    
    
    
    //moving the car after space is pressed and gameState equals play
    if(gameState==="play"&& keyDown("space"))
    {
    car .velocityX=speed;
    }
    
    //algorithm for colliding the car with the wall
    if(wall.x-car.x<(wall.width-car.width)/2 && gameState==="play")
    {
        gameState="gameOver"
        deformation=0.25*speed*speed*weight/22500;
        car.velocityX=0;
        console.log(deformation);
    }
    
    //changing the gamestate and giving different colors to the car ont the basis of different value of deformation
    if(deformation>180 && gameState==="gameOver" )
{
    car.shapeColor="red";
    console.log(deformation);

}
    if(deformation>100 && deformation<180&& gameState==="gameOver")
    {
        car.shapeColor="yellow";
        console.log(deformation);
    }


    if(deformation<100&& gameState==="gameOver")
    {
        car.shapeColor="blue";
        console.log(deformation);
    }

    //function for drawing the sprites
    drawSprites();

}

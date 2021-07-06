
var player,gold1,gold2,gold3,gold4,gold5,gold6,gold7,gold8,gold9,gold10
var dimond1,dimond2,dimond3,dimond4,dimond5
var score=0
var goldimg,dimondimg,coalimg,minerimg
var time
var shadow
var chest1,chest2,chest3,chest4,chest5
var chestimg
var snake1,snake2,snake3,snake4,snake5
var snakeimg
var oceanbg
var oceanimgbg
var player2
var frame=0
var score1=0
var time1

function preload(){
goldimg=loadImage("gold.png")
dimondimg=loadImage("dimond.png")
coalimg=loadImage("coal.png")
minerimg=loadImage("miner.png")
chestimg=loadImage("parl.png")
snakeimg=loadImage("scarySnake.png")
oceanimgbg=loadImage("ocean.jpeg")
}
function setup(){
createCanvas(1200,800)
oceanbg=createSprite(600,400)
oceanbg.visible=false
oceanbg.addImage(oceanimgbg)
player2=createSprite(600,15)
player2.addImage(minerimg)




player2.scale=0.1
player2.visible=false
oceanbg.scale=2


player=createSprite(100,100)
player.addImage(minerimg)
player.scale=0.1
player.setCollider("circle",0,0,1000)
player.debug=true



gold1=createSprite(random(1,1200),random(1,800))
gold2=createSprite(random(1,1200),random(1,800))
gold3=createSprite(random(1,1200),random(1,800))
gold4=createSprite(random(1,1200),random(1,800))
gold5=createSprite(random(1,1200),random(1,800))
gold6=createSprite(random(1,1200),random(1,800))
gold7=createSprite(random(1,1200),random(1,800))
gold8=createSprite(random(1,1200),random(1,800))
gold9=createSprite(random(1,1200),random(1,800))
gold10=createSprite(random(1,1200),random(1,800))



gold1.addImage(goldimg)
gold2.addImage(goldimg)
gold3.addImage(goldimg)
gold4.addImage(goldimg)
gold5.addImage(goldimg)
gold6.addImage(goldimg)
gold7.addImage(goldimg)
gold8.addImage(goldimg)
gold9.addImage(goldimg)
gold10.addImage(goldimg)


gold1.scale=0.2
gold2.scale=0.2
gold3.scale=0.2
gold4.scale=0.2
gold5.scale=0.2
gold6.scale=0.2
gold7.scale=0.2
gold8.scale=0.2
gold9.scale=0.2
gold10.scale=0.2



gold1.visible=false
gold2.visible=false
gold3.visible=false
gold4.visible=false
gold5.visible=false
gold6.visible=false
gold7.visible=false
gold8.visible=false
gold9.visible=false
gold10.visible=false




dimond1=createSprite(random(1,1200),random(1,800))
dimond2=createSprite(random(1,1200),random(1,800))
dimond3=createSprite(random(1,1200),random(1,800))
dimond4=createSprite(random(1,1200),random(1,800))
dimond5=createSprite(random(1,1200),random(1,800))


dimond1.addImage(dimondimg)
dimond2.addImage(dimondimg)
dimond3.addImage(dimondimg)
dimond4.addImage(dimondimg)
dimond5.addImage(dimondimg)


dimond1.scale=0.2
dimond2.scale=0.2
dimond3.scale=0.2
dimond4.scale=0.2
dimond5.scale=0.2



dimond1.visible=false
dimond2.visible=false
dimond3.visible=false
dimond4.visible=false
dimond5.visible=false


shadow=createSprite(player.x,player.y)
shadow.shapeColor="red"



chest1=createSprite(random(1,1200),700)
chest2=createSprite(random(1,1200),700)
chest3=createSprite(random(1,1200),700)
chest4=createSprite(random(1,1200),700)
chest5=createSprite(random(1,1200),700)

chest1.addImage(chestimg)
chest2.addImage(chestimg)
chest3.addImage(chestimg)
chest4.addImage(chestimg)
chest5.addImage(chestimg)



chest1.visible=false
chest2.visible=false
chest3.visible=false
chest4.visible=false
chest5.visible=false




snake1=createSprite(1200,random(200,800))
snake2=createSprite(1200,random(200,800))
snake3=createSprite(1200,random(200,800))
snake4=createSprite(1200,random(200,800))
snake5=createSprite(1200,random(200,800))


snake1.addImage(snakeimg)
snake2.addImage(snakeimg)
snake3.addImage(snakeimg)
snake4.addImage(snakeimg)
snake5.addImage(snakeimg)


snake1.visible=false
snake2.visible=false
snake3.visible=false
snake4.visible=false
snake5.visible=false

snake1.scale=0.3
snake2.scale=0.3
snake3.scale=0.3
snake4.scale=0.3
snake5.scale=0.3

chest1.scale=0.2
chest2.scale=0.2
chest3.scale=0.2
chest4.scale=0.2
chest5.scale=0.2


snake1.velocityX=-4
snake2.velocityX=-3
snake3.velocityX=-4
snake4.velocityX=-2
snake5.velocityX=-4



}






function draw(){
    background("grey")
drawSprites()
if(keyDown(UP_ARROW)){
    player.y=player.y-2.5
}
if(keyDown(DOWN_ARROW)){
    player.y=player.y+2.5
}
if(keyDown( LEFT_ARROW)){
    player.x=player.x-2.5
}
if(keyDown(RIGHT_ARROW)){
    player.x=player.x+2.5
}




if(player.isTouching(gold1)){
    gold1.visible=true
}
if(player.isTouching(gold2)){
    gold2.visible=true
}
if(player.isTouching(gold3)){
    gold3.visible=true
}
if(player.isTouching(gold4)){
    gold4.visible=true
}
if(player.isTouching(gold5)){
    gold5.visible=true
}
if(player.isTouching(gold6)){
    gold6.visible=true
}
if(player.isTouching(gold7)){
    gold7.visible=true
}
if(player.isTouching(gold8)){
    gold8.visible=true
}
if(player.isTouching(gold9)){
    gold9.visible=true
}
if(player.isTouching(gold10)){
    gold10.visible=true
}



if(player.isTouching(dimond1)){
    dimond1.visible=true
}
if(player.isTouching(dimond2)){
    dimond2.visible=true
}
if(player.isTouching(dimond3)){
    dimond3.visible=true
}
if(player.isTouching(dimond4)){
    dimond4.visible=true
}
if(player.isTouching(dimond5)){
    dimond5.visible=true
}


if(keyDown("space") && player.isTouching(gold1)){
    gold1.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold2)){
    gold2.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold3)){
    gold3.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold4)){
    gold4.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold5)){
    gold5.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold6)){
    gold6.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold7)){
    gold7.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold8)){
    gold8.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold9)){
    gold9.x=10000
    score=score+2
}
if(keyDown("space") && player.isTouching(gold10)){
    gold10.x=10000
    score=score+2
}


if(keyDown("space") && player.isTouching(dimond1)) {
    dimond1.x=10000
    score=score+5
}
if(keyDown("space") && player.isTouching(dimond2)) {
    dimond2.x=10000
    score=score+5
}
if(keyDown("space") && player.isTouching(dimond3)) {
    dimond3.x=10000
    score=score+5
}
if(keyDown("space") && player.isTouching(dimond4)) {
    dimond4.x=10000
    score=score+5
}
if(keyDown("space") && player.isTouching(dimond5)) {
    dimond5.x=10000
    score=score+5
}



shadow.x=player.x
shadow.y=player.y

player.depth=shadow.depth
player.depth=player.depth+1

//camera.x=player.x
//camera.y=player.y 
time=frameCount
fill("black")
textSize(20)
text("time:"+time,100,50)
textSize(22)
text("FIND ALL DIAMONDS AND GOLD TO PASS TO THE NEXT LEVEL",400,50)
text("if you reach 45 points you will move on to the next level",420,100)
textSize(25)
fill("black")
text("Score:"+score,600,400)
console.log(frameCount)
if(frameCount >1500 && score !==45){
    background("black")
   fill("red")
    text("YOU LOSE TRY AGAIN",600,400)
    text("to play again press the reload button",450,500)

}

if(score >45 ){
level2()



}
}function level2(){






    oceanbg.visible=true
    drawSprites()
    gold1.visible=false
gold2.visible=false
gold3.visible=false
gold4.visible=false
gold5.visible=false
gold6.visible=false
gold7.visible=false
gold8.visible=false
gold9.visible=false
gold10.visible=false

dimond1.visible=false
dimond2.visible=false
dimond3.visible=false
dimond4.visible=false
dimond5.visible=false

chest1.visible=true
chest2.visible=true
chest3.visible=true
chest4.visible=true
chest5.visible=true

snake1.visible=true
snake2.visible=true
snake3.visible=true
snake4.visible=true
snake5.visible=true

player2.visible=true
player.destroy()

if(keyDown(UP_ARROW)){
    player2.y=player2.y-2.5
}
if(keyDown(DOWN_ARROW)){
    player2.y=player2.y+2.5
}
if(keyDown( LEFT_ARROW)){
    player2.x=player2.x-2.5
}
if(keyDown(RIGHT_ARROW)){
    player2.x=player2.x+2.5
}
player2.setCollider("rectangle",0,0,50,50)
player2.debug=true



shadow.visible=false

/*createEdgeSprites()
snake1.bounceOff(edges)
snake2.bounceOff(edges)
snake3.bounceOff(edges)
snake4.bounceOff(edges)
snake5.bounceOff(edges)
*/

if(keyDown("space") && player2.isTouching(chest1)){
chest1.x=10000
score1=score1+10
}
if(keyDown("space") && player2.isTouching(chest2)){
    chest2.x=10000
    score1=score1+10
    }
    if(keyDown("space") && player2.isTouching(chest3)){
        chest3.x=10000
        score1=score1+10
        }
        if(keyDown("space") && player2.isTouching(chest4)){
            chest4.x=10000
            score1=score1+10
            }
            if(keyDown("space") && player2.isTouching(chest5)){
                chest5.x=10000
                score1=score1+10
                }


  if(player2.isTouching(snake1) || player2.isTouching(snake2) || player2.isTouching(snake3) || player2.isTouching(snake4)
  || player2.isTouching(snake5)){
      player2.velocityY=5
     
  }      
  
  if(player2.velocityY===5){
 textSize(30)
      fill("red")
      text("YOU LOOSE",600,400)

  }

  if(snake1.x<0){
  snake1.x=1200    
  }
  if(snake2.x<0){
    snake2.x=1200    
    }
    if(snake3.x<0){
        snake3.x=1200    
        }
        if(snake4.x<0){
            snake4.x=1200    
            }
            if(snake5.x<0){
                snake5.x=1200    
                }
                
                
            
                

                



   textSize(20)
   fill("black")
text("score:"+score1,30,30)



time1=frameCount
text(time1,500,30)


if(frameCount>1500 && frameCount<2500){
player2.y>300
}

if(frameCount>1500 && frameCount<3500 && score1===50 && player2.y<200){
    textSize(30)
    fill("black")
    text("YOU WON!!!",600,400)
}
else if(frameCount>3500){
    
    textSize(30)
    fill("red")
    text("YOU LOOSE",600,400)

}
  
textSize(30)
fill("black")
text("collect all 5 pearls and reach the top before timer turns 3500",300,50)
}

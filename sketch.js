const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var g1Dress;
var g2Ball;
var g3Aeroplane;
var g4Robot;
var g5Teddy;
var ground1,ground2;
var ring1;
var ring2,ring3,ring4;
var p1Trophy;

var g1Cup, g2Toy, g3Train;
var ring5,ring6,ring7;

var score;

var LEV1=1;
var LEV2=2;
var gamestate=LEV1;



function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    g1Dress =new Gift1(200,100,55,55);
    g2Ball =new Gift2(400,100,55,55);
    g3Aeroplane =new Gift3(600,100,55,55);
    g4Robot =new Gift4(800,100,55,55);
    g5Teddy =new Gift5(1000,100,55,55);
    

   
        g1Cup =new Gift6(200,100,55,55);
        g2Toy =new Gift7(300,100,55,55);
        g3Train =new Gift8(400,100,55,55);
    

    ring2 =new Ring2(width/2.5,height-200,100,100);
    ring3 =new Ring2(width/2,height-200,100,100);
    ring4 =new Ring2(width/1.5,height-200,100,100);

    ring5 =new Ring2(width/2.5,height-200,100,100);
    ring6 =new Ring2(width/2,height-200,100,100);
    ring7 =new Ring2(width/1.5,height-200,100,100);

    ground1 =new Ground(width/2,height-10,width,20);

    //p1Trophy =new Prize(600,600,100,100);

    score=0;
}

function draw(){
    background("lightblue");
    text("Score: "+ score, 100,50);
    Engine.update(engine);

    if (gamestate===LEV1){
    g1Dress.display();
    g2Ball.display();
    g3Aeroplane.display();
    g4Robot.display();
    g5Teddy.display();
    ring2.display();
    //Matter.Body.setStatic(ring2.body,false);
   ring3.display();
    ring4.display();
    }

    

    ground1.display();
    

    if (gamestate===LEV2){
    g1Cup.display();
    g2Toy.display();
    g3Train.display();
    ring5.display();
    ring6.display();
    ring7.display();
    }

    //p1Trophy.display();

    //isTouching function for rings.
    if(isTouching(ring2.body,g1Dress.body)){
        Matter.Body.setStatic(g1Dress.body,false);
        score=score+10;
        //ring3.display();
        }
    if(isTouching(ring2.body,g2Ball.body)){
        Matter.Body.setStatic(g2Ball.body,false);
        score=score+20;
        //ring3.display();
        }
    if(isTouching(ring2.body,g3Aeroplane.body)){
        Matter.Body.setStatic(g3Aeroplane.body,false);
        score=score+30;
        //ring3.display();
        }   
    if(isTouching(ring2.body,g4Robot.body)){
        Matter.Body.setStatic(g4Robot.body,false);
        score=score+40;
        //ring3.display();
        }
    if(isTouching(ring2.body,g5Teddy.body)){
        Matter.Body.setStatic(g5Teddy.body,false);
        score=score+50;
        //ring3.display();
        } 
    //ring3
        if(isTouching(ring3.body,g1Dress.body)){
          Matter.Body.setStatic(g1Dress.body,false);
          score=score+10;
          //ring4.display();
          }
  
      if(isTouching(ring3.body,g2Ball.body)){
          Matter.Body.setStatic(g2Ball.body,false);
          score=score+20;
          //ring4.display();
          }
      if(isTouching(ring3.body,g3Aeroplane.body)){
          Matter.Body.setStatic(g3Aeroplane.body,false);
          score=score+30;
          //ring4.display();
          }   
      if(isTouching(ring3.body,g4Robot.body)){
          Matter.Body.setStatic(g4Robot.body,false);
          score=score+40;
          //ring4.display();
          }
      if(isTouching(ring3.body,g5Teddy.body)){
          Matter.Body.setStatic(g5Teddy.body,false);
          score=score+50;
          //ring4.display();
          } 
    //ring4
          if(isTouching(ring4.body,g1Dress.body)){
            Matter.Body.setStatic(g1Dress.body,false);
            score=score+10;
            }
    
        if(isTouching(ring4.body,g2Ball.body)){
            Matter.Body.setStatic(g2Ball.body,false);
            score=score+20;
            }
        if(isTouching(ring4.body,g3Aeroplane.body)){
            Matter.Body.setStatic(g3Aeroplane.body,false);
            score=score+30;
            }   
        if(isTouching(ring4.body,g4Robot.body)){
            Matter.Body.setStatic(g4Robot.body,false);
            score=score+40;
            }
        if(isTouching(ring4.body,g5Teddy.body)){
            Matter.Body.setStatic(g5Teddy.body,false);
            score=score+50;
            }    
            
        //ring5(lev2)
        if(isTouching(ring5.body,g1Cup.body)){
            Matter.Body.setStatic(g1cup.body,false);
            score=score+10;
            }   
        if(isTouching(ring5.body,g2Toy.body)){
             Matter.Body.setStatic(g2Toy.body,false);
            score=score+20;
            } 
        if(isTouching(ring5.body,g3Train.body)){
             Matter.Body.setStatic(g3Train.body,false);
            score=score+30;
            }   
        //ring6(lev2)
        if(isTouching(ring6.body,g1Cup.body)){
            Matter.Body.setStatic(g1Cup.body,false);
            score=score+10;
            }   
        if(isTouching(ring6.body,g2Toy.body)){
             Matter.Body.setStatic(g2Toy.body,false);
            score=score+20;
            } 
        if(isTouching(ring6.body,g3Train.body)){
             Matter.Body.setStatic(g3Train.body,false);
            score=score+30;
            }  
        //ring7(lev2)  
        if(isTouching(ring7.body,g1Cup.body)){
            Matter.Body.setStatic(g1Cup.body,false);
            score=score+10;
            }   
        if(isTouching(ring7.body,g2Toy.body)){
             Matter.Body.setStatic(g2Toy.body,false);
            score=score+20;
            } 
        if(isTouching(ring7.body,g3Train.body)){
             Matter.Body.setStatic(g3Train.body,false);
            score=score+30;
            }   
   



            /*var r=Math.round(random(-900,900));
            var r2=Math.round(random(-900,900));
            var r3=Math.round(random(-900,900));
            var r4=Math.round(random(-900,900));
            var r5=Math.round(random(-900,900));
            var r6=Math.round(random(-900,900));*/

    if(score>50){
    gamestate=LEV2;
}

}

function keyPressed(){
    //key 1= ring2, key 2= ring3, key 3= ring4.
if (keyCode===49){
   // Matter.Body.setStatic(ring2.body,false);
Matter.Body.applyForce(ring2.body,ring2.body.position,{x:1000,y:-900});
}
if (keyCode===50){
   // Matter.Body.setStatic(ring3.body,false);
Matter.Body.applyForce(ring3.body,ring3.body.position,{x:-1000,y:900});
  }
if (keyCode===51){
    //Matter.Body.setStatic(ring4.body,false);
Matter.Body.applyForce(ring4.body,ring4.body.position,{x:1000,y:900});
}

// key 4= ring5, key 5= ring6, key 6= ring7.
if (keyCode===52){
    //Matter.Body.setStatic(ring5.body,false);
Matter.Body.applyForce(ring5.body,ring5.body.position,{x:1000,y:-900});
}
if (keyCode===53){
   // Matter.Body.setStatic(ring6.body,false);
Matter.Body.applyForce(ring6.body,ring6.body.position,{x:-2000,y:900});
}
if (keyCode===54){
   // Matter.Body.setStatic(ring7.body,false);
Matter.Body.applyForce(ring7.body,ring7.body.position,{x:2000,y:1000});
}
}

//function isTouching
function isTouching(object1, object2){

    if(object1.position.x-object2.position.x<78
      && object2.position.x-object1.position.x<78
      &&object1.position.y-object2.position.y<78
      &&object2.position.y-object1.position.y<78){
      return true
      } else {
          return false
  
     }
     
  }

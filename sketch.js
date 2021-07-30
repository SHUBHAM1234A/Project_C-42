var iss,hasDocked,dock;
var issImg,dockImg,right,left,up,bg,c,d,x,l;
var sound;

function preload(){
  issImg = loadImage("Images/iss.png");
  dockImg = loadImage("Images/dock.png");
  right = loadImage("Images/right.png");
  left = loadImage("Images/left.png");
  up = loadImage("Images/up.png");
  bg = loadImage("Images/spacebg.jpg");
  x = loadImage("Images/x.png");
  sound = loadSound("Portal Mysterious Space Background Music No Copyright.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  sound.loop()

  iss = createSprite(width/2,height/2);
  iss.addImage(issImg);
  
  c=createSprite(iss.x-70,iss.y+30, 10, 10);
  c.visible = false;
  
  dock = createSprite(random(c.x-200,c.x+200),iss.y+200);
  dock.addImage(dockImg);
  dock.scale = 0.3;

  d=createSprite(dock.x,dock.y,10,10);
  d.visible = false;  
noStroke();
  l=createSprite(235,270,267,3);
  l.shapeColor = "white";
}

function draw() {
  background(bg);  
  drawSprites();
  d.x = dock.x;
  d.y = dock.y-90;

  image(x,100,100);
  fill(255);
  textSize(20);
    text("Dock like this",170,85);

  if(keyDown("r")){
    dock.x = iss.x;
  }

  if(d.isTouching(c)){
    hasDocked = true;
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("DOCKING SUCCESSFUL",dock.x,dock.y+100);
  }

  if(!hasDocked){
    if(keyIsDown(LEFT_ARROW)){
      dock.x -= 3;
      dock.addImage(left);
    }
    if(keyIsDown(UP_ARROW)){
      dock.y -= 3;
      dock.addImage(up);
    }
    if(keyIsDown(RIGHT_ARROW)){
      dock.x += 3;
      dock.addImage(right);
    }
    if(keyDown(DOWN_ARROW)){
      dock.y += 3;
      dock.addImage(up);
    }
  }
}

var angle = 0;	// initialize angle variable
var scalar = 130;  // set the radius of circle
var startX = 200;	// set the x-coordinate for the circle center
var startY = 200;


let ellipseRadius = ellipseDiameter/2;
function setup(){
   
    const myCanvas = createCanvas(700,400);

    myCanvas.parent('myCanvas');

    console.log("Set Up")
    background(255);
    angleMode(DEGREES);
    
    //background color
    //rgb
    background(250,150,20);
    frameRate(60);
    sColor = color(255);

}


function draw(){

    background(200);

    frameRate(5);
    let x = random(width);
    let y = random(height);
  
    strokeWeight(5);
    point(x, y);
  

    let starts = ['*','**','***','****','****']

    let start = random(starts);

    function display_text(){
        //flashing text
        for (let i = 0; i < 10; i++) {
            fill(0, 102, 153);
            text(start, i * 20, i * 40);
            text(start, i * 40, i * 40);
            text(start, i * 70, i * 40);
            text(start, i * 150, i * 40);
            text(start, i * 190, i * 40);
          }
    }
    colorMode(HSB,360,100,100);

    sColor = color(frameCount%360,100,100);
  
    stroke(sColor);
    noFill();
    
    function draw_ears(two_hundered){
        // left eye
        ellipse(two_hundered,two_hundered,50,50);
        // right eye
        ellipse(400,two_hundered,50,50);
         // Bright red
        fill(two_hundered+20,0,0);
        ellipse(20,20,16,16);
    }
    draw_ears(200);

    function draw_face(){
        // face
        ellipse(300,200,200,200);
        draw_eyes();
        fill(127,0,0);
        ellipse(40,20,16,16);
        draw_nose();
        draw_eyes_inside();
        draw_mouth();
    }

    function draw_eyes(){
        // left eye
        ellipse(250,180,50,50);
        // right eye
        ellipse(350,180,50,50);
    }

    function draw_nose(){
        // nose
        ellipse(300,180,5,50);
         // Pink (pale red)
        fill(255,200,200);
        ellipse(60,20,16,16);
    }
    
    function draw_mouth(){
        // mouth
        rect(250,240,90,30);
    }

    function draw_eyes_inside(){
        // left eye
        ellipse(250,180,30,50);
        // right eye
        ellipse(350,180,30,50);
    }
    function draw1_circle() {
        var x = startX + scalar * cos(angle);
        var y = startY + scalar * sin(angle);
        
        ellipse(x, y, 8);
        
        angle++;
      }

      function draw2_circle() {
        var x = startX+5 + scalar * cos(angle);
        var y = startY+5 + scalar * sin(angle);
        
        ellipse(x, y, 3);
        
        angle++;	
      }

      function draw3_circle() {
        var x = startX+10 + scalar * cos(angle);
        var y = startY+10 + scalar * sin(angle);
        
        ellipse(x, y, 3);
        
        angle++;	
      }
    draw_ears();
    draw_face();
    draw1_circle();
    draw2_circle();
    draw3_circle();
    display_text();
   

   
    
}

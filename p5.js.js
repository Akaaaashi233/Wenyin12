function setup() {
 createCanvas(700,700);

      background(255);

      noStroke();

  }



  function draw(){

      for(let i = 0;i < 1000;i++){

          fill(0,30);

          var x = mouseX + random(-50,50);

      var y = mouseY + random(-50,50);

          ellipse(x , y, 2, 2);

      }

  }
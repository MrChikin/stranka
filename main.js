var duck = document.querySelector(".duck");
var blood = document.querySelector(".blood"); 
var body = document.querySelector("body");
document.addEventListener("click", function(){
    var mouseMoveListener = function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    var imageX = duck.offsetLeft;
    var imageY = duck.offsetTop;
  
    var dx = mouseX - imageX;
    var dy = mouseY - imageY;
  
    var angle = Math.atan2(dy, dx);
    var speed = 5;
  
    var velocityX = Math.cos(angle) * speed;
    var velocityY = Math.sin(angle) * speed;
  
    var newX = imageX + velocityX;
    var newY = imageY + velocityY;
  
    duck.style.left = newX + 'px';
    duck.style.top = newY + 'px';
    
    quack.play();
    if (newX > imageX ){
        duck.style.transform ='scaleX(1)';
    };
    if (newX < imageX ){
        duck.style.transform ='scaleX(-1)';
    };
    if (Math.abs(imageX - mouseX) <= 10 && Math.abs(imageY - mouseY) <= 10) {
      document.body.style.cursor = 'none';
      blood.style.display = 'block';
      blood.style.background = 'none';
      blood.style.left = newX + 'px';
      blood.style.top = newY + 'px';
      body.style.userSelect = 'none';
      document.removeEventListener('mousemove', mouseMoveListener);
    }
  };
  
  document.addEventListener('mousemove', mouseMoveListener);
  
});

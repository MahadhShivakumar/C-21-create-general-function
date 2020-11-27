function bounceOf(a1,b1){
    if (a1.x - b1.x < b1.width/2 + a1.width/2
      && b1.x - a1.x < b1.width/2 + a1.width/2) {
      a1.velocityX =a1.velocityX * (-1);
      b1.velocityX = b1.velocityX * (-1); 
    }
    if  (a1.y - b1.y < b1.height/2 + a1.height/2
      && b1.y - a1.y < b1.height/2 + a1.height/2){
     a1.velocityY = a1.velocityY * (-1);
      b1.velocityY = b1.velocityY * (-1);
    }
  }
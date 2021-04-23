class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,300);
    car1.addImage(car1Image);
    car2 = createSprite(300,300);
    car2.addImage(car2Image);
    car3 = createSprite(500,300);
    car3.addImage(car3Image);
    car4 = createSprite(700,300);
    car4.addImage(car4Image);
    cars = [car1,car2,car3,car4];
  }
  play(){  
    form.hide();
    image(track,50,-height*4,width,4500);
    Player.getPlayerInfo();
    var displayPositon = 130;
    if(allPlayers != undefined){
      var index = 0;
      var x = 200;
      var y = 0;
      for (var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index == player.index){
          fill("red");
          ellipse(x, y, 70);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          cars[index-1].shapeColor = "red";
        }
    }
  }
    if(keyIsDown(UP_ARROW)){
      player.distance += 50;
      player.update();
    }
    drawSprites();
    if (player.distance>4100){
      gameState = 2;
      form.leaderboard.position(width/2-150,100);
      form.leaderboard.html("Congratulations " + player.name);
      form.leaderboard.style("font-size", "50px");
      form.leaderboard.style("background-color", "yellow");
      form.leaderboard.style("padding", "10px");
      console.log(player.name);
    }
  }
  
}

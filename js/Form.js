class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.leaderboard = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.input.position(width/3,200);
    this.button.position(width/2,300);
    this.button.style('background-color', "green");
    this.button.style('font-family', 'Italic');
    this.button.style('font-size', "50px");
    this.input.style('font-size', "50px");
    this.title.position(width/2,100);
    this.title.html("Car Racing Game");
    this.reset.position(width-100,50);
    /*if(gameState == 2){
      this.leaderboard.html("Congratulations!");
      this.leaderboard.position(width/2,100);
      console.log("Changed");
    }*/
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.updateCarsAtEnd(0);
      player.updateReset();
    });

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}

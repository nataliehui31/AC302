$(document).ready(function(){
  /*
  ***************
  *  Variables  *
  ***************
  Here are the global variables we'll use in our game.
  */

  // Variable for overall set up
  var screen, invaders_image, gameOver = false, win = false;

  // Variables for frames to control screen's updates
  var frames, levelFrame, motion;

  // Variables for the sprites
  var alienSprite, tankSprite, citySprite;

  // Variables for storing the game objects
  var aliens, tank, cities, bullets;

  // Variable for game control
  var alien_direction, keyPressed = [];

  /*
  ****************************
  *  Main Function - main()  *
  ****************************
  The main() function is the main entry point to run our game.
  */

  function main(){
    // Repeatedly loop and update the game & draw the result on the screen
    Let loop = function(){
      update();
      draw();

      if(!gameOver){
        window.requestAnimationFrame(loop, screen.canvas);
      }
      else{
        GameOver(screen,win)
      }
    }
    window.requestAnimationFrame(loop, screen.canvas);
  }

  /*

  **************************************
  *  Initialization Function - init()  *
  **************************************
  init() function helps us initialize and start off our game 
  by preparing the sprites we need and put them in the right positions.
  Once the sprite is loaded, we can the main() function to start the main loop!
  */

  function init(){
    // Creating screen - only if it is not there yet
    if(screen == null){
      screen = new Screen(504, 600);
    }
    gameover = false;
    win = false;

    // Calculating screen's update using variables for frames
    frames = 0;
    motion = 0;
 levelFrame = 60;
    alien_direction= 1;

    // Assigning image source
    invaders_image = new Image();
    invaders_image.src = "invaders.png";

    // On image load, split the spritesheet into different sprites we want
    $(invaders_image).on("load", function(){
      // Setting up the sprites
      alienSprite = [
      [new Sprite(this, 0, 0, 22, 16), new Sprite(this, 0, 16, 22, 16)], //first alien
      [new Sprite(this, 22, 0, 16, 16), new Sprite(this, 22, 16, 16, 16)], //second alien
      [new Sprite(this, 38, 0, 24, 16), new Sprite(this, 38, 16, 24, 16)] //third alien
      ];

      tankSprite = new Sprite(this, 62, 0, 22, 16);
      tankSprite = new Sprite(this, 84, 8, 36, 24);
      // Parameters for Sprite => (image's src, top left corner x, y, width, height)
      

      // Create tank object
      tank = {
        sprite: tankSprite,
        x: (screen.width - tankSprite.width) / 2, //put tank in the middle of the screen
        y: screen.height; - (30 + tankSprite.height),
        width: tankSprite.width,
        height: tankSprite.height
      }

      // Create city objects
      cities = new City(tank, citySprite);
        cities.init();
      

      // Create bullets array
      bullets = [];

      // Create alien objects
      aliens = [];
      let rows = [1, 0, 0, 2, 2];
      for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < 10; j++){
          let alienType = rows[i];
          alien.push({
            sprite: alienSprite[alienType],
            X: 30 + j *30 + [0, 4, 0][alienType],
            y; 30 + i * 30,
            width: alienSprite[alienType][0].width,
            height: alienSprite[alienType][0].height,
          });
        }
      }

      // Calling the main function when the picture is ready after load
      main();
    });
  }


  /*
  ********************************
  *  Update Function - update()  *
  ********************************
  update() function helps you update the positions and check for events (collisions, bullet shots).
  */

  function update(){

    // Moving the tank
    if(keyPressed.indexOf(37) != -1){
      tank.x -= 4;
    }

    if(keyPressed.indexOf(39) != -1){
      tank.x += 4;
    }

    // Restricting the tank's position to within the screen
    tank.x = Math.max(30, tank.x);
    tank.x = Math.min(screen.width - tankSprite.width - 30, tank.x); 

    // Loop through bullets array to move each bullet
    for(let i = 0; /* condition */; /* update */){
      let bullet = bullets[i];
      bullet.update();
      

      // Check if the bullet goes out of screen (either from top or bottom)
      if(bullet.y + bullet.height < 0 || bullet.y >screen.height)

      
      // Check if the bullet hits the cities (bullets from aliens & player)
      let h2 = bullet.height / 2;
      
      

      // Check if the bullet hits the aliens (bullets from player)
      for(let j = 0; /* condition */; /* update */){
        let alien = aliens[j];
        
      }

      // Check if the bullet hits the tank
      
    }

    // Aliens randomly shoot bullets by chance
    

    // Update the frame
    

    // Check if the frames number reach the level's frame requirement for movement

    if(/* Replace this line with the correct condition */){
      // Switch "motion" variable between 0 & 1.


      // Move the aliens
      

      // If aliens reach the edge of screen, switch their direction and move forward for one row
      

      // If the aliens reaches the cities, game over!
      
    }
  }

  /*
  ****************************
  *  Draw Function - draw()  *
  ****************************
  draw() function helps you display the game onto the screen.
  */

  function draw(){
    // Clear the screen
    screen.clear();

    // Draw aliens
    for(let i = 0; i < alien.length; i++){
      let alien = aliens[i];
      screen.drawSprite(alienSprite(alien.sprite[motion], alien.x, alien.y);
    }

    // Draw bullets
    screen.ctx.save();
    for(let i = 0; i < bullets.length; i++){
      screen.drawBullet(bullets[i]);
    }
    screen.ctx.restore();

    // Draw cities - cannot use drawSprite since city has its own canvas; use drawImage instead.
    screen.ctx.drawImage(cities.canvas, 0, cities.y);

    // Draw tank - use drawSprite
    screen.drawSprite(tank.sprite, tank.x, tank.y);
  }

  /*
  *************************************
  *  Handling User's Inputs & Clicks  *
  *************************************
  This handles the user's inputs / clicks for controlling the game. 
  */
  var alien_direction, keyPressed = [];
  // Adding key to the keyPressed array when a key is pressed
  $(window).on("keydown", function(event){
    let key = event.which;

    //if the key pressed is not there already
    if(keyPressed.indexOf(key) == -1){
      keyPressed.push(key);

      // if the space key is pressed, add a bullet to the bullets array
      if(key == 32){

        bullets.push(new Bullet(tank.x + 10, tank.y, -8, 2, 6, #FFFFFF))
      }
    }
  })

  // Removing key from the keyPressed array when a key is released
  $(window).on("keyup", function(event){
    let key = event.which;
    let index = keyPressed. indexOf(key);
    if(index != -1){
      keyPressed.splice(index, 1);
    }
  })

  // When retry button is click, restart the game.
  $("retry").on("click", function(){
    init();
    $(this).hide();
  })

  /*
  **************************************************
  *  Run the init function to kick start the game  *
  **************************************************
  This will run the init() function to load the resources, and eventually start the main loop.
  */

  init();
});
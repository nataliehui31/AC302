var game = new Phaser.Game(800, 600, Phaser.Auto, '', {preload:preload, create:create, update});

var score = 0;
var life = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//sky
	game.add.sprite(0, 0, 'sky');
	//platforms
    platforms = game.add.physicsGroup();
    platforma.enableBody = true;
    //ground
    var ground = platforms.create(0, 550, 'ground');
    ground.scale,setTo(2, 2);
    ground.body.immovable = true;
    //Legdes
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platform.create(-100, 200, 'ground');
    ledge.body.immovable = true;

    //set text style
    var style = {font:"bold 32px Arial", fill: "#fff"}

    //position the score
    scorelabel = game.add.text(300, 560, "Score: ", style);
    scoretext = game.add.text(420, 560, score, style);
    scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)' , 2);
    scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);

    //Position the lives
    lifelabel = game.add.text(10, 5, "Lives: ", style);
    lifetext = game.add.text(120, 5, life, style);
    lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)', 2);
    lifetext.setShadow(3,3,'rgba(0,0,0,0.5)', 2);
    

}

function update(){
	
}
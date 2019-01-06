var ChoosseShipImage;
var ChooseShipImage;

var GameSceneText;
var GameSceneImage;

var UserMenu = {
    open  :   function(){

        Background.initialize('background1');
        ChooseShipText = game.add.text(game.world.width/2, 155, 'Ships',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ChooseShipText.anchor.set(0.5);
        ChooseShipText.inputEnabled = true;
        ChooseShipText.events.onInputDown.add(StartScene.openShipMenu, this);
        //ChooseShipText.events.onInputUp.add(StartScene.initializeChooseType, this);
        ChooseShipImage = game.add.sprite(50, 155, 'ship1');
        ChooseShipImage.scale.setTo(50/ChooseShipImage.width, 50/ChooseShipImage.height);
        ChooseShipImage.anchor.set(0.5);
        ChooseShipImage.inputEnabled = true;
        ChooseShipImage.events.onInputDown.add(StartScene.openShipMenu, this);

        GameSceneText = game.add.text(game.world.width/2, 215, 'Play',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        GameSceneText.anchor.set(0.5);
        GameSceneText.inputEnabled = true;
        GameSceneText.events.onInputDown.add(GameScene.initialize, this);
        //GameSceneText.events.onInputUp.add(StartScene.initializeChooseType, this);
        GameSceneImage = game.add.sprite(50, 215, 'alien');
        GameSceneImage.scale.setTo(50/GameSceneImage.width, 50/GameSceneImage.height);
        GameSceneImage.anchor.set(0.5);
        GameSceneImage.inputEnabled = true;
        GameSceneImage.events.onInputDown.add(GameScene.initialize, this);
    },
}

var StartScene = {// This is the starting scene of the game. It's an object
    background_image    : 'background1', // The background image for the scene
    title_text          : 'Space Ships', // The game title text
    subtitle1_text       : 'Choose your ship:', // The subtitle text
    subtitle2_text       : 'Choose game type:', // The second subtitle text
    ship1_text          : 'Shuttle:\nEnergy=4\nDamage=1\nSpeed=1.1lyps', //Next 3 are the names of the spaceships
    ship2_text          : 'Lunar:\nEnergy=3\nDamage=1\nSpeed=1.6lyps',   // with their energy and damage they deal
    ship3_text          : 'Shadow:\nEnergy=2\nDamage=1\nSpeed=2.4lyps',  // and speed in lyps(light years per second)
    
    //ship_image : 'ship2',

    openShipMenu : function(){
        // Next are some text objects for ship names and a sprites showing how the ship looks
        ship1Text = game.add.text(game.world.width/2, 155, this.ship1_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship1Text.anchor.set(0.5);
        ship1Text.inputEnabled = true;
        ship1Text.events.onInputDown.add(Ship.initialize, shipConstructors[0], this);
        ship1Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship1Image = game.add.sprite(50, 155, 'ship1');
        ship1Image.scale.setTo(ship1Text.width/2/ship1Image.width, ship1Text.height/ship1Image.height);
        ship1Image.anchor.set(0.5);
        ship1Image.inputEnabled = true;
        ship1Image.events.onInputDown.add(Ship.initialize, shipConstructors[0], this);
        ship1Image.events.onInputUp.add(StartScene.initializeChooseType, this);

        ship2Text = game.add.text(game.world.width/2, 250, this.ship2_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship2Text.anchor.set(0.5);
        ship2Text.inputEnabled = true;
        ship2Text.events.onInputDown.add(Ship.initialize, shipConstructors[1], this);
        ship2Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship2Image = game.add.sprite(50, 250, 'ship2');
        ship2Image.scale.setTo(ship2Text.width/2/ship2Image.width, ship2Text.height/ship2Image.height);
        ship2Image.anchor.set(0.5);
        ship2Image.inputEnabled = true;
        ship2Image.events.onInputDown.add(Ship.initialize, shipConstructors[1], this);
        ship2Image.events.onInputUp.add(StartScene.initializeChooseType, this);

        ship3Text = game.add.text(game.world.width/2, 345, this.ship3_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship3Text.anchor.set(0.5);
        ship3Text.inputEnabled = true;
        ship3Text.events.onInputDown.add(Ship.initialize, shipConstructors[2], this);
        ship3Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship3Image = game.add.sprite(50, 345, 'ship3');
        ship3Image.scale.setTo(ship3Text.width/2/ship3Image.width, ship3Text.height/ship3Image.height);
        ship3Image.anchor.set(0.5);
        ship3Image.inputEnabled = true;
        ship3Image.events.onInputDown.add(Ship.initialize, shipConstructors[2], this);
        ship3Image.events.onInputUp.add(StartScene.initializeChooseType, this);
    },

    closeShipMenu : function(){
        ship1Text.destroy();
        ship1Image.destroy();
        ship2Text.destroy();
        ship2Image.destroy();
        ship3Text.destroy();
        ship3Image.destroy();
    },

    openTypeMenu : function(){
        /*/ Next are some text objects for game type names and a sprites showing the level background
        FightForPlanetText = game.add.text(game.world.width/2, 145, 'Fight for Planet',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        FightForPlanetText.anchor.set(0.5);
        FightForPlanetText.inputEnabled = true;
        FightForPlanetText.events.onInputDown.add(FightForPlanetScene.initialize, this);
        //FightForPlanetText.events.onInputUp.add(StartScene.initializeChooseType, this);
        FightForPlanetImage = game.add.sprite(50, 145, 'planet1');
        FightForPlanetImage.scale.setTo(50/FightForPlanetImage.width, 50/FightForPlanetImage.height);
        FightForPlanetImage.anchor.set(0.5);
        FightForPlanetImage.inputEnabled = true;
        FightForPlanetImage.events.onInputDown.add(FightForPlanetScene.initialize, this);*/

        GameSceneText = game.add.text(game.world.width/2, 215, 'Play',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        GameSceneText.anchor.set(0.5);
        GameSceneText.inputEnabled = true;
        GameSceneText.events.onInputDown.add(GameScene.initialize, this);
        //GameSceneText.events.onInputUp.add(StartScene.initializeChooseType, this);
        GameSceneImage = game.add.sprite(50, 215, 'alien');
        GameSceneImage.scale.setTo(50/GameSceneImage.width, 50/GameSceneImage.height);
        GameSceneImage.anchor.set(0.5);
        GameSceneImage.inputEnabled = true;
        GameSceneImage.events.onInputDown.add(GameScene.initialize, this);
    },

    closeTypeMenu : function(){
        titleText.destroy();
        subtitleText.destroy();
        //FightForPlanetText.destroy();
        //FightForPlanetImage.destroy();
        GameSceneText.destroy();
        GameSceneImage.destroy();
    },

    initializeChooseShip : function(){// Method of the object StartScene
        Background.initialize(this.background_image);
        //initBackground(this.background_image);// Here the background is initialized with the given image
        playing = 0;
        titleText = game.add.text(game.world.width/2, 50, this.title_text,{ 
            font: "30px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        titleText.anchor.set(0.5);

        subtitleText = game.add.text(game.world.width/2, 90, this.subtitle1_text,{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        subtitleText.anchor.set(0.5);

        StartScene.openShipMenu();

    },
    initializeChooseType : function(){
        subtitleText.text = this.subtitle2_text;
        StartScene.closeShipMenu();
        StartScene.openTypeMenu();
    },

    nullGame            : function(){
        Ship.setnull();
        Boss.setnull();
        Aliens.delete();
        AlienPlanet.setnull();
        PlayerPlanet.setnull();
    }

}

var GameScene = {

    initialize  : function(){
        console.log('game scene');
        playing = 11;
        scores = 0;
        Frame.close();
        Background.change('background1');
        backgroundSpeed = level;
        Ship.initialize(shipConstructors[playerShip]);
        shipSpeedTimer.start();
        Energy.initialize();
        GaugeDistance.initialize();
        GaugeLevel.initialize();
        GaugeScores.initialize();
        Aliens.initialize();
        GaugeBoss.initialize();
    },
    end  :   function(){
        GaugeDistance.setnull();
        GaugeLevel.setnull();
        GaugeBoss.setnull();
        if(aliens){
            Aliens.delete();
        }
        if(bossBody){
            Boss.setnull();
        }
        if(playerPlanetBody){
            PlayerPlanet.setnull();
        }
        if(alienPlanetBody){
            AlienPlanet.setnull();
        }
        Frame.open();
        //StartScene.initializeChooseShip();
    }
}
/*
var FightForPlanetScene = {
    time        : 60,

    initialize  : function(){
        console.log('fight for planet scene');
        playing = 10;
        changeBackground('background2');
        StartScene.closeTypeMenu();
        PlayerPlanet.initialize();
        AlienPlanet.initialize();
        Boss.initialize();
        shipTimer.start();
        //Aliens.initialize();
    }
}*/
/*
var DefendScene = {

    initialize  : function(){
        console.log('defend scene');
        //playing = 12;
        //GaugeInviders.initialize();
        GaugeDistance.initialize();
        //GaugePlanets.initialize();
        PlayerPlanet.initialize();
        //Aliens.initialize();
        Boss.initialize();
    }
}
var InvideScene = {

    initialize  : function(){
        console.log('invide scene');
        //playing = 13;
        //GaugeInviders.initialize();
        GaugeDistance.initialize();
        //GaugePlanets.initialize();
        AlienPlanet.initialize();
        //Aliens.initialize();
        //Boss.initialize();
    }
}

var EndGameScene = {
    initialize  :   function(){
        GaugeDistance.setnull();
        //GaugeInviders.setnull();
        //GaugePlanets.setnull();
        GaugeLevel.setnull();
        GaugeBoss.setnull();
        if(aliens){
            Aliens.delete();
        }
        if(bossBody){
            Boss.setnull();
        }
        if(playerPlanetBody){
            PlayerPlanet.setnull();
        }
        if(alienPlanetBody){
            AlienPlanet.setnull();
        }
        StartScene.initializeChooseShip();
    },
}*/

var LBScene = {
    initialize  : function(){

    }
}


function startGame()
{
    playing = 10;
    gameText.setText("");   
    timer.start();
    console.log("start game executed");
}

function endGame()
{
    playing = 0;
    //highscores = [];
    timer.stop();
    aliens.destroy();
    bullets.destroy();
    if(boss)
    {
        boss.destroy();
        bossHP = "";
        bossTimer.stop();
        bossbullets.destroy();
    }
    if(ship)
    {
        ship.destroy();
        console.log("ship destroyed by default");
    }
    contextId = FBInstant.context.getID();
    if(contextId==null)
    {
        lb = "nohighscores";
    }else if(contextId!=null)
    {
        lb = "highscores."+contextId;
    }else
    {
        console.log("Error!"+ contextId);
    }
    playerName = FBInstant.player.getName();
    addToLeaderBoard(scores, playerName, lb);
    updateLeaderBoard(lb);
    gameText.setText("Game Over\n"+playerName+",\nyou scored "+scores);
    lbText.setText("View Leaderboard");
    gameText.events.onInputDown.add(restartGame, this);
    console.log("game over");
}

function restartGame()
{
    playing = 1;
    scores = 0;
    lives = 3;
    //table.destroy();
    //initShip();
    //initBoss();
    initAliens();
    //initBullets();
    //gameText.setText("");
    //livesText.setText("");
    //scoreText.setText("");
    //lbText.setText("");
    //initText();

    bossTimer = game.time.create(false);
    timer = game.time.create(false);
    //timer.loop(bulletTime, fireBullet);
    timer.loop(alienTime, createAliensWave);
    timer.loop(newBoss, initBoss);
    timer.start();
    //location.reload();
}

function addToLeaderBoard(scores, playerName, contextId)
{
    FBInstant.getLeaderboardAsync(lb).then(leaderboard => {
        console.log(leaderboard.getName());
        return leaderboard.setScoreAsync(scores);//{"name":playerName, "scores":scores});
      })
      .then(() => console.log('Score saved'))
      .catch(error => console.error(error));
}

function readLeaderBoard()
{
    FBInstant.getLeaderboardAsync(lb).then(leaderboard => leaderboard.getEntriesAsync(10, 0)).then(entries => {
        table = game.add.group();
        lbText.setText("");
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore());
            highscores = entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore();
            var text = game.add.text(game.world.width/2-60, 200+(20*i), highscores,{
                font: "20px Arial",
                fill: "#e5e5e5",
                align: "center",
                backgroundColor: "#258"
            }, table);
            text.anchor.set(0.5);
        }
    }).catch(error => console.error(error));

}

function updateLeaderBoard()
{
FBInstant.updateAsync({
    action: 'LEADERBOARD',
    name: lb
}).then(() => console.log('Update Posted')).catch(error => console.error(error));

}


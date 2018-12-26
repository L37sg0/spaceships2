var StartScene = {// This is the starting scene of the game. It's an object
    background_image    : 'background1', // The background image for the scene
    title_text          : 'Space Ships', // The game title text
    subtitle1_text       : 'Choose your ship:', // The subtitle text
    subtitle2_text       : 'Choose game type:', // The second subtitle text
    ship1_text          : 'Shuttle:\nEnergy=60\nDamage=1', //Next 3 are the names of the spaceships
    ship2_text          : 'Lunar:\nEnergy=50\nDamage=2',   // with their energy and damage they deal
    ship3_text          : 'Shadow:\nEnergy=40\nDamage=3',
    
    //ship_image : 'ship2',

    openShipMenu : function(){
        // Next are some text objects for ship names and a sprites showing how the ship looks
        ship1Text = game.add.text(game.world.width/2, 145, this.ship1_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship1Text.anchor.set(0.5);
        ship1Text.inputEnabled = true;
        ship1Text.events.onInputDown.add(Ship.initialize, {'sprite_image':'ship1', 'energy':60, 'shoot':'bullet1', 'damage':1}, this);
        ship1Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship1Image = game.add.sprite(50, 145, 'ship1');
        ship1Image.scale.setTo(ship1Text.width/2/ship1Image.width, ship1Text.height/ship1Image.height);
        ship1Image.anchor.set(0.5);

        ship2Text = game.add.text(game.world.width/2, 215, this.ship2_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship2Text.anchor.set(0.5);
        ship2Text.inputEnabled = true;
        ship2Text.events.onInputDown.add(Ship.initialize, {'sprite_image':'ship2', 'energy':50, 'shoot':'bullet2', 'damage':2}, this);
        ship2Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship2Image = game.add.sprite(50, 215, 'ship2');
        ship2Image.scale.setTo(ship2Text.width/2/ship2Image.width, ship2Text.height/ship2Image.height);
        ship2Image.anchor.set(0.5);

        ship3Text = game.add.text(game.world.width/2, 285, this.ship3_text,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship3Text.anchor.set(0.5);
        ship3Text.inputEnabled = true;
        ship3Text.events.onInputDown.add(Ship.initialize, {'sprite_image':'ship3', 'energy':40, 'shoot':'bullet3', 'damage':3}, this);
        ship3Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship3Image = game.add.sprite(50, 285, 'ship3');
        ship3Image.scale.setTo(ship3Text.width/2/ship3Image.width, ship3Text.height/ship3Image.height);
        ship3Image.anchor.set(0.5);
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
        // Next are some text objects for game type names and a sprites showing the level background
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
        FightForPlanetImage.scale.setTo(FightForPlanetText.width/2/FightForPlanetImage.width, FightForPlanetText.height/FightForPlanetImage.height);
        FightForPlanetImage.anchor.set(0.5);

        PatrolText = game.add.text(game.world.width/2, 215, 'Patrol around',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        PatrolText.anchor.set(0.5);
        PatrolText.inputEnabled = true;
        PatrolText.events.onInputDown.add(PatrolScene.initialize, this);
        //PatrolText.events.onInputUp.add(StartScene.initializeChooseType, this);
        PatrolImage = game.add.sprite(50, 215, 'alien');
        PatrolImage.scale.setTo(PatrolText.width/2/PatrolImage.width, PatrolText.height/PatrolImage.height);
        PatrolImage.anchor.set(0.5);
    },

    closeTypeMenu : function(){
        titleText.destroy();
        subtitleText.destroy();
        FightForPlanetText.destroy();
        FightForPlanetImage.destroy();
        PatrolText.destroy();
        PatrolImage.destroy();
    },

    initializeChooseShip : function(){// Method of the object StartScene
        initBackground(this.background_image);// Here the background is initialized with the given image

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
    }

}

var FightForPlanetScene = {
    time        : 60,

    initialize  : function(){
        playing = 10;
        changeBackground('background2');
        StartScene.closeTypeMenu();
        PlayerPlanet.initialize();
        AlienPlanet.initialize();
        Boss.initialize();
        shipTimer.start();
        //Aliens.initialize();
    }
}
var PatrolScene = {

    initialize  : function(){
        playing = 11;
        StartScene.closeTypeMenu();
        shipTimer.start();
        Aliens.initialize();
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


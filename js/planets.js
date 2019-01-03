// Planets

var playerPlanetBody;
var alienPlanetBody;
var planets = ['planet1', 'planet2', 'planet3', 'planet4', 'planet5', 'planet6', 'planet7', 'planet8', 'planet9', 'planet10', ]
var AlienPlanet = {

    initialize : function(){
        if(alienPlanetBody)
        {
            AlienPlanet.setnull();
        }

        let planet = planets[game.rnd.integerInRange(0,9)];
        alienPlanetHealth = game.rnd.integerInRange(10,50)*level;

        alienPlanetBody = game.add.sprite(game.world.width/2, 50, planet);
        alienPlanetBody.scale.setTo(100/alienPlanetBody.width, 100/alienPlanetBody.height);
        alienPlanetBody.anchor.set(0.5);
        game.physics.enable(alienPlanetBody, Phaser.Physics.ARCADE);
        alienPlanetBody.enableBody = true;
        alienPlanetBody.body.immovable = true;

        alienPlanetText = game.add.text(game.world.width/2, 50, alienPlanetHealth,{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        alienPlanetText.anchor.set(0.5);
    },

    delete      : function(){
        explode(alienPlanetBody);
        alienPlanetText.destroy();
        //GaugePlanets.update(1);
    },

    setnull     : function(){
        alienPlanetBody.kill();
        alienPlanetText.kill();
    }
}

var PlayerPlanet = {

    initialize : function(){
        if(playerPlanetBody)
        {
            PlayerPlanet.setnull();
        }

        let planet = planets[game.rnd.integerInRange(0,9)];
        playerPlanetHealth = game.rnd.integerInRange(10,50);//+level;

        playerPlanetBody = game.add.sprite(game.world.width/2, game.world.height-50, planet);
        playerPlanetBody.scale.setTo(100/playerPlanetBody.width, 100/playerPlanetBody.height);
        playerPlanetBody.anchor.set(0.5);
        game.physics.enable(playerPlanetBody, Phaser.Physics.ARCADE);
        playerPlanetBody.enableBody = true;
        playerPlanetBody.body.immovable = true;

        playerPlanetText = game.add.text(game.world.width/2, game.world.height-50, playerPlanetHealth,{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        playerPlanetText.anchor.set(0.5);
    },

    delete      : function(){
        explode(playerPlanetBody);
        playerPlanetText.destroy();
        //GaugePlanets.update(-1);
    }, 

    setnull     : function(){
        playerPlanetBody.kill();
        playerPlanetText.kill();
    }
}
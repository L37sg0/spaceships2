//Aliens

var Aliens = {
    alienSpeed : 200,

    alienTime : 2000,

    alienInfo : {
        width: 40,
        height: 30,
        offset: {
            top: -60,
            left: 20
        },
        padding: 0
    },

    initialize : function(){
        aliens = game.add.group();
        game.physics.enable(aliens, Phaser.Physics.ARCADE);
        aliens.enableBody = true;

        Aliens.gauges();

        aliensTimer = game.time.create(false);
        aliensTimer.loop(this.alienTime, Aliens.newWave);
        aliensTimer.start();
    },

    gauges      : function(){
        freeAliens = 0;
        freeAliensText = game.add.text(10, 10, 'Inviders: '+freeAliens,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });

    },

    newWave : function(){//Creates new wave of aliens
        //First checks if an alien object leave the screen and destroy it
        aliens.forEach(function(alien)
        {
            if(alien.body.y >= game.world.height)
            {
                freeAliens += 1;
                freeAliensText.setText('Inviders: '+freeAliens);
                alien.destroy();  
            }
        }); // And here the wave is created
        let row = game.rnd.integerInRange(2,5);
        for(c=0;c<col;c++)
        {
            for(r=0;r<row;r++)
            {
                let will = game.rnd.integerInRange(0,1);
                if(will){
                    let alienX = (c*(Aliens.alienInfo.width+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.left;
                    let alienY = (r*(Aliens.alienInfo.height+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.top;
        
                    alien = aliens.create(alienX, alienY, "alien");
    
                    alien.scale.setTo(Aliens.alienInfo.width/alien.width, Aliens.alienInfo.height/alien.height);
                    alien.anchor.set(0.5, 0.5);
                    //alien.body.immovable = true;
                    //alien.body.bounce.set(1);
                    alien.body.velocity.set(0, Aliens.alienSpeed);
                }
            }
        }
    },
    delete  :  function(){
        
        aliensTimer.stop();
    }
}
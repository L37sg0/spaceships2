//Aliens

var Aliens = {
    alienSpeed : 200,

    alienTime : 2000,

    alienInfo : {
        width: 40,
        height: 30,
        offset: {
            top: 0,
            left: 20
        },
        padding: 0
    },

    initialize : function(){
        aliens = game.add.group();
        aliens.enableBody = true;
        aliens.PhysicBodyType = Phaser.Physics.ARCADE;

        aliensTimer = game.time.create(false);
        aliensTimer.loop(this.alienTime, Aliens.newWave);
        aliensTimer.start();
    },

    newWave : function(){//Creates new wave of aliens
        //First checks if an alien object leave the screen and destroy it
        aliens.forEach(function(alien)
        {
            if(alien.body.y >= game.world.height)
            {
                alien.destroy();  
                console.log("alien down!!");
                //scores -= 1;      
            }
        }); // And here the wave is created
        for(c=0;c<col;c++)
        {
            for(r=0;r<1;r++)
            {
                let alienX = (c*(Aliens.alienInfo.width+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.left;
                let alienY = (r*(Aliens.alienInfo.height+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.top;
    
                alien = aliens.create(alienX, alienY, "alien");

                alien.scale.setTo(Aliens.alienInfo.width/alien.width, Aliens.alienInfo.height/alien.height);
                alien.anchor.set(0.5, 0.5);
                alien.body.velocity.set(0, Aliens.alienSpeed);
                alien.body.immovable = true;
            }
        }
    }
}
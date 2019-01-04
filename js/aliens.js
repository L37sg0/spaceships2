//Aliens

var aliens;

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
        if(aliens){
            Aliens.delete();
        }
        aliens = game.add.group();
        game.physics.enable(aliens, Phaser.Physics.ARCADE);
        aliens.enableBody = true;

        aliensTimer = game.time.create(false);
        aliensTimer.loop(this.alienTime, Aliens.newWave);
        aliensTimer.start();
    },
    newWave : function(){//Creates new wave of aliens
        //First checks if an alien object leave the screen and destroy it
        //console.log(aliens.length);
        aliens.forEach(function(alien)
        {
            if(alien.body.y >= game.world.height)
            {   //GaugeInviders.update();
                alien.destroy();  
                GaugeScores.update(-level);
            }
        }); // And here the wave is created
        let row = game.rnd.integerInRange(1,5);
        for(c=0;c<col;c++)
        {
            for(r=0;r<row;r++)
            {

                alienDamage = level;
                let will = game.rnd.integerInRange(0,1);
                if(will){
                    let alienX = (c*(Aliens.alienInfo.width+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.left;
                    let alienY = (r*(Aliens.alienInfo.height+Aliens.alienInfo.padding))+Aliens.alienInfo.offset.top;
                    
                    alien = aliens.create(alienX, alienY, "alien");  
                    alien.scale.setTo(Aliens.alienInfo.width/alien.width, Aliens.alienInfo.height/alien.height);
                    alien.anchor.set(0.5, 0.5);
                    alien.body.bounce.set(1);
                    alien.body.velocity.set(0, Aliens.alienSpeed);
                }
            }
        }
    },
    delete  :  function(){
        //aliens.destroy();
        aliensTimer.stop();
    }
}
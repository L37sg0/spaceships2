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
        aliens.enableBody = true;
        aliens.PhysicBodyType = Phaser.Physics.ARCADE;

        aliensTimer = game.time.create(false);
        aliensTimer.loop(this.alienTime, Aliens.newWave);
    },
    newWave : function(){
        for(c=0;c<col;c++)
        {
            for(r=0;r<1;r++)
            {
                var alienX = (c*(this.alienInfo.width+this.alienInfo.padding))+this.alienInfo.offset.left;
                var alienY = (r*(this.alienInfo.height+this.alienInfo.padding))+this.alienInfo.offset.top;
    
                newAlien = aliens.create(alienX, alienY, "alien");
                newAlien.scale.setTo(this.alienInfo.width/newAlien.width, this.alienInfo.height/newAlien.height);
                newAlien.anchor.set(0.5, 0.5);
                newAlien.body.velocity.set(0, this.alienSpeed);
                newAlien.body.immovable = true;
            }
        }

    }
}

function initAliens()
{
    alienInfo = {
        width: 40,
        height: 30,
        offset: {
            top: -60,
            left: 20
        },
        padding: 0
    };
    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.PhysicBodyType = Phaser.Physics.ARCADE;
}

function createAliensWave()
{
    for(c=0;c<col;c++)
    {
        for(r=0;r<1;r++)
        {
            var alienX = (c*(alienInfo.width+alienInfo.padding))+alienInfo.offset.left;
            var alienY = (r*(alienInfo.height+alienInfo.padding))+alienInfo.offset.top;

            newAlien = aliens.create(alienX, alienY, "alien");
            newAlien.scale.setTo(alienInfo.width/newAlien.width, alienInfo.height/newAlien.height);
            newAlien.anchor.set(0.5, 0.5);
            newAlien.body.velocity.set(0, alienSpeed);
            newAlien.body.immovable = true;
        }
    }
}


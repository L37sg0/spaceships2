//Ship

var shipBody;
var Ship = {
    shootTime : 100,

    shootSpeed : 500,

    initialize : function(){

        if(shipBody)
        {
            Ship.setnull();
        }
        shipDamage = this.damage;

        shipBody = game.add.sprite(game.world.width*0.5, game.world.height-60, this.sprite_image);        
        shipBody.scale.setTo(40/shipBody.width, 60/shipBody.height);
        game.physics.enable(shipBody, Phaser.Physics.ARCADE);
        
        shipBody.enableBody = true;
        //shipBody.body.bounce.set(1);
        shipBody.body.immovable = true;
        shipBody.anchor.set(0.5);

        shipEnergy = game.add.sprite(game.world.width-90, game.world.height-20, 'energy');
        shipEnergy.scale.setTo(this.energy/shipEnergy.width, 10/shipEnergy.height);

        shipBullets = game.add.group();
        shipBullets.enableBody = true;
        game.physics.enable(shipBullets, Phaser.Physics.ARCADE);
        shipBullets.createMultiple(30, this.shoot);
        shipBullets.setAll("anchor.x", 0.5);
        shipBullets.setAll("anchor.y", 1);
        shipBullets.setAll("outOfBoundsKill", true);
        shipBullets.setAll("checkWorldBounds", true);
        
        shipTimer = game.time.create(false);
        shipTimer.loop(Ship.shootTime, Ship.shoot);

        shipSpeedTimer = game.time.create(false);
        shipSpeedTimer.loop(1000/this.speed, GaugeDistance.update);
    },
    delete : function(){
        explode(shipBody);
        shipEnergy.destroy();
        shipBullets.destroy();
        shipTimer.stop();
        shipSpeedTimer.stop();
        EndGameScene.initialize();
        //StartScene.initializeChooseShip();
    },
    shoot : function(){
        shipBullet = shipBullets.getFirstExists(false);
        if(shipBullet)
        {   shoot.play();
            shipBulletX = shipBody.x;
            shipBulletY = shipBody.y-shipBody.height/2;
            shipBullet.reset(shipBulletX, shipBulletY);
            shipBullet.body.velocity.y -= Ship.shootSpeed;
        }
    },
    setnull     : function(){
        shipBody.kill();
        shipEnergy.kill();
        shipBullets.destroy();
        shipTimer.stop();
        shipSpeedTimer.stop();
    }
}
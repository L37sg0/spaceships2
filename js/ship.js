//Ship

var shipBody;
var Ship = {
    initialize : function(){

        if(shipBody)
        {
            Ship.delete();
        }

        shipDamage = this.damage;

        shipBody = game.add.sprite(game.world.width*0.5, game.world.height-60, this.sprite_image);        
        shipBody.scale.setTo(40/shipBody.width, 60/shipBody.height);
        game.physics.enable(shipBody, Phaser.Physics.ARCADE);
        shipBody.enableBody = true;
        shipBody.anchor.set(0.5);

        shipHealt = game.add.sprite(game.world.width-70, game.world.height-20, 'energy');
        shipHealt.scale.setTo(this.energy/shipHealt.width, 10/shipHealt.height);

        shipBullets = game.add.group();
        shipBullets.enableBody = true;
        shipBullets.physicsBodyType = Phaser.Physics.ARCADE;
        shipBullets.createMultiple(30, this.shoot);
        shipBullets.setAll("anchor.x", 0.5);
        shipBullets.setAll("anchor.y", 1);
        shipBullets.setAll("outOfBoundsKill", true);
        shipBullets.setAll("checkWorldBounds", true);
        
        shipTimer = game.time.create(false);
        shipTimer.loop(bulletTime, Ship.shoot);
    },
    delete : function(){
        shipBody.destroy();
        shipHealt.destroy();
    },
    shoot : function(){
        shipBullet = shipBullets.getFirstExists(false);
        if(shipBullet)
        {   //shoot.play();
            shipBulletX = shipBody.x;
            shipBulletY = shipBody.y-shipBody.height/2;
            shipBullet.reset(shipBulletX, shipBulletY);
            shipBullet.body.velocity.y -= bulletSpeed;
            console.log('fire');
        }
    }
}
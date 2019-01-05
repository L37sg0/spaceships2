//Ship

var shipBody;
var shipBullets;

var shipConstructors = [
    {'sprite_image':'ship1', 'energy':40, 'shoot':'bullet1', 'gun1':30, 'gun2':30, 'gun3':30, 'damage':1, 'speed':1.1},
    {'sprite_image':'ship2', 'energy':30, 'shoot':'bullet2', 'gun1':0, 'gun2':30, 'gun3':30, 'damage':1, 'speed':1.6},
    {'sprite_image':'ship3', 'energy':20, 'shoot':'bullet3', 'gun1':30, 'gun2':0, 'gun3':0, 'damage':1, 'speed':2.4},
]
var Ship = {
    shootTime : 240,

    shootSpeed : 500,

    initialize : function(constructor){

        if(shipBody)
        {
            Ship.setnull();
        }
        shipDamage = constructor.damage+level;

        shipBody = game.add.sprite(game.world.width*0.5, game.world.height-60, constructor.sprite_image);        
        shipBody.scale.setTo(40/shipBody.width, 60/shipBody.height);
        game.physics.enable(shipBody, Phaser.Physics.ARCADE);
        
        shipBody.enableBody = true;
        //shipBody.body.bounce.set(1);
        shipBody.body.immovable = true;
        shipBody.anchor.set(0.5);

        //shipEnergy = game.add.sprite(game.world.width-90, game.world.height-20, 'energy');
        //shipEnergy.scale.setTo(this.energy*level/shipEnergy.width, 10/shipEnergy.height);

        shipEnergy = game.add.text(game.world.width-90, game.world.height-20, constructor.energy+level,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        shipEnergy.anchor.set(0.5);

        shipBullets = game.add.group();
        shipBullets.enableBody = true;
        game.physics.enable(shipBullets, Phaser.Physics.ARCADE);
        shipBullets.createMultiple(constructor.gun1, constructor.shoot);
        shipBullets.setAll("anchor.x", 0.5);
        shipBullets.setAll("anchor.y", 1);
        shipBullets.setAll("outOfBoundsKill", true);
        shipBullets.setAll("checkWorldBounds", true);

        shipBullets2 = game.add.group();
        shipBullets2.enableBody = true;
        game.physics.enable(shipBullets2, Phaser.Physics.ARCADE);
        shipBullets2.createMultiple(constructor.gun2, constructor.shoot);
        shipBullets2.setAll("anchor.x", 0.5);
        shipBullets2.setAll("anchor.y", 1);
        shipBullets2.setAll("outOfBoundsKill", true);
        shipBullets2.setAll("checkWorldBounds", true);

        shipBullets3 = game.add.group();
        shipBullets3.enableBody = true;
        game.physics.enable(shipBullets3, Phaser.Physics.ARCADE);
        shipBullets3.createMultiple(constructor.gun3, constructor.shoot);
        shipBullets3.setAll("anchor.x", 0.5);
        shipBullets3.setAll("anchor.y", 1);
        shipBullets3.setAll("outOfBoundsKill", true);
        shipBullets3.setAll("checkWorldBounds", true);
        
        shipTimer = game.time.create(false);
        shipTimer.loop(Ship.shootTime/(constructor.speed+level/100), Ship.shoot);
        shipTimer.start();

        shipSpeedTimer = game.time.create(false);
        shipSpeedTimer.loop((1000+level)/constructor.speed, GaugeDistance.update);
        shipSpeedTimer.start();
    },
    change  :   function(){
        playerShip = this.arg;
    },
    delete : function(){
        explode(shipBody);
        shipEnergy.destroy();
        shipBullets.destroy();
        shipTimer.stop();
        shipSpeedTimer.stop();
        GameScene.end();
    },
    shoot : function(){
        shipBullet1 = shipBullets.getFirstExists(false);
        shipBullet2 = shipBullets2.getFirstExists(false);
        shipBullet3 = shipBullets3.getFirstExists(false);

        if(shipBullet1)
        {   shoot.play();
            shipBulletX = shipBody.x;
            shipBulletY = shipBody.y-shipBody.height/2;

            shipBullet1.reset(shipBulletX, shipBulletY);
            shipBullet1.body.velocity.y -= Ship.shootSpeed;
        }
        if(shipBullet2)
        {   shoot.play();
            shipBullet2X = shipBody.x-15;
            shipBulletY = shipBody.y+shipBody.height/2;

            shipBullet2.reset(shipBullet2X, shipBulletY);
            shipBullet2.body.velocity.y += Ship.shootSpeed;
        }
        if(shipBullet3)
        {   shoot.play();
            shipBullet3X = shipBody.x+15;
            shipBulletY = shipBody.y-shipBody.height/2;

            shipBullet3.reset(shipBullet3X, shipBulletY);
            shipBullet3.body.velocity.y -= Ship.shootSpeed;
        }
    },
    /*update      : function(){
        //shipTimer.stop();
        shipTimer.loop(Ship.shootTime/this.speed-level/2, Ship.shoot);
        shipTimer.start();
        shipEnergy.setText(level);//Number(shipEnergy.text)+1);
        shipDamage += 1;
        console.log('energy: '+shipEnergy.text, 'damage: '+shipDamage);

    },*/
    setnull     : function(){
        shipBody.kill();
        shipEnergy.kill();
        //shipBullets.destroy();
        shipTimer.stop();
        shipSpeedTimer.stop();
    }
}
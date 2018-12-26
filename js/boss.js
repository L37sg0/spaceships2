//Boss

var bossBody;
var Boss = {
    initialize : function(){
        if(bossBody)
        {
            Boss.delete();
        }
        let i = game.rnd.integerInRange(0,3);
        let sprite_image = bosses[i][0];
        let energy = bosses[i][1];
        let bossVel = bosses[i][2];
        let bossBulletTime = bosses[i][3];
        let shoot = 'bossbullet';

        bossDamage = game.rnd.integerInRange(2,5);

        bossBody = game.add.sprite(game.world.width*0.5, game.world.height*0.5-100, sprite_image);        
        bossBody.scale.setTo(90/bossBody.width, 90/bossBody.height);
        game.physics.enable(bossBody, Phaser.Physics.ARCADE);
        bossBody.enableBody = true;
        bossBody.anchor.set(0.5);


        bossBody.body.immovable = true;
        bossBody.body.collideWorldBounds = true;
        bossBody.body.bounce.set(1);
        bossBody.checkWorldBounds = true;
        bossBody.body.velocity.set(bossVel, 0);

        bossHealth = game.add.sprite(10, 10, 'hp');
        bossHealth.scale.setTo(energy/bossHealth.width, 10/bossHealth.height);

        bossBullets = game.add.group();
        bossBullets.enableBody = true;
        game.physics.enable(bossBullets, Phaser.Physics.ARCADE);
        bossBullets.createMultiple(30, shoot);
        bossBullets.setAll("anchor.x", 0.5);
        bossBullets.setAll("anchor.y", 1);
        bossBullets.setAll("outOfBoundsKill", true);
        bossBullets.setAll("checkWorldBounds", true);
        
        bossTimer = game.time.create(false);
        bossTimer.loop(bossBulletTime, Boss.shoot);
        bossTimer.start();
    },
    delete : function(){
        explode(bossBody);
        bossHealth.destroy();
        bossBullets.destroy();
        bossTimer.stop();
    },
    shoot : function(){
        bossBullet = bossBullets.getFirstExists(false);
        if(bossBullet)
        {   //shoot.play();
            bossBulleX = bossBody.x;
            bossBulleY = bossBody.y+bossBody.height/2;
            bossBullet.reset(bossBulleX, bossBulleY);
            bossBullet.scale.setTo(0.5,0.5);
            bossBullet.body.velocity.y += 200;
        }
    }
}

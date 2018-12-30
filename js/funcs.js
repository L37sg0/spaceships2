// Functionality for live increase
    function initLife()
    {
        life = game.add.sprite(game.world.width*0.5, 0, "life");      
        life.scale.setTo(20/life.width, 20/life.height);
        game.physics.enable(life, Phaser.Physics.ARCADE);
        life.enableBody = true;
        //life.anchor.set(0.5);
        life.body.velocity.set(0, 200);
    }
    
    function initBackground(background_image)
    {
        back = game.add.tileSprite(0, 0, game.world.width, game.world.height,  background_image);
    }

    function changeBackground(background_image){
        this.background_image = background_image;
        back.loadTexture(this.background_image);
    }

    function bulletHitAlien(bullet, alien)
    {
        bullet.kill();
        explode(alien);
    }

    function alienHitShip(shipBody, alien)
    {
        shipEnergy.width -= 1; 
        
        if(shipEnergy.width <= 0){
            Ship.delete();
        }
        explode(alien);
    }
    function alienHitPlanet(playerPlanetBody, alien)
    {
        playerPlanetText.setText(playerPlanetText.text - 3);
        explode(alien);
        if(playerPlanetText.text <= 0){
            PlayerPlanet.delete();
        }
    }

    function bulletHitAlienPlanet(alienPlanetBody, bullet){
        bullet.kill();
        alienPlanetText.setText(alienPlanetText.text - shipDamage);
        if(alienPlanetText.text <= 0){
            AlienPlanet.delete();
        }
    }

    function bulletHitBoss(boss, bullet)
    {   
        if(bossHealth.width <= 0)
        {
            Boss.delete();
        }
        bossHealth.width -= shipDamage;
        bullet.kill();
    }


    function bulletHitShip(ship, bullet)
    {
        if(shipEnergy.width <= 0){
            Ship.delete();
        }
        shipEnergy.width -= bossDamage;
        bullet.kill();
        console.log('ship hitted')
    }
    
    function bulletHitPlayerPlanet(playerPlanetBody, bullet){
        bullet.kill();
        playerPlanetText.setText(playerPlanetText.text - bossDamage);
        if(playerPlanetText.text <= 0){
            PlayerPlanet.delete();
        }
    }

    function explode(obj)
    {
            //boom.play();
            obj.loadTexture("explosion", 0);
            let killTween = game.add.tween(obj.scale);
            killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function(){
                obj.destroy();
                obj = 0;
            }, this);
            killTween.start();
    }

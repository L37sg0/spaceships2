// Some game functions

    function bulletHitAlien(bullet, alien)
    {
        bullet.kill();
        explode(alien);
        GaugeScores.update(level);
    }

    function alienHitShip(shipBody, alien)
    {
        //shipEnergy.width -= alienDamage; 
        
        shipEnergy.text -= alienDamage;
        if(shipEnergy.text <= 0){//shipEnergy.width <= 0){
            Ship.delete();
        }
        explode(alien);
    }

    function bulletHitAlienPlanet(alienPlanetBody, bullet){
        bullet.kill();
        alienPlanetText.setText(alienPlanetText.text - shipDamage);
        if(alienPlanetText.text <= 0){
            AlienPlanet.delete();
            GaugeScores.update(50*level);
        }
    }

    function bulletHitBoss(boss, bullet)
    {   
        bossHealth.text -= shipDamage;//.width -= shipDamage;
        if(bossHealth.text <= 0)//bossHealth.width <= 0)
        {
            Boss.delete();
            GaugeScores.update(20*level);
        }
        
        bullet.kill();
    }

    function bulletHitShip(ship, bullet)
    {
        shipEnergy.text -= bossDamage;
        if(shipEnergy.text <= 0){//shipEnergy.width <= 0){
            Ship.delete();
        }
        //shipEnergy.width -= bossDamage;
        bullet.kill();
        console.log('ship hitted')
    }

    function ShipHitBoss(ship, boss){
        bossHealth.text -= shipDamage;//.width -= shipDamage;
        if(bossHealth.text <= 0){//bossHealth.width <= 0)
            Boss.delete();
            GaugeScores.update(20*level);
        }
        shipEnergy.text -= bossDamage;
        if(shipEnergy.text <= 0){//shipEnergy.width <= 0){
            Ship.delete();
        }
        console.log('shiphitboss');
    }

    function ShipGetBonus(energyPower, shipBody){
        console.log('Bonus');
        energyPower.kill();
    }

    function explode(obj)
    {
            //boom.play();
            obj.loadTexture("explosion", 0);
            let killTween = game.add.tween(obj.scale);
            killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function(){
                obj.kill();
                obj = 0;
            }, this);
            killTween.start();
    }
    /*
    function alienHitPlanet(playerPlanetBody, alien)
    {
        playerPlanetText.setText(playerPlanetText.text - alienDamage);
        explode(alien);
        if(playerPlanetText.text <= 0){
            PlayerPlanet.delete();
        }
    }*/

    /*
    function bulletHitPlayerPlanet(playerPlanetBody, bullet){
        bullet.kill();
        playerPlanetText.setText(playerPlanetText.text - bossDamage);
        if(playerPlanetText.text <= 0){
            PlayerPlanet.delete();
        }
    }*/

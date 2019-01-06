//PowerUps
var Energy = {
    initialize  :   function(){
        let energyPowerInterval = game.rnd.integerInRange(10, 30);
        energyPowerTimer = game.time.create(false);
        energyPowerTimer.loop(energyPowerInterval*1000, Energy.newEnergy);
        energyPowerTimer.start();

    },
    newEnergy   :   function(){
        let energyPowerX = game.rnd.integerInRange(0, game.world.width);
        energyPower = game.add.sprite(energyPowerX, 0, "life");      
        energyPower.scale.setTo(20/energyPower.width, 20/energyPower.height);
        game.physics.enable(energyPower, Phaser.Physics.ARCADE);
        energyPower.enableBody = true;
        //life.anchor.set(0.5);
        energyPower.body.velocity.set(0, 200);},
    delete      :   function(){
        energyPower.kill();

    },
    setnull     :   function(){
        energyPower.kill();
        energyPowerTimer.stop();

    }
}

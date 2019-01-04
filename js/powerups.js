//PowerUps
function initLife()
{
    life = game.add.sprite(game.world.width*0.5, 0, "life");      
    life.scale.setTo(20/life.width, 20/life.height);
    game.physics.enable(life, Phaser.Physics.ARCADE);
    life.enableBody = true;
    //life.anchor.set(0.5);
    life.body.velocity.set(0, 200);
}
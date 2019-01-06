//Background
var back;
backgroundSpeed = 1;

var Background = {
    initialize  : function(background_image){
        console.log(background_image);
        back = game.add.tileSprite(0, 0, game.world.width, game.world.height,  background_image);
    },
    change      : function(background_image){
        console.log('change background');
        this.background_image = background_image;
        back.loadTexture(this.background_image);
    },
    update      :  function(arg){
        console.log('update background += '+arg);
        this.arg = arg;
        back.tilePosition.y += arg;
    }
}

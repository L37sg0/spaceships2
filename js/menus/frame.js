//Frame

var Frame = {
    open    :   function(){
        playing = 0;
        Background.change('hangar');
        backgroundSpeed = 1;
        titleText = game.add.text(game.world.width/2, 50, 'Space Ships',{ 
            font: "30px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        titleText.anchor.set(0.5);

        UserMenu.open();

    },
    close   :   function(){
        titleText.destroy();
        UserMenu.close();
    }
}
//Info Menu
var text = 'Space Ships is a shooting game.\n Tap \'Play\' to play.\nIn \'Hangar\' you can choose your ship.\nKilling an Alien brings you points,\n and loosing it decrease them.\nBe careful for Planets and Bosses\n- they give you extra bonus.'
var InfoMenu = {
    open    :   function(){
        UserMenu.close();
        info =  game.add.text(game.world.width/2, 165, text,{
            font: "18px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        info.anchor.set(0.5);
        backbutton =  game.add.text(game.world.width/2, 275, 'Back',{
            font: "18px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        backbutton.anchor.set(0.5);
        backbutton.inputEnabled = true;
        backbutton.events.onInputDown.add(InfoMenu.close, this);
        
    },
    close   :   function(){
        UserMenu.open();
        info.destroy();
        backbutton.destroy();
    }
}

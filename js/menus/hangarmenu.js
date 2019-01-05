//Hangar

var HangarMenu = {
    open    :   function(){
        UserMenu.close();
        ship1Text = game.add.text(game.world.width/2, 155, 'Shuttle:\nEnergy=4\nDamage=1\nSpeed=1.1lyps',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship1Text.anchor.set(0.5);
        ship1Text.inputEnabled = true;
        ship1Text.events.onInputDown.add(Ship.change, {'arg':0}, this);
        //ship1Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship1Image = game.add.sprite(50, 155, 'ship1');
        ship1Image.scale.setTo(ship1Text.width/2/ship1Image.width, ship1Text.height/ship1Image.height);
        ship1Image.anchor.set(0.5);
        ship1Image.inputEnabled = true;
        ship1Image.events.onInputDown.add(Ship.change, {'arg':0}, this);
        //ship1Image.events.onInputUp.add(StartScene.initializeChooseType, this);

        ship2Text = game.add.text(game.world.width/2, 250, 'Lunar:\nEnergy=3\nDamage=1\nSpeed=1.6lyps',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship2Text.anchor.set(0.5);
        ship2Text.inputEnabled = true;
        ship2Text.events.onInputDown.add(Ship.change, {'arg':1}, this);
        //ship2Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship2Image = game.add.sprite(50, 250, 'ship2');
        ship2Image.scale.setTo(ship2Text.width/2/ship2Image.width, ship2Text.height/ship2Image.height);
        ship2Image.anchor.set(0.5);
        ship2Image.inputEnabled = true;
        ship2Image.events.onInputDown.add(Ship.change, {'arg':1}, this);
        //ship2Image.events.onInputUp.add(StartScene.initializeChooseType, this);

        ship3Text = game.add.text(game.world.width/2, 345, 'Shadow:\nEnergy=2\nDamage=1\nSpeed=2.4lyps',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        ship3Text.anchor.set(0.5);
        ship3Text.inputEnabled = true;
        ship3Text.events.onInputDown.add(Ship.change, {'arg':2}, this);
        //ship3Text.events.onInputUp.add(StartScene.initializeChooseType, this);
        ship3Image = game.add.sprite(50, 345, 'ship3');
        ship3Image.scale.setTo(ship3Text.width/2/ship3Image.width, ship3Text.height/ship3Image.height);
        ship3Image.anchor.set(0.5);
        ship3Image.inputEnabled = true;
        ship3Image.events.onInputDown.add(Ship.change, {'arg':2}, this);
        //ship3Image.events.onInputUp.add(StartScene.initializeChooseType, this);
        
        backbutton =  game.add.text(game.world.width/2, 440, 'Back',{
            font: "18px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        backbutton.anchor.set(0.5);
        backbutton.inputEnabled = true;
        backbutton.events.onInputDown.add(HangarMenu.close, this);
    },
    close   : function(){
        ship1Text.destroy();
        ship1Image.destroy();
        ship2Text.destroy();
        ship2Image.destroy();
        ship3Text.destroy();
        ship3Image.destroy();
        backbutton.destroy();
        UserMenu.open();
    }
}
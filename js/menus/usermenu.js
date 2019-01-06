//Menus

var ChoosseShipImage;
var ChooseShipImage;

var GameSceneText;
var GameSceneImage;

var UserMenu = {
    open  :   function(){

        PlayText = game.add.text(game.world.width/2, 155, 'Play',{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        PlayText.anchor.set(0.5);
        PlayText.inputEnabled = true;
        PlayText.events.onInputDown.add(GameScene.initialize, this);
        PlayText.events.onInputUp.add(GameScene.initialize, this);
        
        LeaderboardText = game.add.text(game.world.width/2, 215, 'Leaderboard',{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        LeaderboardText.anchor.set(0.5);
        LeaderboardText.inputEnabled = true;
        //LeaderboardText.events.onInputDown.add(UserMenu.close, this);
        //ProfileText.events.onInputUp.add(StartScene.initializeChooseType, this);

        InfoText = game.add.text(game.world.width/2, 275, 'Game Info',{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        InfoText.anchor.set(0.5);
        InfoText.inputEnabled = true;
        InfoText.events.onInputDown.add(InfoMenu.open, this);
        //InfoText.events.onInputUp.add(InfoMenu.open, this);

        HangarText = game.add.text(game.world.width/2, 335, 'Hangar',{
            font: "25px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        HangarText.anchor.set(0.5);
        HangarText.inputEnabled = true;
        HangarText.events.onInputDown.add(HangarMenu.open, this);
        //HangarText.events.onInputUp.add(StartScene.initializeChooseType, this);

    },
    close   :   function(){
        PlayText.destroy();
        LeaderboardText.destroy(); 
        InfoText.destroy(); 
        HangarText.destroy();     
    }
}
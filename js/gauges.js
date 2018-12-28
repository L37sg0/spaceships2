//Gauges

var GaugeInviders = {
    initialize  : function(){
        freeAliens = 0;
        freeAliensText = game.add.text(10, 25, 'Inviders: '+freeAliens,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(){
        freeAliens += 1;
        freeAliensText.setText('Inviders: '+freeAliens);
    },
}
var GaugeDistance = {
    initialize  : function(){
        distance = game.rnd.integerInRange(50,100);
        distanceText = game.add.text(10, 50, 'New Planet: '+distance+' ly.',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(){
        distance -= 1;
        distanceText.setText('New Planet: '+distance+' ly.');
    },
}
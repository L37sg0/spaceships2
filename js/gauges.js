//Gauges
var freeAliens;
var freeAliensText;
var distanceText;
var planetsText;
var levelText;
var scoresText;
var timeText;

/*
var GaugeInviders = {
    initialize  : function(){
        if(freeAliensText){
            freeAliensText.destroy();
        }
        freeAliens = 0;
        freeAliensText = game.add.text(10, 25, 'Inviders: '+freeAliens,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(){
        if(freeAliens >= 50){
            DefendScene.initialize();
        }               
        freeAliens += 1;
        freeAliensText.setText('Inviders: '+freeAliens);
    },
    setnull     : function(){
        freeAliensText.destroy();
    }
}*/

var GaugeDistance = {
    initialize  : function(){
        if(distanceText){
            distanceText.destroy();
        }
        distance = game.rnd.integerInRange(50,100)+level;
        distanceText = game.add.text(10, 50, 'New Planet: '+distance+' ly.',{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(){
        if(distance<=0){
            AlienPlanet.initialize();
            GaugeDistance.initialize();
        }
        distance -= 1;
        distanceText.setText('New Planet: '+distance+' ly.');
    },
    setnull     : function(){
        distanceText.destroy();
    }
}
/*
var GaugePlanets = {
    initialize  : function(){
        if(planetsText){
            planetsText.destroy();
        }
        playerplanets = 1000;//game.rnd.integerInRange(50,100);
        planetsText = game.add.text(10, 75, 'Planets: '+playerplanets,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(arg){
        this.arg = arg;
        playerplanets += this.arg;
        planetsText.setText('Planets: '+playerplanets);
    },
    setnull     : function(){
        planetsText.destroy();
    }
}*/
var GaugeLevel = {
    initialize  : function(){
        if(levelText){
            levelText.destroy();
        }
        levelText = game.add.text(10, 75, 'Level: '+level,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(){
        //this.arg = arg;
        level += 1;
        if(level >= 100){
            level = 100;
        }
        levelText.setText('Level: '+level);
        Ship.initialize(shipConstructors[playerShip]);
        backgroundSpeed = level;
        //GameScene.end();
    },
    setnull     : function(){
        levelText.destroy();
    }
}
var GaugeScores = {
    initialize  : function(){
        if(scoresText){
            scoresText.destroy();
        }
        scoresText = game.add.text(10, game.world.height-30, 'Scores: '+Math.floor(scores),{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
    },
    update      : function(arg){
        this.arg = arg;
        scores += this.arg;
        if(scores >= 100*level){
            console.log(level);
            GaugeLevel.update();
        }
        scoresText.setText('Scores: '+Math.floor(scores));
    },
    setnull     : function(){
        scoresText.destroy();
    }
}
var GaugeBoss = {
    initialize  : function(){
        if(timeText){
            GaugeBoss.setnull();
        }
        time = 60;
        timeText = game.add.text(10, 100, 'New Boss in: '+time,{
            font: "15px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#2582583D"
        });
        timeTimer = game.time.create(false);
        timeTimer.loop(1000, GaugeBoss.update);
        timeTimer.start();
    },
    update      : function(){
        if(time <= 0){
            Boss.initialize();
            GaugeBoss.initialize();
        }
        time -= 1;
        timeText.setText('New Boss in: '+time);
    },
    setnull     : function(){
        timeText.destroy();
        timeTimer.stop();
    }
}
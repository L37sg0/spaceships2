    var game;  
    var boom;
    var shoot;
    var soundtrack;
    level = 1;
    playerShip = 0;

    var assets = [
        {"name":"ship1","src":"img/ship1.png"},
        {"name":"ship2","src":"img/ship2.png"},
        {"name":"ship3","src":"img/ship3.png"},
        {"name":"alien","src":"img/alien.png"},
        {"name":"boss","src":"img/boss.png"},
        {"name":"boss2","src":"img/boss2.png"},
        {"name":"boss3","src":"img/boss3.png"},
        {"name":"boss4","src":"img/boss4.png"},
        {"name":"hp","src":"img/hp.png"},
        {"name":"energy","src":"img/energy.png"},
        {"name":"background1","src":"img/background1.jpg"},
        {"name":"background2","src":"img/background2.jpg"},
        {"name":"background3","src":"img/background3.jpg"},
        {"name":"explosion","src":"img/explosion.png"},
        {"name":"bossbullet","src":"img/bossbullet.png"},
        {"name":"bullet1","src":"img/bullet1.png"},
        {"name":"bullet2","src":"img/bullet2.png"},
        {"name":"bullet3","src":"img/bullet3.png"},
        {"name":"planet1","src":"img/planet1.png"},
        {"name":"planet2","src":"img/planet2.png"},
        {"name":"planet3","src":"img/planet3.png"},
        {"name":"planet4","src":"img/planet4.png"},
        {"name":"planet5","src":"img/planet5.png"},
        {"name":"planet6","src":"img/planet6.png"},
        {"name":"planet7","src":"img/planet7.png"},
        {"name":"planet8","src":"img/planet8.png"},
        {"name":"planet9","src":"img/planet9.png"},
        {"name":"planet10","src":"img/planet10.png"},
        {"name":"hangar","src":"img/hangar.jpg"},
        {"name":"life","src":"img/life.png"}
];

    var lb;
    var highscores;
    var table;

    var col;
    var row;
    var timer;
    var back;
    var backs;

    var playing;
    var scores = 0;
    var lives = 3;
    var scoreText;
    var livesText;

    var gameText;
    var start = "Space Ships\nTap to play";
    var end = "Game Over\nScores: ";
    var contextId;
    var contextType;

    var playerName;
    var playerPic;
    var playerId;

    


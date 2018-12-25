// Functionality for live increase
    function initLife()
    {
        life = game.add.sprite(game.world.width*0.5, 0, "life");      
        life.scale.setTo(20/life.width, 20/life.height);
        game.physics.enable(life, Phaser.Physics.ARCADE);
        life.enableBody = true;
        //life.anchor.set(0.5);
        life.body.velocity.set(0, 200);
    }

    function initText()
    {
        scoreText = game.add.text(game.world.x+10, game.world.height-30, "Scores: "+scores,{
            font: "20px Arial",
            fill: "#e5e5e5",
            align: "right"
        });
        livesText = game.add.text(game.world.width-80, game.world.height-30, "Lives: "+lives,{
            font: "20px Arial",
            fill: "#e5e5e5",
            align: "right"
        });
        bossText = game.add.text(game.world.x+10, game.world.y+10, bossHP,{
            font: "10px Arial",
            fill: "#e5e5e5",
            align: "right"
        });
        lbText = game.add.text(game.world.width/2, 160, "",{
            font: "20px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#258"
        });
        lbText.anchor.set(0.5);
        lbText.inputEnabled = true;
        lbText.events.onInputDown.add(readLeaderBoard, this);

        gameText = game.add.text(game.world.width/2, 80, start,{
            font: "30px Arial",
            fill: "#e5e5e5",
            align: "center",
            backgroundColor: "#258"
        });
        gameText.anchor.set(0.5);
        gameText.inputEnabled = true;
        gameText.events.onInputDown.add(startGame, this);
    }


    function initBackground(background_image)
    {
        back = game.add.tileSprite(0, 0, game.world.width, game.world.height,  background_image);
    }

    function changeBackground(background_image){
        this.background_image = background_image;
        back.loadTexture(this.background_image);
    }

    function bulletHitAlien(bullet, alien)
    {
        bullet.kill();
        explode(alien);
        scores++;
        console.log("hit!");
    }

    function bulletHitBoss(boss, bullet)
    {   
        bullet.kill();
        bossHP-=1;
        if(!bossHP)
        {
            explode(boss);
            scores += 100;
            console.log("You win!!");
            bossTimer.stop();
            bossbullets.destroy();
            bossHP = "";
        }
        console.log("hit boss");
    }

    function alienHitShip(ship, alien)
    {
        lives -= 1;
        explode(alien);
        explode(ship);
        console.log("alien ship killed");
        game.time.events.add(Phaser.Timer.SECOND * 0.5, initShip, this);
        console.log("ALIEN: ship alives!!");
    }

    function bossbulletHitShip()
    {
        lives -= 1;
        bossbullet.kill();
        explode(ship);
        console.log("boss ship killed");
        game.time.events.add(Phaser.Timer.SECOND * 0.5, initShip, this);
        console.log("BOSS: ship alives!!!");
    }

    function explode(obj)
    {
            //boom.play();
            obj.loadTexture("explosion", 0);
            let killTween = game.add.tween(obj.scale);
            killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function(){
                obj.destroy();
                obj = 0;
            }, this);
            killTween.start();
    }

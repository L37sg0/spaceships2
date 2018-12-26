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
    }

    function alienHitShip(shipBody, alien)
    {
        shipEnergy.width -= 0.5; // Ship energy bar is 2px wide for a point, so we have to decrease it with 0.5, not 1.
        
        if(shipEnergy.width <= 0){
            Ship.delete();
        }
        explode(alien);
    }

    function bulletHitAlienPlanet(alienPlanetBody, bullet){
        bullet.kill();
        alienPlanetText.setText(alienPlanetText.text - shipDamage);
    }

    function bulletHitBoss(boss, bullet)
    {   
        if(bossHealth.width <= 0)
        {
            Boss.delete();
        }
        bossHealth.width -= shipDamage/2;
        bullet.kill();
    }


    function bossBulletHitShip(bullet)
    {
        bullet.kill();
        shipEnergy.width -= bossDamage/2;
        if(shipEnergy.width <= 0){
            Ship.delete();
        }
        console.log('ship hitted')
    }

    function explode(obj)
    {
            //boom.play();
            obj.loadTexture("explosion", 0);
            let killTween = game.add.tween(obj.scale);
            killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function(){
                obj.kill();
                obj = 0;
            }, this);
            killTween.start();
    }

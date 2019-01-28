//LB Menu

var LBMenu = {
    open    :   function(){
        UserMenu.close();
        
        contextId = FBInstant.context.getID();
        if(contextId==null)
        {
            lb = "nohighscores";
        }else if(contextId!=null)
        {
            lb = "highscores."+contextId;
        }else
        {
            console.log("Error!"+ contextId);
        }

        FBInstant.getLeaderboardAsync(lb).then(leaderboard => leaderboard.getEntriesAsync(10, 0)).then(entries => {
            table = game.add.group();
            for (var i = 0; i < entries.length; i++) {
                console.log(entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore());
                highscores = entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore();
                var text = game.add.text(game.world.width/2-60, 200+(20*i), highscores,{
                    font: "20px Arial",
                    fill: "#e5e5e5",
                    align: "center",
                    backgroundColor: "#258"
                }, table);
                text.anchor.set(0.5);
            }
        }).catch(error => console.error(error));
        
        backbutton =  game.add.text(game.world.width/2, 275, 'Back',{
            font: "18px Arial",
            fill: "#e5e5e5",
            align: "left",
            backgroundColor: "#2582583D"
        });
        backbutton.anchor.set(0.5);
        backbutton.inputEnabled = true;
        backbutton.events.onInputDown.add(LBMenu.close, this);
        
    },
    close   :   function(){
        UserMenu.open();
        backbutton.destroy();
        table.destroy();
    }
}


/*contextId = FBInstant.context.getID();
if(contextId==null)
{
    lb = "nohighscores";
}else if(contextId!=null)
{
    lb = "highscores."+contextId;
}else
{
    console.log("Error!"+ contextId);
}
playerName = FBInstant.player.getName();
addToLeaderBoard(scores, playerName, lb);
updateLeaderBoard(lb);
gameText.setText("Game Over\n"+playerName+",\nyou scored "+scores);
lbText.setText("View Leaderboard");
gameText.events.onInputDown.add(restartGame, this);
console.log("game over");


function addToLeaderBoard(scores, playerName, contextId)
{
    FBInstant.getLeaderboardAsync(lb).then(leaderboard => {
        console.log(leaderboard.getName());
        return leaderboard.setScoreAsync(scores);//{"name":playerName, "scores":scores});
      })
      .then(() => console.log('Score saved'))
      .catch(error => console.error(error));
}

function readLeaderBoard()
{
    FBInstant.getLeaderboardAsync(lb).then(leaderboard => leaderboard.getEntriesAsync(10, 0)).then(entries => {
        table = game.add.group();
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore());
            highscores = entries[i].getRank() + '. ' + entries[i].getPlayer().getName() + ': ' + entries[i].getScore();
            var text = game.add.text(game.world.width/2-60, 200+(20*i), highscores,{
                font: "20px Arial",
                fill: "#e5e5e5",
                align: "center",
                backgroundColor: "#258"
            }, table);
            text.anchor.set(0.5);
        }
    }).catch(error => console.error(error));

}

function updateLeaderBoard()
{
FBInstant.updateAsync({
    action: 'LEADERBOARD',
    name: lb
}).then(() => console.log('Update Posted')).catch(error => console.error(error));

}*/
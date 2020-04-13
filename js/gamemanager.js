let GameManager = {
 setGameStart: function(playerName){
   this.resetPlayer(playerName);
   this.setPreFight();
 },
 resetPlayer: function(playerName){
     switch (playerName) {
         case "Blanka":
             player = new Player(playerName, 200, 0 , 200, 100, 50);
             break;
     
             case "Ryu":
                player = new Player(playerName, 100, 20 , 100, 50, 100);
                break;
                case "Cammy":
                    player = new Player(playerName, 300, 10 , 60, 100, 150);
                    break;
        //  default:
        //      break;
     }
     let getInterface = document.querySelector(".interface");
     getInterface.innerHTML = '<img src="img/' + playerName.toLowerCase() +  '.png" class="img"><div><h3>' + playerName + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Chakra: ' + player.chakra + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
 },
 setPreFight: function(){  //if you want to grab something say get.... and if you want to change say set...
     let getHeader = document.querySelector(".header");
     let getActions  = document.querySelector(".actions");
     let getArena = document.querySelector(".arena");
     getHeader.innerHTML = '<p>Task:Find a enemy</p>';
     getActions.innerHTML = '<a href="#" class"btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>'
     getArena.style.visibility = "visible";
          
 },

   setFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions  = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");

    //Create enemy!

    let enemy00 = new Enemy("King", 100, 0, 50, 100, 100 );
    let enemy01 = new Enemy("Akuma", 200, 0, 50, 150, 100 );
    let chooseRandomEnemy = Math.floor(Math.random()
    * Math.floor(2));
     
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            break;
        case 1:
            enemy = enemy01;
            break;
    }
getHeader.innerHTML = '<p>Task: Choose your move!</p>';
getActions.innerHTML = '<a href="#" class"btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
getEnemy.innerHTML =  '<img src="img/' + enemy.enemyName.toLowerCase() +  '.png" alt="' + enemy.enemyName + '" class="img"><div><h3>' +  enemy.enemyName + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Chakra: ' + enemy.chakra + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>'; 

   }
}
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
     getInterface.innerHTML = '<img src="img/fight1/' + playerName.toLowerCase() +  '.png" class="img-Blanka">,<div><h3>' + playerName + '</h3><p>Health: ' + player.health + '</p><p>Chakra: ' + player.chakra + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
 },
 setPreFight: function(){

 },
}
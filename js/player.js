
let player;

function Player(playerName, health, chakra, strength, agility, speed){
    this.playerName = playerName;
    this.health = health;
    this.chakra = chakra;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


  let PlayerMoves = {
    calcAttack: function() {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    }
    let playerAttack = function(){
     let  calcBaseDamage;
     if (player.mana > 0) {
         calcBaseDamage = player.strength * player.mana/ 1000;
     }  else {
         calcBaseDamage = player.strength * player.agility / 1000;
     }
     let offsetDamage = Math.floor(Math.random() * Math.floor(10));
     let calcOutputDamage = calcBaseDamage + offsetDamage;
     
    }
}

// let player = new Player("Blanka", 200)
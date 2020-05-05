
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
         //Player attacks
    let playerAttack = function(){
        let  calcBaseDamage;
        if (player.mana > 0) {
            calcBaseDamage = player.strength * player.mana / 1000;
        }  else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1 ;
   
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
       }
       let enemyAttack = function(){
           let  calcBaseDamage;
           if (enemy.mana > 0) {
               calcBaseDamage = enemy.strength * enemy.mana / 1000;
           }  else {
               calcBaseDamage = enemy.strength * player.agility / 1000;
           }
           let offsetDamage = Math.floor(Math.random() * Math.floor(10));
           let calcOutputDamage = calcBaseDamage + offsetDamage;
           //Number of hits
           let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1 ;
      
           let attackValues = [calcOutputDamage, numberOfHits];
           return attackValues;
          }
   
          //get player/enemy health to change later!
          let getPlayerHealth = document.querySelector(".health-player");
          let getEnemyHealth = document.querySelector(".health-enemy");
   
          if (getPlayerSpeed >= getEnemySpeed){
                 let playerAttackValues = playerAttack();
                 let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                 enemy.health = enemy.health - totalDamage;
                 alert("You hit" + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times. ");
                 if (enemy.health <= 0){
                     alert("you win! refresh browser");
                     getPlayerHealth.innerHTML = 'Health: ' + player.health;
                     getEnemyHealth.innerHTML = 'Health: 0';
                 }else{
                     getEnemyHealth.innerHTML = 'Health' + enemy.health;
   
                     ///enemy 
                     let enemyAttackValues = enemyAttack();
                     let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                     player.health = player.health - totalDamage;
                     alert("You hit" + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
                     if (player.health <= 0){
                         alert("you lose! refresh browser");
                         getPlayerHealth.innerHTML = 'Health: 0';
                         getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                     }
                     else{
                       getPlayerHealth.innerHTML = 'Health: ' + player.health; 
                     }
                 }
          }
    }
   
}

// let player = new Player("Blanka", 200)
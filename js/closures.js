function quote() {
    const devise = 'le plaisir n\'est pas dans la ligne droite';
    const secondDevise = 'Faites la bourre, pas la guerre';

    return function() {
        console.log(`Dicton : ${devise}`);
        console.log(`Conseil : ${secondDevise}`);
    }
}

let getQuotes = quote();
getQuotes();

/********************************************/
/******| Rendre une variable privée |********/ 
/********************************************/ 

const warrior = {
    name: 'Ninja',
    energy: 20,
    alive: true
};

function createPlayer(playerName, gameName) {
    let score = 0;

    return {
        enemyKilled: function(enemy) {
            enemy.alive = false;
            score += 10;
            console.log(score);
            console.log(`${enemy.name} a été tué`);    
        },
        attack: function(enemy) {
            if(!enemy.alive) {
                console.log('Vous avez déjà tué cet ennemi');
            } else {
            enemy.energy -= 10;
            if(enemy.energy <= 0) {
                this.enemyKilled(enemy);
            }
            }
        },
        getScore: function() {
            console.log(`${playerName} votre score à "${gameName}" est ${score}`);
            return score;
        } 
    };
} 
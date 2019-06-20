// Object literal syntax
const vehicle = {
    id: 1,
    brand: 'Triumph',
    model: 'Daytona 675 R',
    color: 'Blanc',
    electronic: function (){
        console.log('Traction Control');
    }
};

Object.keys(vehicle);

//vehicle.brand = 'Honda' : On change dans notre objet vehicle, brand: 'Suzuki' en brand: 'Honda'


console.log(vehicle);
// Pour ce console.log(); on rajoute l'appel d'une fonction propre, à electronic
console.log(vehicle.electronic());
// Pour celui-ci on affichera nos valeurs dans l'objet en plus de notre fonction electronic
console.log(Object.keys(vehicle));


/******| Les Objet.keyd() |******/
/*
    Cette méthode est considéré comme static, parce qu'elle est appelé sur la class Object.keys();
    Alors que sur notre cconst vehicle c'est un objet litéral, c'est à dire sur l'instance
*/

const res = Object.keys(vehicle);
res.map((item) => {
    console.log(`Voici la key ${item}`);
})

console.log(res);
// res est le diminutif de result

/******| Getter |******/

Object.defineProperty(vehicle, 'summary', {
    get: function() {
        return `véhicule ${this.brand} de couleur ${this.color}`; 
    },
/******| Setter |******/    
    set: function(value) {
        const caracterics = value.split(',');
        this.brand = caracterics[0];
        this.model = caracterics[1];
        this.color = caracterics[2];
    }
});

vehicle.summary = 'triumph, daytona, blanche';

console.log(vehicle.summary);

/*******************************/
/******| Cloner un objet |******/ 
/*******************************/ 

/*************************/
/******| Méthode 1 |******/  
const firstHand = {id: 2, brand: 'Kawasaki', model: 'ZX6-R 636', color:'verte'};
const secondHand = Object.assign({}, firstHand, {color: 'bleu', powerhorse:'125ch'});

/*******************************************/
/******| Spread Operator (méthode 2) |******/  
const thirdHand = {...firstHand, color: 'noir'};

/****************************************/
/******| LocalStorage (méthode 3) |******/  
const fourth = JSON.parse(JSON.stringify(firstHand));

console.log(firstHand);
console.log(secondHand);
console.log(thirdHand);
console.log(fourth);
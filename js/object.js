// Object literal syntax
const vehicle = {
    id: 1,
    brand: 'Suzuki',
    model: 'GSXR1000',
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
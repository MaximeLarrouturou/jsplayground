const pilotes = [
    {
        id: 1, 
        first: 'Freddy', 
        last: 'Foray', 
        activity : 'Pilote de moto', 
        team: 'Suzuki Endurance Racing Team (SERT)', 
        country: 'France', 
        born: '02/08/1984', 
        startcareer: '2001'
    },
    {
        id: 2, 
        first: 'Jonathan', 
        last: 'Rea', 
        activity : 'Pilote de moto', 
        team: 'Kawasaki Racing Team (KRT)', 
        country: 'Irlande', 
        born: '02/02/1987', 
        startcareer: '2005'
    },
    {
        id: 3, 
        first: 'Sebastien', 
        last: 'Loeb', 
        activity : 'Pilote de rallye', 
        team: 'Hyundai Motorsport', 
        country: 'France', 
        born: '26/02/1974', 
        startcareer: '1995'
    },
    {
        id: 4, 
        first: 'Sylvain', 
        last: 'Bidart', 
        activity : 'Pilote Supermotard', 
        team: 'Honda Luc1', 
        country: 'France', 
        born: '02/03/1985', 
        startcareer: '2004'
    },
    {
        id: 5, 
        first: 'Alain', 
        last: 'Prost', 
        activity : 'Pilote Automobile', 
        team: 'Williams-Renault', 
        country: 'France', 
        born: '24/02/1955', 
        startcareer: '1980'
    },
    {
        id: 6, 
        first: 'Serge', 
        last: 'Nuques', 
        activity : 'Pilote de moto', 
        team: '', 
        country: 'France', 
        born: '10/01/1971', 
        startcareer: '1980'
    }
]

const numbers = [1, 2, 3, 4, 5];
let reduceNumbers = numbers.reduce((acc, curr) =>  {
    console.log('acc', acc);
    console.log('curr', curr);
    return acc + curr;
}, 0);
console.log(reduceNumbers);


let cart = [
    {
        id:1,
        title: 'Casque',
        price: 750
    },
    {
        id:2,
        title: 'Blouson',
        price: 420
    }
];

let totalCart = cart.reduce((acc, curr) =>  {
    return acc + curr.price;
}, 0);
console.log(totalCart);


const category = ['moto', 'voiture', 'avion', 'bateau', 'velo', 'moto', 'camion', 'moto'];
const catObj = category.reduce((acc, curr) => {
    if(!acc[curr]) {
        acc[curr] = 0;
    }
    acc[curr] += 1;
    return acc;
}, {});
console.log(catObj);

/*****************************************/
/******| Recréer map() avec Reduce |******/ 
/*****************************************/ 

const prices = [100, 25, 80, 250, 1450, 65];
console.log(prices);

const TAXE = 0.2;

const priceWithTAXE = prices.reduce((acc, curr) => {
    curr = curr + curr * TAXE;
    acc.push(curr);
    return acc;
    
}, []);

console.log('map() avec reduce', priceWithTAXE);

/*****************************************/
/******| Recréer filter() avec Reduce |******/ 
/*****************************************/ 

const frenchPilotes = pilotes.reduce((acc, curr) => {
    if(curr.country === 'France') {
        acc.push(curr);
    }
    return acc; 
}, []);

console.log('filter() avec reduce', frenchPilotes);


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
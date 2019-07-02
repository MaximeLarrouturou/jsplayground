const arrayType = [1, 'string', true];
console.log(arrayType);

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
];

/**********************/
/******| map(); |******/
/**********************/

// const fullNames = pilotes.map((pilote) => pilote.first + ' ' + pilote.last;);

const fullNames = pilotes.map((pilote) => {
    return pilote.first + ' ' + pilote.last;
});

console.log(fullNames);


/*************************/
/******| filter(); |******/
/*************************/

// const pilotesFR = pilotes.filter((pilotes) => pilotes.country === 'France';);

const pilotesFR = pilotes.filter((pilotes) => {
    return pilotes.country === 'France';
}); 

console.log(pilotesFR);


/***********************/
/******| sort(); |******/
/***********************/

let pilotesAlpha = pilotes.sort((p1, p2) => {
    if(p1.last > p2.last) {
        return 1;
    } else {
        return -1;
    }
});
console.log(pilotesAlpha);


let numbers = Array.of(1, 2, 3);

// function add() {
//     console.log(arguments);

//     let total = 0;
//     for(i = 0; i < arguments.length; i++) {
//         total += arguments[i];

//     }
//     console.log(total);
// }

function multiplication() {
    const args = Array.from(arguments);
    const double = args.map(function(number) {
        return number * 2;
    });
    console.log(args);
    console.log(double);
}

const divs = document.querySelectorAll('div');
const divsArray = Array.from(divs);

console.log(divsArray);

//NodeList
console.log(divs);

/*********************************/
/******| Clôner un tableau |******/ 
/*********************************/ 

/*************************************/
/******| Méthode 01 - 'slice();' |******/ 
/*************************************/ 
let pilotesSecond = pilotes.slice();
console.log('Clone array - Méthode slice();', pilotesSecond);

/**************************************/
/******| Méthode 02 - 'concat();' |******/ 
/**************************************/ 
let pilotesThird = [].concat(pilotes);
console.log('Clone array - Méthode concat();', pilotesThird);

/********************************************/
/******| Méthode 03 - 'Spread Operator' |******/ 
/********************************************/ 
let pilotesFourth = [...pilotes];
console.log('Clone array - Méthode SpreadOperator', pilotesFourth);

/********************************************/
/******| Méthode 04 - 'Array.from();' |********/ 
/********************************************/ 
let pilotesFifth = Array.from(pilotes);
console.log('Clone array - Méthode Array.from();', pilotesFifth);


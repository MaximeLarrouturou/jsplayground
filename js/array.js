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
]

console.log(pilotes);


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
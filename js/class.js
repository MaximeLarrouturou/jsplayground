console.log(this);

const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click', start);

function start() {
    console.log(this);
}

class Motorbike {
    constructor(brand, model, color) {
        console.log('this depuis le constructor parent', this);
        console.log('constructeur de la class Motorbike');    
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

class Supermoto extends Motorbike {
    constructor(brand, model, color, tire) {
        console.log('constructeur de la class Supermoto');    
        super(brand, model, color);
        console.log('this depuis le constructor enfant', this);
        this.tire = tire;
    }
}

const supermoto = new Supermoto('Honda', 'CRF 450', 'orange/noir', 'Michelin');

// instanceof
console.log('supermoto instanceof Motorbike', supermoto instanceof Motorbike);
console.log('supermoto instanceof Supermoto', supermoto instanceof Supermoto);
console.log('supermoto instanceof Object', supermoto instanceof Object);

// Objet
const motogp = {
    model:'YZR-M1',
    isRunning: false,
    startUp: function() {
        this.isRunning = true;
        console.log('this depuis motogp',this);
    }
};
motogp.startUp();

// Objet 
const mechanic = {
    name: 'Dave Hopkinson',
    tools: ['tournevis', 'clés à cliquet', 'clé dynanométrique'],
    informIsUse: function(tool) {
        console.log(tool + ' a été utilisé');
    },

/********************************************************/
/******| Solution 1 : capturer 'this' dans 'self' |******/ 
/********************************************************/ 

    useTools: function() {
        var self = this;
        console.log('this depuis useTools', this);
        this.tools.forEach(function(tool) {
            console.log('this depuis le callback this.tools.forEach()', this);
            console.log('self depuis le callback this.tools.forEach()', self);
            self.informIsUse(tool);// this.informIsUse(tool);
        });
    }
};
 
console.log(mechanic.useTools());

/************************************************************/
/******| Solution 2 : utiliser une arrow function ES6 |******/ 
/************************************************************/ 

// useTools: function() {
//     var self = this;
//     console.log('this depuis useTools', this);
//     this.tools.forEach((tool) => {
//         console.log('this depuis le callback this.tools.forEach()', this);
//         self.informIsUse(tool);// this.informIsUse(tool);
//     });
// }
// };

// console.log(mechanic.useTools());


const piloteFirst = {
    year: 31,
    name: {
        first: 'Mike',
        last: 'Di Meglio'
    }
};

const piloteSecond = {
    year: 34,
    name: {
        first: 'Freddy',
        last: 'Foray'
    }
};

const piloteThird = {
    year: 26,
    name: {
        first: 'Josh',
        last: 'Hook'
    }
};

const raceFirst = {
    place: 'Bol d\'or',
    duration: '24 heures'
};
const raceSecond = {
    place: '24h motos',
    duration: '24 heures'
};
const raceThird = {
    place: 'Slovakia Ring',
    duration: '8 heures'
};
const raceFourth = {
    place: 'German Speedweek oschersleben',
    duration: '8 heures'
};
const raceFifth = {
    place: 'Suzuka',
    duration: '8 heures'
};

function register(race) {
    console.log(this, race);
    const message = `${this.name.first} ${this.name.last}, ${this.year <= 30 ? 'ne ' : ''}participera ${this.year <= 30 ? 'pas ' : ''}à la course du ${race.place}`;
    console.log(message);
}
register.call(piloteSecond, raceThird);

/**********************/
/******| bind() |******/ 
/**********************/ 

const freddyRegister = register.bind(piloteSecond);
console.log(freddyRegister);

// Freddy participera aussi à la seconde course
console.log(freddyRegister(raceFirst));
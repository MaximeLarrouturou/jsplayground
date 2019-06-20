console.log('__proto__')
console.log('Constructeur.prototype.propriété = "string"');
console.log('InstanceObjet.propriété = "string"');

function Motorbike(brand, model, color, driver = "anonyme") {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.speed = 100;
    this.driver = driver || 'anonyme';
}

/******| Instance Objet |******/ 
const motorbike = new Motorbike(`Yamaha`, `YZF-R6 600`, `noir/blanc/bleu`);
const motorbikeSecond = new Motorbike(`Honda`, `CBD 600 RR`, `rouge/blanc/bleu`);
const motorbikeThird = new Motorbike(`Triumph`, `Daytona 675 R`, `blanc`);

Motorbike.prototype.country = 'Japon';
motorbikeThird.country = 'Angleterre';

/***************************************************/
/******| Ajouter une fonction à un prototype |******/ 
/***************************************************/ 

Motorbike.prototype.electronic = function() {
    console.log('Traction Contrôl');
};

Motorbike.prototype.break = function() {
    this.speed -= 10;
};

Motorbike.prototype.year = 2018;    
motorbike.year = '2016';
motorbike.driver = 'Jules Cluzel';

console.log('Motorbike.prototype', Motorbike.prototype);
console.log('motorbike.__proto__', motorbike.__proto__);
console.log('motorbikeSecond.__proto__', motorbikeSecond.__proto__);

// Keys des InstanceObjet
console.log('Keys de motorbike', Object.keys(motorbike));
console.log('Keys de motorbikeSecond', Object.keys(motorbikeSecond));
console.log('Keys de motorbikeThird', Object.keys(motorbikeThird));

console.log('motorbike.country', motorbike.country);

console.log(motorbike.__proto__ === Motorbike.prototype);


// Instance Objet, controle sur 'year' et 'driver'
console.log('motorbike', motorbike);
console.log('motorbikeSecond', motorbikeSecond);
console.log('motorbikeThird', motorbikeThird);

/********************************************************************/
/******| Changer Motorbike pour pointer sur un nouvelle objet |******/ 
/********************************************************************/ 

Motorbike.prototype = { country: 'Autriche', speedLimitation: false };

const motorbikeFourth = new Motorbike('KTM', 'Superduke 1290 R', 'orange/blanc/noir');
console.log('motorbikeFourth.__proto__', motorbikeFourth.__proto__);
console.log('motorbikeFourth', motorbikeFourth);

//const divs = document.querySelectorAll('div');

function Supermoto(brand, model, color, tire) {
    Motorbike.call(this, this.brand, this.model, this.color, this.driver);
    this.tire = tire;
};

Supermoto.prototype = Object.create(Motorbike.prototype);
Supermoto.prototype.constructor = Supermoto;
const supermoto = new Supermoto(`Honda`, `450 CRF`, `noir/rouge`, `Michelin`);

console.log(supermoto);
console.log('supermoto.__proto__', supermoto.__proto__);

/******| instanceof |******/ 

// Nous sommes dans le cas d'une chaîne prototype
console.log('supermoto instanceof Supermoto', supermoto instanceof Supermoto);
console.log('supermoto instanceof Motorbike', supermoto instanceof Motorbike);
console.log('supermoto instanceof Object', supermoto instanceof Object);
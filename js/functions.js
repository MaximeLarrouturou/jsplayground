// fonction anonyme passée en callback de la fonction addEventListener
var btnGreet = document.querySelector('#btnGreet');
btnGreet.addEventListener('click', function() {
    console.log('click');
});

var isYoung = true;
if(isYoung) {
    var nextAction = 'Allez voyager !';
}

console.log(nextAction);

/* 
    si 'let' ou 'const' est employé à la place de 'var' dans le bloc 'if(isYoung) {…}' 
    alors 'console.log(nextAction);' ne sera pas afficher 
*/

/****| const |****/

/* 
    Pour 'const' si on souhaite changer la valeur d'une constante.
        Exemple :  
            var isYoung = true;
                if(isYoung) {
                    const nextAction = 'Allez voyager !';
                    nextAction = 'Allez sut la lune !';  /*\ on veut changer la valeur ici /*\
                }

        Notre DOM nous retournera :
            'Uncaught TypeError: Assignment to constant variable. 
                at 'file.html:line''      
*/

// fonction déclaration
function greet(firstName) {
    console.log('Hello ' + firstName);
    var test = 'Je suis une variable de test dans une fonction';
    
    setTimeout(function(){
        console.log(test);
    }, 2000 )

    return true;
}
greet('Max');

// fonction d'expression
var sayGoodBye = function sayGoodBye (firstName) {
    var result = 'Au revoir ' + firstName;
    return result;
}


// on spécifie des paramètres
function motobike(make, power) { // function motobike(make, power = 100), si besoin d'indiquer une valeur par defaut
    console.log(`Je roule en : ${make} . Avec une puissance de : ${power} ch`);
}

// template string ${}

// on passe des arguments
motobike('Kawasaki ZX10R', 203);


/*******| constructeur |*******/

function Motorbike(marque, modele, annee, cc, puissance, couple, prix, autre) {

}

const motorbikeToBuy = new Motorbike('Kawasaki', 'ZX10-R', '2019', 998, '203ch', '114.9 N•m', 18099, ''); 

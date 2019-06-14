// Objet
var moto = { motoType: 'Kawasaki' };

// Immediatly Invoked Function Expression
(function(){
    console.log('IIFE appelé !');
    var testScope = 'crééé depuis une IIFE'
    console.log(testScope);
    moto.country = `Japon`;
    console.log(moto);
}(moto));
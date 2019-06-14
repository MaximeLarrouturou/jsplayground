/* 
    L'appel de la fonction se fait à l'aide de =>

    Exemple:
        
    () => {} 

    au lieu de function() {}    
*/
var btnArrow = document.querySelector('#btnArrow');
btnArrow.addEventListener('click', () => { // l'arrow function est ici
    console.log('arrow');
});
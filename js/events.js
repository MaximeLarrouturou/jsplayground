/***************************/
/******| Event click |******/  
const btnMoto = document.querySelector('#btnMoto');
btnMoto.addEventListener('click', gaz);

function gaz(evt) {
    console.log('click', evt);
}

window.addEventListener('click', locate);

function locate(evt) {
    console.log(evt);
}

/******************************/
/******| Event Keyboard |******/  
window.addEventListener('keydown', getKeycode);

function getKeycode(evt) {
    //console.log(evt);
    console.log('KeyCode', evt.keyCode);
    if(evt.keyCode === 13) {
        console.log('Enter');
    }
} 

// https://keycode.info/

window.addEventListener('keydown', getKeycode); 

let alphabet = [];
let numbers = [];

function getKeycode(evt) {
    if(evt.keyCode >=65 && evt.keyCode <= 90) {
        alphabet.push(evt.keyCode);
        return;
        
    }
    //console.log(evt.keyCode);
}

function numbersOnly(evt) {
    // save digits only
    if(evt.keyCode >= 96 && evt.keyCode <= 105) {
      numbers.push(evt.keyCode);
    }
  }

/*****************************************/
/******| Autorisé certaines touche |******/
var keyCodes = {
    27 : "échap",
    32 : "barre d'espace",
    46 : "suppr",
    48 : "0",
    49 : "1",
    50 : "2",
    51 : "3",
    52 : "4",
    53 : "5",
    54 : "6",
    55 : "7",
    56 : "8",
    57 : "9",
    96 : "pavé 0 ",
    97 : "pavé 1 ",
    98 : "pavé 2 ",
    99 : "pavé 3 ",
    100 : "pavé 4 ",
    101 : "pavé 5 ",
    102 : "pavé 6 ",
    103 : "pavé 7 ",
    104 : "pavé 8 ",
    105 : "pavé 9 ",
    106 : "multiplié par ",
    107 : "plus",
    109 : "moins",
    111 : "divisé",
    187: "égal"
};

window.addEventListener('keydown', allowSpecificKeys);
function allowSpecificKeys(evt) {
  /******| Méthode 'in' |******/
  /* 
     if(evt.keyCode in keyCodes) {
       console.log(true);
     } else {
       console.log(false);
     }   
  */ 
  if(keyCodes.hasOwnProperty(evt.keyCode)) {
    console.log(true);
    } else {
    console.log(false);
    }  
  }
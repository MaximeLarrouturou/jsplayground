/*
    const vehicle = {
        id: 1,
        brand: 'Triumph',
        model: 'Daytona 675R',
        color: 'Blanc'
    };
    const vehicle = {
        id: 2,
        maker: 'Yamaha',
        type: 'R6',
        color: 'Noir/Blanc/Bleu'
    };
*/

function Motorbike(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}

const motorbike = new Motorbike(`Yamaha`, `YZF-R6 600`, `noir/blanc/bleu`);
const motorbikeSecond = new Motorbike(`Honda`, `CBR 600 RR`, `rouge/blanc/bleu`);

console.log(motorbike, motorbikeSecond);
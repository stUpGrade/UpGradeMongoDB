// class Perro {
//     constructor(raza, color) {
//         this.raza = raza;
//         this.ancho = ancho;
//     }
//     ladrar() {
//         return "guau,guau";
//     }
// }

// const pumuki = new Perro('golden', 'pumuki');

// console.log();

const a = 'CoMiDa'
const b = 'comida'

console.log(a.toLocaleLowerCase() == b.toLocaleLowerCase());
  
console.log(/a/i.test('comida'));




- src - routes
    - controllers
      -models                      



      edificio: direccion, pisos

      pisos: altura, superficie, habitaciones

    habitaciones: - color, tipo 
    
      
skateboard - marca, medida, color, ejes
  ejes - marca, size, color, ruedas
    ruedas - marca, dureza, color, tamaño
      
const mongoose = require('mongoose');
const -----Schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    nif: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    siblings: [{ type: String }]
})
const Person = mongoose.model('Person', personSchema);
module.exports = Person;


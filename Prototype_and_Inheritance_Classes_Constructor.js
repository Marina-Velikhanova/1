let animal = {};
let cat = {};
animal.move = "jumping";
cat.__proto__ = animal;
console.log (cat.move);
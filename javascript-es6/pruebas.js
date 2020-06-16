//constructores
function Contador() {
  this.cuantos = 0;
  this.total = 0;
}
Contador.prototype.add = function(array) {
  array.forEach(function(param) {
    this.cuantos++;
    this.total += param;
  }, this);
};

var obj = new Contador();
obj.add([100,10,22,0]);
console.log(obj.cuantos);
console.log(obj.total);

//arrow functions
let cuantos = numero => `Hay ${numero} casos`;
console.log( cuantos(88) );

//Ejercicios
for (var i = 0; i<4; i++){ 
setTimeout(function(){console.log(i), 0};
} 

let x = function() {
    return
    {
        message: 'hola'
    }
}


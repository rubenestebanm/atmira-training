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

////////////
let x = function() {
    return
    { 
        message: 'hola'
    }
}

/////////////////
function buildFuntions() { 
  var arr = []; 
  for (var i = 0; i<3; i++) { 
    let j =i
    arr.push(function() {
      console.log(j);
    }) 
  } 
  return arr; 
}  

var fs = buildFuntions();
fs[0](); 
fs[1](); 
fs[2](); 

//////////
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var resultado = nums.splice(nums.indexOf(5),1);
console.log(resultado);

//////////////
var [greeting, ...intro] = ["Hello", "I" , "am", "Sarah"]; 
console.log(greeting); //"Hello" 
console.log(intro); //["I", "am", "Sarah"] 

/////////////
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; 
const result = words.filter(word => word.length > 6); 
console.log(result);  // ["exuberant", "destruction", "present"] 

////////////
var person = {name: "Sarah", country: "Nigeria", trabajo: "Developer"}; 
var nombre, pais, job
({name:nombre, country:pais, job} = person); 

console.log(nombre); //"Sarah" 
console.log(pais); //"Nigeria" 
console.log(job); //Developer" 
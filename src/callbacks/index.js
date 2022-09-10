/* Ejample 1 */
function sum(num1, num2){
  return num1 + num2;
}

function calc(num1,num2,callbacks){
  return callbacks(num1,num2);
}

console.log(calc(2,5,sum));

/* Example 2 */
setTimeout(function(){
console.log('Hola JavaScript')
},3000)


/* Example 3 */
function greeting(name){
  console.log(`Hi, ${name}`)
}

setTimeout(greeting, 3000, 'Gladibeth')
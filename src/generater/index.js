function* generate(){
  yield 1;
  yield 2;
  yield 3;
}

const g = generate();

console.log(g.next().value);


function* iterable(array){
  for (let value of array){
    yield value;
  } 
}
const it = iterable(['Gladibeth', 'Yonnys', 'Nilka'])
console.log(it.next().value)
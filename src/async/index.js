function fnAsync(){
  return new Promise((resolve, reject) => {
    (3 > 4)
      ? setTimeout(() => resolve('Hey true'),2000)
      : reject(new Error('Es error'))    
  })
}

const anotherFn = async ()  => {
  const something = await fnAsync();
  console.log(something)
  console.log('Hello')
}

console.log('Before')
anotherFn();
console.log('After')
import fetch from'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

async function* fetchData(url){
  const response = await fetch(url);
  yield await response.json();
}

fetchData(`${urlApi}/products`).next().then(({value,done}) => {
  console.log(value);

  const productId = value[0].id;

  console.log(productId)

  fetchData(`${urlApi}/products/${productId}`).next().then(({value,done}) => {
    console.log(value.title);
  
    const categoryId = value.category.id;
    fetchData(`${urlApi}/categories/${categoryId}`).next().then(({value,done}) => {
      console.log(value.name);
  
    })
  })
})

fetchData(API)
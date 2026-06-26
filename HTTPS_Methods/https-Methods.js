


let exmp = 
    {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}


   let fetching = await fetch("https://api.restful-api.dev/collections/products/objects" , 
   {
    method : 'POST',

    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'x-api-key' : '6628b21d-023b-46be-afdc-e097e3648f0a',
    },

    body : JSON.stringify(exmp)}
)

let txt = await fetching.json();
console.log(JSON.stringify(txt.data));
console.log(txt.id);
console.log(txt.name);
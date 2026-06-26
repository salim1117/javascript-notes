

// fetch("https://catfact.ninja/breeds")
// .then( (res) => res.text()  )
// .then( (txt) => {  
//     let data = JSON.parse(txt)
//     console.log(data)

//     console.log(data.current_page);

//     console.log(data.data[0]);
//     console.log(data.data[1]);

//     console.log(data.first_page_url);

//   }  )

// .catch( () => console.log("Error"));



async function fetchCatData() {

   try 
   {
    const data  =  await fetch("https://catfact.ninja/breeds");
    
    const text = await data.json();
   //  const text =   await data.json();
     console.log(text);
     console.log(text.data[1]);
     console.log(text.data[0].breed)

   }



    catch (error) {
        console.log("Error");
    }

}

fetchCatData();

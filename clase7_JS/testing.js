// console.log("Inicio");
// setTimeout(() => {
//   console.log("Tarea asincrónica completada");
// }, 6000); //milliseconds
// console.log("Fin");



// console.log("1");
// setTimeout(() => console.log("2"), 0);
// console.log("3");



// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     setTimeout(() => {
//       if (success) {
//         resolve("Se resolvió");
//     }
//       else {
//         reject("Error");
//     }
//     }, 1000);
//   });
  
//   promise
//     .then(value => console.log(value))
//     .catch(error => console.error(error));



// async function execute() {
//   const promise = new Promise((resolve, reject) => {
//     const success = true;
//     setTimeout(() => {
//       if(success){
//         resolve("Se resolvio");
//       }
//       else{
//         reject("Error");
//       }
//     }, 1000);
//   })

//   try {
//     const result = await promise;
//     console.log("Resultado:", result);
//   }catch (error) {
//     console.error("Error capturado:", error);
//   }finally{
//     console.log("Fin");
//   }
// }
// execute();




// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((value) => console.log(value))
// .catch((error) => console.error)



async function fetchData() {
    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await result.json()
        return data.title
    } catch(error){
        console.error(error)
    }
}

fetchData()
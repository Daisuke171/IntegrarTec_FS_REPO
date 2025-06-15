function mostrar(str){
    console.log(`Bienvenido ${str}`)
}

function cambiarNombre() {
    let nombre = "Carlos";
    nombre = "Pedro"; 

    console.log("Nuevo nombre:", nombre);

    mostrar(nombre);
}

cambiarNombre();
// 'Nuevo nombre: Pedro'
// 'Bienvenido Pedro'

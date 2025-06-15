// Hacer un timer que muestre en pantalla una cuenta del 1 al 10 mediante el uso de un bucle for. 
// Una vez realizado el timer, verificar que es lo que sucede si en lugar de utilizar let 
// para declarar el iterador del bucle, se usa var. 
// Intentar corregir dicho comportamiento, considerando que parte es sincrónica 
// del código y cual asincrónica.

const option = 'var'; // o let

const timerLetVar = (option) => {
    if (option === 'let'){
        for(let i=0; i<10; i++){ 
            setTimeout(() => {
                console.log(i+1)
            }, 1000*(i+1));
        }
    }
    else if(option === 'var'){
        for(var i=0; i<10; i++){
            setTimeout(() => {
                var j = i++
                console.log((j%10)+1);
            }, 1000*(i+1))
        }
    }
};

timerLetVar(option);
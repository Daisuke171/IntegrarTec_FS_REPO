// Realiza la implementación de una calculadora básica con JavaScript. 
// Para ello crea las funciones de sumar, restar, multiplicar y dividir. 
// Utiliza un diccionario o un map para organizar el código y 
// respeta las prácticas vistas en esta clase.

const calculatorArithmetic = new Map([
    ["suma", (a,b) => a+b],
    ["resta", (a,b) => a-b],
    ["producto", (a,b) => a*b],
    ["division", (a,b) => {
        if(b===0 || b===Infinity || b===-Infinity){
            throw new Error("La división entre cero o infinito está indeterminada.");
        }
        return a/b;
    }],
    ["exponenciacion", (a,b) => {
        if(a===0 && b===0){
            throw new Error("Exponer cero a la cero esta indefinido.")
        }
        return a**b;
    }],
]);

const calculator = (operator, num1, num2) => {
    operator = operator.toLowerCase();
    
    if(!calculatorArithmetic.has(operator)){
        throw Error("El operador ingresado es incorrecto");
    }
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw Error("No se ingresaron numeros.")
    }

    const result = calculatorArithmetic.get(operator)(num1,num2);

    console.log(result);
}

calculator("logaritmo",5,1);
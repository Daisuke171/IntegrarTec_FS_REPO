class Pet{                                          //molde para objetos
    #name;
    static category = 'animal';

    constructor(name, species, color, age){
        this.#name = name;
        this.species = 'Dog';
        this.color = 'Black';
        this.age = 4;
    }

    #getName(){                                     //private getter
        //metodo privado
        return this.#name;
    }
    getNamePublic(){                                //public getter
        //metodo publico
        return this.#getName();
    }

    set setName(newName){                           //setter
        this.#name = newName;
    }

    talk(){
        if(this.species==='Dog'){
            console.log('Woof');
        }
        else if(this.species==='Cat'){
            console.log('Meow');
        }
    }

    static message(pet){
        const name = pet.getNamePublic();
        console.log(`${name} is a ${pet.color} ${pet.species}`);
    }
}

const myDog = new Pet('Hessian', 'Dog', 'White', 5); //Instanciamiento de objeto
const myCat = new Pet("Toga", 'Cat', 'Calico', 6);
console.log(myDog);
console.log("----------------")
console.log(myDog.color);
console.log("");

////////////////////////////////////////////////////////////////////////////////

class Owner{
    constructor(name, adress, phone, pet){
        this.name = name;
        this.adress = adress;
        this.phone = phone;
        this.pet = pet;
    }
}

const emi = new Owner('Emiya','97 street', '321123', [myDog, myCat]);

Pet.category;           ///atributo estatico
Pet.message(myDog);     ///metodo estatico
myCat.talk();           
myDog.talk();
myCat.getNamePublic;
console.log("");

////////////////////////////////////////////////////////////////////////////////

///Objetos literales

const myCat2 = {
    name: 'Kony',
    color: 'White',
    age: {
        value: 4,
        name: 'years'
    },

    // getInfo() => {
    //     console.log(this.name); // no funciona porque la funcion flecha no tiene su propio this
    // }
    getInfo(){
        console.log(this.name);
    },

    get info(){
        console.log(this.name);
    },
    set setName(setName){
        this.name = newName;
    }
}

console.log(myCat2);
console.log(myCat2.color);
console.log("");

////////////////////////////////////////////////////////////////////////////////
///Static methods

class Calculator{
    static value = 555;
    constructor(startingValue = 0){
        this.result = startingValue;
    }

    sum(value){
        return (this.result += value);
    }
    substract(value){
        return (this.result -= value);
    }

    static sum(a, b){
        return (a+b);
    }
    static substract(a, b){
        return (a-b);
    }
}


const myCalc = new Calculator(15);
myCalc.sum(3) //18
console.log(myCalc.result);
myCalc.substract(1) //17
console.log(myCalc.result);
console.log(Calculator.substract(2, 4)); //-2
console.log("");
////////////////////////////////////////////////////////////////////////////////
/// rest operator

function sum(...numbers){
    let result = 0;
    numbers.forEach((number) => (result += number));
    return result;
}
console.log((sum(1,2,3,4,5))); // 15
console.log(sum(10,30)); // 40
console.log(sum()); // 0
console.log("");

////////////////////////////////////////////////////////////////////////////////
/// destructuring

const person = {
    fullname: 'Marcus Aurelius',
    age: 59
}

// without destructuring
const age1 = person.age;
const fullname1 = person.fullname;

// with destructuring
const {age2, fullname: personFullname} = person;
console.log(person);

// destructuring in functions

// without destructuring
function sum1(num1, num2){
    return num1 + num2;
}
const result1 = sum1(3, 17);

// with destructuring
function sum1({num1, num2}){
    return num1 + num2;
}
const result2 = sum1({num1: 3, num2: 17})
console.log(result2);

/// destructuring arrays
const scores = [1,2,3,4];
const [first, second, ...restOfNumbers] = scores;
console.log(first)              // 1
console.log(restOfNumbers);     // [ 3, 4 ]

const person2 = {
    fullname: 'Akira Yamaoka',
    age: 57,
    address: "Heaven's Night"
}
const {age, ...rest} = person2;
console.log(rest);
console.log("");

////////////////////////////////////////////////////////////////////////////////
/// spread operator

const scores2 = [12,51,2,312,32];

// without spread operator
function maxNumberOfFIveElements(numbers){
    return Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
}
const result3 = maxNumberOfFIveElements(scores2);

// with spread operator
function maxNumberOfArray(numbers){
    return Math.max(...numbers);
}

const result4 = maxNumberOfArray(scores2);

console.log(result3);
console.log(result4);

// El spread operator (...) en JavaScript se usa 
// para copiar o expandir elementos de un iterable (como un array u objeto) en un nuevo contexto.

// El rest operator (...) se usa en la desestructuración para 
// obtener el resto de las propiedades o elementos en una variable.
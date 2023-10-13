
// void: Cuando la función no tiene return o bien no retorna nada es de tipo void.
// any: Cuando la función acepta en sus parametros cualquier dato. Pero si esta en
// modo estricto será necesario ponerle un tipo de dato obligatoriamente.
// function addNumbers( a:any, b: any) {};
// function addNumbers( a:number, b: number) {console.log(a+b);};

// Al final devolverá un tipo de dato number
function addNumbers(a: number, b:number): number{
    return a+b;
}
const result: string = addNumbers(1,2).toString();
// console.log(result);//'3'
// console.log({result});//{result:'3'}


// Arrow functions

// No es necesario declarar el tipo de la variable frente a esta,
// si no en la función ya que ahi es donde adquiere el nombre.
const addNumbersArrow = (a: number, b:number):string => {
    return `${ a + b }`;
}
const result2: string = addNumbersArrow(1,3);
// console.log({result2});
// Le decimos que un parámetro es opcional.
function multiply(firstNumber: number, secondNumber?: number, base: number = 5){
    return firstNumber * base;
}
const multiplyResult = multiply(2);
// console.log({result, result2, multiplyResult});


interface Character {
    name: string;
    hp: number;
    showHp: () => void; // Así declaramos que el tipo de retorno de la función.
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
};

const strider: Character = {
    name:'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}
strider.showHp();
healCharacter(strider, 10);
strider.showHp();



export {};
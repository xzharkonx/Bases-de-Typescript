
const name: String = 'Luis';
// Con la | le indicamos que puede ser incluso de otro tipo de dato.
let hpPoints: number | String  = 1;
// Cambiamos el valor.
hpPoints = name;


// Incluso le podemos dar un solo valor definido.
let mpPoints: number | 'FULL' = 10;
mpPoints = 'FULL';

const isAlive: boolean = true;

console.log({name, hpPoints, mpPoints, isAlive});
export {name};
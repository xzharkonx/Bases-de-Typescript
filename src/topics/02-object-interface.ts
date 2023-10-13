
// Definimos el tipo del arreglo.
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    // hometown: string;
    // También podemos hacer que hometown sea opcional con ?
    // es decir obviar su declaración.
    hometown?: string| undefined;
}

// Dejando el cursor sobre la variable strider y con la tecla Ctrl + .
// nos aparecerá un submenu para agregar las propiedades que falten (hometown), si no nos dará error
// a la hora de crearlo, así seleccionamos que agregue esa variable a nuestr objeto.
// Seleccionamos add missing properties.
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: ""
}

strider.hometown = ' Rivendell';
console.table(strider);

export {};
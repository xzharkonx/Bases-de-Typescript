
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song:"Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song: string = ' New Song';

//- Podemos renombrar una variable en la destructuración con los :
//- y luego el nombre que le queramos dar.

//! Esto es más enredado a la hora de leer el codigo.
// const {song:anotherSong, songDuration, audioVolume, details: { author, year }} = audioPlayer;

//- Así es más legible y claro y menos complejo de leer.
const {song:anotherSong, songDuration, audioVolume, details} = audioPlayer;
const {author, year} = details;

console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Duration: ', songDuration);
console.log('Volume: ', audioVolume);
console.log('Author: ', author);
console.log('Year: ', year);
console.log('\n');

//* Destruccturación de Arreglos.

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//- Una forma de acceder al arreglo
// console.log('Personaje 3: ', dbz[2]);

//! También podemos manejar un valor por defecto si no existiera
//! un elemento del arreglo.
// console.log('Personaje 3: ', dbz[3] || 'No hay personaje.');

// const trunks: string = dbz[3] || 'No hay personaje.';
// console.error('Personaje 3:', trunks);

//! Podemos asignarle cualqueir nombre
// const [p1, p2, trunks] = dbz;
// console.log('Personaje 3:', trunks);

//! Si queremos evitar algunos, solo dejamos un espacio.
// const [, , trunks] = dbz;
// console.log('Personaje 3:', trunks);

//! Podemos manejar un valor por defecto en caso de que no existiera el valor
//! en el arreglo por lo que le asignemos tomará ese valor.
const [ , , trunks = 'Not found'] = ['Goku', 'Vegeta'];
console.log(trunks);


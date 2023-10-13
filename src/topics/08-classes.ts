



export class Person {

    // Cuando creamos una persona estamos indicando que el valor
    // siempre va a venir, pero no puede llegar a ser verdar, 
    // entonces nos lo marca como error, por lo que podemos indicarle
    // un valor por defecto o que la variable sea opcional.

    //! Le indicamos un valor indefinido, pero se ve mal.
    // public name: string | undefined;
    
    //! es mejor omitirlos, esto es similar, por lo que no existe la
    //! presencia de este valor.
    public name?: string;
    // public address?: string;

    //? También podemos indicarle un valor privado.
    private address?: string;

    constructor(name: string, address: string){
        this.name = 'Luis';
        this.address = 'México';
    }

}


const ironman = new Person();
console.log(ironman);
console.log(ironman.name);
//! Mira que si buscamos address no aparecerá porque esprivada.
//!! Pero si la dejamos aunque nos de error si aparecerá. ¿Porque?
console.log(ironman.address);

//? Se toma todo el codigo de typescript y se convierte a javascript
//? es por eso que si funciona, sin embargo typescript detecta que
//? hacer esto es un error y si esto lo llevamos a angular podemos indicarle
//? que si al compilar detecta algún error entonces que no lo compile,
//? de esta forma logramos corregir estos inconvenientes de codigo extricto.
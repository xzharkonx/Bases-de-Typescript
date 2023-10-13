// Con la tecla F2 y seleccionando un texto (variable por ejemplo),
// podremos cambiarlo directamente en todos lados con ese atajo.

interface Address {
    street: string;
    country: string;
    city: string;
}

interface superHero {
    name: string;
    age: number;
    address: Address;
    showAddress : () => string; // Así es como arrow function.
    // showAddress(): string; // Así es function normal.
}

const superHeroe: superHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log({address});

export {};
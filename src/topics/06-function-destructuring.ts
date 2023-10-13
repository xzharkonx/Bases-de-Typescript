
export interface Product {
    description: string;
    price: number;
}

//!! Comentamos por el ejercicio 7, como se importa este archivo esto se ejecuta.
// const phone: Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const tablet: Product = {
//     description: "iPad Air",
//     price: 250.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//!! function taxCalculation(options: TaxCalculationOptions): number[]{
//? Yo se que voy a regresar un arreglo de 2 números, entonces
//? en vez de devolver un tipo[], devolvemos un arreglo con sus tipos.
// function taxCalculation(options: TaxCalculationOptions): [number, number]{
//! También podremos destructurar options directamente.
export function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
    
    //- Destructurando options.
    //! Ya no sirve la línea de abajo porque destructuramos directamente.
    //-- Pero si tuvieramos muchos atributos lo mejor sería destructurar aquí.
    // const {products, tax} = options;

    let total = 0;
    // options.products.forEach( product => {
    //     total += product.price;
    // });

    //- Destructurando en arrow function.
    products.forEach( ({price}) => {
        total += price;
    });

    // return [total, total * options.tax];
    return [total, total * tax];
}

//!! Comentamos por el ejercicio 7, como se importa este archivo esto se ejecuta.
// const shoppingCart = [phone, tablet];

export const tax = 0.16;



// const result: number[] = taxCalculation({
//     'products':shoppingCart,
//     tax
// });

//- Destructurando result.

//! puede ser desde la variable
// const [total, impuesto] = result;

//!! Comentamos por el ejercicio 7, como se importa este archivo esto se ejecuta.
//! o directamente.
// const [total, taxTotal]: number[] = taxCalculation({
//     'products':shoppingCart,
//     tax
// });

// console.log('Total', result[0]);
// console.log('Tax', result[1]);

//!! Comentamos por el ejercicio 7, como se importa este archivo esto se ejecuta.
// console.log('Total', total);
// console.log('Tax', taxTotal);

// export {};
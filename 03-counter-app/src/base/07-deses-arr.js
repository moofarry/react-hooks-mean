

const characters = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = characters;

export const returnArray = () =>{
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray(); 


// Tarea
// 1. el primer valor del arr se llamarĂ¡ nombre
// 2. se llamarĂ¡ setNombre
const usState = ( value ) => {
    return [ value, ()=>{ console.log('Hello world') } ];
}





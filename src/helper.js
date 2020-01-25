//Funcion diferencia de años

export function ObtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Funcion Total segun marca

export function calcularMarca(marca){
    let incremento;
    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}
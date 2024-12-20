
export const generateUserErrorInfo = (user) => {
    return `
        Algunas de las propiedades no fueron recibidas:
        nombre: como valor de esta propiedad -> ${user.nombre}
        apellido: como valor de esta propiedad -> ${user.apellido}
        edad: como valor de esta propiedad -> ${user.edad}
    `
}

export const mocksParamsErrorInfo = (...num) => {
    if(num.length > 1) {
        return `
        Los números ingresados [${num}] no son válidos. 
        Debe ingresar números entre 1 y 50.
    `
    } else {
        return `
            El número ingresado ${num} no es válido. 
            Debe ingresar un número entre 1 y 50.
        `
    }
}
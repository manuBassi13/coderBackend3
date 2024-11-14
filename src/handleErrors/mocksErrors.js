
export const generateUserErrorInfo = (user) => {
    return `
        Algunas de las propiedades no fueron recibidas:
        nombre: como valor de esta propiedad -> ${user.nombre}
        apellido: como valor de esta propiedad -> ${user.apellido}
        edad: como valor de esta propiedad -> ${user.edad}
    `
}

export const mocksParamsErrorInfo = (num) => {
    return `
        El número ingresado (${num}) no es válido. 
        Debe ingresar un número mayor a cero.
    `
}
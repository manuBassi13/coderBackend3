export default class HandleError{
    static createError({ name = 'Error', cause, message, type, code = 1 }){
        const error = new Error(message, {cause})
        error.name = name
        error.type = type
        error.code = code
        throw error
    }
}

export const EErrors = {
    DB: 3,
    ROUTE: 2,
    INVALID_TYPES: 1
}

export const codes = {
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '204': 'No Content',
    '300': 'Multiple Choices',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '403': 'Forbidden',
    '404': 'Not Found',
    '500': 'Internal Server Error',
    '502': 'Bad Gateway',
    '504': 'Gateway Timeout',
}


import { checkSchema } from 'express-validator';

export const getCourseSchema = checkSchema(
    {
        id: {
            errorMessage: 'Invalid ID',
            isString: true,
        },
    },
    ['params']
);

export const postCourseSchema = checkSchema(
    {
        title: {
            errorMessage: 'Invalid title',
            isString: true,
        },
        description: {
            errorMessage: 'Invalid description',
            isString: true,
        },
        price: {
            errorMessage: 'Invalid price',
            isDecimal: true,
        },
    },
    ['body']
);

export const patchCourseSchema = checkSchema(
    {
        id: {
            errorMessage: 'Invalid ID',
            isString: true,
        },
        name: {
            errorMessage: 'Invalid Name',
            isString: true,
            optional: true,
        },
    },
    ['body']
);

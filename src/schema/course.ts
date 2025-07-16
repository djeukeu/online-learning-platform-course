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
        name: {
            errorMessage: 'Invalid Name',
            isString: true,
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

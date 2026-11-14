import { Course } from '@prisma/client';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { BAD_REQUEST, UNAUTHORIZED } from 'src/constants';
import { IAuthRequest } from 'src/interface/request';
import {
    createCourse,
    readAllCourse,
    readCourseById,
    updateCourse,
} from 'src/model/course';

export const getAllCourseController = async (_req: Request, res: Response) => {
    const courses = await readAllCourse();
    res.status(200).json({ courses });
};

export const getCourseController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }

    const id = req.params['id'];
    const course = await readCourseById(id as string);
    res.status(200).json({ course });
};

export const postCourseController = async (
    req: IAuthRequest,
    res: Response
) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }
    if (req?.user?.role != 'INSTRUCTOR') {
        res.status(400).json({
            errcode: UNAUTHORIZED,
            message: 'Acces restricted',
        });
    }

    const data = req.body;
    const newCourse: Partial<Course> = {
        title: data.title,
        description: data.description,
        price: data.price,
        intructor_id: req?.user?.id,
    };
    const course = await createCourse(newCourse as Course);
    res.status(200).json({ course });
};

export const patchCourseController = async (
    req: IAuthRequest,
    res: Response
) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }
    if (req?.user?.role != 'INSTRUCTOR') {
        res.status(400).json({
            errcode: UNAUTHORIZED,
            message: 'Acces restricted',
        });
    }

    const data = req.body;
    const updatedCourse: Partial<Course> = {
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
    };

    const course = await updateCourse(updatedCourse as Course);
    res.status(200).json({ course });
};

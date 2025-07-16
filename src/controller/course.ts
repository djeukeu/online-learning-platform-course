/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { BAD_REQUEST } from 'src/constants';
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

export const postCourseController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }

    const data = req.body;
    const newCourse = {
        name: data.name,
    };
    const course = await createCourse(newCourse as any);
    res.status(200).json({ course });
};

export const patchCourseController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }
    const data = req.body;
    const updatedCourse = {
        id: data.id,
        name: data.name,
    };
    const course = await updateCourse(updatedCourse as any);
    res.status(200).json({ course });
};

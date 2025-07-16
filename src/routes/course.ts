import { Router } from 'express';

import {
    getAllCourseController,
    getCourseController,
    patchCourseController,
    postCourseController,
} from 'src/controller/course';
import {
    getCourseSchema,
    patchCourseSchema,
    postCourseSchema,
} from 'src/schema/course';

const courseRouter = Router();

courseRouter.get('/', getAllCourseController);
courseRouter.get('/:id', getCourseSchema, getCourseController);
courseRouter.post('/', postCourseSchema, postCourseController);
courseRouter.patch('/', patchCourseSchema, patchCourseController);

export default courseRouter;

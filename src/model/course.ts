import { Course } from '@prisma/client';

import prismaContext from 'src/prisma';

const { course } = prismaContext.prisma;

export const readAllCourse = async (): Promise<Course[]> => {
    const response = await course.findMany();
    return response;
};

export const readCourseById = async (id: string): Promise<Course | null> => {
    const response = await course.findUnique({
        where: { id },
    });
    return response;
};

export const createCourse = async (data: Course): Promise<Course> => {
    const response = await course.create({ data });
    return response;
};

export const updateCourse = async (data: Course): Promise<Course> => {
    const response = await course.update({
        data,
        where: { id: data.id },
    });
    return response;
};

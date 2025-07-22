import { Enrollment } from '@prisma/client';

import prismaContext from 'src/prisma';

const { enrollment } = prismaContext.prisma;

export const readAllEnrollment = async (): Promise<Enrollment[]> => {
    const response = await enrollment.findMany();
    return response;
};

export const readEnrollmentById = async (
    id: string
): Promise<Enrollment | null> => {
    const response = await enrollment.findUnique({
        where: { id },
    });
    return response;
};

export const createEnrollment = async (
    data: Enrollment
): Promise<Enrollment> => {
    const response = await enrollment.create({ data });
    return response;
};

export const updateEnrollment = async (
    data: Enrollment
): Promise<Enrollment> => {
    const response = await enrollment.update({
        data,
        where: { id: data.id },
    });
    return response;
};

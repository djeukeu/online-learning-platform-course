/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEnrollment } from 'src/model/enrollment';

const enrollHandler = (payload: any) => {
    const newEnrollment = {
        user_id: payload.user_id,
        course_id: payload.course_id,
        payment_id: payload.payment_id,
    };
    createEnrollment(newEnrollment as any);
};

export default enrollHandler;

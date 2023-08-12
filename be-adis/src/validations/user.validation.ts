import { Gender } from '../models/entities/User';
import * as yup from 'yup';

export const updateProfileSchema = yup.object({
    body: yup.object({
        username: yup.string().min(4).max(20),
        email: yup.string().email(),
        password: yup.string(),
        firstName: yup.string().min(4).max(100),
        lastName: yup.string().min(4).max(100),
        phone: yup.string().min(9).max(20),
        country: yup.string().min(2).max(2),
        gender: yup.string().oneOf(Object.values(Gender), "Invalid gender"),
        bio: yup.string(),
        avatar: yup.string(),
        cover: yup.string(),
    })
})
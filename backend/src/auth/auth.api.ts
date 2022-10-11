import { Validations } from './../common/http';
import { AuthController } from './auth.controller';
import express from 'express';
import { AuthSchema } from './auth';

export function NewAuthAPI (authController:AuthController){
    const router = express.Router();
    const genderAuth = Object.values(AuthSchema.Gender)

    router.get('/user/list', async(req, res)=>{
        const docs = await authController.ListUser();
        res.json(docs);
    });

    router.post('/user/create', async(req, res, next)=>{
        const roles:AuthSchema.Role[] = Array.from(new Set(req.body.roles));
        const params:AuthSchema.CreateUserParams= {
            username: req.body.username,
            full_name: req.body.full_name,
            email: req.body.email,
            roles: roles,
            gender: Validations.MustBeOneOf(genderAuth, req.body.gender, 'Giới tính', res, next),
            phone: req.body.phone,
            birthday: req.body.birthday,
            password: req.body.password
        }
        if(params.gender == null){
          return;
        }else {
            const doc = await authController.CreateUser(params);
            return res.json(doc);
        }
    });

    return router;
}
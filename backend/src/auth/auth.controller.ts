import { ObjectId } from 'mongodb';
import { AuthSchema } from './auth';
import { AuthModel } from './auth.model';
import dayjs from 'dayjs';
import bcrypt from 'bcryptjs';
export class AuthController {
    constructor(private model:AuthModel){}

    async init(){}

    async ListUser () {
        return this.model.ListUser();
    }

    async GetUser (_id:ObjectId){
        const doc = await this.model.GetUser(_id);
        return doc;
    }

    async CreateUser (params:AuthSchema.CreateUserParams){
        const now = dayjs();
        const nowFormat = now.format('DD/MM/YYYY');
        const hashPassword = await bcrypt.hash(params.password, 8);
        const user : AuthSchema.User = {
            _id: AuthSchema.Generate.NewUserId(),
            username: params.username,
            full_name: params.full_name,
            email: params.email,
            roles: params.roles,
            gender: params.gender,
            phone: params.phone,
            birthday: params.birthday,
            password: hashPassword,
            ctime: nowFormat,
            utime: nowFormat
        }

        await this.model.CreateUser(user);
        return user;
    }

    async UpdateUser (_id:ObjectId, params:AuthSchema.UpdateUserParams){
        const now = dayjs();
        const nowFormat = now.format('DD/MM/YYYY');
        const user = {...params};
        if(params.full_name){
            user.full_name = params.full_name
        }
        if(params.birthday){
            user.birthday = params.birthday
        }
        if(params.gender){
            user.gender = params.gender
        }
        if(params.roles){
            user.roles = params.roles
        }
        if(params.password){
            user.password = params.password
        }
        if(params.phone){
            user.phone = params.phone
        }
        user.utime = nowFormat;

        await this.model.UpdateUser(_id, user);
        return user;
    }

    async DeleteUser (_id:ObjectId){
      const doc = await this.model.DeleteUser(_id);
    return doc;
    }
}
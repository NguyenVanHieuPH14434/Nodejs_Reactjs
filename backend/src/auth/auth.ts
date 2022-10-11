import rand from "../lib/rand";

export namespace AuthSchema {

    export enum Role {
        Admin = 'admin',
        Accountant = 'ke_toan',
        Stocker= 'thu_kho'
    }

    export enum Gender {
        Male = 'nam',
        Female = 'nu'
    }

    export interface User {
        _id: string;
        username: string;
        full_name: string;
        email:string;
        roles: Role[];
        gender:Gender;
        phone:string;
        birthday:string;
        password:string;
        ctime:string;
        utime:string;
    }

    export interface CreateUserParams {
        username: string;
        full_name: string;
        email:string;
        roles: Array<Role>;
        gender:Gender;
        phone:string;
        birthday:string;
        password:string;
    }

    export interface UpdateUserParams {
        full_name?: string;
        roles?: Array<Role>;
        gender?:Gender;
        phone?:string;
        birthday?:string;
        password?:string;
        utime?:string;
    }

    export const Generate = {
        NewUserId : () => rand.uppercase(14)
    }
}
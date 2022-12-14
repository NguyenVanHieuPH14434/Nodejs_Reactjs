import { ObjectId } from "mongodb";
import { MongoDB } from "../lib/mongodb";
import { AuthSchema } from "./auth";

export class AuthModel {
    constructor(private db:MongoDB){}

    async init (){}

    private col_user = this.db.collection('user');

    async ListUser () {
        const docs = await this.col_user.find().toArray();
        return docs;
    }

    async GetUser(_id:ObjectId){
        const doc = await this.col_user.findOne({_id:_id});
        return doc;
    }

    async CreateUser (user:AuthSchema.CreateUserParams){
        const doc = await this.col_user.insertOne(user);
        return doc;
    }

    async UpdateUser (_id:ObjectId, user:AuthSchema.UpdateUserParams){
        const doc = await this.col_user.updateOne({_id}, {$set:user});
        return doc;
    }

    async DeleteUser(_id:ObjectId){
        const doc = await this.col_user.deleteOne({_id:_id});
        return doc;
    }
}
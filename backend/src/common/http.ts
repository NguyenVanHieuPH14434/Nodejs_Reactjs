export const Validations = {
    MustBeOneOf(obj:any, value:string, key:string, res:any, next:any){
        for (let i = 0; i < obj.length; i++) {
            if(obj[i] === value){
                return obj[i];
            }            
        }
        const err:any = new Error((`${key} phải là ${obj.join(' hoặc ')}`))
        err.status = 401;
        return next(err)
    }
}
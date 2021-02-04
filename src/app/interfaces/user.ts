export interface IUser{
    id:number;
    name:string;
    username:string;
    email:string;
    password:string;
   // roles:Array<IRole>;
    key:number;
   // role:IRole;
   score:number;

}
export interface IRole{
    name:string;
}

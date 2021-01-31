import { IUser } from 'src/app/interfaces/user';
import { IPost } from './post';
export interface IComment{
    id:number;
    content:string;
    date:Date;
    writer:IUser;
    post:IPost;

}
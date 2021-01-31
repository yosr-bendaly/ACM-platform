import { IComment } from './comment';
import { IReaction } from './reaction';
import { IUser } from "./user";

export interface IPost{
    id:number;
    content:string;
    date:Date;
    admin:IUser;
    comments:IComment[];
    reactions:IReaction[];
}
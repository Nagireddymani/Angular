import { Contacts } from './contacts';

export class Groups
{
    constructor(public groupId:number,public groupName:string,public description:string,public contacts:Contacts[])
    {

    }
}
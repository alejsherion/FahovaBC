export class Contact {
    
    Id: number;
    alias: string;
    gender: string;
    
    constructor(private _contact: IContact) {
        this.Id = _contact.Id;
        this.alias = _contact.alias;
        this.gender = _contact.gender;
    }
}

export interface IContact {
    Id: number
    alias: string,
    gender: string,
    tmblr?: string
}
export class Contact {
    
    Id: number;
    alias: string;
    gender: string;
    tmblr: string;
    isFavorite: boolean;

    constructor(private _contact: IContact) {
        this.Id = _contact.Id;
        this.alias = _contact.alias;
        this.gender = _contact.gender;
        this.tmblr = _contact.tmblr;
        this.isFavorite = _contact.isFavorite;
    }
}

export interface IContact {
    Id: number
    alias: string,
    gender: string,
    tmblr?: string,
    isFavorite: boolean
}
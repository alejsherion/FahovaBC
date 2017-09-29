export class User {

    name: string;
    lastname: string;
    birthDate: Date;
    tipeDoc: string;
    numDoc: number;
    companyTmbr: string;
    title: string;
    company: string;
    companyId: string;
    position: string;
    admissionDate: Date;
    phone: string;
    movil: string;
    email: string;
    image: string;

    private _age: number;
    get age(): number { return this._age; }
    set age (_age: number){
        if (this._person.birthDate) {
            let timeDiff = Math.round(Date.now() - this._person.birthDate.getUTCDay());
            this._age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    }
    private _alias: string;
    get alias(): string { return this._alias; }
    set alias(_alias: string) { 
        if(this._alias === "") 
            this._alias = `${this.name} ${this.lastname}` 
        else
            this._alias = _alias;
    }
    
    constructor(private _person: Person) {
        this.name = _person.name;
        this.lastname = _person.lastname;
        this.birthDate = _person.birthDate;
        this.tipeDoc = _person.tipeDoc;
        this.numDoc = _person.numDoc;
        this.companyTmbr = _person.profesionalInfo.companyTmbr;
        this.title = _person.profesionalInfo.title;
        this.company = _person.profesionalInfo.company;
        this.companyId = _person.profesionalInfo.companyId;
        this.position = _person.profesionalInfo.position;
        this.admissionDate = _person.profesionalInfo.admissionDate;
        this.phone = _person.contact.phone;
        this.movil = _person.contact.movil;
        this.email = _person.contact.email;
        this.image = _person.image;
        this.alias = _person.alias;
        this.age = _person.age;
    }

}

export interface Person {
    name: string,
    lastname: string,
    birthDate: Date,
    tipeDoc: string,
    numDoc: number,
    age: number,

    profesionalInfo: ProfesionalInfo,
    contact: ContactInfo,

    alias: string,
    image: string
}

export interface ProfesionalInfo {
    companyTmbr: string,
    title: string,
    company: string,
    companyId: string,
    position: string,
    admissionDate: Date
}

export interface ContactInfo {
    phone: string,
    movil: string,
    email: string
}
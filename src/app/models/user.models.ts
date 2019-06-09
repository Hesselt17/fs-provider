export class User {
    public name: string;
    public email: string;
    public password : string;
    public role : string;
    public ID : number;

    //Match with the columns in the database - table set to not accept null values
    constructor() {
        this.name = null;
        this.email = null;
        this.password = null;
        this.role = null;
        this.ID = null;
    }
}
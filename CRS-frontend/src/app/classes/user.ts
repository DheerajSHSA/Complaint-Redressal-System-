export class User {
    fname: string = ''
    lname: string = ''
    username: string = ''
    password: string = ''
    location: string = ''
    public constructor(fname: string, lname: string, username: string, password: string, location: string) {
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.password = password;
        this.location = location;
    }
}

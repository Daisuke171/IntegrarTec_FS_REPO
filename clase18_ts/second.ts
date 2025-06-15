//Implementa un sistema de usuarios 
//con roles, usando herencia, interfaces y modificadores de acceso apropiados.

interface Profile {
    name: string;
    password: string;
    permissions: string[];
}

abstract class User implements Profile {
    public name: string;
    public password: string;
    public permissions: string[];

    constructor(nameInput: string, passwordInput: string, permissionsInput: string[]) {
        this.name = nameInput;
        this.password = passwordInput;
        this.permissions = permissionsInput;
    }

    // Setters
    public setName(nameInput: string): void {
        this.name = nameInput;
    }

    public setPassword(passwordInput: string): void {
        this.password = passwordInput;
    }

    public setPermissions(permissionsInput: string[]): void {
        this.permissions = permissionsInput;
    }

    // Getters
    public getName(): string {
        return this.name;
    }

    public getPassword(): string {
        return this.password;
    }

    public getPermissions(): string[] {
        return this.permissions;
    }

    public checkPermissions(): void {
        let pretty: string = "[";
        for (let permit of this.permissions) {
            pretty+= `${permit}, ` ;
        }
        const size = pretty.length;
        pretty = `[${this.permissions.join(", ")}]`;
        
        console.log(pretty);
    }

    abstract getRole(): string;
}

class Group extends User {
    constructor(name: string, password: string) {
        super(name, password, ["r", "w", "x"]);
    }

    public getRole(): string {
        return this.constructor.name;
    }
}

class Anyone extends User {
    constructor(name: string, password: string) {
        super(name, password, ["r", "", ""]);
    }

    public getRole(): string {
        return this.constructor.name;
    }
}

class Owner extends User {
    constructor(name: string, password: string) {
        super(name, password, ["r", "w", "x"]);
    }

    public changePermissions(update: string[], target: Group | Anyone): void {
        const normalized = update.map(p => p.toLowerCase());
        target.setPermissions(normalized);
    }

    public getRole(): string {
        return this.constructor.name;
    }
}


const owner = new Owner("Alice", "admin123");
const group = new Group("TeamA", "group456");
const anyone = new Anyone("Guest", "guest789");

owner.checkPermissions(); 
group.checkPermissions(); 

owner.changePermissions(["r", "", "x"], group); 
group.checkPermissions(); 
anyone.checkPermissions(); 
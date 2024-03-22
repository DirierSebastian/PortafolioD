export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly CSHARP = new Tag('C#', 'purple');
    static readonly SQL = new Tag('Sql-Server', 'black');
    static readonly MONGO = new Tag('Mongodb', 'green');
    static readonly ASP = new Tag('Asp.Net', 'lightblue');
    static readonly FIREBASE = new Tag('Firebase', 'orange');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }

}
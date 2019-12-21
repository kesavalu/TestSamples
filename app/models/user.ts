export class User {
    userId: number;
    username: string;
    password: string;
    displayName: string;
    accessToken: string;
    authorities: Authorities[];
    tokenType: string;
   
}

export class Authorities {
    authority: string;
}

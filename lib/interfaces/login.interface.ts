export interface ILoginPayload {
    userName: string;
    password: string
}

export interface ILoginRespose {
    status: string;
    message: string;
    metaInfo?: any;
    accessTocken: string;
    expiresIn: number;
}
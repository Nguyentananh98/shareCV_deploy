export interface IUserLogin {
    email: string;
    password: string
}

export interface IUserRegister {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    taxCode: string;
    // role: string;
}
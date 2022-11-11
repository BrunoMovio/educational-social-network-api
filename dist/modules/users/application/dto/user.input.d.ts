export declare class UserInput {
    name: string;
    nickname: string;
    email: string;
    role?: string;
    city?: string;
    state?: string;
    country?: string;
    description?: string;
    career?: string;
}
export declare class CreateUserInput extends UserInput {
    password: string;
}
export declare class UpdateUserInput extends UserInput {
    id: string;
}

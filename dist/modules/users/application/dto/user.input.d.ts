export declare class CreateUserInput {
    name: string;
    nickname?: string;
    email: string;
    description: string;
    birthday: string;
    avatar?: string;
}
export declare class UpdateUserInput extends CreateUserInput {
    id: string;
}

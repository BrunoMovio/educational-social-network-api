import { Entity } from "../../common/domain/base-classes/entity.base";
export declare enum UserRoles {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export interface UserProps {
    name: string;
    email: string;
    nickname: string;
    description: string;
    role: UserRoles;
    city: string;
    state: string;
    country: string;
    career: string;
}
export declare class User extends Entity<UserProps> {
    get name(): string;
    get email(): string;
    get nickname(): string;
    get description(): string;
    get role(): UserRoles;
    get city(): string;
    get state(): string;
    get country(): string;
    get career(): string;
    updateUser(props: UserProps): void;
}

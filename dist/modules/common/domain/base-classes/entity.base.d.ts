import { DateVO } from "../value-objects/date.vo";
import { ID } from "../value-objects/id";
export interface BaseEntityProps {
    id: ID;
    createdAt: DateVO;
    updatedAt: DateVO;
}
export declare abstract class Entity<EntityProps> {
    constructor(props: EntityProps, id?: ID);
    protected readonly props: EntityProps;
    private readonly _id;
    private readonly _createdAt;
    private _updatedAt;
    get id(): ID;
    get createdAt(): DateVO;
    get updatedAt(): DateVO;
    static isEntity(entity: unknown): entity is Entity<unknown>;
    equals(object?: Entity<EntityProps>): boolean;
    getPropsCopy(): EntityProps & BaseEntityProps;
    toObject(): unknown;
    private validateProps;
}

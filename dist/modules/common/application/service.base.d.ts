export declare class BaseService<Entity, Response> {
    private responseConstructor;
    constructor(responseConstructor: new (entity: Entity) => Response);
    protected entityToResponse(entity: Entity): Response;
    protected entityListToResponseList(entities: Entity[]): Response[];
}

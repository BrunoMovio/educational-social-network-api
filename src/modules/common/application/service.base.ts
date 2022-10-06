export class BaseService<Entity, Response> {
  constructor(private responseConstructor: new (entity: Entity) => Response) {}

  protected entityToResponse(entity: Entity): Response {
    return new this.responseConstructor(entity);
  }

  protected entityListToResponseList(entities: Entity[]): Response[] {
    return entities.map((entity) => this.entityToResponse(entity));
  }
}

import { BaseEntity, DeleteResult, Repository } from "typeorm";
import { EntityId } from "typeorm/repository/EntityId";

export interface IBaseService<T> {
  index(): Promise<T[]>;

  findById(id: EntityId): Promise<T>;

  findByIds(id: [EntityId]): Promise<T[]>;

  store(data: T): void;

  update(id: EntityId, data: any): Promise<T>;

  delete(id: EntityId): Promise<DeleteResult>;
}

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  index(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<T> {
    return this.repository.findOneById(id);
  }

  findByIds(ids: [number]): Promise<T[]> {
    return this.repository.findByIds(ids);
  }

  store(data: T) {
    return this.repository.create(data);
  }

  async update(id: number, data: any): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}

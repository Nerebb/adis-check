import { BaseEntity, DeleteResult, Repository } from "typeorm";
import { EntityId } from "typeorm/repository/EntityId";
export interface IBaseService<T> {
    index(): Promise<T[]>;
    findById(id: EntityId): Promise<T>;
    findByIds(id: [EntityId]): Promise<T[]>;
    store(data: any): Promise<T>;
    update(id: EntityId, data: any): Promise<T>;
    delete(id: EntityId): Promise<DeleteResult>;
}
export declare class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R;
    constructor(repository: R);
    index(): Promise<T[]>;
    findById(id: number): Promise<T>;
    findByIds(ids: [number]): Promise<T[]>;
    store(data: any): Promise<T>;
    update(id: number, data: any): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}

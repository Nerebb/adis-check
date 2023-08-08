import { DataSource } from "typeorm";
export declare class Database {
    private static instance;
    private constructor();
    static getInstance(): DataSource;
    static setInstance(dataSource: DataSource): void;
}

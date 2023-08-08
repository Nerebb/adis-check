import { BaseEntity } from "typeorm";
export declare enum Gender {
    Male = "Male",
    Female = "Female",
    NonBinary = "NonBinary"
}
export declare enum ERole {
    Advertiser = "Advertiser",
    Affiliate = "Affiliate",
    SearchEngine = "SearchEngine"
}
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName: string;
    phone: string;
    country: string;
    gender: Gender;
    bio: string;
    avatar: string;
    cover: string;
    role: ERole;
    createdAt: Date;
    updatedAt: Date;
    hashPassword(): void;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean;
}

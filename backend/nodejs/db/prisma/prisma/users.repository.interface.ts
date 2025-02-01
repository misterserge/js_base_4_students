import { UserModel } from "@prisma/client";

export interface IUsersRepository {
    create: (user: UserModel) => Promise<UserModel>;
    find: (email: string) => Promise<UserModel | null>;
    read: (id: number) => Promise<UserModel | null>;
    update(user: UserModel): Promise<UserModel | null>;
    delete(id: number): Promise<UserModel | null>;
    list(): Promise<UserModel[]>;
}
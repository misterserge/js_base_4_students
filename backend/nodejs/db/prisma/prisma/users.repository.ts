import { PrismaClient, UserModel } from "@prisma/client";
import { IUsersRepository } from "./users.repository.interface";
import { PrismaService } from "./prisma.service";

@injectable()
export class UserRepository implements IUsersRepository {
    constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}
    async create({email, password, name}: UserModel): Promise<UserModel> {
        return await prismaService.client.UserModel.create({ data: {
            email,
            password,
            name,
        } });
    }
    async find(email: string): Promise<UserModel | null> {
        return await prismaService.user.findFirst({ where: { email } });
    }
    async read(id) {
        return await prismaService.user.findUnique({ where: { id } });
    }
    async update(user) {
        return await prismaService.user.update({ where: { id: user.id }, data: user });
    }
    async delete(id) {
        return await prismaService.user.delete({ where: { id } });
    }
    async list() {
        return await prismaService.user.findMany();
    }
}
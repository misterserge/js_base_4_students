import { PrismaClient, UserModel } from '@prisma/client';
import { injectable } from 'inversity';
@injectable()
export class PrismaService {
    client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    async connect(): Promise<void> {
        await this.client.$connect();
    }

    async disconnect(): Promise<void> {
        await this.client.$disconnect();
    }
}
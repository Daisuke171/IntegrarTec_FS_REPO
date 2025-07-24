"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../../generated/prisma/index.js");
let UsersPrismaRepository = class UsersPrismaRepository {
    prisma = new prisma_1.PrismaClient();
    async findAll() {
        return this.prisma.book.findMany();
    }
    async findOne(id) {
        return await this.prisma.book.findUnique({ where: { id } });
    }
    async create(book) {
        return await this.prisma.book.create({ data: book });
    }
    async update(id, data) {
        return await this.prisma.book.update({ where: { id }, data });
    }
    async delete(id) {
        const book = await this.findOne(id);
        if (!book)
            return false;
        await this.prisma.book.delete({ where: { id } });
        return true;
    }
};
exports.UsersPrismaRepository = UsersPrismaRepository;
exports.UsersPrismaRepository = UsersPrismaRepository = __decorate([
    (0, common_1.Injectable)()
], UsersPrismaRepository);
//# sourceMappingURL=library-prisma.repository.js.map
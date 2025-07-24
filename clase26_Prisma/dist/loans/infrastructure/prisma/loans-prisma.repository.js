"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../../../generated/prisma/index.js");
let LoansPrismaRepository = class LoansPrismaRepository {
    prisma = new prisma_1.PrismaClient();
    async findAll() {
        return this.prisma.loan.findMany();
    }
    async findOne(id) {
        return await this.prisma.loan.findUnique({ where: { id } });
    }
    async create(loan) {
        return await this.prisma.loan.create({
            data: {
                ...loan,
                returnDate: loan.returnDate ?? new Date(1970, 0, 1),
            },
        });
    }
    async update(id, data) {
        return await this.prisma.loan.update({ where: { id }, data });
    }
    async delete(id) {
        const loan = await this.findOne(id);
        if (!loan)
            return false;
        await this.prisma.book.delete({ where: { id } });
        return true;
    }
    async findByUser(userId) {
        return this.prisma.loan.findMany({
            where: { userId },
        });
    }
};
exports.LoansPrismaRepository = LoansPrismaRepository;
exports.LoansPrismaRepository = LoansPrismaRepository = __decorate([
    (0, common_1.Injectable)()
], LoansPrismaRepository);
//# sourceMappingURL=loans-prisma.repository.js.map
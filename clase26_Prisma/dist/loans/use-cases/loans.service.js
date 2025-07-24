"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansService = void 0;
const common_1 = require("@nestjs/common");
const loans_repository_1 = require("../domain/repositories/loans.repository");
const loans_entity_1 = require("../domain/entities/loans.entity");
let LoansService = class LoansService {
    loanRepository;
    constructor(loanRepository) {
        this.loanRepository = loanRepository;
    }
    findAll() {
        return this.loanRepository.findAll();
    }
    findOne(id) {
        return this.loanRepository.findOne(id);
    }
    create(data) {
        return this.loanRepository.create(new loans_entity_1.Loan({
            bookId: data.bookId,
            userId: data.userId,
            loanDate: data.loanDate,
            returnDate: data.returnDate,
        }));
    }
    update(id, data) {
        return this.loanRepository.update(id, data);
    }
    delete(id) {
        return this.loanRepository.delete(id);
    }
    findByUser(userId) {
        return this.loanRepository.findByUser(userId);
    }
};
exports.LoansService = LoansService;
exports.LoansService = LoansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [loans_repository_1.LoansRepository])
], LoansService);
//# sourceMappingURL=loans.service.js.map
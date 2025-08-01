"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryModule = void 0;
const common_1 = require("@nestjs/common");
const library_controller_1 = require("./controllers/library.controller");
const library_service_1 = require("./use-cases/library.service");
const library_repository_1 = require("./domain/repositories/library.repository");
const library_prisma_repository_1 = require("./infrastructure/prisma/library-prisma.repository");
let LibraryModule = class LibraryModule {
};
exports.LibraryModule = LibraryModule;
exports.LibraryModule = LibraryModule = __decorate([
    (0, common_1.Module)({
        controllers: [library_controller_1.LibraryController],
        providers: [
            library_service_1.LibraryService,
            {
                provide: library_repository_1.LibraryRepository,
                useClass: library_prisma_repository_1.LibraryPrismaRepository,
            },
        ],
    })
], LibraryModule);
//# sourceMappingURL=library.module.js.map
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
exports.LibraryService = void 0;
const common_1 = require("@nestjs/common");
const library_repository_1 = require("../domain/repositories/library.repository");
const library_entity_1 = require("../domain/entities/library.entity");
let LibraryService = class LibraryService {
    libraryRepository;
    constructor(libraryRepository) {
        this.libraryRepository = libraryRepository;
    }
    findAll() {
        return this.libraryRepository.findAll();
    }
    findOne(id) {
        return this.libraryRepository.findOne(id);
    }
    create(data) {
        return this.libraryRepository.create(new library_entity_1.Book({
            title: data.title,
            author: data.author,
            pages: data.pages,
            language: data.language,
            year: data.year,
            genre: data.genre,
            isbn: data.isbn,
            country: data.country,
        }));
    }
    update(id, data) {
        return this.libraryRepository.update(id, data);
    }
    delete(id) {
        return this.libraryRepository.delete(id);
    }
};
exports.LibraryService = LibraryService;
exports.LibraryService = LibraryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [library_repository_1.LibraryRepository])
], LibraryService);
//# sourceMappingURL=library.service.js.map
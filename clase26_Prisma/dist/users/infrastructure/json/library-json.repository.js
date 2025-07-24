"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryJsonRepository = void 0;
const file_utils_1 = require("../../../shared/utils/file.utils");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let LibraryJsonRepository = class LibraryJsonRepository {
    filePath = 'data/books.json';
    async findAll() {
        return await (0, file_utils_1.readData)(this.filePath);
    }
    async findOne(id) {
        const books = await this.findAll();
        return books.find((book) => book.id === id) || null;
    }
    async create(book) {
        const books = await this.findAll();
        const newBook = { ...book, id: (0, uuid_1.v4)() };
        books.push(newBook);
        await (0, file_utils_1.writeData)(this.filePath, books);
        return newBook;
    }
    async update(id, data) {
        const books = await this.findAll();
        const index = books.findIndex((book) => book.id === id);
        if (index === -1)
            return null;
        const updatedBook = { ...books[index], ...data };
        books[index] = updatedBook;
        await (0, file_utils_1.writeData)(this.filePath, books);
        return updatedBook;
    }
    async delete(id) {
        let books = await this.findAll();
        const initialLength = books.length;
        books = books.filter((book) => book.id !== id);
        await (0, file_utils_1.writeData)(this.filePath, books);
        return initialLength !== books.length;
    }
};
exports.LibraryJsonRepository = LibraryJsonRepository;
exports.LibraryJsonRepository = LibraryJsonRepository = __decorate([
    (0, common_1.Injectable)()
], LibraryJsonRepository);
//# sourceMappingURL=library-json.repository.js.map
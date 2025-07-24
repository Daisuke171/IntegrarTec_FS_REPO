"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = readData;
exports.writeData = writeData;
const fs_1 = require("fs");
async function readData(filePath) {
    try {
        const data = await fs_1.promises.readFile(filePath, 'utf-8');
        if (!data.trim()) {
            return [];
        }
        return JSON.parse(data);
    }
    catch (error) {
        if (typeof error === 'object' &&
            error !== null &&
            'code' in error &&
            error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}
async function writeData(filePath, data) {
    await fs_1.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
//# sourceMappingURL=file.utils.js.map
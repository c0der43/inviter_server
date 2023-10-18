"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFileStorage = exports.normalizeFileName = void 0;
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const normalizeFileName = (req, file, callback) => {
    const fileName = file.originalname.split('.').pop();
    callback(null, `${(0, crypto_1.randomBytes)(20).toString('hex')}.${fileName}`);
};
exports.normalizeFileName = normalizeFileName;
exports.eventFileStorage = (0, multer_1.diskStorage)({
    destination: './uploads_event',
    filename: exports.normalizeFileName
});
//# sourceMappingURL=storage_event.js.map
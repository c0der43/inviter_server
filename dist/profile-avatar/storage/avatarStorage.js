"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatarFileStorage = void 0;
const multer_1 = require("multer");
const storage_event_1 = require("../../event-file/storage_event");
exports.avatarFileStorage = (0, multer_1.diskStorage)({
    destination: './uploads_avatars',
    filename: storage_event_1.normalizeFileName
});
//# sourceMappingURL=avatarStorage.js.map
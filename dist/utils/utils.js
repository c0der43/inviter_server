"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringNumbersToArrayNumber = void 0;
const convertStringNumbersToArrayNumber = (str) => {
    if (str.length === 0)
        return [];
    const arrStr = str.split(',');
    return arrStr.map((i) => parseInt(i));
};
exports.convertStringNumbersToArrayNumber = convertStringNumbersToArrayNumber;
//# sourceMappingURL=utils.js.map
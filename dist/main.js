"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const cors = require("cors");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.use(cors());
    app.use('/uploads_event', express.static((0, path_1.join)(__dirname, '..', '/uploads_event')));
    app.use('/uploads_avatar', express.static((0, path_1.join)(__dirname, '..', '/uploads_avatars')));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map
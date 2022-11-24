"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
exports.DataBaseModule = mongoose_1.MongooseModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => {
        return {
            uri: 'mongodb://localhost:27017',
        };
    },
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=db.module.js.map
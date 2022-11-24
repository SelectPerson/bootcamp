"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/user.entity");
exports.DataBaseModule = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [user_entity_1.User],
        synchronize: true,
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=db.module.js.map
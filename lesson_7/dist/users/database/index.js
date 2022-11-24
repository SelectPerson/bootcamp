"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositories = exports.database = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_1 = require("./user");
exports.database = [
    mongoose_1.MongooseModule.forFeature([{ name: user_1.User.name, schema: user_1.UserSchema }]),
];
exports.repositories = [user_1.UserRepository];
//# sourceMappingURL=index.js.map
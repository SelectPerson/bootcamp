"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config = require('../config');
let UsersMiddleware = class UsersMiddleware {
    constructor() {
        this.config = config;
    }
    use(req, res, next) {
        var _a, _b;
        const reqToken = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
        if (reqToken !== this.config.authToken) {
            return res.status(401).json({ success: false, message: 'INVALID_TOKEN' });
        }
        next();
    }
};
UsersMiddleware = __decorate([
    (0, common_1.Injectable)()
], UsersMiddleware);
exports.UsersMiddleware = UsersMiddleware;
//# sourceMappingURL=users.middleware.js.map
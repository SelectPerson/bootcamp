"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser({ email, password }) {
        const user = await this.usersService.findByEmail(email);
        if ((user === null || user === void 0 ? void 0 : user.password) === password) {
            return user;
        }
        return null;
    }
    async login(loginAuthDto) {
        const payload = Object.assign({}, loginAuthDto);
        const validate = await this.validateUser(payload);
        if (validate) {
            const getUserInfo = validate === null || validate === void 0 ? void 0 : validate.dataValues;
            getUserInfo === null || getUserInfo === void 0 ? true : delete getUserInfo.password;
            return {
                access_token: this.jwtService.sign(getUserInfo),
            };
        }
        throw new common_1.HttpException('Email or password is not correct', common_1.HttpStatus.BAD_REQUEST);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
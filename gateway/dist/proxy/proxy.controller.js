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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyController = void 0;
const common_1 = require("@nestjs/common");
const proxy_service_1 = require("./proxy.service");
let ProxyController = class ProxyController {
    proxyService;
    constructor(proxyService) {
        this.proxyService = proxyService;
    }
    async login(body, res) {
        const result = await this.proxyService.forwardPost('http://localhost:5001/auth/login', body);
        return res.status(result.status).json(result.data);
    }
    async register(body, res) {
        const result = await this.proxyService.forwardPost('http://localhost:5001/auth/register', body);
        return res.status(result.status).json(result.data);
    }
    async getMenu(res) {
        const result = await this.proxyService.forwardGet('http://localhost:5002/menu');
        return res.status(result.status).json(result.data);
    }
    async addMenuItem(body, res) {
        const result = await this.proxyService.forwardPost('http://localhost:5002/menu', body);
        return res.status(result.status).json(result.data);
    }
    async updateMenuItem(id, body, res) {
        const result = await this.proxyService.forwardPut(`http://localhost:5002/menu/${id}`, body);
        return res.status(result.status).json(result.data);
    }
    async deleteMenuItem(id, res) {
        const result = await this.proxyService.forwardDelete(`http://localhost:5002/menu/${id}`);
        return res.status(result.status).json(result.data);
    }
    async getOrders(res) {
        const result = await this.proxyService.forwardGet('http://localhost:5003/orders');
        return res.status(result.status).json(result.data);
    }
    async createOrder(body, res) {
        const result = await this.proxyService.forwardPost('http://localhost:5003/orders', body);
        return res.status(result.status).json(result.data);
    }
    async getFeedback(res) {
        const result = await this.proxyService.forwardGet('http://localhost:5004/feedback');
        return res.status(result.status).json(result.data);
    }
    async postFeedback(body, res) {
        const result = await this.proxyService.forwardPost('http://localhost:5004/feedback', body);
        return res.status(result.status).json(result.data);
    }
};
exports.ProxyController = ProxyController;
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('auth/register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('menu'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "getMenu", null);
__decorate([
    (0, common_1.Post)('menu'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "addMenuItem", null);
__decorate([
    (0, common_1.Put)('menu/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "updateMenuItem", null);
__decorate([
    (0, common_1.Delete)('menu/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "deleteMenuItem", null);
__decorate([
    (0, common_1.Get)('orders'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Post)('orders'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)('feedback'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "getFeedback", null);
__decorate([
    (0, common_1.Post)('feedback'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProxyController.prototype, "postFeedback", null);
exports.ProxyController = ProxyController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [proxy_service_1.ProxyService])
], ProxyController);
//# sourceMappingURL=proxy.controller.js.map
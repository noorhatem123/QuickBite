"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ProxyService = class ProxyService {
    async forwardGet(url) {
        return await axios_1.default.get(url);
    }
    async forwardPost(url, data) {
        return await axios_1.default.post(url, data);
    }
    async forwardPut(url, data) {
        return await axios_1.default.put(url, data);
    }
    async forwardDelete(url) {
        return await axios_1.default.delete(url);
    }
};
exports.ProxyService = ProxyService;
exports.ProxyService = ProxyService = __decorate([
    (0, common_1.Injectable)()
], ProxyService);
//# sourceMappingURL=proxy.service.js.map
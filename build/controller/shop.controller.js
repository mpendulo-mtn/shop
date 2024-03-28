"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const common_1 = require("@nestjs/common");
const shop_service_1 = require("../services/shop.service");
const github_automation_1 = require("@mtnkente/github-automation");
let ShopController = class ShopController {
    constructor(shopService) {
        this.shopService = shopService;
    }
    findAll() {
        const repoName = 'shop';
        const directory = './';
        (0, github_automation_1.createRepoAndUpload)({ repoName, directory });
        return this.shopService.findAll();
    }
};
exports.ShopController = ShopController;
__decorate([
    (0, common_1.Inject)(shop_service_1.ShopService)
], ShopController.prototype, "shopService", void 0);
__decorate([
    (0, common_1.Get)()
], ShopController.prototype, "findAll", null);
exports.ShopController = ShopController = __decorate([
    (0, common_1.Controller)('shop')
], ShopController);

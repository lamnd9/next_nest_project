"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailModule = void 0;
const common_1 = require("@nestjs/common");
const order_detail_service_1 = require("./order.detail.service");
const order_detail_controller_1 = require("./order.detail.controller");
const order_detail_schema_1 = require("./schemas/order.detail.schema");
const order_detail_schema_2 = require("./schemas/order.detail.schema");
const mongoose_1 = require("@nestjs/mongoose");
let OrderDetailModule = class OrderDetailModule {
};
exports.OrderDetailModule = OrderDetailModule;
exports.OrderDetailModule = OrderDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: order_detail_schema_2.OrderDetail.name, schema: order_detail_schema_1.OrderDetailSchema }])],
        controllers: [order_detail_controller_1.OrderDetailController],
        providers: [order_detail_service_1.OrderDetailService],
    })
], OrderDetailModule);
//# sourceMappingURL=order.detail.module.js.map
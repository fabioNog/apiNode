"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.database();
        this.middlewares();
        this.router();
    }
    router() {
        (0, routes_1.default)(this.express);
    }
    database() {
    }
    middlewares() {
    }
}
exports.default = App;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mainPage_router_1 = require("./router/mainPage.router");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
const PORT = 5200;
app.listen(PORT, () => {
    try {
        console.log(`listening port ${PORT}`);
    }
    catch (e) {
        console.log(e.message);
    }
});
app.use('/', mainPage_router_1.pageRouter);

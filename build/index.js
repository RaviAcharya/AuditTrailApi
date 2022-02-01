"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
//import { ConnectDb } from "./plugins/mongoose";
const PORT = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-trail';
const audit_trail_route_1 = require("./routes/audit-trail-route");
const db_connect_1 = require("./plugins/db-connect");
const server = (0, fastify_1.default)({ logger: true });
server.register(db_connect_1.connectDB);
server.register(audit_trail_route_1.auditTrailRoute);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server.listen(PORT);
        console.log("server started successfully");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
start();

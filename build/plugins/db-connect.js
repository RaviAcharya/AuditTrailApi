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
exports.connectDB = void 0;
/*import mongoose from 'mongoose'
import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
export const ConnectDb : FastifyPluginAsync = async(fastify : FastifyInstance, options : FastifyPluginOptions)=>{
        console.log("In db")
        mongoose.connect("mongodb://localhost:27017/api-trail")
        .then(()=>console.log("mongodb connected"))
        .catch((err)=>console.log(err))
}*/
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const fastify_mongodb_1 = require("fastify-mongodb");
exports.connectDB = (0, fastify_plugin_1.default)((fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield fastify.register(fastify_mongodb_1.fastifyMongodb, { url: 'mongodb://localhost:27017/api-trail' });
}));

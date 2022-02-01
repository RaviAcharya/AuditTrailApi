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
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditTrailPutHandler = exports.auditTrailPostHandler = exports.auditTrailGetHandler = void 0;
const auditTrailGetHandler = (request, response, fastify) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const collection = (_a = fastify.mongo.db) === null || _a === void 0 ? void 0 : _a.collection('audit_collection');
    const reqParameter = request.query;
    const value = parseInt(reqParameter.typeId);
    console.log(typeof value);
    const result = yield (collection === null || collection === void 0 ? void 0 : collection.find({ typeId: value }).toArray());
    console.log(result);
    response.send(result);
});
exports.auditTrailGetHandler = auditTrailGetHandler;
const auditTrailPostHandler = (request, response, fastify) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const collection = (_b = fastify.mongo.db) === null || _b === void 0 ? void 0 : _b.collection('audit_collection');
    const auditDoc = request.body;
    const auditTrailDoc = auditDoc;
    const result = yield (collection === null || collection === void 0 ? void 0 : collection.insertOne(auditTrailDoc));
    return result;
});
exports.auditTrailPostHandler = auditTrailPostHandler;
const auditTrailPutHandler = (request, response, fastify) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const collection = (_c = fastify.mongo.db) === null || _c === void 0 ? void 0 : _c.collection('audit_collection');
    const auditDoc = request.body;
    const auditTrailDoc = auditDoc;
    const id = auditTrailDoc.typeId;
    /*  const existedEntry = await collection?.findOne({typeId:id})
      console.log(existedEntry)
      const index = existedEntry?._id
      console.log(index)
      const result = await collection?.updateOne({_id:index},auditTrailDoc)
      //console.log(result)*/
    return "yes";
});
exports.auditTrailPutHandler = auditTrailPutHandler;

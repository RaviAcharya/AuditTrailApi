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
exports.auditTrailRoute = void 0;
const audit_trail_handler_1 = require("../handler/audit-trail-handler");
const auditBodyData = {
    type: 'object',
    properties: {
        typeId: { type: 'number' },
        type: { type: 'string' },
        attribute: { type: 'string' },
        oldValue: { type: 'object' },
        newValue: { type: 'object' },
        createdDate: { type: 'string',
            format: 'date' },
        updatedBy: { type: 'string' }
    },
    required: ['typeId', 'type', 'attribute']
};
const postOpt = {
    schema: {
        body: auditBodyData,
        response: {
            200: {
                type: 'object'
            }
        }
    }
};
const getOpt = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: auditBodyData
            }
        }
    }
};
const updateOpt = {
    schema: {
        body: auditBodyData,
        response: {
            200: {
                type: 'object'
            }
        }
    }
};
function auditTrailRoute(fastify, options, done) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/add-entry', postOpt, (request, response) => __awaiter(this, void 0, void 0, function* () {
            yield (0, audit_trail_handler_1.auditTrailPostHandler)(request, response, fastify);
        }));
        fastify.get(`/get-entry/:typeId`, getOpt, (request, response) => __awaiter(this, void 0, void 0, function* () {
            yield (0, audit_trail_handler_1.auditTrailGetHandler)(request, response, fastify);
        }));
        fastify.put('/update-entry', (request, response) => __awaiter(this, void 0, void 0, function* () {
            yield (0, audit_trail_handler_1.auditTrailPutHandler)(request, response, fastify);
        }));
        done();
    });
}
exports.auditTrailRoute = auditTrailRoute;

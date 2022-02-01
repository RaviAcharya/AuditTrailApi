import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { Date } from "mongoose";
import { type } from "os";
import { auditTrailGetHandler, auditTrailPostHandler, auditTrailPutHandler } from "../handler/audit-trail-handler";


const auditBodyData = {
    type : 'object',
    properties : {
        typeId      : {type : 'number'},
        type        : {type : 'string'},
        attribute   : {type : 'string'},
        oldValue    : {type : 'object'},
        newValue    : {type : 'object'},
        createdDate : {type : 'string',
                       format : 'date'},
        updatedBy   : {type : 'string'}
    },
    required : ['typeId','type','attribute']
}

const postOpt = {
    schema : {
        body : auditBodyData,
        response :{
            200 : {
                type :'object'
            }
        }
    }
}
const getOpt = {
    schema : {
        response : {
            200 : {
                type : 'array',
                items :auditBodyData
            }
        }
    }
}

const updateOpt = {
    schema : {
        body : auditBodyData,
        response : {
            200 : {
                type : 'object'
            }
        }
    }
}

export async function auditTrailRoute(fastify:FastifyInstance, options:any, done:any){
    
    fastify.post('/add-entry',postOpt,async(request:FastifyRequest, response:FastifyReply)=>{
        await auditTrailPostHandler(request,response,fastify)
    })
    fastify.get(`/get-entry/:typeId`,getOpt, async(request:FastifyRequest, response:FastifyReply)=>{
        await auditTrailGetHandler(request,response,fastify)
    })
    fastify.put('/update-entry',async(request:FastifyRequest, response:FastifyReply)=>{
        await auditTrailPutHandler(request,response,fastify)
    })
    done()

}
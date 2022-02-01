import exp from "constants";
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

interface AuditData {
    typeId      : number,
    type        : string,
    attribute   : string,
    oldValue    : JSON,
    newValue    : JSON,
    createdDate : Date,
    updatedBy   : string
}

interface requestParam {
    typeId : string
}

export const auditTrailGetHandler:any = async(request:FastifyRequest, response:FastifyReply, fastify:FastifyInstance)=>{
     const collection = fastify.mongo.db?.collection('audit_collection')
     const reqParameter:requestParam = request.query as requestParam
     const value:number = parseInt(reqParameter.typeId)
     console.log(typeof value)
     const result = await collection?.find({typeId:value}).toArray()
     console.log(result)
     response.send(result)
}
export const auditTrailPostHandler:any = async(request:FastifyRequest, response:FastifyReply, fastify:FastifyInstance)=>{
    const collection = fastify.mongo.db?.collection('audit_collection')
    const auditDoc:any = request.body
    const auditTrailDoc:AuditData = auditDoc as AuditData
    const result = await collection?.insertOne(auditTrailDoc)
    return result
}

export const auditTrailPutHandler:any = async(request:FastifyRequest, response:FastifyReply, fastify:FastifyInstance)=>{
    const collection = fastify.mongo.db?.collection('audit_collection')
    const auditDoc:any = request.body
    const auditTrailDoc:AuditData = auditDoc as AuditData
    const id:number = auditTrailDoc.typeId
  /*  const existedEntry = await collection?.findOne({typeId:id})
    console.log(existedEntry)
    const index = existedEntry?._id
    console.log(index)
    const result = await collection?.updateOne({_id:index},auditTrailDoc)
    //console.log(result)*/
    return "yes"
}
/*import mongoose from 'mongoose'
import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
export const ConnectDb : FastifyPluginAsync = async(fastify : FastifyInstance, options : FastifyPluginOptions)=>{
        console.log("In db")
        mongoose.connect("mongodb://localhost:27017/api-trail")
        .then(()=>console.log("mongodb connected"))
        .catch((err)=>console.log(err))
}*/
import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import {fastifyMongodb} from 'fastify-mongodb'
export const connectDB = fp( async(fastify:FastifyInstance, options:any) =>{
        await fastify.register(fastifyMongodb,{url :'mongodb://localhost:27017/api-trail'})
        
})


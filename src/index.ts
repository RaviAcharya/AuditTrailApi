import fastify from "fastify";
//import { ConnectDb } from "./plugins/mongoose";
const PORT = process.env.PORT || 4000
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-trail'
import { auditTrailRoute } from "./routes/audit-trail-route";
import { connectDB } from "./plugins/db-connect";

const server = fastify({logger:true})

server.register(connectDB)
server.register(auditTrailRoute)

const start = async () => {
    try
    { 
      server.listen(PORT);
      console.log("server started successfully");
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}
start()
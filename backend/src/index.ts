import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign, verify } from 'hono/jwt'
import { userRoute } from './routes/user'
import { blogRoute } from './routes/blog'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
    JWT_SECRET:string
  }
}>()
// app.use('/api/v1/blog/*', async(c,next)=>{
//   const header=c.req.header("authorization")||""
//   const response= await verify(header,c.env.JWT_SECRET)
//   if(response.id){
//     next()
//   }else{
//     return c.json({error:"unauthorized"})
//   }
  
// })
app.use('/*',cors())
app.route('/api/v1/user',userRoute)
app.route('/api/v1/blog',blogRoute)

export default app

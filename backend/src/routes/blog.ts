import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";
export const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  ,
  Variables:{
    userId:string
  }
}>();
blogRoute.use("/*", async (c, next) => {
  const authheader = c.req.header("authorization") || "";
  const user = await verify(authheader, c.env.JWT_SECRET)
  if(user){
    c.set("userId",user.id);
    await next()
  }else{
    c.status(403)
    return c.json({
        message:"you are not logged in "
    })
  }
    next()
});
blogRoute.post("/", async (c) => {
    const body= await c.req.json();
    const authorId=c.get("userId")
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
    })
  return c.json({
        id:blog.id
  })
});
blogRoute.put("/",async (c) => {
    const body= await c.req.json();
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
  return c.json({
    title:body.title,
    content:body.content
  })
});
blogRoute.get("/bulk", async (c) => {
  const prisma =new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs= await prisma.post.findMany({
    select:{
      content:true,
      title:true,
      id:true,
      author:{
        select:{
          name:true
        }
      }
    }
  });
  return c.json({
      blogs
  })
});
blogRoute.get("/:id",async (c) => {
    const id= await c.req.param("id");
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
    const blog=await prisma.post.findFirst({
        where:{
            id:id
        }
    })
  return c.json({
    blog
  })
}catch(e){
    c.status(411);
    return c.json({
        message:"error while blog post"
    })
}
});

// here we have to add pagination (which means it should show the first 10 blogs and if the user scroll down then they will be able to see more blogs)


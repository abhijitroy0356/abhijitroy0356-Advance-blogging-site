import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCart"
import { useBlogs } from "../hooks"

export const Blogs=()=>{
  const {loading, blogs}=useBlogs();

  if(loading){
    return <div>
        loading
    </div>
  }
  return (
    <div>
    <Appbar/>
    <div className="flex justify-center ">
      <div className="max-w-xl">
      <BlogCard
      authorName={"Abhijit Roy"}
      title={"How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      content={"contnet of the blog, How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market,How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      publishedDate={"2nd feb 2024"}
      />
       <BlogCard
      authorName={"Abhijit Roy"}
      title={"How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      content={"contnet of the blog, How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market,How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      publishedDate={"2nd feb 2024"}
      />
       <BlogCard
      authorName={"Abhijit Roy"}
      title={"How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      content={"contnet of the blog, How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market,How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      publishedDate={"2nd feb 2024"}
      />
       <BlogCard
      authorName={"Abhijit Roy"}
      title={"How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      content={"contnet of the blog, How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market,How you catch your risk charts with great accuracy for intra day , best stats shared by old sharks of market"}
      publishedDate={"2nd feb 2024"}
      />
    </div>
    </div>
    </div>
    
  )
}
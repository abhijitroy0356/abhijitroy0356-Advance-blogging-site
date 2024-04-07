
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({ authorName,
    title,
    content,
    publishedDate }: BlogCardProps) => {

    return (
        <div className="border-b border-slate-200 pb-4 p-8">
            <div className="flex">
                <Avatar name={authorName} size={"small"}/> 
                <div>
                <div className="flex justify-center flex-col font-extralight text-sm pl-2">{authorName} </div>
                </div>
               <div className="text-xs flex justify-center flex-col  pl-2">
                    <Circle/>
               </div>
               <div className="pl-2 flex justify-center flex-col  font-thin text-sm text-slate-500"> 
                  {publishedDate}
               </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="pt-3 text-slate-400 text-sm font-thin">
                {`${Math.ceil(content.length / 100)} minutes"`}
            </div>
        </div>
    )
}
function Circle(){
    return (
        <div className="w-1 h-1 rounded-full bg-slate-600">

        </div>
    )
}
export function Avatar({name, size="small"}:{name:string, size:"small" | "big"}) {
    return(
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600  ${size==="small" ? "w-6 h-6":"w-10 h-10"}`}>
            <span className={`${size==="small"? "text-xs":"text-md"}font-medium text-gray-600 dark:text-gray-3001`}>{name[0]}</span>
        </div>
    )
}
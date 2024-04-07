import { Avatar } from "./BlogCart"

export const Appbar = () => {
    return (
        <div className="flex justify-between px-10 py-3">
            <div className="flex justify-center flex-col">
            <div>Blogspot</div>
            </div>
            
            <div className="hover:cursor-pointer">
                <button type="button" className="mr-3 relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 ">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </button>
                <Avatar  size={"big"} name="ANB" />
            </div>
        </div>
    )
}
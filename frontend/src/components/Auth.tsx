import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { SignupInput } from "@abhijit09988/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../Config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?"signup":"signin"}`,postInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }
       catch(e){ 
            alert("it failed")
       }

    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-400">
                            {type==="signin" ? "not registered ? " : "already have an account ?"}<Link className="pl-2 underline text-black" to={type==="signin"? "/signup" :"/signin"  }>{type=="signin" ? "Register":"Login"}</Link>
                        </div>
                    </div>
                    <div className="pt-4">
                    {type==='signup'?<LabelledInput label="name" placeholder="enter your name" onChange={(e) => {
                            setPostInputs(c => ({
                                ... postInputs,
                                name: e.target.value
                            }))
                        }} />:null}
                        <LabelledInput label="email" type={"email"} placeholder="enter your mail" onChange={(e) => {
                            setPostInputs(c => ({
                                ... postInputs,
                                email: e.target.value
                            }))
                        }} />
                        <LabelledInput label="password" type={"password"} placeholder="enter the password" onChange={(e) => {
                            setPostInputs(c => ({
                                ... postInputs,
                                password: e.target.value
                            }))
                        }} />
                        
                        <button onClick={sendRequest} type="button" className=" w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">{type==="signup" ? "Sign-up" : "Sign-in"}</button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
interface labelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({ label, placeholder, onChange, type }: labelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}
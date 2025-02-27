// src/routes/Login.js

import { Icon } from "@iconify/react";
import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { makeUnauthenticatedPOSTrequest } from "../utils/serverHelpers";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginComponent = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [cookies , setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async() =>{
    
            const data = {email , password }
    
            const response = await (makeUnauthenticatedPOSTrequest("/auth/login", data)
        );
    
        if(response && !response.err){
            // console.log(response);
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate()+30);
            setCookie("token", token, {path:"/", expires:date});
    
            alert("success")
            navigate("/home");
        }
        else{
            alert("failure");
        }
    
        }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon= "logos:spotify" width="150"/>
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">

                {/* Inouts email and password && signup button */}

                <div className="font-bold mb-6 ">
                    To continue Login To Spotify
                </div>

                <TextInput label="Email Address or Username" placeholder="Email Address or Username"
                className="my-6"
                value={email}
                setValue={setEmail}
                />
                 {/* Password input */}

            <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword}/>

            <div className=" w-full flex items-center justify-end my-8">

            <button className="bg-green-500 font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
                e.preventDefault();
                login();
            }}>
                Login
            </button>

            </div>

            <div className="w-full border border-solid border-gray-200">
            </div>

            <div className="my-6 font-semibold text-xl">
                Don't have an Account ?
            </div>

            <div className="border border-gray-500 w-full flex items-center justify-center py-4 rounded-full text-gray-500 font-bold">
               <Link to = "/signup">Signup for Spotify
               </Link> 
            </div>
        

            </div>

        </div>

       
    );
};

export default LoginComponent;

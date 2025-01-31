// src/routes/Login.js

import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";

const LoginComponent = () => {
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
                />
                 {/* Password input */}

            <PasswordInput label="Password" placeholder="Password"/>

            <div className=" w-full flex items-center justify-end my-8">

            <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
                Login
            </button>

            </div>

            <div className="w-full border border-solid border-gray-200">
            </div>

            <div className="my-6 font-semibold text-xl">
                Don't have an Account ?
            </div>

            <div className="border border-gray-500 w-full flex items-center justify-center py-4 rounded-full text-gray-500 font-bold">
                Signup for Spotify
            </div>
        

            </div>

        </div>

       
    );
};

export default LoginComponent;

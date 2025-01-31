// src/routes/Login.js

import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";

const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon= "logos:spotify" width="150"/>
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">

                {/* Inouts email and password && signup button */}

                <div className="font-bold mb-6 text-2xl">
                   Sign Up to start Listening
                </div>

                <TextInput label="Email Address" placeholder="Enter your Email"
                className="my-6"
                />


<TextInput label="Confirm Email Address" placeholder="Confirm Email Address"
                className="mb-6"
                />
               

            <PasswordInput label="Create Password" placeholder="Enter a Strong Password" className="my-6"/>

            <TextInput label="What should we call you ?" placeholder="Enter your Profile name"
                className="my-6"
                />

            <div className=" w-full flex items-center justify-center my-8">

            <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
                Signup
            </button>

            </div>

            <div className="w-full border border-solid border-gray-200">
            </div>

            <div className="my-6 font-semibold text-xl">
               Already have an Account ?
            </div>

            <div className="border border-gray-500 w-full flex items-center justify-center py-4 rounded-full text-gray-500 font-bold">
               <Link to="/login">
               Login Instead
               </Link> 
            </div>
        

            </div>

        </div>

       
    );
};

export default SignupComponent;

// // src/routes/Login.js

// import { Icon } from "@iconify/react";
// import TextInput from "../components/shared/TextInput";
// import PasswordInput from "../components/shared/PasswordInput";
// import { Link } from "react-router-dom";

// const SignupComponent = () => {
//     return (
//         <div className="w-full h-full flex flex-col items-center">
//             <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
//             <Icon icon= "logos:spotify" width="150"/>
//             </div>

//             <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">

//                 {/* Inouts email and password && signup button */}

//                 <div className="font-bold mb-6 text-2xl">
//                    Sign Up to start Listening
//                 </div>

//                 <TextInput label="Email Address" placeholder="Enter your Email"
//                 className="my-6"
//                 />


//                 <TextInput label="Confirm Email Address" placeholder="Confirm Email Address"
//                 className="mb-6"/>
               

//             <PasswordInput label="Create Password" placeholder="Enter a Strong Password" className="my-6"/>

//              <div className="w-full flex justify-between items-center space-x-8">
                
             
//             <TextInput label="First Name" placeholder="Enter your First Name" className="my-6"
//             />

//             <TextInput label="Last Name" placeholder="Enter your Last Name" className="my-6"
//             />
//             </div>   

//             <div className=" w-full flex items-center justify-center my-8">

//             <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
//                 Signup
//             </button>

//             </div>

//             <div className="w-full border border-solid border-gray-200">
//             </div>

//             <div className="my-6 font-semibold text-xl">
//                Already have an Account ?
//             </div>

//             <div className="border border-gray-500 w-full flex items-center justify-center py-4 rounded-full text-gray-500 font-bold">
//                <Link to="/login">
//                Login Instead
//                </Link> 
//             </div>
        

//             </div>

//         </div>

       
//     );
// };

// export default SignupComponent;


import { Icon } from "@iconify/react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { makeUnauthenticatedPOSTrequest } from "../utils/serverHelpers";

const SignupComponent = () => {

    const [email ,setEmail] = useState("");
    const [ConfirmEmail , setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName , setlastName] = useState("");
    const [cookie , setCookie] = useCookies(["token"]);
    const navigate = useNavigate()
;
    const signUp = async() =>{

        if(email != ConfirmEmail){
            alert("Email and Confirm not matched");
            return;
        }

        const data = {email , password , username , firstName, lastName}

        const response = await (makeUnauthenticatedPOSTrequest("/auth/register", data)
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
    };
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150"/>
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-6 text-2xl">
                    Sign Up to start Listening
                </div>

                <TextInput 
                    label="Email Address" 
                    placeholder="Enter your Email"
                    className="my-6 w-full"
                    value={email}
                    setValue={setEmail}
                />

                <TextInput 
                    label="Confirm Email Address" 
                    placeholder="Confirm Email Address"
                    className="mb-6 w-full"
                    value={ConfirmEmail}
                    setValue={setConfirmEmail}
                />

                <TextInput 
                    label="Username" 
                    placeholder="Enter your username"
                    className="mb-6 w-full"
                    value={username}
                    setValue={setUsername}
                />

                <PasswordInput 
                    label="Create Password" 
                    placeholder="Enter a Strong Password" 
                    className="my-6 w-full"
                    value={password}
                    setValue={setPassword}
                />

                <div className="w-full grid grid-cols-2 gap-8">
                    <TextInput 
                        label="First Name" 
                        placeholder="Enter your First Name" 
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput 
                        label="Last Name" 
                        placeholder="Enter your Last Name" 
                        className="my-6"
                        value={lastName}
                        setValue={setlastName}
                    />
                </div>   

                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-500 font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
                        e.preventDefault();
                        signUp();
                    }}>
                        Signup
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-200"></div>

                <div className="my-6 font-semibold text-xl">
                    Already have an Account?
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
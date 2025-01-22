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

                <div className="font-bold mb-12 ">
                    To continue Login To Spotify
                </div>

                <TextInput label="Email Address or Username" placeholder="Email Address or Username"/>
                 {/* Password input */}

            <PasswordInput label="Password" placeholder="Password"/>

            </div>

           

        </div>
    );
};

export default LoginComponent;

import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";

const UploadSong = () => {
    return (
        <div className="h-full w-full flex">
            {/* Left panel */}
            <div className="h-full w-1/5 bg-black p-5 flex flex-col justify-between pb-10 overflow-auto">
                
                {/* Top Section (Logo + Navigation) */}
                <div>
                    {/* Logo Div */}
                    <div className="logoDiv mt-2 mb-5 flex justify-start">
                        <img src={spotify_logo} alt="spotify-logo" width={125} />
                    </div>
                    
                    {/* Navigation Items */}
                    <div className="py-5">
                        <IconText iconName="material-symbols:home" displayText="Home" active />
                        <IconText iconName="material-symbols:search" displayText="Search" />
                        <IconText iconName="icomoon-free:books" displayText="Library" />
                        <IconText iconName="material-symbols:library-music-sharp" displayText="My Music" />
                    </div>

                    {/* Additional Options */}
                    <div className="pt-3">
                        <IconText iconName="material-symbols:add-box" displayText="Create playlist" />
                        <IconText iconName="mdi:cards-heart" displayText="Liked Songs" />
                    </div>
                </div>

                {/* Bottom Section (Language Selector) */}
                <div className="px-5 mb-3">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" fontSize={30} />
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>
            </div>

            {/* Right panel */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">

                {/* Navbar Div */}
                <div className="navbar w-full h-14 bg-black bg-opacity-30 flex items-center justify-end px-6 space-x-6 text-white">
                    <TextwithHover displayText="Premium" />
                    <TextwithHover displayText="Support" />
                    <TextwithHover displayText="Download" />

                    <div className="h-1/2 border-r border-white"></div>


                    <TextwithHover displayText={"Upload Song"} />

                    <div className="bg-white w-10 h-10 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer text-black">
                        DA
                    </div>
                </div>

                {/* Other portion besides navbar */}
                <div className="content p-8 overflow-auto">
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                    <TextInput label="Name" labelClassName={"text-white"}
                    placeholder="Name"
                    />
                        </div>
                        <div className="w-1/2">
                    <TextInput label="Thumbnail" labelClassName={"text-white"}
                    placeholder="Thumbnail"
                    />
                        </div>
                    </div>
                    <div className="pt-5">
                            <CloudinaryUpload/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UploadSong;

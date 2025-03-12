import { useState } from "react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';


const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("");

    const submitSong = async() =>{
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create",data);
        console.log(response);
    }

    const uploadImageWidget = () => {
        if (window.cloudinary && window.cloudinary.createUploadWidget) {
            const myWidget = window.cloudinary.createUploadWidget(
                {
                    cloudName: 'dgbxpssni',
                    uploadPreset: 'v4cloud',
                    sources: ['local', 'url', 'camera'],
                    multiple: false,
                    folder: 'spotify_clone',
                    resourceType: 'auto'
                },
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        console.log('Done! Here is the image info: ', result.info);
                        setPlaylistUrl(result.info.secure_url);
                        setUploadedSongFileName(result.info.original_filename);
                    }
                }
            );
            myWidget.open();
        } else {
            console.error("Cloudinary widget is not loaded yet");
        }
    };

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

                    <TextwithHover displayText="Upload Song" />

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
                            <TextInput 
                                label="Name" 
                                labelClassName="text-white"
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                                label="Thumbnail" 
                                labelClassName="text-white"
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>
                    </div>
                    <div className="py-5">
                        {uploadedSongFileName ? (
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName} />
                        )}
                    </div>
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold" onClick={submitSong}>
                        Submit Song
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadSong;

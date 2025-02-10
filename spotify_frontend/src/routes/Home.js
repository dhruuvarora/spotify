// import spotify_logo from "../assets/images/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";

// const Home = () =>{

//     return(
//         <div className="h-full w-full flex">
//             {/* Left panel */}
//             <div className="h-full w-1/5 bg-black p-5">
            
//                 {/*Logo div  */}

//                 <div className="logoDiv p-6">
//                     <img src={spotify_logo} alt="spotify-logo" width={135}/>
//                 </div>
//                 <div>
//                     <IconText
//                     iconName={"material-symbols:home"}
//                     displayText={"Home"}
//                     />

//                     <IconText
//                     iconName={"material-symbols:search"}
//                     displayText={"Search"}
//                     />

//                     <IconText
//                     iconName={"icomoon-free:books"}
//                     displayText={"Library"}
//                     />

                    
//                 </div>
//             </div>
//             {/* Right panel */}
//             <div className="h-full">

//             </div>
//         </div>
//     )

// }

// export default Home;



// import spotify_logo from "../assets/images/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import { Icon } from "@iconify/react/dist/iconify.js";

// const Home = () => {
//     return (
//         <div className="h-full w-full flex">
            
//             {/* Left panel */}
//             <div className="h-full w-1/5 bg-black p-5 flex flex-col">
//                 {/* Logo Div */}
//                 <div className="logoDiv mt-2 mb-5 flex justify-start">
//                     <img src={spotify_logo} alt="spotify-logo" width={125} />
//                 </div>
                
//                 {/* Navigation Items */}
//                 <div className="py-5">
//                     <IconText iconName="material-symbols:home" displayText="Home" 
//                     active/>
//                     <IconText iconName="material-symbols:search" displayText="Search" />
//                     <IconText iconName="icomoon-free:books" displayText="Library" />
//                 </div>

//                 <div className="pt-3">
//                 <IconText iconName="material-symbols:add-box" displayText="Create playlist" />

//                 <IconText iconName="mdi:cards-heart" displayText="Liked Songs" />

//                 </div>

//                 <div className="px-5">

//                 <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                 <Icon icon = "carbon:earth-europe-africa"fontSize={30}/>
//                     <div className="ml-2 text-sm font-semibold">
//                     English
//                     </div>
//                 </div>

//                 </div>
//             </div>

//             {/* Right panel */}
//             <div className="h-full"></div>
//         </div>
//     );
// };

// export default Home;




import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* Left panel */}
            <div className="h-full w-1/5 bg-black p-5 flex flex-col justify-between">
                
                {/* Top Section (Logo + Navigation) */}
                <div>
                    {/* Logo Div */}
                    <div className="logoDiv mt-2 mb-5 flex justify-start">
                        <img src={spotify_logo} alt="spotify-logo" width={125} />
                    </div>
                    
                    {/* Navigation Items */}
                    <div className="py-5">
                        <IconText iconName="material-symbols:home" displayText="Home" active/>
                        <IconText iconName="material-symbols:search" displayText="Search" />
                        <IconText iconName="icomoon-free:books" displayText="Library" />
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
            <div className="h-full"></div>
        </div>
    );
};

export default Home;

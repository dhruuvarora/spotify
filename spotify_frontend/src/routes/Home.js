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




// import spotify_logo from "../assets/images/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import TextwithHover from "../components/shared/TextwithHover";

// const Home = () => {
//     return (
//         <div className="h-full w-full flex">
//             {/* Left panel */}
//             <div className="h-full w-1/5 bg-black p-5 flex flex-col justify-between pb-10">
                
//                 {/* Top Section (Logo + Navigation) */}
//                 <div>
//                     {/* Logo Div */}
//                     <div className="logoDiv mt-2 mb-5 flex justify-start">
//                         <img src={spotify_logo} alt="spotify-logo" width={125} />
//                     </div>
                    
//                     {/* Navigation Items */}
//                     <div className="py-5">
//                         <IconText iconName="material-symbols:home" displayText="Home" active/>
//                         <IconText iconName="material-symbols:search" displayText="Search" />
//                         <IconText iconName="icomoon-free:books" displayText="Library" />
//                     </div>

//                     {/* Additional Options */}
//                     <div className="pt-3">
//                         <IconText iconName="material-symbols:add-box" displayText="Create playlist" />
//                         <IconText iconName="mdi:cards-heart" displayText="Liked Songs" />
//                     </div>
//                 </div>

//                 {/* Bottom Section (Language Selector) */}
//                 <div className="px-5 mb-3">
//                     <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                         <Icon icon="carbon:earth-europe-africa" fontSize={30} />
//                         <div className="ml-2 text-sm font-semibold">English</div>
//                     </div>
//                 </div>

//             </div>

//             {/* Right panel */}
//             <div className="h-full w-4/5 bg-app-black">

//                 {/* Navbar Div */}
//                 <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex">

//                 <TextwithHover displayText={"Premium"}/>
//                 <TextwithHover displayText={"Support"}/>
//                 <TextwithHover displayText={"Download"}/>

//                 <TextwithHover displayText={"Signup"}/>


//                 <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                     Login
//                 </div>

//                 </div>

//                 {/* Other portion besides navbar */}
//                 <div></div>



//             </div>
//         </div>
//     );
// };

// export default Home;



import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";

const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* Left panel */}
            <div className="h-full w-1/5 bg-black p-5 flex flex-col justify-between pb-10">
                
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
            <div className="h-full w-4/5 bg-app-black">

                {/* Navbar Div */}
                <div className="navbar w-full h-14 bg-black bg-opacity-30 flex items-center justify-end px-6 space-x-6 text-white">
                    <TextwithHover displayText="Premium" />
                    <TextwithHover displayText="Support" />
                    <TextwithHover displayText="Download" />

                    <div className="h-1/2 border-r border-white"></div>


                    <TextwithHover displayText="Signup" />

                    <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer text-black">
                        Login
                    </div>
                </div>

                {/* Other portion besides navbar */}
                <div className="content p-8">

                    <PlaylistView/>
                </div>
            </div>
        </div>
    );
};

const PlaylistView = () =>{
    return(
        <div className="text-white" >
            <div className="text-2xl font-semibold mb-5">
                Focus
            </div>

            <div className="w-full flex justify-between">
                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"/>

                <Card title="Deep Focus" description="Keep calm"/>

                <Card title="instrumental " description="Relax and Study"/>

                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"/>

                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"/>
            </div>
        </div>
    )
};


const Card = ({title , description}) =>{
    return(
        <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-lg">

            <div className="py-4">
                <img className="w-full rounded-md" src="data:image/jpeg;base64,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" />
            </div>
            <div className="text-white text-sm font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )

}

export default Home;

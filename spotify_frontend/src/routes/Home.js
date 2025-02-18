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
                <div className="content p-8 overflow-auto">
                    <PlaylistView titleText="Focus"/>

                    <PlaylistView titleText="Sound of India"/>

                    <PlaylistView titleText="Choice"/>
                </div>
            </div>
        </div>
    );
};

const PlaylistView = ({titleText , cardsData}) =>{
    return(
        <div className="text-white" >
            <div className="text-2xl font-semibold mb-5">
                {titleText}
            </div>

            <div className="w-full flex justify-between space-x-4">
                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"
                imgUrl = "https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
                />

                <Card title="Deep Focus" description="Keep calm"
                imgUrl = "https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
                />

                <Card title="instrumental " description="Relax and Study"
                imgUrl = "https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
                />

                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"
                imgUrl = "https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
                />

                <Card title="Peaceful Piano" description="Relax and indulge with btiful piano peiece"
                imgUrl = "https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789" 
                />
            </div>
        </div>
    )
};


const Card = ({title , description , imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">

            <div className="py-4">
                <img className="w-full rounded-md" src={imgUrl}/>
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )

}

export default Home;

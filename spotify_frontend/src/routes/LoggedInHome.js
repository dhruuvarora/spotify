import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";

const focusCardData = [{
    title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {
        title:"Peaceful Piano",

        description:"Relax and Indugle with butiful peices",
        
         imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"

     },
     {

        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {

        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {
        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
    }
];


const spotifyPlaylistCardData = [{
    title:"this is one Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {
        title:"Peaceful Piano",

        description:"Relax and Indugle with butiful peices",
        
         imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"

     },
     {

        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {

        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     },
     {
        title:"Peaceful Piano",

    description:"Relax and Indugle with butiful peices",
    
     imgUrl:"https://www.theaudiostore.in/cdn/shop/articles/Creating_the_Perfect_Playlist-_Tips_and_Tricks_for_Audiophiles.png?v=1674203789"
     }
    ];

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
                    <PlaylistView titleText="Focus" cardsData={focusCardData}/>

                    <PlaylistView titleText="Sound of India" cardsData={spotifyPlaylistCardData}/>

                    <PlaylistView titleText="Choice"
                    cardsData={focusCardData}
                    />
                </div>
            </div>
        </div>
    );
};

const PlaylistView = ({titleText , cardsData}) =>{
    return(
        <div className="text-white mt-8" >
            <div className="text-2xl font-semibold mb-5">
                {titleText}
            </div>

            <div className="w-full flex justify-between space-x-4">
                {
                    cardsData.map(item=>{
                        return <Card title = {item.title} description={item.description} imgUrl={item.imgUrl}/>
                    })
                }
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

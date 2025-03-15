const SingleSongCard = () => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
            <div 
                className="w-12 h-12 bg-cover bg-center" 
                style={{
                    backgroundImage: `url("https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center"
                }}
            >
            </div>

            <div className="flex bg-white w-full">
            
            <div className="text-white flex justify-center items-center flex-col pl-4">
                <div className="text-white">Curtains</div>
                <div className="text-gray-400 text-xs">Ed-Sheeran</div>
            </div>
            </div>
        </div>
    );
}

export default SingleSongCard;

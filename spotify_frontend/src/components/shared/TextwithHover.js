const TextwithHover = ({ displayText , active}) => {
    return (
        <div className="flex items-center justify-start gap-3 px-3 py-2 cursor-pointer ">
            <div className={`${active?"text-white":"text-gray-400"} font-semibold text-lg hover:text-white `}>
                {displayText}
            </div>
        </div>
    );
};

export default TextwithHover;

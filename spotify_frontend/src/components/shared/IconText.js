// import { Icon } from "@iconify/react/dist/iconify.js";

// const IconText = ({iconName , displayText}) =>{
//     return (
//         <div className="flex items-center justify-start">
//             <div className="pt-3 px-5 py-2">
//                 <Icon icon={iconName} color="white" fontSize={25}/>
//             </div>
//             <div className="text-white text-sm font-semibold">
//                 {displayText}
//             </div>
//         </div>
//     )
// }

// export default IconText;

// import { Icon } from "@iconify/react/dist/iconify.js";

// const IconText = ({ iconName, displayText, active }) => {
//     return (
//         <div className="flex items-center justify-center">
//             <div className="px-5 py-2">

//             <Icon icon={iconName} color="white" fontSize={35} />

//             </div>
            
//             <div className="text-white text-sm font-semibold">
//                 {displayText}
//             </div>
//         </div>
//     );
// };

// export default IconText;


import { Icon } from "@iconify/react/dist/iconify.js";

const IconText = ({ iconName, displayText , active}) => {
    return (
        <div className="flex items-center justify-start gap-3 px-3 py-2 cursor-pointer ">
            <Icon icon={iconName} color={active ?"white":"gray"} fontSize={25} />
            <div className={`${active?"text-white":"text-gray-400"} text-sm font-semibold hover:text-white`}>
                {displayText}
            </div>
        </div>
    );
};

export default IconText;

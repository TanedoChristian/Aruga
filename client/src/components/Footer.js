import React from "react";



const Footer = () => {

    return (
        <div>
            <ul className="flex w-full justify-evenly footer items-center   drop-shadow-sm">
                <li className="mr-6">
                    <div className="flex flex-col justify-center items-center gap-1">
                    <i className="fa-solid fa-house"></i>
            
                    </div>
                </li>
                <li className="mr-6">
                    
                <div className="flex flex-col justify-center items-center gap-1">
                <i className="fa-regular fa-pen-to-square"></i>
               
                    </div>
                </li>
                <li className="mr-6">
                <div className="flex flex-col justify-center items-center gap-1">
                    <i className="fa-regular fa-heart"></i>
                   
                    </div>
                </li>

                <li className="mr-6">

                <div className="inline-flex relative w-fit">
                <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">8</div>
                    <i className="fa-regular fa-bell"></i>
                </div>

                </li>

                
                </ul>
        </div>
    )
}

export default Footer;
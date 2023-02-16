import React from "react";



const Footer = () => {

    return (
        <div>
            <ul class="flex w-full justify-evenly footer items-center  rounded-t-xl">
                <li class="mr-6">
                    <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-solid fa-house"></i>
            
                    </div>
                </li>
                <li class="mr-6">
                    
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-brands fa-blogger-b"></i>
                   
                    </div>
                </li>
                <li class="mr-6">
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-regular fa-heart"></i>
                   
                    </div>
                </li>
                <li class="mr-6">
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-regular fa-user "></i>
                    </div>
                </li>
                </ul>
        </div>
    )
}

export default Footer;
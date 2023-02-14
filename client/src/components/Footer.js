import React from "react";



const Footer = () => {

    return (
        <div>
            <ul class="flex w-full justify-evenly footer items-center">
                <li class="mr-6">
                    <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-solid fa-house"></i>
                    <a class="text-pink-600 hover:text-blue-800" href="#">Home</a>
                    </div>
                </li>
                <li class="mr-6">
                    
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-brands fa-blogger-b"></i>
                    <a class="text-pink-600 hover:text-blue-800" href="#">Blog</a>
                    </div>
                </li>
                <li class="mr-6">
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-regular fa-heart"></i>
                    <a class="text-pink-600 hover:text-blue-800" href="#">Jobs</a>
                    </div>
                </li>
                <li class="mr-6">
                <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-regular fa-user "></i>
                    <a class="text-pink-600 hover:text-blue-800" href="#">Profile</a>
                    </div>
                </li>
                </ul>
        </div>
    )
}

export default Footer;
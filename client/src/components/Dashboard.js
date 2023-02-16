import React from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import Footer from "./Footer";
const Dashboard = () => {

    return (
        <div>
            <div className="w-full dashboard-header flex justify-center items-center">
                <div className="w-11/12 h-4/5  dashboard-wrapper flex justify-between">
                    <div className="flex-col w-1/3">
                        <span className="text-sm">
                            Hello, 
                        </span>
                        
                        <br /> 

                        <span className="dashboard-username font-bold text-3xl">
                            Josephine
                        </span>
                        
                    </div>
                    <div className="flex bell-container">
                    
                    <img class="w-10 h-10 rounded-full mt-3" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Bonnie image" />
                    
                    </div>
                </div>
            </div>
            <Footer />
            <div>
                
            </div>
            <div className="w-full flex mt-2">
                <Search />
                <button class="bg-indigo-700 text-white font-bold p-4 rounded mr-2">
                <i class="fas fa-search"></i>
            </button>

            </div>
            <div className="p-5 mt-2 rounded flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Popular Categories</h1>
                    

                </div>
                
                

                <ul class="flex gap-3">
                <li>
                    <a href="#" class="text-center p-2 bg-indigo-700  text-white rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">All</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="text-center p-2 bg-white text-black rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">Full Time</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">Part Time</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">Teenager</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">Man</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400 shadow-xl mt-2">
                        <span class="whitespace-nowrap">Teenager</span>
                    </a>
                </li>

   
                </ul>
            </div>
           
            
           
                    

            

            <Jobs />
           
        </div>
    )

}

export default Dashboard;
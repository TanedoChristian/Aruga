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
                        <span className="text-xl font-medium">
                            Hello, 
                        </span>
                        
                        <br /> 

                        <span className="dashboard-username font-bold text-3xl">
                            Josephine
                        </span>
                        
                    </div>
                    <div className="flex bell-container">

                    <img className="w-10 h-10 rounded-full mt-3" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Bonnie image" />
                    
                    </div>
                </div>
            </div>
            <Footer />
            <div>
                
            </div>
          
            <div className="p-5 mt-1 rounded flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Popular Categories</h1>
                    

                </div>
                
                

                <ul className="flex gap-3 overflow-x-auto items-center">
                <li>
                    <a href="#" className="text-center p-1 px-3 secondary-clr  text-white rounded-lg flex border-gray-400 mt-2">
                        <span className="whitespace-nowrap">All</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-center p-2 bg-white text-black rounded-lg flex border-gray-400 mt-2">
                        <span className="whitespace-nowrap">Full Time</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2">
                        <span className="whitespace-nowrap">Part Time</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2">
                        <span className="whitespace-nowrap">Teenager</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2">
                        <span className="whitespace-nowrap">Man</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2">
                        <span className="whitespace-nowrap">Teenager</span>
                    </a>
                </li>

   
                </ul>
            </div>
           <div className="flex justify-center">
            <div className="flex flex-col items-center width-95">

                <Jobs />

            </div>
            </div>
           
                    

            {/* <div className="flex justify-center">
                
            </div> */}

            
           
        </div>
    )

}

export default Dashboard;
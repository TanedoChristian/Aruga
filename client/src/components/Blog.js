import React from "react";
import Search from "./Search";
import Jobs from "./Jobs";

const Blog = () => {

    return (
        <div>
            <div className="w-full dashboard-header flex justify-center items-center">
                <div className="w-11/12 h-4/5  dashboard-wrapper flex justify-between">
                    <div className="flex-col w-1/3">
                        <span className="text-sm">
                            Blog     
                        </span>
                        
                        <br /> 

                        <span className="dashboard-username font-bold">
                            Josephine
                        </span>
                        
                    </div>
                    <div className="flex bell-container">
                        <span className="material-symbols-outlined mt-2">
                            notifications
                        </span>
                    </div>
                </div>
            </div>

            <Search />

            <div className="w-full flex justify-center mt-7">
                <div className="w-11/12 flex justify-between">
                    <h1 className="font-bold"> Hot Blog</h1>
                    <p className="p-inactive" >See All</p>
                </div>
            </div>

            <Jobs />
        </div>
    )

}

export default Blog;
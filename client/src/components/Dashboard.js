import React from "react";
import Search from "./Search";
import Jobs from "./Jobs";

const Dashboard = () => {

    return (
        <div>
            <div className="w-full dashboard-header flex justify-center items-center">
                <div className="w-11/12 h-4/5  dashboard-wrapper flex justify-between">
                    <div className="flex-col w-1/3 text-slate-100">
                        <span className="text-sm p-inactive">
                            Welcome! 
                        </span>
                        
                        <br /> 

                        <span className="dashboard-username font-bold">
                            Josephine
                        </span>
                        
                    </div>
                    <div className="flex bell-container">
                        <span class="material-symbols-outlined text-slate-50 mt-2">
                            notifications
                        </span>
                    </div>
                </div>
            </div>

            <Search />

            <div className="w-full flex justify-center mt-7">
                <div className="w-11/12 flex justify-between">
                    <h1 className="text-slate-50 font-bold"> Available Jobs</h1>
                    <p className="p-inactive" >See All</p>
                </div>
            </div>

            <Jobs />
        </div>
    )

}

export default Dashboard;
import React from "react";
import Footer from "./Footer";
import JobsCard from "./JobsCard";



const Jobs = () => {

    return (
        <div className="jobs-container flex justify-center w-full">
            <div className="flex w-11/12 jobs-wrapper flex-col gap-5">

            <JobsCard />
            <JobsCard />
            <JobsCard />
            <JobsCard />
            <JobsCard />


                

                
            

            



            </div>
        </div>
        
    )

}

export default Jobs;
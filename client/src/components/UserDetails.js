import React from "react";
import BioInfo from "./BioInfo";
import Ratings from "./Ratings";


const UserDetails = () => {


    return (
        <div className="user-details-container w-full">
            <div className="h-full user-wrapper flex flex-col">
                
                <div className="user-info-container flex flex-col justify-center items-center gap-2">
                 <div className="img-container">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-full"
                        alt="Avatar"
                        />
                   
                 </div>
                <h1>Weekdays Babysitter</h1>
                <p>Nerry</p>

                <div className="jobs-category-container flex w-full justify-center gap-3">
                        <span className="jobs-category"> Weekdays Babysitter</span>
                        <span className="jobs-category"> Part Time</span>
                </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-4/5 border-pink border-t-2 mt-3"></div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-4/5">
                        <ul className="flex gap-4 justify-between list">
                            <li>Description</li>
                            <li>Reviews</li>
                            <li>Resume</li>
                        </ul>
                    </div>
                </div>

                <Ratings />

                <div className="w-full flex justify-center">
                <button class=" hire-now-btn text-white font-bold py-2 px-4 border border-white rounded w-4/5 mt-5 ">
                Hire Now
                </button>
                </div>
            </div>
            
        </div>
    )

}

export default UserDetails;
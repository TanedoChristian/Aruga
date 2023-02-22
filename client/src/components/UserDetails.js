
import React, { StrictMode, useState } from "react";
import BioInfo from "./BioInfo";
import Ratings from "./Ratings";


const UserDetails = () => {
    
    const data = JSON.parse(localStorage.getItem("user"))

    

    const [isDescription, setDescription] = useState(true);
    const [isReviews, setReviews] = useState(false);
    const [isResume, setResume] = useState(false);

    const [descriptionBg, setDescriptionBg] = useState("red");

    const [component, setComponent] = useState(<BioInfo name={data.name} address={data.address}/>);

    const showDescription = () => {
        setComponent(

            <BioInfo 
                name={data.name}
                address={data.address}
            />

        )
        
    }

    const showReviews = () => {
        setComponent(<Ratings />)
    }

    return (
        <div className="user-details-container w-full bg-white">
            <div className="h-full user-wrapper flex flex-col">
                <div className="h-[40vh] flex w-full border">

                
                <img src={data.img} className="object-contain"/>
                </div>
                


                <div className="w-full flex justify-center margin-negative rounded-t-2xl bg-gray-50">
                    <div className="w-4/5">
                        <ul className="flex gap-4 justify-between list">
                            <li onClick={showDescription}>Description</li>
                            <li onClick={showReviews}>Reviews</li>
                            <li>Resume</li>
                        </ul>
                    </div>
                </div>

                {component}

                


                <div className="w-full flex justify-center p-5 bg-white">
                <button class=" hire-now-btn text-white font-bold py-2 px-4 border border-white rounded w-4/5 mt-5 ">
                Hire Now
                </button>
                </div>
            </div>
            
        </div>
    )

}

export default UserDetails;
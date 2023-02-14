import React from "react";


const NotificationDetail = () => {


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
                
                <div className="w-full flex justify-center mt-10 bio-details">
                    <div className="w-4/5">
                        <h1>BIO</h1>
                        <p>HI! I'm Nerry. I am a part-time babysitter. I am currently enrolled in the University of Cebu. Taking up the degree in Bachelor of Science in Education. I am looking forward to look after a child and earn money through it. I hope you’ll considered me in taking care of your child. I am doing this because I love playing with kids and also for extra allowance for my school.</p>

                       
                        <br/>

                        <h1>RESPONSIBILITIES</h1>
                        <ul>
                            <li>Watch</li>
                            <li>Play</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex justify-center gap-2">
                <button class=" hire-now-btn text-white font-bold py-2 px-4 border border-pink-700 rounded w-2/5 mt-4">
                Accept
                </button>
                <button class=" hire-now-btn text-white font-bold py-2 px-4 border border-pink-700 rounded w-2/5 mt-4">
                Reject
                </button>
                </div>
            </div>
            
        </div>
    )

}

export default NotificationDetail;
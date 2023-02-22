import React from "react";
import Footer from "./Footer";



const NotificationCard = () => {

    return (
        <div className="jobs-container flex justify-center w-full">
            <div className="flex w-11/12 jobs-wrapper flex-col gap-3">

            <div className="jobs-card flex flex-col shadow-inner">
                    <div className="flex gap-3 jobs-card-user">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-full"
                        alt="Avatar"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-100">Nerry</p>
                            <h2 className="text-slate-100 font-bold">Weekdays Babysitter</h2>
                        </div>
                    </div>

                    <span className="jobs-location-text flex gap-1">
                        <span className="material-symbols-outlined">
                            pin_drop
                        </span>
                        <p>Sambag 1, Cebu City</p>
                    </span>
                    <div className="jobs-category-container flex w-full gap-3 m-4">
                        <span className="jobs-category"> View</span>
                    </div>
                </div>

                <div className="jobs-card flex flex-col shadow-inner">
                    <div className="flex gap-3 jobs-card-user">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-full"
                        alt="Avatar"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-100">Nerry</p>
                            <h2 className="text-slate-100 font-bold">Weekdays Babysitter</h2>
                        </div>
                    </div>

                    <span className="jobs-location-text flex gap-1">
                        <span className="material-symbols-outlined">
                            pin_drop
                        </span>
                        <p>Sambag 1, Cebu City</p>
                    </span>
                    <div className="jobs-category-container flex w-full gap-3 m-4">
                        <span className="jobs-category"> View</span>
                    </div>
                </div>

                
                

            </div>
        </div>
        
    )

}

export default NotificationCard;
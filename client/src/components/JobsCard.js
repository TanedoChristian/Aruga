import React from "react";



const JobsCard = () => {
    return (
        <div className="jobs-card flex flex-col drop-shadow-xl">
                    <div className="flex gap-3 jobs-card-user justify-around">
                        
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-100">Nerry</p>
                            <span className="flex gap-2 items-center">
                            <p className="text-slate-100">Tisa, Cebu City</p>
                            <i class="fa-solid fa-location-dot text-slate-100"></i>
                            </span>
                        </div>

                        <div class="flex flex-wrap justify-center">
                        <div class="p-4">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                        </div>
                        </div>
                        
      
                        
                    </div>
                    <div className="jobs-category-container flex w-full gap-3 m-4">
                        <span className="jobs-category"> Weekdays Babysitter</span>
                        <span className="jobs-category"> Part Time</span>
                    </div>
                </div>
    )
}

export default JobsCard;
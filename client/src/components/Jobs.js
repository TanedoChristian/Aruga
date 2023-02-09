import React from "react";



const Jobs = () => {

    return (
        <div className="jobs-container flex justify-center w-full">
            <div className="flex w-11/12 jobs-wrapper flex-col gap-3">

            <div className="jobs-card flex flex-col shadow-inner">
                    <div className="flex gap-3 jobs-card-user">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-full"
                        alt="Avatar"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="p-inactive">Nerry</p>
                            <h2 className="text-slate-100 font-bold">Weekdays Babysitter</h2>
                        </div>
                    </div>

                    <span className="jobs-location-text flex gap-1 p-inactive">
                        <span class="material-symbols-outlined">
                            pin_drop
                        </span>
                        <p>Sambag 1, Cebu City</p>
                    </span>


                    <div className="jobs-category-container flex w-full gap-2">
                        <span className="jobs-category"> Weekdays Babysitter</span>
                        <span className="jobs-category"> Part Time</span>
                    </div>
                </div>

                


                <div className="jobs-card flex flex-col shadow-inner">
                    <div className="flex  gap-3 jobs-card-user">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-full w-20"
                        alt="Avatar"
                        />
                        <div className="flex flex-col  justify-center">
                            <p className="p-inactive">Nerry</p>
                            <h2 className="text-slate-100 font-bold">Weekdays Babysitter</h2>
                        </div>
                    </div>

                    <span className="jobs-location-text flex gap-1 p-inactive">
                        <span class="material-symbols-outlined">
                            pin_drop
                        </span>
                        <p>Sambag 1, Cebu City</p>
                    </span>


                    <div className="jobs-category-container flex w-full gap-2">
                        <span className="jobs-category"> Weekdays Babysitter</span>
                        <span className="jobs-category"> Part Time</span>
                    </div>
                </div>

                <div className="jobs-card flex flex-col shadow-inner">
                    <div className="flex  gap-3 jobs-card-user">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-full w-20"
                        alt="Avatar"
                        />
                        <div className="flex flex-col  justify-center">
                            <p className="p-inactive">Nerry</p>
                            <h2 className="text-slate-100 font-bold">Weekdays Babysitter</h2>
                        </div>
                    </div>

                    <span className="jobs-location-text flex gap-1 p-inactive">
                        <span class="material-symbols-outlined">
                            pin_drop
                        </span>
                        <p>Sambag 1, Cebu City</p>
                    </span>


                    <div className="jobs-category-container flex w-full gap-2">
                        <span className="jobs-category"> Weekdays Babysitter</span>
                        <span className="jobs-category"> Part Time</span>
                    </div>
                </div>

            </div>

            

        </div>
    )

}

export default Jobs;
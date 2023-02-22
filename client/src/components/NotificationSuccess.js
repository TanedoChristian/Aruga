import React from "react";


const NotificationSuccess = () => {
    return (
        <div className="w-full h-screen flex items-center notification-sucess-container">
            <div className="h-4/5 w-full flex flex-col justify-center items-center text-center gap-28">
            
                <div className="flex flex-col gap-1">
                <i className="fa-solid fa-check-to-slot text-5xl"></i>
                <h1 className="text-3xl">Applicant Accepted</h1>
                <p className="text-sm">Thank you for  trusting Aruga
                We already notify the babysitter!
                </p>
                </div>
                <button className="hire-now-btn-white p-4 border rounded-3xl w-4/5">
                Go back to Home Page
                </button>
            </div>
        </div>
    )
}

export default NotificationSuccess;
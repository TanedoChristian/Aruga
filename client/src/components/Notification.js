import React from "react";
import Header from "./Header";
import NotificationCard from "./NotificationCard";
import Footer from "./Footer";

const Notification = () => {

    return (
        <div>
            <Header />

            <div className="w-full flex justify-center mt-7">
                <div className="w-11/12 flex justify-between">
                    <h1 className="font-bold"> Notifications </h1>
                    <p className="p-inactive" >See All</p>
                </div>
            </div>
            
            <NotificationCard />

            <Footer />

        </div>
    )

}

export default Notification;
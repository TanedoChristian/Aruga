import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobsCard from "./JobsCard";
import axios from "axios";


const Jobs = () => {

    const [users, setUser] = useState([])

    useEffect(() => {
        
        axios({
            method: "get",
            url: "http://192.168.1.9:8000/users",
        }).then(({data}) => {
            setUser(data)

            
        })
    }, [])


    return (
        <div className="jobs-container flex justify-center w-full p-1  pb-6">
            <div className="w-[99%]  flex flex-col gap-3">

            {
                users.map(user => (
                    <JobsCard 
                        img={`http://192.168.1.9:8000/${user.img}`}
                        name={`${user.firstname} ${user.lastname}`}
                        address={user.address}
                    />
                ))
            }

            

            


                

                
            

            



            </div>
        </div>
        
    )

}

export default Jobs;
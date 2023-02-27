import React from "react";



const Header = (props) => {
    return (
        <header className="flex items-center" style={{backgroundColor: "transparent"}}>
           <a href="/dashboard"><i className="fa-solid fa-arrow-left-long ml-4 text-2xl text-slate-50"></i></a> 
        </header>
    )
}

export default Header;
import React from "react";



const JobsCard = (props) => {

    const handleCardClick = () => {

      const data = {
        img: props.img,
        name: props.name,
        address: props.address
      }

      console.log(data)
      const url = "http://192.168.1.9:3000/user-details?userid=" + props.name

      localStorage.setItem("user", JSON.stringify(data))
      window.location.href = url;
    }

    return (

      <div
  href="#"
  class="relative  overflow-hidden rounded-xl  flex flex-col  bg-white drop-shadow-xl border border-gray-200 w-full p-3"
  onClick={handleCardClick}
>


  <div class="flex justify-between items-center">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
        {props.name}
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">{props.address}</p>
    </div>

    <div class="sm:block sm:shrink-0">
      <img
        src={props.img}
        class="h-16 w-16 rounded-full object-cover shadow-sm"
      />
    </div>
  </div>

  

  <dl class="mt-6 flex justify-between  ">

    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Active</dt>
      <dd class="text-xs text-gray-500">3 minute</dd>
    </div>

    <button className="p-1 bg-rose-400 text-white rounded-md text-sm">View Profile</button>
  </dl>
</div>


  //     <div class="rounded-lg shadow-xl bg-gray-50  flex flex-col " onClick={handleCardClick}>
  //     <div className="h-[300px] w-[350px] flex">
  //         <img class="rounded-t-lg object-cover" src={props.img} alt="" />
  //     </div>
  //     <div class="p-6">
  //         <div className="flex justify-between items-center">
  //             <h5 class=" text-md font-bold tracking-wide text-gray-800">{props.name}</h5>
  //             <p className="text-gray-400 text-sm">{props.address}</p>
  //         </div>
          
          

  //     </div>
  // </div>

       
 
/* <div className="rounded-xl card flex flex-col  test shadow-md" onClick={handleCardClick}>
  <div className="card-img">
    <img 
      src={props.img} 
      className="rounded-t-xl"
    />
  </div>
  
  <div className="inline-flex flex-col p-3  rounded-xl z-1 margin-negative bg-white">
    <div className="flex justify-between items-center">
      <h1 className="text-md font-bold tracking-wide">{props.name}</h1>
      <p className="text-slate-500  font-medium text-sm">{props.address}</p>
      </div>
      <div className="flex items-center gap-3 mt-2">
      <span className="secondary-clr text-white rounded-md px-3 py-1 text-sm">Full-time</span>
      <span className="secondary-clr text-white rounded-md px-3 py-1 text-sm">Student</span>

    </div>
  </div>

   </div> */

     
    )
}

export default JobsCard;
import React from "react";

const BioInfo = (props) => {
  return (
    <div className="">
      <div>
        <div className="mt-10 text-center pb-8">
          <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>
          <p className="mt-8 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p className="mt-2 text-gray-500">University of Computer Science</p>
        </div>
        <div className="flex flex-col justify-center  bg-white">
          <p className="text-gray-600 text-center font-light lg:px-16 p-3 mb-5">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioInfo;

// <div className="">
//   <div className=" flex flex-col gap-2 bg-white">
//     <nav className="bg-white  w-full  justify-center flex">
//       <div className="flex justify-between items-center  w-[98%] p-2">
//         <div className="flex items-center gap-2 ">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider">
//             Aruga
//           </span>
//         </div>

//         <div className="flex items-center gap-2 w-full justify-end">
//           <div className="">
//             <img
//               src={sessionStorage.getItem("userimg")}
//               className="h-9 w-9 rounded-full object-cover shadow-sm"
//             />
//           </div>
//           <button
//             data-collapse-toggle="mobile-menu-2"
//             type="button"
//             className="inline-flex items-center p-1  text-sm text-gray-700 rounded-lg  focus:outline-none "
//             aria-controls="mobile-menu-2"
//             aria-expanded="false"
//             onClick={handleShow}
//           >
//             <svg
//               className="w-7 h-7"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               className="hidden w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//     <SideNav isShow={showNav} />

//     <Footer>
//       <ul className="flex w-full justify-around footer border-b border-gray-200">
//         <li className="">
//           <div
//             className="flex flex-col justify-center items-center"
//             style={{ borderBottom: "3px solid #ec878f" }}
//           >
//             <i
//               className={`fa-solid fa-house text-slate-600`}
//               style={{ color: "#ec878f" }}
//             ></i>
//           </div>
//         </li>
//         <a href={`/blog`}>
//           <li className="">
//             <div className="flex flex-col justify-center items-center gap-1">
//               <i className={`fa-solid fa-pen-to-square text-slate-700`}></i>
//             </div>
//           </li>
//         </a>
//         <a href={`/offer`}>
//           <li className="">
//             <div className="flex flex-col justify-center items-center gap-1">
//               <i className="fa-regular fa-heart text-slate-700"></i>
//             </div>
//           </li>
//         </a>

//         <li className="">
//           <div className="inline-flex relative w-fit">
//             <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
//               8
//             </div>
//             <i className="fa-regular fa-bell text-slate-700"></i>
//           </div>
//         </li>
//       </ul>
//     </Footer>
//   </div>

//   <h1 className="mt-5 text-xl font-bold tracking-wide ml-3">
//     Available Jobs
//   </h1>

//   <div
//     id="defaultModal"
//     tabindex="-1"
//     className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-gray-100 bg-opacity-75"
//     style={{ display: showModal ? "block" : "none" }}
//   >
//     <div className="flex w-full items-center h-full justify-center">
//       <div className="relative  rounded-lg shadow bg-indigo-400">
//         <div className="flex items-start justify-between p-4  rounded-t">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//             Application Submitted
//           </h3>
//         </div>

//         <div className="flex items-center p-6 space-x-2  rounded-b dark:border-gray-600">
//           <button
//             data-modal-hide="defaultModal"
//             type="button"
//             onClick={() => setShowModal(false)}
//             className="text-white  text-md font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Confirm
//           </button>
//           <button
//             data-modal-hide="defaultModal"
//             type="button"
//             onClick={() => setShowModal(false)}
//             className=" text-white text-md font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md  text-sm font-medium px-5 py-2.5"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// <div className="flex  flex-col items-center gap-2 h-full">
//   <div className="flex w-full px-5 py-2"></div>

//   {jobs
//     .slice(0)
//     .reverse()
//     .map((job) => (
//       <div className="border border-gray-200">
//         <div className="p-4">
//           <h2 className="mt-2 mb-2  font-bold">{job.jobpost_title}</h2>
//           <p className="text-sm">
//             Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//             Donec ullamcorper nulla non metus auctor fringilla.
//           </p>
//           <div className="mt-3 flex items-center gap-2">
//             <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
//               20,000 a month
//             </span>
//             <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
//               {job.jobpost_type}
//             </span>
//           </div>
//         </div>
//         <div className="p-4 border-t  text-xs text-gray-700">
//           <span className="flex items-center mb-1">
//             <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 hours
//             ago
//           </span>
//           <span className="flex items-center justify-between">
//             <div className="flex items-center">
//               <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
//               <p>{job.jobpost_address}</p>
//             </div>
//             <button
//               className="text-xs text-indigo-700"
//               onClick={() => {
//                 setShowModal(true);
//                 handleApply(job.jobpost_id, job.parent_id);
//               }}
//             >
//               Apply Now
//             </button>
//           </span>
//         </div>
//       </div>
//     ))}
// </div>
// </div>

import React from "react";
import Modal from "./Modal";

const BioInfo = (props) => {
  return (
    <div className="">
      <div>
        <div className="mt-10 text-center pb-5">
          <div className="flex  gap-2 w-full justify-center items-center">
            <i className="fa-solid fa-location text-md"></i>
            <p className="font-light text-gray-600 text-md ">{props.address}</p>
          </div>
          <p className="mt-8 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p className="mt-2 text-gray-500">University of Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default BioInfo;

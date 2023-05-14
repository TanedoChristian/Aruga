import React from "react";
import Modal from "./Modal";

const BioInfo = (props) => {
  return (
    <div className="">
      <div>
        <div className="mt-5 text-center pb-5">
          <div className="flex  gap-2 w-full justify-center items-center">
            <i className="fa-solid fa-location-dot text-red-500 text-md"></i>
            <p className="font-light text-gray-600 text-md ">{props.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioInfo;

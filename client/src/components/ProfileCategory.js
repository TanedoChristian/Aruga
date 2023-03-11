import React from "react";

const ProfileCategory = (props) => {
  return (
    <div className="w-full flex justify-center  items-center mb-5">
      <div className="w-[95%] flex items-center">
        <ul className="flex gap-4 justify-evenly w-full items-center list">
          <li
            onClick={props.showDescription}
            className="p-2"
            style={{ backgroundColor: props.description }}
          >
            Description
          </li>
          <li onClick={props.showReviews}>Reviews</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCategory;

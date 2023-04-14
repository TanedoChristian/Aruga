import React, { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import SetUp from "../Setup";
import axios from "axios";

const BlogCard = (props) => {
  const handleFunction = (id) => {
    if (props.iconFunction == "delete") {
      axios({
        method: "DELETE",
        url: SetUp.SERVER_URL() + `/blog/${id}`,
      }).then(({ data }) => {
        alert("Successfully Deleted");
      });
    }
  };
  return (
    <section className="bg-gray-50 mt-1 pb-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {props.datas
            .slice(0)
            .reverse()
            .map((data) => (
              <article className="p-4 bg-white rounded-xl  border-gray-100 flex flex-col shadow-md">
                <div className="flex justify-between items-center mb-2 text-gray-500">
                  <span className="text-xs p-1">{data.blog_postdate}</span>

                  <div
                    className="flex flex-col justify-center items-center gap-1"
                    onClick={() => handleFunction(data.blog_id)}
                  >
                    {props.icon}
                  </div>
                </div>
                <h2 className="mb-2 text-lg font-bold tracking-tight text-rose-400">
                  <a href="#">{data.blog_title}</a>
                </h2>
                <p className="font-light text-gray-600 text-xs  h-[7rem] overflow-hidden">
                  {data.blog_details}...
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full object-cover"
                      src={`${SetUp.SERVER_URL()}/${data.blog_img}`}
                    />
                    <span className="font-medium text-slate-600 text-sm">
                      {`${data.firstname} ${data.lastname}`}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-blue-500 hover:underline text-sm"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;

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
                <div className="w-full flex-col p-2">
                  <div className="flex justify-between">
                    <p className="poppins font-medium text-slate-800">
                      {`${data.firstname} ${data.lastname}`}
                    </p>
                    <div
                      className="flex flex-col justify-center items-center gap-1"
                      onClick={() => handleFunction(data.blog_id)}
                    >
                      {props.icon}
                    </div>
                  </div>
                  <p className="poppins text-xs font-light text-slate-600">
                    {new Date(data.blog_postdate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <h2 className="p-3 text-xl font-bold tracking-tight text-rose-400 poppins capitalize">
                  <a href="#">{data.blog_title}</a>
                </h2>

                <div className="w-full h-[30vh] flex">
                  <img
                    className="flex  object-cover rounded-md shadow-xl border border-gray-200"
                    src={`${SetUp.SERVER_URL()}/${data.blog_img}`}
                  />
                </div>

                <p className="p-2 py-5 font-light text-gray-600 text-sm  h-[7rem] overflow-hidden capitalize">
                  {data.blog_details}
                </p>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;

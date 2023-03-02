import React, { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import SetUp from "../Setup";

const BlogCard = ({ datas }) => {
  return (
    <section class="bg-gray-50 mt-1">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="grid gap-4 lg:grid-cols-2">
          {datas
            .slice(0)
            .reverse()
            .map((data) => (
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-white-400">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="text-xs p-1">{data.blog_postdate}</span>

                  <div className="flex flex-col justify-center items-center gap-1">
                    <i class="fa-regular fa-heart text-slate-700"></i>
                  </div>
                </div>
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-rose-400">
                  <a href="#">{data.blog_title}</a>
                </h2>
                <p class="mb-5 font-light text-gray-600">{data.blog_details}</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <span class="font-medium text-slate-600">Jese Leos</span>
                  </div>
                  <a
                    href="#"
                    class="inline-flex items-center font-medium text-blue-500 hover:underline"
                  >
                    Read more
                    <svg
                      class="ml-2 w-4 h-4"
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

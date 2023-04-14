import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import axios from "axios";
import BlogCard from "./BlogCard";
import Header from "./Header";
const UserBlog = () => {
  const [blog, setBlog] = useState([]);
  const [success, setSuccess] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [updateBlog, setUpdateBlog] = useState({});
  const [isShowModal, setShowModal] = useState(false);
  const [errorFile, setErrorFile] = useState();

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/blog/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setBlog(data);
      });
  }, [success]);

  const handleFunction = (id) => {
    axios({
      method: "DELETE",
      url: SetUp.SERVER_URL() + `/blog/${id}`,
    }).then(({ data }) => {
      alert("Successfully Deleted");
      setSuccess(!success);
    });
  };

  const handleUpdateBlog = (data) => {
    setUpdateBlog((prev) => {
      return { ...prev, ...data };
    });
    setShowModal(true);
    setShowOptions(false);
  };

  const handleModal = () => {
    setShowModal(false);
  };

  const handleTitle = (e) => {
    setUpdateBlog((prev) => {
      return { ...prev, blog_title: e.target.value };
    });
  };

  const handleDescription = (e) => {
    setUpdateBlog((prev) => {
      return { ...prev, blog_details: e.target.value };
    });
  };

  const submitUpdateBlog = () => {
    axios({
      method: "PUT",
      url: SetUp.SERVER_URL() + "/blog",
      data: updateBlog,
    }).then((data) => {
      setShowModal(false);
      setSuccess(!success);
    });
  };

  return (
    <div className="w-full flex justify-center h-screen">
      <div
        id="defaultModal"
        aria-hidden="true"
        className="fixed fade-in-1 top-0 animation-fade w-[100%] bg-white  w3-animate-top  "
        style={{ display: isShowModal ? "block" : "none" }}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg  h-screen shadow-xl">
            <div className="flex items-center justify-between p-3  w-[100%] border-t border-gray-200 gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 ">
                Update Blog
              </h3>
              <button
                type="button"
                className="text-gray-600 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4  flex flex-col gap-5 bg-white ">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Title</label>
                <input
                  type=""
                  className="p-3 outline-none bg-gray-50 rounded-lg text-slate-600"
                  placeholder="Title"
                  defaultValue={updateBlog.blog_title}
                  onChange={handleTitle}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Details</label>
                <textarea
                  type="text"
                  id="message"
                  rows="12"
                  className="bg-gray-50 outline-none h-[20vh]  rounded-lg"
                  placeholder="Write Something"
                  onChange={handleDescription}
                  defaultValue={updateBlog.blog_details}
                />
              </div>

              <div className="flex   gap-1  bottom-2  w-[90%] overflow-x-hidden">
                <button
                  className="p-4 bg-rose-400 text-white text-md rounded-lg w-full absolute"
                  onClick={submitUpdateBlog}
                >
                  Update Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] flex-col ">
        <Header />
        <h1 className="text-center text-xl p-5">My Blog</h1>

        <section className="bg-gray-50 mt-1 pb-8">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid gap-4 lg:grid-cols-2">
              {blog
                .slice(0)
                .reverse()
                .map((data) => (
                  <article className="p-4 bg-white rounded-xl  border-gray-100 flex flex-col shadow-md">
                    <div className="flex justify-between items-center mb-2 text-gray-500">
                      <span className="text-xs p-1">{data.blog_postdate}</span>

                      <span className="rounded-md shadow-sm flex gap-2">
                        <button
                          className=" justify-center w-full  p-2 items-center text-sm font-medium  rounded-md text-gray-700  bg-white  "
                          type="button"
                          onClick={() => {
                            handleUpdateBlog(data);
                          }}
                        >
                          <span className="text-sm px-2 flex ">
                            <i class="fa-solid fa-pen"></i>
                          </span>
                        </button>

                        <button
                          className=" justify-center w-full p-2 items-center text-sm font-medium  rounded-md text-gray-700  bg-white  "
                          type="button"
                          onClick={() => {
                            handleFunction(data.blog_id);
                          }}
                        >
                          <span className="text-sm px-2 flex ">
                            <i class="fa-solid fa-trash"></i>
                          </span>
                        </button>
                      </span>
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
      </div>
    </div>
  );
};

export default UserBlog;

import React, { useEffect, useState } from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import JobsCard from "./JobsCard";
import axios from "axios";
import SetUp from "../Setup";
import SideNav from "./SideNav";
import BlogCard from "./BlogCard";
import useFetchApi from "../hooks/useFetchApi";
import Compressor from "compressorjs";

const Blog = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [datas, setData] = useState([]);
  const [blog, setBlog] = useState({});
  const [errorFile, setErrorFile] = useState(false);
  const [isShowSideNav, setShowNav] = useState(false);

  const [type, setType] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("type") == "parent") {
      setType("/dashboard");
    } else {
      setType("/dashboard-babysitter");
    }
    axios.get(`${SetUp.SERVER_URL()}/blog`).then(({ data }) => {
      setData(data);
    });
  }, [isSuccess]);

  const handleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleShow = () => {
    setShowNav(!isShowSideNav);
  };

  const handleTitle = (e) => {
    setBlog((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const handleDescription = (e) => {
    setBlog((prev) => {
      return { ...prev, description: e.target.value };
    });
  };

  const changeHandleFile = async (e) => {
    setBlog((prev) => {
      return { ...prev, file: e.target.files[0] };
    });

    if (e.target.files[0].size > 4 * 1024 * 1024) {
      setErrorFile(true);
    } else {
      setErrorFile(false);
    }
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/blog",
      data: {
        user_id: sessionStorage.getItem("userid"),
        file: blog.file,
        details: blog.description,
        title: blog.title,
      },
      headers: { "Content-Type": "multipart/form-data" },
    }).then(({ data }) => {
      setIsShowModal(!isShowModal);
      setSuccess(!isSuccess);
    });
  };

  return (
    <div>
      <div className=" flex flex-col gap-2 bg-white">
        <nav class="bg-white  w-full  justify-center flex">
          <div class="flex justify-between items-center  w-[98%] p-2  gap-3">
            <div class="flex items-center gap-2 ">
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider ml-2">
                Aruga
              </span>
            </div>

            <div class="flex items-center gap-2 w-full justify-end">
              <div className="">
                <img
                  src={sessionStorage.getItem("userimg")}
                  className="h-9 w-9 rounded-full object-cover shadow-sm"
                />
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-1  text-sm text-gray-700 rounded-lg  focus:outline-none "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={handleShow}
              >
                <svg
                  class="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
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
              </button>
            </div>
          </div>
        </nav>
        <SideNav isShow={isShowSideNav} />
        <Footer>
          <ul className="flex w-full justify-around footer border-b border-gray-200">
            <a href={type}>
              <li className="">
                <div className="flex flex-col justify-center items-center">
                  <i className={`fa-solid fa-house text-slate-600`}></i>
                </div>
              </li>
            </a>
            <a href={`/blog`}>
              <li className="">
                <div
                  className="flex flex-col justify-center items-center gap-1"
                  style={{ borderBottom: "3px solid #ec878f" }}
                >
                  <i
                    className={`fa-solid fa-pen-to-square text-slate-600`}
                    style={{ color: "#ec878f" }}
                  ></i>
                </div>
              </li>
            </a>
            <a href={`/offer`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class="fa-regular fa-heart text-slate-700"></i>
                </div>
              </li>
            </a>
            <a href={`/notification`}>
              <li className="">
                <div className="inline-flex relative w-fit">
                  <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
                    8
                  </div>
                  <i className="fa-regular fa-bell text-slate-700"></i>
                </div>
              </li>
            </a>
          </ul>
        </Footer>
      </div>
      {/* <nav class="bg-white  w-full  justify-center flex">
        <div class="flex justify-between items-center  w-[98%] p-2">
          <div class="flex items-center gap-2 ">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider">
              Aruga
            </span>
          </div>

          <div class="flex items-center gap-2 w-full justify-end">
            <div className="">
              <img
                src={sessionStorage.getItem("userimg")}
                className="h-9 w-9 rounded-full object-cover shadow-sm"
              />
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-1  text-sm text-gray-700 rounded-lg  focus:outline-none "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleShow}
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
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
            </button>
          </div>
        </div>
      </nav> */}
      {/* <SideNav isShow={isShowSideNav} /> */}
      {/* <Footer>
        <ul className="flex w-full justify-around footer border-b border-gray-200">
          <a href={`/dashboard`}>
            <li className="">
              <div className="flex flex-col justify-center items-center">
                <i className={`fa-solid fa-house text-slate-600`}></i>
              </div>
            </li>
          </a>
          <a href="/blog">
            <li className="">
              <div
                className="flex flex-col justify-center items-center gap-1"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  class={`fa-solid fa-pen-to-square text-slate-700`}
                  style={{ color: "#ec878f" }}
                ></i>
              </div>
            </li>
          </a>
          <a href="/offer">
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i class="fa-regular fa-heart text-slate-700"></i>
              </div>
            </li>
          </a>

          <li className="">
            <div className="flex flex-row-reverse w-fit">
              <div className="rounded-full w-4 h-4 absolute bg-rose-400">
                <p className="text-xs text-center text-white">5</p>
              </div>
              <i className="fa-regular fa-bell text-slate-700"></i>
            </div>
          </li>
        </ul>
      </Footer> */}

      <div className="w-full  flex justify-center">
        <form className="w-[90%] mt-3">
          <input
            type="text"
            className="p-3 w-full rounded-xl outline-none focus:border-blue-500  border border-gray-200 shadow-sm"
            placeholder="Create a post"
            onClick={handleModal}
          />
        </form>
      </div>

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="absolute h-full fade-in-1 top-0  animation-fade w-[100%] bg-white "
        style={{ display: isShowModal ? "block" : "none" }}
      >
        <div class="relative w-full h-full max-w-2xl md:h-auto">
          <div class="relative bg-white rounded-lg  h-screen shadow-xl">
            <div class="flex items-center justify-between p-3  w-[100%] border-t border-gray-200 gap-2">
              <img
                src={sessionStorage.getItem("userimg")}
                className="h-9 w-9 rounded-full object-cover shadow-sm"
              />
              <h3 class="text-2xl font-semibold text-gray-900 ">
                Create a Blog
              </h3>
              <button
                type="button"
                class="text-gray-600 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleModal}
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
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
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-4  flex flex-col gap-5 bg-white ">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Title</label>
                <input
                  type=""
                  className="p-3 outline-none bg-gray-50 rounded-lg text-slate-600"
                  placeholder="Title"
                  onChange={handleTitle}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Details</label>
                <textarea
                  id="message"
                  rows="12"
                  class="bg-gray-50 outline-none p-3  rounded-lg"
                  placeholder="Write Something"
                  onChange={handleDescription}
                ></textarea>
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Upload Valid ID
                </label>
                <div className="flex items-center justify-center w-full border">
                  <label
                    for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, PNG, JPG
                      </p>
                      <p
                        className=" text-blue-500 font-medium"
                        style={{ color: errorFile ? "red" : "" }}
                      >
                        {errorFile ? "File is too big" : blog?.file?.name}
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden "
                      onChange={changeHandleFile}
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  className="p-4 bg-rose-400 text-white text-md rounded-lg"
                  onClick={handleSubmit}
                >
                  Post Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogCard datas={datas} />
    </div>
  );
};

export default Blog;

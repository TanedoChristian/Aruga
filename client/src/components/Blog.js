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
import Header from "./Header";

const Blog = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [datas, setData] = useState([]);
  const [blog, setBlog] = useState({});
  const [errorFile, setErrorFile] = useState(false);
  const [isShowSideNav, setShowNav] = useState(false);

  const [type, setType] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("type") == "Parent") {
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
      console.log(data);
      setIsShowModal(!isShowModal);
      setSuccess(!isSuccess);
    });
  };

  return (
    <div>
      {sessionStorage.getItem("type") === "parent" ? (
        <Footer>
          <ul className="flex w-full justify-around footer border-t border-gray-200 fixed bottom-0 ">
            <a href={`/dashboard`}>
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
                  <i className={`fa-solid fa-pen-to-square text-rose-500`}></i>
                </div>
              </li>
            </a>
            <a href={`/offer`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class="fa-solid fa-note-sticky text-slate-700"></i>
                </div>
              </li>
            </a>
            <a href={`/notification`}>
              <li className="">
                <div className="inline-flex relative w-fit">
                  <i className="fa-regular fa-bell text-slate-700"></i>
                </div>
              </li>
            </a>
          </ul>
        </Footer>
      ) : (
        <div className=" fixed bottom-5 w-[90%] left-5">
          <Footer>
            <ul className="flex w-full justify-around footer border-b border-gray-200 rounded-full bg-gray-50 shadow-md py-4">
              <a href={`/dashboard-babysitter`}>
                <li className="">
                  <div className="flex flex-col justify-center items-center rounded-full ">
                    <i className={`fa-solid fa-house text-gray-700`}></i>
                  </div>
                </li>
              </a>
              <a href={`/blog`}>
                <li className="">
                  <div className="flex flex-col justify-center items-center  rounded-full gap-1 bg-rose-400">
                    <i className={`fa-solid fa-pen-to-square text-white`}></i>
                  </div>
                </li>
              </a>

              <a href={`/notification`}>
                <li className="">
                  <div className="flex flex-col justify-center items-center  rounded-full gap-1 ">
                    <i className="fa-regular fa-bell text-slate-700"></i>
                  </div>
                </li>
              </a>
            </ul>
          </Footer>
        </div>
      )}
      <div className=" flex flex-col gap-2 bg-white overflow-x-hidden ">
        <Header />
      </div>

      <div className="w-full  flex justify-center">
        <form className="w-[90%] mt-3">
          <input
            type="text"
            className="p-3 w-full rounded-xl outline-none focus:border-blue-500  border border-gray-200 shadow-sm"
            placeholder="Create Blog"
            onClick={handleModal}
          />
        </form>
      </div>

      <div
        id="defaultModal"
        aria-hidden="true"
        className="fixed fade-in-1 top-0 animation-fade w-[100%] bg-white  w3-animate-top  "
        style={{ display: isShowModal ? "block" : "none" }}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg  h-screen shadow-xl">
            <div className="flex items-center justify-between p-3 bg-rose-400   w-[100%] border-t border-gray-200 gap-2">
              <h3 className="text-2xl font-semibold text-white poppins w-full ">
                Create Blog
              </h3>
              <button
                type="button"
                className="text-gray-600 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleModal}
              >
                <i class="fa-solid fa-xmark text-white font-bold text-xl"></i>
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
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Upload Documents
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

              <div className="flex   gap-1  bottom-2  w-[90%] overflow-x-hidden">
                <button
                  className="p-4 bg-rose-400 text-white text-md rounded-lg w-full absolute"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogCard
        datas={datas}
        icon={<i className="fa-regular fa-heart text-slate-700"></i>}
      />
    </div>
  );
};

export default Blog;

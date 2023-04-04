import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import axios from "axios";
import BlogCard from "./BlogCard";
import Header from "./Header";
const UserBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/blog/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setBlog(data);
      });
  }, []);

  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-[90%] flex-col ">
        <Header />
        <h1 className="text-center text-xl p-5">My Blog</h1>
        <BlogCard datas={blog} />
      </div>
    </div>
  );
};

export default UserBlog;

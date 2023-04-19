import React from "react";
import bannerImage from "/public/images/doctor-banner.jpg";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const MainContent = () => {
  return (
    <div className="mt-5">
      <div className="flex mx-auto w-11/12">
        <div className="">
          <img
            className="rounded mx-auto w-[1200px]"
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-60 ml-24 text-start">
        <p className="text-4xl font-thin">Welcome to</p>
        <h2 className="text-6xl my-2">
          <span className="font-normal">Oreo</span>{" "}
          <span className="font-bold">Hospital</span>{" "}
        </h2>
        <p className="text-lg text-gray-900 font-medium pb-2">
          Contrary to popular belief, Lorem Ipsum is not <br /> simply random
          text.
        </p>
        <Link>
          <button className="btn-error font-semibold w-28 p-2 rounded-md mt-4 hover:bg-red-500">
            View More
          </button>
        </Link>
      </div>
      <Card />
    </div>
  );
};

export default MainContent;

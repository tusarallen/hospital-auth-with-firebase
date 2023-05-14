import React from "react";
import surgeryImg1 from "../../../public/images/surgery-img (1).jpg";
import surgeryImg2 from "../../../public/images/surgery-img (2).jpg";
import BookNow from "../BookNow/BookNow";

const AboutSection = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={surgeryImg1} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={surgeryImg2}
              className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-orange-500">About Us</h3>
            <h1 className="text-5xl font-bold mt-3">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="mt-1">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn btn-warning mt-5">Get More Info</button>
          </div>
        </div>
      </div>
      <BookNow />
    </>
  );
};

export default AboutSection;

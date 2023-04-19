import React from "react";
import card1 from "/public/images/card-1.jpg";
import card2 from "/public/images/card-2.jpg";
import card3 from "/public/images/card-3.jpg";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaGoogle,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center border-s-8 border-teal-900 w-11/12 mx-auto gap-24">
        <div className="ml-8">
          <h3>
            <span className="bg-gradient-to-r text-transparent bg-clip-text text-3xl font-bold from-indigo-500 to-purple-600">
              Meet
            </span>{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text text-3xl font-bold from-gray-500 to-gray-600 ml-4">
              Our Team
            </span>
          </h3>
          <p className="font-medium text-xl pt-1">Description text here...</p>
        </div>
        <div>
          <p>
            <span className="text-xl font-bold text-black">Oreo Hospital</span>
            <span className="ml-3 text-thin font-normal text-gray-700">
              The wise man therefore always holds in these matters to this
              principle of selection: he <br /> rejects pleasures to secure.
            </span>
          </p>
        </div>
      </div>
      {/* card area */}
      <div className="flex justify-center items-center mt-8 mb-8 gap-8 mx-auto w-11/12">
        {/* first card */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={card1} alt="doctors" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Dr. Amelia</h2>
            <p className="text-center text-base font-semibold">Gynecologist</p>
            <p className="text-center my-2">
              Doctors are highly skilled medical professionals who play a
              crucial role in the healthcare system
            </p>
            <div className="flex ml-4 pt-2">
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaGoogle />
              </p>
              <p>
                <FaSkype />
              </p>
            </div>
            <div className="card-actions justify-center mt-6">
              <Link to="/details">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={card2} alt="doctors" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Dr. Charlie</h2>
            <p className="text-center text-base font-semibold">Dentist</p>
            <p className="text-center my-2">
              Doctors are highly skilled medical professionals who play a
              crucial role in the healthcare system
            </p>
            <div className="flex ml-4 pt-2">
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaGoogle />
              </p>
              <p>
                <FaSkype />
              </p>
            </div>
            <div className="card-actions justify-center mt-4">
              <Link to="/details">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={card3} alt="doctors" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Dr. Jack</h2>
            <p className="text-center text-base font-semibold">Audiology</p>
            <p className="text-center my-2">
              Doctors are highly skilled medical professionals who play a
              crucial role
            </p>
            <div className="flex ml-4 pt-2">
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaGoogle />
              </p>
              <p>
                <FaSkype />
              </p>
            </div>
            <div className="card-actions justify-center mt-3">
              <Link to="/details">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

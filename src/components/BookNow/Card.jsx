import React from "react";
import { FaLocationArrow, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ doctor }) => {
  console.log(doctor);
  const { img, description, location, name, price, title } = doctor;

  return (
    <div className="card w-96 bg-base-100 shadow-2xl text-start">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h3 className="card-title font-bold">{title}</h3>
        <h2 className="text-3xl font-bold mt-4">{name}</h2>
        <p className="text-[gray] font-bold">{description}</p>
        <div className="flex items-center gap-4">
          <div>
            <FaLocationArrow />
          </div>{" "}
          <div className="text-[gray] font-bold">{location}</div>
        </div>
        <div className="font-bold text-orange-500 flex items-center gap-4">
          <div>
            <FaRegMoneyBillAlt />
          </div>{" "}
          <div className="font-bold">${price}</div>
        </div>
      </div>
      <div className="card-actions mx-auto -mt-5 p-3">
        <button className="btn btn-warning">View Profile</button>
        <Link>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

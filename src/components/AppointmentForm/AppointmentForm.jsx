import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const AppointmentForm = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);

  const { img, name, title } = data;

  return (
    <div className="text-[#1E90FF]">
      <h2 className="text-4xl font-extrabold text-center mt-4">
        Fill up this form <br /> to meet this doctor
      </h2>
      <div className="flex gap-5 mt-8">
        <div className="w-1/2">
          <div className="relative">
            <img className="rounded-md h-[520px]" src={img} alt="" />
          </div>
          <div className="absolute bottom-[-90px] left-[230px] bg-gray-400 p-4 text-xl font-extrabold text-[black] rounded text-center">
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
        </div>
        <div className="w-1/2 font-bold text-lg bg-gray-100 rounded-md">
          <form>
            <div className="grid grid-cols-1 gap-6 p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="text" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6 p-2">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Submit Appointment"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;

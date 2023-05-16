import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import CardDetails from "./CardDetails";
import Swal from "sweetalert2";

const SubmitDetails = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  const url = `https://hospital-server-ten.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [url]);

  console.log(appointments);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this appointment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hospital-server-ten.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = appointments.filter(
                (appointment) => appointment._id !== id
              );
              setAppointments(remaining);
            }
          });
      }
    });
  };

  const handlePayAppointment = (id) => {
    fetch(`https://hospital-server-ten.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update status
          const remaining = appointments.filter(
            (appointment) => appointment._id !== id
          );
          const updated = appointments.find(
            (appointment) => appointment._id === id
          );
          updated.status = "confirm";
          const newAppointments = [updated, ...remaining];
          setAppointments(newAppointments);
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center my-4">
        Appoinment Details here: {appointments.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-xl text-[red]">Doctor</th>
              <th className="text-xl text-[red]">Division</th>
              <th className="text-xl text-[red]">Date</th>
              <th className="text-xl text-[red]">PatientName</th>
              <th className="text-xl text-[red]">Price</th>
              <th className="text-xl text-[red]">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appointments.map((appointment) => (
              <CardDetails
                key={appointment._id}
                appointment={appointment}
                handleDelete={handleDelete}
                handlePayAppointment={handlePayAppointment}
              ></CardDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitDetails;

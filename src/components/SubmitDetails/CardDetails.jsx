import React from "react";

const CardDetails = ({ appointment, handleDelete, handlePayAppointment }) => {
  console.log(appointment);

  const { _id, patientName, img, price, date, title , status } = appointment;

  return (
    <tr className="font-bold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-md w-20 h-20">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{patientName}</td>
      <td>{price}</td>
      <th>
        {
            status === "confirm" ? <span className="bg-black font-bold text-[white] p-4 rounded-md">PAID</span> :
            <button
          onClick={() => handlePayAppointment(_id)}
          className="bg-black font-bold text-[white] p-4 rounded-md"
        >
          Pay
        </button>}
      </th>
    </tr>
  );
};

export default CardDetails;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const SubmitDetails = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  const url = `http://localhost:3000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Appoinmrnt Details here</h2>
    </div>
  );
};

export default SubmitDetails;

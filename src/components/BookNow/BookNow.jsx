import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Card from "./Card";

const BookNow = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <Service />
      <div className="md:grid grid-cols-1 md:grid-cols-3 mb-24 gap-12 md:-ml-5">
        {doctors.map((doctor) => (
          <Card key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default BookNow;

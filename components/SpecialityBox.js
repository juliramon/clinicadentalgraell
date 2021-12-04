import React from "react";

const SpecialityBox = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/4 px-10">
      <div className="mb-5">{icon}</div>
      <h3 className="mb-4">{title}</h3>
      <p className="text-primary-300">{description}</p>
    </div>
  );
};

export default SpecialityBox;

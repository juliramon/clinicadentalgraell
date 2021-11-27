import React from "react";

const SpecialityBox = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/4 px-6">
      <div className="">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SpecialityBox;

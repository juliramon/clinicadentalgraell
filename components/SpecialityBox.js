import React from "react";

const SpecialityBox = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/4 p-4 lg:px-8">
      <div className="mb-7">
        <picture>
          <source srcSet={icon} />
          <img
            src={icon}
            data-src={icon}
            alt={title}
            width="70"
            height="70"
            loading="lazy"
          />
        </picture>
      </div>
      <h3 className="mb-4">{title}</h3>
      <p className="text-primary-300">{description}</p>
    </div>
  );
};

export default SpecialityBox;

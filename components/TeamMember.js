import React from "react";

const TeamMember = ({ image, salutation, name, numCol, description }) => {
  let subtitle;
  if (numCol !== null) {
    subtitle = <span>N. Col. {numCol}</span>;
  } else {
    subtitle = Object.keys(description).map((item, idx) => (
      <span key={idx} className="md:w-7/12">
        {description[item]}
      </span>
    ));
  }
  return (
    <div className="w-full md:w-1/4 p-4 relative">
      <div className="relative bg-primary-100 bg-opacity-20 team-item">
        <div className="w-full h-full aspect-w-12 aspect-h-14">
          <picture>
            <img
              src={image}
              datasrc={image}
              className="object-cover w-full h-full"
              width="400"
              height="300"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
      <div className="py-5 z-20">
        <p className="text-md font-bold mb-1">
          {salutation} {name}
        </p>
        <span className="text-sm mt-1.5 leading-relaxed block">{subtitle}</span>
      </div>
    </div>
  );
};

export default TeamMember;

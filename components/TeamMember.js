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
    <div className="w-full md:w-1/4 relative bg-primary-100 bg-opacity-20 team-item">
      <span className="absolute bottom-0 w-full h-full z-10 team-item__background"></span>
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
      <div className="absolute bottom-0 p-7 z-20">
        <h2 className="text-xl">
          {salutation} {name}
        </h2>
        {subtitle}
      </div>
    </div>
  );
};

export default TeamMember;

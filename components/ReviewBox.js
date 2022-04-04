import React from "react";

const ReviewBox = ({ name, photo, description, rating }) => {
  return (
    <div className="glide__slide">
      <div className="flex items-start px-5">
        <div className="min-w-fit">
          <picture>
            <img
              src={photo}
              alt={name}
              width="40"
              height="40"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="pl-4">
          <h4 className="leading-snug">{name}</h4>
          <div className="star-rating flex items-center mt-1">
            {[...Array(parseInt(rating))].map((star, idx) => {
              return (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fdc906"
                  fill="#fdc906"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
              );
            })}
          </div>
          <span className="text-sm leading-normal mt-2 block">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;

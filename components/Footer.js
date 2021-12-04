import React from "react";

const Footer = ({ GlobalTexts }) => {
  return (
    <footer className="bg-primary-500 bg-opacity-20 py-12 md:pt-24">
      <div className="container mx-auto">
        <span>{GlobalTexts.brand}</span>
        <a href="" title="">
          {GlobalTexts.phone}
        </a>
        <a href="" title="">
          {GlobalTexts.email}
        </a>
        <ul>
          <li>{GlobalTexts.address}</li>
          <li>{GlobalTexts.zipCode}</li>
          <li>{GlobalTexts.city}</li>
          <li>{GlobalTexts.province}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

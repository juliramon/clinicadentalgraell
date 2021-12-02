import React from "react";

const Footer = ({ GlobalTexts }) => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;

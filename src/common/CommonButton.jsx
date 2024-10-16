import React from "react";
import "./commonButton.css";
import { Link } from "react-router-dom";
const CommonButton = ({ ButtonText,padding }) => {
  return (
    <>
      <Link
        to={"#"}
        className={`py-[20px] px-[25px] rounded-[20px] border-[2px] border-brand text-[#FFFFFF]  font-montserrat font-bold text-[14px] md:text-[20px] lg:text-[24px] transition-all duration-300 bg-brand hover:bg-[rgba(196,196,196,0.10)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${padding}`}
      >
        {ButtonText}
      </Link>
    </>
  );
};

export default CommonButton;

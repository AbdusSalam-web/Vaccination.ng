import React from "react";
import "./Banner.css";
import CommonButton from "../../common/CommonButton";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdOutlineShield } from "react-icons/md";
const Banner = () => {
  return (
    <>
      <section className='banner  bg-[url("./images/banner_bg.png")] '>
        <div className="container">
          <div className="banner_row">
            <div className="banner_text">
              <h2>Get Vaccinated. Boost your Immune System</h2>
              <h1>
                COVID-19 Vaccination Got Easier With,{" "}
                <span> Vaccination.ng</span>
              </h1>
              <p>
                Vaccination.ng will help you find the nearest centre for
                vaccination, in all 36 states in Nigeria.
              </p>
              <div className="button flex gap-[10px] md:gap-[20px]">
                <CommonButton ButtonText="Get Vaccine" />
                <CommonButton ButtonText="Help Centre" />
              </div>
            </div>
            <div className="bannerImage">
              <img src="./images/BannerImage.png" alt="Banner Image" />
              <div className="animationImages">
                <img
                  src="images/BannerSubLeft.png"
                  alt="animation"
                  className="animationImageLeft"
                />
                <img
                  src="images/BannerSubRight.png"
                  alt="animation"
                  className="animationImageRight"
                />
              </div>
            </div>
          </div>
          <div className="schedule">
            <div>
              <FaRegClock />
              <p>Schedule your Vaccination</p>
            </div>
          </div>
          <div className="address">
            <div>
              <div className="location">
                <CiLocationOn />
                <div>
                  <p>Location</p>
                  <p>Ikeja Lagos, Nigeria</p>
                </div>
              </div>
              <div className="Date">
                <CiCalendar />
                <div>
                  <p>Date</p>
                  <p>29 February, 2022</p>
                </div>
              </div>
              <div className="type">
                <MdOutlineShield />
                <div>
                  <p>Vaccine Type</p>
                  <p>Mordena</p>
                </div>
              </div>
              <div className="submitBtn">
                <CommonButton ButtonText="Submit"   padding={"className: px-[48px] md:px-[88px] lg:px-[25px]"}  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

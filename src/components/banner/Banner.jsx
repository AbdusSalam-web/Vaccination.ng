import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <p>Get Vaccinated. Boost your Immune System</p>
          <h1>
            COVID-19 Vaccination Got Easier With, <span> Vaccination.ng</span>
          </h1>
          <p className="text">
            Vaccination.ng will help you find the nearest centre for
            vaccination, in all 36 states in Nigeria.
          </p>
          <div className="buttons">
            <button className="btn">Get Vaccine</button>
            <button className="btn">Help Centre</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
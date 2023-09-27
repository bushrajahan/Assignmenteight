import React, { useState } from "react";
import Notice from "../../Alert/Notice";
import Card from "../../Cards/Card";
import { Link } from "react-router-dom";
import { key } from "localforage";
  


const Banner = () => {


  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/kxq5CkC/pp.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:mr-12 md:whitespace-nowrap font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control  md:ml-24">
          
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input input-bordered lg:w-11/12"
                />
                <span className="bg-red-600 text-white">Search</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

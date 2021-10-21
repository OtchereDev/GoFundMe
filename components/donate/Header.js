import React from "react";
import Image from "next/image";
import TestImage from "../assets/gofundme_homepage-mobile.png";

const Header = ({ title, beneficiary, organizer }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center ">
      <div className="w-full md:w-3/12 lg:w-4/12 h-52  md:h-32 relative md:rounded-md overflow-hidden">
        <Image src={TestImage} objectFit={"cover"} layout={"fill"} />
      </div>
      <div className="py-5 md:py-0 border-b md:border-0 mb-3 md:mb-0">
        <h3 className="px-3 pt-3">
          You're supporting
          <span className="text-lg font-semibold ml-2">{title}</span>
        </h3>
        {typeof beneficiary == "string" && beneficiary.length > 0 ? (
          <h4 className="text-sm px-3 pt-3 lg:pt-1 text-gray-600">
            Your donation will benefit{" "}
            <span className="text-base font-semibold ml-2">{beneficiary}</span>
          </h4>
        ) : (
          <h4 className="text-sm px-3 pt-3 lg:pt-1 text-gray-600">
            This donation is organized by{" "}
            <span className="text-base font-semibold ml-2">{organizer}</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Header;

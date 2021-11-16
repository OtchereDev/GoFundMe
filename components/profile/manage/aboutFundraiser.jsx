import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFunnelDollar, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faShareSquare,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";

const AboutFundraiser = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 pb-5">
      <div className="md:w-9/12">
        <h2 className="text-gray-700 text-xl md:text-3xl font-semibold">
          Helping Andre Smile Again
        </h2>
        <div className="flex items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} />
            <p className="underline ml-2">Edit & Settings</p>
          </div>
          <div className="flex items-center ml-3">
            <FontAwesomeIcon icon={faEye} />
            <p className="underline ml-2">View</p>
          </div>
        </div>

        <div>
          <div className="w-full md:w-8/12 lg:w-4/12 my-2 ">
            <div className="w-full h-1 relative rounded-3xl bg-gray-200 overflow-hidden">
              <div
                style={{ width: `${0 * 100}%` }}
                className="w-3/12 h-full absolute rounded-3xl top-0 left-0 bg-primary_green"
              ></div>
            </div>
          </div>

          <p className="text-lg text-gray-800">$0 raised</p>
        </div>
      </div>
      <div className="flex w-6/12 md:w-3/12 mt-3 md:mt-0  items-center  justify-between">
        <div className=" w-3/12 flex items-center justify-center group flex-col">
          <div className="w-10 h-10 rounded-full border-2 cursor-pointer group-hover:bg-primary_green border-primary_green flex justify-center items-center">
            <FontAwesomeIcon
              icon={faShareSquare}
              className="text-lg text-primary_green group-hover:text-gray-100"
            />
          </div>
          <p className="text-lg font-medium underline cursor-pointer ">Share</p>
        </div>

        <div className=" w-3/12  flex  flex-col items-center group">
          <div className="w-10 h-10 rounded-full border-2 cursor-pointer group-hover:bg-primary_green   border-primary_green flex justify-center items-center">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-lg text-primary_green group-hover:text-gray-100"
            />
          </div>

          <p className=" text-lg font-medium underline cursor-pointer">Edit</p>
        </div>

        <div className="flex w-3/12  flex-col items-center  group">
          <div className="w-10 h-10 rounded-full border-2 cursor-pointer group-hover:bg-primary_green  border-primary_green flex justify-center items-center">
            <FontAwesomeIcon
              icon={faFunnelDollar}
              className="text-lg text-primary_green group-hover:text-gray-100"
            />
          </div>
          <p className="text-lg font-medium underline cursor-pointer">Withdraw</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFundraiser;

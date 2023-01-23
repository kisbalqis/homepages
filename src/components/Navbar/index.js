import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/icon/search.png";
import line from "../../assets/icon/line.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import Small from "../../assets/icon/Small.png";
export default function Navbar() {
  return (
    <div className="h-12 shadow-lg bg-gray-200 flex items-center ">
      <div className="px-8 border-2 border-gray-400 flex items-center justify-center w-12 h-full">
        <div>
          <GiHamburgerMenu size="20" />
        </div>
      </div>
      <div className="px-12 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="px-6 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center">
        <div className="flex items-center bg-white border-2 border-gray-300 h-8 px-2">
          <img src={search} className="h-full w-3 h-5-3 text-gray-500" />
          <input
            type="text"
            className="border-none focus:outline-none px-2"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="px-6 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center">
        <h1>Site:</h1>
        <div className="flex items-center bg-white border-2 border-gray-300 h-8 px-2 py-2">
          <select>
            <option selected value="all">
              All
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div className="flex space-y-8 items-center h-8 px-12 py-6">
          <img src={line} className="w-2 h-8" />
        </div>

        <div className=" flex items-center space-x-24">
          <div className="flex items-center h-6">
            <h1 className="text-lg text-light-green">PLM MANAGEMENT</h1>
          </div>
          <div className="flex items-center justify-center bg-white border-2 border-gray-300 h-8 px-12 py-2">
            <select>
              <option selected value="english" className="pr-4">
                English
              </option>
              <option value="mango">Mango</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-6 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center">
        <IoMdNotificationsOutline size={25} />
      </div>
      <div className="px-6 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center">
        <img src={Small} />
      </div>
    </div>
  );
}

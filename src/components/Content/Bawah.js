import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const menu = [
  {
    type: "Issue Reports",
    categories: [
      {
        tittle: "Total Issue Reported",
        angka: "0",
        icon: <IoIosArrowForward />,
      },
      {
        tittle: "Resolved",
        angka: "0",
        icon: <IoIosArrowForward />,
      },
      {
        tittle: "In Progress",
        angka: "0",
        icon: <IoIosArrowForward />,
      },
      {
        tittle: "Pending",
        angka: "0",
        icon: <IoIosArrowForward />,
      },
      {
        tittle: "Total Incidents",
        angka: "0",
        icon: <IoIosArrowForward />,
      },
    ],
  },
];

export default function tes() {
  return (
    <div className="flex">
      {menu.map((value, index) => {
        return (
          <div className="p-5 w-1/3 bg-gray-200">
            <div key={index}>
              <div className="text-lg font-semibold">{value.type}</div>
              {value.categories.map((value, index) => {
                return (
                  <div className="text-sm mt-2 border-b-2 border-gray-400">
                    <div className="flex justify-between">
                      <div>{value.tittle}</div>
                      <div>{value.angka}</div>
                      <div>{value.icon}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="p-5 w-1/3 bg-gray-200">
        <div className="text-lg font-semibold">Parts Status</div>
        <div className="text-sm mt-2 border-b-2 border-gray-400">
          <div className="flex justify-between">
            <div>Total Parts</div>
            <div className="items-center font-semibold">0</div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="text-sm mt-2 border-b-2 border-gray-400">
          <div className="flex justify-between">
            <div>Running Low</div>
            <div className="items-center text-green-400 font-semibold">0</div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="text-sm mt-2 border-b-2 border-gray-400">
          <div className="flex justify-between">
            <div>Out of Stock</div>
            <div className="items-center text-red-400 font-semibold">0</div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="text-sm mt-2 border-b-2 border-gray-400">
          <div className="flex justify-between">
            <div>Total Parts Value</div>
            <div className="items-center text-red-400 font-semibold">0</div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-1/3 bg-gray-200">
        <div className="text-lg font-semibold">Parts Status</div>
        <div className="text-sm mt-2 items-center justify-center border-t-2 border-gray-400">
          <div className="pl-36">No Data</div>
        </div>
      </div>
    </div>
  );
}

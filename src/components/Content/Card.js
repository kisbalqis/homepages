import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function card() {
  const list = [
    {
      type: "Equipments Status",
      categories: [
        {
          tittle: "Equipments Status",
          name: "Active Equipments",
          total: "0",
          color: "text-red-300",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Total Equipments",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Maintenance Required",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "In Maintenance",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Breakdown",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      type: "Faulty Summary",
      categories: [
        {
          tittle: "Faulty Summary",
          name: "Faulty Equipments",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Repair Items",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Replace Items",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    {
      type: "Inspection Conducted",
      categories: [
        {
          tittle: "Inspection Conducted",
          name: "Total Inspection",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Good Inspection",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
        {
          name: "Faulty Inspection",
          total: "0",
          icon: <IoIosArrowForward size={20} />,
        },
      ],
    },
    // {
    //   type: "Work Order Summary",
    //   categories: [
    //     {
    //       tittle: "Work Order Summary",
    //       name: "Total Work Order",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "Completed",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "Initiated",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "In Progress",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "On Hold",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "Rework",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //     {
    //       name: "Postponed",
    //       total: "0",
    //       icon: <IoIosArrowForward size={20} />,
    //     },
    //   ],
    // },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {list.map((item, index) => {
          return (
            <div className="border p-5 bg-gray-200 rounded-sm" key={index}>
              {/* {item.type} */}
              {item.categories.map((item, index) => {
                return (
                  <div key={index} className="justify-between">
                    <div className="text-lg font-semibold mt-2">
                      {item.tittle}
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400">
                      <div className="text-sm mt-2 ">{item.name}</div>
                      <div
                        className={"text-sm mt-2 font-semibold" + item.color}
                      >
                        {item.total}
                      </div>
                      <div className="text-sm mt-2">{item.icon}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import Card from "./Card";
import Grafik from "./Grafik";
import Bawah from "./Bawah";

export default function Content() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-lg pt-2 my-8">Overall Dashboard </div>
        <div className="items-center justify-end my-8">
          <button class="w-33 h-9 items-center bg-transparent hover:bg-light-green hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent">
            Today
          </button>
          <button class="w-33 h-9 bg-transparent hover:bg-light-green hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent">
            Last 7 days
          </button>
          <button class="w-33 h-9 bg-transparent hover:bg-light-green hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent">
            Last 30 days
          </button>
          <button class="w-33 h-9 bg-transparent hover:bg-light-green hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent">
            Last 90 days
          </button>
          <button class="w-33 h-9 bg-transparent hover:bg-light-green hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent">
            Custom Date
          </button>
        </div>
      </div>
      <div className="py-3">
        <div className="pt-5 justify-between">
          <Card />
        </div>
        <div className="pt-5 justify-between">
          <Grafik />
        </div>
        <div className="pt-5 justify-between">
          <Bawah />
        </div>
      </div>
    </div>
  );
}

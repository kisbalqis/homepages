import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import gmbr from "../../assets/gambar/gmbr.png";
import abu from "../../assets/gambar/abu.png";
import biru from "../../assets/gambar/biru.png";
import kuning from "../../assets/gambar/kuning.png";
import merah from "../../assets/gambar/merah.png";
export default function Grafik() {
  const a = [
    {
      judul: "Work Order Summary",
      kategori: [
        {
          subjudul: "Total Work Order",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "Completed",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "Initiated",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "In Progress",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "On Hold",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "Rework",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
        {
          subjudul: "Postponed",
          angka: "0",
          warna: "text-red-300",
          simbol: <IoIosArrowForward size={20} />,
        },
      ],
    },
  ];
  return (
    <div className="flex justify-between bg-gray-200">
      {a.map((b, c) => {
        return (
          <div className="p-5 w-1/2">
            <div key={c}>
              <div className="text-lg font-semibold">{b.judul}</div>
              {b.kategori.map((b, c) => {
                return (
                  <div className="text-sm mt-2 border-b-2 border-gray-400">
                    <div className="flex justify-between">
                      <div>{b.subjudul}</div>
                      <div>{b.angka}</div>
                      <div>{b.simbol}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="p-5 w-1/2 border">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Status</div>
          <div className="flex pl-5 ">
            <img src={gmbr} />
            <div className="flex-col pt-28 pl-5">
              <div className="flex py-1">
                <img src={abu} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Low</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={biru} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Medium</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={kuning} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">High</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={merah} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-1/2 border">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Priority</div>
          <div className="flex">
            <img src={gmbr} />
            <div className="flex-col pt-28 pl-5">
              <div className="flex py-1">
                <img src={abu} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Low</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={biru} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Medium</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={kuning} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">High</div>
                </div>
              </div>
              <div className="flex py-1">
                <img src={merah} className="w-5 h-5" />
                <div className="px-1">
                  <div className="text-sm">Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

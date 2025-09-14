import {
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import WhoTOFollow from "./WhoTOFollow";


const Widgets = () => {
  return (
    <div className=" p-3 hidden lg:flex flex-col gap-4 ml-7  h-screen w-[350px] sticky top-0" >
     
      <div className="flex items-center gap-3 mt-2 p-3 bg-[#EFF3F4] rounded-full text-[#89959D] h-[44px]">
        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="search bubble bee"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3 flex flex-col ">
        <h1 className="font-bold"> What's happening?</h1>

        <div className="flex flex-col text-sm py-3">
          <div className="flex justify-between items-end text-[#536471] text-[13px]">
            <span>Trending in Nigeria</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm">#New point</span>
          <span className="text-[#536471] text-xs"> 240K Bumbles</span>
        </div>

        <div className="flex flex-col text-sm py-3">
          <div className="flex justify-between items-end text-[#536471] text-[13px]">
            <span>Trending in Austrialia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm">#Smooth</span>
          <span className="text-[#536471] text-xs"> 10K Bumbles</span>
        </div>

        <div className="flex flex-col text-sm py-3">
          <div className="flex justify-between items-end text-[#536471] text-[13px]">
            <span>Trending in England</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm">#Nextjs</span>
          <span className="text-[#536471] text-xs"> 49K Bumbles</span>
        </div>

        <div className="flex flex-col text-sm py-3">
          <div className="flex justify-between items-end text-[#536471] text-[13px]">
            <span>Trending in Spain</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm">#ReactJS</span>
          <span className="text-[#536471] text-xs"> 20K Bumbles</span>
        </div>
      </div>
      <WhoTOFollow />
    </div>
  );
};

export default Widgets;

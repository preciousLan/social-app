import React from "react";
import Image from "next/image";
import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const Posts = () => {
  return (
    <div className="p-3 mt-2 border-t  border-gray-100">
      <div className="flex gap-5 items-start ">
        <Image
          src="/images/profile-pic.png"
          width={44}
          height={44}
          alt="propic"
          className="w-11 h-11"
        />
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 text-[15px]">
            <span
              className="font-bold text-[#0F1419]
            inline-block whitespace-nowrap overflow-hidden text-ellipsis
            max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px]"
            >
              Gfrgfgfuest
            </span>
            <span
              className="text-[#707E89]
              inline-block whitespace-nowrap overflow-hidden text-ellipsis
            max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px]
            "
            >
              @guest0000234
            </span>
            <span className="text-[#707E89]"> · </span>
            <span className="text-[#707E89]"> 4 days ago </span>
          </div>
          <p> ff</p>
        </div>
      </div>

      <div className=" ml-[62px] pt-6 flex gap-14 items-center">
        <div className="flex gap-2 items-end">
          <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition" />
          <span className="text-[xs]"> 1</span>
        </div>

        <div className="flex gap-2 items-end">
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition" />
          <span className="text-[13px]"> 1</span>
        </div>

        <div className="flex gap-2 items-end">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed hover:text-[#F4AF01] transition" />
          
        </div>

        <div className="flex gap-2 items-end">
          <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed hover:text-[#F4AF01] transition" />
          
        </div>
      </div>
    </div>
  );
};

export default Posts;

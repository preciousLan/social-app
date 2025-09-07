import React from "react";
import Image from "next/image";

const WhoTOFollow = () => {
  return (
    <div className="bg-[#EFF3F4] rounded-xl p-4 flex flex-col overflow-y-auto">
      <h1 className="font-bold pt-2 mb-2 text-xl">Who to Follow</h1>
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-3 items-center my-3">
          <Image
            src="/images/profile-pic.png"
            width={56}
            height={56}
            alt="propic"
            className="w-14 h-14"
          />
          <div className="flex flex-col text-sm">
            <h1 className="font-bold"> Iman Codes</h1>
            <p className="text-[#536471]"> @imanCodes</p>
          </div>
        </div>
        <button className="px-3 bg-[#0F1419]  text-white rounded-full  h-[40px] w-[72px]">
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center my-3">
          <Image
            src="/images/profile-pic.png"
            width={56}
            height={56}
            alt="propic"
            className="w-14 h-14"
          />
          <div className="flex flex-col text-sm">
            <h1 className="font-bold"> Micheal Scofield</h1>
            <p className="text-[#536471]"> @Lyncon</p>
          </div>
        </div>
        <button className="px-3  bg-[#0F1419]  text-white rounded-full  h-[40px] w-[72px]">
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center my-3">
          <Image
            src="/images/profile-pic.png"
            width={56}
            height={56}
            alt="propic"
            className="w-14 h-14"
          />
          <div className="flex flex-col text-sm">
            <h1 className="font-bold"> Imir Raj</h1>
            <p className="text-[#536471]"> @Hajime</p>
          </div>
        </div>
        <button className="px-3 bg-[#0F1419]  text-white rounded-full  h-[40px] w-[72px]">
          Follow
        </button>
      </div>
      
    </div>
  );
};

export default WhoTOFollow;

import React from "react";
import Widgets from "../components/widgets/Widgets";
import SignUpPrompt from "../components/SignUpPrompt/SignUpPrompt";
import Sidebar from "../components/sidebar/Sidebar";
import { ArrowLeftIcon, EllipsisIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        className="text-[#0F1419] min-h-screen 
    max-w-[1400px] mx-auto flex justify-center  "
      >
        <Sidebar />
        <>
          <div className="flex-grow  overflow-y-auto border border-gray-200 text-foreground ">
            <div
              className="py-4 sm:text-xl sticky top-0 z-50
             bg-background bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100 px-3 mb-3
             flex gap-5 items-center "
            >
              <Link href="/">
                <ArrowLeftIcon />
              </Link>

              <div> Back </div>
            </div>

            <div className="p-3 mr-4 flex flex-col border-b border-gray-100 ">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <Image
                    src="/images/profile-pic.png"
                    alt="profile-pic"
                    width={44}
                    height={44}
                    className="w-11 h-11"
                  />
                  <div className="flex flex-col mb-1.5">
                    <span
                      className="font-bold max-w-[60px] truncate min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px]"
                    >
                      name
                    </span>
                    <span
                      className="text-[#707E89] max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px] truncate"
                    >
                      @usernatyt
                    </span>
                  </div>
                </div>

                <EllipsisIcon className="w-5 h-5" />
              </div>

              <span className="pt-7">Post texbghgfjhyjyhkjhkjkjkjljlt</span>
            </div>
            <div className="border-b border-gray-100 p-3 text-[15px]">
              0 Likes
            </div>
          </div>
        </>

        <Widgets />
      </div>

      <SignUpPrompt />
    </>
  );
};

export default page;

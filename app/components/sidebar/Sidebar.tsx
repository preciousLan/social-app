import React from "react";
import SidebarUserInfo from "./SidebarUserInfo";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <nav className="hidden sm:block  sticky top-0 p-3  xl:mx-10 max-h-screen xl:pl-10 ">
        <div className="relative">
          <div className="mb-4 2xl:ml-3">
            <Image
              src="/images/busybee-logo2.webp"
              width={48}
              height={48}
              alt="Logo"
              className="w-auto h-auto"
            />
          </div>

          <ul className="flex flex-col gap-2 ml-2.5">
            <SidebarLink
              Icon={HomeIcon}
              text="Home"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={HashtagIcon}
              text="Explore"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={BellIcon}
              text="Notification"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={InboxIcon}
              text="Messages"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={BookmarkIcon}
              text="Bookmarks"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={UserIcon}
              text="Profile"
              images="/images/THE P33L_whitelogo.png"
            />
            <SidebarLink
              Icon={EllipsisHorizontalCircleIcon}
              text="More"
              images="/images/THE P33L_whitelogo.png"
            />
            <button
              className="hidden xl:block bg-[#F4AF01] w-[200px] h-[52px] rounded-full
             text-white font-meduim cursor-pointer shadow-md mt-2"
            >
              Bumble
            </button>
          </ul>
        </div>

       <SidebarUserInfo/>
      </nav>
    </>
  );
};

export default Sidebar;

"use client";
import React from "react";
import Image from "next/image";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {  signOutUser } from "@/redux/reduxModals/userSlice";
import { RootState } from "@/redux/reduxModals/store";
import { closeLogInModal, closeSignUpModal } from "@/redux/reduxModals/modalSlice";

const SidebarUserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => 
    state.user );

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeLogInModal())
    dispatch(closeSignUpModal())
  }

  return (
    <div
      className="absolute bottom-6 hover:bg-gray-500 hover:bg-opacity-10 flex items-center gap-3
        p-3 rounded-full  pe-6 transition-colors duration-250 xl:mr-10 cursor-pointer
        "
      onClick={()=> handleSignOut()}
    >
      <Image
        src={"/images/profile-pic.png"}
        alt="user info"
        width={36}
        height={36}
      />
      <div className="hidden flex-col xl:flex ">
        <span className="font-bold">{user.name}</span>
        <span className="text-[#707E89] text-[14px]">@{user.username}</span>
      </div>
    </div>
  );
};

export default SidebarUserInfo;

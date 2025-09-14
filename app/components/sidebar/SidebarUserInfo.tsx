"use client";
import React, { useState } from "react";
import Image from "next/image";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/reduxModals/userSlice";
import { RootState } from "@/redux/reduxModals/store";
import { closeLogInModal, closeSignUpModal } from "@/redux/reduxModals/modalSlice";
import { Popover, Button } from "@mui/material";

const SidebarUserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeLogInModal());
    dispatch(closeSignUpModal());
    handleClose();
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        className="absolute bottom-6 hover:bg-gray-500 hover:bg-opacity-10 flex items-center gap-3
        p-3 rounded-full pe-6 transition-colors duration-250 xl:mr-10 cursor-pointer w-fit xl:w-[240px]"
        onClick={handleOpen}
      >
        <Image
          src={"/images/profile-pic.png"}
          alt="user info"
          width={36}
          height={36}
        />
        <div className="hidden flex-col xl:flex max-w-40">
          <span className="font-bold truncate">{user.name}</span>
          <span className="text-[#707E89] text-[14px] truncate">@{user.username}</span>
        </div>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className="p-4 flex flex-col gap-2 px-10">
          <span>Log out from <span className="font-bold underline"> {user.name}? </span></span>
          <div className="flex gap-2">
            <Button size="small" onClick={handleClose}>Cancel</Button>
            <Button size="small" color="error" onClick={handleSignOut}>Log out</Button>
          </div>
        </div>
      </Popover>
      
    </>
  );
};

export default SidebarUserInfo;

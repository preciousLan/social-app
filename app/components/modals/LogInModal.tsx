"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  openLogInModal,
  closeLogInModal,
} from "../../../redux/reduxModals/modalSlice";

import { RootState, AppDispatch } from "@/redux/reduxModals/store";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

const logInModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch:AppDispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(openLogInModal())}
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm font-bold rounded-full border-2 border-white text-white
         hover:bg-white hover:bg-opacity-25 transition duration-150 ease-in"
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={()=>isOpen}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full pt-10 sm:pt-0 sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl"
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5"
            onClick={() => {
              dispatch(closeLogInModal());
            }}
          />

          <form className="pt-[20px] pb-20 px-4 sm:px-20 ">
            <h1 className=" text-3xl font-bold mb-10">Log in to Toofeek </h1>

            <div className="w-full space-y-5 mb-10">
             

              <input
                type="email"
                placeholder="Email"
                className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition "
              ></input>

              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition pr-[50px] "
                ></input>

                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeSlashIcon className="w-7 h-7 absolute right-3 top-1/5 -translate-y-[40px] cursor-pointer text-gray-400 " />
                  ) : (
                    <EyeIcon className="w-7 h-7 absolute right-3 top-1/5 -translate-y-[40px] cursor-pointer text-gray-400 " />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 text-white">
              <button className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm">
                {" "}
                Log In{" "}
              </button>
              <span className="text-black"> Or</span>
              <button className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm">
                {" "}
                Log In as Guest{" "}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default logInModal;

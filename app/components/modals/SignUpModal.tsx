"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {openSignUpModal,closeSignUpModal,} from "../../../redux/reduxModals/modalSlice";
import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "../../../firebase"
import { RootState, AppDispatch } from "@/redux/reduxModals/store";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signInUser,signOutUser } from "@/redux/reduxModals/userSlice";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector((state: RootState) => state.modals.signUpModalOpen);
  const dispatch: AppDispatch = useDispatch();

  

 function handleSignUP(){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })}

{/* 
  async function handleSignUp(){
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
   const user = userCredential.user;
  }
  */}

  useEffect(()=>{
   const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
    if (!currentUser) return

    console.log(currentUser)

  dispatch(signInUser({
      name: "",
    username: currentUser.email!.split("@")[0],
    
    email: currentUser.email,
    uid: currentUser.uid

  }))


    })
return unSubcribe
  },[])




  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm font-bold bg-white rounded-full"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => {
          isOpen;
        }}
        className="flex justify-center items-center "
      >
        <div
          className="w-full h-full pt-10 sm:pt-0 sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl"
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5"
            onClick={() => {
              dispatch(closeSignUpModal());
            }}
          />

          <div className="pt-[20px] pb-20 px-4 sm:px-20 ">
            <h1 className=" text-3xl font-bold mb-10">Create your account </h1>

            <div className="w-full space-y-5 mb-10">
              <input
                type="text"
                placeholder="Name"
                className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition"
              ></input>

              <input
                type="email"
                placeholder="Email"
                className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition "
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              ></input>

              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition pr-[50px] "
                  onChange={(event) => SetPassword(event.target.value)}
                  value={password}
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

              <button className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm"
              onClick={()=>{handleSignUP()}}>
                
                Signup
              </button>

              <span className="text-black"> Or</span>
              <button className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm">
                {" "}
                Log In as Guest{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;

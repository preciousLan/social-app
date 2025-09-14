"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  openSignUpModal,
  closeSignUpModal,
} from "../../../redux/reduxModals/modalSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { RootState, AppDispatch } from "@/redux/reduxModals/store";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signInUser } from "@/redux/reduxModals/userSlice";

const SignUpModal = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  //error messages----------------------------------------------------
  const errorMessages: Record<string, string> = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Try again.",
  };

  //create user account with email and password---------------------------------
  async function handleSignUp() {

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //update profile displayname
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      //pass the update to redux
      dispatch(
        signInUser({
          name: userCredential.user.displayName,
          username: userCredential.user.email!.split("@")[0],
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        })
      );
      dispatch(closeSignUpModal());
    } 
    
    catch (error: any) {
      const message =
        errorMessages[error.code] || "Something went wrong. Please try again.";
      setError(message);
    }
  }

  //listen for any athentication change of the current user
  // and pass the updated stuff to redux

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      

      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
        })
      );
    });
    return unSubcribe;
  }, []);

  //login as guest--------------------------------------------------------
  async function handleGuest() {
    await signInWithEmailAndPassword(auth, "guest@gmail.com", "123456");
  }

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm font-bold bg-white text-black rounded-full"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => {}}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="w-full h-full pt-10 sm:pt-0 sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl outline-none"
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5"
            onClick={() => {
              dispatch(closeSignUpModal());
            }}
          />

          <div className="pt-[20px] pb-20 px-4 sm:px-20 ">
            <h1 className=" text-3xl font-bold mb-10">Create your account </h1>

            {/* input for name------------------------------ */}
            <div className="w-full space-y-5 mb-10">
              <input
                type="text"
                placeholder="Name"
                className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition"
                onChange={(event) => setName(event.target.value)}
                value={name}
              ></input>

              {/* input for email----------------------------------------------- */}
              <input
                type="email"
                placeholder="Email"
                className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition "
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                value={email}
              ></input>

              <div className="w-full relative">
                {/* input for password------------------------------------------ */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="py-4 px-3 outline-none border border-gray-200 w-full h-[54px] rounded-[4px]
                 focus:border-[#f4AF01] transition pr-[50px] "
                  onChange={(event) => {
                    SetPassword(event.target.value);
                    setError("");
                  }}
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

              {/* error messages----------------------------------------------- */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="flex flex-col items-center gap-5 text-white">
              <button
                className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm"
                onClick={() => {
                  handleSignUp();
                }}
              >
                Signup
              </button>

              <span className="text-black"> Or</span>
              <button
                className="w-full bg-[#f4AF01] rounded-full p-3 h-[48px] shadow-sm"
                onClick={() => handleGuest()}
              >
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

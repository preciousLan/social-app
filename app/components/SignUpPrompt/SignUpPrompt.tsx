"use client"
import React from "react";
import SignUpModal from "../modals/SignUpModal";
import LogInModal from "../modals/LogInModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reduxModals/store";



const SignUpPrompt = () => {
  
  // since you are updating the name, only close the signUpPromt when it has displayed
  const name = useSelector((state:RootState)=> 
    state.user.name
  )
  




  return (
    
    !name &&
    <div
      className="bg-[#FaAF01] z-20 fixed bottom-0 w-full 
     right-0 left-0  h-[80px]  flex items-center gap-5 md:px-3 justify-center lg:justify-between lg:px-20 
     xl:px-40 2xl:px-80 "
    >
      <div className=" flex-col hidden md:flex text-white">
        <span className="text-xl font-bold">Dont miss Out on the Buzz</span>
        <span>Peeps on Busy bee are always the first to know</span>
      </div>
      <div className="flex  gap-3 w-full md:w-fit p-3">
        <LogInModal/>
        <SignUpModal/>
      </div>
    </div>
    
    
  
  );
};

export default SignUpPrompt;

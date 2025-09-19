"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reduxModals/store";
import { closeCommentModal } from "@/redux/reduxModals/modalSlice";

interface postInputProp {
  insideModal?: boolean;
}

const Postinput = ({ insideModal }: postInputProp) => {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails
  );
  const dispatch = useDispatch()

//.........function to add to database(we created a posts collection in firestore)
  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(), //gives a timestamp of when it was uploaded
      likes: [],
      comments: [],
    });
    setText("");
  }


//....function to to add to a subcategory. i.e reply to comments
  async function sendComment() {
    const postRef = doc(db, "posts", commentDetails.id);

    await updateDoc(postRef,{
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text
      })
    })
    setText("")
    dispatch(closeCommentModal())
    
  }

  return (
    <div className="flex gap-5 items-start pl-3 ">
      <Image
        src={
          insideModal ? "/images/profile-pic.png" : "/images/busybee-logo2.webp"
        }
        width={44}
        height={44}
        alt={insideModal ? "profile-pic" : "logo"}
        className="w-11 h-11 z-10 bg-white"
      />
      <div className="w-full pr-3 text-foreground">
        
        <textarea
          placeholder={insideModal ? "send your reply" : "whats happening?"}
          className={`w-full border-b border-gray-100
             resize-none outline-none py-2 text-lg ${
               insideModal ? "bg-white" : "bg-background"
             }`}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex justify-between w-full  pt-5 pb-3 items-center ">
          <div className="flex gap-2 mr-10">
            <PhotoIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <ChartBarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <CalendarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <MapPinIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
          </div>

          <button
            className="bg-[#F4AF01]  text-sm cursor-pointer w-[80px] h-[36px] rounded-full text-white disabled:bg-opacity-60 disabled:cursor-not-allowed"
            disabled={!text}
            onClick={() => insideModal? sendComment() : sendPost()}
          >
            {" "}
            Bumble
          </button>
        </div>
      </div>
    </div>
  );
};

export default Postinput;

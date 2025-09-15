"use client";
import React from "react";
import Image from "next/image";
import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { DocumentData, Timestamp } from "firebase/firestore";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import {
  openCommentModal,
  setCommentDetails,
} from "@/redux/reduxModals/modalSlice";

//install react-moment to turn timestamp into something we can use

interface postData {
  data: DocumentData;
  id: string;
}

const Posts = ({ data, id }: postData) => {
  const dispatch = useDispatch();

  return (
    <div className="p-3 mt-2 border-t  border-gray-100 text-foreground">
      <PostHeader
        username={data.username}
        name={data.name}
        timestamp={data.timestamp}
        text={data.text}
      />

      <div className=" ml-[62px] pt-6 flex gap-14 items-center justify-between mr-6">
        <div className="flex gap-2 items-end">
          <ChatBubbleOvalLeftEllipsisIcon
            className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition"
            onClick={() => {
              {
                /* pass posts data to redux */
              }
              dispatch(
                setCommentDetails({
                  name: data.name,
                  username: data.username,
                  text: data.text,
                  id: id,
                })
              );
              dispatch(openCommentModal());
            }}
          />
          <span className="text-[xs]"> 1</span>
        </div>

        <div className="flex gap-2 items-end">
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition" />
          <span className="text-[13px]"> 1</span>
        </div>

        <div className="flex gap-2 items-end">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed hover:text-[#F4AF01] transition" />
        </div>

        <div className="flex gap-2 items-end">
          <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed hover:text-[#F4AF01] transition" />
        </div>
      </div>
    </div>
  );
};

interface PostHeaderProps {
  username: string;
  name: string;
  timestamp?: Timestamp; //tells typescript timestamp optional
  text: string;
  replyTo?: string;
}

export function PostHeader({
  username,
  name,
  timestamp,
  text,
  replyTo,
}: PostHeaderProps) {
  return (
    <div className="flex gap-5 items-start ">
      <Image
        src="/images/profile-pic.png"
        width={44}
        height={44}
        alt="propic"
        className={`w-11 h-11 z-10 ${replyTo? "bg-white" : ""}`}
      />
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-2 text-[15px]">
          <span
            className="font-bold text-foreground
            inline-block whitespace-nowrap overflow-hidden text-ellipsis
            max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px]"
          >
            {name}
          </span>
          <span
            className="text-[#707E89]
              inline-block whitespace-nowrap overflow-hidden text-ellipsis
            max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px]
            "
          >
            @{username}
          </span>

          {/*only show "." and timestamp where there is timestamp */}
          {timestamp && (
            <>
              <span className="text-[#707E89]"> · </span>

              <Moment fromNow className="text-[#707E89]">
                {timestamp?.toDate()}
              </Moment>
            </>
          )}
        </div>

        <p className="mr-6 text-justify"> {text}</p>

        {replyTo && (
          <span className="text-[15px] text-[#707E89]">
            Replying to <span className="text-[#F4AF01]"> @{replyTo}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Posts;

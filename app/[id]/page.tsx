import React from "react";
import Widgets from "../components/widgets/Widgets";
import SignUpPrompt from "../components/SignUpPrompt/SignUpPrompt";
import Sidebar from "../components/sidebar/Sidebar";
import {
  ArrowLeftIcon,
  ChartBarIcon,
  EllipsisIcon,
  HeartIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { PostHeader } from "../components/postfeed/Posts";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

async function fetchPost(id: string) {
  const postRef = doc(db, "posts", id);
  const postSnap = await getDoc(postRef);
  return postSnap.data();
}

interface pageProps {
  params: {
    id: string;
  };
}

interface comment {
  name: string;
  username: string;
  text: string;
}

const page = async ({ params }: pageProps) => {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <>
      <div
        className="text-[#0F1419] min-h-screen 
    max-w-[1400px] mx-auto flex justify-center"
      >
        <Sidebar />
        <>
          <div className="flex-grow  overflow-y-auto border border-gray-200 text-foreground p-3">
            <div
              className="py-4 sm:text-xl sticky top-0 z-50
             bg-background bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100 mb-3
             flex gap-5 items-center "
            >
              <Link href="/">
                <ArrowLeftIcon />
              </Link>

              <div> Back </div>
            </div>

            <div className=" mr-4 flex flex-col border-b border-gray-100 ">
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
                      {post?.name}
                    </span>
                    <span
                      className="text-[#707E89] max-w-[60px] min-[400px]:max-w-[100px] min-[500]:max-w-[140px]
            sm:max-w-[160px] truncate"
                    >
                      @{post?.username}
                    </span>
                  </div>
                </div>

                <EllipsisIcon className="w-5 h-5" />
              </div>

              <span className="pt-7">{post?.text}</span>
            </div>
            <div className="border-b border-gray-100 p-3 text-[15px]">
              <span className="font-bold">{post?.likes.length} likes</span>
            </div>

            <div className="border-b border-gray-100 p-3 text-[15px] flex justify-evenly">
              <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
              <HeartIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
              <ChartBarIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
              <ArrowUpTrayIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
            </div>

            {post?.comments.map((comment: comment) => (
              <Comment
                name={comment.name}
                username={comment.username}
                text={comment.text}
              />
            ))}
          </div>
        </>

        <Widgets />
      </div>

      <SignUpPrompt />
    </>
  );
};

function Comment({ name, username, text }: comment) {
  return (
    <div className=" mt-5">
      <PostHeader name={name} username={username} text={text} />

      <div className="flex gap-14 mt-5 p-3 ms-16">
        <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px]  cursor-not-allowed" />
        <HeartIcon className="w-[22px] h-[22px]  cursor-not-allowed" />
        <ChartBarIcon className="w-[22px] h-[22px]  cursor-not-allowed" />
        <ArrowUpTrayIcon className="w-[22px] h-[22px]  cursor-not-allowed" />
      </div>
    </div>
  );
}

export default page;

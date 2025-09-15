import React from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reduxModals/store";
import { closeCommentModal } from "@/redux/reduxModals/modalSlice";
import { PostHeader } from "../postfeed/Posts";
import Postinput from "../postfeed/Postinput";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CommentModal = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modals.commentModalOpen
  );
  const commentDetails = useSelector((state:RootState)=> state.modals.commentPostDetails)
  const dispatch = useDispatch();


  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => {}}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit text-center bg-white sm:rounded-xl outline-none p-4 relative">
          <XMarkIcon
            className="w-8 mt-5 ml-7 bg-yellow-100 rounded-full p-2 hover:bg-red-400 text-black transition ease-in-out duration-300"
            onClick={() => {
              dispatch(closeCommentModal());
            }}
          />
         
          <div className="pt-5 pb-10 px-5 flex flex-col gap-5 ">
         
         
            <PostHeader
              name= {commentDetails.name}
              username= {commentDetails.username}
              text={commentDetails.text}
              replyTo= {commentDetails.username}
            />
            <span className="text-[50px] text-[#707E89]"></span>

            <div className="-ml-3">
              <Postinput insideModal={true} />
            </div>

            <div className=" absolute w-0.5 h-32 bg-gray-300
            left-[56px] top-25 z-0">

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;

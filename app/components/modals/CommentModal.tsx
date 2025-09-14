import React from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reduxModals/store";
import { closeCommentModal } from "@/redux/reduxModals/modalSlice";
import { PostHeader } from "../postfeed/Posts";
import Postinput from "../postfeed/Postinput";

const CommentModal = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modals.commentModalOpen
  );
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit text-center bg-white sm:rounded-xl outline-none p-4">
          <div className="pt-5 pb-10 px-5 flex flex-col gap-3">
            <PostHeader
              name={user.name}
              username={user.username}
              text="hello"
              replyTo="iman musa"
            />
            <span className="text-[50px] text-[#707E89]"></span>
            <Postinput />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;

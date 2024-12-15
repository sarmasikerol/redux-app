import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { modalFunc } from "../redux/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 w-full h-screen grid place-items-center ">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4 min-w-[300px]">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose size={24} onClick={() => dispatch(modalFunc())} />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, title, close, open, data }) {
  if (!open) return null;

  if (open) {
    document.body.style.overflow = "hidden";
  }

  return createPortal(
    <ModalLayout close={close} open={open} title={title} data={data}>
      {children}
    </ModalLayout>,
    document.getElementById("portal")
  );
}

const ModalLayout = ({ children, close, title, data }) => {
  const onClose = () => {
    close();
    document.body.style.overflow = "auto";
  };
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center z-50 transition-colors ${open ? "visible bg-black/20" : "invisible"
        }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-white rounded-xl shadow-xl p-6 transition-all ease-in duration-300 relative mx-5 sm:mx-auto ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
      >
        <div className="bg-primaryColor flex w-full justify-between absolute top-0 left-0 rounded-t-xl px-5 items-center">
          <h1 className="text-lg font-medium text-white ">{title}</h1>
          <span
            className="close-button pl-2 text-white cursor-pointer text-5xl hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};

import { createPortal } from "react-dom";

export default function TextModal({ children, title, close, open }) {
  if (!open) return null;

  if (open) {
    document.body.style.overflow = "hidden";
  }

  return createPortal(
    <ModalLayout close={close} open={open} title={title}>
      {children}
    </ModalLayout>,
    document.getElementById("portal")
  );
}

const ModalLayout = ({ children, close, title }) => {
  const onClose = () => {
    close();
    document.body.style.overflow = "auto";
  };
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl hover:overflow-auto overflow-hidden p-3 transition-all ease-in duration-300 relative max-w-2xl min-h-[300px] max-h-[600px] mx-5 sm:mx-auto ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex w-full justify-between px-2 py-2 items-center">
          <h1 className="heading text-xl heading">{title}</h1>
          <span
            className="close-button text-gray-500 cursor-pointer -mt-1 text-5xl hover:text-black "
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <hr />

        <div>{children}</div>
      </div>
    </div>
  );
};

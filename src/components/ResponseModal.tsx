"use client";

import { useEffect } from "react";
import { CloseResponseModal } from "@/type/type";

const ResponseModal = ({ closeModal, togleModal, response }: CloseResponseModal) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePressESC = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

const closeResponseModal = () => {
  closeModal();
  if(togleModal) {
  togleModal();
}
};

  useEffect(() => {
    document.addEventListener("keydown", handlePressESC);
    return () => {
      document.removeEventListener("keydown", handlePressESC);
    };
  }, [handlePressESC]);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-screen w-screen flex gap-0 justify-center items-center bg-black bg-opacity-40"
      onClick={closeModal}
    >
      <div className="relative bg-white w-[300px] rounded-3xl py-10 px-5 text-red ">
        <p className="font-medium text-center text-2xl mb-6">
         {response.title}
        </p>
        <p className="text-xl mb-7 text-center">
          {response.text}
        </p>
        <button
          className="block mx-auto bg-red text-white text-lg rounded-3xl font-medium  py-3 px-8"
          type="button"
          onClick={closeResponseModal}
        >
          Ок
        </button>
      </div>
    </div>
  );
};
export default ResponseModal;

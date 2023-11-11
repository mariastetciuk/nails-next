"use client";
import CloseIcon from "./icons/CloseIcon";
import { MouseEvent, useEffect, useState } from "react";
import { CloseModal, FormValues } from "@/type/type";
import { useForm, SubmitHandler } from "react-hook-form";
import ResponseModal from "./ResponseModal";
import { response } from "@/data/navList";

const OrderServiseModal = ({ togleModal }: CloseModal) => {
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      togleModal();
    }
  };

  const closeModal = () => {
    togleModal()
  };
  const closeResponseModal = () => setIsError(true);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xvojnpdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccessfull(true);
      } else {
        // Handle form submission error
        setIsError(true);
        console.error("Form submission error");
      }
    } catch (error) {
      setIsError(true);
      throw Error()
      
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePressESC = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
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
    <>
    <div
      className="fixed left-0 top-0 z-40 h-screen w-screen flex gap-0 justify-center items-center bg-black bg-opacity-40"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white w-[300px] rounded-3xl py-10 px-5">
        <button
          type="button"
          onClick={togleModal}
          className="absolute right-3 top-3 text-red"
        >
          <CloseIcon />
        </button>
        <h2 className="text-red text-xl font-bold text-center mb-5">
          Залиште свої дані і ми Вам перетелефонуємо
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex text-black flex-wrap gap-7 justify-center"
        >
          <div className="">
          <input
            {...register("firstName", {
              minLength: {value: 2, message: "Ім'я має містити не менше як 2 букви"},
              required: {value: true, message: "Вкажіть будь ласка своє ім'я"},
            })}
            type="text"
            placeholder="Ім'я"
            className="block w-[100%] border-2 text-black border-red rounded-xl px-5 py-2 placeholder:text-sm"
          />
          {errors.firstName && (
            <p className="  text-redlight text-[12px] w-[237px]">{errors.firstName.message}</p>
          )}
          </div>
          <div className="mb-5">
          <input
            {...register("phone", {
              minLength: {value: 10, message: "Номер має містити не менше як 10 цифр"},
              required: {value: true, message: "Вкажіть будь ласка свій номер телефону"},
              pattern: {
                value: /^[0-9]+$/,
                message: "Номер має містити тільки цифри",
              },
            })}
            type="text"
            className="block w-[100%] border-2 border-red rounded-xl px-5 py-2 placeholder:text-sm"
            placeholder="Телефон"
          />
          {errors.phone && (
            <p className=" text-redlight text-[12px] w-[237px]">{errors.phone.message}</p>
          )}
          </div>
          <button
            className="text-white border-2 bg-red border-transparent font-medium px-5 py-2 w-[100%] rounded-3xl hover:text-red hover:bg-white hover:border-red"
            type="submit"
          >
            Записатися
          </button>
        </form>
      </div>
    </div>
    {isSuccessfull && <ResponseModal closeModal={closeModal} togleModal={togleModal} response={response.successfull}/>}
    {isError && <ResponseModal closeModal={closeResponseModal} response={response.error}/>}
    </>
  );
};

export default OrderServiseModal;

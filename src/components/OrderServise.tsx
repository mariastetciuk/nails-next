"use client";
import {  useState } from "react";
import { FormValues } from "@/type/type";
import { useForm, SubmitHandler } from "react-hook-form";
import ResponseModal from "./ResponseModal";
import { response } from "@/data/navList";

const OrderServise = () => {
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [isError, setisError] = useState(false);

  const closeModal = () => setIsSuccessfull(false);
  const closeResponseModal = () => setisError(false);
 
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/meqyplev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setIsSuccessfull(true)
       
        // Handle successful form submission
        console.log("Form submitted successfully!");
      } else {
        setisError(true)
        // Handle form submission error
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  return (
    <>
      <h2 className="text-2xl uppercase text-center mb-3">швидкий запис</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex text-black flex-wrap gap-4 justify-center"
      >
        <input
          {...register("firstName", {
            minLength: {
              value: 2,
              message: "Ім'я має містити не менше як 2 букви",
            },
            required: { value: true, message: "Вкажіть своє ім'я" }
          })}
          type="text"
          placeholder="Ім'я"
          className="block border-b-2 w-[300px] border-white bg-transparent text-white pt-2 px-2 placeholder:text-xl placeholder:text-white placeholder:font-medium placeholder:text-opacity-40"
        />
        {errors.firstName && (
          <p className="absolute top-[40px] left-[73px] text-red font-medium text-[14px] w-[350px]">
            {errors.firstName.message}
          </p>
        )}

     
          <input
            {...register("phone", {
              minLength: {
                value: 10,
                message: "Номер має містити не менше як 10 цифр",
              },
              required: {
                value: true,
                message: "Вкажіть свій номер телефону",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Номер має містити тільки цифри",
              },
            })}
            type="text"
            className="block mb-2 border-b-2 w-[300px] text-white border-white bg-transparent pt-2 px-2 placeholder:text-xl placeholder:text-white placeholder:font-medium placeholder:text-opacity-40"
            placeholder="Телефон"
          />
          {errors.phone && (
            <p className="absolute left-[73px] bottom-[60px] text-red font-medium text-[14px] w-[350px]">
              {errors.phone.message}
            </p>
          )}
    
        <button
          className=" inline-block text-white border-2 bg-red border-transparent text-xl font-medium px-9 py-3 rounded-3xl hover:text-red hover:bg-white hover:border-red"
          type="submit"
        >
          Записатися
        </button>
      </form>
      {isSuccessfull && <ResponseModal closeModal={closeModal} response={response.successfull}/>}
    {isError && <ResponseModal closeModal={closeResponseModal} response={response.error}/>}
    </>
  );
};

export default OrderServise;

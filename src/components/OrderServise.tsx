"use client";
import { MouseEvent, useEffect } from "react";
import { CloseModal, FormValues } from "@/type/type";
import { useForm, SubmitHandler } from "react-hook-form";

const OrderServise = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

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
            required: { value: true, message: "Вкажіть своє ім'я" },
          })}
          type="text"
          placeholder="Ім'я"
          className="block border-b-2 w-[300px] border-white bg-transparent text-white pt-2 placeholder:text-xl placeholder:text-white placeholder:font-medium placeholder:text-opacity-40"
        />
        {errors.firstName && (
          <p className="absolute top-[40px] left-[53px] text-red font-medium text-[14px] w-[350px]">
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
            className="block mb-2 border-b-2 w-[300px] text-white border-white bg-transparent pt-2 placeholder:text-xl placeholder:text-white placeholder:font-medium placeholder:text-opacity-40"
            placeholder="Телефон"
          />
          {errors.phone && (
            <p className="absolute left-[53px] bottom-[60px] text-red font-medium text-[14px] w-[350px]">
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
    </>
  );
};

export default OrderServise;

"use client";

import { useForm } from "react-hook-form";
import { contactSchema, TContactSchema } from "../lib/types";
import { contactUs } from "../serverActions/actions";

import Submit from "./submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Success from "./success-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { terms: false },
  });

  const onSubmit = async (data: TContactSchema) => {
    console.log("Submitting");
    const result = await contactUs(data);
    if (result.errors) {
      console.log("Errors", result.errors);
      toast.error(`Errors: Please check the form `, {
        ariaProps: { role: "status", "aria-live": "assertive" },
      });
      return;
    }

    toast.custom((t) => <Success toast={t} />, {
      ariaProps: { role: "status", "aria-live": "polite" },
      duration: 5000,
    });
    reset();
  };

  return (
    <div className="sm:min-w-[740px] bg-white p-6 sm:p-12 rounded-xl">
      <div className="items-start">
        <h1 className="text-2xl font-extrabold ">Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 mt-6 ">
          <div className="flex sm:flex-row flex-col gap-3">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName">
                First Name{" "}
                <span className="text-DarkGreen text-xs align-text-top">*</span>
              </label>
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                className={`h-12 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 focus:outline-none ${
                  errors.firstName
                    ? "border-Red"
                    : "focus:border-DarkGreen hover:border-DarkGreen "
                } `}
              />
              {errors.firstName && (
                <p className="text-Red">{`${errors.firstName.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName">
                Last Name{" "}
                <span className="text-DarkGreen text-xs align-text-top">*</span>
              </label>
              <input
                {...register("lastName")}
                type="text"
                id="lastName"
                className={`h-12 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 focus:outline-none ${
                  errors.lastName
                    ? "border-Red"
                    : "focus:border-DarkGreen hover:border-DarkGreen"
                }`}
              />
              {errors.lastName && (
                <p className="text-Red">{`${errors.lastName.message}`}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email Address{" "}
              <span className="text-DarkGreen text-xs align-text-top">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`h-12 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 focus:outline-none ${
                errors.email
                  ? "border-Red"
                  : "focus:border-DarkGreen hover:border-DarkGreen"
              } w-full`}
            />
            {errors.email && (
              <p className="text-Red">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="flex gap-3 ">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="query">
                Query Type{" "}
                <span className="text-DarkGreen text-xs align-text-top">*</span>
              </label>
              <div className="flex sm:flex-row flex-col justify-between items-center gap-3 ">
                <label className="h-12 cursor-pointer has-[:checked]:bg-LightGreen border border-gray-300  has-[:checked]:border-DarkGreen flex gap-2 items-center justify-start px-4 py-2 rounded-lg   w-full">
                  <input
                    {...register("query")}
                    type="radio"
                    id="general query"
                    value="General Enquiry"
                    className="accent-DarkGreen h-5 w-5"
                  />
                  <p>General Enquiry</p>
                </label>
                <label className="h-12 cursor-pointer border border-gray-300  has-[:checked]:bg-LightGreen has-[:checked]:border-DarkGreen flex gap-2 items-center justify-start px-4 py-2 rounded-lg  w-full">
                  <input
                    {...register("query")}
                    type="radio"
                    value="Support Request"
                    id="support request"
                    className="accent-DarkGreen h-5 w-5"
                  />
                  <p>Support Request</p>
                </label>
              </div>
              {errors.query && (
                <p className="text-Red">{`${errors.query.message}`}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message">
              Message{" "}
              <span className="text-DarkGreen text-xs align-text-top">*</span>
            </label>
            <textarea
              {...register("message")}
              id="message"
              aria-describedby="message"
              className={`min-h-[240px] sm:min-h-[100px] cursor-pointer px-4 py-2 rounded-lg resize-none border border-gray-300 focus:outline-none ${
                errors.message
                  ? "border-Red"
                  : "focus:border-DarkGreen hover:border-DarkGreen"
              } w-full`}
            />
            {errors.message && (
              <p className="text-Red">{`${errors.message.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-10 mt-4">
            <div className="flex justify-start items-center gap-3">
              <input
                {...register("terms")}
                type="checkbox"
                id="terms"
                className="relative peer shrink-0 appearance-none border border-DarkGreen cursor-pointer mr-2  w-5 h-5"
              />
              <svg
                className="absolute w-5 h-5 hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#0C7D69"
                  d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
                />
              </svg>
              <label htmlFor="terms" className="">
                I consent to being contacted by the team{" "}
                <span className="text-DarkGreen text-xs align-text-top">*</span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-Red">{`${errors.terms.message}`}</p>
            )}
          </div>
        </div>
        <Submit type="submit" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default Contact;

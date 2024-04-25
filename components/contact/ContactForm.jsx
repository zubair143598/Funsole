import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { useFormik } from "formik";
import { userSchema } from "@/src/schemas";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
  console.log(values);
  action.resetForm()
      },
    });
   
  
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className=" relative">
      <div className="absolute top-5">
        <Link href="/">
          <img src="./assists/logo.png" className=" w-[160px]" alt="" />
        </Link>
      </div>
      <div className=" hidden lg:block absolute right-[5rem] top-9 ">
        <p className="flex hover:text-[#DAB200] font-bold text-[21px]  items-center">
          <FaPhone /> +92-336-9628075
        </p>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className=" pb-[240px] bg-gradient-to-b pt-[140px] px-2 from-gray-700 to-yellow-400 text-center text-white">
          <h2 className=" text-[35px] font-medium py-[10px] px-[20px]">
            Funsol Technologies
          </h2>
          <p className=" lg:px-[190px] py-[10px] px-[20px] font-medium text-[16px] pb-[90px] mb-[12px]">
            5th Floor Marvel Arcade, Executive Block Gulberg Greens, Islamabad
            Capital Territory, 44000
          </p>
          <div className=" flex justify-center">
            <img className=" w-[55%]" src="./assists/mosque.png" alt="" />
          </div>
        </div>
        <div className=" lg:pb-[240px] pb-[70px] pt-[40px]  lg:pt-[220px]   text-center  bg-[#FDF2C3]">
          <h2 className=" text-[35px] lg:text-[40px] font-semibold ">Lets work together</h2>
          <p className=" text-[18px] ">
            We make all your dreams come true in a successful project.
          </p>
          <form className="" onSubmit={handleSubmit} action="">
            <div>
              <input
                type="text"
                name="name"
                className=" p-2 w-[73%] mt-14 h-[60px] border border-[black] rounded"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <p className="text-center text-[14px]  text-red-500 ">{errors.name}</p>
              ) : null}
            </div>
            <div className=" lg:flex block mt-7  justify-center gap-x-6">
              <div className=" mb-7 ">
                <input
                  type="email"
                  name="email"
                  className=" p-2 w-[265px]  h-[60px] border border-[black] rounded"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <p className="text-center text-[14px]   text-red-500 ">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  className=" p-2 w-[265px]  h-[60px] border border-[black] rounded"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                  <p className="text-center text-[14px] text-red-500 ">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <textarea
                placeholder="How can we help you?"
                className="w-[73%] h-[120px]  p-3 border border-[black] rounded mt-7"
                name="message"
                id=""
                cols="30"
                rows="10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message ? (
                <p className="text-center text-[14px]  text-red-500 ">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <div>
              <button
                className=" bg-orange rounded py-[10px] text-[18px] font-semibold uppercase w-[75%] mt-10"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

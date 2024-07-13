import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { delay, motion } from "framer-motion";

function Sendmess(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
          name: data.name,
          email: data.email,
          message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/anlelnoa", userInfo);
            toast.success("Your message has been sent");
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        };
    return(
        <>
           <div  name="Contact"
        className="container px-4 mx-auto my-16 max-w-screen-2xl md:px-20" id="contect">  
        <motion.h1
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
         className="my-10 text-4xl text-center">Contact me</motion.h1>
        <div className="flex flex-col items-center justify-center mt-5 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/anlelnoa"
            // method="POST"
            className="px-8 py-6 lg:mx-5 bg-slate-200 w-96 rounded-xl"
          >
            <h1 className="flex justify-center mb-4 text-1.5xl font-semibold text-black">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-white duration-300 bg-black rounded-xl hover:bg-slate-700"
            >
              Send
            </button>
          </form>
        </div>
        </div>
        
        </>
    );
}
export default Sendmess;
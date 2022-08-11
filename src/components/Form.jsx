import React from "react";

function Form() {
  return (
    <>
      <div className=" container mx-auto  border-solid border-[1px] rounded border-[#06BED8] shadow-lg my-10 ">
        <div className="flex justify-center items-center mt-10">
          <p className="text-[2rem] font-bold">Create Your Account</p>
        </div>
        <div className="px-12 mt-4">
          <hr className="border-[1px] border-[#70707030]" />
        </div>
        <div className="flex justify-center flex-wrap gap-8 mt-10">
          <div className="flex justify-between">
            <img
              className="w-5 border-solid border-[1px] border-[#546EA4] rounded p-2"
              src="/images/facebook.png"
              alt=""
            />
            <p className="bg-[#546EA4] p-2 px-3 text-[#FFF]   ">
              sign in with facebook
            </p>
          </div>

          <div className="flex justify-between">
            <img
              className="w-5 border-solid border-[1px] border-[#518EF8]  rounded p-2"
              src="/images/google.png"
              alt=""
            />
            <p className="bg-[#518EF8] p-2 px-3 text-[#FFF] ">
              sign in with google
            </p>
          </div>
          <div className="flex justify-between">
            <img
              className="w-5 border-solid border-[#171717] border-[1px]  rounded p-2"
              src="/images/apple.png"
              alt=""
            />
            <p className="bg-[#171717] p-2 px-3 text-[#FFF] ">
              sign in with apple
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4  my-10">
          <hr className="w-[16rem] border-[#70707030] border-[1px] relative" />
          <p className="text-center absolute text-[#D4D4D4] bg-[#FFF]">OR</p>
        </div>

        <div className="container mx-auto flex  items-center justify-center  my-20">
          <form className="flex flex-col gap-4   ">
            <label className="font-semibold">Email</label>
            <input
              className="rounded border-[#DEDEDF]  border-[1px] p-2 w-[16rem]"
              type="text"
              placeholder="Type your email"
            />
            <label className="font-semibold">Password</label>
            <input
              className="rounded border-[#DEDEDF] border-[1px] p-2 w-[16rem]"
              type="text"
              placeholder="create your password"
            />
            <label className="font-semibold">Confirm Password</label>
            <input
              className="rounded border-[#DEDEDF] border-[1px] p-2 w-[16rem]"
              type="text"
              placeholder="confirm your password"
            />

            <label className="font-semibold">Phone Number</label>
            <input
              className="rounded border-[#DEDEDF] border-[1px] p-2 w-[16rem] "
              type="#"
              placeholder="Enter your number"
            />
          </form>
        </div>

        <div className="pb-6 px-12">
          <hr className="border-[#70707030] border-[1px] " />
        </div>
        <div className="flex flex-col items-center gap-2 py-6">
          <button className=" bg-[#06BED8] text-[#f9f9f9] rounded border-none  w-[12rem] p-1 ">
            sign up
          </button>

          <p className="font-sans text-[#000000] py-4">
            Already have account? Log In please
          </p>
          <button className=" bg-[#06BED8] text-[#f9f9f9] rounded border-none w-[12rem]  p-1">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;

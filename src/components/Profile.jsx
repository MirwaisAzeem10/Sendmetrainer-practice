import React from "react";

function Profile() {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-[2rem] font-semibold text-[#06BED8] py-6">
          TRAINER PROFILE
        </p>
        <hr className="border border-[#BFBFBF80]" />
      </div>
      <div className="container mx-auto">
        <div className="flex  flex-col-2 justify-start items-start pb-10 pt-10 px-10">
          <div>
            <img
              className="mb-3 w-[16rem] rounded-full shadow-lg"
              src="/images/wells-chan-H-vAxuWxmi8-unsplash.png"
              alt="Bonnie image"
            />
            <div className="flex flex-col items-center gap-4">
              <button className="w-[10rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] text-[#06BED8]">
                Packages & Prices
              </button>
              <button className="w-[10rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] bg-[#06BED8] text-[#fff]">
                Hire Trainer
              </button>
            </div>
          </div>
          <div className="flex  flex-col px-6">
            <div className="flex justify-start gap-2">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Sergio
              </h5>
              <img src="/images/Mask Group 315.svg" alt="" />
            </div>
            <div>
              <p className="text-sm text-[#929292]">
                personal trainer, since 1970
              </p>
            </div>
            <div className="flex justify-start items-start gap-4 mt-2">
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <img src="/images/Mask Group 321.svg" alt="" />
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Palm Springs, CA
              </span>
            </div>
            <div className="flex justify-center items-center mt-4 ">
              <p className="">
                Fusce vel dui. Pellentesque egestas, neque sit amet convallis
                pulvinar, justo nulla eleifend augue, ac auctor orci leo non
                est. Nunc nec neque. Aenean massa. Sed a libero.{" "}
                <span className="text-[#06BED8]">Read More</span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <img src="/images/Mask Group 348.svg" alt="" />
              <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                Categories
              </span>
            </div>
            <div className="flex justify-between text-center items-center mt-4  w-[32rem] gap-4">
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Violin
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Boxing
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                test hello
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Weight Loss
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Piano
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                category for package
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                category for now
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                new cat for now
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-6">
              <img src="/images/Mask Group 358.svg" alt="" />
              <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                Certificates
              </span>
            </div>
            <div className="flex justify-between text-center items-center mt-4  w-[32rem] gap-4">
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1    w-[4rem] ">
                Nasm
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1   w-[4rem] ">
                GHCF
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  w-[4rem] ">
                K11
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  w-[4rem] ">
                Cent 100
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  w-[4rem] ">
                Ace1
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  w-[4rem] ">
                Suit
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  w-[4rem] ">
                sap
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-6">
              <img src="/images/Mask Group 360.svg" alt="" />
              <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                Specialities
              </span>
            </div>
            <div className="flex justify-between text-center items-center mt-4  w-[32rem] gap-4">
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Weight Loss
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Firming And Toning
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Increase Muscle Strength
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Flexibility
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Balance
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Endurance Training
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Body Building
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Wellness Advising
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-6">
              <img src="/images/Mask Group 361.svg" alt="" />
              <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                Languages
              </span>
            </div>
            <div className="flex justify-between text-center items-center mt-4  w-[24rem] gap-4">
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                English
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Spanish
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Hindi
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Urdu
              </p>
            </div>

            <div className="flex flex-row  gap-4 my-12">
              <div className="flex flex-col">
                <p className="text-[4rem] text-[#545454]">4.8</p>
                <p className="text-[#545454] text-center">out of 5</p>
              </div>

              <div>
                <div className="flex justify-start items-start gap-4 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>

                <div className="flex justify-end items-start gap-4 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>
                <div className="flex justify-end items-start gap-4 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>
                <div className="flex justify-end items-start gap-4 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>
                <div className="flex justify-end items-start gap-4 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>
              </div>
              <div className=" mx-4 w-2/4 h-3 bg-gray-200 border-[#06BED8] rounded-md dark:bg-gray-700">
                <div className="h-3 bg-[#06BED8] rounded-md w-[70%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

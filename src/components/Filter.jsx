import React from "react";

function Filter() {
  return (
    <>
      <div className="">
        <div class="grid grid-cols-[300px_1fr] h-screen relative">
          <div className="!border border-solid !border-gray-300 show-hide-filter-side-bar-backdrop flex h-full z-[1] px-6 pt-10 pb-10">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-2 items-center">
                <img src="/images/Mask Group 344.svg" alt="" />
                <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                  Filter
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <img src="/images/Mask Group 348.svg" alt="" />
                <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                  Categories
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Piano</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Music</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Drum</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Maths</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Flute</p>
              </div>
              <div className="flex gap-2 items-center">
                <input className="s" type="radio" />
                <p>Piano</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src="/images/Mask Group 358.svg" alt="" />
                <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                  Certificate
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>MCAT</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>MCOM</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>IELTS</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Other</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src="/images/Mask Group 360.svg" alt="" />
                <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                  Specialities
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Blance</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Flexible</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Wieght Loss</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Nutrition</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src="/images/Mask Group 361.svg" alt="" />
                <span className="text-[20px] text-[#171717] font-medium font-poppins flex-1 capitalize">
                  Languages
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>English</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Persian</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Arabic</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" />
                <p>Other</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pb-10 pt-10">
            <div className="flex flex-col justify-center items-center pb-10">
              <img
                className="mb-3 w-[12rem] h-[12rem] rounded-full shadow-lg"
                src="/images/madison-lavern-4gcqRf3-f2I-unsplash.png"
                alt="Bonnie image"
              />
              <div className="flex justify-between gap-2">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Nadia
                </h5>
                <img src="/images/Mask Group 315.svg" alt="" />
              </div>
              <div className="flex justify-center items-center gap-2 mt-2">
                <img src="/images/Mask Group 316.svg" alt="" />
                <img src="/images/Mask Group 316.svg" alt="" />
                <img src="/images/Mask Group 316.svg" alt="" />
                <img src="/images/Mask Group 316.svg" alt="" />
                <img src="/images/Mask Group 316.svg" alt="" />
              </div>
              <div className="flex justify-between gap-2">
                <img src="/images/Mask Group 321.svg" alt="" />
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Palm Springs, CA
                </span>
              </div>

              <div className="flex justify-center text-center mt-4 flex-wrap w-[15rem] gap-4">
                <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                  Yoga
                </p>
                <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                  Trainer
                </p>
                <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                  Golf
                </p>
              </div>

              <div className="max-w-xs mt-4">
                <p className="text-start font-poppins">
                  Donec vitae sapien ut libero venenatis faucibus. Pellentesque
                  egestas, neque sit
                </p>
                <div className="flex flex-row items-center gap-2 mt-5">
                  <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] text-[#06BED8]">
                    Packages & Prices
                  </button>
                  <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] bg-[#06BED8] text-[#fff]">
                    Hire Trainer
                  </button>
                  <img src="/images/Mask Group 349.svg" alt="chat" />
                  <p className="text-[#06BED8]">chat</p>
                </div>
              </div>
            </div>

            <img
              className="mb-3 w-[12rem] h-[12rem] rounded-full shadow-lg"
              src="/images/wells-chan-H-vAxuWxmi8-unsplash.png"
              alt="Bonnie image"
            />
            <div className="flex justify-between gap-2">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Sergio
              </h5>
              <img src="/images/Mask Group 315.svg" alt="" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-2">
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
              <img src="/images/Mask Group 316.svg" alt="" />
            </div>
            <div className="flex justify-between gap-2">
              <img src="/images/Mask Group 321.svg" alt="" />
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Palm Springs, CA
              </span>
            </div>

            <div className="flex justify-center text-center mt-4 flex-wrap w-[15rem] gap-4">
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Yoga
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Trainer
              </p>
              <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                Golf
              </p>
            </div>

            <div className="max-w-xs mt-4">
              <p className="text-start font-poppins">
                Donec vitae sapien ut libero venenatis faucibus. Pellentesque
                egestas, neque sit
              </p>
              <div className="flex flex-row items-center gap-2 mt-5">
                <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] text-[#06BED8]">
                  Packages & Prices
                </button>
                <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] bg-[#06BED8] text-[#fff]">
                  Hire Trainer
                </button>
                <img src="/images/Mask Group 349.svg" alt="chat" />
                <p className="text-[#06BED8]">chat</p>
              </div>
              <div className="flex flex-col justify-center items-center pb-10 pt-10">
                <img
                  className="mb-3 w-[12rem] h-[12rem] rounded-full shadow-lg"
                  src="/images/spencer-davis-0ShTs8iPY28-unsplash.png"
                  alt="Bonnie image"
                />
                <div className="flex justify-between gap-2">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Courtney
                  </h5>
                  <img src="/images/Mask Group 315.svg" alt="" />
                </div>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                  <img src="/images/Mask Group 316.svg" alt="" />
                </div>
                <div className="flex justify-between gap-2">
                  <img src="/images/Mask Group 321.svg" alt="" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Palm Springs, CA
                  </span>
                </div>

                <div className="flex justify-center text-center mt-4 flex-wrap w-[15rem] gap-4">
                  <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                    Yoga
                  </p>
                  <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1  rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                    Trainer
                  </p>
                  <p className="text-center font-bold text-xs font-poppins text-[#06BED8] py-1 rounded bg-[#06BED8] bg-opacity-10 w-[4rem] ">
                    Golf
                  </p>
                </div>

                <div className="max-w-xs mt-4">
                  <p className="text-start font-poppins">
                    Donec vitae sapien ut libero venenatis faucibus.
                    Pellentesque egestas, neque sit
                  </p>
                  <div className="flex flex-row items-center gap-2 mt-5">
                    <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] text-[#06BED8]">
                      Packages & Prices
                    </button>
                    <button className="w-[20rem] h-[2rem] text-sm border-solid rounded border-[#06BED8] bg-[#06BED8] text-[#fff]">
                      Hire Trainer
                    </button>
                    <img src="/images/Mask Group 349.svg" alt="chat" />
                    <p className="text-[#06BED8]">chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

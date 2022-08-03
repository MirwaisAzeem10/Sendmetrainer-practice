import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  const images = [
    "/images/istockphoto-172166953-170667a.jpg",
    "/images/istockphoto-172166953-170667a.jpg",
    "/images/istockphoto-172166953-170667a.jpg",
    "/images/istockphoto-172166953-170667a.jpg",
  ];
  return (
    <>
      <div className="w-[100%] h-[40rem]">
        <div className="flex items-center justify-center md:justify-start h-full max-w-full md:max-w-2xl md:ml-24 ml-0">
          <p className="text-[#fff] font-poppins text-center md:text-start text-3xl px-5 md:px-0 leading-20 md:leading-[70px] md:text-5xl ">
            <span className="text-[#06BED8]">Contact Us</span> For Customer
            Support...
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start h-full max-w-full md:max-w-2xl md:ml-24 ml-0">
          <p className="text-[#fff] font-poppins text-center md:text-start text-sm px-5 md:px-0 leading-20  md:text-sm">
            If you have questions about using Angi for your home projects, we're
            here to help.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="text-[#fff] font-poppins font-semibold">
            Call Us
          </button>
          <button className="text-[#fff] font-poppins font-semibold">
            Email Us
          </button>
        </div>
      </div>
      <div className="flex justify-center py-3 mt-4">
        <h1 className="text-[2.5rem] font-poppins  font-medium">
          We Only Work With The Best
        </h1>
      </div>
      <div className=" container columns-3 mx-auto mt-10  font-poppins font-normal text-lg gap-4 ">
        <div className="flex justify-center items-center flex-col gap-8 overflow-hidden">
          <img src="/images/Group 11276.svg" alt="" />
          <p className="text-center  max-w-[17rem]">
            Locally Owned And Operated By A Franchise Owner
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-8 overflow-hidden">
          <img src="/images/Group 11277.svg" alt="" />
          <p className="text-center  max-w-[17rem]">
            All Providers Handpicked And Vetted By Franchise Owner To Ensure
            Best Quality
          </p>
        </div>

        <div className="flex  justify-center items-center flex-col gap-8 overflow-hidden">
          <img src="/images/Group 11278.svg" alt="" />
          <p className="text-center  max-w-[17rem]">
            Best In className Customer Service
          </p>
        </div>
      </div>
      <div className=" columns-6 bg-[#DEDEDF] w-full min-h-[143px] h-auto py-5 mt-[50px] flex items-center justify-center">
        <div className="flex justify-center justify-items-center  mx-auto gap-4 py-3 flex-wrap">
          <img src="/public/images/Group 11122.png" alt="" />
          <img src="/public/images/Group 11121.png" alt="" />
          <img src="/public/images/Group 11119.png" alt="" />
          <img src="public/images/Group 11120.png" alt="" />
          <img src="public/images/Group 11120.png" alt="" />
          <img src="public/images/Group 11120.png" alt="" />
        </div>
      </div>
      <Carousel
        className="mt-20 gap-10"
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
      >
        {images.map((image) => (
          <img src={image} />
        ))}
      </Carousel>

      <div className="container mx-auto mt-10">
        <h3 className="font-poppins font-bold text-[1.5rem] mt-16 mb-10">
          Why Choose "Send Me A Trainer"
        </h3>
      </div>
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-2  ">
        <div className="">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/public/images/Mask Group 337.svg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium  text-[#06BED8]">
                    Standard Pricing
                  </p>

                  <p className="text-sm text-black-500  ">
                    With our fair rates, no more wasting time getting quotes and
                    negotiating. (Save Time!)
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/public/images/Mask Group 336.svg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium  text-[#06BED8]">
                    Work With Any Pro
                  </p>
                  <p className="text-sm text-black-400">
                    No commitment to one pro, book any of our qualified and
                    vetted pros at any time.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/public/images/Mask Group 335.svg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium text-[#06BED8]">
                    Secure And Simple
                  </p>
                  <p className="text-sm text-black-500 text-black-400">
                    Easily make payments and track sessions all on your app.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/public/images/Mask Group 334.svg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p class="text-lg font-medium text-[#06BED8]">
                    Locally Owned
                  </p>

                  <p class="text-sm  text-black-400">
                    Great customer service and quality providers vetted by our
                    local franchise owner.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img src="/images/Group 11236.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;

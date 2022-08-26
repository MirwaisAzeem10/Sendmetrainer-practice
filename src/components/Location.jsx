import React, { useEffect } from "react";

function Location() {
  function myMap() {
    var mapProp = {
      center: new window.google.maps.LatLng(51.508742, -0.12085),
      zoom: 5,
    };
    var map = new window.google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }

  useEffect(() => {
    myMap();
  }, []);
  return (
    <>
      <div className="container mx-auto flex justify-start items-center gap-10 my-5">
        <div>
          <img className="" src="/images/smta-logo.png" alt="smta" />
        </div>
        <div className="flex flex-row">
          <img src="/images/page-1.svg" alt="" />
          <img src="/images/page-2.svg" alt="" />
        </div>
      </div>
      {/* <div className="flex justify-end">
        <button className="text-[#06BED8] border-none ">Franchise</button>
      </div> */}
      <div className="flex justify-end items-end">
        <hr className="border-[1px] border-solid border-[#BFBFBF] w-full" />
      </div>
      <div className="container mx-auto flex items-center justify-between gap-10 my-10">
        <div className="w-full  max-w-sm">
          <div className="flex justify-start items-center gap-12">
            <p className="text-[1.5rem] font-bold">Find A Location</p>
            <p className="font-bold ">state province/View</p>
          </div>
          <div className="flex justify-start gap-2 my-10">
            <input
              className="px-10 border-[#BFBFBF] border-[1px] rounded"
              type="text"
              placeholder="Zip Or Postal Code"
            />
            <button className="bg-[#06BED8] text-[#FFF] px-8 py-2 border-none rounded">
              Submit
            </button>
          </div>

          <div className=" flex justify-between  border-solid border-[1px] rounded border-[#BFBFBF] px-4 py-4">
            <h4 className=" text-[#06BED8] font-bold">Select Location</h4>
            <span className=" text-[#B5B5B5]">40 location found</span>
          </div>
          <div className="overflow-y-auto h-96 border-solid border-[1px] rounded border-[#BFBFBF] px-4 py-4">
            <div className="flex justify-start gap-24">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#FFF]  bg-[#06BED8]  border-none rounded px-8 ">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4 ">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]   border-[1px] border-[#06BED8] hover:bg-[#06BED8] border-[1px]  hover:text-[#FFF] rounded px-8">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] hover:bg-[#06BED8] hover:text-[#FFF] border-[1px]  rounded px-8">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px]  rounded hover:bg-[#06BED8] hover:text-[#FFF] px-8 ">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] px-8 ">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] rounded px-8">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-24 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm font-bold">
                  SMAT Southwest valley
                </p>
                <p className="text-[#06BED8] text-sm font-bold">
                  (623) 499-9820
                </p>
                <p className="text-[#929292] text-sm font-bold">
                  Goodyear, AZ 85338
                </p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] rounded px-8">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[400px]" id="googleMap"></div>
        </div>
      </div>

      <div>
        <hr className="border-[#929292] border-[1px] border-solid w-full" />
      </div>
      <div className="container mx-auto flex justify-between items-center gap-2 my-10">
        <div>
          <p className="text-[#929292]">
            © 2022 sendmeatrainer.com Terms & Conditions / Cookie policy /
            Privacy policy{" "}
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <img src="/images/Social-Media-collection.svg" alt="smd" />
          <img src="/images/Social-Media-collection.svg" alt="smd" />
          <img src="/images/Social-Media-collection.svg" alt="smd" />
          <img src="/images/Social-Media-collection.svg" alt="smd" />
        </div>
        <div>
          <p className="font-bold  text-[#929292]">Download the App</p>
        </div>
        <div>
          <div className="flex flex-row">
            <img src="/images/page-1.svg" alt="" />
            <img src="/images/page-2.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;

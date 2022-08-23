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
      <div className="container mx-auto flex items-center justify-between gap-10">
        <div className="w-full  max-w-sm">
          <div className="flex justify-start items-center gap-12">
            <p className="text-[1.5rem] font-bold">Find A Location</p>
            <p className="font-bold">state province/View</p>
          </div>
          <div className="flex justify-start gap-2 my-10">
            <input
              className="px-6 border-[#BFBFBF] border-[1px]"
              type="text"
              placeholder="search location"
            />
            <button className="bg-[#06BED8] text-[#FFF] px-6 py-2 border-none rounded">
              Submit
            </button>
          </div>

          <div className="overflow-y-auto h-72 border border-[1px] border-[#929292]">
            <div className="flex justify-start gap-20">
              <p className="text-sm text-[#06BED8] font-bold">
                Select Location
              </p>
              <p className="text-sm text-[#B5B5B5]">40 location found</p>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#FFF]  bg-[#06BED8]  border-none rounded px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]   border-[1px] border-[#06BED8] hover:bg-[#06BED8] hover:text-[#FFF] rounded px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] hover:bg-[#06BED8] hover:text-[#FFF] rounded px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#        06BED8] rounded hover:bg-[#06BED8] hover:text-[#FFF] px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] rounded px-6 py-2">
                  Visit
                </button>
              </div>
            </div>

            <div className="flex justify-start gap-10 ">
              <div className="flex flex-col my-4">
                <p className="text-[#131313] text-sm">SMAT Southwest valley</p>
                <p className="text-[#06BED8] text-sm">(623) 499-9820</p>
                <p className="text-[#929292] text-sm">Goodyear, AZ 85338</p>
              </div>
              <div className="my-6">
                <button className="text-[#06BED8]  bg-[#FFF]  border-[#06BED8] border-[1px] rounded hover:bg-[#06BED8] hover:text-[#FFF] rounded px-6 py-2">
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
    </>
  );
}

export default Location;

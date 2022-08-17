import React from "react";

function Formthree() {
  return (
    <>
      <div className="overflow-y-auto  h-96 container mx-auto border-[#06BED8] rounded-md border-[1px] border-solid h-96 my-20 ">
        <div className="flex justify-center items-center mt-5">
          <p className="font-semibold text-lg">
            What Type Of Sports Do You Need To Practice Your Skills?
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <div className="border-[#06BED8] rounded-md border-[1px] border-solid max-w-[400px] p-3 flex justify-center gap-2 my-8">
            <img src="/images/baseketball.svg" alt="basket" />
            <p className="text-[#06BED8]">basketball</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="border-[#06BED8] rounded-md border-[1px] border-solid max-w-[400px] p-3 flex justify-center gap-2 my-8">
            <img src="/images/baseketball.svg" alt="basket" />
            <p className="text-[#06BED8]">basketball</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formthree;

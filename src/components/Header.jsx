import React from "react";

function Header() {
  return (
    <>
      <div className="container mx-auto flex justify-start items-center gap-6 my-5">
        <div>
          <img className="" src="/images/smta-logo.png" alt="" />
        </div>
        <div className="flex flex-row">
          <img src="/images/page-1.svg" alt="" />
          <img src="/images/page-2.svg" alt="" />
        </div>

        <div className="flex justify-end items-center">
          <button className="text-[#06BED8] border-none ">Franchise</button>
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <hr className="border-[1px] border-solid border-[#BFBFBF] w-full" />
      </div>
    </>
  );
}

export default Header;

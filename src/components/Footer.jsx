import React from "react";

function Footer() {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center gap-2 my-10">
        <div>
          <p>
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
      </div>
    </>
  );
}

export default Footer;

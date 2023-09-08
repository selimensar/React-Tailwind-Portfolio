import React from "react";
import { bannerImage } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-max flex items-center">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10"
        src={bannerImage}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;

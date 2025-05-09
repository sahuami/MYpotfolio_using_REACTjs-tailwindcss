
import BannerContent from "@/components/home/bannercontent";
import FirstNavbar from "@/components/layout/first-nav/first-nav";
import SecondNav from "@/components/layout/second-nav";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="background-banner">
        <FirstNavbar />
        {/* <SecondNav/> */}
        <BannerContent />
      </div>
    </div>
  );
};

export default Header;

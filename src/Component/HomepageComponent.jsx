import React from "react";
import CategoriesCardComponent from "./CategoriesCardComponent";
import PopularProducts from "./PopularProducts";
import VideoComponent from "./VideoComponent";
import ImageComponent from "./ImageComponent";
import BrandsNameCompomnent from "./BrandsNameCompomnent";
import FromComponent from "./FromComponent";
import HeaderComponent from "./HeaderComponent";
import Footercomponent from "./Footercomponent";

const HomepageComponent = () => {
  return (
    <>
    <div className="">
      <HeaderComponent />
      <div className="">
        <img src="/img/sliderimg2.jpg" alt="img" className="w-full h-custom-height " width="100%" />
      </div>
      <CategoriesCardComponent />

      <BrandsNameCompomnent />

      <PopularProducts />

      <VideoComponent />

      <ImageComponent />

      <FromComponent />

      <Footercomponent/>
      </div>
    </>
  );
};

export default HomepageComponent;

import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import BestSellOne from "../../../Images/Samsung_Galaxy_Watch6_Classic_47mm.png";
import BestSellTwo from "../../../Images/TP-Link_Tapo_C310_Outdoor_Security_Wi-Fi_Camera_-_Ver_1.0.png";
import BestSellThree from "../../../Images/Sony_DualSense_Wireless_Controller_for_PS5_PlayStation_5.png";
import BestSellFour from "../../../Images/Bloody_G230P_Stereo_Surround_Sound_Gaming_Headphone.png";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={BestSellOne}
          productName="Samsung Galaxy Watch6 Classic 47mm Silver R960"
          price="251"
          color="Blank and White"
          badge={true}
          des="Galaxy Watch6. Start your everyday wellness journey.
          "
        />
        <Product
          _id="1012"
          img={BestSellTwo}
          productName="TP-Link Tapo C310 Outdoor Security Wi-Fi Camera - Ver 1.0"
          price="48"
          color="Gray"
          badge={false}
          des="Ultra-High-Definition Video: Records every image in crystal-clear 3MP definition."
        />
        <Product
          _id="1013"
          img={BestSellThree}
          productName="Sony DualSense Wireless Controller for PS5 PlayStation 5"
          price="71"
          color="Mixed"
          badge={true}
          des="Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands.
          "
        />
        <Product
          _id="1014"
          img={BestSellFour}
          productName="Bloody G230P Stereo Surround Sound Gaming Headphone"
          price="12"
          color="Black"
          badge={false}
          des="Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands.
          "
        />
      </div>
    </div>
  );
};

export default BestSellers;

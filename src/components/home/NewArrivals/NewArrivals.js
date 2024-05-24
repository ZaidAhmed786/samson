import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import ArrowOne from "../../../Images/Lenovo_IdeaPad_1_15AMN7.png";
import ArrowTwo from "../../../Images/Lenovo_V15_G3_IAP.png";
import ArrowThree from "../../../Images/Dell_Vostro_3520.png";
import ArrowFour from "../../../Images/Lenovo_IdeaPad_Slim_3.png";
import ArrowFive from "../../../Images/HP_250_G10.png";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={ArrowOne}
            productName="Lenovo IdeaPad 1 15AMN7"
            price="358"
            color="Black"
            badge={true}
            des="Ideapad 1 Series laptops are engineered for productivity but priced for accessibility."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={ArrowTwo}
            productName="Lenovo V15 G3 IAP"
            price="373"
            color="Black"
            badge={true}
            des="Think of the Lenovo V15 as your office manager, executing your everyday tasks with efficiency."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={ArrowThree}
            productName="Dell Vostro 3520"
            price="376"
            color="Mixed"
            badge={true}
            des="Everyday tasks are quickly handled with ease using up to 12th Gen Intel® Core™ Processors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={ArrowFour}
            productName="Lenovo IdeaPad Slim 3"
            price="389"
            color="Mixed"
            badge={false}
            des="The smart, powerful, and military-grade durable IdeaPad Slim 5i Gen 8 laptop is designed for life on the go – and the school of hard knocks. It’s thin and light enough to slip under your arm or into any bag."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={ArrowFive}
            productName="HP 250 G10"
            price="394"
            color="Mixed"
            badge={false}
            des="The budget-friendly, business-ready HP 250 G10 Laptop provides essential power and productivity features in a thin and light design with a large 15.6-inch diagonal display."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

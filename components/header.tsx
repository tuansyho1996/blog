"use client";
import * as motion from "motion/react-client";
import Link from "next/link";
import { NavigationMenuDemo } from "./test";
import Image from "next/image";
import { MenuHeader } from "./header/header.menu";
import SearchHeader from "./header/header.search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const box = {
  width: 100,
  height: 100,
  backgroundImage:
    "url(https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a)",
  backgroundSize: "cover", // để ảnh vừa khít
  backgroundPosition: "center",
  borderRadius: 5,
};
const ArrayImg = [
  "https://d2jfx0w9sp915a.cloudfront.net/c1f0aaf9514e43e6735f3400437fa5cc",
  "https://d2jfx0w9sp915a.cloudfront.net/4e3ba33aaf9ac735ef1827ebeaa396d0",
  "https://d2jfx0w9sp915a.cloudfront.net/f187e82833a48e7b8755a8f437e9b5a6",
  "https://d2jfx0w9sp915a.cloudfront.net/4e1df3cec158715438f9e694fc639f63",
  "https://d2jfx0w9sp915a.cloudfront.net/bb52dbbc26d0d1ba0c2520823a12b0c6",
  "https://d2jfx0w9sp915a.cloudfront.net/fdc89538b99b57e5aa87096df447d3ce",
];
type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <button
        aria-label="Next"
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <button
        aria-label="Prev"
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
    </div>
  );
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // màn hình <= 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // màn hình <= 768px (tablet)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // màn hình <= 480px (mobile)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Header = () => {
  return (
    <header className="w-full relative">
      <div className=""></div>
      <Slider {...settings}>
        {ArrayImg.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover border border-white"
            />
          </div>
        ))}
      </Slider>
      {/* logo + menu + search */}
      <div className="absolute top-[10px] flex items-center justify-center w-full gap-4">
        <MenuHeader />
        <motion.div
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        <SearchHeader />
      </div>
    </header>
  );
};
export default Header;

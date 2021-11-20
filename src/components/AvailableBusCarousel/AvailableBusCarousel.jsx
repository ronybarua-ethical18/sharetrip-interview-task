import React from "react";
import {
  BusCarouselContainer,
  CarouselItem,
} from "./AvailableBusCarouselItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { busDetails } from "../../dummyData";
const AvailableBusCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    centerMode: true,
    className: "",
    containerClass: "carousel-container",
    // customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
  };
  return (
    <BusCarouselContainer>
      <Carousel {...carouselParams}>
        {busDetails.map((bus) => (
          <CarouselItem key={bus.id}>
            <h5>{bus.name}</h5>
            <small>{bus.buses} Buses</small>
          </CarouselItem>
        ))}
      </Carousel>
    </BusCarouselContainer>
  );
};

export default AvailableBusCarousel;

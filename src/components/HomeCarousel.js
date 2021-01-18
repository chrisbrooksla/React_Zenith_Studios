import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/Assets/img/studio-pics/Hero/banner_1.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "/Assets/img/studio-pics/Hero/big-studio.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "/Assets/img/studio-pics/Hero/thehall.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const HomeCarousel = () => <UncontrolledCarousel items={items} />;

export default HomeCarousel;

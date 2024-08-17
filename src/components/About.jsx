// About.jsx
import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="py-32 lg:py-40 flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-0 lg:pl-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          About us
        </h1>
        <p>
        Welcome to Vishal's culinary haven, where passion for food meets exceptional taste. Our journey began with a dream to delight palates with every dish. With a dedication to quality and creativity, we craft culinary experiences that linger in your memory. Join us on a gastronomic adventure where flavors tell stories and every bite is a revelation.
        </p>
        <p>
        At Vishal's, we invite you to savor the essence of good food and warm hospitality, creating moments to cherish and flavors to remember. Indulge in an experience that transcends mere dining, celebrating the artistry of flavors and the joy of shared meals.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
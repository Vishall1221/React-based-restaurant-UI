// Review.jsx
import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.jpg";
import img2 from "../assets/img/pic2.jpg";
import img3 from "../assets/img/pic3.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Vishal"
          review="The food here is excellent, and it's served very quickly, there's no need to wait too long. The waitresses were also good."
        />
        <ReviewCard
          img={img2}
          name="Tigress"
          review="Well, this place is quite different from my usual stomping grounds. The food is definitely top-notch, especially the meat dishes. The service is quick too—I don't have to wait long to sink my teeth into a delicious meal. but honestly, I prefer the wild where I can hunt for my food. "
        />
        <ReviewCard
          img={img3}
          name="Sarvesh"
          review="This restaurant has quickly become my new favorite. The menu offers a great variety of dishes, and everything I've tried has been edible. The staff is also incredibly friendly and attractive."
        />
      </div>
    </div>
  );
};

export default Review;
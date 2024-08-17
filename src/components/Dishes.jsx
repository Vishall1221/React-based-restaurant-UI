// Dishes.jsx
import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.webp";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.webp";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.webp";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="py-32 lg:py-40 min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center">
         Dishes varieties 
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center mt-10">
        <DishesCard img={img1} title="Panner Butter Masala" price="₹200" />
        <DishesCard img={img2} title="Chicken 65" price="₹100" />
        <DishesCard img={img3} title="Briyani" price="₹300" />
        <DishesCard img={img4} title="Butter Naan" price="₹160" />
        <DishesCard img={img5} title="Curd rice" price="₹240" />
        <DishesCard img={img6} title="Noodles" price="₹420"/>
      </div>
    </div>
  );
};

export default Dishes;
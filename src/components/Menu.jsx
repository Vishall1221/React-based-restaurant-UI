// Menu.jsx
import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpeg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.webp";

const Menu = () => {
  return (
    <div className="py-20 lg:py-0 flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-0 pt-10 pb-10">
        Menu card
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Dosa" price="₹40" />
        <DishesCard img={menu2} title="Idly" price="₹30" />
        <DishesCard img={menu3} title="Pongal" price="₹540" />
      </div>
    </div>
  );
};

export default Menu;
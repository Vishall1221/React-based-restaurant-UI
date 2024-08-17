import React from 'react';
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5 text-center">
        <h1 className="text-navyBlue font-semibold text-6xl"> {/* Changed text color to navyBlue */}
        Taste Deliciousness in Every Bite
        </h1>
        <p className="text-navyBlue"> {/* Changed text color to navyBlue */}
        Welcome to our culinary paradise, where passion meets flavor in every dish. Explore our menu for taste sensations that will leave you wanting more.
        </p>
        <div>
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;

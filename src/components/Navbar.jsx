import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import mapImage from '../assets/img/map.png';
import vitImage from '../assets/img/vit.jpg';

const Navbar = () => {
  const [showImage, setShowImage] = useState(false);
  const [showVitImage, setShowVitImage] = useState(false);

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 px-5 bg-white md:px-32 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">The G.O.A.T Restaurant</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-median gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>
              </div>
            </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Link
              to="user-location"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => setShowVitImage(!showVitImage)}
            >
              User Location
            </Link>
            <button
              onClick={() => setShowImage(!showImage)}
              className="cursor-pointer hover:text-brightColor transition-all"
            >
              Map
            </button>
          </nav>
        </div>
      </div>
      {showImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <img src={mapImage} alt="Map" className="max-w-[80%] max-h-[80%]" />
        </div>
      )}
      {showVitImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <img src={vitImage} alt="VIT" className="max-w-[80%] max-h-[80%]" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
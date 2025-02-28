import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function NotesDashboard() {
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to Mem Dashboard
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Organize your ideas and notes effortlessly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/signup"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md text-base font-medium transition-colors"
          >
            Get Started
          </NavLink>
          <NavLink
            to="/login"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-md text-base font-medium transition-colors"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

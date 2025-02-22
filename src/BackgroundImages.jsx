import { useEffect, useState } from "react";

export function BackgroundImg({ interval = 8000, children }) {
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
    "/assets/image5.jpg",
    "/assets/image6.jpg",
    "/assets/image7.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})`, zIndex: -1 }}
    >
      {children}
    </div>
  );
}

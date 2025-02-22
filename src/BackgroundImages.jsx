import { useEffect, useState } from "react";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/images3.jpg"; // Corrected typo
import image4 from "./assets/image4.jpg";
import image1 from "./assets/image1.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";

export function BackgroundImg({ interval = 8000, children }) {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
  className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center transition-all duration-1000"
  style={{ backgroundImage: `url(${images[currentIndex]})`, zIndex: -1 }}
>

      {children}
    </div>
  );
}
import { useEffect, useState } from "react";
import image2 from "src/assets/image2.jpg?url";
import image3 from "src/assets/image3.jpg?url"; // Corrected typo
import image4 from "src/assets/image4.jpg?url";
import image1 from "src/assets/image1.jpg?url";
import image5 from "src/assets/image5.jpg?url";
import image6 from "src/assets/image6.jpg?url";
import image7 from "src/assets/image7.jpg?url";

export function BackgroundImg({ interval = 8000, children }) {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [currentIndex, setCurrentIndex] = useState(0);

//t
  //srrssr


  ///sr
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
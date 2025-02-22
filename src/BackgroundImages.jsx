import { useEffect, useState } from "react";

const image2 = "/src/assets/image2.jpg";
const  image3 ="/src/assets/image3.jpg"; // Corrected typo
const image4 = "/src/assets/image4.jpg";
const image1 = "/src/assets/image1.jpg";
const image5 = "/src/assets/image5.jpg";
const image6 = "/src/assets/image6.jpg";
const image7 = "/src/assets/image7.jpg";



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
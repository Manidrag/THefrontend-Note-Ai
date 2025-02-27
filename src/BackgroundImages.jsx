import { memo, useEffect, useState } from "react";

export const BackgroundImg = memo(({ interval = 8000, transitionDuration = 500, children }) => {
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
    "/assets/image5.jpg",
    "/assets/image6.jpg",
    "/assets/image7.jpg",
  ];

  // Retrieve the last index from localStorage or default to 0
  const lastIndex = parseInt(localStorage.getItem('lastIndex')) || 0;
  const [currentIndex, setCurrentIndex] = useState(lastIndex);
  const [nextIndex, setNextIndex] = useState((lastIndex + 1) % images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the current and next images
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
       
      };
      img.onerror = (err) => {
       
      };
    };

    preloadImage(images[currentIndex]);
    preloadImage(images[nextIndex]);

    // Set loading to false once the current image is loaded
    const firstImage = new Image();
    firstImage.src = images[currentIndex];
    firstImage.onload = () => {
      setIsLoading(false);
    };
    firstImage.onerror = (err) => {
      console.error("Error loading first image", err);
      setIsLoading(false); // Ensure loading state is cleared even if there's an error
    };

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, transitionDuration); // Duration of the transition
    }, interval);

    return () => clearInterval(timer);
  }, [interval, nextIndex, images, currentIndex, transitionDuration]);

  useEffect(() => {
    // Save the current index to localStorage when it changes
    localStorage.setItem('lastIndex', currentIndex);
  }, [currentIndex]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen">
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-cover bg-center transition-opacity duration-${transitionDuration} ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentIndex]})`, zIndex: -1 }}
      />
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-cover bg-center transition-opacity duration-${transitionDuration} ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[nextIndex]})`, zIndex: -2 }}
      />
      {children}
    </div>
  );
});
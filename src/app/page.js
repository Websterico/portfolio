"use client";
import { useEffect, useState, useMemo } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Wrap texts in useMemo to prevent re-creation on every render
  const texts = useMemo(() => ["WEB DEVELOPER", "FREELANCER", "DESIGNER"], []);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      let updatedText = "";

      if (isDeleting) {
        updatedText = fullText.substring(0, displayedText.length - 1);
      } else {
        updatedText = fullText.substring(0, displayedText.length + 1);
      }

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setSpeed(100);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        if (index === texts.length - 1) {
          setTimeout(() => setIndex(0), 300); // Reset index to start over after a delay
        } else {
          setIndex((prevIndex) => prevIndex + 1);
        }
        setSpeed(150);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, index, speed, texts]);

  return (
    <main className=" bg-black min-h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row p-16 lg:p-6 gap-5 lg:gap-3">
      <div className="background-image"></div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col lg:w-3/4 justify-between gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-center h-2/4 gap-6">
          <div className="w-full sm:h-[25vh] md:h-[30vh] lg:h-[50vh] text-center lg:py-[20%] xl:py-[14%] bx1">
            <h1 className="font-light text-xl">
              HI THERE ! I&apos;M 
            </h1>
            <br />
            <h1 className="font-bold text-5xl">HUSSNAIN</h1>
            <br/>
            <h2 className="font-bold text-2xl text-yellow-500 typing-text">
              <span>{displayedText}</span>
            </h2>
          </div>
          <div className="w-full h-full text-center sm:py-[8%] md:py-[10%] lg:py-[28%] xl:py-[20%] bg-[#222222] bx2">
            <h1 className="font-bold text-5xl">About<span className="text-yellow-500">&nbsp;Me</span></h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center h-2/4 justify-center gap-6">
          <div className="w-full h-full text-center sm:py-[8%] md:py-[10%] lg:py-[28%] xl:py-[20%] bg-[#222222] bx2">
            <h1 className="font-bold text-5xl">My <span className="text-yellow-500">Portfolio</span></h1>
          </div>
          <div className="w-full h-full sm:py-[8%] md:py-[10%] lg:py-[28%] xl:py-[20%] text-center bg-[#222222] bx2">
            <h1 className="font-bold text-5xl">Get <span className="text-yellow-500">In</span><span className="text-yellow-500">Touch</span></h1>
          </div>
        </div>
      </div>
    </main>
  );
}

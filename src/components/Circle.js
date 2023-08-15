import Image from "next/image";
import circle from "@/assets/circle.svg";
import { useState } from "react";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    const newPosition = randomPosition();
    setPosition(newPosition);
  };

  const handleHover2 = () => {
    const newPosition2 = randomPosition();
    setPosition2(newPosition2);
  };

  const randomPosition = () => {
    const range = 200;
    const x = Math.random() * range - range / 2;
    const y = Math.random() * range - range / 2;
    return { x, y };
  };

  return (
    <>
      <div
        className="circle-container"
        onMouseEnter={handleHover}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.3s ease-in",
        }}
      >
        <Image src={circle.src} width={150} height={150} alt="circle" priority />
      </div>
      <div
        className="circle-container"
        onMouseEnter={handleHover2}
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          transform: `translate(${position2.x}px, ${position2.y}px)`,
          transition: "transform 0.5s ease-in",
        }}
      >
        <Image src={circle.src} width={100} height={100} alt="circle" priority />
      </div>
    </>
  );
};

export default Circle;

/* eslint-disable */
import { EasterEgg } from "../components/EasterEgg";
import React, { useEffect, useState } from "react";
import Confetti from 'react-confetti'




export const Home = ({onHandleClick, showEasterEgg, setShowEasterEgg}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [grandOpening, setIsGrandOpening] = useState(false)
  const [counter, setCounter] = useState(5)
  const [showSplit, setShowSplit] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpeningCeremony = () => {
    setShowSplit(true);
    const countdownInterval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 1) {
          return prevCounter - 1;
        } else {
          clearInterval(countdownInterval); // Stops the countdown when it reaches 0.
          setIsGrandOpening(true); // Triggers the confetti.
          setTimeout(() => {
            window.location.assign('/calendar')
          }, 10000)
          return 0;

        }
      });
    }, 1000); // Decreases the counter every second.
  };

  useEffect(() => {
    setShowEasterEgg(false)
  }, [])

  return (
    <div className="homepage pink-background">
      {showSplit && (
        <h1>Quality Think Christmas Contest 2024</h1>
      )}
      {grandOpening && (
        <Confetti
        width={width}
        height={height}
        numberOfPieces={600}
        colors={["#053d28", "#f9dbbd", "#e4b1ab", "#310303", "#142318", "#053d28", "#053d28", "#310303", "#e4b1ab", "#310303", "#f9dbbd", "#f9dbbd"]}
      />
      )}
      <>
      <button className="btn btn--ribbon">
        QTCC 2024
      </button>
        {showSplit && <h3 className="homepage__countdown">{counter > 0 ? counter : 'NU KÖR VI!'}</h3>}
      </>
    
    </div>
  )
}
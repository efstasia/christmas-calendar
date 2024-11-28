/* eslint-disable */
import React, { useState } from "react";
import { Wheel } from 'react-custom-roulette'

export const TeamPicker = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);


  const wheelData = [
    { option: 'Jonathan', style: { backgroundColor: '#310303', textColor: '#e4b1ab' } },
    { option: 'Hannah', style: { backgroundColor: '#053d28', textColor: '#e4b1ab' } },
    { option: 'Patricia', style: { backgroundColor: '#310303', textColor: '#e4b1ab' } },
    { option: 'Alexander', style: { backgroundColor: '#053d28', textColor: '#e4b1ab' } },
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className="pink-background team-picker">
       <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={wheelData}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        outerBorderColor={'#142318'}
        innerBorderColor={'#142318'}
        radiusLineColor={'#142318'}
        fontSize={24}
        disableInitialAnimation={true}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className="btn" onClick={handleSpinClick}>SPIN</button>
      <h2>{wheelData.option}</h2>
    </div>
    
  )

}
/* eslint-disable */
import { EasterEgg } from "components/EasterEgg";
import React, { useEffect, useState } from "react";
import { Wheel } from 'react-custom-roulette'

export const TeamPicker = ({showEasterEgg, setShowEasterEgg}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  let clickCount = 0;

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

  const handleSecretClicks = () => {
    clickCount++;
    if (clickCount === 8) {
      setShowEasterEgg(true);
    }
  };

  useEffect(() => {
    setShowEasterEgg(false)
  }, [])

  const number = 3;

  return (
    <div className="pink-background team-picker">
		  < EasterEgg showEasterEgg={showEasterEgg} number={number}/>
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
      <button className='btn--home btn--custom' tabIndex={-1} onClick={handleSecretClicks}></button>

    </div>
    
  )

}
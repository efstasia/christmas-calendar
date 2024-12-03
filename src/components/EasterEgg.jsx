/* eslint-disable */
import log from "eslint-plugin-react/lib/util/log";
import react, { useState } from "react";

export const EasterEgg = ({showEasterEgg, number}) => {

  return (
    <>
      {showEasterEgg && (
        <div className="container">
          <div className="candycane"></div>
          <div>
            <h2>❅ Grattis! ❅</h2>
            <p className="container__text">Du hittade den magiska godisstången!</p>
            <p className="container__text">Som belöning får ditt lag 10 poäng!*</p>
            <p className="container__text--small">*OBS! Gäller endast en gång per funnet ägg.
            </p>
            <p className="container__text">Godisstång {number} / 3</p>
          </div>
        </div>
      )}
    </>
  );
}
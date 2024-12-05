/* eslint-disable */
import react from "react";

export const BonusPoints = () => {
  return (
    <div className="bonus-points pink-background">
      <h2>Bonuspoäng</h2>
      <ul>
        <li className="bonus-points__list-parent">✨<strong>Grattis</strong> till 20 poäng för flest antal låtar i jullistan: <strong>Julstjärnorna </strong>✨
          <ul>
            <li>⛄️ Snögubbarna: <strong>52 </strong>låtar</li>
            <li>⭐️ Julstjärnorna: <strong>63</strong> låtar</li>
          </ul>
        </li>
        <li className="bonus-points__list-parent">✨<strong>Grattis</strong> till 20 poäng för minihackning: <strong>Julstjärnorna </strong>✨
          <ul>
            <li>⭐️ Jonathan: lyckades hitta innehåll på sidan för en kommande tävling </li>
          </ul>
        </li>
        <li className="bonus-points__list-parent">✨<strong>Grattis</strong> till 20 poäng för flest ledda stand-ups/OS: <strong>Snögubbarna </strong>✨
          <ul>
            <li>⛄️ Snögubbarna: <strong>4 </strong>ledda möten</li>
            <li>⭐️ Julstjärnorna: <strong>2</strong> ledda möten</li>
          </ul>
        </li>
        <li className="bonus-points__list-parent">✨<strong>Grattis</strong> till 20 poäng till laget där medlemmerna individuellt har vunnit flest tävlingar <strong>Julstjärnorna </strong>✨
          <ul>
            <li>⛄️ Snögubbarna: <strong>2 </strong>individuella vinster</li>
            <li>⭐️ Julstjärnorna: <strong>4</strong> individuella vinster</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
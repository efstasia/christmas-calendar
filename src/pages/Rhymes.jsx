/* eslint-disable */
import { EasterEgg } from "components/EasterEgg";
import React, { useEffect, useState } from "react";

export const Rhymes = ({onHandleClick, showEasterEgg, setShowEasterEgg}) => {
	const [allRhymes, setAllRhymes] = useState([])
	const [rhymeName, setRhymeName] = useState('')
	const [rhyme, setRhyme] = useState('')

	const apiUrl = process.env.REACT_APP_API_URL || 'https://jonathan.inte.fuska.qtkul.lol/api/v1'

	const getAllRhymes = () => {
		fetch(`${apiUrl}/rhymes`)
		.then(response => response.json())
		.then((data) => {
			setAllRhymes(data.data)
		})
	}

	const handleRhymeSubmit = (event) => {
    event.preventDefault();
      fetch(`${apiUrl}/rhymes`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
      "name": rhymeName,
      "rhyme": rhyme,
      })
    }).then(() => {
      getAllRhymes()
      setRhymeName('')
      setRhyme('')
    })
	}

	useEffect(() => {
		getAllRhymes()
    setShowEasterEgg(false)
	}, [])

	return (
		<div className="rhymes pink-background">
			<p className="rhymes-intro">HO HO <button  onClick={onHandleClick}>HO</button>! Kära julvänner, vad vore julen utan några kluriga rim? Här bland glitter och granar, där snön faller mjukt, skapar vi magiska verser som värmer hjärtan och lockar till skratt. Så slå dig ner med en kopp rykande glögg och låt orden dansa som flingor i vinden – det är dags att rimma loss, precis som tomten tycker om!</p>
      < EasterEgg showEasterEgg={showEasterEgg} />
			<fieldset className="rhymes-input">
        <legend>Busta rhyme</legend>
        <label htmlFor="name">Namn på rimmet</label>
				  <input onChange={(e) => setRhymeName(e.target.value)} name="rhyme-name" id="rhyme-name"value={rhymeName} type="text" placeholder="Ge rimmet ett namn" />
        <label htmlFor="rhyme">Rimmet </label>
        <textarea onChange={(e) => setRhyme(e.target.value)}  value={rhyme} name="rhyme" id="rhyme" cols="50" rows="10" placeholder="Fyll i rimmet här"></textarea>
        <button className="btn" onClick={handleRhymeSubmit}>Skicka in</button>
			</fieldset>

			<div className="rhymes-container">
				{allRhymes.map((rhyme, index ) => (
          <div className="rhymes-container__rhyme" key={rhyme.id}>
            <h2>{rhyme.name}</h2>
            <p>{rhyme.rhyme}</p>
          </div>
        ))}
			</div>
		</div>
	)
};
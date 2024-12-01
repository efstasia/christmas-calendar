/* eslint-disable */
import { EasterEgg } from "components/EasterEgg";
import React, { useEffect, useState } from "react";

export const Rhymes = ({onHandleClick, showEasterEgg, setShowEasterEgg}) => {
	const [allRhymes, setAllRhymes] = useState([])
	const [rhymeName, setRhymeName] = useState('')
	const [rhyme, setRhyme] = useState('')
	const [canViewRhymes, setCanViewRhymes] = useState(false)

	let rhymeNumber = 1

	function getDate() {
		const currDate = new Date().toLocaleDateString();
		console.log("🚀 ~ getDate ~ currDate:", currDate)
		const currTime = new Date().toLocaleTimeString();

		if (currDate === '03/12/2024' && currTime > '13') {
			setCanViewRhymes(true)
		}
	}

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
		getDate()
	}, [])

	return (
		<div className="rhymes">
		{canViewRhymes ? (
			<div className="rhymes pink-background">
					<div className="rhymes-intro"><p>HO HO <button  onClick={onHandleClick}>HO</button> kära julvänner! ✨ Vad vore julen utan rim som kittlar både hjärtan och skrattmuskler? Här i tomteverkstan, mitt bland glittrande kulor och pepparkaksdoft, klapprar vi ner små rim som landar mjukare än nyfallen snö på taknocken.
					Så hämta en rykande kopp glögg (eller kanske två!), sätt dig bekvämt och låt fantasin flyga högt som tomtens renar en frostig natt. För nu är det dags att rimma så det slår gnistor om granen!
					</p>
					<h3>Regler</h3>
					<ul>
						<li>Varje person får skicka in <strong>ett</strong> rim.</li>
						<li>Alla rim ska vara <strong>anonyma</strong>.</li>
						<li>Tiden för att skicka in ditt rim är från <strong>tisdag 3/12 kl. 13:00</strong> till <strong>onsdag 4/12 kl. 13:00</strong>.</li>
						<li>Varje person får <strong>en röst</strong> att lägga på sitt favoritrim.</li>
						<li>Personen som skrivit rimmet kammar hem <strong>ett poäng</strong> per röst till sitt lag.</li>
						<li>Laget vars medlem skrivit det vinnande rimmet kammar hem <strong>ytterligare 5 poäng.</strong></li>
						<li>Röstningen sker <strong>från och med onsdagen den 4/12 kl. 13:15 till <strong>torsdagen den 5/12 kl. 08:59</strong> då tävlingen avgörs och vinnarna presenteras.</strong></li>
					</ul>
				</div>
					< EasterEgg showEasterEgg={showEasterEgg} />
					<fieldset className="rhymes-input">
						<legend>Busta rhyme</legend>
						<label htmlFor="name">1. Ge rimmet ett namn</label>
							<input onChange={(e) => setRhymeName(e.target.value)} name="rhyme-name" id="rhyme-name"value={rhymeName} type="text" placeholder="T.ex. 'Sagoskogen'" />
						<label htmlFor="rhyme">2. Skriv ditt rim här </label>
						<textarea onChange={(e) => setRhyme(e.target.value)}  value={rhyme} name="rhyme" id="rhyme" cols="50" rows="10" placeholder="T.ex. jul är kul"></textarea>
						<button className="btn" onClick={handleRhymeSubmit}>Skicka in</button>
					</fieldset>

					<div className="rhymes-container">
						{allRhymes.map((rhyme, index ) => (
							<div className="rhymes-container__rhyme" key={rhyme.id}>
								<p className="rhymes__number">{rhymeNumber++}</p>
								<h2>{rhyme.name}</h2>
								<p className="rhymes-container__text">{rhyme.rhyme}</p>
							</div>
						))}
					</div>
				</div>

			): 
			<div className="rhymes-intro red-background">
				<p>
					Vad kan det för nåt på denna sida sig gömma för kul? ni kan nog gissa att det har något att göra med jul.
					Tomtenissarna har i år bakom kulisserna jobbat hårt, att inte något till er dela med sig har varit svårt. 
					Vad detta kan vara får ni vänta lite längre på att få se, närmre bestämt till tisdagen den 3:e! 
					Men deppa icke, ni får ju ändå detta rim att roa er med tills dess. Det är viktigt att vid jul ta ett djupt andetag och släppa på lite stress. ✨
				</p>
			</div>
			}
		</div>
	)
};
// import { useEffect, useState } from 'react'
// import './App.css'
// import SingleCard from './components/SingleCard'

// const cardImages = [
//   {"src": "/img/helmet-1.png", matched: false},
//   {"src": "/img/potion-1.png", matched: false},
//   {"src": "/img/ring-1.png", matched: false},
//   {"src": "/img/scroll-1.png", matched: false},
//   {"src": "/img/shield-1.png", matched: false},
//   {"src": "/img/sword-1.png", matched: false},
// ]


// function App(){
//   const [cards, setCards] = useState([])
//   const [turns, setTurns] = useState(0)
//   const [choiceOne, setChoiceOne] = useState(null)
//   const [choiceTwo, setChoiceTwo] = useState(null)
//   const [disabled, setDisabled] = useState(false)

//   //shuffle cards
//   const shuffleCards  =() =>{
//     const shuffledCards = [...cardImages, ...cardImages]
//     .sort(()=> Math.random() - 0.5)
//     .map((card) => ({ ...card, id: Math.random() }))

//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setCards(shuffledCards)
//     setTurns(0)
//   } 

//   console.log(cards, turns)

//   // handle a choice
//   const handleChoice =(card)=>{
//     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
//   }

//   //reset choice and increase turn.
//   const resetTurn = () => {
//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTurns(prevTurns => prevTurns + 1)
//     setDisabled(false)
//   }

//   //compare two seslected cards
//   useEffect (()=>{
//     if(choiceOne && choiceTwo){
//       setDisabled(true)

//     if(choiceOne.src === choiceTwo.src){
//       setCards(prevCards =>{
//         return prevCards.map(card =>{
//           if(card.src === choiceOne.src){
//             return{...card, matched: true}
//           }else{
//             return card
//           }
//         })
//       })
//       resetTurn()
//     } else {
//       setTimeout(() => {
//         resetTurn()
//       }, 1000);
//     }
//   }
//   }, [choiceOne, choiceTwo])

//   useEffect(()=>{
//     shuffleCards()
//   }, [])


//   return(
//     <div className="App">
//       <h1>Magic Card</h1>
//       <button onClick={shuffleCards}> New Game</button>

//       <div className="card-grid">
//         {cards.map(card => (
//           <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}/>
//         ))}
//       </div>
//         <p>Turns: {turns}</p>
//     </div>
//   )
// }

// export default App




import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'
import Confetti from 'react-confetti' // Optional: confetti celebration

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isWon, setIsWon] = useState(false)

  // Shuffle cards and start new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setIsWon(false) // reset win state
  }

  // Handle a choice
  const handleChoice = (card) => {
    if (card !== choiceOne) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }

  // Reset turn after comparison
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev + 1)
    setDisabled(false)
  }

  // Compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        )
        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // Check if game is won
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setIsWon(true)
    }
  }, [cards])

  // Shuffle cards on first render
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Magic Card</h1>
      <button onClick={shuffleCards}>New Game</button>

      {isWon && (
        <div className="win-message">
          <h2>🎉 You Won! 🎉</h2>
          <p>Total Turns: {turns}</p>
        </div>
      )}

      {isWon && <Confetti />}

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  )
}

export default App
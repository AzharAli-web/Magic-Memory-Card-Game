// import React from 'react'
// import './SingleCard.css'

// const SingleCard = ({card, handleChoice, flipped, disabled }) => {

//     const handleClick = () => {
//        if(!disabled){
//          handleChoice(card)
//        }
//     }


//   return (
//     <div className='card'>
//             <div className={flipped ? "flipped" : ""}>
//               <img className='front' src={card.src} alt='card front' />
//               <img 
//               className='back' 
//               src="/img/cover.png" 
//               alt='card back' 
//               onClick={handleClick}/>
//             </div>
//             </div>
//   )
// }

// export default SingleCard


import React from 'react'
import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => {
    if (!disabled && !flipped) { // 🔥 only allow click if not flipped
      handleChoice(card)
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <img className="front" src={card.src} alt="Magic card front" />
        <img className="back" src="/img/cover.png" alt="Magic card back" />
      </div>
    </div>
  )
}

export default SingleCard
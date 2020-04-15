import React, {useState} from 'react'

export default function Flashcard({flashcards}) {
    const [flip, setFlip] = useState(false)
    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)} >
            <div className ='front'>
                {flashcards.question}
                <div className="flashcard-options">
                    {flashcards.options.map(flashcardOptions => {
                        return <div className = "flashcard-option"> {flashcardOptions}</div>
                    })} 
                </div>
            </div>
            <div className="back">{flashcards.answer}</div>
        </div>
    )
}

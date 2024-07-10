import { useEffect, useState } from 'react'
import './Question.css'

const Question = ({ questionData, onClick }) => {
    const [disabled, setDisabled] = useState(false)

    const handleClick = (answer) => {
        setDisabled(true)
        onClick(questionData.id, answer);
    }

    useEffect(() => {
        setDisabled(false)
    }, [questionData])
    

    return (
        <div className="question-container">
            <p className="question-title">{questionData.question}</p>
            <div className='row-buttons'>
                <button className='answer-button' onClick={() => handleClick("option1")} disabled={disabled}>
                    {questionData.option1}
                </button>
                <button className='answer-button' onClick={() => handleClick("option2")} disabled={disabled}>
                    {questionData.option2}
                </button>
            </div>
            <div className='row-buttons'>
                <button className='answer-button' onClick={() => handleClick("option3")} disabled={disabled}>
                    {questionData.option3}
                </button>
                <button className='answer-button' onClick={() => handleClick("option4")} disabled={disabled}>
                    {questionData.option4}
                </button>
            </div>
        </div>
    )
}

export default Question

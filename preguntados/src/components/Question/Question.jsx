import { useEffect, useState } from 'react'
import './Question.css'
import { postAnswer } from '../../services/api'

const defaultOptions = {
    option1: "",
    option2: "",
    option3: "",
    option4: "",
}

const Question = ({ questionData, onClick }) => {
    const [disabled, setDisabled] = useState(false)
    const [options, setOptions] = useState(defaultOptions);
    const { option1, option2, option3, option4 } = options

    const handleClick = async (answerOption) => {
        setDisabled(true)
        const result = await postAnswer({ questionId: questionData.id, option: answerOption })
        console.log(result)
        if (result.answer) {
            handleAnswer(answerOption, "correct-button")
            console.log("correct")
        } else {
            handleAnswer(answerOption, "incorrect-button")
            console.log("incorrect")
        }
        await onClick(result.answer);
    }

    const handleAnswer = (name, value) => {
        setOptions((prevForm) => ({ ...prevForm, [name]: value }));
      };

    useEffect(() => {
        setOptions(defaultOptions)
        setDisabled(false)
    }, [questionData])
    

    return (
        <div className="question-container">
            <p className="question-title">{questionData.question}</p>
            <div className='row-buttons'>
                <button className={`answer-button ${option1}`} onClick={() => handleClick("option1")} disabled={disabled}>
                    {questionData.option1}
                </button>
                <button className={`answer-button ${option2}`} onClick={() => handleClick("option2")} disabled={disabled}>
                    {questionData.option2}
                </button>
            </div>
            <div className='row-buttons'>
                <button className={`answer-button ${option3}`} onClick={() => handleClick("option3")} disabled={disabled}>
                    {questionData.option3}
                </button>
                <button className={`answer-button ${option4}`} onClick={() => handleClick("option4")} disabled={disabled}>
                    {questionData.option4}
                </button>
            </div>
        </div>
    )
}

export default Question

import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { notificationType } from "../../helpers/notificationType.js";
import './GamePage.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import { getQuestions, postAnswer } from '../../services/api.js';
import Question from '../../components/Question/Question.jsx';
import Loading from '../../components/Loading/Loading.jsx';

const GamePage = ({ notify }) => {
    const navigator = useNavigate()
    const [searchParams] = useSearchParams()
    const difficulty = searchParams.get("type")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(null)
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null)

    const reload = async () => {
        setIsLoading(true)
        setError(false)
        try {
            const questions = await getQuestions(difficulty);
            console.log(questions)
            setAllQuestions(questions);
            setCurrentQuestion(questions.pop());
        } catch (error) {
            setError(true);
            notify("Ha ocurrido un error", notificationType.error);
        } finally {
            setIsLoading(false)
        }
    }

    const onClick = async (questionId, answer) => {
        const result = await postAnswer({ questionId: questionId, option: answer })
        console.log(result)
        if (result === "true") {
            console.log("correct")
        } else if (result === "false") {
            console.log("incorrect")
        }
        if (allQuestions.length === 0) {
            navigator("/home")
        }
        setCurrentQuestion(allQuestions.pop())
    }

    useEffect(() => {
        if (difficulty) {
            reload()
        } else if (difficulty === null) {
            navigator("/newGame")
        }
    }, [difficulty])

    return (
        <div className='game-page' >
            {isLoading && <Loading/> }
            {error && <ErrorMessage onRetry={reload} />}
            {currentQuestion && <Question questionData={currentQuestion} onClick={onClick} />}
        </div>
    )
}

export default GamePage
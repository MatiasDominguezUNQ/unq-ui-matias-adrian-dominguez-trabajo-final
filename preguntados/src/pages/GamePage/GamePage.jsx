import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { notificationType } from "../../helpers/notificationType.js";
import './GamePage.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import { getQuestions } from '../../services/api.js';
import Question from '../../components/Question/Question.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import { saveScore } from '../../helpers/scoreDAO.js';

const delay = ms => new Promise(res => setTimeout(res, ms));
const GamePage = ({ notify }) => {
    const navigator = useNavigate()
    const [searchParams] = useSearchParams()
    const difficulty = searchParams.get("type")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [score, setScore] = useState(0)

    const reload = async () => {
        setIsLoading(true)
        setError(false)
        try {
            const questions = await getQuestions(difficulty)
            setAllQuestions(questions)
        } catch (error) {
            setCurrentQuestion(null)
            setError(true);
            notify("Ha ocurrido un error", notificationType.error);
        } finally {
            setIsLoading(false)
        }
    }

    const onClick = async (result) => {
        let newScore = score
        if (result) {
            newScore++;
            setScore(newScore);
        }
        await delay(1000);
        if (allQuestions.length === 0) {
            saveScore(difficulty, newScore)
            navigator(`/score?type=${difficulty}`)
        }
        nextQuestion()
    }

    const nextQuestion = () => {
        console.log("nextQuestion")
        console.log(allQuestions)
        setCurrentQuestion(allQuestions.pop())
        console.log(currentQuestion)
    }

    useEffect(() => {
        setIsLoading(true)
        if (difficulty === null) {
            navigator("/newGame")
        } else if (!isLoading && !error) {
            reload()
        }
    }, [difficulty])

    useEffect(() => {
        if (currentQuestion === null && allQuestions.length > 0 && !error) {
            nextQuestion()
        }
    }, [allQuestions])

    return (
        <div className='game-page' >
            {isLoading && <Loading/> }
            {error && <ErrorMessage onRetry={reload} />}
            {currentQuestion && (
                <>
                <p className='game-page-score'>Score: {score}</p>
                <Question questionData={currentQuestion} onClick={onClick} />
                </>
            )}
        </div>
    )
}

export default GamePage
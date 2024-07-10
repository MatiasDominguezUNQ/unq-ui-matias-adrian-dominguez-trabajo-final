import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './ScorePage.css'
import { getScore } from '../../helpers/scoreDAO.js';

const ScorePage = () => {
    const navigator = useNavigate()
    const [searchParams] = useSearchParams()
    const difficulty = searchParams.get("type")
    const [score, setScore] = useState(0)

    const onClick = () => {
        navigator("/newGame")
    }

    useEffect(() => {
        const localScore = getScore(difficulty)
        if (localScore !== null) {
            setScore(getScore(difficulty))
        }
    }, [])

    return (
        <div className='score-page-container'>
            <p className='score-text'>Your score for the {difficulty} difficulty is: {score}</p>
            <button onClick={onClick} className='play-button'>Play again?</button>
        </div>
    )
}

export default ScorePage
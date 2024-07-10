import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../../services/api.js'
import { notificationType } from "../../helpers/notificationType.js";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Difficulty from '../../components/Difficulty/Difficulty.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import './NewGamePage.css'
import { deleteScore } from '../../helpers/scoreDAO.js';

const NewGamePage = ({ notify }) => {
    const navigator = useNavigate()
    const [isLoading, setIsLoading] = useState(null)
    const [difficulties, setDifficulties] = useState(null)
    const [error, setError] = useState(false)

    const reload = async () => {
        setIsLoading(true)
        setError(false)
        try {
            setDifficulties(await getDifficulty())
        } catch (error) {
            setDifficulties(null)
            setError(true)
            notify("Ha ocurrido un error de conexión", notificationType.error)
        } finally {
            setIsLoading(false)
        }
    }

    const onClick = async (difficulty) => {
        navigator(`/play?type=${difficulty}`)
    }

    useEffect(() => {
        if (!isLoading && !error) {
            deleteScore()
            reload()
        }
    }, [])

    return (
        <div className='new-game-page' >
            {isLoading && <Loading />}
            {error && <ErrorMessage onRetry={reload} />}
            {difficulties && (
                <>
                    <p className='choose-text'>Choose difficulty</p>
                    {difficulties.map((difficulty, index) => (
                        <Difficulty key={index} type={difficulty} onClick={onClick} />
                    ))}
                </>
            )}
        </div>
    )
}

export default NewGamePage
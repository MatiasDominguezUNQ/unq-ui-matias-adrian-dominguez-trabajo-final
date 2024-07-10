import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../../services/api.js'
import { notificationType } from "../../helpers/notificationType.js";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Difficulty from '../../components/Difficulty/Difficulty.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import './NewGamePage.css'

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
            setError(true)
            notify("Ha ocurrido un error", notificationType.error)
        } finally {
            setIsLoading(false)
        }
    }

    const onClick = async (difficulty) => {
        navigator(`/play?type=${difficulty}`)
    }

    useEffect(() => {
        reload()
    }, [])

    return (
        <div className='new-game-page' >
            {isLoading && <Loading/> }
            {error && <ErrorMessage onRetry={reload} />}
            {difficulties && (
                <>
                    <p className='choose-text'>Choose difficulty</p>
                    {difficulties.map((difficulty) => (
                        <Difficulty type={difficulty} onClick={onClick} />
                    ))}
                </>
            )}
        </div>
    )
}

export default NewGamePage
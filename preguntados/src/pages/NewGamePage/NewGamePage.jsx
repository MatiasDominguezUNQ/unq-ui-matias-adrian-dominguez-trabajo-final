import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../../services/api.js'
import { notificationType } from "../../helpers/notificationType.js";
import './NewGamePage.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Difficulty from '../../components/Difficulty/Difficulty.jsx';

const NewGamePage = ({ notify }) => {
    const navigator = useNavigate()
    const [difficulties, setdifficulties] = useState(null)
    const [error, setError] = useState(false)

    const reload = async () => {
        setError(false)
        try {
            setdifficulties(await getDifficulty())
            console.log(difficulties)
        } catch (error) {
            setError(true)
            notify("Ha ocurrido un error", notificationType.error)
        }
    }

    const onClick = async (difficulty) => {
        navigator(`/playGame?type=${difficulty}`)
    }

    useEffect(() => {
        reload()
    }, [])

    return (
        <div className='new-game-page' >
            {error && <ErrorMessage onRetry={reload} />}
            {difficulties && difficulties.map((difficulty) => <Difficulty type={difficulty} onClick={onClick} />)}
        </div>
    )
}

export default NewGamePage
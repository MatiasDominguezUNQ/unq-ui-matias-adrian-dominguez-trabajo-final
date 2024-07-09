import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const HomePage = ({ notify }) => {
    const navigator = useNavigate()

    const handleStart = () => {
        navigator("/newGame")
    }

    return (
        <div className='home-page'>
            <button className='start-button' onClick={handleStart}>START</button>
        </div>
    )
}

export default HomePage
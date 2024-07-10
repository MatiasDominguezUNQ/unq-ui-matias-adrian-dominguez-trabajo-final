import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.png';
import './HomePage.css'

const HomePage = () => {
    const navigator = useNavigate()

    const handleStart = () => {
        navigator("/newGame")
    }

    return (
        <div className='home-page-container'>
            <img src={logo} alt="Logo" className="logo" />
            <button className='start-button' onClick={handleStart}>START</button>
        </div>
    )
}

export default HomePage
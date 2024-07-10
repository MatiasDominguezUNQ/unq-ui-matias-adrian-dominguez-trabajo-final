import React from 'react'
import ErrorIcon from '../../assets/ErrorIcon.png'
import './ErrorMessage.css'

const ErrorMessage = ({onRetry}) => {
  return (
    <div className='error-message'>
        <img src={ErrorIcon} alt="Error" className="error-icon" />
        <h2>Página no disponible</h2>
        <p>¡Lo sentimos! Inténtalo de nuevo más tarde.</p>
        <button onClick={onRetry} className='retry-button'> Reintentar </button>
    </div>
  )
}

export default ErrorMessage
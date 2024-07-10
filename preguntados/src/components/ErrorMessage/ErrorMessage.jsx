import React from 'react'
import ErrorIcon from '../../assets/ErrorIcon.svg'
import './ErrorMessage.css'

const ErrorMessage = ({onRetry}) => {
  return (
    <div className='error-message'>
        <svg data-src={ErrorIcon}/>
        <h2>Página no disponible</h2>
        <p>¡Lo sentimos! Inténtalo de nuevo más tarde.</p>
        <button onClick={onRetry}> </button>
    </div>
  )
}

export default ErrorMessage
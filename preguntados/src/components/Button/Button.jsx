import React from 'react'
import './Button.css'

const buttonType = {
  mainColor: "main-color",
  secondaryColor: "secondary-color",
  secondaryColorContrast: "secondary-contrast",
  outlinedMainColor: "outlined main-color",
  outlinedSecondaryColor: "outlined secondary-color"
}

const Button = ({ content, variant, onClick, children, enabled = true }) => {
  return (
    <button className={"button " + variant} onClick={onClick} disabled={!enabled}  >
        {children}
        {content}
    </button>
  )
}

export default Button
export { buttonType }

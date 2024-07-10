import './Difficulty.css'

const Difficulty = ({ onClick, type }) => {
  const handleClick = () => {
    onClick(type);
  }

  return (
    <button className="difficulty-button" onClick={handleClick}>
      {type}
    </button>
  )
}

export default Difficulty

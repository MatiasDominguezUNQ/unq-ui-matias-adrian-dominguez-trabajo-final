import './Difficulty.css'

const Difficulty = ({ onClick, type }) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClick = () => {
    onClick(type);
  }

  return (
    <button className="difficulty-button" onClick={handleClick}>
      {capitalizeFirstLetter(type)}
    </button>
  )
}

export default Difficulty

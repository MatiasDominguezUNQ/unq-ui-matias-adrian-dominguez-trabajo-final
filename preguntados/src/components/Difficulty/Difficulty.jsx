import './Difficulty.css'

const Difficulty = ({ onClick, type }) => {
    return (
      <button className="difficulty-button" onClick={onClick}>
          {type}
      </button>
    )
  }
  
  export default Difficulty
  
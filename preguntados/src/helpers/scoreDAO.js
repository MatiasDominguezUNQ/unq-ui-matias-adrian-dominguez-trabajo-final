const deleteScore = () => {
    localStorage.removeItem("easy")
    localStorage.removeItem("medium")
    localStorage.removeItem("hard")
    localStorage.removeItem("extreme")
} 

const getScore = (difficulty) => {
    return localStorage.getItem(difficulty)
}

const saveScore = (difficulty, score) => {
    localStorage.setItem(difficulty, score)
}

export { getScore, saveScore, deleteScore }
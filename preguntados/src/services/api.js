import axios from "axios";

const url = 'https://preguntados-api.vercel.app'
const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

const getDifficulty = async () => {
    const response = await axios.get(`${url}/api/difficulty`)
    return response.data
}

const getQuestions = async (difficulty) => {
    const response = await axios.get(`${url}/api/questions?difficulty=${difficulty}`)
    return response.data
}

const postAnswer = async ({questionId, option}) => {
    const response = await axios.post(`${url}/api/answer`, {questionId, option}, axiosConfig)
    return response.data
}

export {getDifficulty, getQuestions, postAnswer}
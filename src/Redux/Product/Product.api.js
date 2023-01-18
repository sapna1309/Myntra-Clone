import axios from "axios"

export const getMensProductsAPI = async() =>{
    let result = await axios.get(`https://classic-world.onrender.com/MensData`)
    return result.data
}
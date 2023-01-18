import axios from "axios"

export const getMensProductsAPI = async() =>{
    let res = await axios.get(`https://classic-world.onrender.com/MensData`)
    return res.data
}
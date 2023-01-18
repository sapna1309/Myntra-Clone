import axios from "axios"

export const getMensProductsAPI = async() =>{
    let res = await axios.get(`http://localhost:3000/MensData`)
    return res.data
}
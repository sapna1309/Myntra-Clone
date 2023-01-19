import axios from "axios"

export const getMensProductsAPI = async(page) =>{
    let res = await axios.get(`https://classic-world.onrender.com/MensData?_limit=10&_page=${page}`)
    console.log(res.data)
    return res
}

export const getSingleProductAPI = async(id) =>{
    let res = await axios.get(`https://classic-world.onrender.com/MensData/${id}`)
    // console.log(res.data)
    return res
}

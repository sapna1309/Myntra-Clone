import axios from "axios"


export const fetchCartAPI = async () => {
    let res = await axios.get(`https://classic-world.onrender.com/cart`)
    console.log(res?.data)
    return res.data
}
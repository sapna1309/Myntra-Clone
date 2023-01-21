import axios from "axios"


export const fetchCartAPI=async()=>{
    let res = await axios.get(`https://classic-world.onrender.com/cart`)

     console.log( "Cart:", res.data)
     return res.data
}
import axios from "axios"


export const fetchWishlistAPI = async()=>{
         let res = await axios.get(`https://classic-world.onrender.com/wishlist`)

        //  console.log( "fetchCart:", res.data)
         return res.data
}




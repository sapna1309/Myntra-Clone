import axios from 'axios';
//GET-API
export const getAdminMensdataAPI=async()=>{
 let res = await axios.get('https://classic-world.onrender.com/MensData');
 return res.data;
}

export const getAdminWomensdataAPI=async()=>{
    let res = await axios.get('https://classic-world.onrender.com/WomensData');
    return res.data;
}

export const getAdminKidsdataAPI=async()=>{
    let res = await axios.get('https://classic-world.onrender.com/ChildrensData');
    return res.data;
}

//POST-API
export const postAdminMensdataAPI=async(mensProduct)=>{
    let res = await axios.post('https://classic-world.onrender.com/MensData',mensProduct);
    return res.data;
   }
   
   export const postAdminWomensdataAPI=async(womensProduct)=>{
       let res = await axios.post('https://classic-world.onrender.com/WomensData',womensProduct);
       return res.data;
   }
   
   export const postAdminKidsdataAPI=async(kidsProduct)=>{
       let res = await axios.post('https://classic-world.onrender.com/ChildrensData',kidsProduct);
       return res.data;
   }
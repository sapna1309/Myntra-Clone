
import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { auth } from './Components/firebase';
import Navbar from './Components/Navbar';

function App() {
  const [userName, setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
        console.log(user.displayName)
      }else{
        setUserName("")
      }
    })

  },[])
  return (
    <div className="App">
      {/* <Navbar/> */}
     <AllRoutes userName={userName} />
     {/* <Login/> */}
    </div>
  );
}

export default App;

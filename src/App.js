
import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { auth } from './Components/firebase';
import Login from './Pages/Login';

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
     <AllRoutes userName={userName} />
     {/* <Login/> */}
    </div>
  );
}

export default App;

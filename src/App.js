import logo from './images/pwc.png';
import './App.css';
import Page from './Page';
import Profile from './Profile';
import Tasks from './Tasks';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import SignInSide from './Login';
import Header from './Header';
import UnauthHeader from './UnauthHeader';



function App() {
  console.log(localStorage.getItem("user"))

  return (
    <div className="App">
      <div style={{backgroundColor : "#A7BEAE" , height : "100%" , backgroundImage: 'url(${})'}}>
        <div style={{height: "60px" , backgroundColor: "#E7E8D1" , textAlign : "left"  , paddingLeft: "23px"}}>
              <img src={logo} width="60px" border="0" style={{padding: "6px"}}/>
          </div> 
        <BrowserRouter>
          <Routes>
              <Route path="/"  element={<SignInSide />}></Route>
                <Route path="/page" element={<Page />} ></Route>
                <Route path="/profile" element={<Profile />} ></Route>
                <Route path="/tasks" element={<Tasks />} ></Route>
          </Routes>
        </BrowserRouter>
     </div>
     </div>
  );
}


export default App;

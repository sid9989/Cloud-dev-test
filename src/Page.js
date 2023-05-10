import React, {useState, useEffect} from 'react'
import logo from './images/pwc.png';
import axios, * as others from 'axios';
import Profile from './Profile';
import Tasks from './Tasks';
import Link from 'react-router-dom';
import Status from './Status';
import { useLocation } from "react-router-dom";
import HelloBanner from './HelloBanner';
import Header from './Header';
const Page = ({...props}) =>{
    const location = useLocation();
    const employee = location.state;
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");
    // const [employee,setEmployee]= useState({});
    const [viewForm, setviewForm] = useState(true);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [tasks, setTasks]= useState(false);
    const [showIncorrectPass, setShowIncorrectPass] = useState(false);
    const [disclaimer, setDisclaimer] = useState("");
    const submitForm = async (e) =>{
        e.preventDefault()
        await fetch()

       if(password === ""){
            setDisclaimer("Please enter password")
            setShowDisclaimer(true)
        }
        else{
            setShowDisclaimer(false)
        }
    }

    const onChangeValue = (e) =>{
        setValue(e.target.value)
    }

    const logout = () =>{
        setviewForm(true)
        setName("")
        setPassword("")
        setValue("")
        setShowIncorrectPass("")
        setTasks(false)
    }

    const clicktasks = () =>{
        setTasks(true)
    }
    const clickprofile = () =>{
        setTasks(false)
    }

    return(
        <>
        <Header username={employee.username}/>
        <div style={{backgroundColor : "#A7BEAE" , height : "100%" , backgroundImage: 'url(${})'}}>
            <div style={{backgroundColor : "#A7BEAE" }}>              
                        <div style={{padding: "40px 23px 0px 23px" , width: "90%" , alignSelf:"center"}}>
                            <div style={{display: "flex"}}>
                                
                            <Profile employee={employee}/>
                            {employee.role==="employee" ? <Tasks employee={employee}/> : <Status/>}
                            </div>
                        </div>           
            </div> 
        </div>
        </>
    )
    
} 

export default Page
import React, {useState, useEffect} from 'react'
import logo from './images/pwc.png';
import axios, * as others from 'axios';
import Profile from './Profile';


const Page = ({...props}) =>{

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");
    const [employee,setEmployee]= useState({});
    const [viewForm, setviewForm] = useState(true);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [showIncorrectPass, setShowIncorrectPass] = useState(false);
    const [disclaimer, setDisclaimer] = useState("");
    const fetch = () =>{
        axios.get("https://88e51260-e7a7-4b07-af32-fdc87d10345c.mock.pstmn.io/employee/"+name).then(
            (response)=>{
                setEmployee(response.data)
                console.log(employee.password)
                if( password === response.data.password && name !== ""){
                    setviewForm(false)
                }
                else if(password !== ""){
                    setShowIncorrectPass(true)
                }
            }
        )
    }
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

    const onBye = () =>{
        setviewForm(true)
        setName("")
        setPassword("")
        setValue("")
        setShowIncorrectPass("")
    }

    return(
        <div style={{backgroundColor : "#A7BEAE" , height : "100%"}}>
        <div style={{height: "60px" , backgroundColor: "#E7E8D1" , textAlign : "left"  , paddingLeft: "23px"}}>
            <img src={logo} width="60px" border="0" style={{padding: "6px"}}/>
        </div>
        <div style={{height: "100px" , backgroundColor: "#B85042" , display: "flex" , boxSizing:"border-box" , paddingTop: "23px" , paddingBottom: "23px" , textAlign: "left" , paddingLeft: "23px"}}>
            <h1 style={{lineHeight: "39px" , color: "#fff" , margin:"0" , padding: "5px 0" , textAlign: "left"}}>Cloud dev-test Accelerator</h1>
        </div>
        <div style={{backgroundColor : "#A7BEAE" }}>
            <div style={{padding: "100px 25% 0px 25%" , width: "50%" , alignSelf:"center"}}>
                {viewForm ?
                    <form style={{display: "flex" , flexDirection:"column" , padding: "30px 160px" , border: "3px solid #EE4E34" , borderRadius: "10px" , backgroundColor:"#FCEDDA"}}>
                        <label style={{paddingBottom: "10px"}}>Enter your username:
                            <input
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label style={{paddingBottom: "10px"}}>Enter your password:
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        {showIncorrectPass && <div style={{color: "red"}}>Enter correct password</div>}
                        <input type="submit" value="Submit" onClick={submitForm}/>
                    </form>
                    :
                    <div>
                        <p>Hello {employee.username + " " +employee.lastName}, you are an {employee.role}</p>
                        <input type="submit" value="Bye" onClick={onBye}/>
                        <Profile employee={employee}/>
                    </div>
                }
            </div>
        </div>
        </div>
    )
    
}

export default Page
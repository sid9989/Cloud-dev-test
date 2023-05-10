import HelloBanner from "./HelloBanner"
import { useNavigate } from "react-router-dom";

const Header = ( {...props}) =>{
    const navigate = useNavigate()
    const logout = (e) =>{
        e.preventDefault()
        navigate("/")
    }

    return(
        <>
        <div style={{height: "100px" , backgroundColor: "#B85042" , boxSizing:"border-box" , paddingTop: "23px" , paddingBottom: "23px" , paddingRight: "23px" , textAlign: "left" , paddingLeft: "23px" , justifyContent: "space-between" , display: "flex"}}>
            <div>
                <h1 style={{lineHeight: "39px" , color: "#fff" , margin:"0" , padding: "5px 0" , textAlign: "left"}}>Cloud dev-test Accelerator</h1> 
            </div>
            <div style={{color: "#fff" , alignSelf:"center" , fontSize: "24px"}} onClick={logout}>Logout</div>
            
        </div>
        <HelloBanner username={props.username}/>
        </>
    )
}

export default Header
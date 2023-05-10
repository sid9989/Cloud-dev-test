import './Profile.css';

const Profile = ({...props}) =>{
    console.log(props.employee)
    return(
        <div style={{marginTop: "23px" , padding: "30px 30px" , width:"40%" , borderRadius: "40px" , backgroundColor:"rgb(30, 40, 70)" , height:"150px" , color: "#fff"}} >
            <div>
                <h3 style={{marginTop: "0px" , fontFamily:"Aeonik light" , fontSize: "xx-large"}}>Profile</h3>
            </div>
            <div className="Profile-row">
                <div style={{width: "35%"}}>first name</div> 
                <div>:</div>
                <div style={{width: "55%"}}>{props.employee.firstName}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "35%"}}>last name</div> 
                <div>:</div>
                <div style={{width: "55%"}}>{props.employee.lastName}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "35%"}}>email</div> 
                <div>:</div>
                <div style={{width: "55%"}}>{props.employee.email}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "35%"}}>role</div> 
                <div>:</div>
                <div style={{width: "55%"}}>{props.employee.role}</div>
            </div>
        </div>
    )
}

export default Profile
import './Profile.css';

const Profile = ({...props}) =>{
    console.log(props.employee)
    return(
        <div >
            <div>
                Profile
            </div>
            <div className="Profile-row">
                <div style={{width: "45%"}}>first name</div> 
                <div>:</div>
                <div style={{width: "45%"}}>{props.employee.firstName}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "45%"}}>last name</div> 
                <div>:</div>
                <div style={{width: "45%"}}>{props.employee.lastName}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "45%"}}>email</div> 
                <div>:</div>
                <div style={{width: "45%"}}>{props.employee.email}</div>
            </div>
            <div className="Profile-row">
                <div style={{width: "45%"}}>role</div> 
                <div>:</div>
                <div style={{width: "45%"}}>{props.employee.role}</div>
            </div>
        </div>
    )
}

export default Profile
const Summary = ({...props}) =>{

    return(
        <>
        <div style={{backgroundColor: "#3B71CA" , borderRadius: "40px"}}>
        {props.role==="admin" && <div style={{paddingTop: "20px" , color : "#fff" , fontSize: "25px"}}>Team status</div>}
        {props.username && <div style={{paddingTop: "20px" , color : "#fff" , fontSize: "25px"}}>{props.username}'s status</div>}
        <div style={{display: "flex" , justifyContent: "space-evenly" , backgroundColor: "#fff" , padding :"30px" , marginTop: "23px" , borderRadius: "40px"}}>
            <div style={{backgroundColor: "#14A44D" , height: "150px" , width:"250px" , borderRadius:"40px"}}>
                <div style={{color:"#fff" , fontSize: "80px" , fontFamily: "monospace"}}>{props.role==="admin" ? 15 :props.employee.completed}</div>
                <div style={{color:"#fff" , fontSize: "10px"}}>Tasks</div>
                <div style={{color:"#fff" , fontSize: "20px"  , fontFamily: "monospace"}}>completed</div>
            </div>
            <div style={{backgroundColor: "#9FA6B2" , height: "150px" , width:"250px" , borderRadius:"40px"}}>
                <div style={{color:"#fff" , fontSize: "80px" , fontFamily: "monospace"}}>{props.role==="admin" ? 7 :props.employee.inProgress}</div>
                <div style={{color:"#fff" , fontSize: "10px"}}>Tasks</div>
                <div style={{color:"#fff" , fontSize: "20px" , fontFamily: "monospace"}}>in-progress</div>
            </div>
            <div style={{backgroundColor: "#DC4C64" , height:"150px" , width:"250px" , borderRadius:"40px"}}>
                <div style={{color:"#fff" , fontSize: "80px" , fontFamily: "monospace"}}>{props.role==="admin" ? 8 :props.employee.pending}</div>
                <div style={{color:"#fff" , fontSize: "10px"}}>Tasks</div>
                <div style={{color:"#fff" , fontSize: "20px" , fontFamily: "monospace"}}>pending</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Summary
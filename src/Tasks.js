import axios, * as others from 'axios';
import { useEffect, useState } from 'react';
import Summary from './Summary';

const Tasks = ({...props}) => {
    const [data, setData] = useState([]);
    const fetch = () =>{
        axios.get("https://88e51260-e7a7-4b07-af32-fdc87d10345c.mock.pstmn.io/tasks/" + props.employee.username).then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    const [selectStatus,setSelectStatus] = useState("All")
    useEffect(()=>{
        fetch()
    },[])

    return (
        <div style={{ width : "100%"}}>
            
            <div style={{width: "100%" , marginRight:"23px" , marginLeft: "23px"}}>
                <Summary employee= {props.employee}/>
            </div>
            <div style={{width: "100%" , marginRight: "23px" , marginLeft: "23px"}}>
                <div style={{marginTop: "23px" , borderRadius: "40px" , backgroundColor:"#fff"}}>
                <h3 style={{marginTop: "10px" , paddingTop: "23px" , fontSize: "xx-large" , fontFamily: "Aeonik light" , color :"#3B71CA"}}>Tasks</h3>
                    <div onChange={(e)=>setSelectStatus(e.target.value)}>
                        <input type="radio" name="radio-group" value="All" defaultChecked />All
                        <input type="radio" name="radio-group" value="completed" />Completed
                        <input type="radio" name="radio-group" value="in-progress" />In-progress
                        <input type="radio" name="radio-group" value="pending" />Pending
                    </div>
                    <div style={{ paddingTop: "20px" , paddingBottom: "10px" , paddingRight: "23px" , paddingLeft: "23px"}}>
                        {data.map((task)=>
                            {
                                return( selectStatus==="All" ?
                                        <div style={{display: "flex" , margin: "0px 10px 15px 10px" , backgroundColor: "#3B71CA" , padding:"20px 10px" , borderRadius:"10px"}}>
                                            <div  style={{width: "70%" , color: "#fff"}}>{task.data}</div>
                                            <div  style={{width: "30%" , color: "#fff"}}>{task.status}</div>
                                        </div> 
                                    :task.status===selectStatus &&
                                        <div style={{display: "flex" , margin: "0px 10px 15px 10px" , backgroundColor: "#3B71CA" , padding:"20px 10px" , borderRadius:"10px"}}>
                                            <div  style={{width: "70%" , color: "#fff"}}>{task.data}</div>
                                            <div  style={{width: "30%" , color: "#fff"}}>{task.status}</div>
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
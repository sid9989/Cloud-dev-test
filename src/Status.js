import axios, * as others from 'axios';
import { useEffect, useState } from 'react';
import Summary from './Summary';

const Status = ({...props}) => {
    const [data, setData] = useState([]);
    const fetch = () =>{
        axios.get("https://88e51260-e7a7-4b07-af32-fdc87d10345c.mock.pstmn.io/employees").then(
            (response)=>{
                setData(response.data)
            }
        )
    }

    useEffect(()=>{
        fetch()
    },[])
 
    return (
        <div style={{marginLeft: "23px" , width: "100%" , marginTop: "23px"}}>
            <div style={{marginLeft : "10px" , width: "100%"}}>
               <Summary role="admin"/></div>
            <div >
                {data.map((employee)=>{
                    return (
                        <div style={{marginLeft : "10px" , width: "100%" , paddingTop: "20px"}}>
                        <Summary employee={employee} username={employee.username}/>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Status
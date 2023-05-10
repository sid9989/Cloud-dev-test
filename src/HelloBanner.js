import bg from "./checklist.avif"

const HelloBanner = ({...props}) =>{

    return(
        <div style={{backgroundColor:"#fff" , backgroundImage:`url(${bg})` , height: "400px", width:"100%" , backgroundRepeat:"no-repeat" , backgroundPositionX:"right" , backgroundSize:"60% 110%" , backgroundPositionY:"center" , textAlign: "left" , paddingLeft:"50px" }}>
            <div style={{ paddingTop:"150px"}}>
            <div style={{fontSize:"36px"}}>Hello</div>
            <div style={{fontSize: "60px" , color: "rgb(30, 40, 70)" , fontFamily: "Aeonik light"}}>{props.username} ,</div>
            <div style={{fontSize: "50px" , fontFamily: "Aeonik light"}}>Welcome to tasks dashboard</div>
            </div>
        </div>
    )
    
}

export default HelloBanner
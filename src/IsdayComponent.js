import morning from "./image/morning.png"
import night from "./image/night.jpg"
const style = {
    
    height: "50%",
    width: "50%",
    opacity: "0.3",
   
    
}
const IsdayComponent = (props) => {
    if(props.value) {
        return (
            <>
            <img style={style}src={morning} />
            </>
        )
    }
    else {
        return (
            <>
            <img src={night} style={style}/>
            </>
        )
    }
}
export default IsdayComponent;
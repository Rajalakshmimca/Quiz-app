import Header from "./Header";

import quiz_back from "../../Components/Assets/quiz_back.jpg";
const Welcome=()=>{
    const myStyle={
        backgroundImage: `url(${quiz_back})`,
        height:'100%',
        width:'100vw',
        marginTop:'-100px',
        fontSize:'50px',
        
        backgroundRepeat:'no-repeat',
    };
    return(
        <div style={myStyle}>    
            
        </div>
    );
}

export default Welcome;
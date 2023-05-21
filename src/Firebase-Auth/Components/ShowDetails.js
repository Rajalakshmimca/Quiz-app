import { useDispatch } from "react-redux";
import { handleAddLoggedProfile } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import profilePic from "../../Components/Assets/profilePic.jpg";

const ShowDetails=({profileUser, loggedUser})=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    console.log(profileUser);
    console.log(loggedUser);
    const user = profileUser?.find((his) => his.data.email === loggedUser);
    console.log(user);

    const handleClick=()=>{
        dispatch(handleAddLoggedProfile(user));
        navigate("/edit");
    }
    return(
        <div className="showCont">
            <div className="profile">
                <img src={profilePic} alt="profile logo" style={{width:50, height:50}} />
                <p>{user?.data.firstName} {user?.data.lastName}</p>
                
            </div>
            {user&&
            <div className="showDetails">
            <p>First Name : {user.data.firstName}</p>
            <p>Last Name : {user.data.lastName}</p>
            <p>Email : {user.data.email}</p>
            <p>Age: {user.data.age}</p>
            <p>City: {user.data.city}</p>
            <p>State: {user.data.state}</p>
            <p>Country: {user.data.country}</p>
            </div>
            }
        <div >
            <button onClick={handleClick}>Edit</button>
        </div>
        </div>

    );
}

export default ShowDetails;
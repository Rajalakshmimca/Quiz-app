import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { db } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

const EditProfile=()=>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [updateProfile, setUpdateProfile]=useState({});
    const navigate=useNavigate();

    const {loggedProfile}=useSelector((state)=>state);
    console.log(loggedProfile.data.firstName);
    

    //const currentContact=contacts.find((contact)=>contact.id===parseInt(id));

    useEffect(()=>{
        if(loggedProfile.data){
            setFirstName(loggedProfile.data.firstName);
            setLastName(loggedProfile.data.lastName);
            setEmail(loggedProfile.data.email);
            setAge(loggedProfile.data.age);
            setCity(loggedProfile.data.city);
            setState(loggedProfile.data.state);
            setCountry(loggedProfile.data.country);
        }
        },[]);

    const handleUpdate=async(e)=>{
        e.preventDefault();
        const profileDocRef=doc(db, "profiles", loggedProfile.id);
        console.log(profileDocRef);
        try{
            await updateDoc(profileDocRef, {firstName, lastName,
            email, age, city, state, country});
        }catch(error){
            alert(error);
        }
        alert("Successfully updated...");
        navigate("/profile");
    }
        
    return(
        <div>
        <div className="editProfile">
            <p>Update your information...</p>
            <form className="editProfileForm" onSubmit={handleUpdate}>
    
                    <input type="text" 
                    value={firstName} 
                    placeholder="Enter You FirstName..." 
                    onChange={(e)=>setFirstName(e.target.value)}/>
                
                    <input type="text" 
                    value={lastName} 
                    placeholder="Enter You LastName..." 
                    onChange={(e)=>setLastName(e.target.value)}/>
                
                    <input type="email" 
                    value={email} 
                    placeholder="Enter Your Email..." 
                    onChange={(e)=>setEmail(e.target.value)}/>
                

                <input type="age" 
                    value={age} 
                    placeholder="Enter Your Age..." 
                    onChange={(e)=>setAge(e.target.value)}/>
                
                    <input type="city" 
                    value={city} 
                    placeholder="Enter Your City..." 
                    onChange={(e)=>setCity(e.target.value)}/>
                
                    <input type="state" 
                    value={state} 
                    placeholder="Enter Your state..." 
                    onChange={(e)=>setState(e.target.value)}/>
                
                    <input type="country" 
                    value={country} 
                    placeholder="Enter Your Country..." 
                    onChange={(e)=>setCountry(e.target.value)}/>
                
                <div>
                    <button type="Submit">Update</button>
                </div>
                </form>

        </div>
        </div>
    );
}

export default EditProfile;
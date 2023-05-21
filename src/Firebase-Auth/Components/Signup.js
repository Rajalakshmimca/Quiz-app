import "../../App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { handleAddFirstName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import quizLogo from "../../Components/Assets/quizLogo.webp";

const Signup=()=>{

    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [user, setUser]=useState("");

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [profile, setProfile]=useState([]);
    const {score}=useSelector((state)=>state);

    {/*const handleAddDoc = 
    async(e) => {
    e.preventDefault();
    try{
        await addDoc(collection (db, "profiles"),{
            
            firstName:firstName,
            
            created : Timestamp.now(),
        });
    }catch(error){
            alert(error);
        }
    }*/}
    {/*const handleAddChange=(e)=>{
        console.log(e.target.value);
        setFirstName(e.target.value);
        dispatch(handleAddFirstName(e.target.value));
        }*/}
        
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log(user.email);
            setEmail("");
            setPassword("");
            navigate("/");
        })
        .catch((e)=>console.log(e));
        addDoc(collection (db, "profiles"),{
            
            firstName:firstName,
            lastName: lastName,
            email: email,
            age: age,
            city: city,
            state: state,
            country: country,
            score: score,
            
            created : Timestamp.now(),
        });
    
    };
        
    return(
        <div >
            <div className="signUp">
                <img src={quizLogo} style={{width:120, height:70}} alt="quiz logo"/>
            <h1>Let's get started</h1>
            <p>Create an account to access all the quiz challenges.</p>
            <p>It takes less than 1minute to do so.</p>


            <form className="signUpContainer" onSubmit={handleSubmit}>

                                    
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
                
                    <input type="password" 
                    value={password} 
                    placeholder="Enter Your Password..." 
                    onChange={(e)=>setPassword(e.target.value)}/>
                
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
                    <button className="btnSignUp" type="submit">
                        SignUp
                    </button>
                </div>

                <div>
                    <p>Already Registered? <Link to="/">Login Here</Link></p>
                </div>

            </form>
            </div>
        </div>
    );
}

export default Signup;
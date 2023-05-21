
import {AppBar, Button, IconButton, Toolbar, Typography,Box, Container, Tabs, Tab} from "@mui/material";
import quiz from "../../Components/Assets/quiz.jpg";
import profilePic from "../../Components/Assets/profilePic.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Profile from "../../Pages/Profile";
import { useDispatch, useSelector } from "react-redux";
const Header=(props)=>{

    const [loginLogin, setLoginLogin]=useState(false);
    const [value, setValue]=useState();
    const [user, setUser]=useState("");
    const [profiles, setProfiles]=useState([]);
    const [userProf, setUserProf]=useState([]);
    const navigate=useNavigate();
    const {loggedUser,login}=useSelector((state)=>state);
    console.log(login)
    

    const handleLogout=(e)=>{
        signOut(auth)
        .then(()=>{
            setLoginLogin(!login);
            navigate("/");
            window.location.reload();
            
        })
        .catch((err)=>console.log(err))
    };

    return (
        <div>
        <AppBar className="appBar">
            <Toolbar className="toolbar">
            <IconButton
                className="headerLogo"
                onClick={() => navigate("/home")}
            >
            <img src={quiz} style={{ width: 50, height: 50 }} alt="quiz" />
            </IconButton>

            <Typography variant="h4" className="typoQuiz">Intuitive Quiz</Typography>

            <div className="headerTitle">
            {loggedUser && login && (
                <div className="btnHeaderCont">
                    <Button
                    className="btnHome"
                    color="inherit"
                    onClick={() => navigate("/home")}
                    >
                    Home
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/profile")}>
                    Profile
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/history")}>
                    History
                    </Button>
                    <Button
                color="inherit"
                onClick={handleLogout}>
                Logout
                </Button>
                </div>
                )}
            </div>
            {!loggedUser && !login && (
            <div className="btnLogin">
                <Button color="inherit"onClick={() => navigate("/")}>Login</Button>
                <Button color="inherit"onClick={() => navigate("/signup")}>Signup</Button>
            </div>
            )}

            <div>
            
            </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Header;
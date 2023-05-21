import { Route, Routes, NavBar } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "../../Pages/Home";
import { Container, Box } from "@mui/material";
import Result from "../../Pages/Result";
import Quiz from "../../Pages/Quiz";
import Profile from "../../Pages/Profile";
//import Header from "./NavBar";
import EditProfile from "./EditProfile";
import RecentHistory from "./RecentHistory";
import Header from "./Header";
import Welcome from "./Welcome";

//import Home from ".../Pages/Home";

const Auth=()=>{
    return(
        <Box>
            <Header/>
        <Container maxWidth="sm">
            <Box mt="10rem"
            minHeight="100vh"
            >
                
                <Routes>
                    
                    <Route path="/" element={<Login/>}/>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/edit" element={<EditProfile/>}/>
                    <Route path="/history" element={<RecentHistory/>}/>
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                    
                </Routes>
            
            </Box>
        </Container>
        </Box>
    )
}

export default Auth;
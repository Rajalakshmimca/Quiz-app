import QuestionField from "../Components/QuestionField";
import QuestionAmt from "../Components/QuestionAmt";
import ErrorMessage from "../Components/ErrorMessage";
//import Navbar from "../Firebase-Auth/Components/Navbar";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "../Hooks/useAxios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {db, auth } from "../Firebase-Auth/Firebase/firebase";
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { handleAddLoggedUser } from "../redux/actions";
import Header from "../Firebase-Auth/Components/Header";


const Home = () => {
    const [errors, setErrors]=useState(false);
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate=useNavigate();
    //const dispatch=useDispatch();


    const [user, setUser]=useState("");
    const [userId, setUserId]=useState("");
    const [profiles, setProfiles]=useState([]);
    console.log(response);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user.email);
            console.log(user.uid);
            

            if(user){
                setUser(user.email);
                setUserId(user.uid);                
            }

        },[]);


        {/*try{
        addDoc(collection (db, "quizDetails"),{
            user_id : userId,
            firstName:firstName,
            created : Timestamp.now(),
        });
    }catch(error){
            alert(error);
        }*/}
    
    },[]);
    const {question_category, 
        question_difficulty, 
        question_type, 
        question_amount,
        loggedUser,}=useSelector((state)=>state);
        console.log(loggedUser);
    if (loading) {
        return (
            <Box mt={20}>
            <CircularProgress />
        </Box>
    );
    }

    if (error) {
        return (
            <Typography mt={20} color="red" variant="h6">
            Some Went Wrong!
        </Typography>
    );
    }

    const difficulty = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
    { id: "multiple", name: "Multiple" },
    { id: "boolean", name: "True/False" },
    ];

    const handleSubmit = 
    async(e) => {
    e.preventDefault();
    
    if(!question_category|| !question_difficulty || !question_type || !question_amount) 
    {
        setErrors(true);
        return;
    }
    else{
        setErrors(false);
    navigate("/quiz");
    }
    };
    return (
    <Container sx={{alignItems: "center"}}>
        
        <Typography variant="h5" >Welcome, {user}</Typography>
        
    <form onSubmit={handleSubmit}>
        {errors && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}
        
        <QuestionField options={response.trivia_categories} label="Category" />
        <QuestionField options={difficulty} label="Difficulty" />
        <QuestionField options={typeOptions} label="Type" />
        <QuestionAmt />
        <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
            Get Started
            </Button>
            
        </Box>
        
    </form>
    
    
    </Container>
    );
};

export default Home;

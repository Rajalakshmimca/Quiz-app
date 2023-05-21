import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import history from "../../Components/Assets/history.jpg";

const RecentHistory=()=>{

    const {
        question_category,
        question_difficulty,
        question_type,
        question_amount,
        score,
        loggedUser,
        scores,
        loggedProfile,
    }=useSelector((state)=>state);
    console.log(question_category);
    const [highScore, setHighScore]=useState(0);
    console.log(scores);
        const { response,loading,error } = useAxios({ url: "/api_category.php" });
        console.log(response);
        useEffect(()=>{
            if(scores){
            setHighScore(scores.reduce(function(a,b){
            return (a>b)?a:b}));
            }
        },[]);
        
        console.log(highScore);

        
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
    
        const options=response?.trivia_categories;
        console.log(options);
        console.log(options[0].id)
        const category_name=options?.find
        ((option)=>option.id===question_category);
console.log(category_name);
    return(
        <div>
        <div className="history">
            
            <h3>Your recent played History</h3>
            {(!question_category|| 
            !question_difficulty || !question_type || !question_amount)?
            <div><p>There is no history</p></div>
            :<>
            <div className="historyDetails">   
            <p>
            category :{category_name?.name}
            </p>

            <p>
            Difficulty : {question_difficulty}
        </p>

        <p>
            Type : {question_type}
        </p>

        <p>
            Highest Score: {highScore}
        </p>
        </div>
        </>
}
        </div>
        </div>
        
    );
}

export default RecentHistory;
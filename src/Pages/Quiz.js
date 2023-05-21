import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { handleAddCategoryName, handleAddHighestScore, handleChangeScore } from "../redux/actions";
import {decode} from "html-entities";

const getRandomInt=(max)=>{
  return Math.floor(Math.random()*Math.floor(max));
};
const Quiz=()=>{

  const {
      question_category,
      question_difficulty,
      question_type,
      question_amount,
    score,
  }=useSelector((state)=>state);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [category, setCategory]=useState("");
  console.log(question_category)

    let apiUrl=`/api.php?amount=${question_amount}`;

    if(question_category){
      apiUrl=apiUrl.concat(`&category=${question_category}`);
    }

    if(question_difficulty){
      apiUrl=apiUrl.concat(`&difficulty=${question_difficulty}`);
    }

    if(question_type){
      apiUrl=apiUrl.concat(`&type=${question_type}`);
      console.log(apiUrl);
    }

    console.log(apiUrl);

    const {response, loading}=useAxios({url:apiUrl});
    const [questionIndex, setQuestionIndex]=useState(0);
    const [options, setOptions]=useState([]);
    
    console.log(response);
    useEffect(()=>{
        

      if(response?.results.length){
        //console.log(response.results[questionIndex].category);
        const question=response.results[questionIndex];
        let answers=[...question.incorrect_answers];
        answers.splice(
          getRandomInt(question.incorrect_answers.length),
          0,question.correct_answer
        );
        setOptions(answers)
        console.log(options);
      }
      
    },[response, questionIndex]);

    if(loading){
      return(
        <Box mt={20}><CircularProgress/></Box>
      )
    }

    const handleAnswerCheck=(e)=>{
      const question=response.results[questionIndex];
      if(e.target.textContent===question.correct_answer){
        dispatch(handleChangeScore(score+1));
      }

      if(questionIndex+1<response.results.length){
        setQuestionIndex(questionIndex+1);
      }

    else{
      dispatch(handleAddHighestScore(score));
      //dispatch(handleAddTotalQuestions(question_amount));
      navigate("/result");
    }
    };

    const handleClickQuit=()=>{
      navigate("/home");
      dispatch(handleChangeScore(0));
    }
    console.log(response.results[questionIndex].category);
    return (
      <Box>
        <Typography variant="h5" mt={3}>
          category : {response.results[questionIndex].category}
        </Typography>
        <hr />
        <Typography variant="h6" mt={3}>
          Questions {questionIndex + 1}
        </Typography>
        <Typography mt={5}>
          {decode(response.results[questionIndex].question)}
        </Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id} >
            <Button variant="contained" size="small" onClick={handleAnswerCheck}>
              {decode(data)}
            </Button>
          </Box>
        ))}

        <Box mt={5}>
          Score: {score}/{response.results.length}
        </Box>
        <Box mt={3}>
          <Button variant="outlined" color="error" onClick={handleClickQuit}>
            Quit
          </Button>
        </Box>
      </Box>
    );
}

export default Quiz;
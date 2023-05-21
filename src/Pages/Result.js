import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  handleChangeScore } from "../redux/actions";

const Result=()=>{
    const dispatch=useDispatch();
    const { score } = useSelector((state) => state);
    const navigate=useNavigate();
    console.log(score);

    const handleClickHome=()=>{
        navigate("/home");
        dispatch(handleChangeScore(0));
        
    }
    return(
        <Box mt={20}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                Final Score: {score}
            </Typography>

            <Button variant="outlined" onClick={handleClickHome}>Back To Settings</Button>
        </Box>
    )
}

export default Result;
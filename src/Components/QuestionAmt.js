import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { handleChangeAmount } from "../redux/actions";

const QuestionAmt=()=>{
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        dispatch(handleChangeAmount(e.target.value));
    }
    return(
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
                <TextField 
                type="number"
                size="small"
                variant="outlined"
                label="Amount Of Questions"
                onChange={handleChange}/>

                
            </FormControl>
        </Box>
    )
}

export default QuestionAmt;
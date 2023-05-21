import { Button, Typography } from "@mui/material";
import {Box} from "@mui/system";
const ErrorMessage=({children})=>{
    return (
        <Box>
            
            <Typography color="error">{children}</Typography>
        
        </Box>
    );
}

export default ErrorMessage;
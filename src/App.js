import  {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Result from "./Pages/Result";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Auth from  "./Firebase-Auth/Components/Auth";
import Header from "./Firebase-Auth/Components/Header";


function App() {

    return (
      <div className="app">
        
        <Box textAlign="center" mt={5}>
          <Auth />
        </Box>
      </div>
    );
      {/*<BrowserRouter>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Typography variant="h4">INTUITIVE QUIZ HUB</Typography>
            <hr/>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/quiz" element={<Quiz />} />

              <Route path="/result" element={<Result />} />
            </Routes>
          </Box>
        </Container>
    </BrowserRouter>*/}
  
    
}

export default App;

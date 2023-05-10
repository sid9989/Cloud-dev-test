import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import background from "./team.jpeg"
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';
import UnauthHeader from "./UnauthHeader";

export default function SignInSide() {
    let navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username=data.get("username");
    let password=data.get("password");
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
    localStorage.setItem("user", username);
    fetch(username, password)
  };

  const fetch = (username, password) =>{
    axios.get("https://88e51260-e7a7-4b07-af32-fdc87d10345c.mock.pstmn.io/employee/"+username).then(
        (response)=>{
            if( password === response.data.password && username !== ""){
                navigate("/page" , {state: response.data})
            }
            else{
                alert("wrong pass")
            }
        }
    )
}
  
  
  return (
    <>
    <UnauthHeader/>
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop:15,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h2" variant="h5" sx={{fontSize: "32px" , fontFamily: "Aeonik Light" , color:"rgb(30, 40, 70)"}}>
                Welcome to
              </Typography>
              <Typography component="h2" variant="h5" sx={{fontSize: "44px" , fontFamily: "Aeonik Light" , color:"rgb(30, 40, 70)"}}>
                Team portal
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );}
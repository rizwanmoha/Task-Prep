import React, { useState } from 'react'
import { Avatar, Typography, Button, TextField, Box, styled } from '@mui/material';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Maindesign = styled(Box)`
display : flex;
flex-direction : column;
align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  margin : 
`
const Belowbox = styled(Box)`
display : flex;
justify-content: flex-end;
  margin-left: auto;
 
`




const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.username == 'foo' && inputs.password == 'bar') {
      localStorage.setItem("userId", "Login");
      toast.success("User login Successfully");
      navigate("/home");
    }
    else {
      toast.success("Invalid  details ");
    }
  };
  return (
    <>



      <div style={{
        marginLeft: '20%', marginRight: '20%', background: 'linear-gradient(to bottom, #f5f5f5, #ffffff)', marginTop: '4rem', padding: '4rem', borderRadius: '5rem'
      }}>

        <Maindesign>
          <Avatar
            alt="Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU"
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '2px solid #000',
            }}
          />

          <Typography variant="h3" sx={{ my: 2 }}>Welcome !</Typography>
          <Typography >Let's Connect To your Workspace </Typography>
          <Typography >Please Enter your  details to continue</Typography>

          <TextField placeholder="username"
            value={inputs.username}
            name="username"
            margin="normal"
            type={"text"}
            required
            onChange={handleChange} variant="outlined" sx={{
              width: '70%', my: 2, '&:hover': {
                borderColor: 'blue',
              },
            }} />
          <TextField placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange} variant="outlined" sx={{
              width: '70%', my: 2, '&:hover': {
                borderColor: 'blue',
              },
            }} />
          <Box>
            <Belowbox>
              <Typography sx={{ my: 2 }} > Forgot Password ?</Typography>
            </Belowbox>
          </Box>
          <Button variant="contained" onClick={handleSubmit} sx={{ width: '70%' }}>Sign in</Button>
        </Maindesign>
      </div>


    </>
  )
}

export default Login



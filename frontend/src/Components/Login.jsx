import React  , {useState} from 'react'
import { Avatar, Typography, Button, TextField, Box, styled } from '@mui/material';
// import axios from 'axios';

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
    const  [userName  , setUsername] = useState();
    const  [password  , setpassword] = useState();

    return (
        <>
            
            


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
                <Typography >Please Enter your to continue</Typography>

                <TextField label="Email" variant="outlined" sx={{ width: '30%' , my: 2 ,  '&:hover': {
      borderColor: 'blue',
    },}}  />
                <TextField label="Password" type="password" variant="outlined" sx={{ width: '30%' , my: 2 ,  '&:hover': {
      borderColor: 'blue',
    }, }} />
                <Box>
                <Belowbox>
                <Typography  sx={{my: 2}} > Forgot Password ?</Typography>
                </Belowbox>
                </Box>
                <Button variant="contained" sx={{ width: '30%' }}>Sign in</Button>
            </Maindesign>


        </>
    )
}

export default Login

// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       <h1>hello world </h1>
//     </div>
//   )
// }

// export default Login



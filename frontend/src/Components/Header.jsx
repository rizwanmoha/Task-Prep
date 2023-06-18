import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const handleSubmit= async (e) => {
        localStorage.removeItem('myItem');
        toast.success("User logout  Successfully");
        navigate("/");
    }


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button  onClick={handleSubmit} color="inherit">Logout </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

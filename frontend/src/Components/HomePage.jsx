

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  CircularProgress,
  Button,
  Skeleton
} from '@mui/material';
// import Skeleton from '@material-ui/lab/Skeleton';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [count , setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=500');
      // console.log(response);
      const { results } = response.data;
      if((count+50) >= results.length){
        // count = results.length;
        setHasMore(false);
      }
      const element = results.slice(0, count + 50);
      
      setUsers(element);

      setCount(count + 50 );
      console.log(users);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   
    fetchUsers();
  }, []); // Empty dependency array to trigger the effect only once on initial component mount

  
  const handleLoadMore = () => {
    setLoading(true);
    setShowLoader(true);

    setTimeout(() => {
      setLoading(false);
      setShowLoader(false);
      // Perform additional logic here, such as fetching more data
    }, 1000);

    fetchUsers();
  };
   

  return (
    <>
      {/* <div style={{ overflow: 'auto', height: '100vh' }}> */}
      {/* <Grid container spacing={2}> */}
      {users.map((user, index) => (
        <Grid item key={user.login.uuid} xs={12} sm={12} md={42} lg={4}>

          <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemAvatar>
              <Avatar alt={user.name.first} src={user.picture.medium} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name.title + ' ' + user.name.first}
              secondary={user.name.last}
            />

          </ListItem>
        </Grid>
      ))}
      <div>
      {hasMore && (
         <Button onClick={handleLoadMore}  variant="contained">
       Load More
   </Button>
   )}
   {showLoader && (
        <div>
          <Skeleton variant="rect" width={200} height={40} />
        </div>
      )}

      </div>
      {/* </Grid>
     </div>        */}

{/* // disabled={loading} */}



    </>
  );
};

export default HomePage;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,

  Button,

} from '@mui/material';
import Spinner from './Spinner';
import Header from './Header';


const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=500');

      const { results } = response.data;
      if ((count + 50) >= results.length) {

        setHasMore(false);
      }
      const element = results.slice(0, count + 50);

      setUsers(element);

      setCount(count + 50);


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    fetchUsers();
  }, []);


  const handleLoadMore = () => {
    setLoading(true);
    setShowLoader(true);

    setTimeout(() => {
      setLoading(false);
      setShowLoader(false);

    }, 1000);

    fetchUsers();
  };


  return (
    <>

      <Header />

      <div style={{
        marginLeft: '10%', marginRight: '10%', background: 'linear-gradient(to bottom, #f5f5f5, #ffffff)', marginTop: '4rem', padding: '4rem', borderRadius: '5rem'
      }}>

        {users.map((user, index) => (
          <Grid item key={user.login.uuid} xs={12} sm={12} md={42} lg={12}>

            <ListItem  >

              <ListItemText
                primary={user.name.title + ' ' + user.name.first + ' ' + user.name.last}

              />

              <ListItemAvatar>
                <Avatar alt={user.name.first} src={user.picture.medium} />
              </ListItemAvatar>

            </ListItem>
          </Grid>
        ))}


        <div>
          {hasMore && (

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={handleLoadMore} variant="outlined">Load More</Button>

            </div>
          )}
          {showLoader && <Spinner />
          }

        </div>
      </div>


    </>
  );
};

export default HomePage;





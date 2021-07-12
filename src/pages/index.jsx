import React from 'react';
import {Box} from '@chakra-ui/react';
import {Router} from "@reach/router";
import Navbar from 'src/components/navbar';
import Users from './users';


function App() {
  return (
    <Box minH="100vh" bgColor="gray.100">
      <Navbar />
      <Router>
        <Users path="/users" />
      </Router>
    </Box>
  );
}

export default App;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FilterRate from './FilterRate';
import FilterText from './FilterText';



export default function Navbar({setRate, rate, setText}) {
  return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' position="static" >
        <Toolbar>
          <Typography variant="h5" component="div"  sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
           <FilterText setText={setText} />
          <FilterRate setRate={setRate} rate={rate} />
         
        </Toolbar>
       
      </AppBar>
    </Box>
  );
}





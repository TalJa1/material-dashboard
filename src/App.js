import * as React from 'react'
import {
  Box,
  Grid
} from '@mui/material'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { border } from '@mui/system';

const data = {
  typography: 'Tai~Dashboard',
  router: [
    'Dashboard',
    'Tables',
    'Billing',
    'RTL',
    'Notifications',
    'Profiles',
    'Sign in',
    'Sign up'
  ],
}

// For making left container
const LeftGridcontainer = () => {
  return (
    <Box className='left-data'
      sx={{
        position: 'relative',
        height: '97%',
        width: '90%',
        pt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        border: '1px solid black',
        borderRadius: '5px'
      }}>
      <LeftUpperContent />
    </Box>
  )
}

const LeftUpperContent = () => {
  return (
    <Box className='upper-left'
      sx={{
        width: '80%',
        height: '5%',
        mt: 2,
        borderBottom: '1.5px solid',
        textAlign: 'center',
      }}>
      <CurrencyExchangeIcon
        sx={{
          color: 'white'
        }} />
      <span style={{
        fontSize: '1.5em',
        color: 'white'
      }}>
        {data.typography}
      </span>
    </Box>
  )
}
// End left container


// For making right container

// End right container

function App() {
  return (
    <Grid className="App" container spacing={2}>

      {/* Left Grid */}
      <Grid className='left-Grid'
        item xs={3}
        sx={{
          height: '100vh',
          backgroundAttachment: 'fixed',
        }}>
        <LeftGridcontainer />
      </Grid>

      {/* Right Grid */}
      <Grid className='right-Grid'
        item xs={9}
        sx={{
        }}>

      </Grid>
    </Grid>
  );
}

export default App;

import * as React from 'react'
import {
  Box,
  Grid,
} from '@mui/material'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const data = {
  typography: 'Tai~Dashboard',
  routers: [
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
        margin: '1rem',
        position: 'relative',
        height: '97%',
        width: '250px',
        pt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        borderRadius: '5px',
        backgroundColor: 'rgb(31, 40, 62)',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
      }}>
      <LeftUpperContent />
      <hr className='hr'
        style={{
          border: '0',
          height: '1px',
          width: '100%',
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.005), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.005))'
        }} />
      <LeftMiddleContent />
    </Box>
  )
}

const LeftMiddleContent = () => {
  return (
    //Change it into ul tag
    <Box className='middle-left'
      sx={{
        width: '100%'
      }}>
      {data.routers.map(x =>
        <ul className='midle-left-data'
          style={{
            listStyleType: 'none',
            textAlign: 'left',
            padding: 0,
            color: 'white',
          }}>
          <li>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                g
              </Grid>
              <Grid item xs={9}>
                {x}
              </Grid>
            </Grid>
          </li>
        </ul>
      )}
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
          // width:'',
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

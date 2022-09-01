import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './App.css';
import { Black } from './sections/black';
import { Orange } from './sections/orange';
import { Purple } from './sections/purple';


const App = () => {

const navItems = ['Home', 'About', 'Contact'];

  return (
    <div className="App">
      <AppBar>
        <Toolbar className='nav'>
          <Box className='nav'sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
     
      <main className="App-main">
        <Black key={'rcdrv'}/>
        <Orange key={'skdem'}/>
        <Purple key={'wiccw'} />
      </main>
    </div>
  );
}

export default App;

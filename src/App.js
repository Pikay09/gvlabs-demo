import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './App.css';
import { Black } from './sections/black';
import { Orange } from './sections/orange';
import { Purple } from './sections/purple';
import { BlueSec } from './sections/blue';
import { Purplish } from './sections/purplish';
import { Sponsors } from './sections/sponsors';
import { Frame } from './sections/frame-plain';
import { FrameAnimate } from './sections/frame-animate';

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
        <BlueSec key={'vevvr'}/>
        <Purplish key={'cwnlc'}/>
        <Frame key={'frwgh'}/>
        <FrameAnimate key={'efrg'}/>
        <Sponsors key={'kfegf'}/>
      </main>
    </div>
  );
}

export default App;

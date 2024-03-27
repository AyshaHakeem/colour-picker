import * as React from 'react';
import { ChromePicker } from 'react-color';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DemoBox from './DemoColorBox'

const drawerWidth = 500;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPalettePage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("purple");
  const [colorArray, setColorArray] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeColor = (newColor) => {
    setColor(newColor.hex);
  };

  const addColorBox = (newColor) => {
    setColorArray([...colorArray, newColor]);
    console.log([...colorArray, newColor]);
  }

  const removeColor=(color) => {
    let newarr = colorArray.filter(c => c!==color)
    setColorArray(newarr)
  }

  let boxes = colorArray.map(color => <DemoBox color={color} removeColor={()=>removeColor(color)} />)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Divider />

        <Button variant="contained" color="error">
            CLEAR PALETTE
        </Button>
        <Button variant="contained" color="secondary">
            RANDOM COLOR
        </Button>

        <ChromePicker
          color={color}
          onChangeComplete={(newColor) => changeColor(newColor)}
        />
        
        <Button variant="contained" color="primary" style={{ backgroundColor: color }}
        onClick={()=>addColorBox(color)}
        >
            ADD COLOR
        </Button>
        <Divider />
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <h1>New Palette Content</h1>
        <div>
          {boxes}
          {/* <DemoBox color='black' /> */}
        </div>

      </Main>
    </Box>
  );
}
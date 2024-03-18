import logo from './logo.svg';
// import {Routes, Route} from 'react-router-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import seedColors from './seedColors'
// import {generatePalette} from './colorHelpers'
import PaletteParent from './PaletteParent'
function App() {
  return (

    <PaletteParent />

    // <Routes>
    //   <Route
    //   exact  
    //   path='/' 
    //   render={()=><h1>Choose from individual palettes</h1>}
    //   />
    //   <Route 
    //   exact
    //   path='/palette'
    //   element={<Palette palette={generatePalette(seedColors[4])} />} 
    //   />
    // </Routes>
  
  );
}

export default App;

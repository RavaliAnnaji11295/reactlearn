import React from 'react';
import Category from './Category.js';
import './App.css';
import { Slide } from 'react-slideshow-image';
import Surprice from './Surprice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const slideImages = [
  'https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg?cs=srgb&dl=woman-standing-on-volkswagen-beetle-3342697.jpg&fm=jpg',
  'https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg?cs=srgb&dl=macbook-pro-beside-dslr-camera-and-mug-3568521.jpg&fm=jpg',
  'https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?cs=srgb&dl=person-s-holds-brown-gift-box-842876.jpg&fm=jpg'
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const App = () => {
  return (
    <div className="slide-container">
      {/* <div className="inside-slide"> */}
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})`, 'backgroundSize': `100%`, 'height': `100%` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})`, 'backgroundSize': `100%`, 'height': `100%` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})`, 'backgroundSize': `100%`, 'height': `100%` }}>
          </div>
        </div>
      </Slide>
      {/* </div> */}
      <div> <Category /></div>
      <div>
        <Router>
          <Switch>
            <Route path="/surprice">
              <Surprice />
            </Route>
            <Route path="/shopping">
              <Surprice />
            </Route>
            <Route path="/footwear">
              <Surprice />
            </Route>
            <Route path="/eating">
              <Surprice />
            </Route>
            <Route path="/travel">
              <Surprice />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;

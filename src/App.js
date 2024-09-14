import logo from './logo.svg';
import './App.css';
import LoginComponent from './Components/TaskOne/LoginComponent';
import CounterComponent from './Components/TaskTwo/CounterComponent';
import ProductDataComponent from './Components/TaskTwo/ProductDataComponent';
import ComponentOne from './Components/TaskThree/ComponentOne';
import React from 'react';
import { MyProvider } from './Components/TaskThree/Context';
import CounterComponentEX from './Components/TaskFour/CounterComponentEX';
import GreetingComponent from './Components/TaskFive/GreetingComponent';
import IntervalCounter from './Components/TaskSix/IntervalCounter';
import WindowResize from './Components/TaskSeven/WindowResize';
import MouseTracker from './Components/TaskSeven/MouseTracker';
import Comments from './Components/TaskEight/Comments';
import SearchComments from './Components/TaskNine/SearchComments';


function App() {
  return (
    <div className="App">
      {/* <LoginComponent/> */}
      {/* <CounterComponent/> */}
      {/* <ProductDataComponent/> */}
      {/* <MyProvider>
        <ComponentOne/>
      </MyProvider> */}
      {/* <CounterComponentEX/> */}
      {/* <GreetingComponent/> */}
      {/* <IntervalCounter/> */}
      {/* <WindowResize/> */}
      {/* <MouseTracker/> */}
      {/* <Comments/> */}
      <SearchComments/>
      
    </div>
  );
}

export default App;

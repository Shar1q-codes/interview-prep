
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LifeCycleMethods from './Day 4/LifeCycleMethods';
import Context from './Day 4/UseContext/Context';
import UseMemo from './Day 4/UseMemo';
import UseRef from './Day 4/UseRef';
// import Nav from './Day 2/Nav';
// import About from './Day 2/routes/About';
// import Home from './Day 2/routes/Home';
// import Pagenotfound from './Day 2/routes/Pagenotfound';
// import UseEffectHook from './Day 3/UseEffectHook';
// import UseStateHook from './Day 3/UseStateHook';
// import ClassComponent from './Components/ClassComponent';
// import FunctionalComponent from './Components/FunctionalComponent';



function App() {
  return (
    <div className="App">
      {/* <ClassComponent/>
      <FunctionalComponent/> */}
      {/* <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element = {<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <UseStateHook/>
      <UseEffectHook/> */}
      <UseMemo/>
      <UseRef/>
      <Context/>
      <LifeCycleMethods/>
    </div>
  );
}

export default App;

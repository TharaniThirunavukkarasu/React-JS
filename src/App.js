import logo from './logo.svg';
import './App.css';
import Hello from './components/helloWorld/helloWorld';
import Card from './components/congrats card/congratscard';
import Superover from './components/superover/super-over';
 import Social from './components/social buttons/social-button';
import Notification from './components/notifications/notification-task';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './components/menus/menu';
import Login from './components/Login page/login-page'
import Technology from './components/technology card/technology-card'
import Hooks from './components/hooks/hooks-assign'
import Fruits from './components/Fruits counter/fruits-counter'
import Display from './components/json/json-card'
import Feedback from './components/feedback/feedback-app'
import Home from './portpolio/Home/port-home';
import About from './portpolio/About/port-about'
import Qualification from './portpolio/Qualification/port-quali'
import Certificate from './portpolio/Certificate/port-certifi';
import Service from './portpolio/our service/port-service';
import Menus from './portpolio/portpolio menu/portpolio-menu'




function App() {
  return (
 <BrowserRouter>
  <Routes>
  <Route path='/' element={<Menus/>}/>
  <Route path='Home' element={[<Menus/>,<Home/>]}/>
    <Route path='About' element={[<Menus/>,<About/>]}/>
<Route path='Qualification' element={[<Menus/>,<Qualification/>]}/>
 <Route path='Certificate' element={[<Menus/>,<Certificate/>]}/>
 <Route path='Service' element={[<Menus/>,<Service/>]}/>
   </Routes>
</BrowserRouter> 
  ) 





//  <BrowserRouter>
// <Routes>
//   <Route path='/' element={<Menu/>}/>
//   <Route path='Hello' element={[<Menu/>,<Hello/>]}/>
//   <Route path='Congratscard' element={[<Menu/>,<Card/>]}/>
//   <Route path='Superover' element={[<Menu/>,<Superover/>]}/>
//   <Route path='Social' element={[<Menu/>,<Social/>]}/>
//   <Route path='Notification' element={[<Menu/>,<Notification/>]}/>
//   <Route path='Login' element={[<Menu/>,<Login/>]}/>
//   <Route path='Technology' element={[<Menu/>,<Technology/>]}/>
//   <Route path='Technology' element={[<Menu/>,<Technology/>]}/>
//   <Route path='Hooks' element={[<Menu/>,<Hooks/>]}/>
//   <Route path='Fruits' element={[<Menu/>,<Fruits/>]}/>
//   <Route path='Display' element={[<Menu/>,<Display/>]}/>
//   <Route path='Feedback' element={[<Menu/>,<Feedback/>]}/>
  

   
//  </Routes>
// </BrowserRouter>

  
}

export default App;

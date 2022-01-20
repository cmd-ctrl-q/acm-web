import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home.js';
import Calendar from './Pages/Calendar/CalendarApp.js';
import Officers from './Pages/Officers/Officers.js'
import Resources from './Pages/Resources/Resources.js';
import Footer from './Components/Footer/Footer.js';
import ScrollToTop from './Components/BackTop/BackTop.js';
import Membership from './Pages/Membership/Membership';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={'/calendar'} component={Calendar} />
          <Route path={'/officers'} component={Officers} />
          <Route path={'/resources'} component={Resources} />
          <Route path={'/membership'} component={Membership}/>
        </Switch>
        
      </BrowserRouter>
      
      <Footer/>
      <ScrollToTop />
    </div>

  );
}

export default App;

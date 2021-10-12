import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import NowPlaying from './components/pages/NowPlaying';
import TopRated from './components/pages/TopRated';

function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/now-playing" component={NowPlaying} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;

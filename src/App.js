import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Route path='/Dialogs' component={Dialogs} />
        <Route path='/Profile' component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;

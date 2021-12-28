import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddAdmin from './pages/AddAdmin/AddAdmin';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';

import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NoteFound from './pages/NotFound/NoteFound';
import Purchase from './pages/Purchase/Purchase';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/explore'>
              <Explore></Explore>
            </Route>

            <PrivateRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='/addAdmin'>
              <AddAdmin></AddAdmin>
            </Route>

            <Route path='*'>
              <NoteFound></NoteFound>
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

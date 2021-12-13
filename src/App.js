import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../src/store';

/*paginas */
import Login from './view/login';
import NewUser from './view/newUser';
import Inicial from './view/inicial';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Inicial}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/newuser' component={NewUser} />
    </BrowserRouter>
    </Provider>
  );
}


export default App;

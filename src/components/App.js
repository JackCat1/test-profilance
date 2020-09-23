import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../state/store'
import { AppNavig } from './AppNavig';
import { Header } from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BackendProvider } from './BackendProvider';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <BackendProvider>
          <Header/>
          <AppNavig/>
        </BackendProvider>        
      </Router>      
    </Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <switch>
    <Router>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:id" component={ProductPage} />
    </Router>
    </switch>
  );
}

export default App;

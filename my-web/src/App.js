import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CardPage from './Pages/CardPage'
import RegisterPage from './Pages/RegisterPage'
import AddProduct from './Component/Products/addProduct'
import EditProduct from './Component/Products/editProduct'

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/card" component={CardPage} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/edit" component={EditProduct}/>
    </Router>
  );
}

export default App;

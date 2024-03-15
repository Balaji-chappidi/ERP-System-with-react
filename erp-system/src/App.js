import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Order from './components/Order/Order'
import Product from './components/Product/Product'


import './App.css';

const App = () => (
  <BrowserRouter>
  <Dashboard/>
  <Routes>
    <Route exact path='/' Component={Order}/>
    <Route path='/product' Component={Product}/>
  </Routes>
  </BrowserRouter>
)

export default App;

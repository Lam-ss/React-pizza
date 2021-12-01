import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import React from "react";
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import axios from 'axios';





function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  console.log(pizzas)

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact/>
        <Route path="/cart" render={() => <Cart />} exact/>
      </div>
    </div>
  );
}

export default App;

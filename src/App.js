import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import React from "react";
import { Home, Cart } from './pages';
import { Route } from 'react-router';





function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/bd.json')
      .then((resp) => resp.json())
      .then(json => {
        setPizzas(json.pizzas);
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

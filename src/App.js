import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';





// function App() {
//   const [pizzas, setPizzas] = React.useState([]);

  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/bd.json').then(({ data }) => {
  //     setPizzas(data.pizzas);
  //   });
  // }, []);

//   console.log(pizzas)

//   // return

// }



class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" render={() => <Cart />} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

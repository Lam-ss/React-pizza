import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import axios from 'axios';
import React, { Component, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()
  

  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home />} exact />
        <Route path="/cart" render={() => <Cart />} exact />
      </div>
    </div>
  )
}

export default App;




// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/bd.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" render={() => <Home items={this.props.items} />} exact />
//           <Route path="/cart" render={() => <Cart />} exact />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);

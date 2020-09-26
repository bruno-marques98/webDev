import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component{
  constructor(props){
    super(props);

    //Bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }
  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome
          </p>
        </header>
        <div className="App-main">
          <Product />
        </div>
      </div>
    );
  }
  
}



/*
function App() {
  function constructor(props){
    super(props);
    http.getProducts();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;

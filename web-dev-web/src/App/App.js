import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

//Services
import HttpService from '../services/http-service';


const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };

    //Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }
  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({ products: data })
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
      </div>
    );
    return (list);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Carousel>
            <Carousel.Item>
              <Figure>
                <Figure.Image
                  width={1000}
                  height={1500}
                  alt=""
                  src="https://img.freepik.com/fotos-gratis/po-azul-e-roxo-de-po-em-fundo-escuro_23-2148209061.jpg?size=626&ext=jpg"
                />
              </Figure>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Figure>
                <Figure.Image
                  width={1000}
                  height={1500}
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLwXnLCgid8vHLWxWwFyPpv8urlSbxjZ_VGg&usqp=CAU"
                />
              </Figure>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Figure>
                <Figure.Image
                  width={1000}
                  height={1500}
                  alt=""
                  src="https://ep01.epimg.net/elpais/imagenes/2019/02/06/album/1549453136_739670_1549558427_noticia_normal.jpg"
                />
              </Figure>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>

            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default App;

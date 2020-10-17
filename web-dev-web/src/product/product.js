/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import './product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component{
    render(){
        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: {this.props.price}$</p>
                    <button className="btn btn-primary">Add to wishList</button>
                </div>
            </div>
        );
    }
}
export default Product;

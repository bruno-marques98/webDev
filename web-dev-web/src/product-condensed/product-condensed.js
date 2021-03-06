/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import './product-condensed.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductCondensed extends Component{
    render(){
        return (
            <li className="list-group-item">
                <a className="btn btn-outline-danger">X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}
export default ProductCondensed;

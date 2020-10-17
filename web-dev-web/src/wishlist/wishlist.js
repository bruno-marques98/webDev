/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import './wishlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component{

    constructor(props){
        super(props);

        this.state = {wishList:[
            {
                title:"Bologna Killer",
                price:23.99,
                _id:"asdfgh123"
            },
            {
                title:"Foo Man Chu",
                price:4.54,
                _id:"ascvx4h123"
            },
            {
                title:"Pipe Dream",
                price:100,
                _id:"qwertyu123"
            }
        ]}
        //Bind functions
        this.createWishList = this.createWishList.bind(this);
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }
    
    render(){
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default WishList;

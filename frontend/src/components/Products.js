import React from 'react';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

                current_client: {
                    "firstname": "Peter",
                    "lastname" : "Roberts",
                    "balance": 2000,                    
                },
        };
    }
    
    render() {
        return (
            <div className="products">
            
                <table>
                <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product, i) => {
                        return (
                            <Product addToWishList={this.props.addToWishList} removeFromWishList={this.props.removeFromWishList} key={i} product={product}/>
                    )
                    } 
                )}
                </tbody>
                </table>
                
            </div>
        );
    }
}

export default Products;
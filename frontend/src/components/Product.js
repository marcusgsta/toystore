import React from 'react';

class Button extends React.Component {
    
    onClick(event) {
        const value = event.target.value;
        this.props.onSubmit(value);
    }
    render() {
        return (
            <button value={this.props.value} onClick={e => this.onClick(e)} className={this.props.class}>
            {this.props.name}
            </button>
        )
    };
}

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : this.props.product
        }
    }
    
    
    render() {
        
        const productImage = this.state.product.imagePath;
        return (
            <tr>
            <td><img className="product-image" alt={this.state.product.name} src={productImage} /></td>
            <td>{this.state.product.name}</td>
            <td>{this.state.product.price} millions</td>
            <td><Button name="Add" value={this.state.product.id} onSubmit={this.props.addToWishList} class="add"/></td>
            <td><Button name="Remove" value={this.state.product.id} onSubmit={this.props.removeFromWishList} class="remove"/></td>
            
            </tr>            
        )
    }
        
}

export default Product;


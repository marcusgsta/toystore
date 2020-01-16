import React from 'react';


function Product(props) {
    // get product from list of products
    const product = props.products.find(product => product.id == props.productId);
    const productImage = product.imagePath;

    return <div className="product-in-wishlist">
            <img className="product-image-small" alt={product.name} src={productImage} />
            <p>{product.name}</p>
            <p>{product.price} millions</p>
            </div>
}
class Button extends React.Component {
    
    onClick(event) {
        this.props.onSubmit(event.target.value);
    }
    
    render() {
        return (<div className="purchase-wrapper"><button className="purchase-button" onClick={e => this.onClick(e)} value={this.props.value}>{this.props.name}</button></div>)        
    }
}

class Wishlist extends React.Component {
    
    render() {
        return (
            <div className="wishlist">
            <h2>Wishlist</h2>
            <ul>
                {this.props.wishlist.map((productId,i) => <Product products={this.props.products} productId={productId} key={i}/>)}
            </ul>
            <div className="sum"><h3>Sum: {this.props.total}</h3></div>
            <Button onSubmit={this.props.purchase} value={this.props.total} name="Purchase"/>
            </div>
        );
    }
}

export default Wishlist;
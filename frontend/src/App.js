import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Products from './components/Products';
import Client from './components/Client';
import Wishlist from './components/Wishlist';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: {},
            wishlist : [],
            products : [],  
            total : 0
        };
        
        this.addToWishList = this.addToWishList.bind(this);
        this.removeFromWishList = this.removeFromWishList.bind(this);
        this.purchase = this.purchase.bind(this);
    }
    
    componentDidMount() {
        this.fetchProductData();
        this.fetchClientData();
    }
    
    componentDidUpdate() {
        // console.log(this.state);
        // console.log(this.state.products)
    }
    
    fetchClientData() {
        fetch('/client')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => {
                this.setState({client: data[0]});
            })
            .catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message)
            })
    }
    
    fetchProductData() {
        fetch('/products')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => {
                // console.log(data)
                this.setState({products: data});
            })
            .catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message)
            });
    }
    
    addToWishList(productId) {
        // console.log("add:", productId);
        // console.log(this.state.wishlist);
        
        if (productId !== undefined && !this.state.wishlist.includes(productId)) {
            this.setState({
                wishlist : this.state.wishlist.concat(productId)
            })            
        
        // get price of product from id
        // subtract from client's balance
        const product = this.state.products.find(product => product.id == productId);
        if (product.price !== undefined) {
            const client = this.state.client;
            client.balance = client.balance - product.price;
            this.setState({
                client : client
            })            
            // add to total
            this.setState({
                total : this.state.total + product.price
            })
        }
    }    
    }
    
    purchase(sum) {
        console.log("purchase", sum)
        // make a PUT request to the server
        if (sum !== undefined && this.state.client.balance !== undefined) {
            
            const myInit = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                cache: 'default',
                body: JSON.stringify({"balance": this.state.client.balance})
            };
            fetch('/update', myInit)
                .then(res => {
                    if (res.ok) {
                    return res.json();                        
                    }
                throw new Error("Network response was not ok.");
            }).then(data => {
                console.log(data);
            })
            // send updated balance
            // ( send updated products )
            // empty wishlist
            this.setState({wishlist : []})  
            // reset total 
            this.setState({total : 0})            
        }

    }
    
    removeFromWishList(productId) {
        // console.log("remove:", productId);
        
        if (productId !== undefined && this.state.wishlist.includes(productId) ) {
            
            // get index of product in wishlist
            let index = this.state.wishlist.indexOf(productId);
            this.state.wishlist.splice(index,1);
            
            this.setState({
                wishlist : this.state.wishlist
            })            
            // get price of product from id
            // add to client's balance
            const product = this.state.products.find(product => product.id == productId);
            if (product.price !== undefined) {
                const client = this.state.client;
                
                client.balance = client.balance + product.price;
                // Object.assign(this.state.client, ) 
                this.setState({
                    client : client
                })     
                this.setState({
                    total : this.state.total - product.price
                })     
            }
        }
    }
    
   render() {
       
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Welcome to the Toy Store, {this.state.client.firstname}.
      </header>
      <main className="main-wrapper">
          <Products addToWishList={this.addToWishList} removeFromWishList={this.removeFromWishList} products={this.state.products}/>
          <Wishlist products={this.state.products} wishlist={this.state.wishlist} total={this.state.total} purchase={this.purchase}/>
          <Client client={this.state.client}/>
      </main>
      
     
    </div>
  );
}
}    

export default App;

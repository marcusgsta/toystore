import React from 'react';


function Client(props) {
    
    return  <div className="client">
        <h2>{props.client.firstname} {props.client.lastname}</h2>
        <p>Available balance:</p>
        <p>{props.client.balance} millions</p>
        </div>
    }

export default Client;
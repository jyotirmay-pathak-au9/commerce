import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Loaf</div>
                    <div style={{color: '#777'}}>Qty: </div>
                    <div style={{color: '#777'}}> &#x20B9;</div>
                    <div className="cart-item-actions"></div>
                </div>                
            </div>
        )
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 5,
        background: '#ccc'
    }
}

export default Cart

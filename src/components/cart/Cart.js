import React, { Component } from 'react'

export class Cart extends Component {
    constructor(){
        super()

        this.state = {
            title : 'Loaf',
            qty: 1,
            price: 20
        }
        // this.increaseQty = this.increaseQty.bind(this)
    }
    
    increaseQty = () => {
        this.setState({qty: this.state.qty += 1 })
        // console.log(this.state)
    }

    decreaseQty = () => {
        const qty = this.state.qty
        if(qty === 1) {
            return
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    render() {
        const { qty, price} = this.state

       
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{this.state.title}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div style={{color: '#777'}}> &#x20B9; {price}</div>
                    <div className="cart-item-actions">
                        <img alt="Incrase" className="action-icons" src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" onClick={this.increaseQty} />
                        <img alt="Decrease" className="action-icons" src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" onClick={this.decreaseQty} />
                        <img alt="Delete" className="action-icons" src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
                    </div>
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

import React, {Component} from 'react';
import "./NavBar.css"
import { CartContext } from '../PlaceOrder/CartContext';

class NavBar extends Component {

    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        let {item,size,increment} = this.context;
        return ( 
            <div className='navbar_component'>
                <div className='navbar_logo' ></div>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='navbar_location'> Israel </div>
                </div>
                <div className='navbar_searchComponent'>
                    <div></div>
                    <div>
                        <input type="text" className='navbar_searchBox' />
                    </div>
                    <div className='navbar_searchboxdiv' >
                        <div className='navbar_searchIcon' />
                    </div>
                </div>
                <div className='navBar_signIn'>
                    <div style={ {fontSize: "14px"} }> Hello, Sign In</div>
                    <div style = {{fontWeight: 'bold'}}> Account </div>
                </div>
                <div className='navbar_cart'>
                    <div src= "" className='cart_image'/>
                    <div className='cart_ItemCount' />{size}<div/>
                </div>
            </div>
        );
    }
}

export default NavBar;
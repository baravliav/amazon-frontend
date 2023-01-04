import React,{ useContext, useEffect, useState }  from 'react';
import "./PlaceOrder.css"
import { Grid, Paper } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import { CartContext } from './CartContext';

function PlaceOrder(props) {

    const {item,size,increment} = useContext(CartContext);
    const [productDetails, setProductDetails] = useState([]);
    let {id} = useParams();

    const addToCart = function() {
        increment(productDetails)
    }

    useEffect(()=>{
        //api call
        let list =[
            { id:1 ,name : "Iphone10",  price: "4534", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
            { id:2 ,name : "Iphone11",  price:"76543456", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            { id:3 ,name : "Iphone12",  price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id:4 ,name : "Iphone13",  price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id:5 ,name : "Iphone12", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id:6 ,name : "Iphone13", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
    
        ]
        
        setProductDetails(list);

        let item = list.filter ( item => {
            if(item.id== id) return item;
        })
        setProductDetails(item[0]);
    },[]);

    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className="placeOrder_image" src= {productDetails.image}></img>
                </Grid>
                <Grid item xs={4}>
                  <div className="placeHolder_description">
                    <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>  {productDetails.name} </div>
                        <div>
                                1000+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="priceTag">Price: ${productDetails.price}</div>
                            <div className="textgap">FREE delivery</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined"className="placeorder_order">
                       
                        <button className="placeorder_button addtocart" onClick={addToCart}>Add To Cart</button>
                        <Link to="/checkout">
                            <button className="placeorder_button buynow">Buy Now</button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;
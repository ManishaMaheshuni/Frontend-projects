import React, { useContext } from 'react';
import "./ProductDisplay.css";
import start_icon from "../Images/star_icon.png";
import start_dull_icon from "../Images/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    let {product} = props;
    let {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
            </div>
            <div className="productDisplay-img">
                <img className='productDisplay-main-img' src={product.image} />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-stars">
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_icon} />
                <img src={start_dull_icon} />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">${product.old_price}</div>
                <div className="productDisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productDisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, warn as an undershirt or outer garment.
            </div>
            <div className="productDisplay-right-size">
                <h1>Select Size</h1>
                <div className="productDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productDisplay-right-category"><span>Category :</span> Women , T-Shirt, Crop Top</p>
            <p className="productDisplay-right-category"><span>Tags :</span> Modern , Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
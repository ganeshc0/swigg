
import { useDispatch, useSelector } from "react-redux";
import img1 from '../image/veg.png';
import img2 from '../image/Non_veg.png';
import { menu_url } from '../utils/config';
import './Style.css/cart.css';
import { useState } from "react";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.menu.value);
  // console.log("cart wala data",cartData)

  const [itemQuantities, setItemQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  

  const dispatch = useDispatch();

  const handleIncrement = (itemId, price) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: (itemQuantities[itemId] || 0) + 1,
    });
    setTotalPrice(totalPrice + price);
    console.log('item is ',itemQuantities[itemId]);

   
  };

  const handleDecrement = (itemId, price) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: itemQuantities[itemId] - 1,
      });
      setTotalPrice(totalPrice - price);
      
    }
  };
  
  const handleClearItem = () => {
    dispatch(clearCart())
  }
  
  const handleClear = ()=>{
    dispatch(
      clearCart());
  }

  return (
    <>
      <div class="cart">
        {cartData?.length !== 0 ?
          <>
            {
              cartData.map((cartItem) => {
                const itemId = cartItem.id;
                const itemPrice = cartItem.price / 100;
                const itemQuantity = itemQuantities[itemId] || 0;
                console.log("cardata item", cartItem);
                return (
                  <>
                  <div className="cartlist" key={itemId}>
                    <div className="cart-bar">
                      <div className="cart-img" style={{ height: "180px" }}>
                        <img className="imgcart" src={menu_url + cartItem.imageId} width="100%" height="100%" /><br />
                      </div>
                    </div>
                    <div className="cartitam">
                      <h1>{cartItem?.name}</h1>
                      {
                        cartItem.itemAttribute.vegClassifier === 'VEG' ? <img className='icone-img' src={img1} /> : <img className='icone-img2' src={img2} />

                      }
                      <h3>{'₹' + itemPrice}</h3>
                      <h5 className="cartdis" >{cartItem?.description}</h5>

                    </div>
                    <div className="cart-button">
                      <button className="btn" onClick={() => handleIncrement(itemId, itemPrice)}>
                        +
                      </button>
                      <input
                        value={itemQuantities[itemId] || 0}
                        className="input-cart"
                      />
                      <button
                        className="btn"
                        onClick={() => handleDecrement(itemId, itemPrice)}
                      >
                        -
                      </button>
                      <button className="btn" onClick={handleClear} >Clear</button>
                    </div>
                    <div className="price">
                         {"Price : ₹" + itemPrice * itemQuantity}
                    </div>
                       
                  </div>
                  
                 
                </> 
                )
              })
              
            }
             <div className="total-price">
                   <div className="main-total">
                     Total Price: ₹ {totalPrice.toFixed(2)}
                   </div>
                   <div>
                   <button className="btn" onClick={handleClearItem} >Clear</button>
                   </div>
                   
                  </div>
          </> : <div>
            <div>
              <img className="sem-img" src="https://www.freeiconspng.com/uploads/search-icon-png-23.png" width="50%" height="50%" />
            </div>
          </div>
        }

      </div>

    </>
  )
}

export default Cart;
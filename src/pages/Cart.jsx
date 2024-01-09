import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from '../components/Cartitem'


const Cart = () => {

  const [totalAmount, settotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);


  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ?

          (<div>


            <div>
              {
                cart.map((item, index) => {
                  return <Cartitem key={item.id} item={item} itemIndex={index} />
                }
                )
              }
            </div>

            <div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Item : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount : {totalAmount}</p>
                <button>
                  CheckOut Now
                </button>
              </div>
            </div>

          </div>) :

          (<div>
            <h1>Cart Empty.</h1>
            <Link to='/'>
              <button>Shop Now</button>
            </Link>
          </div>)
      }
    </div>
  )
}

export default Cart
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket },dispatch]= useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
             renderText={(value) =>(
                 <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className=" ">
                        <input type="checkbox" />
                        This contains a gift
                    </small>
                </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             prefix={"Rs "}
            />
            <button>Procced to checkout</button>
        </div>
    )
}

export default Subtotal

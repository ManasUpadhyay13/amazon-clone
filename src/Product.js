import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({id ,title,price,rating,image}) {
const [{ basket } , dispatch]= useStateValue();

    const addToBasket = () =>{
        // dispatch the item into the data layer
        dispatch({
            type :  'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p className="title">{title}</p>
                    <p className="product__price"></p>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                    <p>
                        <div className="porduct__rating">
                            {Array(rating).fill().map((_, i) =>(
                                <p>⭐</p>
                            ))}
                        </div>
                    </p>
                </div>
                <img src={image}  />
                <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product

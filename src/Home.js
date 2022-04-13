import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="amazon_bg.jpg" className="festival"/>
                </div>
            </div>

            <div className="home__row">
                <h4>Electronics   </h4>
                <div className="product__images">
                <Product
                    title="JBL Headphones with mic"
                    price={999.00}
                    rating={2}
                    image="./products/electronics/headphones.png"
                />
                <Product
                    title="Cosmic-Byte full mechanical keyboard"
                    price={1999.00}
                    rating={5}
                    image="./products/electronics/keyboard.png"
                />
                <Product
                    title="Logitech MX master 3"
                    price={7999.00}
                    rating={5}
                    image="./products/electronics/mouse.png"
                />
                <Product
                    title="Normal Base boosted speakers"
                    price={799.00}
                    rating={3}
                    image="./products/electronics/speaker.png"
                />

                </div>
            </div>

            <div className="home__row">
                <h4>Home Appliances  </h4>
                <div className="product__images">
                <Product
                    title="4-kg blanket for winters"
                    price={999.00}
                    rating={4}
                    image="./products/home_app/blanket.png"
                />
                <Product
                    title="Samsung 200L refrigirator"
                    price={11999.00}
                    rating={4}
                    image="./products/home_app/fridge.png"
                />
                <Product
                    title="Soft cotton pillows"
                    price={999.00}
                    rating={4}
                    image="./products/home_app/pillow.png"
                />
                <Product
                    title="Table fan form Ikea"
                    price={999.00}
                    rating={4}
                    image="./products/home_app/table_fan.png"
                />

                </div>
            </div>

            <div className="home__row">
                <h4>Decor  </h4>
                <div className="product__images">
                <Product
                    title="4 - member dinnig family"
                    price={3999.00}
                    rating={4}
                    image="./products/decor/dinnig_table.png"
                />
                <Product
                    title="Beautiful photo frame"
                    price={399.00}
                    rating={3}
                    image="./products/decor/photo_frame.png"
                />
                <Product
                    title="Ikea - family store table"
                    price={999.00}
                    rating={5}
                    image="./products/decor/table.png"
                />
                <Product
                    title="Awesome wall stickers"
                    price={3999.00}
                    rating={4}
                    image="./products/decor/wall_stickers.png"
                />

                </div>
            </div>

            <div className="home__row">
                <h4>Personal Hygine </h4>
                <div className="product__images">
                <Product
                    title="Body lotion for smooth body"
                    price={499.00}
                    rating={4}
                    image="./products/personal/lotion.png"
                />
                <Product
                    title="Collection of makeup brush"
                    price={599.00}
                    rating={3}
                    image="./products/personal/makeup_brush.png"
                />
                <Product
                    title="Face powder for instant glow"
                    price={499.00}
                    rating={2}
                    image="./products/personal/powder.png"
                />
                <Product
                    title="Sunscreen to protect body form sun"
                    price={499.00}
                    rating={4}
                    image="./products/personal/sunscreen.png"
                />

                </div>
            </div>

            <div className="home__row">
                <h4>Gym Accessories  </h4>
                <div className="product__images">
                <Product
                    title="20-kg dumbells for normal exercise"
                    price={499.00}
                    rating={2}
                    image="./products/gym/dumbell.png"
                />
                <Product
                    title="Skipping rope"
                    price={299.00}
                    rating={4}
                    image="./products/gym/rope.png"
                />
                <Product
                    title="Amaze fit's tradmill for running(max -speed : 30kmph)"
                    price={2999.00}
                    rating={5}
                    image="./products/gym/treadmill.png"
                />
                <Product
                    title="20kg plates for exercise"
                    price={999.00}
                    rating={4}
                    image="./products/gym/weights.png"
                />

                </div>
            </div>

            <div className="home__row">
                <h4>Clothing   </h4>
                <div className="product__images">
                <Product
                    title="Regular M-size pants"
                    price={499.00}
                    rating={4}
                    image="./products/clothing/pants.png"
                />
                <Product
                    title="Medium size shirt"
                    price={299.00}
                    rating={2}
                    image="./products/clothing/shirts.png"
                />
                <Product
                    title="Summer shorts"
                    price={199.00}
                    rating={5}
                    image="./products/clothing/shorts.png"
                />
                <Product
                    title="wedding Lehenga"
                    price={800000.00}
                    rating={5}
                    image="./products/clothing/lehenga.png"
                />

                </div>
            </div>

            
        </div>
    )
}

export default Home

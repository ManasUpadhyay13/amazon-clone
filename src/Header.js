import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{basket , user} , dispatched] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img src="logo_in.png" alt=" logo " className="header__logo" />

            </Link>

            <div className="search__box">
                <input type="text" />
                <SearchIcon className="search__boxIcon" />
            </div>

            <img src="flag.jpg" className="flag" />

            
            <div className="header__nav">
                <Link to={!user && "/login"}>
                <div onClick= {handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">{!user ? "Hello Guest" : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
                    </Link>
             

                

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

               
                <Link to="/checkout">
                    {user ?
                    <div className="header__optionBasket">
                         <ShoppingCartOutlinedIcon className="basket"/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}</span> 
                    </div> : ""}
                </Link>
                



            </div>
        </div>
    )
}

export default Header

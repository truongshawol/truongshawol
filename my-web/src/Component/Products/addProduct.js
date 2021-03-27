import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../../CSS/AddProduct.css'

import {AddProductAction} from '../../actions/FetchProductsAction'
import HomePage from '../../Pages/HomePage';

function AddProduct({AddProductAction, message}) {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [price, setPrice] = useState('')

    function handleChangeName(e) {
        setName(e.target.value)
    } 
    function handleChangePrice(e) {
        setPrice(e.target.value)
    } 
    function handleChangeAvatar(e) {
        setAvatar(e.target.value)
    } 

    function handleAddProduct() {
        const data = {
            name: name,
            ava: avatar,
            price: price
        }
        console.log(data)
        AddProductAction(data)
    }
    
    return (
        <div className="add_product">
                <div className="add_product_container">
                <h1>Add Product</h1>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        onChange={handleChangeName}   
                    >
                    </input>
                </div>
                <div>
                <label>Avatar: </label>
                    <input 
                        type="text" 
                        onChange={handleChangeAvatar}
                    >
                    </input>
                </div>
                <div>
                <label>Price: </label>
                    <input 
                        type="text"  
                        onChange={handleChangePrice}
                    >
                    </input>
                </div>
                <button onClick={handleAddProduct}>ENTER</button>
                {message}
                <Link to="/"><div className="closs">X</div></Link>
            </div>
        </div>
    );
}
function mapStateToProps({addProduct}) {
    return {
        message: addProduct.message
    }
}

export default connect(mapStateToProps, {AddProductAction})(AddProduct);
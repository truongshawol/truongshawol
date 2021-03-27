import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/AddProduct.css'

function EditProduct({params}) {
    console.log("id",params)
    return (
        <div className="add_product">
                <div className="add_product_container">
                <h1>Edit Product</h1>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"   
                    >
                    </input>
                </div>
                <div>
                <label>Avatar: </label>
                    <input 
                        type="text" 
                    >
                    </input>
                </div>
                <div>
                <label>Price: </label>
                    <input 
                        type="text"  
                    >
                    </input>
                </div>
                <button>ENTER</button>
                <Link to="/"><div className="closs">X</div></Link>
            </div>
        </div>
    );
}

export default EditProduct;
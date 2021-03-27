import React, {useEffect, useRef, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import '../../CSS/Products.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {FetchProductsAction, DeleteProductAction} from '../../actions/FetchProductsAction'
import {AddCountCard} from '../../actions/AddCountCart'
import {AddCardAction} from '../../actions/AddCardAction'
import EditProduct from './editProduct'
import HomePage from '../../Pages/HomePage';


function Products({FetchProductsAction, DeleteProductAction, listProducts, total, AddCountCard, nav, AddCardAction}) {
    const [count, setCount] = useState(1)
    const typingTimeoutRef = useRef(null)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        key: ''
    })

    useEffect(()=>{
        setPagination({
            ...pagination,
            page: 1,
            key: nav
        })
    },[nav])

    useEffect(()=>{
        FetchProductsAction(pagination)
    },[pagination])

    function onButtonNext() {
        setPagination({
            ...pagination,
            page: pagination.page + 1
        })
    }
    function onButtonPrev() {
        setPagination({
            ...pagination,
            page: pagination.page - 1
        })
    }
    function handelValueChange(e) {
        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(()=>{
            setPagination({
                ...pagination,
                page: 1,
                key: e.target.value
            })
        }, 500)
    }
        
    return (
       <div className="booth">
            <div className="search">
                <div className="search-icon">
                    <p><FontAwesomeIcon icon="search" /></p>
                </div>
                <input 
                    type="text"
                    onChange={handelValueChange}
                ></input>
            </div>
            <div className="booth_list">
                {   
                    listProducts.map((item, index) => {
                        return (
                            <div key={index} className="items">
                                <div className="items_img">
                                    <img src={item.ava}></img>
                                </div>
                                <div className="items_title">
                                    <p>{item.name}</p>
                                </div>
                                <div className="items_price">
                                    <p><span>prince: </span>{item.price}</p>
                                </div>
                                <div className="add_card" onClick={()=>{
                                            setCount(count + 1)
                                            AddCountCard(count)
                                }
                                }>
                                    <p>add to card</p>
                                </div>
                                <div onClick={()=>{
                                        DeleteProductAction(item._id)
                                        setPagination({
                                            ...pagination,
                                            page: 1
                                        })
                                    }} 
                                    className="item_delete"
                                >
                                    <FontAwesomeIcon icon="trash-alt"/>
                                </div>
                                <div className="item_repair">
                                    <Link to="/edit"><FontAwesomeIcon icon="edit"/></Link>
                                </div>
                            </div>
                            )
                    }) 
                }
            </div>
            <div className="addproduct"><Link to="/addproduct">Add Product!</Link></div>
            <div className="booth_btn">
                <button disabled={pagination.page == 1} onClick={onButtonPrev}>
                    <FontAwesomeIcon icon="caret-square-left"/>
                </button>
                <span>{pagination.page}</span>
                <button disabled={pagination.page == total} onClick={onButtonNext}>
                    <FontAwesomeIcon icon="caret-square-right"/>
                </button>
            </div>
       </div>
    )
}

function mapStateToProps ({fetchProducts, deleteProduct}) {
    return {
        listProducts: fetchProducts.list.products,
        total: fetchProducts.list.total,
        mesage: deleteProduct.message
    }
}

export default connect(mapStateToProps, {FetchProductsAction, DeleteProductAction, AddCountCard, AddCardAction})(Products);
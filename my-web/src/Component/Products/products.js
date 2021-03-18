import React, {useEffect, useRef, useState} from 'react';
import {FetchProductsAction} from '../../actions/FetchProductsAction'
import {AddCountCard} from '../../actions/AddCountCart'
import {connect} from 'react-redux'
import '../../CSS/Products.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {AddCardAction} from '../../actions/AddCardAction'
import { Link } from 'react-router-dom';



function Products({FetchProductsAction, listProducts, total, AddCountCard, nav, AddCardAction}) {
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
    function onClickAddCard() {
        setCount(count + 1)
        AddCountCard(count)
        AddCardAction()
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
                                <div className="add_card" onClick={onClickAddCard}><p>add to card</p></div>
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

function mapStateToProps ({fetchProducts}) {
    return {
        listProducts: fetchProducts.list.products,
        total: fetchProducts.list.total,
    }
}

export default connect(mapStateToProps, {FetchProductsAction, AddCountCard, AddCardAction})(Products);
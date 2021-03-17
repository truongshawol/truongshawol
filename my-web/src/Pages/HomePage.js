import React, { useState } from 'react'
import {connect} from 'react-redux'
import '../CSS/HomePage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, Redirect} from 'react-router-dom'
import Slider from '../Component/slide/slider'
import Products from '../Component/products'
import menu from '../routers'


function HomePage({sodem}) {
    const [valueKey, setValueKey] = useState('')
    return (
        <div>
            <div className="header container-fluid">
                <div className="header_user">
                    <h3><FontAwesomeIcon icon="user-circle" /></h3>
                    <p>shop may anh</p>
                </div>
                <div className="header_menu">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/card" ><FontAwesomeIcon icon="cart-arrow-down"/> card
                            {
                                sodem == 0 ? "" : <div className="countCard">{sodem}</div>
                            }
                    </Link>
                    <Link className="header_menu_user">
                        <p><FontAwesomeIcon icon="bars"/></p>
                        <div className="header_menu_user-log">
                            <div className="log-menu"><Link to="/login">Login</Link></div>
                            <div className="log-menu"><Link to="/" onClick={()=>localStorage.removeItem("token")}>Logout</Link></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container container_slider">
                <Slider></Slider>
            </div>

            <div className="container-fluid nav">
                {
                    menu.map((item) => {
                        return (
                            <div className="nav_item">
                                <p onClick={()=>{setValueKey(item.name)}}>{item.name}</p>
                                <div className="nav_children" >
                                    {item.children.map((itemChildren) => {
                                        return (
                                            <div className="children_item" >
                                                <p onClick={()=>{setValueKey(itemChildren.name)}}>{itemChildren.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>   
                        )
                    })
                }
            </div>

            <div className="container productHome">
                <Products nav={valueKey}></Products>
            </div>
            <div className='container-fluid footer'>
                <div className="footer_left">
                    
                </div>
                <div className="footer_right">
                    
                </div>
                <div className="footer_end">
                    <p>@by Kiều Văn Trường</p>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps ({countCard}) {
    return {
        sodem: countCard.cart
    }
}

export default connect(mapStateToProps)(HomePage);
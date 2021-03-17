import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import '../CSS/CardPage.css'
import ava from '../IMG/5.jpg'
import {CardAction} from '../actions/AddCardAction'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CardPage = ({CardAction, listCard}) => {
    const [soluong, setSoluong] = useState(1)
    useEffect(()=> {
        CardAction()
    }, [])
    return (
        <div className='cardpage'>
           <div className="card">
                <div className='card_title'>
                   <h3>Giỏ hàng</h3>
                </div>
                <div className='card_item'>
                    {
                        listCard.map(item => {
                            return (
                                <div className='item'>
                                <div style={{width: "100%", display:"flex"}}>
                                    <div className='item_ava'>
                                        <img src={item.ava}></img>
                                    </div>
                                    <div style={{width: "60%", height:'100%', paddingLeft: '10px'}}>
                                        <div className='item_title'>{item.name}</div>
                                        <div className='item_thongso'>
                                            <p>- Trọng lượng: 526g</p>
                                            <p>- Cảm biến: X-Trans CMOS 4 26.1MP</p>
                                            <p>- Kích thước: 134.6 x 92.8 x 63.8 mm</p>
                                    </div>
                                    <div style={{display: 'flex', height:'11%'}}>
                                        <div className='item_soluong'>
                                            <p style={{margin: '0px'}}>Số lượng: {soluong} 
                                            <FontAwesomeIcon onClick={()=>{setSoluong(soluong+1)}} style={{marginLeft: '7px'}} icon="plus-circle"/>
                                            <FontAwesomeIcon onClick={()=>{setSoluong(soluong-1)}} style={{marginLeft: '7px'}} icon="minus-circle"/>
                                            </p>
                                            
                                        </div>
                                        <div className='item_gia'>
                                            <p>Giá: {item.price}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                <div className='card_priceAll'>
                    <h3>Tổng cộng:
                    </h3>
                    <button>Thanh toán</button>
                </div>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps ({card}) {
    return {
        listCard: card.data
    }
}

export default connect(mapStateToProps, {CardAction})(CardPage);
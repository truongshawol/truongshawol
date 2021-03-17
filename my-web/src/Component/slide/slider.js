import React, { useState } from 'react'
import '../../CSS/slider.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ImgSlide from './imgSlide'
import img1 from '../../IMG/14.jpg'
import img2 from '../../IMG/12.jpg'
import img3 from '../../IMG/11.jpg'
import img4 from '../../IMG/15.jpg'
import img5 from '../../IMG/7.jpg'


function Slider() {
    let sliderArr = [
        <ImgSlide src={img1}/>,
        <ImgSlide src={img2}/>,
        <ImgSlide src={img3}/>,
        <ImgSlide src={img4}/>,
        <ImgSlide src={img5}/>]
    const [x, setX] = useState(0)

    function nextRight() {
        x === -100*(sliderArr.length - 1) ? setX(0) : setX(x - 100)
        clearTimeout(timer)
    }
    function nextLeft() {
        x === 0 ? setX(-100*(sliderArr.length - 1)) : setX(x + 100)
        clearTimeout(timer)
    }
    const timer = setTimeout(() => {
        x === -100*(sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }, 4000)
    
    return (
        <div className="slider">
            {sliderArr.map((slide, index) => {
                return (
                    <div className="slide" style={{transform: `translateX(${x}%)`}} key={index}>{slide}</div>
                )
            })}
            <div className="slider_button-Left" onClick={nextLeft}>
                <FontAwesomeIcon icon="chevron-left"/>
            </div>
            <div className="slider_button-right" onClick={nextRight}>
                <FontAwesomeIcon icon="chevron-right"/>
            </div>
        </div>
    )
}

export default Slider
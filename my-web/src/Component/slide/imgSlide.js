import React from 'react'

function ImgSlide(props) {
    let imgStyle = {
        width: 100 +"%",
        height: "auto"
    }
    return (
        <div>
            <img src={props.src} style={imgStyle} alt=""></img>
        </div>
    )
}

export default ImgSlide
import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primary, secondary}) => {
    const  imgSource = useRef(null);
    return (
        <img src={primary} 
        onMouseOver={() => {
            imgSource.current.src=secondary
        }}
        onMouseOut={() => {
            imgSource.current.src=primary
        }}
        alt=""
        ref={imgSource}/>
    );
}

export default ImageToggleOnMouseOver;
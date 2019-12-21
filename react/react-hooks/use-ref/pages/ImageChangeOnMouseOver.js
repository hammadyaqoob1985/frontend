import React from 'react';
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOverMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primary="/static/speakers/bw/Speaker-187.jpg" 
            secondary="/static/speakers/Speaker-187.jpg"/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primary="/static/speakers/bw/Speaker-1124.jpg" 
            secondary="/static/speakers/Speaker-1124.jpg"/>
        </div>

    );
}

export default ImageChangeOverMouseOver;
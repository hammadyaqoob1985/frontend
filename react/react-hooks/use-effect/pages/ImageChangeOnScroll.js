import React from 'react';
import ImageToggleOnScroll from "../src/ImageToggleOnScroll"

const ImageChangeOnScroll = () => {
    return (
        <div>
           {
               [187,823,1124,1269].map(speakerId => {
                  return( <div key={speakerId}>
                       <ImageToggleOnScroll primary={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                       secondary={`/static/speakers/Speaker-${speakerId}.jpg`}>
                       </ImageToggleOnScroll>
                   </div>
                  );
               })
           }
        </div>

    );
}

export default ImageChangeOnScroll;
import React, {useRef, useEffect, useState} from 'react';

const ImageToggleOnScroll = ({primary, secondary}) => {

    const imgRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        window.addEventListener("scroll",scrollHandler);
        setInView(isInView())
        setIsLoading(false);
        return (
            () => {
                window.removeEventListener("scroll",scrollHandler);
            });
    },[isLoading]);
    
    const isInView = () => {
        if(imgRef.current){
            const rect = imgRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight; 
        }
        return false;
    };

    const[inView, setInView] = useState(isInView());
    

    const scrollHandler = () => {
        setInView(() => {return isInView()})
    }
    return isLoading ? null : (
        <img src={inView ? secondary:primary} 
        alt=""
        ref={imgRef}
        width="200"
        height="200"/>
    );
}

export default ImageToggleOnScroll;
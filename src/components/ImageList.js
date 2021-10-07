import React from 'react';

const ImageList = (props) => {
    // console.log(props.images);
    const images = props.images.map((images) => {
        return <img key={images.id} src={images.urls.regular} alt={images.description}/>
    })
    return <div>{images}</div>
}

export default ImageList;
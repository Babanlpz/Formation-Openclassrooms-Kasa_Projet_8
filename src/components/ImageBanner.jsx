import React, { useState } from 'react'
import "./ImageBanner.scss"

function ImageBanner (props) {

const pictures = props.pictures;

const [currentPicture , setCurrentPicture] = useState(0);

/**
 * @param {*} i 
 * @returns 
 */
const getClassName = (i) => {
  if (i === currentPicture) return "show";
  return "";
};

/**
 *  @returns {void}
 */
const moveToNext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length);
};

/**
 * 
 * @returns {void}
 */
const moveToPrevious = () => {
  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
    return;
  }
  setCurrentPicture(currentPicture - 1);
}


/**
 * 
 * @returns {boolean}
 */
const arePicturesAvailable = () => {
  return pictures && pictures.length > 0;
};

/**
 * 
 * @returns {JSX.Element}
 */
const getCarouselOrDefaultImage = () => {
  if (!arePicturesAvailable()) {
    return <img src="image3.png" alt="" className='show image__apartment'style={{ height: '223px', filter: 'brightness(70%)'}}/>;
  }
    return pictures.map((pic, i) => (
    <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
  ));
};

  return (
    <div className='image__banner banner__apartment'> 
   
      <div className='image__container'>
          {getCarouselOrDefaultImage()}
      </div>
     
        {arePicturesAvailable() && (
        <>
        <button className="btn btn-previous" onClick={moveToPrevious}>
        <i className="fas fa-chevron-left"></i>
        </button>
         <span className='slide-counter'>
           {currentPicture + 1} / {pictures.length}
         </span>
        <button className="btn btn-next" onClick={moveToNext}>
        <i className="fas fa-chevron-right"></i>
        </button>
        </>
        )}
    </div>
  );
}

export default ImageBanner
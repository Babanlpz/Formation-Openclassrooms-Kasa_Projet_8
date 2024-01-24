import React, { useState } from 'react';
import "./ImageBanner.scss"

function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  }

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="/image3.png" alt="bannière" className='show image__apartment' style={{ height: '223px', filter: 'brightness(70%)' }} />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="bannière" className={getClassName(i)}></img>
    ));
  };

  const shouldRenderControls = arePicturesAvailable() && pictures.length > 2;

  return (
    <div className='image__banner banner__apartment'>
      <div className='image__container'>
        {getCarouselOrDefaultImage()}
      </div>

      {shouldRenderControls && (
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

export default ImageBanner;
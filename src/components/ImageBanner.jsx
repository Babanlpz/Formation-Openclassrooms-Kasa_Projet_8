import React, { useState } from 'react'
import "./ImageBanner.scss"

function ImageBanner (props) {

  /*const imageUrl  = props.imageUrl ? props.imageUrl : "image3.png"*/
const pictures = props.pictures

const [currentPicture , setCurrentPicture] = useState(0)

const getClassName = (i) => {
  if (i === currentPicture) return "show"
  return ""
}

const moveToNext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length)
}

const moveToPrevious = () => {
  const newCurrentPicture = currentPicture - 1
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1)
    return
  }
  setCurrentPicture((currentPicture - 1) % pictures.length)
}

const arePicturesAvailable = () => {
  return pictures && pictures.length > 0
}

const getCarouselOrDefaultImage = () => {
  if (!arePicturesAvailable()) {
    return <img src="image3.png" alt="" className='show' />
  }
    return pictures.map((pic, i) => (
    <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
  ))
}

  return (
    <div className='image__banner'> 
   
      <div className='image__container'>
          {getCarouselOrDefaultImage()}
      </div>
        {arePicturesAvailable() &&
        <>
        <button className="btn btn-next" onClick={moveToNext}>
        <i class="fas fa-chevron-right"></i>
        </button>
        <button className="btn btn-previous" onClick={moveToPrevious}>
        <i class="fas fa-chevron-left"></i>
        </button>
        </>}
    </div>
  )
}

export default ImageBanner
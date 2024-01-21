import React, { useState } from 'react'
import "./ImageBanner.scss"


/**
 * Les props sont des données que l'on passe de parent à enfant lorsqu'on rend un composant.
 *  Ces données permettent de configurer ou personnaliser le comportement du composant enfant.
 * @param {*} props 
 * @returns 
 */

function ImageBanner(props) {

const pictures = props.pictures;

const [currentPicture , setCurrentPicture] = useState(0);

/**
 * La fonction getClassName retourne "show" si l'argument i est égal à la variable currentPicture, sinon elle retourne une chaîne vide.
 * @param {*} i 
 * @returns 
 */
const getClassName = (i) => {
  if (i === currentPicture) return "show";
  return "";
};

/**
 * La fonction moveToNext incrémente la variable d'état currentPicture pour passer à l'image suivante dans un tableau cyclique.
 *  @returns {void}
 */
const moveToNext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length);
};

/**
 * La fonction moveToPrevious ajuste la variable d'état currentPicture pour afficher l'image précédente dans un tableau cyclique.
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
 * La fonction arePicturesAvailable retourne vrai si la variable pictures existe et si sa longueur est supérieure à zéro, indiquant ainsi la disponibilité d'images.
 * @returns {boolean}
 */
const arePicturesAvailable = () => {
  return pictures && pictures.length > 0;
};

/**
 * La fonction getCarouselOrDefaultImage retourne un élément d'image avec des propriétés spécifiées si aucune image n'est disponible,
 *  sinon elle génère un ensemble d'éléments d'image basé sur le tableau pictures avec des classes déterminées par la fonction getClassName.
 * @returns {JSX.Element}
 */
const getCarouselOrDefaultImage = () => {
  if (!arePicturesAvailable()) {
    return <img src="./image3.png" alt="banniére" className='show image__apartment'style={{ height: '223px', filter: 'brightness(70%)'}}/>;}
    return pictures.map((pic, i) => (
    <img key={pic} src={pic} alt="banniére" className={getClassName(i)}></img>
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
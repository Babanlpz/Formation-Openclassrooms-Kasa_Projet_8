import React, {useState} from "react";
import "./DescriptionPanel.scss"; 


/**
 * La fonction DescriptionPanel rend un panneau déroulant qui affiche un titre avec une 
 * flèche vers le haut ou vers le bas pour montrer ou masquer le contenu associé. 
 * Elle utilise l'état local isOpened pour gérer l'état d'ouverture/fermeture du panneau, 
 * et la fonction showContent pour basculer cet état lorsqu'on clique sur la flèche. 
 * Le contenu est affiché si le panneau est ouvert.
 * @param {*} props 
 * @returns 
 */
function DescriptionPanel(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(180);

  const toggleContent = () => {
    setIsOpened(!isOpened);
    setRotateAngle(rotateAngle === 0 ? 180 : 0);
  };

  const chevronStyle = {
    transform: `rotate(${rotateAngle}deg)`,
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className='apartment__description'>
      <button className='description__header' onClick={toggleContent}>
        <span>{props.title}</span>
        <i
          className='fas fa-chevron-down'
          style={chevronStyle}
        ></i>
      </button>
      {isOpened && <p className='description__content'>{props.content}</p>}
    </div>
  );
}

export default DescriptionPanel;

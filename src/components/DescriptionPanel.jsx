import React, {useState} from "react";
import "./DescriptionPanel.scss"; 

function DescriptionPanel(props) {
    const [isOpened, setIsOpened] = useState(false);
    const [rotateAngle, setRotateAngle] = useState(180); // Définir à 180 au départ
  
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


import React, {useState} from "react";
import "./DescriptionPanel.scss"; 

function DescriptionPanel(props) {

    const [isOpened, setIsOpened] = useState(false)
    const showContent = () => {
        setIsOpened(!isOpened)
    }

    return (

            <div className='apartment__description'>
                <button className='description__header'>
                    <span>{props.title}</span>
                    {!isOpened && <i class="fas fa-chevron-up" onClick={showContent}></i>}
                    {isOpened && <i class="fas fa-chevron-down" onClick={showContent}></i>}
                </button>
                {isOpened && <p className='description__content'>{props.content}</p>}
            </div>

    );
}

export default DescriptionPanel



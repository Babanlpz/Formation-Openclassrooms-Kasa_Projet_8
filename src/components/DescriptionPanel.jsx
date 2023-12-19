import React from "react";
import "./DescriptionPanel.scss"; 

function DescriptionPanel() {
    return (

            <div className='apartment__description'>
                <p className='description__header'>
                <span>Description</span>
                <i class="fas fa-chevron-down"></i>
                </p>
                <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quia beatae facere sequi, saepe laboriosam illum nesciunt obcaecati rerum illo adipisci dolore distinctio ratione ea cum animi, quos commodi provident.</p>
            </div>

    );
}

export default DescriptionPanel


import React from 'react';
import './styles.css';

const Introduction = ({
    image,
    title,
    description,
    height,
}) => {
    return (
        <div className='root-prod'>

            {/* IMAGE */}
            <div className='img-prod'>
                <img src={image} style={{height: height, borderRadius: '2.5px'}} />
            </div>

            {/* DESCRIPTION */}
            <div className='description-prod'>
                <div className='description-title-prod'>
                    {title}
                </div>
                <div className='description-desc-prod'>
                    {description}
                </div>
                <div className='description-btn-prod'>
                    <button className='navs-btn-header'>
                        Selengkapnya
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Introduction;
